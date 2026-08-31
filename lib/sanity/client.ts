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

// Published posts appear without a redeploy: pages are generated statically on
// first request and refreshed in the background on this interval.
export const revalidate = 60;
