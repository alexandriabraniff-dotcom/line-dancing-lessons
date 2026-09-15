import Image from "next/image";
import Link from "next/link";
import { HeroNav } from "@/components/Nav";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const buttonBase =
  "brygada inline-flex h-[var(--hero-btn-h)] items-center justify-center border-[1.5px] px-[var(--hero-btn-px)] text-[length:var(--hero-btn-text)] font-bold uppercase tracking-[0.25em] transition-colors duration-300";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

/* All hero sizes come from the --hero-* variables in globals.css, which scale
   with the screen (width, limited by height) and have no upper cap. */
export default function HomeHero() {
  return (
    <section
      id="home-hero"
      aria-labelledby="hero-heading"
      className="grain relative isolate flex min-h-svh flex-col overflow-hidden bg-[#1E0F0B]"
    >
      {/* Background photo */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Legibility overlays */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#1E0F0B]/45" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(30,15,11,0.55)_0%,rgba(30,15,11,0)_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-1/3 bg-linear-to-b from-[#1E0F0B]/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-linear-to-t from-[#1E0F0B]/70 to-transparent"
      />

      {/* Navbar */}
      <div className="relative z-20">
        <HeroNav />
      </div>

      {/* Copy */}
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-[var(--hero-gutter)] py-[max(1.5rem,5vh)] text-center">
        <p
          className="fade-up brygada text-[length:var(--hero-eyebrow)] font-bold uppercase tracking-[0.35em] text-[#D49C84]"
          style={delay(0)}
        >
          Line Dancing Lessons &amp; Events
        </p>

        <h1
          id="hero-heading"
          className="fade-up rye mt-[var(--hero-gap-sm)] text-[length:var(--hero-title)] uppercase leading-[1.08] tracking-wide text-[#F7EAD8]"
          style={delay(80)}
        >
          Lessons for
          <br />
          Every Occasion
        </h1>

        <p
          className="fade-up mt-[var(--hero-gap)] max-w-[var(--hero-body-w)] text-[length:var(--hero-body)] leading-relaxed text-[#F7EAD8]/85"
          style={delay(160)}
        >
          Beginner and intermediate line dancing for weddings, birthdays, social
          events and private groups.
        </p>

        <div
          className="fade-up mt-[var(--hero-gap-lg)] flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-[max(1rem,calc(var(--vu)*1.2))]"
          style={delay(240)}
        >
          <Link
            href="/contact"
            className={`${buttonBase} border-[#F7EAD8] bg-[#F7EAD8] text-[#6B4841] hover:bg-[#6B4841] hover:text-[#F7EAD8] ${focusRing}`}
          >
            Book Your Event
          </Link>
          <Link
            href="/services"
            className={`${buttonBase} border-[#F7EAD8]/70 text-[#F7EAD8] hover:border-[#F7EAD8] hover:bg-[#F7EAD8]/10 ${focusRing}`}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
