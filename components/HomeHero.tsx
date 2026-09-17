import Image from "next/image";
import Link from "next/link";
import { HeroNav } from "@/components/Nav";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const buttonBase =
  "brygada inline-flex whitespace-nowrap h-[45px] lg:h-[var(--hero-btn-h)] items-center justify-center border-[1.5px] px-[var(--hero-btn-px)] text-[length:var(--hero-btn-text)] font-bold uppercase tracking-[0.25em] transition-colors duration-300";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

/* Split hero: cream copy panel on the left, photo on the right (photo below
   the copy on phones). Sizes come from the --hero-* variables in globals.css. */
export default function HomeHero() {
  return (
    <section
      id="home-hero"
      aria-label="Line Dancing Lessons & Events"
      className="relative isolate grid min-h-svh grid-rows-[auto_minmax(0,1fr)_auto] bg-[#F7EAD8] lg:grid-cols-[1.1fr_1fr] lg:grid-rows-[auto_1fr]"
    >
      {/* Photo: arch under the menu on phones (ends at 50% of screen), right half on desktop */}
      <div className="relative row-start-2 mx-[var(--hero-gutter)] mt-[calc(var(--hero-gutter)-var(--hero-pad-top)-2.75rem)] min-h-[calc(50svh-var(--hero-gutter))] overflow-hidden rounded-t-[50vw] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:mt-0 lg:h-auto lg:rounded-none">
        <Image
          src="/hero-crowd.jpg"
          alt="A concert crowd raising cowboy hats under stage lights"
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[50%_70%] lg:object-[50%_60%]"
        />
        {/* Phones: logo centred on the arch photo */}
        <div aria-hidden className="absolute inset-0 bg-[#1E0F0B]/25 lg:hidden" />
        <Image
          src="/wildflower-logo.png"
          alt="Wildflower Line Dancing"
          width={550}
          height={550}
          preload
          sizes="60vw"
          className="absolute left-1/2 top-[7svh] w-[45%] -translate-x-1/2 drop-shadow-[0_8px_20px_rgba(30,15,11,0.45)] lg:hidden"
        />
        {/* Phones: dark brown title with a white outline, centred between logo and arch bottom */}
        <h1
          id="hero-heading"
          className="fade-up rye absolute inset-x-0 top-[calc((7svh+(100vw-2*var(--hero-gutter))*0.45+100%)/2)] -translate-y-1/2 whitespace-nowrap text-center text-[length:clamp(1.4rem,7.4vw,2.4rem)] uppercase leading-[1.08] tracking-wide text-[#6B4841] [text-shadow:-1.5px_-1.5px_0_#fff,1.5px_-1.5px_0_#fff,-1.5px_1.5px_0_#fff,1.5px_1.5px_0_#fff,0_-1.5px_0_#fff,0_1.5px_0_#fff,-1.5px_0_0_#fff,1.5px_0_0_#fff] lg:hidden"
          style={delay(0)}
        >
          Line Dancing
          <br />
          Lessons &amp; Events
        </h1>
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
      <div className="relative z-10 row-start-3 flex flex-col items-center justify-center px-[var(--hero-gutter)] pt-3 pb-[var(--hero-gap-lg)] lg:row-start-2 lg:pt-[var(--hero-gap-lg)] lg:pb-[var(--hero-gap-lg)] lg:py-[max(1.5rem,4vh)] text-center lg:col-start-1 lg:items-start lg:text-left">
        <h1
          className="fade-up rye hidden uppercase leading-[1.08] tracking-wide text-[#6B4841] lg:block lg:whitespace-nowrap lg:text-[length:max(2.3rem,calc(var(--vu)*3.9))]"
          style={delay(0)}
        >
          Line Dancing
          <br />
          Lessons &amp; Events
        </h1>


        <p
          className="fade-up max-w-[34rem] text-[length:var(--hero-body)] leading-relaxed text-[#6B4841] lg:mt-[var(--hero-gap)] lg:text-[#6B4841]/80"
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
