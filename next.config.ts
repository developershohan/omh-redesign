import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-hosted on the VPS: bundle a minimal server into .next/standalone.
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "onlinemarketinghelp.co.uk",
        pathname: "/wp-content/uploads/**",
      },
      // Blog images uploaded through Sanity Studio.
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
    ],
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/insights", permanent: true },
      // Phase 4: the four standalone legacy case-study pages now live in the
      // /case-studies/[slug] system, so their old URLs keep their equity.
      {
        source: "/ppc-for-fleming-verandas-case-study",
        destination: "/case-studies/fleming-verandas",
        permanent: true,
      },
      {
        source: "/search-engine-optimisation-for-california-accounting-case-study",
        destination: "/case-studies/california-accounting",
        permanent: true,
      },
      {
        source: "/social-care-illustration-design-case-study",
        destination: "/case-studies/allied-hands",
        permanent: true,
      },
      {
        source: "/website-design-for-out-out-entry-website-design",
        destination: "/case-studies/out-out-entry",
        permanent: true,
      },
      // SEO brief (27 Sep 2026): the organic social page moved to the keyword slug.
      { source: "/social-media-marketing", destination: "/social-media-marketing-services", permanent: true },
      // SEO brief (1 Oct 2026): the national SEO landing page moved off the listicle slug.
      { source: "/best-seo-services", destination: "/seo-services", permanent: true },
      // Oct 2026: retired services. Their URLs pass to the closest live page.
      { source: "/search-engine-optimisation", destination: "/seo-services", permanent: true },
      { source: "/best-local-seo-services", destination: "/local-seo", permanent: true },
      { source: "/web-content-writing-request-quote", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
