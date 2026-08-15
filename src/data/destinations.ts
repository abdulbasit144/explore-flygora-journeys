import dubai from "@/assets/dest-dubai.jpg";
import turkey from "@/assets/dest-turkey.jpg";
import malaysia from "@/assets/dest-malaysia.jpg";
import thailand from "@/assets/dest-thailand.jpg";
import azerbaijan from "@/assets/dest-azerbaijan.jpg";
import saudi from "@/assets/dest-saudi.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import europe from "@/assets/dest-europe.jpg";

export type Destination = {
  slug: string;
  name: string;
  region: string;
  shortDescription: string;
  longDescription: string;
  fromPrice: number | null;
  image: string;
  highlights: string[];
  bestTime: string;
};

export const destinations: Destination[] = [
  {
    slug: "dubai",
    name: "Dubai",
    region: "Middle East",
    shortDescription: "Skyline glamour, desert adventures and world-class shopping.",
    longDescription:
      "Dubai blends futuristic architecture with golden desert landscapes. From the observation decks of the Burj Khalifa to evening dune safaris and relaxed beach days, it is an easy destination for families, couples and first-time travellers alike.",
    fromPrice: 699,
    image: dubai,
    highlights: ["Burj Khalifa", "Desert safari", "Dhow cruise dinner", "Palm Jumeirah"],
    bestTime: "November – March",
  },
  {
    slug: "turkey",
    name: "Turkey",
    region: "Europe / Asia",
    shortDescription: "Balloons over Cappadocia and the timeless streets of Istanbul.",
    longDescription:
      "Turkey pairs ancient history with dramatic landscapes. Wander the bazaars of Istanbul, float above the fairy chimneys of Cappadocia at sunrise, and unwind on the turquoise coast.",
    fromPrice: 899,
    image: turkey,
    highlights: ["Cappadocia balloon ride", "Bosphorus cruise", "Hagia Sophia", "Pamukkale"],
    bestTime: "April – June, September – October",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "Southeast Asia",
    shortDescription: "City lights, rainforests and relaxed island escapes.",
    longDescription:
      "Malaysia offers a comfortable mix of modern city life and tropical nature. Kuala Lumpur's skyline, the highlands' tea plantations and Langkawi's beaches make it ideal for family holidays.",
    fromPrice: 749,
    image: malaysia,
    highlights: ["Petronas Towers", "Batu Caves", "Langkawi islands", "Genting Highlands"],
    bestTime: "March – October",
  },
  {
    slug: "thailand",
    name: "Thailand",
    region: "Southeast Asia",
    shortDescription: "Turquoise bays, island hopping and vibrant street culture.",
    longDescription:
      "Thailand is famous for its warm hospitality, striking islands and rich food culture. Combine Bangkok's energy with the calm limestone bays of Krabi and Phuket.",
    fromPrice: 799,
    image: thailand,
    highlights: ["Phi Phi islands", "Grand Palace", "Phuket beaches", "Floating markets"],
    bestTime: "November – April",
  },
  {
    slug: "azerbaijan",
    name: "Azerbaijan",
    region: "Caucasus",
    shortDescription: "Old-city charm meeting striking modern architecture in Baku.",
    longDescription:
      "Azerbaijan is a compact, scenic destination. Explore Baku's walled old city, drive to mountain villages, and enjoy a relaxed pace with short travel distances.",
    fromPrice: 649,
    image: azerbaijan,
    highlights: ["Baku Old City", "Flame Towers", "Gabala mountains", "Mud volcanoes"],
    bestTime: "April – June, September – November",
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    region: "Middle East",
    shortDescription: "Sweeping deserts, heritage sites and spiritual journeys.",
    longDescription:
      "Saudi Arabia opens up dramatic desert scenery, historic old towns and pilgrimage travel. We help arrange comfortable itineraries with clear guidance at every step.",
    fromPrice: 899,
    image: saudi,
    highlights: ["AlUla rock formations", "Jeddah Al-Balad", "Riyadh edge of the world", "Red Sea coast"],
    bestTime: "October – March",
  },
  {
    slug: "maldives",
    name: "Maldives",
    region: "Indian Ocean",
    shortDescription: "Overwater villas, coral reefs and pure island calm.",
    longDescription:
      "The Maldives is the classic escape for honeymoons and slow luxury holidays. Choose from intimate guesthouse islands to overwater villa resorts with house reefs.",
    fromPrice: 1199,
    image: maldives,
    highlights: ["Overwater villas", "Snorkelling & diving", "Sunset cruise", "Private sandbank dining"],
    bestTime: "November – April",
  },
  {
    slug: "europe",
    name: "Europe",
    region: "Europe",
    shortDescription: "Alpine lakes, grand cities and effortless multi-country routes.",
    longDescription:
      "A Europe itinerary can be tailored around cities, mountains or coastlines. We plan sensible routes, transfers and stays so you spend more time exploring and less time in transit.",
    fromPrice: 1499,
    image: europe,
    highlights: ["Swiss Alps", "Paris & Rome", "Scenic rail journeys", "Lake districts"],
    bestTime: "May – September",
  },
];

export const getDestination = (slug: string) =>
  destinations.find((d) => d.slug === slug);
