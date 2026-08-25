import Link from "next/link";

export const metadata = {
  title: "Contact | Wildflower Line Dancing",
  description: "Book your line dancing lesson today. Weddings, birthdays, social events and private groups.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-6 md:px-12 lg:px-16 pt-24 md:pt-28 pb-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="rye text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            We Respond Within 24 Hours
          </p>
          <h1
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "clamp(2.4rem, 7vw, 5rem)" }}
          >
            Get in Touch
          </h1>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="image-placeholder w-full aspect-[2.8/1]">
            <span>Contact hero / Fun, inviting shot</span>
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image + Info */}
          <div>
            <div className="image-placeholder aspect-[4/5] mb-10">
              <span>Contact visual / Friendly, approachable</span>
            </div>

            <p className="rye text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-4">What to Expect</p>
            <ul className="space-y-3 mb-10">
              {[
                "We respond to all enquiries within 24 hours",
                "Sessions can be held at your venue or a location of your choice",
                "No dance experience required",
                "All group sizes catered for",
                "Custom playlists and routines available",
                "Packages tailored to your budget",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#6B4841]/65 leading-relaxed">
                  <span className="text-[#D49C84] text-xs mt-0.5">&#10022;</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="border-t border-[#6B4841]/10 pt-8">
              <p className="rye text-base tracking-[0.15em] uppercase text-[#6B4841] mb-2">Not Sure Yet?</p>
              <p className="text-[#6B4841]/55 text-sm leading-relaxed mb-4">
                Send us a message anyway. We love chatting about all things dance and will help you
                figure out exactly what you need.
              </p>
              <p className="brygada font-bold text-[#6B4841]/70 text-base">
                It&apos;s more than a dance, it&apos;s a good time.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <p className="rye text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-8">Book Your Lesson</p>

            <form className="space-y-7">
              <div>
                <label className="block rye text-[0.55rem] tracking-[0.3em] uppercase text-[#6B4841]/50 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  className="w-full bg-transparent border-b border-[#6B4841]/20 py-3 text-[#6B4841] placeholder:text-[#6B4841]/25 focus:outline-none focus:border-[#C483C8] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block rye text-[0.55rem] tracking-[0.3em] uppercase text-[#6B4841]/50 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  className="w-full bg-transparent border-b border-[#6B4841]/20 py-3 text-[#6B4841] placeholder:text-[#6B4841]/25 focus:outline-none focus:border-[#C483C8] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block rye text-[0.55rem] tracking-[0.3em] uppercase text-[#6B4841]/50 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="0400 000 000"
                  className="w-full bg-transparent border-b border-[#6B4841]/20 py-3 text-[#6B4841] placeholder:text-[#6B4841]/25 focus:outline-none focus:border-[#C483C8] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block rye text-[0.55rem] tracking-[0.3em] uppercase text-[#6B4841]/50 mb-2">Type of Event</label>
                <select
                  name="event"
                  className="w-full bg-transparent border-b border-[#6B4841]/20 py-3 text-[#6B4841] focus:outline-none focus:border-[#C483C8] transition-colors text-sm appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select an option</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="social">Social Event</option>
                  <option value="private">Private Group</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block rye text-[0.55rem] tracking-[0.3em] uppercase text-[#6B4841]/50 mb-2">Tell Us More</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Date, location, group size, any special requests..."
                  className="w-full bg-transparent border-b border-[#6B4841]/20 py-3 text-[#6B4841] placeholder:text-[#6B4841]/25 focus:outline-none focus:border-[#C483C8] transition-colors resize-none text-sm leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="rye text-xs border border-[#C483C8]/40 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#F7EAD8] transition-all"
              >
                Send Enquiry &#8594;
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative">
        <div className="image-placeholder w-full aspect-[3/1] md:aspect-[4/1] !rounded-none !border-x-0">
          <span>CTA background / Adelaide or venue shot</span>
        </div>
        <div className="absolute inset-0 bg-[#1E0F0B]/65 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="rye text-[0.6rem] tracking-[0.35em] uppercase text-[#D49C84] mb-3">Based in Adelaide</p>
                <h2 className="rye text-[#F7EAD8] uppercase tracking-wide" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
                  Available Across
                  <br />South Australia
                </h2>
              </div>
              <Link
                href="/services"
                className="rye text-xs border border-[#C483C8]/50 text-[#C483C8] px-7 py-3 tracking-[0.25em] uppercase hover:bg-[#C483C8] hover:text-[#1E0F0B] transition-all inline-block self-start md:self-center"
              >
                See Services &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
