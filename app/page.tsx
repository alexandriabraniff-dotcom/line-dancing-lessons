import Link from "next/link";
import {
  Sparkle,
  Heart,
  DiscoBall,
  CowboyBoot,
  WeddingRings,
  BirthdayCake,
  SmallStar,
} from "@/components/Decorations";

const services = [
  {
    Icon: WeddingRings,
    title: "Weddings",
    desc: "Make your first dance unforgettable. Custom choreography for couples and wedding parties.",
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
      <section className="relative overflow-hidden px-6 pt-16 pb-20 text-center">
        <Sparkle size={32} color="#FE9EED" className="absolute top-8 left-[8%] opacity-70 rotate-12" />
        <Sparkle size={20} color="#D49C84" className="absolute top-20 left-[20%] opacity-50" />
        <Heart size={28} color="#F2B8CE" className="absolute top-12 right-[15%] opacity-60" />
        <SmallStar size={18} color="#FE9EED" className="absolute top-32 right-[8%] opacity-70" />
        <Sparkle size={24} color="#F2B8CE" className="absolute bottom-24 left-[5%] opacity-50" />
        <SmallStar size={14} color="#D49C84" className="absolute bottom-32 right-[22%] opacity-60" />

        <div className="max-w-3xl mx-auto relative z-10">
          <p className="script text-[#FE9EED] text-2xl mb-2">Welcome to</p>

          <h1 className="rye text-6xl md:text-8xl text-[#6B4841] leading-none tracking-wide mb-2">
            Line
          </h1>
          <h1 className="rye text-6xl md:text-8xl text-[#6B4841] leading-none tracking-wide mb-6">
            Dancing
          </h1>

          <p className="script text-4xl md:text-5xl text-[#FE9EED] mb-8">
            Lessons
          </p>

          <p className="text-[#6B4841] text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
            It&apos;s more than a dance, it&apos;s a good time.
            Weddings, birthdays, social events and private groups.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="rye text-sm bg-[#6B4841] text-[#FEEFB8] px-8 py-3 rounded-full tracking-widest hover:bg-[#FE9EED] hover:text-[#6B4841] transition-all"
            >
              Book Your Lesson Today
            </Link>
            <Link
              href="/services"
              className="rye text-sm border-2 border-[#6B4841] text-[#6B4841] px-8 py-3 rounded-full tracking-widest hover:border-[#FE9EED] hover:text-[#FE9EED] transition-all"
            >
              See What We Offer
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="script text-[#FE9EED] text-2xl mb-1">What we do</p>
            <h2 className="rye text-4xl text-[#6B4841]">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#FEEFB8]/60 border border-[#F2B8CE] rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
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
              className="rye text-sm border-2 border-[#6B4841] text-[#6B4841] px-8 py-3 rounded-full tracking-widest hover:bg-[#6B4841] hover:text-[#FEEFB8] transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Tagline CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-[#6B4841] rounded-3xl px-10 py-12 relative overflow-hidden">
          <Sparkle size={28} color="#FE9EED" className="absolute top-4 left-6 opacity-60" />
          <Sparkle size={20} color="#FEE2BC" className="absolute bottom-4 right-8 opacity-50" />
          <Heart size={22} color="#F2B8CE" className="absolute top-6 right-12 opacity-40" />

          <p className="script text-4xl md:text-5xl text-[#FE9EED] mb-2">
            It&apos;s more than a dance,
          </p>
          <p className="script text-4xl md:text-5xl text-[#FEEFB8] mb-8">
            it&apos;s a good time.
          </p>
          <Link
            href="/contact"
            className="rye text-sm bg-[#FEEFB8] text-[#6B4841] px-8 py-3 rounded-full tracking-widest hover:bg-[#FE9EED] transition-all"
          >
            Book Your Lesson Today
          </Link>
        </div>
      </section>
    </>
  );
}
