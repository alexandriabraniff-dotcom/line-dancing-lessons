/* ── Booking forms ─────────────────────────────────────────
   One form per service. Shared by the popup (components/BookingButton.tsx)
   and the email route (app/api/booking/route.ts), so questions only need
   editing here. */

export type BookingField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "select" | "checkboxes" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  /* Spans both columns on wider screens */
  wide?: boolean;
};

export type BookingService = {
  key: string;
  title: string;
  image: string;
  intro: string;
  fields: BookingField[];
};

const contactFields: BookingField[] = [
  { name: "name", label: "Your Name", type: "text", required: true, placeholder: "Jane Smith" },
  { name: "email", label: "Email Address", type: "email", required: true, placeholder: "jane@example.com" },
  { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "(604) 555-0123" },
];

const messageField: BookingField = {
  name: "message",
  label: "Anything Else We Should Know?",
  type: "textarea",
  required: true,
  placeholder: "Timing, theme, song requests, questions...",
  wide: true,
};

export const bookingServices: BookingService[] = [
  {
    key: "weddings",
    title: "Weddings",
    image: "/services/weddings.png",
    intro: "Tell us about your big day and we'll put together the perfect plan for you and your guests.",
    fields: [
      ...contactFields,
      { name: "date", label: "Wedding Date", type: "date", required: true },
      { name: "location", label: "Venue or City", type: "text", required: true, placeholder: "e.g. Vancouver" },
      {
        name: "guests",
        label: "Number of Guests",
        type: "select",
        required: true,
        options: ["Under 50", "50 to 100", "100 to 150", "150+", "Not sure yet"],
      },
      {
        name: "interested",
        label: "What Are You Interested In?",
        type: "checkboxes",
        required: true,
        options: ["Bridal party choreography", "Couples first dance", "Lessons for all your guests"],
        wide: true,
      },
      messageField,
    ],
  },
  {
    key: "birthdays",
    title: "Birthdays",
    image: "/services/birthdays.png",
    intro: "Tell us about the party and we'll bring the steps, the playlist and the good times.",
    fields: [
      ...contactFields,
      { name: "date", label: "Party Date", type: "date", required: true },
      { name: "location", label: "Venue or City", type: "text", required: true, placeholder: "e.g. Burnaby" },
      {
        name: "guests",
        label: "Number of Guests",
        type: "select",
        required: true,
        options: ["Under 15", "15 to 30", "30 to 50", "50+", "Not sure yet"],
      },
      {
        name: "ages",
        label: "Guest Ages",
        type: "select",
        required: true,
        options: ["Kids", "Teens", "Adults", "Mixed ages"],
      },
      messageField,
    ],
  },
  {
    key: "social-events",
    title: "Social Events",
    image: "/services/special-events.png",
    intro: "Tell us about your event and we'll plan a session that gets everyone moving.",
    fields: [
      ...contactFields,
      {
        name: "eventType",
        label: "Type of Event",
        type: "select",
        required: true,
        options: ["Corporate team event", "Stag party", "Fundraiser", "Community event", "Pop-up lesson", "Other"],
      },
      { name: "organization", label: "Company or Organization", type: "text", required: true, placeholder: "Company or organization" },
      { name: "date", label: "Event Date", type: "date", required: true },
      { name: "location", label: "Venue or City", type: "text", required: true, placeholder: "e.g. Richmond" },
      {
        name: "guests",
        label: "Group Size",
        type: "select",
        required: true,
        options: ["Under 20", "20 to 50", "50 to 100", "100+", "Not sure yet"],
      },
      messageField,
    ],
  },
  {
    key: "private-groups",
    title: "Private Groups",
    image: "/services/private-lessons.png",
    intro: "Tell us about your crew and we'll shape every session around your group.",
    fields: [
      ...contactFields,
      {
        name: "sessionType",
        label: "Type of Lessons",
        type: "select",
        required: true,
        options: ["One-time session", "Recurring lessons", "Not sure yet"],
      },
      { name: "date", label: "Preferred Start Date", type: "date", required: true },
      { name: "location", label: "Preferred Location", type: "text", required: true, placeholder: "Your home, studio, office..." },
      {
        name: "guests",
        label: "Group Size",
        type: "select",
        required: true,
        options: ["2 to 5", "6 to 10", "11 to 20", "20+"],
      },
      {
        name: "experience",
        label: "Experience Level",
        type: "select",
        required: true,
        options: ["Complete beginners", "Some experience", "Intermediate", "Mixed levels"],
      },
      messageField,
    ],
  },
];

/* General enquiry form on the Contact page (not shown as a Book button) */
export const contactService: BookingService = {
  key: "contact",
  title: "General",
  image: "/icon.png",
  intro: "",
  fields: [
    ...contactFields,
    {
      name: "eventType",
      label: "Type of Event",
      type: "select",
      required: true,
      options: ["Wedding", "Birthday", "Social Event", "Private Group", "Other"],
    },
    {
      name: "message",
      label: "Tell Us More",
      type: "textarea",
      required: true,
      placeholder: "Date, location, group size, any special requests...",
    },
  ],
};

export function getBookingService(key: string) {
  if (key === contactService.key) return contactService;
  return bookingServices.find((service) => service.key === key);
}
