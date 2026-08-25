import Link from "next/link";
import HomeHero from "@/components/HomeHero";

const occasions = [
  { title: "Weddings", placeholder: "Wedding dancing photo" },
  { title: "Birthdays", placeholder: "Birthday party photo" },
  { title: "Special Events", placeholder: "Social event photo" },
  { title: "Private Lessons", placeholder: "Private lesson photo" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <HomeHero />

      {/* ── Book by Occasion ── */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            Whatever the occasion, we&apos;ve got you covered
          </p>
          <h2
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
          >
            Our Services
          </h2>

          <div className="mt-12 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
            {occasions.map(({ title, placeholder }) => (
              <Link key={title} href="/services" className="group shrink-0 w-[65vw] sm:w-auto snap-start">
                <div className="image-placeholder aspect-[3/4] mb-4">
                  <span>{placeholder}</span>
                </div>
                <p className="brygada font-bold text-[0.65rem] tracking-[0.25em] uppercase text-[#6B4841]/70 group-hover:text-[#C483C8] transition-colors">
                  {title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-[#1E0F0B] px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              See Us in Action
            </p>
            <h2
              className="rye text-[#F7EAD8] uppercase tracking-wide"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
            >
              Photos &amp; Events
            </h2>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory md:hidden">
            {["Wedding reception", "Birthday party", "Corporate team night", "Private lesson", "Hen's night", "Country bar night", "Community event", "Fundraiser gala", "Bucks night"].map((label) => (
              <div
                key={label}
                className="image-placeholder aspect-square !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.04] group cursor-pointer overflow-hidden shrink-0 w-[55vw] snap-start"
              >
                <span className="!text-[#F7EAD8]/20 text-xs text-center group-hover:!text-[#F7EAD8]/40 transition-colors">{label}</span>
              </div>
            ))}
          </div>

          {/* Desktop: 4 small left | 1 big center | 4 small right */}
          <div className="hidden md:grid md:grid-cols-[1fr_2fr_1fr] gap-4">
            {/* Left 4 */}
            <div className="grid grid-cols-2 gap-4">
              {["Wedding reception", "Birthday party", "Corporate night", "Private lesson"].map((label) => (
                <div
                  key={label}
                  className="image-placeholder aspect-square !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.04] group cursor-pointer overflow-hidden"
                >
                  <span className="!text-[#F7EAD8]/20 text-[0.55rem] text-center group-hover:!text-[#F7EAD8]/40 transition-colors">{label}</span>
                </div>
              ))}
            </div>

            {/* Center big */}
            <div className="image-placeholder aspect-auto !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.04] group cursor-pointer overflow-hidden min-h-full">
              <span className="!text-[#F7EAD8]/20 text-xs text-center group-hover:!text-[#F7EAD8]/40 transition-colors">Featured event photo</span>
            </div>

            {/* Right 4 */}
            <div className="grid grid-cols-2 gap-4">
              {["Hen's night", "Country bar night", "Community event", "Fundraiser gala"].map((label) => (
                <div
                  key={label}
                  className="image-placeholder aspect-square !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.04] group cursor-pointer overflow-hidden"
                >
                  <span className="!text-[#F7EAD8]/20 text-[0.55rem] text-center group-hover:!text-[#F7EAD8]/40 transition-colors">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="image-placeholder aspect-[4/5]">
            <span>Instructor portrait / Teaching moment</span>
          </div>

          <div>
            <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              Get to Know Us
            </p>
            <h2
              className="rye text-[#6B4841] uppercase tracking-wide mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
            >
              Our Story
            </h2>
            <div className="space-y-4 text-[#6B4841]/70 text-sm leading-relaxed">
              <p>
                Line dancing has a way of bringing people together like nothing else.
                Whether it&apos;s a bride and her bridesmaids learning a surprise routine,
                a group of mates celebrating a birthday, or a corporate team letting
                loose after hours, the magic is always the same.
              </p>
              <p>
                Our instructors are passionate about making every session fun, inclusive,
                and memorable. We meet you where you are, and we leave you wanting to
                dance every chance you get.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="brygada font-bold text-xs border border-[#C483C8]/40 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#F7EAD8] transition-all inline-block"
              >
                Read More About Us              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative">
        <div className="image-placeholder w-full aspect-[3/1] md:aspect-[4/1] !rounded-none !border-x-0">
          <span>CTA background / Group photo or venue</span>
        </div>
        <div className="absolute inset-0 bg-[#1E0F0B]/65 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
                  Be Part of the Fun
                </p>
                <h2 className="rye text-[#F7EAD8] uppercase tracking-wide" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
                  Book Your Session
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="brygada font-bold text-xs border border-[#C483C8]/50 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#1E0F0B] transition-all inline-block"
                >
                  Get in Touch                </Link>
                <Link
                  href="/services"
                  className="brygada font-bold text-xs border border-[#F7EAD8]/30 text-[#F7EAD8]/60 px-7 py-3 tracking-[0.25em] uppercase hover:text-[#F7EAD8] hover:border-[#F7EAD8]/60 transition-all inline-block"
                >
                  See Services                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
