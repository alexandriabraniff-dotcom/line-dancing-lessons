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
    <section id="home-hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background - dark, moody, mystical */}
      <div className="absolute inset-0 bg-[#1E0F0B]" />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 80%, #C483C8 0%, transparent 60%)",
        }}
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain" />

      {/* ── Inline Nav ── */}
      <nav className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-16 pt-8 pb-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none gap-0.5">
          <span className="rye text-lg text-[#F7EAD8] tracking-wide leading-none">Wildflower</span>
          <span className="brygada font-bold italic text-xs text-[#C483C8] tracking-wide">Line Dancing</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rye text-[0.6rem] tracking-[0.3em] uppercase transition-colors ${
                  pathname === l.href
                    ? "text-[#C483C8]"
                    : "text-[#F7EAD8]/50 hover:text-[#F7EAD8]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-block rye text-xs border border-[#F7EAD8]/25 text-[#F7EAD8] px-5 py-2.5 rounded-full tracking-widest hover:bg-[#F7EAD8] hover:text-[#1E0F0B] transition-all"
        >
          Book Now
        </Link>

        {/* Mobile - just Book Now, since the scroll nav handles mobile menu */}
        <Link
          href="/contact"
          className="md:hidden rye text-[0.6rem] border border-[#F7EAD8]/25 text-[#F7EAD8] px-4 py-2 rounded-full tracking-widest"
        >
          Book Now
        </Link>
      </nav>

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Label */}
          <p className="rye text-[0.6rem] tracking-[0.3em] uppercase text-[#D49C84] mb-8">
            Line Dancing Lessons &amp; Events
          </p>

          {/* Main title */}
          <h1
            className="rye text-[#F7EAD8] leading-[0.85] tracking-wide uppercase"
            style={{ fontSize: "clamp(4rem, 16vw, 14rem)" }}
          >
            Wild
            <br />
            <span className="text-[#C483C8]">flower</span>
          </h1>

          {/* Tagline + CTAs */}
          <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <p
              className="brygada italic text-[#F7EAD8]/70 leading-snug max-w-lg"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
            >
              It&apos;s more than a dance,
              <br />
              it&apos;s a good time.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="rye text-sm bg-[#F7EAD8] text-[#1E0F0B] px-9 py-3.5 rounded-full tracking-widest hover:bg-[#C483C8] hover:text-[#1E0F0B] transition-colors"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="rye text-sm text-[#F7EAD8]/60 tracking-widest hover:text-[#F7EAD8] transition-colors flex items-center gap-2"
              >
                See Services <span className="text-base">&#8594;</span>
              </Link>
            </div>
          </div>

          {/* Service tags */}
          <div className="mt-16 pt-6 border-t border-[#F7EAD8]/10">
            <p className="rye text-[0.55rem] tracking-[0.35em] uppercase text-[#F7EAD8]/25">
              Weddings&nbsp;&nbsp;&#183;&nbsp;&nbsp;Birthdays&nbsp;&nbsp;&#183;&nbsp;&nbsp;Events&nbsp;&nbsp;&#183;&nbsp;&nbsp;Private Groups
            </p>
          </div>
        </div>
      </div>

      {/* ── Hero Image Placeholder (bottom overlay) ── */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 -mb-24 md:-mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="image-placeholder w-full aspect-[2.4/1] rounded-2xl !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.06]">
            <span className="!text-[#F7EAD8]/25">Hero image / Group dancing shot</span>
          </div>
        </div>
      </div>
    </section>
  );
}
