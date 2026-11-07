import type { MetadataRoute } from "next";
import { competitions } from "@/lib/competitions";

const SITE = "https://wildflowerlinedancing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/competitions`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...competitions.map((c) => ({
      url: `${SITE}/competitions/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
