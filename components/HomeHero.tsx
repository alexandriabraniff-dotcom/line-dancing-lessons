"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function HomeHero() {
  const pathname = usePathname();

  return (
    <section id="home-hero" className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/hero-bg.png" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1E0F0B]/50" />

      {/* ── Inline Nav ── */}
      <nav className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-6 pb-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left links */}
          <ul className="hidden md:flex gap-8 items-center">
            {links.slice(0, 2).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rye text-[0.6rem] tracking-[0.3em] uppercase transition-colors ${
                    pathname === l.href
                      ? "text-[#C483C8]"
                      : "text-[#F7EAD8]/70 hover:text-[#F7EAD8]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center logo */}
          <Link href="/" className="flex flex-col items-center leading-none gap-0.5">
            <span className="rye text-2xl text-[#6B4841] tracking-widest leading-none uppercase">Wildflower</span>
            <span className="brygada font-bold text-sm text-[#C483C8] tracking-wide">Line Dancing</span>
          </Link>

          {/* Right links */}
          <ul className="hidden md:flex gap-8 items-center">
            {links.slice(2).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rye text-[0.6rem] tracking-[0.3em] uppercase transition-colors ${
                    pathname === l.href
                      ? "text-[#C483C8]"
                      : "text-[#F7EAD8]/70 hover:text-[#F7EAD8]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile */}
          <Link
            href="/contact"
            className="md:hidden rye text-[0.6rem] border border-[#C483C8]/40 text-[#C483C8] px-4 py-2 rounded-full tracking-widest"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Small label */}
          <p className="rye text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-4">
            Lessons &amp; Events for Every Occasion
          </p>

          {/* Big heading */}
          <h1
            className="rye text-[#F7EAD8] leading-[0.95] tracking-wide uppercase max-w-4xl"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
          >
            Line Dancing
            <br />
            That Brings
            <br />
            People Together
          </h1>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="rye text-xs border border-[#C483C8]/50 text-[#C483C8] px-8 py-3.5 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#1E0F0B] transition-all inline-block"
            >
              Book Your Session &#8594;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
