import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Meet Wildflower Line Dancing, Vancouver's fun, inclusive line dancing instructors. Beginner and intermediate friendly lessons that feel like a party, not a class.",
  alternates: { canonical: "/about" },
};

/* ── Instructors ──────────────────────────────────────────
   Add each photo to public/about/ and set `image`, then replace `writeUp`
   with their own words. While `image` is null a placeholder is shown. */
const instructors: {
  name: string;
  image: string | null;
  /* Horizontal focus point of the photo, keeps the person centred in the portrait crop */
  focus?: string;
  /* Optional zoom so both portraits share the same head-to-hips framing */
  zoom?: string;
  writeUp: string | null;
}[] = [
  { name: "Alex", image: "/about/alex.jpg", focus: "48% center", writeUp: null },
  { name: "Lily", image: "/about/lily.jpg", focus: "45% center", zoom: "origin-[100%_0%] scale-[1.2]", writeUp: null },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

export default function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-[var(--gutter)] pt-[var(--section-top)] pb-[var(--section-sm)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            Get to Know Us
          </p>
          <h1
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "var(--text-h1)" }}
          >
            About Wildflower
          </h1>
        </div>
      </section>

      {/* ── Our Story (main section) ── */}
      <section className="px-[var(--gutter)] pb-[var(--section)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[var(--gap)] items-center">
          <div className="relative aspect-[3/4] overflow-hidden shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)]">
            <Image
              src="/our-story.jpeg"
              alt="Alex and Lily of Wildflower Line Dancing in cowboy hats and boots in front of a brick wall"
              fill
              preload
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover origin-[50%_52%] scale-[1.4]"
            />
          </div>

          <div>
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              Our Story
            </p>
            <h2
              className="rye text-[#6B4841] uppercase tracking-wide leading-tight mb-6"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Dancing Should Be
              <br />
              For Everyone
            </h2>
            <div className="space-y-4 text-[#6B4841]/80 text-[length:var(--text-body)] leading-relaxed">
              <p>
                You don&apos;t need any experience, you&apos;re never too clumsy, and your event is
                never too big or too small. Just bring your boots and we&apos;ll bring the beats and a
                whole lot of good times.
              </p>
              <p>
                Line dancing has a way of bringing your people together like nothing else. Whether
                you&apos;re learning a surprise routine with your bridesmaids, celebrating a birthday
                with your friends, or letting loose after hours with your team, the magic is always
                the same.
              </p>
              <p>
                We started Wildflower out of a love for country music and community, and it&apos;s grown
                into something bigger. We want to give you a space in Vancouver where you can let go,
                laugh, learn something new, and walk away feeling a little lighter than when you came in.
              </p>
            </div>
            <div className="mt-8 border-t border-[#6B4841]/15 pt-6">
              <p className="brygada text-[length:clamp(1.31rem,1.63vw,1.69rem)] font-bold italic text-[#6B4841]">
                Have any questions?
              </p>
              <p className="mt-1 text-[#6B4841]/75 text-[length:var(--text-body)] leading-relaxed">
                We&apos;d love to hear from you. Reach out and we&apos;ll get back to you within 24 hours.
              </p>
              <Link
                href="/contact"
                className={`brygada mt-5 inline-flex h-[45px] lg:h-11 items-center justify-center bg-[#6B4841] px-6 text-[1.15rem] font-bold tracking-[0.18em] text-[#F7EAD8] transition-colors duration-300 hover:bg-[#1E0F0B] ${focusRing}`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet the Instructors (two smaller sections) ── */}
      <section className="border-t border-[#6B4841]/10 px-[var(--gutter)] py-[var(--section)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-[max(2rem,3vw)]">
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              Meet Your Instructors
            </p>
            <h2
              className="rye text-[#6B4841] uppercase tracking-wide"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {instructors.map((person) => person.name).join(" & ")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--gap)]">
            {instructors.map(({ name, image, focus, zoom, writeUp }) => (
              <article key={name} className="flex flex-col">
                {image ? (
                  <div className="relative aspect-[4/5] overflow-hidden shadow-[0_10px_30px_-18px_rgba(30,15,11,0.35)]">
                    <Image
                      src={image}
                      alt={`${name} of Wildflower Line Dancing`}
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className={`object-cover ${zoom ?? ""}`}
                      style={{ objectPosition: focus ?? "center" }}
                    />
                  </div>
                ) : (
                  <div className="image-placeholder aspect-[4/5]">
                    <span>{name} photo</span>
                  </div>
                )}

                <h3
                  className="rye mt-6 text-[#6B4841] uppercase tracking-wide leading-tight"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {name}
                </h3>
                <p className="brygada mt-1 text-[length:clamp(1.19rem,1.38vw,1.44rem)] italic text-[#6B4841]/70">
                  What line dancing means to me
                </p>
                <p className="mt-3 text-[#6B4841]/80 text-[length:var(--text-body)] leading-relaxed">
                  {writeUp ?? `${name}'s write-up is coming soon.`}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
