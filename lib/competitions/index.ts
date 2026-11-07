/* ── Competitions ─────────────────────────────────────────────────────────
   To add a competition:
     1. copy dance-till-you-drop-dead-2026.ts to <new-slug>.ts and fill it in
     2. add it to the `competitions` list below
     3. after the event, run the photo upload script (see README)
   Whether it's upcoming or past is worked out from its dates, so ticket
   buttons and the Upcoming section look after themselves. */

import type { Competition } from "./types";
import { danceTillYouDropDead2026 } from "./dance-till-you-drop-dead-2026";
import { galleries } from "@/lib/galleries";
import { cldUrl, type GalleryManifest } from "@/lib/gallery";

export type { Competition };

export const competitions: Competition[] = [danceTillYouDropDead2026];

export const SITE_URL = "https://wildflowerlinedancing.com";

const byDateDesc = (a: Competition, b: Competition) => b.startDate.localeCompare(a.startDate);

export function isUpcoming(c: Competition, now = new Date()) {
  return new Date(c.endDate).getTime() > now.getTime();
}

/* Soonest first */
export function getUpcoming(now = new Date()) {
  return competitions.filter((c) => isUpcoming(c, now)).sort(byDateDesc).reverse();
}

/* Newest first */
export function getPast(now = new Date()) {
  return competitions.filter((c) => !isUpcoming(c, now)).sort(byDateDesc);
}

export function getCompetition(slug: string) {
  return competitions.find((c) => c.slug === slug);
}

export function getGallery(slug: string): GalleryManifest | undefined {
  return galleries[slug];
}

/* "Sunday, October 25, 2026" in Vancouver time */
export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Vancouver",
  }).format(new Date(iso));
}

/* Cover image for cards, the hero and link previews (Open Graph) */
export function coverImage(c: Competition, width: number, height: number, format = "f_auto") {
  if ("src" in c.cover) return { src: c.cover.src, alt: c.cover.alt, local: true };
  const cloudName = getGallery(c.slug)?.cloudName;
  if (!cloudName) return null;
  return {
    src: cldUrl(cloudName, c.cover.cloudinaryId, `c_fill,g_auto,w_${width},h_${height},${format},q_auto`),
    alt: c.cover.alt,
    local: false,
  };
}
