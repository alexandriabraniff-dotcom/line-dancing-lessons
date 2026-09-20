import Link from "next/link";
import BookingButton from "@/components/BookingButton";
import { specialEvent } from "@/lib/event";

/* ── TEMPORARY PAGE: "Dance Till You Die", October 25 ──────────────────
   Delete this folder and the rest of the steps listed in lib/event.ts
   once the event is over. */

export const metadata = {
  title: `${specialEvent.name}, Halloween Line Dancing Competition`,
  description:
    "Dance Till You Die, a Halloween line dancing night in Greater Vancouver on October 25 with a dance competition, prizes and a costume contest. Beginners welcome.",
  alternates: { canonical: "/competition" },
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const buttonBase =
  "brygada inline-flex h-[45px] lg:h-11 items-center justify-center px-6 text-[1.15rem] font-bold tracking-[0.18em] transition-colors duration-300";
const buttonOnLight = `${buttonBase} bg-[#6B4841] text-[#F7EAD8] hover:bg-[#1E0F0B] ${focusRing}`;
const buttonOutline = `${buttonBase} border-[1.5px] border-[#6B4841] text-[#6B4841] hover:bg-[#6B4841] hover:text-[#F7EAD8] ${focusRing}`;
const buttonOnDark = `${buttonBase} bg-[#F7EAD8] text-[#6B4841] hover:bg-[#C483C8] hover:text-[#1E0F0B] ${focusRing}`;

function Bullet({ tone = "tan" }: { tone?: "tan" | "purple" }) {
  return (
    <span
      aria-hidden
      className={`mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full ${
        tone === "purple" ? "bg-[#C483C8]" : "bg-[#D49C84]"
      }`}
    />
  );
}

export default function CompetitionPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-[var(--gutter)] pt-[var(--section-top)] pb-[var(--section-sm)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            One Night Only, {specialEvent.eyebrow}
          </p>
          <h1
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "var(--text-h1)" }}
          >
            {specialEvent.name}
          </h1>
          <p className="brygada mt-4 text-[length:clamp(1.38rem,1.75vw,1.88rem)] font-bold italic text-[#C483C8]">
            {specialEvent.tagline}
          </p>
          <p className="mx-auto mt-5 max-w-[42rem] text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/75">
            {specialEvent.intro}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <BookingButton
              serviceKey="competition"
              label="Sign Me Up"
              eyebrow={specialEvent.eyebrow}
              className={buttonOnLight}
            />
            <Link href="/contact" className={buttonOutline}>
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* ── Event details ── */}
      <section className="px-[var(--gutter)] pb-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <dl className="grid grid-cols-2 gap-px overflow-hidden border border-[#6B4841]/15 bg-[#6B4841]/15 md:grid-cols-3">
            {specialEvent.details.map(({ label, value }) => (
              <div key={label} className="bg-[#EDE0CC]/45 p-[max(1rem,1.6vw)] text-center md:text-left">
                <dt className="brygada text-[0.95rem] font-bold uppercase tracking-[0.25em] text-[#6B4841]/60">
                  {label}
                </dt>
                <dd className="mt-2 text-[length:var(--text-body)] leading-snug text-[#6B4841]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── What's happening ── */}
      <section className="bg-[#1E0F0B] px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              Two Ways to Win
            </p>
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
                className="border border-[#F7EAD8]/15 bg-[#F7EAD8]/[0.04] p-[max(1.25rem,2.2vw)] text-center md:text-left"
              >
                <h3
                  className="rye text-[#F7EAD8] uppercase tracking-wide"
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
                      <Bullet tone="purple" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <BookingButton
              serviceKey="competition"
              label="Enter the Competition"
              eyebrow={specialEvent.eyebrow}
              className={buttonOnDark}
            />
          </div>
        </div>
      </section>

      {/* ── Rules ── */}
      <section className="px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              Read Before You Enter
            </p>
            <h2
              className="rye text-[#6B4841] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h2)" }}
            >
              The Rules
            </h2>
          </div>

          <div className="grid gap-[var(--gap)] md:grid-cols-2">
            {specialEvent.rules.map(({ title, items }) => (
              <div
                key={title}
                className="border-t border-[#6B4841]/20 pt-7 md:border md:border-[#6B4841]/10 md:bg-[#EDE0CC]/45 md:p-[max(1.25rem,2.2vw)]"
              >
                <h3
                  className="rye text-[#6B4841] uppercase tracking-wide"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[length:var(--text-body)] leading-snug text-[#6B4841]/80"
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
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              Everything You Need
            </p>
            <h2
              className="rye text-[#6B4841] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h3)" }}
            >
              Good to Know
            </h2>
            <p className="mt-5 text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/75">
              Never line danced before? That&apos;s most of the room. We teach every step on the
              night, so all you have to bring is a costume and a pair of boots.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <BookingButton
                serviceKey="competition"
                label="Save My Spot"
                eyebrow={specialEvent.eyebrow}
                className={buttonOnLight}
              />
              <Link href="/contact" className={buttonOutline}>
                Contact Us
              </Link>
            </div>
          </div>

          <ul className="space-y-3 border-t border-[#6B4841]/20 pt-7 md:border-t-0 md:pt-0">
            {specialEvent.goodToKnow.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[length:var(--text-body)] leading-snug text-[#6B4841]/80"
              >
                <Bullet />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
