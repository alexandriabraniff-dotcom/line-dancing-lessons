import ContactForm from "@/components/ContactForm";
export const metadata = {
  title: "Contact Us",
  description:
    "Book a line dancing lesson in Vancouver for your wedding, birthday, bachelorette party, corporate event or private group. We reply to every enquiry within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-[var(--gutter)] pt-[var(--section-top)] pb-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            We Respond Within 24 Hours
          </p>
          <h1
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Get in Touch
          </h1>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="px-[var(--gutter)] pb-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <div className="image-placeholder w-full aspect-[2.8/1]">
            <span>Contact hero / Fun, inviting shot</span>
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="px-[var(--gutter)] pb-[var(--section)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[var(--gap)]">
          {/* Left: Image + Info */}
          <div>
            <div className="image-placeholder aspect-[4/5] mb-10">
              <span>Contact visual / Friendly, approachable</span>
            </div>

            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-4">What to Expect</p>
            <ul className="space-y-3 mb-10">
              {[
                "We respond to all enquiries within 24 hours",
                "Sessions can be held at your venue or a location of your choice",
                "No dance experience required",
                "All group sizes catered for",
                "Custom playlists and routines available",
                "Packages tailored to your budget",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[length:var(--text-body)] text-[#6B4841]/65 leading-relaxed">
                  <span className="text-[#D49C84] text-xs mt-0.5">&#10022;</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="border-t border-[#6B4841]/10 pt-8">
              <p className="rye text-[length:var(--text-h3)] tracking-[0.15em] uppercase text-[#6B4841] mb-2">Not Sure Yet?</p>
              <p className="text-[#6B4841]/55 text-[length:var(--text-body)] leading-relaxed mb-4">
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
            <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-8">Book Your Lesson</p>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
