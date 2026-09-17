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

export const phoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
