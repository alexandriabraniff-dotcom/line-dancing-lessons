"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SmallStar } from "@/components/Decorations";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Close the mobile menu whenever the route changes
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Solid bar once scrolled; slide away on scroll down, drop back in on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 400) setHidden(false);
      else if (y > lastY) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Scroll lock, Escape to close and focus handling while the menu is open
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, closeMenu]);

  const overHero = isHome && !scrolled;
  const onDark = open || overHero;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#6B4841] focus:px-5 focus:py-3 focus:text-[#F7EAD8] brygada font-bold text-xs uppercase tracking-[0.25em]"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Soft scrim so the bar reads over the hero photo */}
        <div
          aria-hidden
          className={`absolute inset-0 bg-linear-to-b from-[#1E0F0B]/60 to-transparent transition-opacity duration-300 ${
            overHero && !open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Solid cream bar */}
        <div
          aria-hidden
          className={`absolute inset-0 border-b border-[#6B4841]/10 bg-[#F7EAD8]/95 shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)] backdrop-blur-md transition-opacity duration-300 ${
            onDark ? "opacity-0" : "opacity-100"
          }`}
        />

        <nav
          aria-label="Main"
          className={`relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-[var(--gutter)] transition-[height] duration-300 ease-out ${
            overHero ? "h-[72px] md:h-[88px]" : "h-16 md:h-[72px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="Wildflower Line Dancing, home"
            className={`flex shrink-0 flex-col leading-none ${focusRing}`}
          >
            <span
              className={`rye text-[1.35rem] uppercase leading-none tracking-widest transition-colors duration-300 md:text-[1.7rem] ${
                onDark ? "text-[#F7EAD8]" : "text-[#6B4841]"
              }`}
            >
              Wildflower
            </span>
            <span
              className={`brygada mt-1 text-[0.8rem] font-bold italic tracking-wide transition-colors duration-300 md:text-[0.95rem] ${
                onDark ? "text-[#C483C8]" : "text-[#6B4841]/70"
              }`}
            >
              Line Dancing
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-[clamp(1.5rem,3vw,2.75rem)] md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`nav-link brygada block py-2 text-[0.8rem] font-bold uppercase tracking-[0.25em] transition-colors duration-300 lg:text-[0.85rem] ${focusRing} ${
                      onDark
                        ? active
                          ? "text-[#C483C8]"
                          : "text-[#F7EAD8] hover:text-[#C483C8]"
                        : active
                          ? "text-[#6B4841]"
                          : "text-[#6B4841]/75 hover:text-[#6B4841]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className={`brygada hidden h-11 items-center border-[1.5px] px-6 text-[0.75rem] font-bold uppercase tracking-[0.22em] transition-colors duration-300 md:inline-flex ${focusRing} ${
                onDark
                  ? "border-[#F7EAD8] text-[#F7EAD8] hover:bg-[#F7EAD8] hover:text-[#6B4841]"
                  : "border-[#6B4841] bg-[#6B4841] text-[#F7EAD8] hover:border-[#1E0F0B] hover:bg-[#1E0F0B]"
              }`}
            >
              Book Your Event
            </Link>

            {/* Mobile toggle */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => (open ? closeMenu() : setOpen(true))}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`relative -mr-2 h-11 w-11 transition-colors duration-300 md:hidden ${focusRing} ${
                onDark ? "text-[#F7EAD8]" : "text-[#6B4841]"
              }`}
            >
              <span
                aria-hidden
                className={`absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 bg-current transition-[translate,rotate] duration-300 ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-[7px]"
                }`}
              />
              <span
                aria-hidden
                className={`absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                aria-hidden
                className={`absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 bg-current transition-[translate,rotate] duration-300 ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-[7px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu panel (sibling of the header so fixed positioning covers the viewport) */}
      {open && (
        <div
          id="mobile-menu"
          className="menu-drop grain fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#1E0F0B] md:hidden"
        >
          <div className="relative z-10 flex flex-1 flex-col justify-between px-[var(--gutter)] pb-10 pt-28">
            <ul className="flex flex-col gap-1">
              {links.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href} className="fade-up" style={{ animationDelay: `${80 + i * 60}ms` }}>
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`rye flex items-center gap-3 py-3 text-[clamp(2rem,9vw,2.5rem)] uppercase leading-none tracking-wide ${focusRing} ${
                        active ? "text-[#C483C8]" : "text-[#F7EAD8] active:text-[#C483C8]"
                      }`}
                    >
                      {l.label}
                      {active && <SmallStar size={18} color="#C483C8" />}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="fade-up mt-12 border-t border-[#F7EAD8]/15 pt-8" style={{ animationDelay: "360ms" }}>
              <p className="brygada text-lg italic text-[#F2B8CE]">
                It&apos;s more than a dance, it&apos;s a good time.
              </p>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={`brygada mt-6 flex h-12 w-full items-center justify-center bg-[#F7EAD8] text-xs font-bold uppercase tracking-[0.25em] text-[#6B4841] ${focusRing}`}
              >
                Book Your Event
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
