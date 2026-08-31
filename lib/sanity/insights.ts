import { groq } from "next-sanity";
import { cacheOptions, client } from "@/lib/sanity/client";
import { toArticleHtml } from "@/lib/sanity/portable-text";
import type {
  InsightIndexEntry,
  InsightPost,
  InsightTopic,
} from "@/lib/content/insights-types";

// Sanity is the only source of blog content. These helpers return the same
// shapes the site has always rendered, so components did not need rewriting
// when the JSON files were removed.

const indexFields = groq`
  "id": _id,
  "slug": slug.current,
  title,
  summary,
  publishedAt,
  "modifiedAt": _updatedAt,
  featured,
  "author": author->{ "id": _id, name },
  "topic": topic->{ "slug": slug.current, name },
  "categories": categories[]->{ "slug": slug.current, name },
  "featuredImage": featuredImage{
    alt,
    "id": asset->_id,
    "src": asset->url,
    "title": coalesce(asset->title, alt),
    "width": asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height
  },
  "legacyUrl": coalesce(legacyUrl, ""),
  "wordCount": length(pt::text(body))
`;

const published = groq`_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))`;

type RawEntry = Omit<InsightIndexEntry, "status" | "readingTime" | "excerpt"> & {
  wordCount: number | null;
};

// Same 220-words-per-minute rule the WordPress import used, so times did not
// shift when content moved into Sanity.
const readingTime = (characters: number | null) =>
  Math.max(1, Math.ceil((characters ?? 0) / 5 / 220));

const toEntry = (raw: RawEntry): InsightIndexEntry => ({
  ...raw,
  status: "published",
  excerpt: raw.summary,
  readingTime: readingTime(raw.wordCount),
  featured: Boolean(raw.featured),
  categories: raw.categories ?? [],
});

export async function getInsightsIndex(): Promise<InsightIndexEntry[]> {
  const rows = await client.fetch<RawEntry[]>(
    groq`*[${published}] | order(publishedAt desc){ ${indexFields} }`,
    {},
    cacheOptions,
  );
  return rows.map(toEntry);
}

export async function getInsightTopics(): Promise<Array<InsightTopic & { postCount: number }>> {
  const topics = await client.fetch<Array<InsightTopic & { postCount: number }>>(
    groq`*[_type == "topic"]{
      "slug": slug.current,
      name,
      "postCount": count(*[${published} && topic._ref == ^._id])
    }`,
    {},
    cacheOptions,
  );
  return topics
    .filter((topic) => topic.postCount > 0)
    .sort((a, b) => b.postCount - a.postCount || a.name.localeCompare(b.name));
}

export async function getFeaturedInsights(): Promise<InsightIndexEntry[]> {
  const rows = await client.fetch<RawEntry[]>(
    groq`*[${published} && featured == true] | order(publishedAt desc){ ${indexFields} }`,
    {},
    cacheOptions,
  );
  return rows.map(toEntry);
}

// The header search only needs a title, a link and a hint, so it deliberately
// avoids the full index projection — this runs on every page via the layout.
export async function getInsightSearchEntries(): Promise<
  Array<{ title: string; slug: string; topic: string }>
> {
  return client.fetch(
    groq`*[${published}] | order(publishedAt desc){
      title,
      "slug": slug.current,
      "topic": topic->name
    }`,
    {},
    cacheOptions,
  );
}

export async function getInsightSlugs(): Promise<string[]> {
  return client.fetch<string[]>(groq`*[${published}].slug.current`, {}, cacheOptions);
}

export async function getInsight(slug: string): Promise<InsightPost | null> {
  const raw = await client.fetch<(RawEntry & { body: unknown; tags: InsightTopic[] | null; seoTitle: string | null; seoDescription: string | null; focusKeywords: string[] | null }) | null>(
    groq`*[${published} && slug.current == $slug][0]{
      ${indexFields},
      seoTitle,
      seoDescription,
      focusKeywords,
      "tags": tags[]->{ "slug": slug.current, name },
      body[]{ ..., _type == "image" => { ..., "src": asset->url } }
    }`,
    { slug },
    cacheOptions,
  );

  if (!raw) return null;

  return {
    ...toEntry(raw),
    contentHtml: toArticleHtml(raw.body),
    tags: raw.tags ?? [],
    seo: {
      title: raw.seoTitle ?? null,
      description: raw.seoDescription ?? raw.summary ?? null,
      focusKeywords: raw.focusKeywords ?? [],
      score: null,
    },
  };
}

// Same-topic posts first, then anything else, matching the previous behaviour.
export async function getRelatedInsights(post: InsightPost, limit = 3): Promise<InsightIndexEntry[]> {
  const rows = await client.fetch<RawEntry[]>(
    groq`*[${published} && slug.current != $slug]{
      ${indexFields},
      "sameTopic": topic->slug.current == $topic
    } | order(sameTopic desc, publishedAt desc)[0...$limit]`,
    { slug: post.slug, topic: post.topic?.slug ?? "", limit },
    cacheOptions,
  );
  return rows.map(toEntry);
}
