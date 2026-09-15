import Image from "next/image";
import Link from "next/link";
import { SmallStar } from "@/components/Decorations";

const highlights = [
  { title: "Weddings", caption: "First dance to last song" },
  { title: "Birthdays", caption: "Any age, any crowd" },
  { title: "Social Events", caption: "Work, hens and more" },
  { title: "Private Groups", caption: "Lessons at your pace" },
];

// Dividers: 2x2 on mobile, a single row of four from md up
const highlightBorders = [
  "pr-4 md:pr-6",
  "border-l pl-4 md:px-6",
  "border-t pr-4 md:border-t-0 md:border-l md:px-6",
  "border-t border-l pl-4 md:border-t-0 md:pl-6",
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function HomeHero() {
  return (
    <section
      id="home-hero"
      aria-labelledby="hero-heading"
      className="grain relative isolate flex min-h-[min(100svh,1000px)] flex-col overflow-hidden bg-[#1E0F0B]"
    >
      {/* Background photo */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center]"
      />

      {/* Legibility gradients */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-[#1E0F0B]/90 via-[#1E0F0B]/60 to-[#1E0F0B]/15"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#1E0F0B]/35 md:hidden" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-t from-[#1E0F0B]/80 to-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-[var(--gutter)]">
        {/* Copy */}
        <div className="flex flex-1 flex-col justify-center pb-12 pt-32 md:pb-16 md:pt-40">
          <div className="max-w-[40rem]">
            <p
              className="fade-up brygada flex items-center gap-3 text-[length:clamp(0.68rem,0.5vw+0.55rem,0.85rem)] font-bold uppercase tracking-[0.35em] text-[#D49C84]"
              style={delay(0)}
            >
              <SmallStar size={14} color="#C483C8" className="shrink-0" />
              Line Dancing Lessons &amp; Events
            </p>

            <h1
              id="hero-heading"
              className="fade-up rye mt-6 text-[length:clamp(2.3rem,6vw,5.25rem)] uppercase leading-[1.08] tracking-wide text-[#F7EAD8]"
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
              className="fade-up brygada mt-9 text-[length:clamp(1.1rem,1.8vw,1.5rem)] italic text-[#F2B8CE]"
              style={delay(160)}
            >
              It&apos;s more than a dance, it&apos;s a good time.
            </p>

            <p
              className="fade-up mt-4 max-w-[34rem] text-[length:clamp(0.95rem,0.4vw+0.85rem,1.125rem)] leading-relaxed text-[#F7EAD8]/80"
              style={delay(240)}
            >
              Beginner and intermediate line dancing for weddings, birthdays, social
              events and private groups. We bring the steps, you bring the good time.
            </p>

            <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row" style={delay(320)}>
              <Link
                href="/contact"
                className={`brygada inline-flex h-12 items-center justify-center border-[1.5px] border-[#F7EAD8] bg-[#F7EAD8] px-8 text-xs font-bold uppercase tracking-[0.25em] text-[#6B4841] transition-colors duration-300 hover:border-[#F7EAD8] hover:bg-[#6B4841] hover:text-[#F7EAD8] ${focusRing}`}
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
        </div>

        {/* Highlight strip */}
        <ul
          className="fade-up grid grid-cols-2 border-t border-[#F7EAD8]/15 md:grid-cols-4"
          style={delay(420)}
        >
          {highlights.map((h, i) => (
            <li key={h.title} className={`border-[#F7EAD8]/15 ${highlightBorders[i]}`}>
              <Link href="/services" className={`group block py-5 md:py-7 ${focusRing}`}>
                <span className="rye block text-[length:clamp(0.95rem,1.2vw,1.2rem)] uppercase tracking-wide text-[#F7EAD8] transition-colors duration-300 group-hover:text-[#C483C8]">
                  {h.title}
                </span>
                <span className="brygada mt-1.5 block text-sm italic text-[#F7EAD8]/65">
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
