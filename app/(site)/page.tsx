import Link from "next/link";
import HomeHero from "@/components/HomeHero";

const occasions = [
  { title: "Weddings", placeholder: "Wedding dancing photo" },
  { title: "Birthdays", placeholder: "Birthday party photo" },
  { title: "Events", placeholder: "Social event photo" },
];

const services = [
  { title: "Weddings", placeholder: "Bridal party lesson" },
  { title: "Private Groups", placeholder: "Small group session" },
  { title: "Social Events", placeholder: "Corporate event" },
  { title: "Birthday Parties", placeholder: "Birthday celebration" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <HomeHero />

      {/* ── Book by Occasion (like "Shop by Occasion") ── */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto text-center">
          <p className="rye text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            Whatever the occasion, we&apos;ve got you covered
          </p>
          <h2
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
          >
            Book by Occasion
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {occasions.map(({ title, placeholder }) => (
              <Link key={title} href="/services" className="group">
                <div className="image-placeholder aspect-[3/4] mb-4">
                  <span>{placeholder}</span>
                </div>
                <p className="rye text-[0.65rem] tracking-[0.25em] uppercase text-[#6B4841]/70 group-hover:text-[#C483C8] transition-colors">
                  {title} &#8594;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-Width Image Banner with Overlaid Text ── */}
      <section className="relative">
        <div className="image-placeholder w-full aspect-[2.8/1] !rounded-none !border-x-0">
          <span>Wide landscape / Dancers in a venue</span>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1E0F0B]/50 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="rye text-[#F7EAD8] uppercase tracking-wide leading-tight" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)" }}>
                Bringing People
                <br />Together Since Day One
              </h2>
              <p className="rye text-[0.6rem] tracking-[0.3em] uppercase text-[#D49C84] pb-1">
                Lessons &amp; Events
                <br />
                Built to Remember
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story (image left, text right) ── */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="image-placeholder aspect-[4/5]">
            <span>Instructor portrait / Teaching moment</span>
          </div>

          {/* Text */}
          <div>
            <p className="rye text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
              Get to Know Us
            </p>
            <h2
              className="rye text-[#6B4841] uppercase tracking-wide mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
            >
              Our Story
            </h2>
            <div className="space-y-4 text-[#6B4841]/70 text-sm leading-relaxed">
              <p>
                Line dancing has a way of bringing people together like nothing else.
                Whether it&apos;s a bride and her bridesmaids learning a surprise routine,
                a group of mates celebrating a birthday, or a corporate team letting
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
                className="rye text-xs border border-[#6B4841]/30 text-[#6B4841] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#6B4841] hover:text-[#F7EAD8] transition-all inline-block"
              >
                Read More About Us &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Services (4-across grid like "Shop New Arrivals") ── */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-[#6B4841]/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="rye text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            What We Offer
          </p>
          <h2
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
          >
            Our Services
          </h2>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {services.map(({ title, placeholder }) => (
              <Link key={title} href="/services" className="group">
                <div className="image-placeholder aspect-[3/4] mb-4">
                  <span>{placeholder}</span>
                </div>
                <p className="rye text-[0.6rem] tracking-[0.2em] uppercase text-[#6B4841]/70 group-hover:text-[#C483C8] transition-colors">
                  {title} &#8594;
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="rye text-xs border border-[#6B4841]/30 text-[#6B4841] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#6B4841] hover:text-[#F7EAD8] transition-all inline-block"
            >
              Browse All &#8594;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Join the Fun CTA (full-width dark image bg like "Join the Family") ── */}
      <section className="relative">
        <div className="image-placeholder w-full aspect-[3/1] md:aspect-[4/1] !rounded-none !border-x-0">
          <span>CTA background / Group photo or venue</span>
        </div>
        <div className="absolute inset-0 bg-[#1E0F0B]/65 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="rye text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
                  Be Part of the Fun
                </p>
                <h2 className="rye text-[#F7EAD8] uppercase tracking-wide" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
                  Book Your Session
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rye text-xs border border-[#F7EAD8]/40 text-[#F7EAD8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#F7EAD8] hover:text-[#1E0F0B] transition-all inline-block"
                >
                  Get in Touch &#8594;
                </Link>
                <Link
                  href="/services"
                  className="rye text-xs border border-[#F7EAD8]/40 text-[#F7EAD8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#F7EAD8] hover:text-[#1E0F0B] transition-all inline-block"
                >
                  See Services &#8594;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
