"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function HomeHero() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="home-hero" className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/hero-bg.png" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Light haze overlay */}
      <div className="absolute inset-0 bg-[#F7EAD8]/30" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1E0F0B]/35" />

      {/* ── Mobile fullscreen menu ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1E0F0B] flex flex-col md:hidden">
          {/* Close header */}
          <div className="flex items-center justify-between px-6 pt-8 pb-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex flex-col leading-none gap-0.5">
              <span className="rye text-2xl text-[#6B4841] tracking-widest leading-none uppercase">Wildflower</span>
              <span className="brygada font-bold text-sm text-[#C483C8] tracking-wide">Line Dancing</span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#F7EAD8] p-2"
              aria-label="Close menu"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M6 22L22 6M6 6l16 16" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`rye text-3xl tracking-widest uppercase ${
                  pathname === l.href ? "text-[#C483C8]" : "text-[#F7EAD8]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-6 pb-10">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="brygada font-bold text-xs bg-[#F7EAD8] text-[#6B4841] border-2 border-[#6B4841] w-full h-[45px] flex items-center justify-center tracking-[0.25em] uppercase"
            >
              Book Event
            </Link>
          </div>
        </div>
      )}

      {/* ── Inline Nav ── */}
      <nav className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-8 md:pt-[80px] pb-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile: logo left + hamburger right */}
          <Link href="/" className="flex flex-col leading-none gap-0.5 md:hidden">
            <span className="rye text-2xl text-[#6B4841] tracking-widest leading-none uppercase" style={{ textShadow: "0 0 15px rgba(247,234,216,0.8)" }}>Wildflower</span>
            <span className="brygada font-bold text-sm text-[#C483C8] tracking-wide" style={{ textShadow: "0 0 10px rgba(196,131,200,0.5)" }}>Line Dancing</span>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[#F7EAD8] p-2 drop-shadow-lg"
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M4 7h20M4 14h20M4 21h20" />
            </svg>
          </button>

          {/* Desktop: left links */}
          <ul className="hidden md:flex gap-10 items-center">
            {links.slice(0, 2).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`brygada font-bold text-[0.9rem] tracking-[0.3em] uppercase transition-colors drop-shadow-md ${
                    pathname === l.href
                      ? "text-[#C483C8]"
                      : "text-[#F7EAD8] hover:text-[#C483C8]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop: center logo */}
          <Link href="/" className="hidden md:flex flex-col items-center leading-none gap-0.5 relative">
            <span className="absolute inset-0 -inset-x-6 -inset-y-3 bg-[#F7EAD8]/80 rounded-full blur-[2px]" />
            <span className="relative rye text-4xl text-[#6B4841] tracking-widest leading-none uppercase">
              Wildflower
            </span>
            <span className="relative brygada font-bold text-xl text-[#C483C8] tracking-wide">
              Line Dancing
            </span>
          </Link>

          {/* Desktop: right links */}
          <ul className="hidden md:flex gap-10 items-center">
            {links.slice(2).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`brygada font-bold text-[0.9rem] tracking-[0.3em] uppercase transition-colors drop-shadow-md ${
                    pathname === l.href
                      ? "text-[#C483C8]"
                      : "text-[#F7EAD8] hover:text-[#C483C8]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-16 text-center">
        {/* Big heading */}
        <h1
          className="rye text-[#F7EAD8] leading-[0.95] tracking-wide uppercase drop-shadow-lg"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          Lessons
          <br />
          for
          <br />
          Every Occasion
        </h1>

        {/* Subheading */}
        <p
          className="brygada font-bold tracking-[0.3em] uppercase text-[#D49C84] mt-6 drop-shadow-md"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.4rem)" }}
        >
          Events for Beginners &amp; Intermediate
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 w-full sm:w-auto px-6 sm:px-0">
          <Link
            href="/contact"
            className="brygada font-bold text-xs bg-[#F7EAD8] text-[#6B4841] border-2 border-[#6B4841] w-full sm:w-auto px-8 h-[45px] flex items-center justify-center tracking-[0.25em] uppercase hover:bg-[#6B4841] hover:text-[#F7EAD8] transition-all duration-300 shadow-lg"
          >
            Book Event
          </Link>
          <Link
            href="/services"
            className="brygada font-bold text-xs bg-transparent text-[#F7EAD8] border-2 border-[#F7EAD8] w-full sm:w-auto px-8 h-[45px] flex items-center justify-center tracking-[0.25em] uppercase hover:bg-[#F7EAD8] hover:text-[#6B4841] transition-all duration-300 shadow-lg"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
