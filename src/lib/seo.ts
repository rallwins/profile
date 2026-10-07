import { education, profile } from "../../content/profile";
import type { Article } from "./writing";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.fullName,
    jobTitle: "Director of Technology and Solutions Architect",
    description: profile.seoDescription,
    url: profile.canonical,
    email: profile.email,
    sameAs: [profile.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
    knowsAbout: [
      "Enterprise architecture",
      "Solution architecture",
      "Generative AI",
      "Cloud architecture",
      "Data engineering",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name,
    url: profile.canonical,
    description: profile.seoDescription,
  };
}

export function articleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: profile.name,
      url: profile.canonical,
    },
    mainEntityOfPage: `${profile.canonical}/writing/${article.slug}`,
    creativeWorkStatus: article.status === "draft" ? "Draft" : "Published",
    isAccessibleForFree: true,
  };
}
