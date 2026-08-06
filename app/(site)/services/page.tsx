import Link from "next/link";
import {
  WeddingRings,
  BirthdayCake,
  DiscoBall,
  CowboyBoot,
} from "@/components/Decorations";

export const metadata = {
  title: "Services | Wildflower Line Dancing",
  description: "Weddings, birthdays, social events, private groups and more. Line dancing lessons for every occasion.",
};

const services = [
  {
    Icon: WeddingRings,
    title: "Weddings",
    details: [
      "Bridal party choreography",
      "Couples first dance",
      "Guest participation routines",
      "Pre-wedding hen/bucks lessons",
      "Reception floor fillers",
    ],
    desc: "Your wedding day deserves something unforgettable. We work with brides, grooms, and bridal parties to create a first dance or group routine that will have the whole venue on its feet.",
  },
  {
    Icon: BirthdayCake,
    title: "Birthdays",
    details: [
      "Private group lessons",
      "Any age milestone",
      "Surprise routines for the guest of honour",
      "Themed playlists",
      "Party-friendly pacing",
    ],
    desc: "Turn your birthday into the event of the year. We come to your venue, bring the energy, and make sure every guest leaves with tired feet and a huge smile.",
  },
  {
    Icon: DiscoBall,
    title: "Social Events",
    details: [
      "Corporate team events",
      "Hens and bucks nights",
      "Fundraisers and galas",
      "Community events",
      "Pop-up lessons",
    ],
    desc: "Looking for an activity that actually gets people engaged? Line dancing breaks the ice, gets everyone moving, and creates a shared experience your group won't forget.",
  },
  {
    Icon: CowboyBoot,
    title: "Private Groups",
    details: [
      "Custom session length",
      "Your choice of location",
      "Beginner to intermediate routines",
      "Small or large groups",
      "Recurring lessons available",
    ],
    desc: "Book us for your crew on your terms. Whether it's a one-off session or a regular weekly lesson, we tailor everything to suit your group's vibe and skill level.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 pt-14 pb-12 text-center">
        <h1 className="rye text-5xl md:text-6xl text-[#6B4841]">Our Services</h1>
      </section>

      {/* Service cards */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {services.map(({ Icon, title, details, desc }) => (
            <div
              key={title}
              className="bg-white/40 border border-[#D49C84]/40 rounded-3xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon + title */}
                <div className="flex flex-col items-center md:items-start gap-3 md:min-w-[140px]">
                  <div className="bg-[#F7EAD8] border border-[#D49C84]/30 rounded-2xl p-4">
                    <Icon size={52} />
                  </div>
                  <h2 className="rye text-2xl text-[#6B4841]">{title}</h2>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <p className="text-[#6B4841] leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2">
                    {details.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#6B4841] text-sm">
                        <span className="text-[#C483C8] text-xs">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="rye text-sm bg-[#6B4841] text-[#F7EAD8] px-8 py-3 rounded-full tracking-widest hover:bg-[#C483C8] transition-all"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
