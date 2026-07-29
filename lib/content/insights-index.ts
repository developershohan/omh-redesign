import indexJson from "@/content/insights-index.json";
import type { InsightIndexDataset, InsightIndexEntry } from "@/lib/content/insights-types";

const dataset = indexJson as unknown as InsightIndexDataset;

const featuredOrder = [
  "zero-click-searches-ai-overviews-and-featured-snippets",
  "how-to-redesign-your-website-without-impacting-seo",
  "writing-effective-ad-copy-tips-and-strategies",
];

export const insightsIndex = dataset.posts;
export const insightTopics = dataset.categories;
export const insightsSource = dataset.source;

export const featuredInsights = featuredOrder
  .map((slug) => insightsIndex.find((post) => post.slug === slug))
  .filter((post): post is InsightIndexEntry => Boolean(post));

export function getInsightIndex(slug: string) {
  return insightsIndex.find((post) => post.slug === slug);
}

