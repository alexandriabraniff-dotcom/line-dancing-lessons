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

const slug = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

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
          <p className="mx-auto mt-4 max-w-[38rem] text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/75">
            Every session is tailored to your group, your venue and your vibe. Pick your occasion
            below and we&apos;ll take care of the steps.
          </p>

          {/* Jump links to each service */}
          <nav aria-label="Services" className="mt-8 flex flex-wrap justify-center gap-3">
            {services.map(({ title }) => (
              <a
                key={title}
                href={`#${slug(title)}`}
                className={`brygada inline-flex h-10 items-center border border-[#6B4841]/25 px-5 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[#6B4841] transition-colors duration-300 hover:border-[#6B4841] hover:bg-[#6B4841] hover:text-[#F7EAD8] ${focusRing}`}
              >
                {title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="px-[var(--gutter)] pb-[var(--section)]">
        <div className="max-w-6xl mx-auto flex flex-col gap-[max(1rem,1.5vw)]">
          {services.map(({ title, desc, details, image }) => (
            <article
              key={title}
              id={slug(title)}
              className="scroll-mt-[calc(var(--header-logo)+var(--header-pad-y)*2+1rem)] grid grid-cols-1 items-center gap-[max(1.25rem,2.2vw)] border border-[#6B4841]/10 bg-[#EDE0CC]/45 p-[max(1rem,1.6vw)] md:grid-cols-[auto_minmax(0,1fr)]"
            >
              {/* Artwork: width follows screen height so two cards fit on screen at once */}
              <div className="relative mx-auto aspect-[3/4] w-[min(55%,14rem)] overflow-hidden shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)] md:mx-0 md:w-[max(9rem,min(22vw,26vh))]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 768px) 26vh, 55vw"
                  className="object-cover"
                />
              </div>

              {/* Content: description + button on the left, what's included on the right */}
              <div className="grid grid-cols-1 gap-x-[max(1.25rem,2.2vw)] gap-y-5 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:grid-rows-[auto_1fr]">
                <div className="lg:col-start-1 lg:row-start-1">
                  <h2
                    className="rye text-[#6B4841] uppercase tracking-wide leading-tight"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    {title}
                  </h2>
                  <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/80">
                    {desc}
                  </p>
                </div>

                <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:border-l lg:border-[#6B4841]/15 lg:pl-[max(1.25rem,2.2vw)]">
                  <p className="brygada text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[#6B4841]/60">
                    What&apos;s Included
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {details.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[length:var(--text-body)] leading-snug text-[#6B4841]/80"
                      >
                        <span aria-hidden className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D49C84]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
                  <Link href="/contact" className={buttonOnLight}>
                    Book {title}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="border-t border-[#6B4841]/10 px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            Simple As
          </p>
          <h2
            className="rye text-[#6B4841] uppercase tracking-wide mb-[max(2rem,3vw)]"
            style={{ fontSize: "var(--text-h2)" }}
          >
            How It Works
          </h2>

          <ol className="grid grid-cols-1 border-y border-[#6B4841]/10 md:grid-cols-3">
            {process.map(({ title, desc }) => (
              <li
                key={title}
                className="border-b border-[#6B4841]/10 px-[max(1rem,2vw)] py-[max(1.75rem,2.6vw)] last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <h3 className="rye text-[length:var(--text-h3)] tracking-[0.12em] uppercase text-[#6B4841] mb-3">
                  {title}
                </h3>
                <p className="text-[#6B4841]/70 text-[length:var(--text-body)] leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>

          <p className="brygada mt-[max(2rem,3vw)] text-[length:clamp(1.05rem,1.4vw,1.5rem)] italic text-[#6B4841]/80">
            No experience needed. Just good vibes and good times.
          </p>
          <Link href="/contact" className={`${buttonOnLight} mt-6`}>
            Get Started
          </Link>
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
              <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
                Sound Like Your Kind of Fun?
              </p>
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
