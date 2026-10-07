import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleStatus = "draft" | "published";

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  status: ArticleStatus;
  body: string;
};

const blogDir = path.join(process.cwd(), "content/blog");

export function getArticles(): Article[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
      const parsed = matter(raw);
      const status = parsed.data.status === "published" ? "published" : "draft";
      return {
        slug,
        title: String(parsed.data.title ?? slug),
        description: String(parsed.data.description ?? ""),
        category: String(parsed.data.category ?? "Architecture"),
        status,
        body: parsed.content,
      } satisfies Article;
    });
}

export function getArticle(slug: string) {
  return getArticles().find((article) => article.slug === slug) ?? null;
}
