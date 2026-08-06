import { CowboyBoot } from "@/components/Decorations";

export const metadata = {
  title: "Contact | Wildflower Line Dancing",
  description: "Book your line dancing lesson today. Weddings, birthdays, social events and private groups.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 pt-14 pb-12 text-center">
        <h1 className="rye text-5xl md:text-6xl text-[#6B4841]">Get in Touch</h1>
      </section>

      {/* Content */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-white/40 border border-[#D49C84]/40 rounded-3xl p-8">
            <h2 className="rye text-2xl text-[#6B4841] mb-6">Book Your Lesson Today</h2>

            <form className="space-y-5">
              <div>
                <label className="block rye text-xs text-[#6B4841] tracking-widest mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  className="w-full bg-[#F7EAD8] border border-[#D49C84]/60 rounded-xl px-4 py-3 text-[#6B4841] placeholder:text-[#D49C84] focus:outline-none focus:border-[#C483C8] transition-colors"
                />
              </div>

              <div>
                <label className="block rye text-xs text-[#6B4841] tracking-widest mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  className="w-full bg-[#F7EAD8] border border-[#D49C84]/60 rounded-xl px-4 py-3 text-[#6B4841] placeholder:text-[#D49C84] focus:outline-none focus:border-[#C483C8] transition-colors"
                />
              </div>

              <div>
                <label className="block rye text-xs text-[#6B4841] tracking-widest mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="250-000-0000"
                  className="w-full bg-[#F7EAD8] border border-[#D49C84]/60 rounded-xl px-4 py-3 text-[#6B4841] placeholder:text-[#D49C84] focus:outline-none focus:border-[#C483C8] transition-colors"
                />
              </div>

              <div>
                <label className="block rye text-xs text-[#6B4841] tracking-widest mb-1">
                  Type of Event
                </label>
                <select
                  name="event"
                  className="w-full bg-[#F7EAD8] border border-[#D49C84]/60 rounded-xl px-4 py-3 text-[#6B4841] focus:outline-none focus:border-[#C483C8] transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="social">Social Event</option>
                  <option value="private">Private Group</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block rye text-xs text-[#6B4841] tracking-widest mb-1">
                  Tell Us More
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Date, location, group size, any special requests..."
                  className="w-full bg-[#F7EAD8] border border-[#D49C84]/60 rounded-xl px-4 py-3 text-[#6B4841] placeholder:text-[#D49C84] focus:outline-none focus:border-[#C483C8] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rye text-sm bg-[#6B4841] text-[#F7EAD8] py-3 rounded-full tracking-widest hover:bg-[#C483C8] transition-all"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/40 border border-[#D49C84]/40 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <CowboyBoot size={36} />
                <h2 className="rye text-xl text-[#6B4841]">What to Expect</h2>
              </div>
              <ul className="space-y-3 text-[#6B4841] text-sm leading-relaxed">
                {[
                  "We respond to all enquiries within 24 hours",
                  "Sessions can be held at your venue or a location of your choice",
                  "No dance experience required",
                  "All group sizes catered for",
                  "Custom playlists and routines available",
                  "Packages tailored to your budget",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#C483C8] shrink-0 mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#6B4841] rounded-3xl p-8 text-center">
              <p className="rye text-xl text-[#F7EAD8] mb-2">Not sure yet?</p>
              <p className="text-[#F7EAD8]/80 text-sm leading-relaxed mb-4">
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
