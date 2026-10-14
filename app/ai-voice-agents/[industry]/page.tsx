import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryScript, type IndustryCopy } from "@/components/voice-agents/IndustryScript";
import * as estate from "@/lib/content/voice-industry/estate-letting-agents";
import * as dental from "@/lib/content/voice-industry/dental-clinics";
import * as dentalV2 from "@/lib/content/voice-industry/dental-clinics-v2";
import { JsonLd, SITE } from "@/lib/schema";

// Industry pages for AI voice agents. Not in the menu or sitemap yet (both come
// from lib/content/nav.ts), so they are reachable by URL only.

const estateCopy: IndustryCopy = {
  org: "agency",
  units: "branches",
  demoName: "Wren & Marlow",
  greeting: "I'm Ella, the branch's AI assistant. Are you calling about a property, a valuation or a rental?",
};

const dentalCopy: IndustryCopy = {
  org: "practice",
  units: "surgeries",
  demoName: "Albion Square Dental",
  greeting: "I'm Amy, the practice's AI assistant. Are you calling to book an appointment, or about something urgent?",
};

const dentalMeta = {
  title: "AI Receptionist for Dental Practices | UK Dental Clinics | OMH",
  description:
    "An AI voice agent for UK dental practices. Answers patient calls 24/7, books check-ups, fills cancellations and routes urgent calls. Never gives clinical advice. Built and managed by OMH.",
  ogTitle: "AI Receptionist for Dental Practices | OMH",
  ogDescription: "Every patient call answered, even when reception is full. Built, tested and managed by a UK team.",
  canonical: "/ai-voice-agents/dental-clinics",
};

const pages = {
  "estate-letting-agents": {
    ...estate,
    copy: estateCopy,
    title: "AI Receptionist for Estate & Letting Agents | UK | OMH",
    description:
      "An AI voice agent for UK estate and letting agents. Answers every enquiry 24/7, books viewings and valuations, qualifies buyers and tenants and routes tenant emergencies. Built and managed by OMH.",
    ogTitle: "AI Receptionist for Estate & Letting Agents | OMH",
    ogDescription: "Every property enquiry answered, even when the team is out on viewings. Built, tested and managed by a UK team.",
    canonical: "/ai-voice-agents/estate-letting-agents",
  },
  "dental-clinics": { ...dental, copy: dentalCopy, ...dentalMeta },
  // Alternative design of the same page, so it points its canonical at the first.
  "dental-clinics-v2": { ...dentalV2, copy: dentalCopy, ...dentalMeta },
};

type Props = { params: Promise<{ industry: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = pages[(await params).industry as keyof typeof pages];
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `${SITE}${page.canonical}/` },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: "Online Marketing Help",
      title: page.ogTitle,
      description: page.ogDescription,
      url: `${SITE}${page.canonical}/`,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const page = pages[industry as keyof typeof pages];
  if (!page) notFound();
  return (
    <>
      <JsonLd data={page.schema} />
      <div id="va-page" className={`va-page vi-page vi-${industry}`} dangerouslySetInnerHTML={{ __html: page.markup }} />
      <IndustryScript copy={page.copy} />
    </>
  );
}
