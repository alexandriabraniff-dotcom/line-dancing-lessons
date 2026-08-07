export const metadata = {
  title: "Contact | Wildflower Line Dancing",
  description: "Book your line dancing lesson today. Weddings, birthdays, social events and private groups.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-16 pt-14 pb-12 border-b border-[#6B4841]/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h1 className="rye text-5xl md:text-7xl text-[#6B4841] leading-none">Get in Touch</h1>
          <p className="section-label pb-1">We respond within 24 hours</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12 lg:gap-20">

          {/* Form */}
          <div>
            <p className="section-label mb-8">Book Your Lesson</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block section-label mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    className="w-full bg-transparent border-b border-[#6B4841]/30 py-2.5 text-[#6B4841] placeholder:text-[#6B4841]/30 focus:outline-none focus:border-[#C483C8] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block section-label mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    className="w-full bg-transparent border-b border-[#6B4841]/30 py-2.5 text-[#6B4841] placeholder:text-[#6B4841]/30 focus:outline-none focus:border-[#C483C8] transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block section-label mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="250-000-0000"
                    className="w-full bg-transparent border-b border-[#6B4841]/30 py-2.5 text-[#6B4841] placeholder:text-[#6B4841]/30 focus:outline-none focus:border-[#C483C8] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block section-label mb-2">Type of Event</label>
                  <select
                    name="event"
                    className="w-full bg-transparent border-b border-[#6B4841]/30 py-2.5 text-[#6B4841] focus:outline-none focus:border-[#C483C8] transition-colors text-sm"
                  >
                    <option value="">Select an option</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="social">Social Event</option>
                    <option value="private">Private Group</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block section-label mb-2">Tell Us More</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Date, location, group size, any special requests..."
                  className="w-full bg-transparent border-b border-[#6B4841]/30 py-2.5 text-[#6B4841] placeholder:text-[#6B4841]/30 focus:outline-none focus:border-[#C483C8] transition-colors resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="rye text-sm bg-[#6B4841] text-[#F7EAD8] px-9 py-3.5 rounded-full tracking-widest hover:bg-[#C483C8] transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-8">
            <div>
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
                  <li key={item} className="flex gap-3 text-sm text-[#6B4841]/70 leading-relaxed">
                    <span className="text-[#C483C8] shrink-0 mt-0.5 text-xs">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#6B4841]/15 pt-8">
              <p className="rye text-lg text-[#6B4841] mb-2">Not sure yet?</p>
              <p className="text-[#6B4841]/60 text-sm leading-relaxed mb-4">
                Send us a message anyway. We love chatting about all things dance and will help you
                figure out exactly what you need.
              </p>
              <p className="brygada italic text-[#C483C8] text-base">
                It&apos;s more than a dance, it&apos;s a good time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
