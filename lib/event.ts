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
      text: "The night kicks off with our regular line dancing class from 8:00 PM to 9:00 PM. Just like any other night, we'll teach a mix of line dances so beginners have the chance to learn, and this time we'll also teach some of the dances that will be played throughout the competition. It's open to everyone and no experience is needed, so it's the perfect warm up before the floor turns competitive.",
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

  /* Rules for each contest: an optional short paragraph, then one string per bullet */
  rules: [
    {
      title: "Dance Competition",
      intro:
        "Dance Till You Die is a line dancing endurance competition where participants earn points by completing as many qualifying line dances as possible throughout the competition. The dancer with the most points at the end of the competition wins.",
      items: [
        "The competition runs from 9:00 PM to 11:30 PM",
        "Each qualifying line dance is worth 1 point",
        "A dance qualifies when it is a recognised line dance and at least 5 people are dancing it, including you",
        "You must dance the majority of the dance to earn the point. No point if you sit it out, don't know the dance or only join in briefly",
        "The beginner dances from 9:00 PM to 10:00 PM count towards your score",
        "Only line dances count. Swing, two-step and partner dancing are welcome on the floor but don't score",
        "If two established line dances are commonly danced to the same song, both can count, as confirmed by the MC",
        "Starting a different dance to the same song just to create another scoring opportunity does not count",
        "Song swaps are allowed, but only count once an MC announces \"Song swap, this counts!\" and at least 5 people are dancing",
        "There are no free passes or make-up points for missed dances",
        "MC decisions on scoring are final",
        "All competitors must purchase an event ticket",
        "The dancer with the most points at the end of the competition wins",
      ] as string[],
    },
    {
      title: "Costume Contest",
      intro:
        "The costume contest is open to everyone at the Yale on the night. Dress up, sign up at the costume contest booth and you're in the running for a prize, whether you're competing on the dance floor or just coming out to celebrate Halloween.",
      items: [
        "Anyone in the bar can enter, no competition ticket needed",
        "Free to enter, you only pay your entry to the bar",
        "Sign up at the costume contest booth inside the Yale",
        "One entry per person, and group costumes count as a single entry",
        "Costumes are judged on originality, effort and overall look",
        "No real or replica weapons, and nothing offensive",
        "Make sure you can move safely in your costume, the dance floor will be busy all night",
        "The winner is chosen and announced at midnight",
      ] as string[],
    },
  ],
} as const;
