import Image from "next/image";
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
      {/* ── Event: write-up left, image right ── */}
      <section
        className="grain relative px-[var(--gutter)] pt-[var(--section-top)] pb-[var(--section)]"
        style={{ background: `linear-gradient(180deg, ${STONE_ALT} 0%, ${STONE} 100%)` }}
      >
        {/* Title block, centred above everything */}
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

          <p className="brygada mt-6 text-[length:clamp(1.1rem,1.5vw,1.65rem)] font-bold uppercase tracking-[0.18em] text-[#F7EAD8]">
            {specialEvent.tagline}
          </p>
        </div>

        {/* Write-up left, image right */}
        <div className="relative z-10 max-w-6xl mx-auto mt-[var(--section-sm)] grid items-center gap-[var(--gap)] md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="brygada text-[length:clamp(1.38rem,1.75vw,1.88rem)] font-bold italic text-[#D0483A]">
              {specialEvent.prizeLine}
            </p>

            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-[#F7EAD8]/75">
              {specialEvent.intro}
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <TicketButton label={specialEvent.ticketsLabel} className={buttonRed} />
            </div>
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
              className="image-placeholder aspect-[4/5] !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.04]"
            />
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

    </div>
  );
}
