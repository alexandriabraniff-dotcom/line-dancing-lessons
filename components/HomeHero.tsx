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
      className="relative isolate grid min-h-svh grid-rows-[auto_auto_1fr] bg-[#F7EAD8] lg:grid-cols-[1.1fr_1fr] lg:grid-rows-[auto_1fr]"
    >
      {/* Photo: arch-framed under the logo on phones, right half on desktop */}
      <div className="relative row-start-2 mx-auto mt-[max(0.5rem,1.5svh)] aspect-[4/5] h-[30svh] overflow-hidden rounded-t-full shadow-[0_18px_40px_-20px_rgba(30,15,11,0.5)] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:mt-0 lg:aspect-auto lg:h-auto lg:rounded-none lg:shadow-none">
        <Image
          src="/hero-crowd.jpg"
          alt="A concert crowd raising cowboy hats under stage lights"
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[50%_70%] lg:object-[50%_60%]"
        />
        {/* Soft shade behind the nav links on desktop */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 hidden h-1/3 bg-linear-to-b from-[#1E0F0B]/60 to-transparent lg:block"
        />
      </div>

      {/* Navbar spans both halves */}
      <div className="relative z-20 row-start-1 lg:col-start-1 lg:col-span-2">
        <HeroNav />
      </div>

      {/* Copy */}
      <div className="relative z-10 row-start-3 flex flex-col items-center justify-center px-[var(--hero-gutter)] py-[max(1rem,3svh)] lg:row-start-2 lg:py-[max(1.5rem,4vh)] text-center lg:col-start-1 lg:items-start lg:text-left">
        <p
          className="fade-up text-[length:var(--hero-body)] leading-relaxed text-[#6B4841] lg:font-[family-name:var(--font-brygada)] lg:text-[length:var(--hero-eyebrow)] lg:font-bold lg:uppercase lg:tracking-[0.35em] lg:text-[#D49C84]"
          style={delay(0)}
        >
          Line Dancing Lessons &amp; Events
        </p>

        <h1
          id="hero-heading"
          className="fade-up rye sr-only mt-[var(--hero-gap-sm)] text-[length:max(2.3rem,calc(var(--vu)*4.4))] uppercase leading-[1.08] tracking-wide text-[#6B4841] lg:not-sr-only"
          style={delay(80)}
        >
          Lessons for
          <br />
          Every Occasion
        </h1>

        <p
          className="fade-up mt-2 max-w-[34rem] text-[length:var(--hero-body)] leading-relaxed text-[#6B4841] lg:mt-[var(--hero-gap)] lg:text-[#6B4841]/80"
          style={delay(160)}
        >
          Beginner and intermediate line dancing for weddings, birthdays, social events and private groups.
        </p>

        <div
          className="fade-up mt-[var(--hero-gap-lg)] flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-[max(1rem,calc(var(--vu)*1.2))]"
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
