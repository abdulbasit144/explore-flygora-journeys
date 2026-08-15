import dubai from "@/assets/dest-dubai.jpg";
import turkey from "@/assets/dest-turkey.jpg";
import malaysia from "@/assets/dest-malaysia.jpg";
import thailand from "@/assets/dest-thailand.jpg";
import azerbaijan from "@/assets/dest-azerbaijan.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import europe from "@/assets/dest-europe.jpg";
import saudi from "@/assets/dest-saudi.jpg";

export type ItineraryDay = { day: number; title: string; description: string };

export type TravelPackage = {
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  category: string;
  duration: string;
  fromPrice: number;
  shortDescription: string;
  overview: string;
  image: string;
  gallery: string[];
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  accommodation: string;
  importantInfo: string[];
};

/** Placeholder prices — replace with your real rates. */
export const packages: TravelPackage[] = [
  {
    slug: "dubai-family-holiday",
    title: "Dubai Family Holiday",
    destination: "Dubai",
    destinationSlug: "dubai",
    category: "Family Holidays",
    duration: "5 Days / 4 Nights",
    fromPrice: 699,
    shortDescription:
      "A relaxed city break built around family-friendly attractions and easy transfers.",
    overview:
      "A comfortable introduction to Dubai for families. The pace is gentle, with mornings free for rest and afternoons dedicated to the city's most enjoyable attractions. Transfers and tickets are arranged in advance so there is no queuing or guesswork.",
    image: dubai,
    gallery: [dubai, maldives, thailand],
    inclusions: [
      "4 nights hotel accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Desert safari with dinner",
      "Burj Khalifa entry tickets",
    ],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Personal expenses"],
    highlights: ["Burj Khalifa observation deck", "Desert safari", "Dubai Marina cruise", "Theme park day"],
    itinerary: [
      { day: 1, title: "Arrival in Dubai", description: "Airport pickup, hotel check-in and a relaxed evening at the Marina." },
      { day: 2, title: "City highlights", description: "Guided city tour covering the old town, souks and Jumeirah beachfront." },
      { day: 3, title: "Desert safari", description: "Free morning, then an afternoon dune drive with a dinner under the stars." },
      { day: 4, title: "Family day out", description: "A full day at a theme park or waterpark of your choice." },
      { day: 5, title: "Departure", description: "Breakfast, checkout and transfer to the airport." },
    ],
    accommodation: "4-star centrally located hotel with family rooms. Upgrades available on request.",
    importantInfo: [
      "Valid passport with at least 6 months validity required.",
      "Itinerary order may change based on weather or local conditions.",
      "Prices shown are indicative and confirmed at the time of booking.",
    ],
  },
  {
    slug: "maldives-honeymoon-escape",
    title: "Maldives Honeymoon Escape",
    destination: "Maldives",
    destinationSlug: "maldives",
    category: "Honeymoon Packages",
    duration: "5 Days / 4 Nights",
    fromPrice: 1199,
    shortDescription: "Overwater serenity, private dining and quiet island days for two.",
    overview:
      "A honeymoon itinerary designed around privacy and rest. Speedboat or seaplane transfers, a romantic dining experience and plenty of unscheduled time to simply enjoy the lagoon.",
    image: maldives,
    gallery: [maldives, thailand, dubai],
    inclusions: [
      "4 nights resort stay",
      "Half board meal plan",
      "Speedboat / seaplane transfers",
      "Honeymoon decoration on arrival",
      "One private dinner experience",
    ],
    exclusions: ["International flights", "Spa treatments", "Premium beverages", "Travel insurance"],
    highlights: ["Overwater villa stay", "Sunset dolphin cruise", "House-reef snorkelling", "Private beach dinner"],
    itinerary: [
      { day: 1, title: "Arrival & transfer", description: "Meet and greet at Malé, transfer to the resort and villa check-in." },
      { day: 2, title: "Island at your pace", description: "Free day with optional snorkelling on the house reef." },
      { day: 3, title: "Sunset cruise", description: "Afternoon dolphin-spotting cruise followed by a private dinner." },
      { day: 4, title: "Leisure day", description: "Spa, water sports or a full day of doing very little." },
      { day: 5, title: "Departure", description: "Breakfast and return transfer to Malé airport." },
    ],
    accommodation: "Overwater or beach villa depending on the resort selected and availability.",
    importantInfo: [
      "Seaplane transfers operate in daylight hours only.",
      "Honeymoon benefits may require a marriage certificate at check-in.",
      "Resort selection is confirmed after your enquiry.",
    ],
  },
  {
    slug: "turkey-group-tour",
    title: "Turkey Discovery Group Tour",
    destination: "Turkey",
    destinationSlug: "turkey",
    category: "Group Tours",
    duration: "8 Days / 7 Nights",
    fromPrice: 1099,
    shortDescription: "Istanbul, Cappadocia and Pamukkale on a well-paced group route.",
    overview:
      "A guided group route across Turkey's most memorable regions, with comfortable coach travel, local guides and a balanced mix of sightseeing and free time.",
    image: turkey,
    gallery: [turkey, europe, azerbaijan],
    inclusions: [
      "7 nights accommodation",
      "Daily breakfast and 4 dinners",
      "Air-conditioned coach travel",
      "English-speaking guide",
      "Entrance fees for listed sites",
    ],
    exclusions: ["Flights", "Hot air balloon ride", "Lunches", "Tips and gratuities"],
    highlights: ["Hagia Sophia & Blue Mosque", "Bosphorus cruise", "Cappadocia valleys", "Pamukkale terraces"],
    itinerary: [
      { day: 1, title: "Arrive Istanbul", description: "Transfer and welcome briefing." },
      { day: 2, title: "Old Istanbul", description: "Guided tour of the historic peninsula." },
      { day: 3, title: "Bosphorus & bazaars", description: "Morning cruise, afternoon at the Grand Bazaar." },
      { day: 4, title: "Fly to Cappadocia", description: "Underground city and pottery workshop visit." },
      { day: 5, title: "Cappadocia valleys", description: "Optional sunrise balloon flight, then valley tour." },
      { day: 6, title: "To Pamukkale", description: "Scenic drive with stops en route." },
      { day: 7, title: "Pamukkale & Hierapolis", description: "Travertine terraces and ancient ruins." },
      { day: 8, title: "Departure", description: "Transfer to the airport for your return flight." },
    ],
    accommodation: "Comfortable 4-star hotels throughout, twin sharing basis.",
    importantInfo: [
      "Group size is limited to keep the experience personal.",
      "Balloon flights are weather dependent.",
      "Moderate walking is involved on most touring days.",
    ],
  },
  {
    slug: "europe-luxury-escape",
    title: "Europe Luxury Escape",
    destination: "Europe",
    destinationSlug: "europe",
    category: "Luxury Escapes",
    duration: "10 Days / 9 Nights",
    fromPrice: 2499,
    shortDescription: "Alpine lakes and grand cities with premium stays and private transfers.",
    overview:
      "A refined multi-city route through Europe with carefully chosen hotels, private transfers and scenic rail segments. Ideal for travellers who value comfort and a slower rhythm.",
    image: europe,
    gallery: [europe, turkey, azerbaijan],
    inclusions: [
      "9 nights in premium hotels",
      "Daily breakfast",
      "Private airport and intercity transfers",
      "Scenic rail journey",
      "Selected guided experiences",
    ],
    exclusions: ["International flights", "Schengen visa fees", "Meals not listed", "Optional excursions"],
    highlights: ["Alpine lake stay", "Private city tours", "Scenic rail journey", "Fine dining evenings"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Private transfer and hotel check-in." },
      { day: 2, title: "City exploration", description: "Private guided tour of the historic centre." },
      { day: 3, title: "Museums & leisure", description: "Free day with curated recommendations." },
      { day: 4, title: "Scenic rail", description: "Panoramic train to the lake region." },
      { day: 5, title: "Alpine day", description: "Mountain excursion and lakeside evening." },
      { day: 6, title: "Countryside", description: "Vineyard or village day trip." },
      { day: 7, title: "To the next city", description: "Private transfer and evening at leisure." },
      { day: 8, title: "Art & architecture", description: "Guided walking tour and gallery visits." },
      { day: 9, title: "Free day", description: "Shopping, spa or a final excursion." },
      { day: 10, title: "Departure", description: "Private transfer to the airport." },
    ],
    accommodation: "Boutique and 5-star properties in central locations.",
    importantInfo: [
      "Schengen visa processing time should be planned well in advance.",
      "Rail seats are subject to availability at time of booking.",
      "Hotel list is shared and confirmed before payment.",
    ],
  },
  {
    slug: "thailand-adventure-trip",
    title: "Thailand Island Adventure",
    destination: "Thailand",
    destinationSlug: "thailand",
    category: "Adventure Trips",
    duration: "7 Days / 6 Nights",
    fromPrice: 899,
    shortDescription: "Island hopping, kayaking and jungle trails along the Andaman coast.",
    overview:
      "An active itinerary for travellers who want more than beach time — sea kayaking through limestone caves, snorkelling trips and a rainforest day, balanced with proper rest.",
    image: thailand,
    gallery: [thailand, maldives, malaysia],
    inclusions: [
      "6 nights accommodation",
      "Daily breakfast",
      "Island hopping speedboat tour",
      "Sea kayaking session",
      "All listed transfers",
    ],
    exclusions: ["Flights", "Diving certification", "Lunches and dinners", "Travel insurance"],
    highlights: ["Phi Phi island tour", "Sea kayaking", "Jungle trek", "Night market evening"],
    itinerary: [
      { day: 1, title: "Arrival in Phuket", description: "Transfer to your hotel and a relaxed beach evening." },
      { day: 2, title: "Island hopping", description: "Full-day speedboat tour with snorkelling stops." },
      { day: 3, title: "Sea kayaking", description: "Paddle through limestone caves and hidden lagoons." },
      { day: 4, title: "To Krabi", description: "Coastal transfer and free afternoon." },
      { day: 5, title: "Jungle day", description: "Rainforest trek and waterfall swim." },
      { day: 6, title: "Free day", description: "Optional diving, spa or beach time." },
      { day: 7, title: "Departure", description: "Transfer to the airport." },
    ],
    accommodation: "3–4 star beachfront and town hotels.",
    importantInfo: [
      "A basic level of fitness is recommended.",
      "Sea conditions may affect boat tours.",
      "Reef-safe sunscreen is encouraged.",
    ],
  },
  {
    slug: "azerbaijan-city-break",
    title: "Baku City Break",
    destination: "Azerbaijan",
    destinationSlug: "azerbaijan",
    category: "International Tours",
    duration: "4 Days / 3 Nights",
    fromPrice: 649,
    shortDescription: "A short, scenic escape combining old-city walks and mountain views.",
    overview:
      "A compact break with short travel distances. Explore the walled old city, take in the modern skyline, and add a day trip into the mountains.",
    image: azerbaijan,
    gallery: [azerbaijan, turkey, saudi],
    inclusions: ["3 nights hotel stay", "Daily breakfast", "Airport transfers", "Baku city tour", "Gabala day trip"],
    exclusions: ["Flights", "Visa fees", "Lunches and dinners", "Personal expenses"],
    highlights: ["Icherisheher old city", "Flame Towers views", "Gabala mountains", "Local cuisine tasting"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Transfer, check-in and boulevard walk." },
      { day: 2, title: "Baku city tour", description: "Old city, Maiden Tower and modern landmarks." },
      { day: 3, title: "Gabala day trip", description: "Mountain scenery, cable car and waterfalls." },
      { day: 4, title: "Departure", description: "Breakfast and airport transfer." },
    ],
    accommodation: "Centrally located 4-star hotel.",
    importantInfo: [
      "E-visa is required for most nationalities.",
      "Mountain roads can be cool — pack a light jacket.",
      "Day trip timings are subject to traffic.",
    ],
  },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);

export const packageCategories = Array.from(new Set(packages.map((p) => p.category)));
