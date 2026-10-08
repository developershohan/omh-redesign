import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingSections";
import { bestSeoServices } from "@/lib/content/seo-landing";
import { ServiceJsonLd } from "@/lib/schema";

const meta = bestSeoServices.meta!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://onlinemarketinghelp.co.uk${meta.path}/` },
};

export default function SeoServicesPage() {
  return (
    <>
      <ServiceJsonLd path="/seo-services" />
      <SeoLandingPage page={bestSeoServices} event="best_seo" variant="national" />
    </>
  );
}
