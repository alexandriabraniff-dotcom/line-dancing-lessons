import type { Competition } from "./types";

/* ── "Dance Till You Drop Dead", Halloween 2026 at The Yale Saloon ──────────
   Our first competition. Everything under `eventInfo` is the original event
   page (write-up, setlist, rules), kept as an archive. */

export const danceTillYouDropDead2026: Competition = {
  slug: "dance-till-you-drop-dead-2026",
  name: "Dance Till You Drop Dead",
  startDate: "2026-10-25T20:00:00-07:00",
  endDate: "2026-10-26T02:00:00-07:00",
  venue: {
    name: "The Yale Saloon",
    streetAddress: "1300 Granville St",
    city: "Vancouver",
    region: "BC",
    postalCode: "V6Z 1M7",
  },

  /* TODO (client): the short quote shown on the card and in the hero */
  tagline: "A deadly night of fun.",

  description:
    "Dance Till You Drop Dead, our Halloween line dancing endurance competition and costume contest at The Yale Saloon in Vancouver, October 25 2026. Recap and photos from the night.",

  /* TODO (client): choose a cover photo. Once the gallery is uploaded, swap
     this for { cloudinaryId: "<public ID from lib/galleries/...json>", alt: "..." }. */
  cover: {
    src: "/events/poster.jpg",
    alt: "Dance Till You Drop Dead poster: line dancing endurance competition at The Yale Saloon, October 25",
    width: 1080,
    height: 1350,
  },

  banner: {
    src: "/events/dance-till-you-drop-dead-card.jpg",
    alt: "Dance Till You Drop Dead, with the Wildflower cowgirl dancing",
  },

  /* TODO (client): one or more paragraphs about the night. Until then the page
     says the recap is coming soon. */
  recap: [],

  /* Ticket links only show while the competition is upcoming, so this one is
     hidden automatically now the date has passed. */
  tickets: {
    url: "https://admitone.com/events/vancouver/community/halloween/the-yale-saloon-presents-dance-till-you-drop-dead/HCSUJ0",
    label: "Buy Tickets",
  },
  ageLine: "19+ Event",

  eventInfo: {
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
    poster: {
      src: "/events/poster.jpg",
      alt: "Dance Till You Drop Dead poster: line dancing endurance competition at The Yale Saloon, October 25, 9PM to 11:30PM",
      width: 1080,
      height: 1350,
    },
    setlistNote:
      "Spooky Swap songs started on a Halloween song, then switched to the song shown. They only counted once the MC called \"Song swap, this counts!\"",
    setlist: [
      { song: "9 to 5", artist: "Dolly Parton", dance: "9 to 5", url: "https://www.copperknob.co.uk/stepsheets/CPK3PR5/9-to-5" },
      { song: "Acapulco", artist: "Jason Derulo", dance: "Sexy Mona Lisa", url: "https://www.copperknob.co.uk/stepsheets/NFYFN86/sexy-mona-lisa" },
      { song: "Boot Scootin' Boogie", artist: "Brooks & Dunn", dance: "Boot Scootin' Boogie", url: "https://www.copperknob.co.uk/stepsheets/QGCF4T9/boot-scootin-boogie" },
      { song: "Cadillac Ranch", artist: "Nitty Gritty Dirt Band", dance: "Cadillac Ranch", url: "https://www.copperknob.co.uk/stepsheets/G7WR5M8/cadillac-ranch" },
      { song: "Can't Believe It", artist: "Flo Rida", dance: "Off the Chain", url: "https://www.copperknob.co.uk/stepsheets/9MB6HR3/off-the-chain" },
      { song: "Chattahoochee", artist: "Alan Jackson", dance: "Chattahoochee", url: "https://www.copperknob.co.uk/stepsheets/GBCNJK6/chattahoochee" },
      { song: "Church", artist: "T-Pain, Teddy Verseti", dance: "Rude Dude", url: "https://www.copperknob.co.uk/stepsheets/Q7B96WD/rude-dude" },
      { song: "Church Clap", artist: "KB, Lecrae", dance: "Church Clap", url: "https://www.copperknob.co.uk/stepsheets/8CF4T8G/church-clap" },
      { song: "Copperhead Road", artist: "Steve Earle", dance: "Copperhead Road", url: "https://www.copperknob.co.uk/stepsheets/38BP98T/copperhead-road-az" },
      { song: "Country as a Boy Can Be", artist: "Brady Seals", dance: "Country as Can Be", url: "https://www.copperknob.co.uk/stepsheets/36BNR36/country-as-can-be" },
      { song: "Country Girl (Shake It for Me)", artist: "Luke Bryan", dance: "Country Girl Shake", url: "https://www.copperknob.co.uk/stepsheets/RQ78MFX/country-girl-shake" },
      { song: "Crank It Up", artist: "Colt Ford", dance: "Goin' Hamm", url: "https://www.copperknob.co.uk/stepsheets/3KWNJ8K/goin-hamm" },
      { song: "Disturbia", artist: "Rihanna", swap: "Damn I Love Miami", dance: "Pieces to the Puzzle", url: "https://www.copperknob.co.uk/stepsheets/2TCHG85/pieces-to-the-puzzle" },
      { song: "Don't Fear the Reaper", artist: "Bella Poarch", swap: "I See Country", dance: "Honky Tonk Way", url: "https://www.copperknob.co.uk/stepsheets/CYGPG5B/honky-tonk-way" },
      { song: "Don't Wanna Go Home", artist: "Jason Derulo", dance: "Banana Boat", url: "https://www.copperknob.co.uk/stepsheets/S89NJBN/banana-boat" },
      { song: "Dragula", artist: "Rob Zombie", swap: "Burn It to the Ground", dance: "Burn It to the Ground", url: "https://www.copperknob.co.uk/stepsheets/KTDN6CM/burn-it-to-the-ground" },
      { song: "E.T.", artist: "Katy Perry", swap: "Any Man of Mine", dance: "Canadian Stomp", url: "https://www.copperknob.co.uk/stepsheets/4KDWBN5/canadian-stomp" },
      { song: "Fake ID", artist: "Big & Rich, Gretchen Wilson", dance: "Fake ID", url: "https://www.copperknob.co.uk/stepsheets/SG6273V/fake-id-2011-footloose-movie" },
      { song: "Footloose", artist: "Kenny Loggins", dance: "Footloose", url: "https://www.copperknob.co.uk/stepsheets/YWVM4T6/footloose" },
      { song: "Freight Train", artist: "Aaron Watson", dance: "Walk the Line", url: "https://www.copperknob.co.uk/stepsheets/YTY87P8/walk-the-line" },
      { song: "Fuego", artist: "Pitbull", dance: "Fuego", url: "https://www.copperknob.co.uk/stepsheets/YC6DCWW/fuego" },
      { song: "Ghostbusters", artist: "Bobby Pickett", swap: "Greenlight", dance: "TGIF", url: "https://www.copperknob.co.uk/stepsheets/B7H3L9R/tgif" },
      { song: "Good Girl", artist: "Carrie Underwood", dance: "Good Girl", url: "https://www.copperknob.co.uk/stepsheets/XQCLZQ8/good-girl" },
      { song: "Good Time", artist: "Alan Jackson", dance: "Good Time", url: "https://www.copperknob.co.uk/stepsheets/86SCMVC/good-time" },
      { song: "Heads Will Roll", artist: "Yeah Yeah Yeahs", swap: "Shivers", dance: "Gives Me Shivers", url: "https://www.copperknob.co.uk/stepsheets/QLFNPD9/gives-me-shivers" },
      { song: "High Class", artist: "Eric Paslay", dance: "High Class", url: "https://www.copperknob.co.uk/stepsheets/8MYQ8LR/high-class-we-high-class" },
      { song: "High Horse", artist: "Kacey Musgraves", dance: "High Horse", url: "https://www.copperknob.co.uk/stepsheets/BY59TF9/high-horse" },
      { song: "Honky Tonk Halloween", artist: "Captain Clegg", swap: "I Love a Rainy Night", dance: "I Love a Rainy Night", url: "https://www.copperknob.co.uk/stepsheets/H9Y5S4Y/i-love-a-rainy-night" },
      { song: "Hungry Like the Wolf", artist: "Duran Duran", swap: "Rocket to the Sun", dance: "Rocket to the Sun", url: "https://www.copperknob.co.uk/stepsheets/T948HNL/rocket-to-the-sun" },
      { song: "Mercury Blues", artist: "Alan Jackson", dance: "Mercury Feet Blues", url: "https://www.copperknob.co.uk/stepsheets/3K9SSQ5/mercury-feet-blues" },
      { song: "Monster Mash", artist: "Bobby Pickett", swap: "K Is for Kicks", dance: "K Is for Kicks", url: "https://www.copperknob.co.uk/stepsheets/5X44H3L/k-is-for-kicks" },
      { song: "Moving Down to Texas", artist: "Freedom Creek", dance: "Moving Down to Texas", url: "https://www.copperknob.co.uk/stepsheets/N4BSHYW/moving-down-to-texas" },
      { song: "Mr Lonely", artist: "Midland", dance: "Mr Lonely", url: "https://www.copperknob.co.uk/stepsheets/YXF8MYF/mr-lonely" },
      { song: "One Way or Another", artist: "Hocus Pocus", swap: "A Bar Song", dance: "A Bar Song", url: "https://www.copperknob.co.uk/stepsheets/9ZRL2CY/a-bar-song" },
      { song: "PHAT", artist: "DaBaby", dance: "PHAT", url: "https://www.copperknob.co.uk/stepsheets/PZT9WVY/phat" },
      { song: "Shake Senora", artist: "Pitbull, T-Pain, Sean Paul", dance: "Shake Senora", url: "https://www.copperknob.co.uk/stepsheets/G6NCJTL/shake-senora-bob" },
      { song: "She Had Me at Heads Carolina", artist: "Cole Swindell", dance: "Askin' Questions", url: "https://www.copperknob.co.uk/stepsheets/GV4Y2XK/askin-questions" },
      { song: "Sin Wagon", artist: "The Chicks", dance: "Lightning Polka", url: "https://www.copperknob.co.uk/stepsheets/J5VKJTR/lightning-polka" },
      { song: "Skeleton Sam", artist: "LVCRFT", swap: "Fireball", dance: "Ah Si", url: "https://www.copperknob.co.uk/stepsheets/8SXWZ3L/ah-si" },
      { song: "Slow Low", artist: "Jason Derulo", dance: "Baby Slow Down", url: "https://www.copperknob.co.uk/stepsheets/BFPPJR7/baby-slow-down" },
      { song: "Somebody's Watching Me", artist: "Rockwell", swap: "Manchild", dance: "Manchild", url: "https://www.copperknob.co.uk/stepsheets/GMRRY64/manchild" },
      { song: "Spooky Scary Skeletons (Remix)", artist: "Andrew Gold", swap: "Delusional", dance: "Delulu", url: "https://www.copperknob.co.uk/stepsheets/ZFVXF8Q/delulu" },
      { song: "Texas Time", artist: "Keith Urban", dance: "Back on Texas Time", url: "https://www.copperknob.co.uk/stepsheets/F7X68YV/back-on-texas-time" },
      { song: "Thriller", artist: "Michael Jackson", swap: "The Wolf", dance: "The Wolf", url: "https://www.copperknob.co.uk/stepsheets/93HFRDG/the-wolf" },
      { song: "Turn All the Lights On", artist: "T-Pain, Ne-Yo", dance: "TATLO", url: "https://www.copperknob.co.uk/stepsheets/XJ7PTTW/tatlo" },
      { song: "Unholy", artist: "Sam Smith", swap: "Country Girl Twerk", dance: "Country Girl Stomp", url: "https://www.copperknob.co.uk/stepsheets/NBP4282/country-girl-stomp" },
      { song: "Wagon Wheel", artist: "Darius Rucker", dance: "Rockin' the Wagon Wheel", url: "https://www.copperknob.co.uk/stepsheets/7VDKHS2/rockin-the-wagon-wheel" },
      { song: "Watermelon Crawl", artist: "Tracy Byrd", dance: "Watermelon Crawl", url: "https://www.copperknob.co.uk/stepsheets/85C68JG/watermelon-crawl" },
      { song: "Whip It", artist: "LunchMoney Lewis, Chloe Angelides", dance: "Aces and Eights", url: "https://www.copperknob.co.uk/stepsheets/DXFKS79/aces-and-eights" },
      { song: "Whiskey Drinkin'", artist: "Mikel Knight", dance: "The Outlaw", url: "https://www.copperknob.co.uk/stepsheets/3C7ZC9J/the-outlaw" },
    ],
    rules: [
      {
        title: "Dance Competition",
        intro:
          "Dance Till You Drop Dead is a line dancing endurance competition where participants earn points by completing as many qualifying line dances as possible throughout the competition. The dancer with the most points at the end of the competition wins.",
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
        ],
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
        ],
      },
    ],
  },
};
