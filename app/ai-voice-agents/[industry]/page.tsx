import type { Metadata } from "next";
import { IndustryPage, industryMetadata } from "@/components/voice-agents/IndustryPage";
import { industryPaths } from "@/lib/content/voice-industry";

type Props = { params: Promise<{ industry: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industryPaths.filter((p) => !p.includes("/")).map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return industryMetadata((await params).industry);
}

export default async function Page({ params }: Props) {
  return <IndustryPage path={(await params).industry} />;
}
