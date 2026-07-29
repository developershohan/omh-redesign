import postsJson from "@/content/insights-posts.json";
import type { InsightPost, InsightPostsDataset } from "@/lib/content/insights-types";

const dataset = postsJson as unknown as InsightPostsDataset;

export const insightPosts = dataset.posts;

export function getInsight(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}

export function getRelatedInsights(post: InsightPost, limit = 3) {
  const sameTopic = insightPosts.filter(
    (candidate) => candidate.slug !== post.slug && candidate.topic.slug === post.topic.slug,
  );
  const otherTopics = insightPosts.filter(
    (candidate) => candidate.slug !== post.slug && candidate.topic.slug !== post.topic.slug,
  );
  return [...sameTopic, ...otherTopics].slice(0, limit);
}

