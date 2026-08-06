import Link from "next/link";
import {
  WeddingRings,
  BirthdayCake,
  DiscoBall,
  CowboyBoot,
} from "@/components/Decorations";

const services = [
  {
    Icon: WeddingRings,
    title: "Weddings",
    desc: "Custom choreography for couples and wedding parties. Make your first dance unforgettable.",
  },
  {
    Icon: BirthdayCake,
    title: "Birthdays",
    desc: "Celebrate in style with a line dancing lesson your guests will be talking about for years.",
  },
  {
    Icon: DiscoBall,
    title: "Social Events",
    desc: "Corporate parties, hens nights, fundraisers — we bring the energy and the two-step.",
  },
  {
    Icon: CowboyBoot,
    title: "Private Groups",
    desc: "Book a private session for your group, at your pace, anywhere in the area.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-20 pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="rye text-6xl md:text-8xl text-[#6B4841] leading-none tracking-wide uppercase mb-2">
            Wildflower
          </h1>
          <p className="brygada font-bold italic text-3xl md:text-5xl text-[#C483C8] mb-8">
            Line Dancing
          </p>

          <p className="text-[#6B4841] text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
            It&apos;s more than a dance, it&apos;s a good time.
            Weddings, birthdays, social events and private groups.
          </p>

          <Link
            href="/contact"
            className="rye text-sm bg-[#6B4841] text-[#F7EAD8] px-10 py-4 rounded-full tracking-widest hover:bg-[#C483C8] transition-all"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="rye text-4xl text-[#6B4841]">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/40 border border-[#D49C84]/40 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={52} />
                </div>
                <h3 className="rye text-xl text-[#6B4841] mb-2">{title}</h3>
                <p className="text-[#6B4841] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="rye text-sm border-2 border-[#6B4841] text-[#6B4841] px-8 py-3 rounded-full tracking-widest hover:bg-[#6B4841] hover:text-[#F7EAD8] transition-all"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-[#6B4841] rounded-3xl px-10 py-12">
          <h2 className="rye text-3xl md:text-4xl text-[#F7EAD8] mb-4">
            Ready to Hit the Floor?
          </h2>
          <p className="brygada italic text-[#C483C8] text-xl mb-8">
            It&apos;s more than a dance, it&apos;s a good time.
          </p>
          <Link
            href="/contact"
            className="rye text-sm bg-[#F7EAD8] text-[#6B4841] px-10 py-4 rounded-full tracking-widest hover:bg-[#C483C8] hover:text-[#F7EAD8] transition-all"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
