import { caseStudies } from "@/lib/content/case-studies";
import { insightsIndex } from "@/lib/content/insights-index";
import { readyPages } from "@/lib/content/nav";
import { freeConsultation, quoteFormPages } from "@/lib/content/quote-forms";

export type SearchEntry = {
  title: string;
  href: string;
  group: "Page" | "Case study" | "Insight";
  hint?: string;
};

// Titles only. The full insights dataset is ~1.5 MB, so the client gets a flat
// list it can filter in memory instead of a search service.
export const searchIndex: SearchEntry[] = [
  ...readyPages.map((page) => ({ title: page.label, href: page.href, group: "Page" as const })),
  // Funnel pages are deliberately out of `readyPages` (they shouldn't pad the
  // coming-soon list), but someone searching "quote" should still find them.
  ...quoteFormPages.map((page) => ({
    title: page.seo.title,
    href: `/${page.slug}`,
    group: "Page" as const,
  })),
  { title: freeConsultation.seo.title, href: `/${freeConsultation.slug}`, group: "Page" as const },
  ...caseStudies.map((study) => ({
    title: study.shortTitle,
    href: `/case-studies/${study.slug}`,
    group: "Case study" as const,
    hint: study.sector,
  })),
  ...insightsIndex.map((post) => ({
    title: post.title,
    href: `/${post.slug}`,
    group: "Insight" as const,
    hint: post.topic.name,
  })),
];
