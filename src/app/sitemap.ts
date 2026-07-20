import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/siteConfig";

// Required for static export (GitHub Pages) — this route has no dynamic input.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
