import type { NextConfig } from "next";

/* wildflowerlinedancing.com is the main address. Every other domain
   (www and the Vancouver domain) permanently redirects to it, keeping
   the same page path, so search engines see one site instead of four. */
const PRIMARY = "https://wildflowerlinedancing.com";

const redirectHosts = [
  "www.wildflowerlinedancing.com",
  "vancouverlinedancing.com",
  "www.vancouverlinedancing.com",
  /* Vercel's own address, so Google never sees a duplicate copy of the site */
  "line-dancing-lessons.vercel.app",
];

/* The printed posters' Tickets QR code points at /tickets. The Halloween
   event is over, so it now goes to the Competitions page, where the next
   event's tickets will be. Temporary (307) so it can point at a specific
   ticket page again later without browsers having cached it. */
const TICKETS_URL = "/competitions";

const nextConfig: NextConfig = {
  /* Browsers and crawlers that still ask for /favicon.ico get the flower icon */
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon.png" }];
  },
  async redirects() {
    return [
      ...redirectHosts.map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: `${PRIMARY}/:path*`,
        permanent: true,
      })),
      { source: "/tickets", destination: TICKETS_URL, permanent: false },
      /* The old single event page. Instagram, posters and QR codes link here. */
      {
        source: "/competition",
        destination: "/competitions/dance-till-you-drop-dead-2026",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
