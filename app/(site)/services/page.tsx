import Link from "next/link";

export const metadata = {
  title: "Services | Wildflower Line Dancing",
  description: "Weddings, birthdays, social events, private groups and more. Line dancing lessons for every occasion.",
};

const services = [
  {
    num: "01",
    title: "Weddings",
    desc: "Your wedding day deserves something unforgettable. We work with brides, grooms, and bridal parties to create a first dance or group routine that will have the whole venue on its feet.",
    details: [
      "Bridal party choreography",
      "Couples first dance",
      "Guest participation routines",
      "Pre-wedding hen and bucks lessons",
      "Reception floor fillers",
    ],
    placeholder: "Wedding dancing / Bridal party",
  },
  {
    num: "02",
    title: "Birthdays",
    desc: "Turn your birthday into the event of the year. We come to your venue, bring the energy, and make sure every guest leaves with tired feet and a huge smile.",
    details: [
      "Private group lessons",
      "Any age milestone",
      "Surprise routines for the guest of honour",
      "Themed playlists",
      "Party-friendly pacing",
    ],
    placeholder: "Birthday celebration / Party vibes",
  },
  {
    num: "03",
    title: "Social Events",
    desc: "Looking for an activity that actually gets people engaged? Line dancing breaks the ice, gets everyone moving, and creates a shared experience your group won't forget.",
    details: [
      "Corporate team events",
      "Hens and bucks nights",
      "Fundraisers and galas",
      "Community events",
      "Pop-up lessons",
    ],
    placeholder: "Corporate event / Group activity",
  },
  {
    num: "04",
    title: "Private Groups",
    desc: "Book us for your crew on your terms. Whether it's a one-off session or a regular weekly lesson, we tailor everything to suit your group's vibe and skill level.",
    details: [
      "Custom session length",
      "Your choice of location",
      "Beginner to intermediate routines",
      "Small or large groups",
      "Recurring lessons available",
    ],
    placeholder: "Private lesson / Small group",
  },
];

const process = [
  { step: "01", title: "Reach Out", desc: "Tell us about your event, your group, and what you're after." },
  { step: "02", title: "We Plan", desc: "We put together a session tailored to your vibe, skill level, and venue." },
  { step: "03", title: "We Dance", desc: "Show up, have fun, and let us handle the rest. No experience needed." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-6 md:px-12 lg:px-16 pt-24 md:pt-28 pb-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            For Every Occasion
          </p>
          <h1
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "clamp(2.4rem, 7vw, 5rem)" }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="image-placeholder w-full aspect-[2.8/1]">
            <span>Services hero / Dancing in action</span>
          </div>
        </div>
      </section>

      {/* ── Service Blocks ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-8">
        <div className="max-w-6xl mx-auto">
          {services.map(({ num, title, desc, details, placeholder }, i) => (
            <div
              key={title}
              className="border-t border-[#6B4841]/10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="image-placeholder aspect-[4/5]">
                  <span>{placeholder}</span>
                </div>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">{num}</p>
                <h2
                  className="brygada font-bold text-[#6B4841] uppercase tracking-wide mb-5"
                  style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
                >
                  {title}
                </h2>
                <p className="text-[#6B4841]/70 text-sm leading-relaxed mb-8">{desc}</p>

                <ul className="space-y-3 mb-8">
                  {details.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#6B4841]/60">
                      <span className="text-[#D49C84] text-xs mt-0.5">&#10022;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="brygada font-bold text-xs border border-[#C483C8]/40 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#F7EAD8] transition-all inline-block"
                >
                  Book {title}                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full-Width Image Banner ── */}
      <section className="relative">
        <div className="image-placeholder w-full aspect-[2.8/1] !rounded-none !border-x-0">
          <span>Wide shot / Event atmosphere</span>
        </div>
        <div className="absolute inset-0 bg-[#1E0F0B]/50 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="brygada font-bold text-[#F7EAD8] uppercase tracking-wide leading-tight" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)" }}>
                No Experience
                <br />Needed
              </h2>
              <p className="brygada font-bold text-[0.6rem] tracking-[0.3em] uppercase text-[#D49C84] pb-1">
                Just Good Vibes
                <br />&amp; Good Times
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">Simple As</p>
          <h2
            className="brygada font-bold text-[#6B4841] uppercase tracking-wide mb-14"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
          >
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-[#6B4841]/10">
            {process.map(({ step, title, desc }) => (
              <div
                key={step}
                className="border-b md:border-b-0 md:border-r last:border-r-0 border-[#6B4841]/10 py-10 md:px-10"
              >
                <p className="brygada font-bold text-[2.5rem] text-[#D49C84]/25 mb-3">{step}</p>
                <h3 className="brygada font-bold text-base tracking-[0.2em] uppercase text-[#6B4841] mb-3">{title}</h3>
                <p className="text-[#6B4841]/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="brygada font-bold text-xs border border-[#C483C8]/40 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#F7EAD8] transition-all inline-block"
            >
              Get Started            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative">
        <div className="image-placeholder w-full aspect-[3/1] md:aspect-[4/1] !rounded-none !border-x-0">
          <span>CTA background / Fun group shot</span>
        </div>
        <div className="absolute inset-0 bg-[#1E0F0B]/65 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">Sound Like Your Kind of Fun?</p>
                <h2 className="brygada font-bold text-[#F7EAD8] uppercase tracking-wide" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
                  Book Your Session
                </h2>
              </div>
              <Link
                href="/contact"
                className="brygada font-bold text-xs border border-[#C483C8]/50 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#1E0F0B] transition-all inline-block self-start md:self-center"
              >
                Get in Touch              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
