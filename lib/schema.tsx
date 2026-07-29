// JSON-LD for the site. Audit T-06/T-07/T-08: the live site marks every service
// page up as an Article with a Person author and emits no Service schema at all,
// and ProfessionalService sits on /blog/ instead of the homepage.
import { company } from "@/lib/content/nav";
import { wordpressDevelopment } from "@/lib/content/wordpress-development";
import { shopifyDevelopment } from "@/lib/content/shopify-development";
import { wordpressMaintenance } from "@/lib/content/wordpress-maintenance";
import { googleAdsPpc } from "@/lib/content/google-ads-ppc";
import { amazonPpc } from "@/lib/content/amazon-ppc";
import { searchEngineOptimisation } from "@/lib/content/search-engine-optimisation";
import { localSeo } from "@/lib/content/local-seo";
import { socialMediaMarketing } from "@/lib/content/social-media-marketing";
import { socialMediaPaidAdvertising } from "@/lib/content/social-media-paid-advertising";

export const SITE = "https://onlinemarketinghelp.co.uk";

const provider = {
  "@type": "Organization",
  name: company.name,
  url: `${SITE}/`,
};

export const organisation = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}/#organisation`,
  name: company.name,
  url: `${SITE}/`,
  telephone: company.phoneDisplay,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "The Hut, Central Ave",
    addressLocality: "Hullbridge",
    postalCode: "SS5 6AU",
    addressCountry: "GB",
  },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  // ponytail: no aggregateRating/review — brief §25 forbids it without real,
  // compliant reviews. Add only when the client supplies verified ones.
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: `${SITE}/`,
  name: company.name,
  publisher: { "@id": `${SITE}/#organisation` },
  inLanguage: "en-GB",
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider,
    areaServed: { "@type": "Country", name: "United Kingdom" },
    url: `${SITE}${path}`,
  };
}

// Content files use two FAQ shapes: [question, answer] pairs and {q, a} objects.
type Faqs = readonly (readonly string[] | { readonly q: string; readonly a: string })[];

/** Only ever pass FAQs that are visible on the page (brief §25). */
export function faqSchema(faqs: Faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => {
      const [question, answer] = "q" in faq ? [faq.q, faq.a] : faq;
      return {
        "@type": "Question",
        name: question,
        // Answers carry [anchor](/path) markup for the in-body links (T-26);
        // the schema needs the plain text the page actually shows.
        acceptedAnswer: { "@type": "Answer", text: answer.replace(/\[([^\]]+)\]\(\/[^)]*\)/g, "$1") },
      };
    }),
  };
}

// One row per service page, so name/description/FAQ markup stay in one place
// instead of being restated in nine route files.
const services: Record<string, { name: string; description: string; faqs: Faqs }> = {
  "/wordpress-development": {
    name: "WordPress Development",
    description: "WordPress websites for UK businesses that need better structure, easier management, stronger performance and clearer conversion support.",
    faqs: wordpressDevelopment.faqs,
  },
  "/shopify-development": {
    name: "Shopify Development",
    description: "Shopify store development for UK ecommerce brands, covering build, theme customisation, product journeys, integrations and conversion tracking.",
    faqs: shopifyDevelopment.faqs,
  },
  "/wordpress-website-maintenance": {
    name: "WordPress Website Maintenance",
    description: "Ongoing WordPress maintenance and support for UK businesses: updates, backups, security, uptime monitoring and agreed technical work.",
    faqs: wordpressMaintenance.faqs,
  },
  "/google-adwords-ppc": {
    name: "Google Ads Management",
    description: "Google Ads and PPC campaign management for UK businesses, covering Search, Display, remarketing, Shopping, conversion tracking and reporting.",
    faqs: googleAdsPpc.faqs,
  },
  "/amazon-ppc-advertising-agency-uk": {
    name: "Amazon PPC Management",
    description: "Amazon PPC management for UK sellers, covering Sponsored Products, Sponsored Brands, Sponsored Display, campaign structure and ad spend control.",
    faqs: amazonPpc.faqs,
  },
  "/search-engine-optimisation": {
    name: "Search Engine Optimisation",
    description: "SEO services for UK businesses covering audits, keyword research, technical SEO, on-page optimisation, content architecture and reporting.",
    faqs: searchEngineOptimisation.faqs,
  },
  "/local-seo": {
    name: "Local SEO",
    description: "Local SEO for UK businesses that need to be found in their own area: Google Business Profile, Maps visibility, citations, reviews and service-area pages.",
    faqs: localSeo.faqs,
  },
  "/social-media-marketing": {
    name: "Social Media Management",
    description: "Organic social media management for UK businesses: content planning, scheduling, community management and reporting.",
    faqs: socialMediaMarketing.faqs,
  },
  "/social-media-paid-advertising": {
    name: "Paid Social Advertising",
    description: "Paid social and Meta Ads management for UK businesses, covering audience targeting, creative testing, lead forms, budget control and tracking.",
    faqs: socialMediaPaidAdvertising.faqs,
  },
};

/** Service + FAQPage markup for a service route. FAQs are the ones the page renders. */
export function ServiceJsonLd({ path }: { path: keyof typeof services }) {
  const s = services[path];
  return <JsonLd data={[serviceSchema(s.name, s.description, `${path}/`), faqSchema(s.faqs)]} />;
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
