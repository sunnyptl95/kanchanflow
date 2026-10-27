import type { MetadataRoute } from "next";

const base = "https://kanchanflow.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/features", "/pricing"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
