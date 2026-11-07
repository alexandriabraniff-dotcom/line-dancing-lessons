#!/usr/bin/env node
/* ── Upload a competition photo gallery ─────────────────────────────────────
   Runs on your computer only. It is not part of the site build.

     node scripts/upload-gallery.mjs <slug> <path-to-photo-folder> [options]

   Options
     --name "Dance Till You Drop Dead"  name used in the default alt text
                                        (defaults to the slug, title-cased, without the year)
     --no-zip                           skip building / uploading the "Download all" zip
     --concurrency 4                    parallel uploads

   What it does
     1. Uploads every image in the folder to Cloudinary under
        wildflower/competitions/<slug>/. Subfolders (round-1/, finals/ ...)
        become gallery sections. Photos already on Cloudinary are skipped, so
        it's safe to re-run (for example after adding more photos).
     2. Photos bigger than the Cloudinary plan's upload limit are resized to a
        4000px long edge, high quality JPEG, and listed at the end.
     3. Writes lib/galleries/<slug>.json (photo IDs, sizes, sections, alt
        text). Alt text and section labels you've edited are kept on re-runs.
     4. Builds a zip of the original files and uploads it to Vercel Blob, then
        stores the download link in the manifest. Without a Blob token it
        leaves the zip on your computer so you can share it from Google Drive
        and paste the link into `zipOverride` in the manifest.

   Keys go in .env.gallery in the project root (never committed, never read by the site):
     CLOUDINARY_CLOUD_NAME=...
     CLOUDINARY_API_KEY=...
     CLOUDINARY_API_SECRET=...
     BLOB_READ_WRITE_TOKEN=...        optional, from Vercel > Storage > Blob
*/

import fs from "node:fs";
import fsp from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { v2 as cloudinary } from "cloudinary";
import sharp from "sharp";
import { ZipArchive } from "archiver";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const GALLERY_DIR = path.join(ROOT, "lib", "galleries");
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif", ".tif", ".tiff"]);
const RESIZE_LONG_EDGE = 4000;
const DEFAULT_MAX_BYTES = 10 * 1024 * 1024; // Cloudinary free plan image limit
const BIG_ZIP_BYTES = 500 * 1024 * 1024;

/* ── Helpers ── */
const log = (...a) => console.log(...a);
const fail = (msg) => {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
};
const mb = (b) => `${(b / 1024 / 1024).toFixed(1)} MB`;
const slugify = (s) =>
  s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "photo";
const titleCase = (s) => s.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()).trim();
const natural = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" }).compare;

async function withRetry(fn, label, tries = 3) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt >= tries) throw new Error(`${label}: ${err?.message ?? err}`);
      await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }
}

async function pool(items, size, worker) {
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(size, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        await worker(items[i], i);
      }
    })
  );
}

/* ── Arguments and keys ── */
const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(name);
  if (i === -1) return undefined;
  const value = args[i + 1];
  args.splice(i, 2);
  return value;
};
const noZip = args.includes("--no-zip");
if (noZip) args.splice(args.indexOf("--no-zip"), 1);
const nameArg = flag("--name");
const concurrency = Number(flag("--concurrency") ?? 4);
const [slug, folderArg] = args;

if (!slug || !folderArg) fail("Usage: node scripts/upload-gallery.mjs <slug> <path-to-photo-folder> [--name \"Event Name\"] [--no-zip]");
if (!/^[a-z0-9-]+$/.test(slug)) fail(`The slug "${slug}" should only use lowercase letters, numbers and dashes.`);
const folder = path.resolve(folderArg);
if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) fail(`Folder not found: ${folder}`);

const envFile = path.join(ROOT, ".env.gallery");
if (fs.existsSync(envFile)) process.loadEnvFile(envFile);
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, BLOB_READ_WRITE_TOKEN } = process.env;
if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  fail("Missing Cloudinary keys. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET to .env.gallery");
}
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

const prefix = `wildflower/competitions/${slug}`;
const manifestPath = path.join(GALLERY_DIR, `${slug}.json`);
const previous = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : null;
const eventName = nameArg ?? titleCase(slug.replace(/-\d{4}$/, ""));

/* ── 1. Find the photos ── */
async function scan(dir, section) {
  const found = [];
  for (const entry of await fsp.readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      /* Top-level subfolders become sections; anything deeper joins its parent's section */
      found.push(...(await scan(full, section ?? { id: slugify(entry.name), folder: entry.name })));
    } else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
      found.push({ file: full, section: section?.id ?? "", sectionFolder: section?.folder ?? "" });
    }
  }
  return found;
}

const local = (await scan(folder, null)).sort((a, b) => natural(a.section, b.section) || natural(a.file, b.file));
if (local.length === 0) fail(`No photos found in ${folder}`);

/* Fixed public IDs (no random suffix) are what make re-runs skip existing photos */
const usedIds = new Set();
for (const p of local) {
  const base = `${prefix}/${p.section ? `${p.section}/` : ""}${slugify(path.parse(p.file).name)}`;
  let id = base;
  for (let n = 2; usedIds.has(id); n++) id = `${base}-${n}`;
  usedIds.add(id);
  p.id = id;
  p.bytes = fs.statSync(p.file).size;
}
log(`\nFound ${local.length} photos in ${folder}`);

/* ── 2. Plan limit and what's already uploaded ── */
let maxBytes = DEFAULT_MAX_BYTES;
try {
  const usage = await cloudinary.api.usage();
  maxBytes = usage?.media_limits?.image_max_size_bytes ?? maxBytes;
  log(`Cloudinary plan: ${usage?.plan ?? "unknown"}, max image upload ${mb(maxBytes)}`);
} catch {
  log(`Couldn't read the Cloudinary plan limits, assuming ${mb(maxBytes)} per image`);
}

const existing = new Map();
let cursor;
do {
  const res = await withRetry(
    () => cloudinary.api.resources({ type: "upload", resource_type: "image", prefix: `${prefix}/`, max_results: 500, next_cursor: cursor }),
    "Listing existing photos"
  );
  for (const r of res.resources) existing.set(r.public_id, r);
  cursor = res.next_cursor;
} while (cursor);
log(`${existing.size} already on Cloudinary under ${prefix}/\n`);

/* ── 3. Upload ── */
const resized = [];
const failed = [];
const results = new Map(existing);
let uploaded = 0;

async function shrink(file) {
  for (const quality of [90, 85, 80, 72]) {
    const buffer = await sharp(file)
      .rotate()
      .resize({ width: RESIZE_LONG_EDGE, height: RESIZE_LONG_EDGE, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    if (buffer.length <= maxBytes) return buffer;
  }
  throw new Error("still over the size limit after resizing");
}

const uploadBuffer = (buffer, options) =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (err, res) => (err ? reject(err) : resolve(res)));
    stream.end(buffer);
  });

const todo = local.filter((p) => !existing.has(p.id));
await pool(todo, concurrency, async (p) => {
  const parts = p.id.split("/");
  const options = {
    public_id: p.id,
    asset_folder: parts.slice(0, -1).join("/"),
    resource_type: "image",
    overwrite: false,
    unique_filename: false,
  };
  try {
    let res;
    if (p.bytes > maxBytes) {
      const buffer = await shrink(p.file);
      res = await withRetry(() => uploadBuffer(buffer, options), path.basename(p.file));
      resized.push(`${path.relative(folder, p.file)} (${mb(p.bytes)} → ${mb(buffer.length)})`);
    } else {
      res = await withRetry(() => cloudinary.uploader.upload(p.file, options), path.basename(p.file));
    }
    results.set(p.id, res);
    uploaded++;
    log(`  ↑ ${uploaded}/${todo.length}  ${path.relative(folder, p.file)}`);
  } catch (err) {
    failed.push(`${path.relative(folder, p.file)}: ${err.message}`);
    log(`  ✖ ${path.relative(folder, p.file)}  ${err.message}`);
  }
});

/* ── 4. Manifest ── */
const prevPhotos = new Map((previous?.photos ?? []).map((p) => [p.id, p]));
const prevLabels = new Map((previous?.sections ?? []).map((s) => [s.id, s.label]));
const sectionFolders = new Map(local.map((p) => [p.section, p.sectionFolder]));

const sectionLabel = (id) => prevLabels.get(id) ?? (id ? titleCase(sectionFolders.get(id) || id) : "More Photos");
const defaultAlt = (section) =>
  section ? `Dancers at ${eventName}, ${sectionLabel(section)}` : `Dancers at ${eventName}`;

const entry = (id, section, r) => ({
  id,
  width: r.width,
  height: r.height,
  format: r.format,
  bytes: r.bytes,
  section,
  alt: prevPhotos.get(id)?.alt ?? defaultAlt(section),
});

const photos = [];
const seen = new Set();
for (const p of local) {
  const r = results.get(p.id);
  if (!r) continue; // failed upload
  photos.push(entry(p.id, p.section, r));
  seen.add(p.id);
}
/* Keep photos from earlier runs that aren't in this folder */
for (const p of previous?.photos ?? []) if (!seen.has(p.id)) photos.push(p);

const sectionIds = [...new Set(photos.map((p) => p.section))].sort((a, b) =>
  a === "" ? 1 : b === "" ? -1 : natural(a, b)
);
const sections = sectionIds.length === 1 && sectionIds[0] === "" ? [] : sectionIds.map((id) => ({ id, label: sectionLabel(id) }));
const order = new Map(sectionIds.map((id, i) => [id, i]));
photos.sort((a, b) => order.get(a.section) - order.get(b.section));

const manifest = {
  slug,
  cloudName: CLOUDINARY_CLOUD_NAME,
  sections,
  photos,
  zip: previous?.zip ?? null,
  zipOverride: previous?.zipOverride ?? null,
};

/* ── 5. "Download all" zip ── */
let zipNote = "";
if (!noZip && failed.length === 0) {
  const signature = crypto
    .createHash("sha1")
    .update(local.map((p) => `${p.id}:${p.bytes}`).join("\n"))
    .digest("hex");

  if (manifest.zip?.signature === signature) {
    zipNote = "Zip unchanged, skipped.";
  } else {
    const zipPath = path.join(os.tmpdir(), `${slug}-photos.zip`);
    log(`\nBuilding zip of ${local.length} original photos...`);
    await new Promise((resolve, reject) => {
      const out = fs.createWriteStream(zipPath);
      /* Photos are already compressed, so store them as-is (fast, same size) */
      const archive = new ZipArchive({ store: true });
      out.on("close", resolve);
      archive.on("error", reject);
      archive.pipe(out);
      for (const p of local) {
        archive.file(p.file, { name: path.join(p.sectionFolder, path.basename(p.file)).split(path.sep).join("/") });
      }
      archive.finalize();
    });
    const zipBytes = fs.statSync(zipPath).size;
    log(`Zip is ${mb(zipBytes)}`);
    if (zipBytes > BIG_ZIP_BYTES) {
      log(
        "⚠ That's a big zip. Every \"Download all\" counts against Vercel Blob's monthly data transfer.\n" +
          "  Consider sharing it from Google Drive instead (see zipOverride in the manifest)."
      );
    }

    if (BLOB_READ_WRITE_TOKEN) {
      const { put, del } = await import("@vercel/blob");
      log("Uploading zip to Vercel Blob...");
      const blob = await withRetry(
        () =>
          put(`competitions/${slug}/${slug}-photos.zip`, fs.createReadStream(zipPath), {
            access: "public",
            token: BLOB_READ_WRITE_TOKEN,
            contentType: "application/zip",
            multipart: true,
            /* New URL each time so nobody gets an old cached copy */
            addRandomSuffix: true,
          }),
        "Zip upload"
      );
      if (manifest.zip?.blobUrl) {
        await del(manifest.zip.blobUrl, { token: BLOB_READ_WRITE_TOKEN }).catch(() => {});
      }
      manifest.zip = { url: blob.downloadUrl, blobUrl: blob.url, bytes: zipBytes, signature };
      await fsp.rm(zipPath, { force: true });
      zipNote = `Zip uploaded to Vercel Blob (${mb(zipBytes)}).`;
    } else {
      zipNote =
        `No BLOB_READ_WRITE_TOKEN, so the zip was left at:\n  ${zipPath}\n` +
        `Upload it to Google Drive (Anyone with the link can view), then set in ${path.relative(ROOT, manifestPath)}:\n` +
        `  "zipOverride": { "url": "<drive link>", "bytes": ${zipBytes} }`;
    }
  }
} else if (failed.length > 0) {
  zipNote = "Zip skipped because some uploads failed. Re-run to retry them.";
}

await fsp.mkdir(GALLERY_DIR, { recursive: true });
await fsp.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

/* Rewrite the index so the site picks up new manifests automatically */
const files = (await fsp.readdir(GALLERY_DIR)).filter((f) => f.endsWith(".json")).sort();
const index =
  `/* GENERATED by scripts/upload-gallery.mjs, which rewrites this file whenever\n` +
  `   it creates a new manifest. Safe to edit by hand if you add a manifest yourself. */\n` +
  `import type { GalleryManifest } from "@/lib/gallery";\n` +
  files.map((f, i) => `import g${i} from "./${f}";`).join("\n") +
  `\n\nexport const galleries: Record<string, GalleryManifest> = {\n` +
  files.map((f, i) => `  "${f.replace(/\.json$/, "")}": g${i} as GalleryManifest,`).join("\n") +
  `\n};\n`;
await fsp.writeFile(path.join(GALLERY_DIR, "index.ts"), index);

/* ── Summary ── */
log(`\n✔ Done. ${uploaded} uploaded, ${local.length - todo.length} already there, ${failed.length} failed.`);
log(`  Manifest: ${path.relative(ROOT, manifestPath)} (${photos.length} photos, ${sections.length || "no"} sections)`);
if (resized.length) {
  log(`\nResized ${resized.length} photo(s) over the ${mb(maxBytes)} upload limit to a ${RESIZE_LONG_EDGE}px long edge (the zip keeps the originals):`);
  for (const r of resized) log(`  • ${r}`);
}
if (failed.length) {
  log("\nFailed:");
  for (const f of failed) log(`  • ${f}`);
}
if (zipNote) log(`\n${zipNote}`);
log("\nNext: edit alt text / section labels in the manifest if you like, then commit and push.\n");
if (failed.length) process.exitCode = 1;
