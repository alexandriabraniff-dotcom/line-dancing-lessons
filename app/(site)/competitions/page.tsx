import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CompetitionCover from "@/components/CompetitionCover";
import { site } from "@/lib/site";
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

/* Phones: one swipeable row, each card 86% wide so the next one peeks in.
   The row bleeds to the screen edges and snaps cards to the gutter.
   md and up: cards wrap two per row, centred while there are only one or two. */
const cardRow =
  "-mx-[var(--gutter)] flex snap-x snap-mandatory gap-[var(--gap-sm)] overflow-x-auto px-[var(--gutter)] scroll-px-[var(--gutter)] pb-4 md:mx-0 md:snap-none md:flex-wrap md:justify-center md:gap-[var(--gap)] md:overflow-visible md:px-0 md:pb-0";
const cardItem = "w-[86%] shrink-0 snap-start only:w-full md:w-[calc((100%-var(--gap))/2)]";

const card =
  "flex h-full flex-col bg-[#FBF4EA] shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)]";

function CompetitionCard({ competition, upcoming }: { competition: Competition; upcoming: boolean }) {
  return (
    <li className={cardItem}>
      <Link
        href={`/competitions/${competition.slug}`}
        className={`group ${card} transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(30,15,11,0.5)] ${focusRing}`}
      >
        {/* Wide 4:1 banner, like the Google Form header */}
        <div className="relative aspect-[4/1] overflow-hidden bg-[#0A0505]">
          {competition.banner ? (
            <Image
              src={competition.banner.src}
              alt={competition.banner.alt}
              fill
              sizes="(min-width: 768px) 45vw, 86vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <CompetitionCover
              competition={competition}
              sizes="(min-width: 768px) 45vw, 86vw"
              className="transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-[max(1rem,1.3vw)]">
          <p className={eyebrow}>
            <time dateTime={competition.startDate}>{formatDate(competition.startDate)}</time>
          </p>
          <h3 className="rye mt-1.5 uppercase leading-tight tracking-wide text-[#6B4841] text-[length:var(--text-body)] md:text-[length:calc(var(--text-body)*1.15)]">
            {competition.name}
          </h3>
          <p className="mt-1 text-[length:var(--text-body)] text-[#6B4841]">
            {competition.venue.name}, {competition.venue.city}
          </p>
          <p className="mt-auto pt-3 text-[length:var(--text-body)] font-bold text-[#6B4841] underline decoration-[#6B4841]/40 underline-offset-4 group-hover:decoration-[#6B4841]">
            {upcoming ? "Event Details & Tickets" : "Recap & Photos"}
          </p>
        </div>
      </Link>
    </li>
  );
}

/* Holds the spot for the next competition, so the Upcoming row is never empty */
function ComingSoonCard({ more }: { more: boolean }) {
  const instagram = site.socials.find((s) => s.name === "Instagram");
  return (
    <li className={cardItem}>
      <div className="flex h-full flex-col border-2 border-dashed border-[#6B4841]/35 bg-[#FBF4EA]/60">
        <div className="flex aspect-[4/1] flex-col items-center justify-center border-b-2 border-dashed border-[#6B4841]/35 px-4 text-center">
          <p className="rye uppercase leading-tight tracking-wide text-[#6B4841] text-[length:calc(var(--text-body)*1.15)]">
            {more ? "More Events" : "Next Competition"}
          </p>
          <p className={`${eyebrow} mt-1`}>Coming Soon</p>
        </div>
        <div className="flex flex-1 flex-col p-[max(1rem,1.3vw)]">
          <p className="text-[length:var(--text-body)] leading-relaxed text-[#6B4841]">
            We&apos;re planning the next one now. Dates, venue and tickets will be posted here first, and on our
            Instagram.
          </p>
          {instagram && (
            <a
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto pt-3 text-[length:var(--text-body)] font-bold text-[#6B4841] underline decoration-[#6B4841]/40 underline-offset-4 hover:decoration-[#6B4841] ${focusRing}`}
            >
              Follow {instagram.handle}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
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

      {/* ── Upcoming: always shown, with a Coming Soon card holding the next spot ── */}
      {(
        <section aria-labelledby="upcoming-heading" className="px-[var(--gutter)] pb-[var(--section)]">
          <div className="max-w-6xl mx-auto">
            <h2 id="upcoming-heading" className="rye mb-8 text-center uppercase tracking-wide text-[#6B4841]" style={{ fontSize: "var(--text-h2)" }}>
              Upcoming
            </h2>
            <ul className={cardRow}>
              {upcoming.map((c) => (
                <CompetitionCard key={c.slug} competition={c} upcoming />
              ))}
              <ComingSoonCard more={upcoming.length > 0} />
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
            <ul className={cardRow}>
              {past.map((c) => (
                <CompetitionCard key={c.slug} competition={c} upcoming={false} />
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
