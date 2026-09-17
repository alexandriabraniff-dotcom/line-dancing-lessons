import Image from "next/image";
import Link from "next/link";
import { HeroNav } from "@/components/Nav";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const buttonBase =
  "brygada inline-flex h-[var(--hero-btn-h)] items-center justify-center border-[1.5px] px-[var(--hero-btn-px)] text-[length:var(--hero-btn-text)] font-bold uppercase tracking-[0.25em] transition-colors duration-300";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

/* Split hero: cream copy panel on the left, photo on the right (photo below
   the copy on phones). Sizes come from the --hero-* variables in globals.css. */
export default function HomeHero() {
  return (
    <section
      id="home-hero"
      aria-labelledby="hero-heading"
      className="relative isolate grid min-h-svh grid-rows-[auto_1fr_minmax(34svh,auto)] bg-[#F7EAD8] lg:grid-cols-2 lg:grid-rows-[auto_1fr]"
    >
      {/* Photo: right half on desktop, bottom band on phones */}
      <div className="relative row-start-3 overflow-hidden lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Image
          src="/hero-bg.png"
          alt="Dancers in cowboy boots line dancing under string lights"
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
        {/* Soft shade behind the nav links on desktop */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 hidden h-1/3 bg-linear-to-b from-[#1E0F0B]/60 to-transparent lg:block"
        />
      </div>

      {/* Navbar spans both halves */}
      <div className="relative z-20 row-start-1 lg:col-span-2">
        <HeroNav />
      </div>

      {/* Copy */}
      <div className="relative z-10 row-start-2 flex flex-col justify-center px-[var(--hero-gutter)] py-[max(1.5rem,4vh)] lg:col-start-1">
        <p
          className="fade-up brygada text-[length:var(--hero-eyebrow)] font-bold uppercase tracking-[0.35em] text-[#D49C84]"
          style={delay(0)}
        >
          Line Dancing Lessons &amp; Events
        </p>

        <h1
          id="hero-heading"
          className="fade-up rye mt-[var(--hero-gap-sm)] text-[length:max(2rem,calc(var(--vu)*4.2))] uppercase leading-[1.08] tracking-wide text-[#6B4841]"
          style={delay(80)}
        >
          Lessons for
          <br />
          Every Occasion
        </h1>

        <p
          className="fade-up mt-[var(--hero-gap)] max-w-[34rem] text-[length:var(--hero-body)] leading-relaxed text-[#6B4841]/80"
          style={delay(160)}
        >
          Beginner and intermediate line dancing for weddings, birthdays, social events and private groups.
        </p>

        <div
          className="fade-up mt-[var(--hero-gap-lg)] flex flex-col gap-3 sm:flex-row sm:gap-[max(1rem,calc(var(--vu)*1.2))]"
          style={delay(240)}
        >
          <Link
            href="/services"
            className={`${buttonBase} border-[#6B4841] bg-[#6B4841] text-[#F7EAD8] hover:border-[#1E0F0B] hover:bg-[#1E0F0B] ${focusRing}`}
          >
            Book Your Event
          </Link>
          <Link
            href="/contact"
            className={`${buttonBase} border-[#6B4841] text-[#6B4841] hover:bg-[#6B4841] hover:text-[#F7EAD8] ${focusRing}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
