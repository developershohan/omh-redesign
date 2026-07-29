import type { Metadata } from "next";
import { ServiceJsonLd } from "@/lib/schema";
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
import { SiteTestimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Shopify Development for UK Businesses",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/shopify-development/" },
  description:
    "Shopify stores, redesigns, migrations and integrations for UK businesses that need a clearer buying journey and a more reliable ecommerce setup.",
};

export default function ShopifyDevelopmentPage() {
  return (
    <div className="service-page service-page-shopify">
      <ServiceJsonLd path="/shopify-development" />
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
        body="Store, catalogue and acquisition work on ecommerce projects, including the online clothing business."
        limit={2}
      />
      <SiteTestimonials eventPrefix="shopify" accent="bg-[#e46f55]" />
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
