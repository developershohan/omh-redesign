import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

// The dataset is public, so reads need no token.
export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  useCdn: true,
});

// Cache tag every blog query is filed under. Publishing in the Studio calls
// /api/revalidate, which clears this tag and nothing else.
export const POSTS_TAG = "posts";

// Cached until a publish invalidates the tag, with a one-hour backstop so a
// missed webhook cannot leave the site stale indefinitely. Pages then serve
// from Vercel's cache with no Sanity round trip on the request path — that
// round trip is what made navigation slow.
export const cacheOptions = {
  next: { tags: [POSTS_TAG], revalidate: 3600 },
};
