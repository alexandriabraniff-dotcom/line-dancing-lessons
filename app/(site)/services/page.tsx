import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services | Wildflower Line Dancing",
  description: "Weddings, birthdays, social events, private groups and more. Line dancing lessons for every occasion.",
};

const services = [
  {
    title: "Weddings",
    desc: "Your wedding day deserves something unforgettable. We work with brides, grooms, and bridal parties to create a first dance or group routine that will have the whole venue on its feet.",
    details: [
      "Bridal party choreography",
      "Couples first dance",
      "Guest participation routines",
      "Pre-wedding hen and bucks lessons",
      "Reception floor fillers",
    ],
    image: "/services/weddings.png",
  },
  {
    title: "Birthdays",
    desc: "Turn your birthday into the event of the year. We come to your venue, bring the energy, and make sure every guest leaves with tired feet and a huge smile.",
    details: [
      "Private group lessons",
      "Any age milestone",
      "Surprise routines for the guest of honour",
      "Themed playlists",
      "Party-friendly pacing",
    ],
    image: "/services/birthdays.png",
  },
  {
    title: "Social Events",
    desc: "Looking for an activity that actually gets people engaged? Line dancing breaks the ice, gets everyone moving, and creates a shared experience your group won't forget.",
    details: [
      "Corporate team events",
      "Hens and bucks nights",
      "Fundraisers and galas",
      "Community events",
      "Pop-up lessons",
    ],
    image: "/services/special-events.png",
  },
  {
    title: "Private Groups",
    desc: "Book us for your crew on your terms. Whether it's a one-off session or a regular weekly lesson, we tailor everything to suit your group's vibe and skill level.",
    details: [
      "Custom session length",
      "Your choice of location",
      "Beginner to intermediate routines",
      "Small or large groups",
      "Recurring lessons available",
    ],
    image: "/services/private-lessons.png",
  },
];

const process = [
  { title: "Reach Out", desc: "Tell us about your event, your group, and what you're after." },
  { title: "We Plan", desc: "We put together a session tailored to your vibe, skill level, and venue." },
  { title: "We Dance", desc: "Show up, have fun, and let us handle the rest. No experience needed." },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

/* Solid, high-contrast buttons (brown on cream, cream on dark banners) */
const buttonBase =
  "brygada inline-flex h-11 items-center justify-center px-6 text-[0.85rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300";
const buttonOnLight = `${buttonBase} bg-[#6B4841] text-[#F7EAD8] hover:bg-[#1E0F0B] ${focusRing}`;
const buttonOnDark = `${buttonBase} bg-[#F7EAD8] text-[#6B4841] hover:bg-[#C483C8] hover:text-[#1E0F0B] ${focusRing}`;

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-[var(--gutter)] pt-[var(--section-top)] pb-[var(--section-sm)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            For Every Occasion
          </p>
          <h1
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* ── Service Blocks ── */}
      <section className="px-[var(--gutter)] pb-8">
        <div className="max-w-6xl mx-auto">
          {services.map(({ title, desc, details, image }, i) => (
            <div
              key={title}
              id={title.toLowerCase().replace(/\s+/g, "-")}
              className="scroll-mt-[calc(var(--header-logo)+var(--header-pad-y)*2)] border-t border-[#6B4841]/10 py-[max(1rem,2.5vh)] grid grid-cols-1 md:grid-cols-2 gap-x-[var(--gap)] gap-y-5 items-center"
            >
              {/* Image half: left on even sections, right on odd. Image width follows
                  screen height so each section stays compact. */}
              <div className={`flex justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[3/4] w-[min(60%,16rem)] overflow-hidden shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)] md:w-[max(9rem,26vh)]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 768px) 30vh, 60vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text half */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2
                  className="rye text-[#6B4841] uppercase tracking-wide leading-tight mb-2"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {title}
                </h2>
                <p className="text-[#6B4841]/80 text-[length:var(--text-body)] leading-relaxed mb-3">
                  {desc}
                </p>

                <ul className="space-y-1 mb-4">
                  {details.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[length:var(--text-body)] leading-snug text-[#6B4841]/75"
                    >
                      <span className="text-[#D49C84] text-[0.65rem] mt-1">&#10022;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={buttonOnLight}>
                  Book {title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full-Width Image Banner ── */}
      <section className="relative flex min-h-[35.72vw] items-center">
        <div className="image-placeholder !absolute inset-0 !border-x-0">
          <span>Wide shot / Event atmosphere</span>
        </div>
        <div className="absolute inset-0 bg-[#1E0F0B]/50" />
        <div className="relative w-full px-[var(--gutter)] py-[var(--section-sm)]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="rye text-[#F7EAD8] uppercase tracking-wide leading-tight" style={{ fontSize: "var(--text-h3)" }}>
              No Experience
              <br />Needed
            </h2>
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.3em] uppercase text-[#D49C84] pb-1">
              Just Good Vibes
              <br />&amp; Good Times
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">Simple As</p>
          <h2
            className="rye text-[#6B4841] uppercase tracking-wide mb-14"
            style={{ fontSize: "var(--text-h2)" }}
          >
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-[#6B4841]/10">
            {process.map(({ title, desc }) => (
              <div
                key={title}
                className="border-b md:border-b-0 md:border-r last:border-r-0 border-[#6B4841]/10 py-10 md:px-10"
              >
                <h3 className="rye text-[length:var(--text-h3)] tracking-[0.2em] uppercase text-[#6B4841] mb-3">{title}</h3>
                <p className="text-[#6B4841]/60 text-[length:var(--text-body)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/contact" className={buttonOnLight}>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative flex min-h-[33.34vw] md:min-h-[25vw] items-center">
        <div className="image-placeholder !absolute inset-0 !border-x-0">
          <span>CTA background / Fun group shot</span>
        </div>
        <div className="absolute inset-0 bg-[#1E0F0B]/65" />
        <div className="relative w-full px-[var(--gutter)] py-[var(--section-sm)]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">Sound Like Your Kind of Fun?</p>
              <h2 className="rye text-[#F7EAD8] uppercase tracking-wide" style={{ fontSize: "var(--text-h2)" }}>
                Book Your Session
              </h2>
            </div>
            <Link href="/contact" className={`${buttonOnDark} self-start md:self-center`}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
