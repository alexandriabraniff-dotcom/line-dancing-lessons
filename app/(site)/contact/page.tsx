export const metadata = {
  title: "Contact | Wildflower Line Dancing",
  description: "Book your line dancing lesson today. Weddings, birthdays, social events and private groups.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-6 md:px-12 lg:px-16 pt-12 md:pt-20 pb-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-6">We Respond Within 24 Hours</p>
          <h1
            className="rye text-[#6B4841] leading-[0.9] tracking-wide"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            Contact
          </h1>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="image-placeholder w-full aspect-[3/1] rounded-2xl">
            <span>Contact hero / Fun, inviting shot</span>
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="deco-line mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-24">
            {/* Form */}
            <div>
              <p className="section-label mb-8">Book Your Lesson</p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block section-label mb-3">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      className="w-full bg-transparent border-b border-[#6B4841]/25 py-3 text-[#6B4841] placeholder:text-[#6B4841]/25 focus:outline-none focus:border-[#C483C8] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block section-label mb-3">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      className="w-full bg-transparent border-b border-[#6B4841]/25 py-3 text-[#6B4841] placeholder:text-[#6B4841]/25 focus:outline-none focus:border-[#C483C8] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block section-label mb-3">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="0400 000 000"
                      className="w-full bg-transparent border-b border-[#6B4841]/25 py-3 text-[#6B4841] placeholder:text-[#6B4841]/25 focus:outline-none focus:border-[#C483C8] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block section-label mb-3">Type of Event</label>
                    <select
                      name="event"
                      className="w-full bg-transparent border-b border-[#6B4841]/25 py-3 text-[#6B4841] focus:outline-none focus:border-[#C483C8] transition-colors text-sm appearance-none"
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
                </div>

                <div>
                  <label className="block section-label mb-3">Tell Us More</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Date, location, group size, any special requests..."
                    className="w-full bg-transparent border-b border-[#6B4841]/25 py-3 text-[#6B4841] placeholder:text-[#6B4841]/25 focus:outline-none focus:border-[#C483C8] transition-colors resize-none text-sm leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="rye text-sm bg-[#6B4841] text-[#F7EAD8] px-10 py-4 rounded-full tracking-widest hover:bg-[#C483C8] transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* Right column */}
            <div className="lg:pt-14">
              {/* Image placeholder */}
              <div className="image-placeholder aspect-[4/3] rounded-xl mb-10">
                <span>Contact visual / Friendly, approachable</span>
              </div>

              {/* What to expect */}
              <div className="mb-10">
                <p className="section-label mb-6">What to Expect</p>
                <ul className="space-y-4">
                  {[
                    "We respond to all enquiries within 24 hours",
                    "Sessions can be held at your venue or a location of your choice",
                    "No dance experience required",
                    "All group sizes catered for",
                    "Custom playlists and routines available",
                    "Packages tailored to your budget",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#6B4841]/65 leading-relaxed">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#C483C8" className="shrink-0 mt-1 opacity-50"><path d="M12 2 L13.2 9.8 L21 11 L13.2 12.2 L12 20 L10.8 12.2 L3 11 L10.8 9.8 Z" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="deco-line mb-10" />

              {/* Reassurance */}
              <div>
                <p className="rye text-lg text-[#6B4841] mb-3">Not sure yet?</p>
                <p className="text-[#6B4841]/55 text-sm leading-relaxed mb-5">
                  Send us a message anyway. We love chatting about all things dance and will help you
                  figure out exactly what you need.
                </p>
                <p className="brygada italic text-[#C483C8] text-base">
                  It&apos;s more than a dance, it&apos;s a good time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dark CTA ── */}
      <section className="bg-[#1E0F0B] py-20 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="rye text-[0.6rem] tracking-[0.3em] uppercase text-[#D49C84] mb-4">Based in Adelaide</p>
            <p
              className="brygada italic text-[#F7EAD8] leading-snug"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
            >
              Available for events across
              <br />
              <span className="text-[#C483C8]">South Australia</span>
            </p>
          </div>

          <div className="image-placeholder aspect-[16/9] rounded-xl !border-[#F7EAD8]/15 !bg-[#F7EAD8]/[0.04]">
            <span className="!text-[#F7EAD8]/20">Adelaide / Location shot</span>
          </div>
        </div>
      </section>
    </>
  );
}
