export type InsightTopic = {
  slug: string;
  name: string;
};

export type InsightTerm = {
  slug: string;
  name: string;
};

export type InsightImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  width: number | null;
  height: number | null;
};

export type InsightIndexEntry = {
  id: string;
  slug: string;
  status: "published";
  title: string;
  publishedAt: string;
  modifiedAt: string;
  author: { id: string; name: string };
  summary: string;
  excerpt: string;
  topic: InsightTopic;
  categories: InsightTerm[];
  readingTime: number;
  featured: boolean;
  featuredImage: InsightImage | null;
  legacyUrl: string;
};

export type InsightPost = InsightIndexEntry & {
  contentHtml: string;
  tags: InsightTerm[];
  seo: {
    title: string | null;
    description: string | null;
    focusKeywords: string[];
    score: number | null;
  };
};

export type InsightSource = {
  format: string;
  file: string;
  exportedAt: string;
  siteUrl: string;
};

export type InsightIndexDataset = {
  version: number;
  source: InsightSource;
  categories: Array<InsightTopic & { postCount: number }>;
  posts: InsightIndexEntry[];
};

export type InsightPostsDataset = Omit<InsightIndexDataset, "posts"> & {
  authors: Array<{ id: string; name: string }>;
  posts: InsightPost[];
};

export function insightHref(post: Pick<InsightIndexEntry, "slug">) {
  return `/${post.slug}`;
}
