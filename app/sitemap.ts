import type { MetadataRoute } from "next";

const siteUrl = "https://westonrenn.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteUrl}/products/reality-before-the-script`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

  ];
}