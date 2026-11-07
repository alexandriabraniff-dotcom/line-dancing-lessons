export type Competition = {
  /* URL: /competitions/<slug>. Also the name of the gallery manifest
     (lib/galleries/<slug>.json) and the Cloudinary folder. */
  slug: string;
  name: string;
  /* ISO date-times with the Vancouver offset, e.g. "2026-10-25T20:00:00-07:00".
     The competition counts as upcoming until `endDate` has passed, so ticket
     buttons and the Upcoming section appear and disappear on their own. */
  startDate: string;
  endDate: string;
  venue: {
    name: string;
    streetAddress: string;
    city: string;
    region: string;
    postalCode: string;
  };
  /* Short quote shown on the card and in the page hero */
  tagline: string;
  /* Meta description for Google and link previews */
  description: string;
  /* Cover photo. Either a file in public/ ("/events/poster.jpg") with its
     pixel size, or a Cloudinary public ID from the gallery manifest. */
  cover: { src: string; alt: string; width: number; height: number } | { cloudinaryId: string; alt: string };
  /* Recap paragraphs. While empty the page says the recap is coming soon. */
  recap: string[];
  /* Only shown while the competition is upcoming */
  tickets?: { url: string; label: string };
  ageLine?: string;
  /* Archived event details, shown in the collapsible "Event Info" section */
  eventInfo?: {
    intro: { lead: string; text: string }[];
    poster?: { src: string; alt: string; width: number; height: number };
    setlist?: { song: string; artist: string; dance: string; url: string; swap?: string }[];
    setlistNote?: string;
    rules?: { title: string; intro?: string; items: string[] }[];
  };
};
