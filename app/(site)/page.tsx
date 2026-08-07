import Link from "next/link";

const services = [
  {
    title: "Weddings",
    desc: "Custom choreography for couples and bridal parties. Make your first dance one the whole room remembers.",
  },
  {
    title: "Birthdays",
    desc: "We bring the energy, the music, and the moves. Your guests leave with tired feet and huge smiles.",
  },
  {
    title: "Social Events",
    desc: "Corporate nights, hens parties, fundraisers. Line dancing is the activity that actually gets everyone up.",
  },
  {
    title: "Private Groups",
    desc: "Your crew, your pace, your location. One-off sessions or recurring lessons — tailored to your group.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-16 pt-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1
            className="rye text-[#6B4841] leading-none tracking-wide uppercase"
            style={{ fontSize: "clamp(3.2rem, 13vw, 11.5rem)" }}
          >
            Wildflower
          </h1>

          <div className="border-t border-[#6B4841]/20 mt-4 pt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <p
              className="brygada font-bold italic text-[#C483C8] leading-none"
              style={{ fontSize: "clamp(1.6rem, 5.2vw, 4.8rem)" }}
            >
              Line Dancing
            </p>
            <p className="section-label pb-1">
              Weddings&nbsp;&nbsp;·&nbsp;&nbsp;Birthdays&nbsp;&nbsp;·&nbsp;&nbsp;Events&nbsp;&nbsp;·&nbsp;&nbsp;Private Groups
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <Link
              href="/contact"
              className="rye text-sm bg-[#6B4841] text-[#F7EAD8] px-9 py-3.5 rounded-full tracking-widest hover:bg-[#C483C8] transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="rye text-sm text-[#6B4841] tracking-widest hover:text-[#C483C8] transition-colors flex items-center gap-2"
            >
              See Services <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="px-6 md:px-12 lg:px-16 py-16 border-t border-[#6B4841]/15">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-10">What We Offer</p>

          <div>
            {services.map(({ title, desc }) => (
              <Link
                key={title}
                href="/services"
                className="group block border-t border-[#6B4841]/15 py-7 hover:bg-[#EDE0CC] transition-colors px-4 -mx-4 last:border-b last:border-b-[#6B4841]/15"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="rye text-2xl md:text-3xl text-[#6B4841] mb-1.5">
                      {title}
                    </h3>
                    <p className="text-[#6B4841]/65 text-sm leading-relaxed max-w-xl">
                      {desc}
                    </p>
                  </div>
                  <span className="rye text-[#C483C8] text-2xl mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA strip */}
      <section className="bg-[#1E0F0B] py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p
              className="brygada italic text-[#C483C8] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)" }}
            >
              It&apos;s more than a dance,
            </p>
            <p
              className="brygada italic text-[#F7EAD8] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)" }}
            >
              it&apos;s a good time.
            </p>
          </div>
          <Link
            href="/contact"
            className="rye text-sm border border-[#F7EAD8]/40 text-[#F7EAD8] px-9 py-3.5 rounded-full tracking-widest hover:bg-[#F7EAD8] hover:text-[#1E0F0B] transition-all self-start md:self-end shrink-0"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
