import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPage } from "@/components/solutions/SolutionPage";
import { solutionOrder, solutions } from "@/lib/content/solutions";

const metadataBySlug: Record<string, { title: string; description: string }> = {
  "generate-qualified-leads": {
    title: "Generate More Qualified Leads",
    description: "Lead generation for UK service businesses, connecting paid campaigns, SEO, landing pages, qualification and tracking around better-fit enquiries.",
  },
  "increase-ecommerce-sales": {
    title: "Increase Ecommerce Sales",
    description: "Ecommerce growth support connecting paid acquisition, organic search, Shopify development, product journeys, checkout and revenue-aware measurement.",
  },
  "improve-website-conversion": {
    title: "Improve Website Conversion",
    description: "Improve website conversion through clearer messaging, stronger customer journeys, practical UX changes, better forms and reliable conversion tracking.",
  },
  "grow-local-visibility": {
    title: "Grow Your Local Visibility",
    description: "Help local customers find your business through Google Business Profile, useful service-area pages, local SEO, reviews and clearer enquiry tracking.",
  },
  "outsource-digital-marketing": {
    title: "Outsource Your Digital Marketing",
    description: "Add joined-up UK digital marketing support across paid media, SEO, social, website development, maintenance, planning and clear reporting.",
  },
};

export function generateStaticParams() {
  return solutionOrder.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = metadataBySlug[slug];
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://onlinemarketinghelp.co.uk/solutions/${slug}/` },
    openGraph: {
      title: `${meta.title} | Online Marketing Help`,
      description: meta.description,
      type: "website",
      locale: "en_GB",
      url: `https://onlinemarketinghelp.co.uk/solutions/${slug}/`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const content = solutions[slug];
  if (!content) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: metadataBySlug[slug].title,
    description: metadataBySlug[slug].description,
    provider: {
      "@type": "Organization",
      name: "Online Marketing Help",
      url: "https://onlinemarketinghelp.co.uk/",
    },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    url: `https://onlinemarketinghelp.co.uk/solutions/${slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <SolutionPage content={content} />
    </>
  );
}
