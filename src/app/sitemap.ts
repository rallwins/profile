import type { MetadataRoute } from "next";
import { profile } from "../../content/profile";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-01");
  return routes.map((route) => ({
    url: `${profile.canonical}${route.href === "/" ? "" : route.href}`,
    lastModified: now,
  }));
}
