export interface Safari {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  groupSize: string;
  image: string;
  highlights: string[];
  included: string[];
  parkIds: string[];
}

export const safaris: Safari[] = [
  {
    id: "masai-mara-adventure",
    title: "Masai Mara Adventure",
    description:
      "Experience the legendary Masai Mara National Reserve, home to the Great Migration and the Big Five. Witness breathtaking savannah landscapes and immerse yourself in Maasai culture.",
    duration: "5 Days / 4 Nights",
    price: 1850,
    groupSize: "2-12",
    image: "/safaris/masai-mara.jpg",
    highlights: [
      "Big Five game drives",
      "Great Migration viewing (seasonal)",
      "Maasai village visit",
      "Bush breakfast experience",
      "Sunset game drive",
    ],
    included: [
      "Full-board accommodation",
      "Transport in 4x4 Land Cruiser",
      "Professional guide",
      "Park entrance fees",
      "Airport transfers",
    ],
    parkIds: ["masai-mara"],
  },
  {
    id: "amboseli-summit",
    title: "Amboseli & Kilimanjaro Views",
    description:
      "Camp beneath the shadows of Mount Kilimanjaro while exploring Amboseli's vast elephant herds and dramatic landscapes. An iconic African safari experience.",
    duration: "4 Days / 3 Nights",
    price: 1450,
    groupSize: "2-10",
    image: "/safaris/amboseli.jpg",
    highlights: [
      "Elephant herds with Kilimanjaro backdrop",
      "Lake Naivasha boat ride",
      "Cultural Maasai visit",
      "Photography-focused game drives",
      "Stargazing night drives",
    ],
    included: [
      "Tented camp accommodation",
      "All meals",
      "4x4 safari vehicle",
      "Guide and driver",
      "Park fees",
    ],
    parkIds: ["amboseli"],
  },
  {
    id: "samburu-explorer",
    title: "Samburu Special Five",
    description:
      "Discover the unique Samburu ecosystem, home to the rare Special Five: Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk, and beisa oryx.",
    duration: "4 Days / 3 Nights",
    price: 1600,
    groupSize: "2-8",
    image: "/safaris/samburu.jpg",
    highlights: [
      "Samburu Special Five tracking",
      "Ewaso Nyaro River wildlife",
      "Samburu cultural immersion",
      "Walking safari with rangers",
      "Riverside bush dining",
    ],
    included: [
      "Luxury lodge accommodation",
      "Full-board meals",
      "Safari vehicle",
      "Expert Samburu guide",
      "Conservation fees",
    ],
    parkIds: ["samburu"],
  },
  {
    id: "diani-beach-safari",
    title: "Coast & Safari Combo",
    description:
      "Combine the best of Kenya's wildlife with its pristine Indian Ocean coastline. Start with a thrilling safari then unwind on white sand beaches of Diani.",
    duration: "7 Days / 6 Nights",
    price: 2800,
    groupSize: "2-14",
    image: "/safaris/diani.jpg",
    highlights: [
      "Tsavo East game drives",
      "Big Five spotting",
      "Diani Beach relaxation",
      "Snorkeling at Kisite Marine Park",
      "Swahili cultural tour",
    ],
    included: [
      "Safari lodge + beach hotel",
      "All meals during safari",
      "Full-board at beach",
      "Transfers between destinations",
      "Marine park excursion",
    ],
    parkIds: ["tsavo-east", "tsavo-west"],
  },
  {
    id: "lake-nakuru-flamingo",
    title: "Rift Valley Lakes & Nakuru",
    description:
      "Explore the stunning Great Rift Valley lakes, famous for flamingo flocks, rhino sanctuaries, and dramatic escarpment views.",
    duration: "3 Days / 2 Nights",
    price: 950,
    groupSize: "2-16",
    image: "/safaris/nakuru.jpg",
    highlights: [
      "Flamingo watching at Lake Nakuru",
      "White rhino tracking",
      "Rift Valley escarpment views",
      "Lake Naivasha boat safari",
      "Crescent Island walking safari",
    ],
    included: [
      "Lodge accommodation",
      "Full-board meals",
      "Safari van with pop-up roof",
      "Professional guide",
      "All park fees",
    ],
    parkIds: ["lake-nakuru"],
  },
  {
    id: "northern-kenya-odyssey",
    title: "Northern Kenya Odyssey",
    description:
      "Venture deep into Kenya's remote northern frontier — a land of volcanic landscapes, wild desert elephants, and untouched wilderness far from the crowds.",
    duration: "8 Days / 7 Nights",
    price: 3500,
    groupSize: "2-6",
    image: "/safaris/northern.jpg",
    highlights: [
      "Desert-adapted elephant tracking",
      "Marsabit volcanic crater",
      "Lake Turkana jade waters",
      "Samburu and Turkana cultural visits",
      "Fly-camping under the stars",
    ],
    included: [
      "Mixed lodge and tented camp",
      "All meals and drinks",
      "Specialist 4x4 vehicles",
      "Armed ranger escort",
      "Internal flight transfers",
    ],
    parkIds: ["samburu"],
  },
];
