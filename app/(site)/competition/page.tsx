import Image from "next/image";
import { Kaushan_Script, Nosifer, Zilla_Slab } from "next/font/google";
import { specialEvent } from "@/lib/event";

/* ── TEMPORARY PAGE: "Dance Till You Drop Dead", October 25 ──────────────────
   Colours, fonts and wording follow the Figma poster "Letter - 5 (Yale style)"
   (near black, blood red, cream; Rye / Kaushan Script / Nosifer / Zilla Slab)
   on the same section layout as the rest of the site.
   Delete this folder and the rest of the steps listed in lib/event.ts
   once the event is over. */

/* Poster fonts, only loaded on this page */
const nosifer = Nosifer({ weight: "400", subsets: ["latin"], display: "swap" });
const kaushan = Kaushan_Script({ weight: "400", subsets: ["latin"], display: "swap" });
const zilla = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zilla",
});
const zillaClass = "font-[family-name:var(--font-zilla)] font-bold";

export const metadata = {
  title: `${specialEvent.name}, Halloween Line Dancing Competition`,
  description:
    "Dance Till You Drop Dead, a Halloween line dancing night at The Yale Saloon in Vancouver on Sunday October 25. 19+ event. Lesson at 8PM, dance competition from 9PM, costume contest, cash prizes at midnight.",
  alternates: { canonical: "/competition" },
  openGraph: {
    type: "article",
    title: "Dance Till You Drop Dead, Halloween Line Dancing Competition in Vancouver",
    description:
      "Sunday October 25 at The Yale Saloon, Vancouver. 19+ event. Line dancing class at 8PM, competition from 9PM, costume contest and prizes at midnight.",
    url: "/competition",
    images: [{ url: "/events/cracked-wall.jpg", alt: "Dance Till You Drop Dead, Halloween line dancing at The Yale Saloon" }],
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
  endDate: "2026-10-26T02:00:00-07:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  description:
    "A Halloween line dancing night at The Yale Saloon in Vancouver. Line dancing class from 8:00 PM, an endurance line dancing competition from 9:00 PM to 11:30 PM, a costume contest all night and prizes at midnight.",
  image: [`${SITE_URL}/events/cracked-wall.jpg`],
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
  offers: {
    "@type": "Offer",
    url: specialEvent.ticketsUrl,
    availability: "https://schema.org/InStock",
    validFrom: "2026-10-01T00:00:00-07:00",
  },
};

const jsonLd = (data: unknown) => JSON.stringify(data).split("<").join("\\u003c");

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const eyebrowClass =
  `${zillaClass} font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D4171C]`;

/* If the AdmitONE link is ever removed the button says "Tickets Coming Soon"
   instead of going nowhere. */
function TicketButton({ className, label }: { className: string; label?: string }) {
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
      {label ?? specialEvent.ticketsLabel}
    </a>
  );
}

const buttonBig =
  `${zillaClass} inline-flex h-[45px] lg:h-14 w-full items-center justify-center px-8 text-[length:clamp(1.15rem,1.3vw,1.4rem)] font-bold tracking-[0.18em] bg-[#D4171C] text-[#F5E5CC] shadow-[0_0_30px_-8px_rgba(212,23,28,0.7)] transition-colors duration-300 hover:bg-[#F5E5CC] hover:text-[#D4171C] ${focusRing}`;

const buttonOutline =
  `${zillaClass} inline-flex h-[45px] lg:h-14 w-full items-center justify-center px-8 text-[length:clamp(1.15rem,1.3vw,1.4rem)] font-bold tracking-[0.18em] border-2 border-[#F5E5CC] text-[#F5E5CC] transition-colors duration-300 hover:bg-[#F5E5CC] hover:text-[#0A0505] ${focusRing}`;

function Bullet() {
  return <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4171C]" />;
}

export default function CompetitionPage() {
  return (
    <div className={`${zilla.variable} bg-[#0A0505] text-[#F5E5CC]`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(eventStructuredData) }}
      />

      {/* ── Event: write-up left, image right ── */}
      <section className="relative isolate overflow-hidden px-[var(--gutter)] pt-[var(--section-top)] pb-[var(--section)]">
        {/* Poster background: dark texture, cracked wall over it, near black tint, red glow at the bottom */}
        <Image
          src="/events/dark-texture.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <Image
          src="/events/cracked-wall.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(153,0,0,0) 0%, rgba(153,0,0,0) 55%, rgba(158,8,13,0.5) 100%), linear-gradient(90deg, rgba(10,5,5,0.86) 0%, rgba(10,5,5,0.86) 100%)",
          }}
        />

        {/* Title block, centred above everything */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="leading-[0.95]">
            <span
              className="rye block uppercase tracking-[0.01em] text-[#F5E5CC] [text-shadow:0_4px_16px_black]"
              style={{ fontSize: "calc(var(--text-h1) * 1.5)" }}
            >
              Dance
            </span>
            <span
              className={`${kaushan.className} mt-[0.1em] block -rotate-4 tracking-[-0.03em] text-[#D4171C] [text-shadow:0_4px_16px_black]`}
              style={{ fontSize: "calc(var(--text-h1) * 0.95)", lineHeight: 1.3 }}
            >
              Till You Drop
            </span>
            <span
              className={`${nosifer.className} mb-[0.2em] block uppercase text-[#D4171C] [text-shadow:4px_4px_5px_black]`}
              style={{ fontSize: "calc(var(--text-h1) * 1.3)", lineHeight: 1.15 }}
            >
              Dead
            </span>
          </h1>

          <p className={`${zillaClass} mt-6 text-[length:clamp(1.1rem,1.5vw,1.65rem)] font-bold uppercase tracking-[0.06em] text-[#F5E5CC] [text-shadow:0_4px_4px_black]`}>
            {specialEvent.subtitle}
          </p>
          <p className={`${zillaClass} mt-2 text-[length:clamp(1.38rem,1.75vw,1.88rem)] text-[#D4171C]`}>
            {specialEvent.prizeLine}
          </p>
          <p className={`${zillaClass} mt-4 inline-block border-2 border-[#F5E5CC] px-3 py-1 text-[length:clamp(1rem,1.2vw,1.3rem)] uppercase tracking-[0.12em] text-[#F5E5CC]`}>
            {specialEvent.ageLine}
          </p>
        </div>

        {/* Write-up left, image right */}
        <div className="relative z-10 max-w-6xl mx-auto mt-[var(--section-sm)] grid items-center gap-[var(--gap)] md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2
              className="rye text-[#F5E5CC] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Learn More
            </h2>
            <p className={`${zillaClass} mt-3 text-[length:clamp(1.25rem,1.6vw,1.75rem)] text-[#D4171C]`}>
              {specialEvent.learnMoreLine}
            </p>

            <div className="mt-4 space-y-4 text-[length:var(--text-body)] leading-relaxed text-[#F5E5CC]/75">
              {specialEvent.intro.map(({ lead, text }) => (
                <p key={text}>
                  {lead && <strong className="font-bold text-[#F5E5CC]">{lead} </strong>}
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div>
            {/* Compact ticket box sitting right on top of the poster */}
            <div className="mb-5 border-2 border-[#D4171C] bg-[#0A0505]/85 p-[max(1.25rem,1.8vw)] text-center shadow-[0_0_40px_-16px_rgba(212,23,28,0.7)]">
              <p className={`${eyebrowClass} mb-2`}>Secure Your Spot</p>
              <h2 className="rye uppercase tracking-wide text-[#F5E5CC]" style={{ fontSize: "var(--text-h3)" }}>
                Get Your Tickets
              </h2>
              <p className={`${zillaClass} mt-2 mb-5 text-[length:clamp(1rem,1.15vw,1.2rem)] uppercase tracking-[0.12em] text-[#F5E5CC]/80`}>
                Sunday, October 25
                <span aria-hidden className="mx-2 text-[#D4171C]">&middot;</span>
                {specialEvent.ageLine}
              </p>
              <TicketButton className={buttonBig} />
            </div>

            {specialEvent.image ? (
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={specialEvent.image}
                  alt={specialEvent.imageAlt}
                  fill
                  preload
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                aria-hidden
                className="image-placeholder aspect-[4/5] !border-[#F5E5CC]/15 !bg-[#F5E5CC]/[0.04]"
              />
            )}
          </div>
        </div>
      </section>

      {/* ── Song requests: Google Form ── */}
      <section className="px-[var(--gutter)] pt-[var(--section)]">
        <div className="max-w-3xl mx-auto border-2 border-[#F5E5CC]/20 bg-[#140A0A] p-[max(1.5rem,2.5vw)] text-center">
          <p className={`${eyebrowClass} mb-3`}>Pick the Playlist</p>
          <h2
            className="rye text-[#F5E5CC] uppercase tracking-wide"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Request a Song
          </h2>
          <p className="mx-auto mt-4 max-w-[34rem] text-[length:var(--text-body)] leading-relaxed text-[#F5E5CC]/75">
            Got a line dance you want to hear on the night? Send us your song requests and we'll do our best to get them played.
          </p>
          <div className="mx-auto mt-6 max-w-sm">
            <a
              href={specialEvent.songRequestsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonOutline}
            >
              Send a Song Request
            </a>
          </div>
        </div>
      </section>

      {/* ── Rules ── */}
      <section className="px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className={`${eyebrowClass} mb-3`}>Read Before You Enter</p>
            <h2
              className="rye text-[#F5E5CC] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h2)" }}
            >
              The Rules
            </h2>
          </div>

          <div className="grid gap-[var(--gap)] md:grid-cols-2">
            {specialEvent.rules.map(({ title, intro, items }) => (
              <div
                key={title}
                className="border-t border-[#F5E5CC]/20 pt-7 text-center md:border md:border-[#F5E5CC]/15 md:bg-[#140A0A] md:p-[max(1.25rem,2.2vw)]"
              >
                <h3
                  className="rye text-[#F5E5CC] uppercase tracking-wide"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {title}
                </h3>
                {intro && (
                  <p className="mx-auto mt-4 max-w-[34rem] text-[length:var(--text-body)] leading-relaxed text-[#F5E5CC]/75">
                    {intro}
                  </p>
                )}
                {items.length > 0 && (
                  <ul className="mx-auto mt-6 max-w-[34rem] space-y-3 border-t border-[#F5E5CC]/15 pt-6 text-left">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[length:var(--text-body)] leading-snug text-[#F5E5CC]/75"
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

          {/* Short ticket prompt once they've read the rules */}
          <div className="mt-[var(--section)] text-center">
            <h2 className="rye uppercase tracking-wide text-[#F5E5CC]" style={{ fontSize: "var(--text-h3)" }}>
              Are You Ready to Compete?
            </h2>
            <div className="mx-auto mt-6 max-w-sm">
              <TicketButton className={buttonBig} label="Get Your Ticket Now" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
