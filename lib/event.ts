/* ── SPECIAL EVENT: "Dance Till You Die" (Halloween 2026) ──────────────
   TEMPORARY. All of the event copy lives here so it can be edited in one
   place, and removed in one go after October 25.

   To take the event off the site once it is over, delete:
     1. this file
     2. app/(site)/competition/page.tsx
     3. the `specialEvent` blocks in components/Nav.tsx and components/HomeHero.tsx
     4. the /competition lines in app/sitemap.ts and components/Footer.tsx
     5. the "competition" entry in lib/booking.ts
*/

export const specialEvent = {
  href: "/competition",
  navLabel: "Competition",
  /* Arrow note pointing at the nav button on the homepage hero */
  heroNote: "Upcoming Special Event",

  name: "Dance Till You Die",
  eyebrow: "Sunday, October 25",
  tagline: "A Halloween line dancing night",
  intro:
    "One night only. We're taking over the dance floor for a Halloween line dancing party with a dance competition, prizes and a costume contest for the boldest outfit in the room. Beginners welcome, we teach every routine on the night before anyone competes.",

  /* Anything not confirmed yet says "Announced soon" on the page */
  details: [
    { label: "Date", value: "Sunday, October 25, 2026" },
    { label: "Time", value: "Doors and times announced soon" },
    { label: "Where", value: "Greater Vancouver, venue announced soon" },
    { label: "Entry", value: "Ticket details announced soon" },
    { label: "Dress Code", value: "Halloween costume encouraged" },
    { label: "Level", value: "Beginner and intermediate friendly" },
  ],

  features: [
    {
      title: "Dance Competition",
      desc: "Take the floor solo or with a partner and dance for the title. We teach the routine at the start of the night, then dancers are called up in rounds until we have a winner. Prizes go to the top three.",
      points: [
        "Routine taught on the night",
        "Solo and partner entries",
        "Judged in rounds",
        "Prizes for the top three",
      ],
    },
    {
      title: "Costume Contest",
      desc: "Come as whatever you want, as long as you can dance in it. Costumes are judged on originality, effort and how well you sell it on the dance floor, with a prize for the best in the room.",
      points: [
        "Judged on the dance floor",
        "Group costumes welcome",
        "Prize for best costume",
        "Enter on the night",
      ],
    },
  ],

  rules: [
    {
      title: "Dance Competition Rules",
      items: [
        "Entries are open to everyone aged 19 and over",
        "Sign up in advance or add your name at the door until the first round starts",
        "Dance solo or with one partner, and partners compete together as one entry",
        "Everyone dances the same routine, taught at the start of the night",
        "Judges score on timing, technique and showmanship, and their decision is final",
        "Dancers who miss their call are passed over for the next round",
        "Closed toe shoes or boots only on the competition floor",
      ],
    },
    {
      title: "Costume Contest Rules",
      items: [
        "One entry per person, and group costumes count as a single entry",
        "Costumes are judged on originality, effort and stage presence",
        "Keep it family friendly, we reserve the right to turn away anything offensive",
        "No face coverings that block your vision, and no real or replica weapons",
        "Your costume has to be safe to dance in for the full night",
        "Be on the floor when costume judging is called, entries are not judged from the sidelines",
      ],
    },
  ],

  goodToKnow: [
    "No experience needed, every routine is taught from scratch before it is danced",
    "You do not need a partner, come on your own or bring your whole crew",
    "Boots or closed toe shoes are best, the floor gets busy",
    "Come early if you want the beginner lesson before the competition starts",
    "Spectators are welcome, you do not have to compete to come and dance",
    "Times, venue and ticket details are being finalised, contact us and we'll let you know first",
  ],
} as const;
