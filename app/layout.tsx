import type { Metadata } from "next";
import { Rye, Dancing_Script, Lato } from "next/font/google";
import "./globals.css";

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rye",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wildflower Line Dancing",
  description: "Wildflower Line Dancing — coming soon. Get in touch at 250-650-1391.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rye.variable} ${dancingScript.variable} ${lato.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
