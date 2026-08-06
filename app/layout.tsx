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

export const metadata: Metadata = {
  title: "Wildflower Line Dancing",
  description: "It's more than a dance, it's a good time. Weddings, birthdays, social events and private groups.",
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
