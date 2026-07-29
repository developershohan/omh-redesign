import type { Metadata } from "next";
import { ServiceJsonLd } from "@/lib/schema";
import { RelatedServices } from "@/components/RelatedServices";
import { ServiceCaseStudies } from "@/components/CaseStudies";
import {
  LocalSeoBenefits,
  LocalSeoFAQ,
  LocalSeoFinalCTA,
  LocalSeoFit,
  LocalSeoHero,
  LocalSeoMap,
  LocalSeoPricing,
  LocalSeoProcess,
  LocalSeoPromise,
  LocalSeoReviews,
  LocalSeoSignals,
  LocalSeoWhyOmh,
  LocalSeoWorkstreams,
} from "@/components/services/LocalSeoSections";

export const metadata: Metadata = {
  title: "Local SEO Services for UK Businesses",
  description: "Local SEO support covering Google Business Profile, local service pages, business-detail consistency, directories, reviews, maps and reporting.",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/local-seo/" },
};

export default function LocalSeoPage() {
  return (
    <div className="service-page service-page-local-seo">
      <ServiceJsonLd path="/local-seo" />
      <LocalSeoHero />
      <LocalSeoSignals />
      <LocalSeoFit />
      <LocalSeoBenefits />
      <LocalSeoMap />
      <LocalSeoWorkstreams />
      <LocalSeoProcess />
      <LocalSeoPricing />
      <ServiceCaseStudies
        serviceId="seo"
        title="See local search work in context"
        body="How local visibility, business-profile work, website improvements and measurement came together for businesses working in a defined area."
        limit={3}
      />
      <LocalSeoReviews />
      <LocalSeoWhyOmh />
      <LocalSeoPromise />
      <RelatedServices
        eventPrefix="local_seo"
        title="Useful services connected to local visibility"
        body="Local SEO often depends on wider SEO work, clearer website pages and content that answers location-specific customer questions."
        links={[
          { title: "Search Engine Optimisation", href: "/search-engine-optimisation", body: "Connect local priorities with the wider technical, content and authority programme." },
          { title: "WordPress Development", href: "/wordpress-development", body: "Build or improve service and location pages with a clear route to enquiry." },
          { title: "Website Design", href: "/website-designs", body: "Give local landing pages and service pages a structure customers can actually act on." },
        ]}
      />
      <LocalSeoFAQ />
      <LocalSeoFinalCTA />
    </div>
  );
}
