import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Book a line dancing lesson in Vancouver for your wedding, birthday, corporate event or private group. We reply to every enquiry within 24 hours.",
  alternates: { canonical: "/contact" },
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

const details = [
  { label: "We Come to You", value: `Your venue, home or office, anywhere in ${site.serviceArea}` },
  { label: "Response Time", value: "Within 24 hours" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="px-[var(--gutter)] pt-[var(--section-top)] pb-[var(--section-sm)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
            We&apos;d Love to Hear From You
          </p>
          <h1
            className="rye text-[#6B4841] uppercase tracking-wide"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-[38rem] text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/75">
            Have a question or an idea for your event? Send us a message and we&apos;ll get back to you
            within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Details + Form ── */}
      <section className="px-[var(--gutter)] pb-[var(--section)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-[var(--gap)] md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
          {/* Details */}
          <div>
            <dl className="divide-y divide-[#6B4841]/10 border-t border-[#6B4841]/10">
              {details.map(({ label, value }) => (
                <div key={label} className="py-5">
                  <dt className="brygada text-[0.97rem] font-bold uppercase tracking-[0.25em] text-[#D49C84]">
                    {label}
                  </dt>
                  <dd className="mt-1 break-words text-[length:clamp(1.25rem,1.5vw,1.5rem)] text-[#6B4841]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="border-b border-[#6B4841]/10 py-5">
              <p className="brygada text-[0.97rem] font-bold uppercase tracking-[0.25em] text-[#D49C84]">
                Follow Along
              </p>
              <SocialLinks className="mt-3" />
            </div>

            <div className="mt-8">
              <p className="brygada text-[length:clamp(1.31rem,1.63vw,1.69rem)] font-bold italic text-[#6B4841]">
                Already know what you&apos;re booking?
              </p>
              <p className="mt-1 text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/75">
                Head to our services to send a booking request for your wedding, birthday, social event
                or private group.
              </p>
              <Link
                href="/services"
                className={`brygada mt-5 inline-flex h-[45px] lg:h-11 items-center justify-center border-[1.5px] border-[#6B4841] px-6 text-[1.15rem] font-bold tracking-[0.18em] text-[#6B4841] transition-colors duration-300 hover:bg-[#6B4841] hover:text-[#F7EAD8] ${focusRing}`}
              >
                View services
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="border border-[#6B4841]/10 bg-[#EDE0CC]/45 p-[max(1.25rem,2.5vw)]">
            <h2
              className="rye text-[#6B4841] uppercase tracking-wide leading-tight"
              style={{ fontSize: "var(--text-h3)" }}
            >
              Send Us a Message
            </h2>
            <p className="mt-2 mb-6 text-[1.15rem] text-[#6B4841]/65">All fields are required.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
