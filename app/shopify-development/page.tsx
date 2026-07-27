import type { Metadata } from "next";
import {
  ShopifyCapabilityGrid,
  ShopifyCaseStudyFeature,
  ShopifyFAQAccordion,
  ShopifyFinalCTA,
  ShopifyFitSection,
  ShopifyHero,
  ShopifyNeedSection,
  ShopifyPricingPackages,
  ShopifyProcessSteps,
  ShopifyWhyChooseSection,
} from "@/components/services/ShopifyServiceSections";
import { RelatedServices } from "@/components/RelatedServices";
import { ServiceCaseStudies } from "@/components/CaseStudies";
import { ShopifyStorefrontShowcase } from "@/components/ServiceMedia";

export const metadata: Metadata = {
  title: "Shopify Development for UK Businesses",
  description:
    "Shopify stores, redesigns, migrations and integrations for UK businesses that need a clearer buying journey and a more reliable ecommerce setup.",
};

export default function ShopifyDevelopmentPage() {
  return (
    <div className="service-page service-page-shopify">
      <ShopifyHero />
      <ShopifyStorefrontShowcase />
      <ShopifyCapabilityGrid />
      <ShopifyFitSection />
      <ShopifyPricingPackages />
      <ShopifyCaseStudyFeature />
      <ShopifyProcessSteps />
      <ShopifyNeedSection />
      <ShopifyWhyChooseSection />
      <ServiceCaseStudies
        serviceId="shopify"
        title="Ecommerce projects and organic acquisition"
        body="Review the clothing SEO story and the conflicted ecommerce source reconstruction before planning store, catalogue and acquisition work."
        limit={2}
      />
      <RelatedServices
        eventPrefix="shopify"
        title="Connect store development with acquisition and support"
        body="A Shopify store needs reliable product journeys and suitable traffic. These related services cover paid campaigns and the closest website alternatives."
        links={[
          {
            title: "Google Ads PPC Management",
            href: "/google-adwords-ppc",
            body: "Plan Search, Shopping, Display or remarketing campaigns around measurable ecommerce actions.",
          },
          {
            title: "WordPress Development",
            href: "/wordpress-development",
            body: "Review the WordPress route when content, service pages or WooCommerce are a stronger platform fit.",
          },
          {
            title: "Amazon PPC Advertising",
            href: "/amazon-ppc-advertising-agency-uk",
            body: "Connect an owned Shopify store with product advertising and demand inside the Amazon marketplace.",
          },
        ]}
      />
      <ShopifyFAQAccordion />
      <ShopifyFinalCTA />
    </div>
  );
}
