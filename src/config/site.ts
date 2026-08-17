/**
 * Central business configuration.
 * Replace these placeholder values with the real Destinations Flygora details.
 */
export const siteConfig = {
  name: "Destinations Flygora",
  shortName: "Flygora",
  tagline: "Your Journey, Our Wings",
  description:
    "Discover incredible destinations, thoughtfully designed travel experiences, and unforgettable journeys with Destinations Flygora.",

  // --- Contact placeholders (replace with real details) ---
  email: "info@destinationsflygora.com", // TODO: confirm business email
  phone: "+92 344 2652571",
  phoneLocal: "0344 2652571",
  address:
    "Mezzanine Floor, 66C, 13th Commercial St, Phase II Ext., DHA Phase 2, Karachi, Pakistan",
  officeHours: "Mon – Sat, 10:00 – 19:00",

  // --- WhatsApp (digits only, include country code, no + or spaces) ---
  whatsappNumber: "923442652571",
  whatsappMessage:
    "Hello Destinations Flygora, I'm interested in planning a trip. I'd like to know more about your packages.",

  // --- Social ---
  instagramUsername: "destinations.flygora",
  social: {
    instagram: "https://www.instagram.com/destinations.flygora",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },

  currency: "PKR",
  priceNote: "Placeholder pricing — update with your actual rates.",
} as const;

export const whatsappLink = (message: string = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Packages", to: "/packages" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
