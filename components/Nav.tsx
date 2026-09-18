"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SocialLinks from "@/components/SocialLinks";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

function Logo({ className, preload = false, cream = false }: { className: string; preload?: boolean; cream?: boolean }) {
  return (
    <Image
      src={cream ? "/wildflower-logo-cream.png" : "/wildflower-logo.png"}
      alt="Wildflower Line Dancing"
      width={550}
      height={550}
      preload={preload}
      sizes="(min-width: 2000px) 300px, 180px"
      className={`h-auto ${className}`}
    />
  );
}

/* ── Mobile menu (portalled to <body> so it always covers the viewport) ── */
function MobileMenu({
  pathname,
  onClose,
  onNavigate,
}: {
  pathname: string;
  onClose: () => void;
  onNavigate: () => void;
}) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) onNavigate();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [onClose, onNavigate]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="menu-drop grain fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-[#1E0F0B] lg:hidden"
    >
      <div className="relative z-10 flex items-center justify-between px-[var(--hero-gutter)] pt-[var(--hero-pad-top)]">
        <Link href="/" onClick={onNavigate} className={focusRing}>
          <Logo cream className="w-[var(--hero-logo)]" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className={`relative -mr-2 h-11 w-11 text-[#F7EAD8] ${focusRing}`}
        >
          <span aria-hidden className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 rotate-45 bg-current" />
          <span aria-hidden className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 -rotate-45 bg-current" />
        </button>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-between px-[var(--hero-gutter)] pb-10 pt-10">
        <ul className="flex flex-col items-center gap-1 text-center">
          {links.map((l, i) => {
            const active = pathname === l.href;
            return (
              <li key={l.href} className="fade-up" style={{ animationDelay: `${80 + i * 60}ms` }}>
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={l.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={`rye block py-3 text-[clamp(2.2rem,10.3vw,4rem)] uppercase leading-none tracking-wide ${focusRing} ${
                    active ? "text-[#C483C8]" : "text-[#F7EAD8] active:text-[#C483C8]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          className="fade-up mx-auto mt-12 w-full max-w-sm border-t border-[#F7EAD8]/15 pt-8 text-center"
          style={{ animationDelay: "360ms" }}
        >
          <p className="brygada text-xl font-bold uppercase leading-relaxed tracking-[0.25em] text-[#F7EAD8]">
            It&apos;s more than a dance, it&apos;s a good time.
          </p>
          <Link
            href="/services"
            onClick={onNavigate}
            className={`brygada mt-6 flex h-[45px] w-full items-center justify-center bg-[#F7EAD8] text-base font-bold uppercase tracking-[0.25em] text-[#6B4841] ${focusRing}`}
          >
            Book Your Event
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Shared bar: `hero` sits over the photo, otherwise the solid cream header.
   Sizes come from the --nav-* / --header-* / --hero-* variables in globals.css. ── */
function NavBar({ hero }: { hero: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu whenever the route changes
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const closeMenu = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);
  const navigate = useCallback(() => setOpen(false), []);

  return (
    <>
      <nav
        aria-label={hero ? "Main" : "Site"}
        className={
          hero
            ? "grid w-full grid-cols-[1fr_auto_1fr] items-center pt-[var(--hero-pad-top)] lg:grid-cols-[1.1fr_1fr]"
            : "flex w-full items-center justify-between gap-6 px-[var(--hero-gutter)] py-[var(--header-pad-y)]"
        }
      >
        {/* Logo (plus social icons in the hero), top left */}
        <div className={hero ? "col-start-2 flex items-center justify-center gap-[var(--nav-gap)] lg:col-start-1 lg:justify-start lg:pl-[var(--hero-gutter)]" : "contents"}>
          <Link
            href="/"
            aria-label="Wildflower Line Dancing, home"
            className={`${hero ? "hidden lg:block" : "block"} shrink-0 ${focusRing}`}
          >
            {hero ? (
              <>
                                <Logo preload className="w-[min(36vw,17svh)] lg:w-[var(--hero-logo-main)]" />
              </>
            ) : (
              <Logo className="w-[var(--header-logo)]" />
            )}
          </Link>
          {hero && <SocialLinks className="hidden xl:flex" />}
        </div>

        {/* Links, CTA and menu toggle, right (over the photo in the hero) */}
        <div
          className={`flex items-center justify-end gap-[var(--nav-gap)] ${
            hero ? "col-start-3 pr-[var(--hero-gutter)] lg:col-start-2 lg:pl-[var(--hero-gutter)]" : ""
          }`}
        >
          <ul className="hidden items-center gap-[var(--nav-gap)] whitespace-nowrap lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`nav-link brygada block py-2 text-[length:var(--nav-link)] font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${focusRing} ${
                      hero
                        ? active
                          ? "text-[#C483C8] drop-shadow-[0_1px_6px_rgba(30,15,11,0.6)]"
                          : "text-[#F7EAD8] drop-shadow-[0_1px_6px_rgba(30,15,11,0.6)] hover:text-[#C483C8]"
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

          <Link
            href="/services"
            className={`brygada hidden h-[var(--nav-btn-h)] shrink-0 items-center whitespace-nowrap ${hero ? "2xl:inline-flex" : "lg:inline-flex"} border-[1.5px] px-[var(--nav-btn-px)] text-[length:var(--nav-btn-text)] font-bold uppercase tracking-[0.22em] transition-colors duration-300 ${focusRing} ${
              hero
                ? "border-[#F7EAD8] text-[#F7EAD8] hover:bg-[#F7EAD8] hover:text-[#6B4841]"
                : "border-[#6B4841] bg-[#6B4841] text-[#F7EAD8] hover:border-[#1E0F0B] hover:bg-[#1E0F0B]"
            }`}
          >
            Book Your Event
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className={`relative -mr-2 h-11 w-11 lg:hidden text-[#6B4841] ${focusRing}`}
          >
            <span aria-hidden className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 -translate-y-[7px] bg-current" />
            <span aria-hidden className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 bg-current" />
            <span aria-hidden className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 translate-y-[7px] bg-current" />
          </button>
        </div>
      </nav>

      {open &&
        createPortal(
          <MobileMenu pathname={pathname} onClose={closeMenu} onNavigate={navigate} />,
          document.body
        )}
    </>
  );
}

/* Navbar that lives inside the homepage hero */
export function HeroNav() {
  return <NavBar hero />;
}

/* Fixed header: always shown on inner pages. On the homepage it drops in
   once you are 75% of the way past the hero and stays for the rest of the page. */
export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const hero = document.getElementById("home-hero");
      if (!hero) return;
      setPastHero(window.scrollY >= hero.offsetTop + hero.offsetHeight * 0.75);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const visible = !isHome || pastHero;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-[#6B4841] focus:px-5 focus:py-3 focus:text-[#F7EAD8] brygada font-bold text-base uppercase tracking-[0.25em]"
      >
        Skip to content
      </a>

      <header
        inert={!visible}
        className={`fixed inset-x-0 top-0 z-50 border-b border-[#6B4841]/10 bg-[#F7EAD8]/95 shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)] backdrop-blur-md transition-[translate,opacity] duration-500 ease-out ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <NavBar hero={false} />
      </header>
    </>
  );
}
