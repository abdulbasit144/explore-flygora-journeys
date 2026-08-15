import dubai from "@/assets/dest-dubai.jpg";
import turkey from "@/assets/dest-turkey.jpg";
import malaysia from "@/assets/dest-malaysia.jpg";
import thailand from "@/assets/dest-thailand.jpg";
import azerbaijan from "@/assets/dest-azerbaijan.jpg";
import saudi from "@/assets/dest-saudi.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import europe from "@/assets/dest-europe.jpg";

export type Service = { icon: string; title: string; description: string };

/** icon = lucide-react icon name, resolved in the ServiceCard component */
export const services: Service[] = [
  { icon: "Plane", title: "Flight Booking", description: "Competitive fares and sensible routings for every budget and schedule." },
  { icon: "BedDouble", title: "Hotel Booking", description: "Handpicked stays in the right locations, from comfortable to luxury." },
  { icon: "Map", title: "Tour Packages", description: "Ready-to-book itineraries covering popular international destinations." },
  { icon: "FileCheck", title: "Visa Assistance", description: "Clear guidance on documentation, requirements and application steps." },
  { icon: "Car", title: "Airport Transfers", description: "Private, on-time pickups and drop-offs so arrivals stay stress-free." },
  { icon: "Sparkles", title: "Customized Tours", description: "Itineraries shaped around your dates, interests and travel pace." },
  { icon: "Users", title: "Family Holidays", description: "Family-friendly planning with comfortable pacing and the right stays." },
  { icon: "UsersRound", title: "Group Travel", description: "Coordinated arrangements for corporate, community and student groups." },
  { icon: "Heart", title: "Honeymoon Trips", description: "Romantic escapes with thoughtful touches and private experiences." },
];

export type Feature = { icon: string; title: string; description: string };

export const whyChooseUs: Feature[] = [
  { icon: "Compass", title: "Personalized Travel Planning", description: "Every itinerary is shaped around how you actually like to travel." },
  { icon: "MapPinned", title: "Carefully Selected Destinations", description: "We recommend places and stays we would confidently book ourselves." },
  { icon: "ShieldCheck", title: "Reliable Service", description: "Clear communication and dependable arrangements from enquiry to return." },
  { icon: "Luggage", title: "Hassle-Free Travel", description: "Transfers, tickets and bookings organised so you can simply enjoy the trip." },
  { icon: "SlidersHorizontal", title: "Flexible Packages", description: "Adjust dates, hotels, duration or inclusions to suit your plans." },
  { icon: "Headset", title: "Dedicated Support", description: "A responsive point of contact before, during and after your journey." },
];

export type Testimonial = {
  name: string;
  destination: string;
  rating: number;
  review: string;
};

/** Placeholder testimonials — replace with genuine customer reviews. */
export const testimonials: Testimonial[] = [
  { name: "Sample Traveller A", destination: "Dubai", rating: 5, review: "Planning was simple and everything was arranged before we arrived. The transfers were on time and the hotel was exactly as described." },
  { name: "Sample Traveller B", destination: "Turkey", rating: 5, review: "The itinerary was well paced — we saw a lot without ever feeling rushed. Communication throughout was quick and clear." },
  { name: "Sample Traveller C", destination: "Maldives", rating: 5, review: "Our honeymoon was handled beautifully. The team suggested a resort that matched exactly what we described." },
  { name: "Sample Traveller D", destination: "Thailand", rating: 4, review: "Great value and a genuinely helpful team. They adjusted the plan twice for us without any fuss." },
  { name: "Sample Traveller E", destination: "Malaysia", rating: 5, review: "Travelling with kids can be complicated. This was the smoothest family trip we've had so far." },
  { name: "Sample Traveller F", destination: "Azerbaijan", rating: 5, review: "A short break that felt much longer. Every detail from visa guidance to day trips was covered." },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  { question: "How can I book a travel package?", answer: "Send us an enquiry through the website, WhatsApp or email. We'll confirm availability, share a detailed quotation and guide you through the booking steps." },
  { question: "Can I customize a package?", answer: "Yes. Every package can be adjusted — dates, duration, hotel category, inclusions or the destinations covered." },
  { question: "Do you provide visa assistance?", answer: "We provide guidance on documentation and requirements, and help you prepare a complete application. Final approval always rests with the relevant authority." },
  { question: "Can I book flights and hotels separately?", answer: "Absolutely. You can book flights only, hotels only, or a complete package including transfers and tours." },
  { question: "Do you offer group tours?", answer: "Yes — we arrange group departures as well as private group travel for families, companies and communities." },
  { question: "How can I request a quotation?", answer: "Share your destination, travel dates and number of travellers through the enquiry form. We'll respond with a tailored quotation." },
  { question: "What payment methods are available?", answer: "Payment options are confirmed at the time of booking. Please contact us for the current accepted methods." },
];

/** Instagram feed section — replace these with your own photos and post links. */
export const instagramPosts = [
  { image: dubai, alt: "Dubai skyline at dusk", caption: "Golden hour over Dubai" },
  { image: maldives, alt: "Maldives overwater villas", caption: "Island calm" },
  { image: turkey, alt: "Hot air balloons over Cappadocia", caption: "Sunrise in Cappadocia" },
  { image: thailand, alt: "Longtail boat on turquoise water in Thailand", caption: "Andaman blue" },
  { image: europe, alt: "European lakeside town", caption: "Slow mornings in Europe" },
  { image: malaysia, alt: "Kuala Lumpur skyline at night", caption: "City lights" },
  { image: saudi, alt: "Desert rock formations in Saudi Arabia", caption: "Desert horizons" },
  { image: azerbaijan, alt: "Baku skyline at sunset", caption: "Evenings in Baku" },
];

export const travelTypes = [
  "Family Holiday",
  "Honeymoon",
  "Group Tour",
  "Luxury Escape",
  "Adventure Trip",
  "Business Travel",
] as const;
