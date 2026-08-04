import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyArticle } from "@/components/case-studies/CaseStudyArticle";
import { caseStudies, getCaseStudy } from "@/lib/content/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.shortTitle} Case Study`,
    description: study.lede,
    alternates: {
      canonical: `https://onlinemarketinghelp.co.uk/case-studies/${study.slug}/`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return <CaseStudyArticle study={study} />;
}
