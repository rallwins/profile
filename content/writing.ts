export const writingCategories = [
  "AI Architecture",
  "Cloud Architecture",
  "Data Engineering",
  "System Design",
  "GenAI",
  "Developer Productivity",
] as const;

export type WritingCategory = (typeof writingCategories)[number];
