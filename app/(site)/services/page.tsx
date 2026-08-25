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
  { step: "02", title: "We Plan", desc: "We'll put together a session tailored to your vibe, skill level, and venue." },
  { step: "03", title: "We Dance", desc: "Show up, have fun, and let us handle the rest. No experience needed." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-6 md:px-12 lg:px-16 pt-12 md:pt-20 pb-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-6">For Every Occasion</p>
          <h1
            className="rye text-[#6B4841] leading-[0.9] tracking-wide"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            Services
          </h1>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="image-placeholder w-full aspect-[2.8/1] rounded-2xl">
            <span>Services hero / Dancing in action</span>
          </div>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-8">
        <div className="max-w-7xl mx-auto">
          {services.map(({ num, title, desc, details, placeholder }, i) => (
            <div key={title}>
              <div className="deco-line" />
              <div className={`py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Image */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="image-placeholder aspect-[4/3] rounded-xl">
                    <span>{placeholder}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="section-label mb-4">{num}</p>
                  <h2
                    className="rye text-[#6B4841] mb-5"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                  >
                    {title}
                  </h2>
                  <p className="text-[#6B4841]/70 leading-relaxed mb-8">{desc}</p>

                  <ul className="space-y-3">
                    {details.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-[#6B4841]/60">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#C483C8" className="shrink-0 mt-1 opacity-50"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#1E0F0B] py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="rye text-[0.6rem] tracking-[0.3em] uppercase text-[#D49C84] mb-4">Simple as</p>
          <h2
            className="rye text-[#F7EAD8] leading-none mb-16"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#F7EAD8]/10">
            {process.map(({ step, title, desc }) => (
              <div
                key={step}
                className="border-b md:border-b-0 md:border-r last:border-r-0 border-[#F7EAD8]/10 p-8 md:p-10"
              >
                <p className="rye text-[2.5rem] text-[#C483C8]/20 mb-4">{step}</p>
                <h3 className="rye text-xl text-[#F7EAD8] mb-3">{title}</h3>
                <p className="text-[#F7EAD8]/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="rye text-sm border border-[#F7EAD8]/25 text-[#F7EAD8] px-10 py-4 rounded-full tracking-widest hover:bg-[#F7EAD8] hover:text-[#1E0F0B] transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-10 text-center">Moments from the Floor</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Moment 1", "Moment 2", "Moment 3", "Moment 4"].map((label, i) => (
              <div
                key={label}
                className={`image-placeholder rounded-lg ${i % 2 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
              >
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-28 px-6 md:px-12 lg:px-16 border-t border-[#6B4841]/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-8">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C483C8" opacity="0.3"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#D49C84" opacity="0.4"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C483C8" opacity="0.3"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
          </div>

          <p
            className="brygada italic text-[#6B4841] leading-snug mx-auto"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", maxWidth: "44rem" }}
          >
            Sound like your kind of fun?
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="rye text-sm bg-[#6B4841] text-[#F7EAD8] px-10 py-4 rounded-full tracking-widest hover:bg-[#C483C8] transition-colors"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
