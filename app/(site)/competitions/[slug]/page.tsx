import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompetitionCover from "@/components/CompetitionCover";
import PhotoGallery from "@/components/PhotoGallery";
import {
  competitions,
  coverImage,
  formatDate,
  getCompetition,
  getGallery,
  isUpcoming,
  SITE_URL,
} from "@/lib/competitions";
import { formatBytes, galleryZip } from "@/lib/gallery";
import { site } from "@/lib/site";

/* Re-checked hourly, so ticket buttons disappear on their own once the date passes */
export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return competitions.map((c) => ({ slug: c.slug }));
}

/* TODO (client): confirm the Instagram handle and takedown email shown around the gallery */
const instagram = site.socials.find((s) => s.name === "Instagram")!;
const takedownEmail = site.email;

export async function generateMetadata({ params }: PageProps<"/competitions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompetition(slug);
  if (!c) return {};
  const og = coverImage(c, 1200, 630, "f_jpg");
  const url = `/competitions/${c.slug}`;
  return {
    title: `${c.name}, Line Dancing Competition`,
    description: c.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${c.name}, Line Dancing Competition in ${c.venue.city}`,
      description: c.description,
      url,
      images: og ? [{ url: og.src, alt: og.alt }] : undefined,
    },
  };
}

const jsonLd = (data: unknown) => JSON.stringify(data).split("<").join("\\u003c");

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const eyebrow =
  "brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#8B4D39]";

const h2Class = "rye text-[#6B4841] uppercase tracking-wide";

const buttonSolid =
  `brygada inline-flex h-[45px] lg:h-12 items-center justify-center gap-2 bg-[#6B4841] px-6 text-[1.15rem] font-bold tracking-[0.18em] text-[#F7EAD8] transition-colors duration-300 hover:bg-[#1E0F0B] ${focusRing}`;

function Divider() {
  return (
    <div aria-hidden className="px-[var(--gutter)]">
      <div className="mx-auto h-px max-w-6xl bg-[#6B4841]/25" />
    </div>
  );
}

function Bullet() {
  return <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D49C84]" />;
}

export default async function CompetitionPage({ params }: PageProps<"/competitions/[slug]">) {
  const { slug } = await params;
  const c = getCompetition(slug);
  if (!c) notFound();

  const upcoming = isUpcoming(c);
  const gallery = getGallery(c.slug);
  const photos = gallery?.cloudName ? gallery.photos : [];
  const zip = gallery ? galleryZip(gallery) : null;
  const cover = coverImage(c, 1200, 1500, "f_jpg");
  const info = c.eventInfo;

  /* Event structured data so Google can show the date, venue and details */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: c.name,
    url: `${SITE_URL}/competitions/${c.slug}`,
    startDate: c.startDate,
    endDate: c.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: c.description,
    image: cover ? [new URL(cover.src, SITE_URL).toString()] : undefined,
    location: {
      "@type": "Place",
      name: c.venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.venue.streetAddress,
        addressLocality: c.venue.city,
        addressRegion: c.venue.region,
        postalCode: c.venue.postalCode,
        addressCountry: "CA",
      },
    },
    organizer: { "@type": "Organization", name: "Wildflower Line Dancing", url: SITE_URL },
    ...(upcoming && c.tickets
      ? { offers: { "@type": "Offer", url: c.tickets.url, availability: "https://schema.org/InStock" } }
      : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />

      {/* ── Hero: name, date, venue, tagline ── */}
      <section className="px-[var(--gutter)] pt-[var(--section-top)] pb-[var(--section)]">
        <div className="max-w-6xl mx-auto grid items-center gap-[var(--gap)] md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="text-center md:text-left">
            <Link
              href="/competitions"
              className={`brygada mb-6 inline-flex min-h-11 items-center text-[1.05rem] font-bold tracking-[0.12em] text-[#6B4841] underline decoration-[#6B4841]/30 underline-offset-4 hover:decoration-[#6B4841] ${focusRing}`}
            >
              All Competitions
            </Link>
            <p className={`${eyebrow} mb-3`}>
              <time dateTime={c.startDate}>{formatDate(c.startDate)}</time>
            </p>
            <h1 className="rye text-[#6B4841] uppercase leading-[1.05] tracking-wide" style={{ fontSize: "var(--text-h1)" }}>
              {c.name}
            </h1>
            <p className="mt-4 text-[length:var(--text-body)] text-[#6B4841]">
              {c.venue.name}, {c.venue.streetAddress}, {c.venue.city}
              {c.ageLine && (
                <>
                  <span aria-hidden className="mx-2">&middot;</span>
                  {c.ageLine}
                </>
              )}
            </p>
            <blockquote className="brygada mt-6 border-t border-[#6B4841]/15 pt-6 text-[length:clamp(1.4rem,2vw,2rem)] italic leading-snug text-[#6B4841]">
              &ldquo;{c.tagline}&rdquo;
            </blockquote>

            {/* Tickets only while the competition is still to come */}
            {upcoming && c.tickets && (
              <a href={c.tickets.url} target="_blank" rel="noopener noreferrer" className={`${buttonSolid} mt-8`}>
                {c.tickets.label}
              </a>
            )}
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[30rem] overflow-hidden shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)]">
            <CompetitionCover competition={c} preload sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Recap ── */}
      <section aria-labelledby="recap-heading" className="px-[var(--gutter)] py-[var(--section)]">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className={`${eyebrow} mb-3`}>{upcoming ? "Coming Up" : "The Night"}</p>
          <h2 id="recap-heading" className={h2Class} style={{ fontSize: "var(--text-h2)" }}>
            Recap
          </h2>
          <div className="mt-6 space-y-4 text-[length:var(--text-body)] leading-relaxed text-[#6B4841]">
            {c.recap.length > 0 ? (
              c.recap.map((p) => <p key={p}>{p}</p>)
            ) : (
              <p>The full recap from the night is coming soon.</p>
            )}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Photo gallery ── */}
      <section id="photos" aria-labelledby="photos-heading" className="px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p className={`${eyebrow} mb-3`}>Find Yourself</p>
            <h2 id="photos-heading" className={h2Class} style={{ fontSize: "var(--text-h2)" }}>
              Photos
            </h2>

            {photos.length > 0 ? (
              <>
                <p className="mx-auto mt-5 max-w-[40rem] text-[length:var(--text-body)] leading-relaxed text-[#6B4841]">
                  Download your photos and tag us on Instagram{" "}
                  <a
                    href={instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-bold text-[#6B4841] underline underline-offset-4 ${focusRing}`}
                  >
                    {instagram.handle}
                  </a>
                  .
                </p>
                {zip?.url && (
                  <div className="mt-6 flex flex-col items-center gap-2">
                    <a href={zip.url} className={buttonSolid}>
                      Download All Photos
                    </a>
                    <p className="text-[0.95rem] text-[#6B4841]">
                      {photos.length} photos
                      {zip.bytes ? <>, {formatBytes(zip.bytes)} zip file</> : null}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <p className="mx-auto mt-5 max-w-[40rem] text-[length:var(--text-body)] leading-relaxed text-[#6B4841]">
                Photos from the night are coming soon.
              </p>
            )}
          </div>

          {gallery && photos.length > 0 && (
            <>
              <PhotoGallery cloudName={gallery.cloudName} sections={gallery.sections} photos={photos} />

              <div className="mx-auto mt-10 max-w-[40rem] space-y-3 text-center text-[0.95rem] leading-relaxed text-[#6B4841]">
                <p>
                  Want a photo removed? Email{" "}
                  <a href={`mailto:${takedownEmail}`} className={`font-bold text-[#6B4841] underline underline-offset-4 ${focusRing}`}>
                    {takedownEmail}
                  </a>{" "}
                  and we&apos;ll take it down.
                </p>
                <p>
                  On iPhone, downloads save to the Files app. Open the photo there, tap Share, then Save Image to add it
                  to your Photos.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Archived event info (write-up, setlist, rules) ── */}
      {info && (
        <>
          <Divider />
          <section aria-label="Event info" className="px-[var(--gutter)] py-[var(--section)]">
            <details className="group max-w-6xl mx-auto border border-[#6B4841]/20 bg-[#FBF4EA]">
              <summary
                className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-[max(1.25rem,2vw)] py-4 [&::-webkit-details-marker]:hidden ${focusRing}`}
              >
                <span>
                  <span className={`${eyebrow} block`}>{upcoming ? "Details" : "From the Archive"}</span>
                  <span className={`${h2Class} mt-1 block`} style={{ fontSize: "var(--text-h3)" }}>
                    Event Info
                  </span>
                </span>
                <span aria-hidden className="relative h-6 w-6 shrink-0 text-[#6B4841]">
                  <span className="absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-6 w-[2px] -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>

              <div className="border-t border-[#6B4841]/15 px-[max(1.25rem,2vw)] pt-8 pb-[max(2rem,3vw)]">
                {/* Write-up + poster */}
                <div className="grid items-start gap-[var(--gap)] md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                  <div className="space-y-4 text-[length:var(--text-body)] leading-relaxed text-[#6B4841]">
                    {info.intro.map(({ lead, text }) => (
                      <p key={text}>
                        {lead && <strong className="font-bold text-[#6B4841]">{lead} </strong>}
                        {text}
                      </p>
                    ))}
                  </div>
                  {info.poster && (
                    <Image
                      src={info.poster.src}
                      alt={info.poster.alt}
                      width={info.poster.width}
                      height={info.poster.height}
                      sizes="(min-width: 768px) 35vw, 100vw"
                      className="h-auto w-full max-w-[26rem] justify-self-center"
                    />
                  )}
                </div>

                {/* Setlist with step sheets */}
                {info.setlist && info.setlist.length > 0 && (
                  <div className="mt-[var(--section-sm)]">
                    <h3 className={`${h2Class} text-center`} style={{ fontSize: "var(--text-h3)" }}>
                      The Setlist
                    </h3>
                    {info.setlistNote && (
                      <p className="mx-auto mt-3 max-w-[40rem] text-center text-[0.95rem] leading-relaxed text-[#6B4841]">
                        {info.setlistNote}
                      </p>
                    )}
                    <ol className="mt-6 gap-x-[var(--gap)] lg:columns-2">
                      {info.setlist.map(({ song, artist, dance, url, swap }, i) => (
                        <li
                          key={url}
                          className="grid break-inside-avoid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 border-b border-[#6B4841]/15 py-3 sm:grid-cols-[auto_minmax(0,1fr)_auto]"
                        >
                          <span aria-hidden className="rye w-[2.2ch] text-[1.5rem] leading-none text-[#8B4D39]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <p className="font-bold leading-tight text-[#6B4841]">
                              {song}
                              <span className="font-normal text-[#6B4841]"> by {artist}</span>
                            </p>
                            {swap && (
                              <p className="mt-1 text-[0.95rem] text-[#6B4841]">
                                <span className="brygada mr-2 inline-block bg-[#6B4841] px-2 py-0.5 text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[#F7EAD8]">
                                  Spooky Swap
                                </span>
                                to {swap}
                              </p>
                            )}
                            <p className="mt-1 text-[0.95rem] text-[#6B4841]">Dance: {dance}</p>
                          </div>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Step sheet for ${dance}, opens CopperKnob in a new tab`}
                            className={`brygada col-start-2 mt-2 inline-flex min-h-11 items-center justify-self-start border border-[#6B4841]/40 px-3 text-[0.95rem] font-bold tracking-[0.1em] text-[#6B4841] transition-colors duration-300 hover:bg-[#6B4841] hover:text-[#F7EAD8] sm:col-start-3 sm:mt-0 ${focusRing}`}
                          >
                            Step Sheet
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Rules */}
                {info.rules && info.rules.length > 0 && (
                  <div className="mt-[var(--section-sm)]">
                    <h3 className={`${h2Class} text-center`} style={{ fontSize: "var(--text-h3)" }}>
                      The Rules
                    </h3>
                    <div className="mt-6 grid gap-[var(--gap)] md:grid-cols-2">
                      {info.rules.map(({ title, intro, items }) => (
                        <div key={title}>
                          <h4 className="brygada text-[1.3rem] font-bold text-[#6B4841]">{title}</h4>
                          {intro && (
                            <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-[#6B4841]">{intro}</p>
                          )}
                          <ul className="mt-4 space-y-2.5">
                            {items.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-[length:var(--text-body)] leading-snug text-[#6B4841]">
                                <Bullet />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {upcoming && c.tickets && (
                  <div className="mt-[var(--section-sm)] text-center">
                    <a href={c.tickets.url} target="_blank" rel="noopener noreferrer" className={buttonSolid}>
                      {c.tickets.label}
                    </a>
                  </div>
                )}
              </div>
            </details>
          </section>
        </>
      )}
    </>
  );
}
