import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { articleJsonLd } from "@/lib/seo";
import { getArticle, getArticles } from "@/lib/writing";
import { JsonLd } from "@/components/json-ld";
import { Frame } from "@/components/page-intro";

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/writing/${article.slug}` },
    robots: article.status === "draft" ? { index: true, follow: true } : undefined,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <Frame>
      <JsonLd data={articleJsonLd(article)} />
      <p className="text-xs uppercase tracking-[0.16em] text-accent">
        {article.category} · Sample draft · Not previously published
      </p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{article.title}</h1>
      <p className="mt-4 max-w-2xl text-slate">{article.description}</p>
      <article className="article mt-10">
        <MDXRemote source={article.body} />
      </article>
    </Frame>
  );
}
