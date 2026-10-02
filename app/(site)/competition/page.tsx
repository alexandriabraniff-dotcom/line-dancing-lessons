import Image from "next/image";
import { Kaushan_Script, Nosifer, Zilla_Slab } from "next/font/google";
import { specialEvent } from "@/lib/event";

/* ── TEMPORARY PAGE: "Dance Till You Drop Dead", October 25 ──────────────────
   The hero recreates the Figma poster "Letter - 5 (Yale style)": dark
   texture, red frame, Wildflower x Yale logos, Rye / Kaushan / Nosifer title
   and the cowgirl on the right.
   Delete this folder and the rest of the steps listed in lib/event.ts
   once the event is over. */

/* Poster fonts, only loaded on this page */
const nosifer = Nosifer({ weight: "400", subsets: ["latin"], display: "swap" });
const kaushan = Kaushan_Script({ weight: "400", subsets: ["latin"], display: "swap" });
const zilla = Zilla_Slab({ weight: "700", subsets: ["latin"], display: "swap" });

const posterRed = "#D4171C";
const posterCream = "#F5E5CC";

export const metadata = {
  title: `${specialEvent.name}, Halloween Line Dancing Competition`,
  description:
    "Dance Till You Drop Dead, a Halloween line dancing night at The Yale Saloon in Vancouver on Sunday October 25. Lesson at 8PM, dance competition from 9PM, costume contest, cash prizes at midnight.",
  alternates: { canonical: "/competition" },
  openGraph: {
    type: "article",
    title: "Dance Till You Drop Dead, Halloween Line Dancing Competition in Vancouver",
    description:
      "Sunday October 25 at The Yale Saloon, Vancouver. Line dancing class at 8PM, competition from 9PM, costume contest and prizes at midnight.",
    url: "/competition",
    images: [{ url: "/events/cowgirl.png", alt: "Dance Till You Drop Dead, Halloween line dancing at The Yale Saloon" }],
  },
};


const SITE_URL = "https://wildflowerlinedancing.com";

/* Event structured data so Google can show the date, venue and details */
const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `${specialEvent.name}, Halloween Line Dancing Competition`,
  url: `${SITE_URL}/competition`,
  startDate: "2026-10-25T20:00:00-07:00",
  endDate: "2026-10-26T00:00:00-07:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  description:
    "A Halloween line dancing night at The Yale Saloon in Vancouver. Line dancing class from 8:00 PM, an endurance line dancing competition from 9:00 PM to 11:30 PM, a costume contest all night and prizes at midnight.",
  image: [`${SITE_URL}/events/cowgirl.png`],
  location: {
    "@type": "Place",
    name: "The Yale Saloon",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1300 Granville St",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      postalCode: "V6Z 1M7",
      addressCountry: "CA",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Wildflower Line Dancing",
    url: SITE_URL,
  },
  performer: {
    "@type": "Organization",
    name: "Wildflower Line Dancing",
  },
  typicalAgeRange: "19-",
  isAccessibleForFree: false,
};

const jsonLd = (data: unknown) => JSON.stringify(data).split("<").join("\\u003c");

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const buttonBase =
  "brygada inline-flex h-[45px] lg:h-12 items-center justify-center px-8 text-[1.15rem] font-bold tracking-[0.18em] transition-colors duration-300";
const buttonRed = `${buttonBase} bg-[#D4171C] text-[#F5E5CC] hover:bg-[#F5E5CC] hover:text-[#D4171C] ${focusRing}`;

const eyebrowClass =
  "brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D4171C]";

/* Tickets live on The Yale Saloon's ticket page. Until that link exists the
   button says "Tickets Coming Soon" instead of going nowhere. */
function TicketButton({ className }: { className: string }) {
  if (!specialEvent.ticketsUrl) {
    return (
      <span aria-disabled="true" className={`${className} cursor-default`}>
        {specialEvent.ticketsSoonLabel}
      </span>
    );
  }

  return (
    <a
      href={specialEvent.ticketsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {specialEvent.ticketsLabel}
    </a>
  );
}

function Bullet() {
  return <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4171C]" />;
}

export default function CompetitionPage() {
  return (
    <div className="bg-[#17110F] text-[#F7EAD8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(eventStructuredData) }}
      />

      {/* ── Poster hero (Figma "Letter - 5 (Yale style)") ── */}
      <section className="relative isolate overflow-hidden px-[var(--gutter)] pt-[var(--section-top)] pb-[var(--section)]">
        {/* Dark hand-print texture, cracked wall on top, then the poster tint and red glow at the bottom */}
        <Image src="/events/dark-texture.jpg" alt="" fill preload sizes="100vw" className="-z-10 object-cover" />
        <Image src="/events/cracked-wall.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-40" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(153,0,0,0) 0%, rgba(153,0,0,0) 55%, rgba(158,8,13,0.5) 100%), linear-gradient(90deg, rgba(10,5,5,0.86) 0%, rgba(10,5,5,0.86) 100%)",
          }}
        />

        {/* Red poster frame */}
        <div
          className="relative max-w-6xl mx-auto border-[max(3px,0.3vw)] px-[max(1rem,3vw)] pt-[max(1.5rem,3vw)] pb-[max(2rem,3.5vw)]"
          style={{ borderColor: posterRed }}
        >
          {/* Wildflower x The Yale Saloon */}
          <div className="flex items-center justify-center gap-[max(0.9rem,1.6vw)]">
            <Image
              src="/wildflower-logo.png"
              alt="Wildflower Line Dancing"
              width={550}
              height={550}
              className="w-[max(4.5rem,7vw)] h-auto drop-shadow-[0_0_1.4rem_black]"
            />
            <span aria-hidden className={`${zilla.className} text-[max(2.2rem,3.6vw)] leading-none`} style={{ color: posterCream }}>
              ×
            </span>
            <Image
              src="/events/yale-logo-cream.png"
              alt="The Yale Saloon"
              width={296}
              height={183}
              className="w-[max(6.5rem,10vw)] h-auto"
            />
          </div>

          {/* Date between two red rules */}
          <div
            className="mx-auto mt-[max(1.25rem,2vw)] max-w-[44rem] border-y-[3px] py-[max(0.7rem,1vw)] text-center"
            style={{ borderColor: posterRed }}
          >
            <p
              className={`${zilla.className} whitespace-pre-wrap uppercase tracking-[0.14em] text-[length:max(1.05rem,2vw)] [text-shadow:0_4px_4px_black]`}
              style={{ color: posterCream }}
            >
              {specialEvent.dateLine}
            </p>
          </div>

          {/* Title left, cowgirl right */}
          <div className="mt-[max(1.5rem,3vw)] grid items-center gap-y-8 md:grid-cols-[1.45fr_1fr]">
            <div className="@container text-center md:text-left">
              <h1 className="leading-[0.95]">
                <span
                  className="rye block uppercase tracking-[0.01em] [text-shadow:0_4px_16px_black]"
                  style={{ color: posterCream, fontSize: "24cqw" }}
                >
                  Dance
                </span>
                <span
                  className={`${kaushan.className} block -rotate-4 tracking-[-0.03em] [text-shadow:0_4px_16px_black] md:pl-[6cqw]`}
                  style={{ color: posterRed, fontSize: "13cqw", lineHeight: 1.3 }}
                >
                  Till You Drop
                </span>
                <span
                  className={`${nosifer.className} block uppercase [text-shadow:4px_4px_5px_black]`}
                  style={{ color: posterRed, fontSize: "21cqw", lineHeight: 1.15 }}
                >
                  Dead
                </span>
              </h1>

              <p
                className={`${zilla.className} mx-auto md:mx-0 mt-[max(1.5rem,2.5cqw)] max-w-[24ch] uppercase leading-tight [text-shadow:0_4px_4px_black]`}
                style={{ color: posterCream, fontSize: "max(1.35rem, 5.2cqw)" }}
              >
                {specialEvent.subtitle}
              </p>
              <p className="brygada mt-3 text-[length:clamp(1.25rem,1.6vw,1.75rem)] font-bold italic" style={{ color: posterRed }}>
                {specialEvent.prizeLine}
              </p>

              <div className="mt-8 flex justify-center md:justify-start">
                <TicketButton className={buttonRed} />
              </div>
            </div>

            {/* Cowgirl with the red haze behind her */}
            <div className="relative mx-auto w-[min(70%,22rem)] md:w-full">
              <div
                aria-hidden
                className="absolute inset-[-10%_-20%] -z-10"
                style={{ background: "radial-gradient(closest-side, rgba(212,23,28,0.55), rgba(212,23,28,0))" }}
              />
              <Image
                src="/events/cowgirl.png"
                alt="Cowgirl in a skull hat and fringe jacket mid line dance"
                width={335}
                height={745}
                preload
                sizes="(min-width: 768px) 30vw, 70vw"
                className="h-auto w-full drop-shadow-[0_0_1.6rem_rgba(217,13,20,0.9)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Learn More ── */}
      <section className="px-[var(--gutter)] py-[var(--section)]">
        <div
          className={`max-w-6xl mx-auto grid items-center gap-[var(--gap)] ${specialEvent.image ? "md:grid-cols-2" : ""}`}
        >
          <div className={specialEvent.image ? "text-center md:text-left" : "mx-auto max-w-3xl text-center"}>
            <h2
              className="rye text-[#F7EAD8] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Learn More
            </h2>
            <p className="brygada mt-3 text-[length:clamp(1.25rem,1.6vw,1.75rem)] font-bold italic" style={{ color: posterRed }}>
              {specialEvent.learnMoreLine}
            </p>

            <div className="mt-4 space-y-4 text-[length:var(--text-body)] leading-relaxed text-[#F7EAD8]/75">
              {specialEvent.intro.map(({ lead, text }) => (
                <p key={text}>
                  {lead && <strong className="font-bold text-[#F7EAD8]">{lead} </strong>}
                  {text}
                </p>
              ))}
            </div>

            <div className={`mt-8 flex justify-center ${specialEvent.image ? "md:justify-start" : ""}`}>
              <TicketButton className={buttonRed} />
            </div>
          </div>

          {specialEvent.image && (
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={specialEvent.image}
                alt={specialEvent.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Rules ── */}
      <section className="px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className={`${eyebrowClass} mb-3`}>Read Before You Enter</p>
            <h2
              className="rye text-[#F7EAD8] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h2)" }}
            >
              The Rules
            </h2>
          </div>

          <div className="grid gap-[var(--gap)] md:grid-cols-2">
            {specialEvent.rules.map(({ title, intro, items }) => (
              <div
                key={title}
                className="border-t border-[#F7EAD8]/20 pt-7 text-center md:border md:border-[#F7EAD8]/15 md:bg-[#1F1715] md:p-[max(1.25rem,2.2vw)]"
              >
                <h3
                  className="rye text-[#F7EAD8] uppercase tracking-wide"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {title}
                </h3>
                {intro && (
                  <p className="mx-auto mt-4 max-w-[34rem] text-[length:var(--text-body)] leading-relaxed text-[#F7EAD8]/75">
                    {intro}
                  </p>
                )}
                {items.length > 0 && (
                  <ul className="mx-auto mt-6 max-w-[34rem] space-y-3 border-t border-[#F7EAD8]/15 pt-6 text-left">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[length:var(--text-body)] leading-snug text-[#F7EAD8]/75"
                      >
                        <Bullet />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
