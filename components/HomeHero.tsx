import Image from "next/image";
import Link from "next/link";
import { HeroNav } from "@/components/Nav";
import { SmallStar } from "@/components/Decorations";

const highlights = [
  { title: "Weddings", caption: "First dance to last song" },
  { title: "Birthdays", caption: "Any age, any crowd" },
  { title: "Social Events", caption: "Work, hens and more" },
  { title: "Private Groups", caption: "Lessons at your pace" },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

/* Every size in the hero scales with BOTH the screen width and height
   (min of a vw and a vh value), so the whole hero, from logo to highlight
   strip, fits inside one screen on phones, laptops and large monitors. */
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
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-linear-to-t from-[#1E0F0B]/80 to-transparent"
      />

      {/* Navbar */}
      <div className="relative z-20">
        <HeroNav />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-[var(--gutter)]">
        {/* Copy */}
        <div className="flex flex-1 flex-col items-center justify-center py-[clamp(1.25rem,4vh,3rem)] text-center">
          <p
            className="fade-up brygada flex items-center gap-3 text-[length:clamp(0.62rem,min(0.9vw,1.6vh),0.85rem)] font-bold uppercase tracking-[0.35em] text-[#D49C84]"
            style={delay(0)}
          >
            <SmallStar size={12} color="#C483C8" className="shrink-0" />
            Line Dancing Lessons &amp; Events
            <SmallStar size={12} color="#C483C8" className="shrink-0" />
          </p>

          <h1
            id="hero-heading"
            className="fade-up rye mt-[clamp(0.75rem,2.2vh,1.5rem)] text-[length:clamp(1.85rem,min(6.4vw,8.5vh),5.75rem)] uppercase leading-[1.08] tracking-wide text-[#F7EAD8]"
            style={delay(80)}
          >
            Lessons for
            <br />
            <span className="relative inline-block">
              Every Occasion
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                fill="none"
                className="absolute -bottom-[0.2em] left-0 h-[0.18em] w-full text-[#D49C84]"
              >
                <path
                  d="M2 8 C 50 2, 100 11, 150 6 S 250 2, 298 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
          </h1>

          <p
            className="fade-up brygada mt-[clamp(1rem,3vh,2rem)] text-[length:clamp(1rem,min(1.8vw,2.6vh),1.5rem)] italic text-[#F2B8CE]"
            style={delay(160)}
          >
            It&apos;s more than a dance, it&apos;s a good time.
          </p>

          <p
            className="fade-up mt-[clamp(0.5rem,1.4vh,1rem)] max-w-[36rem] text-[length:clamp(0.9rem,min(1.2vw,2vh),1.125rem)] leading-relaxed text-[#F7EAD8]/80 [@media(max-height:640px)]:hidden"
            style={delay(240)}
          >
            Beginner and intermediate line dancing for weddings, birthdays, social
            events and private groups. We bring the steps, you bring the good time.
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
              className={`brygada group inline-flex h-12 items-center justify-center gap-3 border-[1.5px] border-[#F7EAD8]/70 px-8 text-xs font-bold uppercase tracking-[0.25em] text-[#F7EAD8] transition-colors duration-300 hover:border-[#F7EAD8] hover:bg-[#F7EAD8]/10 ${focusRing}`}
            >
              Explore Services
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Highlight strip (tablet and up, hidden on very short screens) */}
        <ul
          className="fade-up hidden grid-cols-4 border-t border-[#F7EAD8]/15 md:grid [@media(max-height:560px)]:hidden"
          style={delay(420)}
        >
          {highlights.map((h, i) => (
            <li key={h.title} className={i > 0 ? "border-l border-[#F7EAD8]/15" : ""}>
              <Link
                href="/services"
                className={`group block px-4 py-[clamp(0.75rem,2.6vh,1.75rem)] text-center ${focusRing}`}
              >
                <span className="rye block text-[length:clamp(0.85rem,min(1.2vw,2.2vh),1.2rem)] uppercase tracking-wide text-[#F7EAD8] transition-colors duration-300 group-hover:text-[#C483C8]">
                  {h.title}
                </span>
                <span className="brygada mt-1 block text-[length:clamp(0.75rem,min(1vw,1.8vh),0.9rem)] italic text-[#F7EAD8]/65 [@media(max-height:680px)]:hidden">
                  {h.caption}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
