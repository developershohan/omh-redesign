import type { Metadata } from "next";
import { IndustryPage, industryMetadata } from "@/components/voice-agents/IndustryPage";
import { industryPaths } from "@/lib/content/voice-industry";

type Props = { params: Promise<{ industry: string; city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industryPaths
    .filter((p) => p.includes("/"))
    .map((p) => {
      const [industry, city] = p.split("/");
      return { industry, city };
    });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry, city } = await params;
  return industryMetadata(`${industry}/${city}`);
}

export default async function Page({ params }: Props) {
  const { industry, city } = await params;
  return <IndustryPage path={`${industry}/${city}`} />;
}
