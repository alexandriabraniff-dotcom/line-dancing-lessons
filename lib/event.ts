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
  tagline: "Line Dancing Competition & Costume Contest",
  prizeLine: "Cash Prizes and More",

  /* ▸ TICKETS: paste the Yale sign-up link here once it is live.
     While this is empty the buttons show "Sign Up Opens Soon" instead. */
  ticketsUrl: "",
  ticketsLabel: "Sign Me Up",

  intro:
    "Join us on Sunday, October 25 at The Yale Saloon, 1300 Granville St in Vancouver, for a Halloween night of line dancing hosted together with the Yale. We'll teach a line dancing lesson from 8:00 PM to 9:00 PM, then the dance competition runs from 9:00 PM to 11:30 PM, with a costume contest all night long. Winners for both are announced at midnight, with cash prizes and more up for grabs.",

  /* ▸ IMAGE: drop a file in public/ and set its path here, e.g. "/events/dance-till-you-die.jpg".
     While this is empty the page shows a placeholder box. */
  image: "",
  imageAlt: "Dance Till You Die, Halloween line dancing at The Yale Saloon",

  rules: [
    {
      title: "Dance Competition Rules",
      items: [
        "The Yale Saloon is a 19+ venue, so bring photo ID",
        "Sign up costs $5 and is separate from your entry to the bar",
        "Every competitor is given a wristband and a competition number on sign up",
        "Wear your wristband all night, it is how we know you are competing",
        "Be on the floor when your number is called, we cannot hold up the rounds",
        "Everyone dances the same routines, taught in the 8:00 PM to 9:00 PM lesson",
        "The competition runs from 9:00 PM to 11:30 PM",
        "Judges score on timing, technique and showmanship, and their decision is final",
        "Closed toe shoes or boots only on the competition floor",
        "Winners are announced and prizes handed out at midnight",
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
        "Winners are announced and prizes handed out at midnight",
      ],
    },
  ],

} as const;
