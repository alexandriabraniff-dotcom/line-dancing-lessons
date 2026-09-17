"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLinks from "@/components/SocialLinks";
import { phoneHref, site } from "@/lib/site";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const headingClass =
  "brygada mb-5 text-[0.72rem] font-bold uppercase tracking-[0.3em] text-[#D49C84]";

const linkClass = `text-[length:var(--text-body)] transition-colors hover:text-[#C483C8] ${focusRing}`;

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

/* Each links straight to that service's booking form popup */
const services = [
  { key: "weddings", label: "Weddings" },
  { key: "birthdays", label: "Birthdays" },
  { key: "social-events", label: "Social Events" },
  { key: "private-groups", label: "Private Groups" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="grain relative bg-[#1E0F0B] text-[#F7EAD8]">
      <div className="relative z-10 mx-auto max-w-7xl px-[var(--gutter)] pt-[var(--section)] pb-[clamp(1.5rem,2.5vw,2.5rem)]">
        <div className="grid grid-cols-1 gap-x-[var(--gap)] gap-y-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,0.9fr)_minmax(0,1.2fr)]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Wildflower Line Dancing, home" className={`inline-block ${focusRing}`}>
              <Image
                src="/logo.png"
                alt="Wildflower Line Dancing"
                width={584}
                height={584}
                sizes="140px"
                className="h-auto w-[clamp(6rem,9vw,8rem)]"
              />
            </Link>
            <p className="brygada mt-5 text-[length:clamp(1.05rem,1.3vw,1.35rem)] italic text-[#F2B8CE]">
              It&apos;s more than a dance, it&apos;s a good time.
            </p>
            <p className="mt-3 max-w-xs text-[length:var(--text-body)] leading-relaxed text-[#F7EAD8]/65">
              Beginner and intermediate friendly line dancing for weddings, birthdays, events and
              private groups across {site.serviceArea}.
            </p>
            <SocialLinks tone="dark" className="mt-6" />
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className={headingClass}>Explore</p>
            <ul className="space-y-3">
              {pages.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    className={`${linkClass} ${pathname === href ? "text-[#C483C8]" : "text-[#F7EAD8]/85"}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book a service */}
          <div>
            <p className={headingClass}>Book a Service</p>
            <ul className="space-y-3">
              {services.map(({ key, label }) => (
                <li key={key}>
                  <Link href={`/services#book-${key}`} className={`${linkClass} text-[#F7EAD8]/85`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <p className={headingClass}>Get in Touch</p>
            <ul className="space-y-4">
              <li>
                <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-[#F7EAD8]/45">Email</span>
                <a href={`mailto:${site.email}`} className={`${linkClass} break-all text-[#F7EAD8]`}>
                  {site.email}
                </a>
              </li>
              {site.phone && (
                <li>
                  <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-[#F7EAD8]/45">Phone</span>
                  <a href={phoneHref(site.phone)} className={`${linkClass} text-[#F7EAD8]`}>
                    {site.phone}
                  </a>
                </li>
              )}
              <li>
                <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-[#F7EAD8]/45">We Come to You</span>
                <span className="text-[length:var(--text-body)] text-[#F7EAD8]">Anywhere in {site.serviceArea}</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className={`brygada mt-7 inline-flex h-11 items-center justify-center bg-[#F7EAD8] px-6 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[#6B4841] transition-colors duration-300 hover:bg-[#C483C8] hover:text-[#1E0F0B] ${focusRing}`}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-[var(--section-sm)] flex flex-col gap-3 border-t border-[#F7EAD8]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] tracking-wider text-[#F7EAD8]/45">
            &copy; {new Date().getFullYear()} Wildflower Line Dancing. All rights reserved.
          </p>
          <p className="text-[0.75rem] tracking-wider text-[#F7EAD8]/45">
            Website designed by{" "}
            <a
              href="https://alexandriabraniff.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[#F7EAD8]/70 transition-colors hover:text-[#C483C8] ${focusRing}`}
            >
              Alexandria Braniff
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
