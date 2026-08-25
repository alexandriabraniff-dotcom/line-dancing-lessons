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

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESIGNER CREDIT BANNER - remove only after client payment */}
      <div className="bg-[#1E0F0B] text-[#F7EAD8]/60 text-center py-1.5" style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}>
        Website designed by{" "}
        <a href="https://alexandriabraniff.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C483C8] transition-colors">
          Alexandria Braniff
        </a>
        {" "}&mdash;{" "}
        <a href="mailto:hello@alexandriabraniff.com" className="underline hover:text-[#C483C8] transition-colors">
          hello@alexandriabraniff.com
        </a>
      </div>
      {/* END DESIGNER CREDIT BANNER */}

      <header className="sticky top-0 z-50 bg-[#F7EAD8]/95 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none gap-0.5">
            <span className="rye text-lg text-[#6B4841] tracking-wide leading-none">Wildflower</span>
            <span className="brygada font-bold italic text-xs text-[#C483C8] tracking-wide">Line Dancing</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 items-center">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`section-label transition-colors ${
                    pathname === l.href
                      ? "text-[#C483C8]"
                      : "hover:text-[#6B4841]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-block rye text-xs bg-[#6B4841] text-[#F7EAD8] px-5 py-2.5 rounded-full tracking-widest hover:bg-[#C483C8] transition-colors"
          >
            Book Now
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#6B4841] p-2"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M5 17L17 5M5 5l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M3 6h16M3 12h16M3 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-[#F7EAD8] border-t border-[#6B4841]/12 px-6 md:px-12 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`section-label ${
                  pathname === l.href ? "text-[#C483C8]" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rye text-xs bg-[#6B4841] text-[#F7EAD8] px-5 py-2.5 rounded-full tracking-widest text-center w-fit mt-1"
            >
              Book Now
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
