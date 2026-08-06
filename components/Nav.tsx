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
    <header className="sticky top-0 z-50 bg-[#F7EAD8]/95 backdrop-blur-sm border-b border-[#D49C84]/40">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="rye text-xl text-[#6B4841] tracking-wide">Wildflower</span>
          <span className="brygada font-bold italic text-sm text-[#C483C8] tracking-wide">Line Dancing</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rye text-sm tracking-widest transition-colors ${
                  pathname === l.href
                    ? "text-[#C483C8]"
                    : "text-[#6B4841] hover:text-[#C483C8]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-block rye text-xs bg-[#6B4841] text-[#F7EAD8] px-5 py-2 rounded-full tracking-widest hover:bg-[#C483C8] transition-colors"
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
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F7EAD8] border-t border-[#D49C84]/40 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rye text-sm tracking-widest ${
                pathname === l.href ? "text-[#C483C8]" : "text-[#6B4841]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="rye text-xs bg-[#6B4841] text-[#F7EAD8] px-5 py-2 rounded-full tracking-widest text-center w-fit"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
