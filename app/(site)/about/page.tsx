import Link from "next/link";
import { CowboyBoot } from "@/components/Decorations";

export const metadata = {
  title: "About | Wildflower Line Dancing",
  description: "Learn about our line dancing instructors and what makes us different.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="px-6 pt-14 pb-12 text-center">
        <h1 className="rye text-5xl md:text-6xl text-[#6B4841]">About Us</h1>
      </section>

      {/* Story */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/40 border border-[#D49C84]/40 rounded-3xl p-8 md:p-12 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <CowboyBoot size={40} />
              <h2 className="rye text-3xl text-[#6B4841]">Our Story</h2>
            </div>
            <div className="space-y-5 text-[#6B4841] text-base md:text-lg leading-relaxed">
              <p>
                We started with one simple belief: dancing should be for everyone. No experience needed,
                no two left feet too clumsy, no event too big or too small. Just boots, beats, and a
                whole lot of good times.
              </p>
              <p>
                Line dancing has a way of bringing people together like nothing else. Whether it&apos;s a bride
                and her bridesmaids learning a surprise routine, a group of mates celebrating a birthday,
                or a corporate team letting loose after hours, the magic is always the same.
              </p>
              <p>
                Our instructors are passionate about making every session fun, inclusive, and memorable.
                We meet you where you are, and we leave you wanting to dance every chance you get.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "✦",
                title: "Inclusive",
                desc: "All levels welcome. Complete beginners to seasoned steppers, we work at your pace.",
              },
              {
                icon: "♥",
                title: "Fun First",
                desc: "Every session is designed to feel like a party, not a class. The laughs are part of the deal.",
              },
              {
                icon: "★",
                title: "Memorable",
                desc: "We create moments people talk about long after the dance floor clears.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/40 border border-[#D49C84]/40 rounded-2xl p-6 text-center"
              >
                <p className="text-3xl text-[#C483C8] mb-3">{icon}</p>
                <h3 className="rye text-lg text-[#6B4841] mb-2">{title}</h3>
                <p className="text-[#6B4841] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="rye text-sm bg-[#6B4841] text-[#F7EAD8] px-8 py-3 rounded-full tracking-widest hover:bg-[#C483C8] transition-all"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
