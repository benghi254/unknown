export interface Safari {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  groupSize: string;
  image: string;
  gallery?: string[];
  lodgingType: string;
  badge?: string;
  highlights: string[];
  included: string[];
  parkIds: string[];
}

export const safaris: Safari[] = [
  {
    id: "masai-mara-adventure",
    title: "Masai Mara Adventure",
    description:
      "Experience the legendary Masai Mara National Reserve, home to the Great Migration and the Big Five. Witness breathtaking savannah landscapes, fly in hot air balloons at dawn, and immerse yourself in authentic Maasai culture.",
    duration: "5 Days / 4 Nights",
    price: 1850,
    groupSize: "2-12",
    lodgingType: "Luxury Safari Tented Camp",
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: [
      "Big Five tracking game drives in custom 4x4 Land Cruisers",
      "Great Migration crossings across the Mara River (seasonal)",
      "Sunrise hot air balloon safari with champagne bush breakfast",
      "Exclusive Maasai warrior village cultural immersion",
      "Golden hour sunset bush dining and sundowner cocktails",
    ],
    included: [
      "Full-board luxury tented suite accommodation",
      "Custom 4x4 Land Cruiser with pop-up roof & unlimited water",
      "Silver/Gold KPSGA certified professional safari guide",
      "All national reserve conservation & entrance fees",
      "AMREF Flying Doctors emergency medical evacuation cover",
      "Round-trip transfers from Nairobi (Wilson Airport/Hotel)",
    ],
    parkIds: ["masai-mara"],
  },
  {
    id: "amboseli-summit",
    title: "Amboseli & Kilimanjaro Views",
    description:
      "Camp beneath the snow-capped majesty of Mount Kilimanjaro while tracking Amboseli's colossal elephant herds and dramatic birdlife across open savannahs and freshwater springs.",
    duration: "4 Days / 3 Nights",
    price: 1450,
    groupSize: "2-10",
    lodgingType: "Panoramic Eco-Lodge",
    badge: "Iconic Scenery",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509728140741-3d70845b4452?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: [
      "Famous Amboseli elephant herds with Kilimanjaro backdrop",
      "Panoramic vistas from Observation Hill overlook",
      "Enkongo Narok swamp wildlife & flamingo sanctuary",
      "Photography-focused golden hour game drives",
      "Stargazing around an open boma campfire",
    ],
    included: [
      "Luxury canvas tented camp with private en-suite veranda",
      "Three gourmet chef-prepared meals daily & bush snacks",
      "Specialized 4x4 vehicle with bean bags for photography",
      "Dedicated professional naturalist guide & driver",
      "Park entrance and conservancy levies",
      "Complimentary flying doctor rescue insurance",
    ],
    parkIds: ["amboseli"],
  },
  {
    id: "samburu-explorer",
    title: "Samburu Special Five",
    description:
      "Journey north to the dramatic, rugged wilderness along the Ewaso Nyiro River to encounter rare endemic species: Grevy's zebra, reticulated giraffe, gerenuk, Somali ostrich, and beisa oryx.",
    duration: "4 Days / 3 Nights",
    price: 1600,
    groupSize: "2-8",
    lodgingType: "Riverside Heritage Lodge",
    badge: "Rare Wildlife",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: [
      "Tracking the Samburu 'Special Five' unique to Northern Kenya",
      "Ewaso Nyiro River elephant swimming crossings",
      "Authentic Samburu elder storytelling & cultural visit",
      "Guided walking safari along riverbanks with armed rangers",
      "Riverside lantern-lit bush dinner under ancient doum palms",
    ],
    included: [
      "Luxury thatched river-view chalets with private plunge pool",
      "Full-board farm-to-table cuisine",
      "Dedicated 4x4 open safari vehicle with charging docks",
      "Expert Samburu warrior ranger guide",
      "Community conservancy fees included",
    ],
    parkIds: ["samburu"],
  },
  {
    id: "diani-beach-safari",
    title: "Coast & Safari Combo",
    description:
      "The ultimate African vacation combining thrilling big game wilderness in Tsavo with powdery white sand beaches and turquoise warm waters along Diani's world-famous coastline.",
    duration: "7 Days / 6 Nights",
    price: 2800,
    groupSize: "2-14",
    lodgingType: "Safari Lodge + 5-Star Beach Villa",
    badge: "Bush & Beach",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509728140741-3d70845b4452?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: [
      "Tsavo red-dust elephants and Mudanda Rock game viewing",
      "Underwater hippo observation chamber at Mzima Springs",
      "Pristine beachfront relaxation on Diani Beach",
      "Dhow boat sailing & snorkeling at Kisite Marine Park",
      "Traditional Swahili seafood dinner by the ocean",
    ],
    included: [
      "3 Nights luxury safari lodge + 3 Nights 5-star beachfront resort",
      "All meals on safari and all-inclusive coastal package",
      "Private scenic transfers between parks and coastal villa",
      "Marine park dolphin safari excursion",
      "All park and marine reserve permits",
    ],
    parkIds: ["tsavo-east", "tsavo-west"],
  },
  {
    id: "lake-nakuru-flamingo",
    title: "Rift Valley Lakes & Nakuru",
    description:
      "Explore the Great Rift Valley wonders: pink flamingo-fringed lakes, rare black and white rhino sanctuaries, and scenic boat safaris alongside yawning pods of hippos.",
    duration: "3 Days / 2 Nights",
    price: 950,
    groupSize: "2-16",
    lodgingType: "Cliff-top Escarpment Lodge",
    badge: "Rhino Sanctuary",
    image: "https://images.unsplash.com/photo-1520690214124-2405c5217036?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: [
      "Thousands of flamingos and pelicans lining the alkaline lake",
      "Endangered black and white rhino tracking with rangers",
      "Sweeping panoramic vistas from Baboon Cliff viewpoint",
      "Lake Naivasha boat safari & Crescent Island walking safari",
      "Rift Valley geological formations and birdwatcher haven",
    ],
    included: [
      "Escarpment view boutique lodge with private balconies",
      "Full-board meals featuring local Kenyan produce",
      "Comfortable safari vehicle with pop-up photography roof",
      "Dedicated certified guide & park ranger",
      "All park admission and rhino sanctuary fees",
    ],
    parkIds: ["lake-nakuru"],
  },
  {
    id: "northern-kenya-odyssey",
    title: "Northern Kenya Odyssey",
    description:
      "Venture deep into Kenya's remote northern frontier — a land of volcanic craters, jade waters of Lake Turkana, desert-adapted elephants, and untouched wild landscapes far beyond crowds.",
    duration: "8 Days / 7 Nights",
    price: 3500,
    groupSize: "2-6",
    lodgingType: "Private Remote Expedition Camps",
    badge: "Wild Expedition",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: [
      "Tracking desert-adapted elephant herds in dry river valleys",
      "Exploration of Marsabit volcanic crater and misty forest",
      "Lake Turkana 'Jade Sea' shoreline and Turkana fishing culture",
      "Fly-camping under the equatorial Milky Way",
      "Scenic chartered light-aircraft flight back over Mount Kenya",
    ],
    included: [
      "Luxury mobile expedition camp with private chef & crew",
      "All meals, premium snacks, wines, and sundowners",
      "Heavy-duty specialized expedition 4x4 vehicles & satellite comms",
      "Armed Kenya Wildlife Service ranger escort & tribal guide",
      "Internal bush flight transfers included",
    ],
    parkIds: ["samburu"],
  },
];
