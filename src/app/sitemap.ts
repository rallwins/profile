import type { MetadataRoute } from "next";
import { profile } from "../../content/profile";
import { routes } from "@/lib/routes";
import { caseStudies } from "../../content/architecture";
import { getArticles } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-07");
  const pages = routes.map((route) => ({
    url: `${profile.canonical}${route.href === "/" ? "" : route.href}`,
    lastModified: now,
  }));
  const studies = caseStudies.map((study) => ({
    url: `${profile.canonical}/architecture#${study.slug}`,
    lastModified: now,
  }));
  const articles = getArticles().map((article) => ({
    url: `${profile.canonical}/writing/${article.slug}`,
    lastModified: now,
  }));
  return [
    ...pages,
    { url: `${profile.canonical}/resume`, lastModified: now },
    ...studies,
    ...articles,
  ];
}
