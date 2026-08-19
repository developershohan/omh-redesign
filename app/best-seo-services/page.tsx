import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingSections";
import { bestSeoServices } from "@/lib/content/seo-landing";

export const metadata: Metadata = {
  title: "Best SEO Services",
  description:
    "SEO services that get organic traffic to your business website and turn visitors into leads, with customised SEO solutions and a free SEO audit.",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/best-seo-services/" },
};

export default function BestSeoServicesPage() {
  return <SeoLandingPage page={bestSeoServices} event="best_seo" variant="national" />;
}
