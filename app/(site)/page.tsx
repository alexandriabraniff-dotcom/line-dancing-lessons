import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";

/* Card artwork is 3:4 portrait with the title designed into the image */
const occasions = [
  { title: "Weddings", image: "/services/weddings.png" },
  { title: "Birthdays", image: "/services/birthdays.png" },
  { title: "Special Events", image: "/services/special-events.png" },
  { title: "Private Lessons", image: "/services/private-lessons.png" },
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
};

const gallery: { featured: Photo; left: Photo[]; right: Photo[]; mobile: Photo[] } = {
  featured: photos.street,
  left: [photos.danceFloor, photos.group, null, null],
  right: [photos.boots, null, null, null],
  mobile: [photos.street, photos.group, photos.danceFloor, photos.boots, null, null, null, null, null],
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
      {/* ── Hero ── */}
      <HomeHero />

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
            {occasions.map(({ title, image }) => (
              <Link
                key={title}
                href="/services"
                className="group shrink-0 w-[65vw] sm:w-auto snap-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]"
              >
                <div className="relative aspect-[3/4] overflow-hidden shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-18px_rgba(30,15,11,0.45)]">
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

      {/* ── Our Story ── */}
      <section className="px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[var(--gap)] items-center">
          <div className="image-placeholder aspect-[4/5]">
            <span>Instructor portrait / Teaching moment</span>
          </div>

          <div>
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              Get to Know Us
            </p>
            <h2
              className="rye text-[#6B4841] uppercase tracking-wide mb-6"
              style={{ fontSize: "var(--text-h3)" }}
            >
              Our Story
            </h2>
            <div className="space-y-4 text-[#6B4841]/70 text-[length:var(--text-body)] leading-relaxed">
              <p>
                Line dancing has a way of bringing people together like nothing else.
                Whether it&apos;s a bride and her bridesmaids learning a surprise routine,
                a group of friends celebrating a birthday, or a corporate team letting
                loose after hours, the magic is always the same.
              </p>
              <p>
                Our instructors are passionate about making every session fun, inclusive,
                and memorable. We meet you where you are, and we leave you wanting to
                dance every chance you get.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="brygada font-bold text-xs border border-[#C483C8]/40 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#F7EAD8] transition-all inline-block"
              >
                Read More About Us              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative flex min-h-[33.34vw] md:min-h-[25vw] items-center">
        <div className="image-placeholder !absolute inset-0 !border-x-0">
          <span>CTA background / Group photo or venue</span>
        </div>
        <div className="absolute inset-0 bg-[#1E0F0B]/65" />
        <div className="relative w-full px-[var(--gutter)] py-[var(--section-sm)]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
                Be Part of the Fun
              </p>
              <h2 className="rye text-[#F7EAD8] uppercase tracking-wide" style={{ fontSize: "var(--text-h2)" }}>
                Book Your Session
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="brygada font-bold text-xs border border-[#C483C8]/50 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#1E0F0B] transition-all inline-block"
              >
                Get in Touch                </Link>
              <Link
                href="/services"
                className="brygada font-bold text-xs border border-[#F7EAD8]/30 text-[#F7EAD8]/60 px-7 py-3 tracking-[0.25em] uppercase hover:text-[#F7EAD8] hover:border-[#F7EAD8]/60 transition-all inline-block"
              >
                See Services                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
