import type { Metadata } from "next";
import Link from "next/link";
import { writingCategories } from "../../../content/writing";
import { getArticles } from "@/lib/writing";
import { Frame, PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Writing",
  description: "Architecture notes on AI, cloud, data, system design, and developer productivity.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const articles = getArticles();
  return (
    <Frame>
      <PageIntro
        index="08"
        eyebrow="Architecture notes"
        title="Notes from the practice."
        lede="One sample draft is on this site. It was written for the profile and has not been published before. Empty categories stay empty."
      />
      <ul className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] text-slate">
        {writingCategories.map((category) => (
          <li key={category} className="border border-line px-3 py-2">
            {category}
          </li>
        ))}
      </ul>
      <div className="mt-10 space-y-4">
        {articles.map((article) => (
          <article key={article.slug} className="border border-line bg-panel p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-accent">
              {article.category} · {article.status === "draft" ? "Sample draft" : "Note"}
            </p>
            <h2 className="mt-2 font-serif text-3xl">
              <Link href={`/writing/${article.slug}`} className="hover:text-accent">
                {article.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">{article.description}</p>
          </article>
        ))}
      </div>
    </Frame>
  );
}
