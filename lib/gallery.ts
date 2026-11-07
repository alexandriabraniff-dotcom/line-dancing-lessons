/* ── Competition photo galleries ──────────────────────────────────────────
   Full-resolution photos live on Cloudinary, never in this repo. Each
   competition has a small manifest in lib/galleries/<slug>.json, written by
   `node scripts/upload-gallery.mjs <slug> <folder>` (see README). The site
   only needs the Cloudinary cloud name, which the script stores in the
   manifest. API keys stay in the local .env.gallery file used by the script. */

export type GalleryPhoto = {
  /* Cloudinary public ID, e.g. "wildflower/competitions/<slug>/round-1/img-0042" */
  id: string;
  width: number;
  height: number;
  /* File type on Cloudinary ("jpg", "png", ...), used for the download file */
  format: string;
  bytes: number;
  /* Section id ("" when the photo isn't in a subfolder) */
  section: string;
  /* Edit freely, the upload script keeps your changes when it's re-run */
  alt: string;
};

export type GallerySection = { id: string; label: string };

export type GalleryManifest = {
  slug: string;
  cloudName: string;
  sections: GallerySection[];
  photos: GalleryPhoto[];
  /* "Download all" zip uploaded to Vercel Blob by the script */
  zip: { url: string; bytes: number; signature?: string; blobUrl?: string } | null;
  /* Manual fallback: set this to a Google Drive (or any) link to use it
     instead of `zip`. `bytes` is optional, used for the size next to the button. */
  zipOverride: { url: string; bytes?: number } | null;
};

const base = (cloudName: string) => `https://res.cloudinary.com/${cloudName}/image/upload`;

const encodeId = (id: string) => id.split("/").map(encodeURIComponent).join("/");

/* Resized, auto-format, auto-quality copy for the screen */
export function cldUrl(cloudName: string, id: string, transform: string) {
  return `${base(cloudName)}/${transform}/${encodeId(id)}`;
}

/* srcset across a set of widths using the same transformation */
export function cldSrcSet(cloudName: string, id: string, widths: number[], transform: (w: number) => string) {
  return widths.map((w) => `${cldUrl(cloudName, id, transform(w))} ${w}w`).join(", ");
}

/* The full-resolution original, sent with Content-Disposition: attachment
   (fl_attachment) so it saves instead of opening in a tab. The HTML download
   attribute is ignored cross-origin, so this flag is what makes it download. */
export function cldDownloadUrl(cloudName: string, photo: GalleryPhoto) {
  const fileName = photo.id.split("/").slice(-3).join("-").replace(/[^a-zA-Z0-9_-]/g, "_");
  return `${base(cloudName)}/fl_attachment:${fileName}/${encodeId(photo.id)}.${photo.format}`;
}

export function formatBytes(bytes: number) {
  if (bytes >= 1024 ** 3) return `${(bytes / 1024 ** 3).toFixed(1)} GB`;
  if (bytes >= 1024 ** 2) return `${Math.round(bytes / 1024 ** 2)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

/* The zip link to show, preferring the manual override */
export function galleryZip(manifest: GalleryManifest) {
  return manifest.zipOverride?.url ? manifest.zipOverride : manifest.zip;
}
