import type { Metadata } from "next";
import { Rye, Brygada_1918, Lato } from "next/font/google";
import "./globals.css";

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rye",
  display: "swap",
});

const brygada = Brygada_1918({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-brygada",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://wildflowerlinedancing.com";
const SITE_NAME = "Wildflower Line Dancing";

/* Shown as the grey caption under the title in Google results (kept under ~155 characters) */
const SITE_DESCRIPTION =
  "Beginner and intermediate friendly line dancing in Vancouver for weddings, birthdays, bachelorette parties, corporate events and private groups. We come to you.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "line dancing Vancouver",
    "line dancing lessons",
    "beginner line dancing",
    "wedding line dance",
    "bachelorette party line dancing",
    "corporate event line dancing",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_CA",
    images: [{ url: "/hero-bg.png", alt: "A packed dance floor of line dancers in cowboy boots" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* Structured data: tells Google the site's name and logo (the flower icon)
   so results show "Wildflower Line Dancing" instead of the bare domain */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ["Wildflower", "wildflowerlinedancing.com"],
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-CA",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
        width: 550,
        height: 550,
      },
      description: SITE_DESCRIPTION,
      areaServed: {
        "@type": "Place",
        name: "Greater Vancouver, British Columbia, Canada",
      },
      sameAs: ["https://www.instagram.com/wildflowerlinedancing/"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rye.variable} ${brygada.variable} ${lato.variable} h-full`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
