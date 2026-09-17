import Image from "next/image";
import BookingButton from "@/components/BookingButton";

export const metadata = {
  title: "Services",
  description:
    "Line dancing lessons in Vancouver for weddings, birthdays, bachelorette and stag parties, corporate events and private groups. Beginner and intermediate friendly.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Weddings",
    desc: "Your wedding day deserves something unforgettable. We work with brides, grooms, and bridal parties to create a first dance or group routine that will have the whole venue on its feet. Then, at any point during the night, we can lead a line dancing lesson and teach all of your guests the steps, so everyone gets out on the dance floor together.",
    details: [
      "Bridal party choreography",
      "Couples first dance",
      "Lessons for all your guests",
      "Pre-wedding practice sessions",
      "Songs picked for your wedding",
    ],
    image: "/services/photos/weddings.jpg",
  },
  {
    title: "Birthdays",
    desc: "Turn your birthday into the event of the year. We come to your venue, bring the energy, and teach your guests easy, fun routines, so everyone leaves with tired feet and a huge smile.",
    details: [
      "Group lessons",
      "Friendly for all ages",
      "Themed playlists",
      "We come to your venue",
      "No experience needed",
    ],
    image: "/services/photos/birthdays.jpg",
  },
  {
    title: "Social Events",
    desc: "Looking for an activity that actually gets people engaged? Line dancing breaks the ice, gets everyone moving, and creates a shared experience your group won't forget.",
    details: [
      "Corporate team events",
      "Stag parties",
      "Fundraisers",
      "Community events",
      "Pop-up lessons",
    ],
    image: "/services/photos/special-events.jpg",
  },
  {
    title: "Private Groups",
    desc: "Gather your friends, family or coworkers and make the dance floor your own. Whether you want a one-time session or weekly lessons to keep building your skills, we come to you and shape every routine around your group's energy and experience. No experience needed, just bring your crew and we'll handle the rest.",
    details: [
      "Custom sessions",
      "Your choice of location",
      "Beginner to intermediate routines",
      "Small or large groups",
      "Recurring lessons available",
    ],
    image: "/services/photos/private-lessons.jpg",
  },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

/* Solid, high-contrast buttons (brown on cream, cream on dark banners) */
const buttonBase =
  "brygada inline-flex h-[45px] lg:h-11 items-center justify-center px-6 text-[1.15rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300";
const buttonOnLight = `${buttonBase} bg-[#6B4841] text-[#F7EAD8] hover:bg-[#1E0F0B] ${focusRing}`;

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
              <div className="relative mx-auto aspect-[3/4] w-[min(55%,14rem)] overflow-hidden rounded-t-full md:mx-0 md:w-[max(9rem,min(22vw,26vh))]">
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
                  <p className="brygada text-[1rem] font-bold uppercase tracking-[0.25em] text-[#6B4841]/60">
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
                  <BookingButton serviceKey={slug(title)} className={buttonOnLight} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
