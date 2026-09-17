import Image from "next/image";
import BookingButton from "@/components/BookingButton";

export const metadata = {
  title: "Services",
  description:
    "Line dancing lessons in Vancouver for weddings, birthdays, bachelorette and stag parties, corporate events and private groups. Beginner and intermediate friendly.",
  alternates: { canonical: "/services" },
};

const services: {
  title: string;
  desc: string;
  details: string[];
  image: string;
  imageClass?: string;
}[] = [
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
    /* Zoomed so the boots are framed like the homepage poster */
    imageClass: "scale-[1.4] translate-x-[-15px] object-[58%_40%]",
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
          {services.map(({ title, desc, details, image, imageClass }) => (
            <article
              key={title}
              id={slug(title)}
              className="scroll-mt-[calc(var(--header-logo)+var(--header-pad-y)*2+1rem)] flex flex-col items-center gap-y-5 border border-[#6B4841]/10 bg-[#EDE0CC]/45 p-[max(1rem,1.6vw)] text-center md:grid md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-[max(1.25rem,2.2vw)] md:text-left"
            >
              {/* Phones: title, photo, then the rest. Desktop: photo beside the content. */}
              <div className="relative order-2 aspect-[3/4] w-[min(55%,14rem)] overflow-hidden rounded-t-full md:order-none md:w-[max(9rem,min(22vw,26vh))]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 768px) 26vh, 55vw"
                  className={`object-cover ${imageClass ?? ""}`}
                />
              </div>

              {/* `contents` on phones lets these sit directly in the card's column order */}
              <div className="contents md:grid md:grid-cols-1 md:gap-x-[max(1.25rem,2.2vw)] md:gap-y-5 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:grid-rows-[auto_auto_1fr]">
                <h2
                  className="rye order-1 text-[#6B4841] uppercase tracking-wide leading-tight md:order-none lg:col-start-1 lg:row-start-1"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {title}
                </h2>

                <p className="order-3 text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/80 md:order-none md:mt-3 lg:col-start-1 lg:row-start-2 lg:mt-0">
                  {desc}
                </p>

                <div className="order-4 md:order-none lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:border-l lg:border-[#6B4841]/15 lg:pl-[max(1.25rem,2.2vw)]">
                  <p className="brygada text-[1rem] font-bold uppercase tracking-[0.25em] text-[#6B4841]/60">
                    What&apos;s Included
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {details.map((item) => (
                      <li
                        key={item}
                        className="flex items-start justify-center gap-3 text-[length:var(--text-body)] leading-snug text-[#6B4841]/80 md:justify-start"
                      >
                        <span aria-hidden className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D49C84]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="order-5 md:order-none lg:col-start-1 lg:row-start-3 lg:self-start">
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
