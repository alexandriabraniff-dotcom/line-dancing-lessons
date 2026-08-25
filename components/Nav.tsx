"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const handleScroll = () => {
      const hero = document.getElementById("home-hero");
      if (!hero) return;
      const threshold = hero.offsetTop + hero.offsetHeight * 0.75;
      setVisible(window.scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 bg-[#F7EAD8] border-b border-[#6B4841]/10 transition-all duration-500 ease-out ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
          {/* Left links */}
          <ul className="hidden md:flex gap-8 items-center">
            {links.slice(0, 2).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rye text-[0.6rem] tracking-[0.3em] uppercase transition-colors ${
                    pathname === l.href
                      ? "text-[#C483C8]"
                      : "text-[#6B4841]/60 hover:text-[#6B4841]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center logo */}
          <Link href="/" className="flex flex-col items-center leading-none gap-0.5">
            <span className="rye text-xl text-[#6B4841] tracking-widest leading-none uppercase">Wildflower</span>
            <span className="brygada font-bold text-xs text-[#C483C8] tracking-wide">Line Dancing</span>
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
                      : "text-[#6B4841]/60 hover:text-[#6B4841]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

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
          <div className="md:hidden bg-[#F7EAD8] border-t border-[#6B4841]/10 px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rye text-[0.6rem] tracking-[0.3em] uppercase ${
                  pathname === l.href ? "text-[#C483C8]" : "text-[#6B4841]/60"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rye text-xs border border-[#C483C8]/40 text-[#C483C8] px-5 py-2.5 tracking-widest text-center w-fit mt-1"
            >
              Book Now
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
