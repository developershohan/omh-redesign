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
    ];
  },
};

export default nextConfig;
