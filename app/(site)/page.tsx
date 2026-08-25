import Link from "next/link";
import HomeHero from "@/components/HomeHero";

const services = [
  {
    num: "01",
    title: "Weddings",
    desc: "Custom choreography for couples and bridal parties. Make your first dance one the whole room remembers.",
  },
  {
    num: "02",
    title: "Birthdays",
    desc: "We bring the energy, the music, and the moves. Your guests leave with tired feet and huge smiles.",
  },
  {
    num: "03",
    title: "Social Events",
    desc: "Corporate nights, hens parties, fundraisers. Line dancing is the activity that actually gets everyone up.",
  },
  {
    num: "04",
    title: "Private Groups",
    desc: "Your crew, your pace, your location. One-off sessions or recurring lessons tailored to your group.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero (full-screen, dark, with inline nav) ── */}
      <HomeHero />

      {/* ── Intro Statement ── */}
      <section className="px-6 md:px-12 lg:px-16 pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="deco-line mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
            <div>
              <p className="section-label mb-6">About Wildflower</p>
              <p
                className="brygada italic text-[#6B4841] leading-snug"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
              >
                No experience needed, no two left feet too clumsy. Just boots, beats, and a whole lot of good times.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-[#6B4841]/70 leading-relaxed">
                Line dancing has a way of bringing people together like nothing else. Whether it&apos;s a bride and her bridesmaids learning a surprise routine, a group of mates celebrating a birthday, or a corporate team letting loose after hours, the magic is always the same.
              </p>
              <Link
                href="/about"
                className="rye text-xs tracking-widest text-[#C483C8] hover:text-[#6B4841] transition-colors flex items-center gap-2 w-fit"
              >
                Our Story <span className="text-sm">&#8594;</span>
              </Link>
            </div>
          </div>
          <div className="deco-line mt-12" />
        </div>
      </section>

      {/* ── Two Image Placeholders ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="image-placeholder aspect-[3/4] rounded-xl">
            <span>Portrait / Dancer close-up</span>
          </div>
          <div className="image-placeholder aspect-[3/4] rounded-xl md:mt-16">
            <span>Action / Group in motion</span>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[#1E0F0B] relative py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <p className="rye text-[0.6rem] tracking-[0.3em] uppercase text-[#D49C84] mb-4">What We Offer</p>
              <h2
                className="rye text-[#F7EAD8] leading-none"
                style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
              >
                Our Services
              </h2>
            </div>
            <Link
              href="/services"
              className="rye text-xs tracking-widest text-[#C483C8] hover:text-[#F7EAD8] transition-colors flex items-center gap-2 pb-1"
            >
              View All <span className="text-sm">&#8594;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[#F7EAD8]/10">
            {services.map(({ num, title, desc }) => (
              <Link
                key={title}
                href="/services"
                className="group border-b border-[#F7EAD8]/10 md:odd:border-r p-8 md:p-10 hover:bg-[#F7EAD8]/[0.03] transition-colors"
              >
                <p className="rye text-[0.6rem] tracking-[0.3em] text-[#D49C84] mb-4">{num}</p>
                <div className="image-placeholder aspect-[16/9] rounded-lg mb-6 !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.04]">
                  <span className="!text-[#F7EAD8]/20">{title} photo</span>
                </div>
                <h3 className="rye text-2xl text-[#F7EAD8] mb-2 group-hover:text-[#C483C8] transition-colors">
                  {title}
                </h3>
                <p className="text-[#F7EAD8]/45 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Width Image Placeholder ── */}
      <section className="px-6 md:px-12 lg:px-16 py-4 bg-[#1E0F0B]">
        <div className="max-w-7xl mx-auto">
          <div className="image-placeholder w-full aspect-[3/1] rounded-xl !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.04]">
            <span className="!text-[#F7EAD8]/20">Wide landscape / Venue or event shot</span>
          </div>
        </div>
      </section>

      {/* ── Tagline CTA ── */}
      <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          {/* Decorative stars */}
          <div className="flex justify-center gap-3 mb-8">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C483C8" opacity="0.3"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#D49C84" opacity="0.4"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C483C8" opacity="0.3"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
          </div>

          <p
            className="brygada italic text-[#6B4841] leading-snug mx-auto"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)", maxWidth: "56rem" }}
          >
            Dancing should be for everyone.
            <br />
            <span className="text-[#C483C8]">No experience needed. Just show up.</span>
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="rye text-sm bg-[#6B4841] text-[#F7EAD8] px-10 py-4 rounded-full tracking-widest hover:bg-[#C483C8] transition-colors"
            >
              Book Your Session
            </Link>
          </div>

          <p className="section-label mt-8">
            Weddings&nbsp;&nbsp;&#183;&nbsp;&nbsp;Birthdays&nbsp;&nbsp;&#183;&nbsp;&nbsp;Events&nbsp;&nbsp;&#183;&nbsp;&nbsp;Private Groups
          </p>
        </div>
      </section>
    </>
  );
}
