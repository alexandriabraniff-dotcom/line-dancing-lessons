import Link from "next/link";

export const metadata = {
  title: "About | Wildflower Line Dancing",
  description: "Learn about our line dancing instructors and what makes us different.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="px-6 md:px-12 lg:px-16 pt-14 pb-12 border-b border-[#6B4841]/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h1 className="rye text-5xl md:text-7xl text-[#6B4841] leading-none">About Us</h1>
          <p className="section-label pb-1">Wildflower Line Dancing</p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-12 lg:px-16 py-16 border-b border-[#6B4841]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p
              className="brygada italic text-[#C483C8] leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
            >
              Dancing should be for everyone.
            </p>
          </div>
          <div className="space-y-5 text-[#6B4841]/80 text-base leading-relaxed">
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
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 lg:px-16 py-16 border-b border-[#6B4841]/15">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-10">What We Stand For</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#6B4841]/15">
            {[
              {
                title: "Inclusive",
                desc: "All levels welcome. Complete beginners to seasoned steppers, we work at your pace.",
              },
              {
                title: "Fun First",
                desc: "Every session is designed to feel like a party, not a class. The laughs are part of the deal.",
              },
              {
                title: "Memorable",
                desc: "We create moments people talk about long after the dance floor clears.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <h3 className="rye text-2xl text-[#6B4841] mb-3">{title}</h3>
                <p className="text-[#6B4841]/65 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E0F0B] py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="brygada italic text-[#F7EAD8] text-2xl md:text-3xl">
            Ready to hit the floor?
          </p>
          <Link
            href="/contact"
            className="rye text-sm border border-[#F7EAD8]/40 text-[#F7EAD8] px-9 py-3.5 rounded-full tracking-widest hover:bg-[#F7EAD8] hover:text-[#1E0F0B] transition-all self-start shrink-0"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
