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

  /* "Learn More" section beside the image */
  learnMoreLine: "Event on October 25th",
  /* Write-up paragraphs. `lead` is shown in bold at the start of the paragraph. */
  intro: [
    {
      lead: "",
      text: "Join us at The Yale Saloon, 1300 Granville St in Vancouver, where we will be hosting a Halloween themed line dancing competition. One night of boots, costumes and friendly rivalry, and everyone is welcome, whether you're competing, dressing up or just coming out to dance.",
    },
    {
      lead: "The Class.",
      text: "The night kicks off with our regular line dancing class from 8:00 PM to 9:00 PM. It's open to everyone and no experience is needed, so it's the perfect warm up before the floor turns competitive.",
    },
    {
      lead: "The Competition.",
      text: "Competing? You'll receive a wristband and a competition number when you arrive. Head to the competition table to sign in so our MCs know you're here. The line dancing competition runs from 9:00 PM to 11:30 PM, and winners are decided at midnight, with cash prizes and more up for grabs.",
    },
    {
      lead: "The Costume Contest.",
      text: "Anyone in the bar can compete and have a chance to win. Find the costume contest booth, put your name down, and show off your best look. The winner is chosen at midnight.",
    },
    {
      lead: "More at the Yale.",
      text: "On top of all the special events, the Yale has plenty more to keep you entertained, with a bull riding competition, photo booths and pool tables.",
    },
    {
      lead: "",
      text: "We hope to see you there for a deadly night of fun.",
    },
  ],

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
        "Every competitor receives a wristband and a competition number on arrival",
        "Sign in at the competition table so the MCs know you have arrived",
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
