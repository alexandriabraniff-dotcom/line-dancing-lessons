import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import GoogleReview from "@/components/GoogleReview";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata = {
  title: "Line Dancing Lessons in Vancouver",
  description:
    "Line dancing lessons in Vancouver for weddings, birthdays, special events and private lessons. Beginner and intermediate friendly, no partner needed, we come to you.",
  alternates: { canonical: "/" },
};

/* Re-render hourly so the Instagram feed stays fresh */
export const revalidate = 3600;

/* Questions we get asked most, also used for the FAQ structured data below */
const faqs = [
  {
    q: "Do we need any line dancing experience?",
    a: "Not at all. Most of the people we teach have never line danced before. We break every routine down step by step and build it up slowly, so beginners and experienced dancers end up on the floor together.",
  },
  {
    q: "Do we need a partner?",
    a: "No. Line dancing is danced in lines rather than pairs, so nobody gets left out and you can come on your own, as a couple or with your whole group.",
  },
  {
    q: "Where in Vancouver do you teach?",
    a: "We teach classes at The Yale Saloon, 1300 Granville St in downtown Vancouver, every Thursday, Saturday and Sunday. For private bookings we come to you anywhere in Greater Vancouver, including Vancouver, Burnaby, Richmond, Surrey, New Westminster, Coquitlam, Langley and the North Shore. Your venue, your home, an office or a hall all work.",
  },
  {
    q: "How big can the group be?",
    a: "Anything from a small private group to a full wedding reception. Tell us how many people you expect and we will shape the session around the space and the crowd.",
  },
  {
    q: "How long is a lesson?",
    a: "We build the session around your event. Most groups book between one and two hours, and at weddings we often teach a shorter lesson partway through the night so nobody misses the party.",
  },
  {
    q: "How do we book?",
    a: "Send us a message through the contact page or pick your occasion on the services page. We reply to every enquiry within 24 hours.",
  },
];

/* Split down the middle for the two column layout */
const faqColumns = [faqs.slice(0, Math.ceil(faqs.length / 2)), faqs.slice(Math.ceil(faqs.length / 2))];

/* Escapes "<" so the JSON can never break out of the script tag */
const jsonLd = (data: unknown) => JSON.stringify(data).split("<").join("\\u003c");

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* Card artwork is 3:4 portrait with the title designed into the image */
const occasions = [
  { title: "Weddings", image: "/services/weddings.png", section: "weddings" },
  { title: "Birthdays", image: "/services/birthdays.png", section: "birthdays" },
  { title: "Special Events", image: "/services/special-events.png", section: "special-events" },
  { title: "Private Lessons", image: "/services/private-lessons.png", section: "private-lessons" },
];

/* ── Gallery ──────────────────────────────────────────────
   Add new photos to public/gallery and drop them into an empty (null)
   slot below. Empty slots show a subtle placeholder until filled. */
type Photo = { src: string; alt: string } | null;

const photos = {
  group: {
    src: "/gallery/group-photo.png",
    alt: "Group of dancers in cowboy hats smiling under string lights at an outdoor event",
  },
  danceFloor: {
    src: "/gallery/dance-floor.jpeg",
    alt: "A packed dance floor line dancing together at a country bar",
  },
  street: {
    src: "/gallery/street-event.jpeg",
    alt: "Three dancers smiling arm in arm at a street festival",
  },
  boots: {
    src: "/gallery/boots-on-the-floor.jpeg",
    alt: "Dancers in cowboy boots mid-step on a wooden dance floor",
  },
  streetLineDance: {
    src: "/gallery/street-line-dance.jpg",
    alt: "A crowd line dancing together on a closed downtown Vancouver street",
  },
  streetCrowd: {
    src: "/gallery/street-crowd.jpg",
    alt: "Dozens of people joining a line dance down a festival street in Vancouver",
  },
};

const gallery: { featured: Photo; left: Photo[]; right: Photo[]; mobile: Photo[] } = {
  featured: photos.street,
  left: [photos.danceFloor, photos.group, photos.streetLineDance, null],
  right: [photos.boots, null, null, photos.streetCrowd],
  mobile: [photos.street, photos.group, photos.danceFloor, photos.boots, photos.streetLineDance, photos.streetCrowd, null, null, null],
};

function GallerySlot({ photo, sizes, className }: { photo: Photo; sizes: string; className: string }) {
  if (!photo) {
    return (
      <div
        aria-hidden
        className={`image-placeholder !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.04] ${className}`}
      />
    );
  }

  return (
    <div className={`group relative overflow-hidden bg-[#F7EAD8]/[0.04] ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(faqStructuredData),
        }}
      />

      {/* ── Hero ── */}
      <HomeHero />

      {/* Divider between hero and services on phones */}
      <div aria-hidden className="mx-[var(--gutter)] h-px bg-[#6B4841]/25 lg:hidden" />

      {/* ── Book by Occasion ── */}
      <section id="our-services" className="px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            Whatever the occasion, we&apos;ve got you covered
          </p>
          <h2
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Our Services
          </h2>

          <div className="mt-12 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
            {occasions.map(({ title, image, section }) => (
              <Link
                key={title}
                href={`/services#${section}`}
                className="group shrink-0 w-[65vw] sm:w-auto snap-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]"
              >
                <div className="relative aspect-[7/9] overflow-hidden transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 640px) 25vw, 65vw"
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Help prompt */}
          <div className="mx-auto mt-[max(2.5rem,3.5vw)] max-w-xl">
            <p className="brygada text-[length:clamp(1.38rem,1.75vw,1.88rem)] font-bold italic text-[#6B4841]">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <p className="mt-2 text-[#6B4841]/75 text-[length:var(--text-body)] leading-relaxed">
              Every event is different. Contact us and we&apos;ll help you plan the perfect session.
            </p>
            <Link
              href="/contact"
              className="brygada mt-5 inline-flex h-[45px] lg:h-11 items-center justify-center bg-[#6B4841] px-6 text-[1.15rem] font-bold tracking-[0.18em] text-[#F7EAD8] transition-colors duration-300 hover:bg-[#1E0F0B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="bg-[#1E0F0B] px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              See Us in Action
            </p>
            <h2
              className="rye text-[#F7EAD8] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Gallery
            </h2>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory md:hidden">
            {gallery.mobile.map((photo, i) => (
              <GallerySlot
                key={photo?.src ?? `empty-${i}`}
                photo={photo}
                sizes="55vw"
                className="aspect-square shrink-0 w-[55vw] snap-start"
              />
            ))}
          </div>

          {/* Desktop: 4 small left | 1 big center | 4 small right */}
          <div className="hidden md:grid md:grid-cols-[1fr_2fr_1fr] gap-4">
            <div className="grid grid-cols-2 gap-4">
              {gallery.left.map((photo, i) => (
                <GallerySlot
                  key={photo?.src ?? `left-${i}`}
                  photo={photo}
                  sizes="13vw"
                  className="aspect-square"
                />
              ))}
            </div>

            <GallerySlot photo={gallery.featured} sizes="40vw" className="min-h-full" />

            <div className="grid grid-cols-2 gap-4">
              {gallery.right.map((photo, i) => (
                <GallerySlot
                  key={photo?.src ?? `right-${i}`}
                  photo={photo}
                  sizes="13vw"
                  className="aspect-square"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story (also the page's main copy for search: who we are and where we teach) ── */}
      <section className="px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[var(--gap)] items-center text-center md:text-left">
          <div className="relative aspect-[3/4] overflow-hidden shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)]">
            <Image
              src="/our-story.jpeg"
              alt="Alex and Lily of Wildflower Line Dancing in cowboy hats and boots smiling in front of a brick wall"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover origin-[50%_52%] scale-[1.4]"
            />
          </div>

          <div>
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              Line Dancing in Greater Vancouver
            </p>
            <h2
              className="rye text-[#6B4841] uppercase tracking-wide mb-6"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Our Story
            </h2>
            <div className="space-y-4 text-[#6B4841]/70 text-[length:var(--text-body)] leading-relaxed">
              <p>
                Wildflower Line Dancing is owned and run by instructors Alex and Lily. We believe
                nothing brings people together quite like line dancing. Whether you&apos;re learning
                a surprise routine with your bridesmaids, celebrating a birthday with friends or
                unwinding after hours with your team, it&apos;s an experience everyone remembers.
              </p>
              <p>
                We offer beginner and intermediate line dancing lessons throughout Greater
                Vancouver, including downtown Vancouver, Burnaby, Richmond, Surrey, New
                Westminster, Coquitlam, Langley and the North Shore. From weddings and birthdays
                to special events and private lessons, you choose the date and the venue, and we
                bring the dance floor to you.
              </p>
              <p>
                No experience or partner is required. We break down every routine step by step,
                keep the music going and have your entire group dancing together within minutes.
                Our goal is simple: to leave you wanting to dance every chance you get.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="brygada mx-auto inline-flex h-[45px] lg:h-11 items-center justify-center bg-[#6B4841] md:mx-0 px-6 text-[1.15rem] font-bold tracking-[0.18em] text-[#F7EAD8] transition-colors duration-300 hover:bg-[#1E0F0B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]"
              >
                Read More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Common questions: two columns split down the middle ── */}
      <section className="px-[var(--gutter)] pb-[var(--section)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              Good to Know
            </p>
            <h2
              className="rye text-[#6B4841] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Common Questions
            </h2>
          </div>

          <div className="mt-10 grid md:grid-cols-2 md:divide-x md:divide-[#6B4841]/20">
            {faqColumns.map((column, i) => (
              <dl key={i} className={i === 0 ? "md:pr-[max(1.5rem,3vw)]" : "md:pl-[max(1.5rem,3vw)]"}>
                {column.map(({ q, a }) => (
                  <div key={q} className="border-b border-[#6B4841]/15 py-5">
                    <dt className="brygada font-bold text-[length:clamp(1.1rem,1.25vw,1.35rem)] leading-snug text-[#6B4841]">
                      {q}
                    </dt>
                    <dd className="mt-2 text-[length:calc(var(--text-body)*0.9)] leading-relaxed text-[#6B4841]/70">
                      {a}
                    </dd>
                  </div>
                ))}
              </dl>
            ))}
          </div>
        </div>
      </section>

      {/* ── Google review prompt ── */}
      <GoogleReview />

      {/* ── Latest Instagram posts ── */}
      <InstagramFeed />
    </>
  );
}
