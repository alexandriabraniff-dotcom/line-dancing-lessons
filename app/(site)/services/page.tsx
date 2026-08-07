import Link from "next/link";

export const metadata = {
  title: "Services | Wildflower Line Dancing",
  description: "Weddings, birthdays, social events, private groups and more. Line dancing lessons for every occasion.",
};

const services = [
  {
    tag: "01",
    title: "Weddings",
    desc: "Your wedding day deserves something unforgettable. We work with brides, grooms, and bridal parties to create a first dance or group routine that will have the whole venue on its feet.",
    details: [
      "Bridal party choreography",
      "Couples first dance",
      "Guest participation routines",
      "Pre-wedding hen and bucks lessons",
      "Reception floor fillers",
    ],
  },
  {
    tag: "02",
    title: "Birthdays",
    desc: "Turn your birthday into the event of the year. We come to your venue, bring the energy, and make sure every guest leaves with tired feet and a huge smile.",
    details: [
      "Private group lessons",
      "Any age milestone",
      "Surprise routines for the guest of honour",
      "Themed playlists",
      "Party-friendly pacing",
    ],
  },
  {
    tag: "03",
    title: "Social Events",
    desc: "Looking for an activity that actually gets people engaged? Line dancing breaks the ice, gets everyone moving, and creates a shared experience your group won't forget.",
    details: [
      "Corporate team events",
      "Hens and bucks nights",
      "Fundraisers and galas",
      "Community events",
      "Pop-up lessons",
    ],
  },
  {
    tag: "04",
    title: "Private Groups",
    desc: "Book us for your crew on your terms. Whether it's a one-off session or a regular weekly lesson, we tailor everything to suit your group's vibe and skill level.",
    details: [
      "Custom session length",
      "Your choice of location",
      "Beginner to intermediate routines",
      "Small or large groups",
      "Recurring lessons available",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-16 pt-14 pb-12 border-b border-[#6B4841]/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h1 className="rye text-5xl md:text-7xl text-[#6B4841] leading-none">Our Services</h1>
          <p className="section-label pb-1">For every occasion</p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 lg:px-16 py-4">
        <div className="max-w-7xl mx-auto">
          {services.map(({ tag, title, desc, details }) => (
            <div
              key={title}
              className="border-b border-[#6B4841]/15 py-14 grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-12"
            >
              <p className="section-label pt-1 md:w-8">{tag}</p>
              <div>
                <h2 className="rye text-3xl md:text-4xl text-[#6B4841] mb-4">{title}</h2>
                <p className="text-[#6B4841]/70 leading-relaxed text-base">{desc}</p>
              </div>
              <ul className="space-y-2.5 md:pt-1">
                {details.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#6B4841]/65">
                    <span className="text-[#C483C8] shrink-0 mt-0.5 text-xs">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E0F0B] py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="brygada italic text-[#F7EAD8] text-2xl md:text-3xl">
            Sound like your kind of fun?
          </p>
          <Link
            href="/contact"
            className="rye text-sm border border-[#F7EAD8]/40 text-[#F7EAD8] px-9 py-3.5 rounded-full tracking-widest hover:bg-[#F7EAD8] hover:text-[#1E0F0B] transition-all self-start shrink-0"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
