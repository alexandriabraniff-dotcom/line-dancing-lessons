import Link from "next/link";

export const metadata = {
  title: "About | Wildflower Line Dancing",
  description: "Learn about our line dancing instructors and what makes us different.",
};

const values = [
  {
    title: "Inclusive",
    desc: "All levels welcome. Complete beginners to seasoned steppers, we work at your pace and make sure nobody feels left out.",
  },
  {
    title: "Fun First",
    desc: "Every session is designed to feel like a party, not a class. The laughs are always part of the deal.",
  },
  {
    title: "Memorable",
    desc: "We create moments people talk about long after the dance floor clears. That's our measure of a good time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-6 md:px-12 lg:px-16 pt-12 md:pt-20 pb-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-6">Get to Know Us</p>
          <h1
            className="rye text-[#6B4841] leading-[0.9] tracking-wide"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            About
          </h1>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="image-placeholder w-full aspect-[2.8/1] rounded-2xl">
            <span>About hero / Team or teaching moment</span>
          </div>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="deco-line mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Statement + Image */}
            <div>
              <p
                className="brygada italic text-[#C483C8] leading-snug mb-10"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
              >
                Dancing should
                <br />be for everyone.
              </p>

              <div className="image-placeholder aspect-[4/5] rounded-xl">
                <span>Instructor portrait</span>
              </div>
            </div>

            {/* Right: Body copy */}
            <div className="lg:pt-20">
              <div className="space-y-6 text-[#6B4841]/75 leading-relaxed">
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

              <div className="deco-line my-10" />

              <div className="image-placeholder aspect-[16/9] rounded-xl">
                <span>Behind the scenes / Candid teaching moment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#1E0F0B] py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="rye text-[0.6rem] tracking-[0.3em] uppercase text-[#D49C84] mb-4">What We Stand For</p>
          <h2
            className="rye text-[#F7EAD8] leading-none mb-16"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#F7EAD8]/10">
            {values.map(({ title, desc }, i) => (
              <div
                key={title}
                className="border-b md:border-b-0 md:border-r last:border-r-0 border-[#F7EAD8]/10 p-8 md:p-10"
              >
                <p className="rye text-[0.6rem] tracking-[0.3em] text-[#D49C84] mb-6">0{i + 1}</p>
                <div className="image-placeholder aspect-square rounded-lg mb-6 !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.04]">
                  <span className="!text-[#F7EAD8]/20">{title} visual</span>
                </div>
                <h3 className="rye text-xl text-[#F7EAD8] mb-3">{title}</h3>
                <p className="text-[#F7EAD8]/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Break ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="image-placeholder aspect-[3/4] rounded-xl">
            <span>Moment 1</span>
          </div>
          <div className="image-placeholder aspect-[3/4] rounded-xl md:mt-12">
            <span>Moment 2</span>
          </div>
          <div className="image-placeholder aspect-[3/4] rounded-xl md:mt-24">
            <span>Moment 3</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-8">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C483C8" opacity="0.3"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#D49C84" opacity="0.4"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C483C8" opacity="0.3"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
          </div>

          <p
            className="brygada italic text-[#6B4841] leading-snug mx-auto"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", maxWidth: "44rem" }}
          >
            Ready to hit the floor?
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="rye text-sm bg-[#6B4841] text-[#F7EAD8] px-10 py-4 rounded-full tracking-widest hover:bg-[#C483C8] transition-colors"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
