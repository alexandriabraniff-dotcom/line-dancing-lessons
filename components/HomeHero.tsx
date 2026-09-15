import Image from "next/image";
import Link from "next/link";
import { HeroNav } from "@/components/Nav";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

/* Every size in the hero scales with BOTH the screen width and height
   (min of a vw and a vh value), so the whole hero fits inside one
   screen on phones, laptops and large monitors. */
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
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-[var(--gutter)] py-[clamp(1.5rem,5vh,4rem)] text-center">
        <p
          className="fade-up brygada text-[length:clamp(0.62rem,min(0.9vw,1.6vh),0.85rem)] font-bold uppercase tracking-[0.35em] text-[#D49C84]"
          style={delay(0)}
        >
          Line Dancing Lessons &amp; Events
        </p>

        <h1
          id="hero-heading"
          className="fade-up rye mt-[clamp(0.75rem,2.2vh,1.5rem)] text-[length:clamp(1.85rem,min(6.4vw,8.5vh),5.75rem)] uppercase leading-[1.08] tracking-wide text-[#F7EAD8]"
          style={delay(80)}
        >
          Lessons for
          <br />
          Every Occasion
        </h1>

        <p
          className="fade-up mt-[clamp(1rem,3vh,1.75rem)] max-w-[36rem] text-[length:clamp(0.95rem,min(1.3vw,2.2vh),1.2rem)] leading-relaxed text-[#F7EAD8]/85"
          style={delay(160)}
        >
          Beginner and intermediate line dancing for weddings, birthdays, social
          events and private groups.
        </p>

        <div
          className="fade-up mt-[clamp(1.25rem,4vh,2.5rem)] flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4"
          style={delay(320)}
        >
          <Link
            href="/contact"
            className={`brygada inline-flex h-12 items-center justify-center border-[1.5px] border-[#F7EAD8] bg-[#F7EAD8] px-8 text-xs font-bold uppercase tracking-[0.25em] text-[#6B4841] transition-colors duration-300 hover:bg-[#6B4841] hover:text-[#F7EAD8] ${focusRing}`}
          >
            Book Your Event
          </Link>
          <Link
            href="/services"
            className={`brygada inline-flex h-12 items-center justify-center border-[1.5px] border-[#F7EAD8]/70 px-8 text-xs font-bold uppercase tracking-[0.25em] text-[#F7EAD8] transition-colors duration-300 hover:border-[#F7EAD8] hover:bg-[#F7EAD8]/10 ${focusRing}`}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
