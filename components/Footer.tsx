"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLinks from "@/components/SocialLinks";
import { phoneHref, site } from "@/lib/site";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const headingClass =
  "brygada mb-4 whitespace-nowrap text-[0.97rem] font-bold uppercase tracking-[0.18em] text-[#D49C84]";

const linkClass = `text-[length:var(--text-body)] transition-colors hover:text-[#C483C8] ${focusRing}`;

/* Get in Touch values scale to their column (cqw) so the email always fits on one line */
const contactValue = `block whitespace-nowrap text-[length:min(var(--text-body),5.9cqw)] transition-colors hover:text-[#C483C8] ${focusRing}`;

const pages = [
  /* TEMPORARY: special event page, remove with lib/event.ts */
  { href: "/competition", label: "Competition" },
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

/* Each links straight to that service's booking form popup */
const services = [
  { key: "weddings", label: "Weddings" },
  { key: "birthdays", label: "Birthdays" },
  { key: "special-events", label: "Special Events" },
  { key: "private-lessons", label: "Private Lessons" },
];

const icons = {
  email: (
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11zm1.5.3 7.5 5.7 7.5-5.7" />
  ),
  phone: (
    <path d="M6.6 3.5h2.6l1.4 4.2-2 1.4a11.6 11.6 0 0 0 5.3 5.3l1.4-2 4.2 1.4v2.6a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" />
  ),
  area: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
};

function ContactRow({ icon, label, children }: { icon: keyof typeof icons; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F7EAD8]/[0.08] text-[#D49C84]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" className="h-[1.1rem] w-[1.1rem]">
          {icons[icon]}
        </svg>
      </span>
      <span className="@container min-w-0 flex-1">
        <span className="block text-[0.92rem] uppercase tracking-[0.2em] text-[#F7EAD8]/45">{label}</span>
        {children}
      </span>
    </li>
  );
}

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="grain relative bg-[#1E0F0B] text-[#F7EAD8]">
      <div className="relative z-10 mx-auto max-w-7xl px-[var(--gutter)] pt-[var(--section)] pb-[clamp(1.5rem,2.5vw,2.5rem)]">
        <div className="grid grid-cols-2 gap-x-[var(--gap)] gap-y-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.7fr)_minmax(0,0.9fr)_minmax(0,1.55fr)] lg:gap-y-12">
          {/* Brand: centred on phones and tablets, left aligned on desktop */}
          <div className="col-span-2 flex flex-col items-center border-b border-[#F7EAD8]/10 pb-10 text-center lg:col-span-1 lg:items-start lg:border-b-0 lg:pb-0 lg:text-left">
            <Link href="/" aria-label="Wildflower Line Dancing, home" className={`inline-block ${focusRing}`}>
              <Image
                src="/wildflower-logo.png"
                alt="Wildflower Line Dancing"
                width={550}
                height={550}
                sizes="140px"
                className="h-auto w-[clamp(6rem,9vw,8rem)]"
              />
            </Link>
            <p className="brygada mt-5 text-[length:clamp(1.05rem,1.3vw,1.35rem)] font-bold uppercase leading-relaxed tracking-[0.25em] text-[#C483C8]">
              It&apos;s more than a dance, it&apos;s a good time.
            </p>
            <p className="mt-3 max-w-xs text-[length:var(--text-body)] leading-relaxed text-[#F7EAD8]/65">
              Beginner and intermediate friendly line dancing for weddings, birthdays, events and private
              groups across {site.serviceArea}.
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

          {/* Get in touch: its own card on phones and tablets */}
          <div className="col-span-2 border border-[#F7EAD8]/10 bg-[#F7EAD8]/[0.03] p-6 lg:col-span-1 lg:border-0 lg:bg-transparent lg:p-0">
            <p className={headingClass}>Get in Touch</p>
            <ul className="space-y-4">
              <ContactRow icon="email" label="Email">
                <a href={`mailto:${site.email}`} className={`${contactValue} text-[#F7EAD8]`}>
                  {site.email}
                </a>
              </ContactRow>
              {site.phone && (
                <ContactRow icon="phone" label="Phone">
                  <a href={phoneHref(site.phone)} className={`${contactValue} text-[#F7EAD8]`}>
                    {site.phone}
                  </a>
                </ContactRow>
              )}
              <ContactRow icon="area" label="We Come to You">
                <span className="block whitespace-nowrap text-[length:min(var(--text-body),5.9cqw)] text-[#F7EAD8]">
                  Anywhere in {site.serviceArea}
                </span>
              </ContactRow>
            </ul>
            <Link
              href="/contact"
              className={`brygada mt-6 flex h-[45px] w-full items-center justify-center bg-[#F7EAD8] px-6 text-[1.08rem] font-bold tracking-[0.18em] text-[#6B4841] transition-colors duration-300 hover:bg-[#C483C8] hover:text-[#1E0F0B] sm:inline-flex sm:w-auto lg:h-11 ${focusRing}`}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-[var(--section-sm)] flex flex-col items-center gap-2 border-t border-[#F7EAD8]/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[1rem] tracking-wider text-[#F7EAD8]/45">
            &copy; {new Date().getFullYear()} Wildflower Line Dancing. All rights reserved.
          </p>
          <p className="text-[1rem] tracking-wider text-[#F7EAD8]/45">
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
