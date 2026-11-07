import Link from "next/link";
import type { Metadata } from "next";
import CompetitionCover from "@/components/CompetitionCover";
import { formatDate, getPast, getUpcoming, type Competition } from "@/lib/competitions";

/* Re-checked hourly so a competition moves from Upcoming to Past on its own */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Line Dancing Competitions",
  description:
    "Line dancing competitions in Vancouver hosted by Wildflower Line Dancing. See what's coming up, and find recaps and photos from past competitions.",
  alternates: { canonical: "/competitions" },
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const eyebrow =
  "brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#8B4D39]";

/* Cards stay centred while there are only one or two of them */
const cardList = "flex flex-wrap justify-center gap-[var(--gap)]";

function CompetitionCard({ competition, headingLevel = "h3" }: { competition: Competition; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <li className="w-full sm:w-[calc((100%-var(--gap))/2)] lg:w-[calc((100%-var(--gap)*2)/3)]">
      <Link
        href={`/competitions/${competition.slug}`}
        className={`group flex h-full flex-col bg-[#FBF4EA] shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(30,15,11,0.5)] ${focusRing}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <CompetitionCover
            competition={competition}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col p-[max(1.25rem,1.6vw)]">
          <p className={eyebrow}>
            <time dateTime={competition.startDate}>{formatDate(competition.startDate)}</time>
          </p>
          <Heading className="rye mt-2 uppercase leading-tight tracking-wide text-[#6B4841]" style={{ fontSize: "var(--text-h3)" }}>
            {competition.name}
          </Heading>
          <p className="mt-1 text-[length:var(--text-body)] text-[#6B4841]">{competition.venue.name}, {competition.venue.city}</p>
          <p className="brygada mt-4 border-t border-[#6B4841]/15 pt-4 text-[length:var(--text-body)] italic text-[#6B4841]">
            &ldquo;{competition.tagline}&rdquo;
          </p>
        </div>
      </Link>
    </li>
  );
}

export default function CompetitionsPage() {
  const upcoming = getUpcoming();
  const past = getPast();

  return (
    <>
      {/* ── Header ── */}
      <section className="px-[var(--gutter)] pt-[var(--section-top)] pb-[var(--section-sm)]">
        <div className="max-w-6xl mx-auto text-center">
          {/* TODO (client): page intro copy */}
          <p className={`${eyebrow} mb-3`}>Compete With Us</p>
          <h1 className="rye text-[#6B4841] uppercase tracking-wide" style={{ fontSize: "var(--text-h1)" }}>
            Competitions
          </h1>
          <p className="mx-auto mt-5 max-w-[40rem] text-[length:var(--text-body)] leading-relaxed text-[#6B4841]">
            Boots on, numbers pinned, and a whole lot of friendly rivalry. Find our next line dancing
            competition here, and relive past nights with the recap and photos.
          </p>
        </div>
      </section>

      {/* ── Upcoming: only when a competition has a future date ── */}
      {upcoming.length > 0 && (
        <section aria-labelledby="upcoming-heading" className="px-[var(--gutter)] pb-[var(--section)]">
          <div className="max-w-6xl mx-auto">
            <h2 id="upcoming-heading" className="rye mb-8 text-center uppercase tracking-wide text-[#6B4841]" style={{ fontSize: "var(--text-h2)" }}>
              Upcoming
            </h2>
            <ul className={cardList}>
              {upcoming.map((c) => (
                <CompetitionCard key={c.slug} competition={c} />
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Past competitions, newest first ── */}
      {past.length > 0 && (
        <section aria-labelledby="past-heading" className="border-t border-[#6B4841]/10 px-[var(--gutter)] pt-[var(--section-sm)] pb-[var(--section)]">
          <div className="max-w-6xl mx-auto">
            <h2 id="past-heading" className="rye mb-8 text-center uppercase tracking-wide text-[#6B4841]" style={{ fontSize: "var(--text-h2)" }}>
              Past Competitions
            </h2>
            <ul className={cardList}>
              {past.map((c) => (
                <CompetitionCard key={c.slug} competition={c} />
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
