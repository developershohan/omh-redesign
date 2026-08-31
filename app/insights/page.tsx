import type { Metadata } from "next";
import { InsightsHub } from "@/components/insights/InsightsHub";

export const metadata: Metadata = {
  title: "Digital Marketing Insights",
  description:
    "Practical guidance on SEO, paid advertising, websites, ecommerce, content and digital strategy from Online Marketing Help.",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/insights/" },
};

type SearchParams = Promise<{
  topic?: string | string[];
  q?: string | string[];
  page?: string | string[];
}>;

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

// Filtering stays on the server: it keeps every URL correct and crawlable. The
// page is dynamic because of searchParams, but the Sanity queries behind it are
// cached and tagged, so a render costs no network round trip.
export default async function InsightsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const page = Number.parseInt(first(params.page), 10);
  return (
    <InsightsHub
      topic={first(params.topic)}
      query={first(params.q)}
      page={Number.isFinite(page) ? page : 1}
    />
  );
}

