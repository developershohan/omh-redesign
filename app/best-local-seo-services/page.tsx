import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingSections";
import { bestLocalSeoServices } from "@/lib/content/seo-landing";

export const metadata: Metadata = {
  title: "Best Local SEO Services",
  description:
    "Affordable local SEO packages that make your website visible and grow your online presence, both locally and globally. Free local SEO audit.",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/best-local-seo-services/" },
};

export default function BestLocalSeoServicesPage() {
  return <SeoLandingPage page={bestLocalSeoServices} event="best_local_seo" variant="local" />;
}
