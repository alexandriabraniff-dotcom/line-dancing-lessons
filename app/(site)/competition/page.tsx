import { specialEvent } from "@/lib/event";

/* ── TEMPORARY PAGE: "Dance Till You Die", October 25 ──────────────────
   Styled after the event poster (stone dark, blood red display type)
   on the same section layout as the rest of the site.
   Delete this folder and the rest of the steps listed in lib/event.ts
   once the event is over. */

export const metadata = {
  title: `${specialEvent.name}, Halloween Line Dancing Competition`,
  description:
    "Dance Till You Die, a Halloween line dancing night at The Yale Saloon in Vancouver on Sunday October 25. Lesson at 8PM, dance competition from 9PM, costume contest, cash prizes at midnight.",
  alternates: { canonical: "/competition" },
};

/* Poster palette, only used on this page */
const STONE = "#17110F";
const STONE_ALT = "#1F1715";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const buttonBase =
  "brygada inline-flex h-[45px] lg:h-12 items-center justify-center px-8 text-[1.15rem] font-bold tracking-[0.18em] transition-colors duration-300";
const buttonRed = `${buttonBase} bg-[#A62019] text-[#F7EAD8] hover:bg-[#F7EAD8] hover:text-[#A62019] ${focusRing}`;
const buttonCream = `${buttonBase} bg-[#F7EAD8] text-[#17110F] hover:bg-[#A62019] hover:text-[#F7EAD8] ${focusRing}`;

const eyebrowClass =
  "brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D0483A]";

/* Sign-up lives on The Yale Saloon's ticket page. Until that link exists the
   button says so instead of going nowhere. */
function TicketButton({ label, className }: { label: string; className: string }) {
  if (!specialEvent.ticketsUrl) {
    return (
      <span aria-disabled="true" className={`${className} cursor-default opacity-70`}>
        Sign Up Opens Soon
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
      {label}
    </a>
  );
}

function Bullet() {
  return <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D0483A]" />;
}

export default function CompetitionPage() {
  return (
    <div className="bg-[#17110F] text-[#F7EAD8]">
      {/* ── Header ── */}
      <section
        className="grain relative px-[var(--gutter)] pt-[var(--section-top)] pb-[var(--section)]"
        style={{ background: `linear-gradient(180deg, ${STONE_ALT} 0%, ${STONE} 100%)` }}
      >
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className={`${eyebrowClass} mb-4`}>One Night Only, {specialEvent.eyebrow}</p>

          <h1 className="rye uppercase leading-[0.95] tracking-wide">
            <span className="block text-[#A62019]" style={{ fontSize: "var(--text-h1)" }}>
              Dance
            </span>
            <span
              className="block text-[#F7EAD8]"
              style={{ fontSize: "calc(var(--text-h1) * 0.58)" }}
            >
              Till You
            </span>
            <span className="block text-[#A62019]" style={{ fontSize: "var(--text-h1)" }}>
              Die
            </span>
          </h1>

          <p className="brygada mt-6 text-[length:clamp(1.25rem,1.6vw,1.75rem)] font-bold uppercase tracking-[0.2em] text-[#F7EAD8]">
            {specialEvent.tagline}
          </p>
          <p className="brygada mt-2 text-[length:clamp(1.38rem,1.75vw,1.88rem)] font-bold italic text-[#D0483A]">
            {specialEvent.prizeLine}
          </p>

          <p className="mx-auto mt-6 max-w-[42rem] text-[length:var(--text-body)] leading-relaxed text-[#F7EAD8]/70">
            {specialEvent.intro}
          </p>

          <div className="mt-9 flex justify-center">
            <TicketButton label={specialEvent.ticketsLabel} className={buttonRed} />
          </div>
        </div>
      </section>

      {/* ── Event details ── */}
      <section className="px-[var(--gutter)] pb-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <dl className="grid grid-cols-2 gap-px overflow-hidden border border-[#F7EAD8]/15 bg-[#F7EAD8]/15 md:grid-cols-3">
            {specialEvent.details.map(({ label, value }) => (
              <div
                key={label}
                className="bg-[#17110F] p-[max(1rem,1.6vw)] text-center last:col-span-2 md:text-left md:last:col-span-1"
              >
                <dt className="brygada text-[0.95rem] font-bold uppercase tracking-[0.25em] text-[#D0483A]">
                  {label}
                </dt>
                <dd className="mt-2 text-[length:var(--text-body)] leading-snug text-[#F7EAD8]/85">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── What's happening ── */}
      <section
        className="grain relative px-[var(--gutter)] py-[var(--section)]"
        style={{ backgroundColor: STONE_ALT }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className={`${eyebrowClass} mb-3`}>Two Ways to Win</p>
            <h2
              className="rye text-[#F7EAD8] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h2)" }}
            >
              What&apos;s Happening
            </h2>
          </div>

          <div className="grid gap-[var(--gap)] md:grid-cols-2">
            {specialEvent.features.map(({ title, desc, points }) => (
              <article
                key={title}
                className="border border-[#F7EAD8]/15 bg-[#17110F]/60 p-[max(1.25rem,2.2vw)] text-center md:text-left"
              >
                <h3
                  className="rye text-[#D0483A] uppercase tracking-wide"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {title}
                </h3>
                <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-[#F7EAD8]/75">
                  {desc}
                </p>
                <ul className="mt-6 space-y-2 border-t border-[#F7EAD8]/15 pt-6 text-left">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[length:var(--text-body)] leading-snug text-[#F7EAD8]/80"
                    >
                      <Bullet />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <TicketButton label="Enter the Competition" className={buttonCream} />
          </div>
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
            {specialEvent.rules.map(({ title, items }) => (
              <div
                key={title}
                className="border-t border-[#F7EAD8]/20 pt-7 md:border md:border-[#F7EAD8]/15 md:bg-[#1F1715] md:p-[max(1.25rem,2.2vw)]"
              >
                <h3
                  className="rye text-[#F7EAD8] uppercase tracking-wide"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {title}
                </h3>
                <ul className="mt-5 space-y-3">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Good to know ── */}
      <section className="px-[var(--gutter)] pb-[var(--section)]">
        <div className="max-w-6xl mx-auto grid gap-[var(--gap)] md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
          <div className="text-center md:text-left">
            <p className={`${eyebrowClass} mb-3`}>Everything You Need</p>
            <h2
              className="rye text-[#F7EAD8] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h3)" }}
            >
              Good to Know
            </h2>
            <p className="mt-5 text-[length:var(--text-body)] leading-relaxed text-[#F7EAD8]/70">
              Never line danced before? That&apos;s most of the room. The 8:00 PM lesson covers
              every step you need, so all you have to bring is a costume and a pair of boots.
            </p>
            <div className="mt-7 flex justify-center md:justify-start">
              <TicketButton label={specialEvent.ticketsLabel} className={buttonRed} />
            </div>
          </div>

          <ul className="space-y-3 border-t border-[#F7EAD8]/20 pt-7 md:border-t-0 md:pt-0">
            {specialEvent.goodToKnow.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[length:var(--text-body)] leading-snug text-[#F7EAD8]/75"
              >
                <Bullet />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
