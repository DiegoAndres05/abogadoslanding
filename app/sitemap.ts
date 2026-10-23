import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl.origin,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...[
      "/practicas/corporativo",
      "/practicas/contratacion-publica",
      "/practicas/tributario",
      "/privacidad",
      "/terminos",
    ].map((path) => ({
      url: new URL(path, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
