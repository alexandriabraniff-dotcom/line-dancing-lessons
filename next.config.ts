import type { NextConfig } from "next";

/* wildflowerlinedancing.com is the main address. Every other domain
   (www and the Vancouver domain) permanently redirects to it, keeping
   the same page path, so search engines see one site instead of four. */
const PRIMARY = "https://wildflowerlinedancing.com";

const redirectHosts = [
  "www.wildflowerlinedancing.com",
  "vancouverlinedancing.com",
  "www.vancouverlinedancing.com",
];

const nextConfig: NextConfig = {
  /* Browsers and crawlers that still ask for /favicon.ico get the flower icon */
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon.png" }];
  },
  async redirects() {
    return redirectHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `${PRIMARY}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
