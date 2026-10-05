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

/* TEMPORARY (Dance Till You Drop Dead, Oct 25): wildflowerlinedancing.com/tickets
   forwards to the AdmitONE ticket page. The Tickets QR code on the printed posters
   points here, so if the ticket page ever changes, update this one line instead of
   reprinting. Keep it in sync with ticketsUrl in lib/event.ts. Not permanent, so
   browsers don't cache it. */
const TICKETS_URL =
  "https://admitone.com/events/vancouver/community/halloween/the-yale-saloon-presents-dance-till-you-drop-dead/HCSUJ0";

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
    ];
  },
};

export default nextConfig;
