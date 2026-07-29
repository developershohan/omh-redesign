import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "onlinemarketinghelp.co.uk",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [{ source: "/blog", destination: "/insights", permanent: true }];
  },
};

export default nextConfig;
