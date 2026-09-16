import type { MetadataRoute } from "next";

const SITE = "https://wildflowerlinedancing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
