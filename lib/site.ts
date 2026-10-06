/* ── Business contact details ──────────────────────────────
   Used by the footer and Contact page. Set `phone` to show it. */
export const site = {
  email: "wildflowerlinedancing@gmail.com",
  phone: "(250) 650-1391" as string | null,
  serviceArea: "Greater Vancouver",
  socials: [
    { name: "Instagram", handle: "@wildflowerlinedancing", href: "https://www.instagram.com/wildflowerlinedancing/" },
    { name: "Facebook", handle: "Wildflower Line Dancing", href: "https://www.facebook.com/wildflowerlinedancing" },
    { name: "TikTok", handle: "@wildflowerlinedancing", href: "https://www.tiktok.com/@wildflowerlinedancing" },
  ],
} as const;

/* ── Google reviews ────────────────────────────────────────
   Paste the Google Business Profile Place ID here (Business Profile >
   "Ask for reviews" link, or Google's Place ID Finder) and the review
   button opens the "write a review" box directly. Until then it opens
   a Google Maps search for the business. */
export const googlePlaceId = "";

export const googleReviewUrl = googlePlaceId
  ? `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  : "https://www.google.com/maps/search/?api=1&query=Wildflower+Line+Dancing+Vancouver";

export const phoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
