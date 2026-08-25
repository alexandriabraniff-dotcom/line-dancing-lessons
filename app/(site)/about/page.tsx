import Link from "next/link";

export const metadata = {
  title: "About | Wildflower Line Dancing",
  description: "Learn about our line dancing instructors and what makes us different.",
};

const values = [
  { title: "Inclusive", desc: "All levels welcome. Complete beginners to seasoned steppers, we work at your pace." },
  { title: "Fun First", desc: "Every session is designed to feel like a party, not a class. The laughs are part of the deal." },
  { title: "Memorable", desc: "We create moments people talk about long after the dance floor clears." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-6 md:px-12 lg:px-16 pt-24 md:pt-28 pb-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            Get to Know Us
          </p>
          <h1
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "clamp(2.4rem, 7vw, 5rem)" }}
          >
            About Wildflower
          </h1>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="image-placeholder w-full aspect-[2.8/1]">
            <span>About hero / Team or teaching moment</span>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="image-placeholder aspect-[4/5]">
            <span>Instructor portrait</span>
          </div>
          <div>
            <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">Our Story</p>
            <h2
              className="brygada font-bold text-[#6B4841] uppercase tracking-wide mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
            >
              Dancing Should Be
              <br />For Everyone
            </h2>
            <div className="space-y-4 text-[#6B4841]/70 text-sm leading-relaxed">
              <p>
                No experience needed, no two left feet too clumsy, no event too big or too small.
                Just boots, beats, and a whole lot of good times.
              </p>
              <p>
                Line dancing has a way of bringing people together like nothing else. Whether it&apos;s a
                bride and her bridesmaids learning a surprise routine, a group of mates celebrating
                a birthday, or a corporate team letting loose after hours, the magic is always the same.
              </p>
              <p>
                Our instructors are passionate about making every session fun, inclusive, and memorable.
                We meet you where you are, and we leave you wanting to dance every chance you get.
              </p>
              <p>
                What started as a love of country music and community has grown into something bigger.
                Wildflower is about creating spaces where people can let go, laugh, learn something new,
                and walk away feeling a little lighter than they came in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-Width Image Banner ── */}
      <section className="relative">
        <div className="image-placeholder w-full aspect-[2.8/1] !rounded-none !border-x-0">
          <span>Wide shot / Group dancing at an event</span>
        </div>
        <div className="absolute inset-0 bg-[#1E0F0B]/50 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="brygada font-bold text-[#F7EAD8] uppercase tracking-wide leading-tight" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)" }}>
                It&apos;s More Than
                <br />a Dance
              </h2>
              <p className="brygada font-bold text-[0.6rem] tracking-[0.3em] uppercase text-[#D49C84] pb-1">
                It&apos;s a
                <br />Good Time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            What drives everything we do
          </p>
          <h2
            className="brygada font-bold text-[#6B4841] uppercase tracking-wide mb-12"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
          >
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map(({ title, desc }) => (
              <div key={title}>
                <div className="image-placeholder aspect-[3/4] mb-5">
                  <span>{title} visual</span>
                </div>
                <h3 className="brygada font-bold text-base tracking-[0.2em] uppercase text-[#6B4841] mb-2">{title}</h3>
                <p className="text-[#6B4841]/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Second Story Section ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28 border-t border-[#6B4841]/10 pt-20 md:pt-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="md:order-2">
            <div className="image-placeholder aspect-[4/5]">
              <span>Candid teaching moment</span>
            </div>
          </div>
          <div className="md:order-1">
            <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">The Wildflower Way</p>
            <h2
              className="brygada font-bold text-[#6B4841] uppercase tracking-wide mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
            >
              More Than
              <br />Just Steps
            </h2>
            <div className="space-y-4 text-[#6B4841]/70 text-sm leading-relaxed">
              <p>
                We believe the best dance classes are the ones where you forget you&apos;re
                learning. Where the music takes over, the group finds its groove, and
                suddenly everyone&apos;s laughing and moving together.
              </p>
              <p>
                That&apos;s what we bring to every single session. Whether you&apos;re
                preparing for the biggest day of your life or just looking for a fun
                night out, we make it easy, personal, and unforgettable.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="brygada font-bold text-xs border border-[#C483C8]/40 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#F7EAD8] transition-all inline-block"
              >
                Book a Session              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative">
        <div className="image-placeholder w-full aspect-[3/1] md:aspect-[4/1] !rounded-none !border-x-0">
          <span>CTA background / Dancers or venue</span>
        </div>
        <div className="absolute inset-0 bg-[#1E0F0B]/65 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="brygada font-bold text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">Ready to Hit the Floor?</p>
                <h2 className="brygada font-bold text-[#F7EAD8] uppercase tracking-wide" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
                  Let&apos;s Dance
                </h2>
              </div>
              <Link
                href="/contact"
                className="brygada font-bold text-xs border border-[#C483C8]/50 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#1E0F0B] transition-all inline-block self-start md:self-center"
              >
                Book Now              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
