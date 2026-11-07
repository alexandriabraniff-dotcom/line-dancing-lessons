# Wildflower Line Dancing

Next.js 16 (App Router), Tailwind v4, TypeScript, pnpm. Live at https://wildflowerlinedancing.com.

```bash
pnpm install
pnpm dev --port 4700
```

## Competitions

Competitions are content, not hand-written pages:

| What | Where |
| --- | --- |
| List of competitions | `lib/competitions/index.ts` |
| One file per competition (name, dates, venue, tagline, cover, recap, tickets, archived event info) | `lib/competitions/<slug>.ts` |
| Photo manifest (written by the upload script) | `lib/galleries/<slug>.json` |
| Index page `/competitions` | `app/(site)/competitions/page.tsx` |
| Competition page `/competitions/<slug>` | `app/(site)/competitions/[slug]/page.tsx` |
| Gallery + lightbox | `components/PhotoGallery.tsx` |

Upcoming or past is worked out from `endDate`. Pages refresh hourly, so the
**Upcoming** section on `/competitions` and the ticket buttons on a competition
page appear and disappear on their own. No edits are needed after the event.

`/competition` (the old Halloween page) 301-redirects to
`/competitions/dance-till-you-drop-dead-2026`. `/tickets` (the poster QR code)
redirects to `/competitions`. Change `TICKETS_URL` in `next.config.ts` to point
it at a specific ticket page for the next event.

### Adding a new competition

1. Copy `lib/competitions/dance-till-you-drop-dead-2026.ts` to
   `lib/competitions/<new-slug>.ts` and fill it in (slug, name, dates with the
   `-07:00`/`-08:00` Vancouver offset, venue, tagline, cover, tickets). Leave
   `recap` empty and drop `eventInfo` if you don't need it.
2. Add it to the `competitions` array in `lib/competitions/index.ts`.
3. Push. It shows under **Upcoming** with its ticket button until it's over.
4. After the event: fill in `recap`, upload the photos (below), and set
   `cover` to a photo from the gallery:
   `cover: { cloudinaryId: "<id from the manifest>", alt: "..." }`.

### Uploading photos

Full-size photos never go in this repo. They live on Cloudinary, and the site
only stores a small JSON manifest.

**One-time setup**: create `.env.gallery` in the project root. It's ignored by git
and only read by the script, never by the site:

```
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
# Optional, for the "Download all" zip (Vercel > Storage > Blob > token)
BLOB_READ_WRITE_TOKEN=...
```

**Run**:

```bash
node scripts/upload-gallery.mjs <slug> "C:/path/to/photos"
# e.g. node scripts/upload-gallery.mjs dance-till-you-drop-dead-2026 "D:/DTYDD photos"
```

- Subfolders (`round-1/`, `round-2/`, `finals/`) become gallery sections with
  jump links. Photos at the top level go in a "More Photos" section, or no
  section at all if there are no subfolders.
- Photos already on Cloudinary are skipped, so it's safe to re-run after
  adding more.
- Anything over the Cloudinary plan's upload limit (10 MB on the free plan) is
  resized to a 4000px long edge, high-quality JPEG. The script lists those
  files at the end. The zip always holds the untouched originals.
- It writes `lib/galleries/<slug>.json`. Edit the `alt` text and section
  `label`s there if you like. Re-runs keep your edits.
- **Download all zip**: with `BLOB_READ_WRITE_TOKEN` set, the zip is uploaded
  to Vercel Blob and linked automatically. Without it, the script leaves the
  zip on your computer. Upload it to Google Drive ("Anyone with the link"),
  then set `"zipOverride": { "url": "<link>", "bytes": <size> }` in the
  manifest. A big zip (500 MB+) is better on Google Drive, because every
  download counts against Vercel Blob's monthly transfer.
- Options: `--name "Event Name"` (for default alt text), `--no-zip`,
  `--concurrency 4`.

Then commit the manifest and push.

**Removing a photo** (takedown request): delete it from the Cloudinary Media
Library, delete its entry from `lib/galleries/<slug>.json`, push, and re-run
the script with that photo removed from the folder so the zip is rebuilt.
