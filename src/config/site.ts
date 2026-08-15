/**
 * Central business configuration.
 * Replace these placeholder values with the real Destinations Flygora details.
 */
export const siteConfig = {
  name: "Destinations Flygora",
  shortName: "Flygora",
  tagline: "Your Journey. Our Expertise.",
  description:
    "Discover incredible destinations, thoughtfully designed travel experiences, and unforgettable journeys with Destinations Flygora.",

  // --- Contact placeholders (replace with real details) ---
  email: "hello@example.com", // TODO: replace with business email
  phone: "+00 000 0000000", // TODO: replace with business phone
  address: "Add your office address here", // TODO: replace with business address
  officeHours: "Mon – Sat, 10:00 – 19:00",

  // --- WhatsApp (digits only, include country code, no + or spaces) ---
  whatsappNumber: "000000000000", // TODO: replace with real WhatsApp number
  whatsappMessage:
    "Hello Destinations Flygora, I'm interested in planning a trip. I'd like to know more about your packages.",

  // --- Social ---
  instagramUsername: "destinationsflygora", // TODO: confirm handle
  social: {
    instagram: "https://instagram.com/destinationsflygora",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },

  currency: "USD",
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
