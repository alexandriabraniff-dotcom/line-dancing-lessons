/* ── SPECIAL EVENT: "Dance Till You Die" (Halloween 2026) ──────────────
   TEMPORARY. All of the event copy lives here so it can be edited in one
   place, and removed in one go after October 25.

   To take the event off the site once it is over, delete:
     1. this file
     2. app/(site)/competition/page.tsx
     3. the `specialEvent` blocks in components/Nav.tsx and components/HomeHero.tsx
     4. the /competition lines in app/sitemap.ts and components/Footer.tsx
*/

export const specialEvent = {
  href: "/competition",
  navLabel: "Competition",
  /* Arrow note pointing at the nav button on the homepage hero */
  heroNote: "Upcoming Special Event",

  name: "Dance Till You Die",
  eyebrow: "Sunday, October 25",
  tagline: "A Halloween night with The Yale Saloon",

  /* ▸ TICKETS: paste the Yale sign-up link here once it is live.
     While this is empty the buttons show "Sign Up Opens Soon" instead. */
  ticketsUrl: "",
  ticketsLabel: "Sign Me Up",

  intro:
    "One night only, in collaboration with The Yale Saloon. We're taking over Vancouver's country nightclub for Halloween with a line dancing lesson, a dance competition and a costume contest. Wear the costume, learn the routine, dance for the prizes.",

  details: [
    { label: "Date", value: "Sunday, October 25, 2026" },
    { label: "Where", value: "The Yale Saloon, 1300 Granville St, Vancouver" },
    { label: "Line Dancing Lesson", value: "8:00 PM to 9:00 PM" },
    { label: "Dance Competition", value: "9:00 PM to 11:30 PM" },
    { label: "Winners and Prizes", value: "Announced at midnight" },
    { label: "Competition Sign Up", value: "$5, plus entry to the bar" },
    { label: "Costume Contest", value: "Free, sign up at the booth inside" },
    { label: "Dress Code", value: "Halloween costume encouraged" },
    { label: "Who", value: "19+, beginner and intermediate friendly" },
  ],

  features: [
    {
      title: "Dance Competition",
      desc: "Sign up for $5 on top of your entry to the bar and you'll be handed a wristband and a competition number. The floor is yours from 9:00 PM until 11:30 PM, and the routines come straight out of the lesson we teach beforehand.",
      points: [
        "$5 to sign up, plus entry to the bar",
        "Wristband and competition number on sign up",
        "Dancing from 9:00 PM to 11:30 PM",
        "Winners and prizes at midnight",
      ],
    },
    {
      title: "Costume Contest",
      desc: "Free to enter. Pay your entry to the bar, find the costume contest booth once you're inside, and put your name down. Come as whatever you want, as long as you can dance in it all night.",
      points: [
        "Free to enter, just pay entry to the bar",
        "Sign up at the costume contest booth",
        "Judged on originality, effort and stage presence",
        "Winners and prizes at midnight",
      ],
    },
  ],

  rules: [
    {
      title: "Dance Competition Rules",
      items: [
        "The Yale Saloon is a 19+ venue, so bring photo ID",
        "Sign up costs $5 and is separate from your entry to the bar",
        "Every competitor is given a wristband and a competition number on sign up",
        "Wear your wristband all night, it is how we know you are competing",
        "Be on the floor when your number is called, we cannot hold up the rounds",
        "Everyone dances the same routines, taught in the 8:00 PM lesson",
        "Judges score on timing, technique and showmanship, and their decision is final",
        "Closed toe shoes or boots only on the competition floor",
      ],
    },
    {
      title: "Costume Contest Rules",
      items: [
        "Free to enter, you only pay your entry to the bar",
        "Sign up at the costume contest booth inside the Yale",
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
    "Doors and entry to the bar are handled by The Yale Saloon, 1300 Granville St",
    "The 8:00 PM lesson is normal line dancing, no experience and no partner needed",
    "Come for 8:00 PM if you are competing, the routines are taught in that hour",
    "Winners for both the dance competition and the costume contest are called at midnight",
    "Spectators are welcome, you only need entry to the bar to come and dance",
    "19+ with photo ID, boots or closed toe shoes are best on a busy floor",
  ],
} as const;
