export interface Park {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
  gallery?: string[];
  area: string;
  famousFor: string[];
  wildlife: string[];
  bestTime: string;
  highlights: string;
}

export const parks: Park[] = [
  {
    id: "masai-mara",
    name: "Masai Mara National Reserve",
    region: "Narok County, Southwestern Kenya",
    description:
      "The Masai Mara is universally acclaimed as one of Africa's greatest wildlife sanctuaries. Spanning over 1,510 km² of undulating golden savannah, it is renowned for dense lion prides, cheetah coalitions, and the dramatic annual Great Migration crossing the Mara River.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
    ],
    area: "1,510 km²",
    famousFor: [
      "The Great Wildebeest Migration",
      "Big Five game viewing year-round",
      "Sunrise hot air balloon safaris",
      "Rich Maasai cultural heritage",
    ],
    wildlife: [
      "Lions",
      "Leopards",
      "Cheetahs",
      "African elephants",
      "Cape buffalo",
      "Wildebeest",
      "Zebras",
      "Giraffes",
      "Hippos",
      "Nile Crocodiles",
    ],
    bestTime: "July to October for the Great Migration; year-round for predator encounters",
    highlights: "The Mara River crossing during the Great Migration is one of the world's most dramatic wildlife spectacles.",
  },
  {
    id: "amboseli",
    name: "Amboseli National Park",
    region: "Kajiado County, Southern Kenya",
    description:
      "Crowned by Mount Kilimanjaro — the highest peak in Africa — Amboseli offers one of the most iconic safari vistas on earth. Vast herds of massive tuskers wander across dry lake beds and lush swamps fed by subterranean melting snows.",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509728140741-3d70845b4452?auto=format&fit=crop&w=1000&q=80"
    ],
    area: "392 km²",
    famousFor: [
      "Free-ranging giant elephant herds with Kilimanjaro backdrop",
      "Observation Hill 360-degree panoramic lookout",
      "Enkongo Narok & Olokenya swamp ecosystems",
      "Over 420 recorded avian bird species",
    ],
    wildlife: [
      "African elephants",
      "Lions",
      "Cheetahs",
      "Spotted hyenas",
      "Maasai giraffes",
      "Zebras",
      "Wildebeest",
      "Pelicans & Kingfishers",
    ],
    bestTime: "June to October (dry season) for pristine Kilimanjaro clarity and animal concentrations",
    highlights: "Watching hundred-strong elephant herds stride in single file against snow-capped Kilimanjaro at sunrise.",
  },
  {
    id: "samburu",
    name: "Samburu National Reserve",
    region: "Samburu County, Northern Kenya",
    description:
      "A rugged, arid sanctuary carved by the winding Ewaso Nyiro River. Samburu is famous for harboring the rare 'Samburu Special Five' found only north of the equator, offering tranquil, exclusive game tracks devoid of crowds.",
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1000&q=80"
    ],
    area: "165 km²",
    famousFor: [
      "The endemic Samburu Special Five",
      "Reticulated giraffes & Grevy's zebras",
      "Pristine wilderness along Ewaso Nyiro river",
      "Samburu warrior pastoralist traditions",
    ],
    wildlife: [
      "Grevy's zebra",
      "Reticulated giraffe",
      "Somali ostrich",
      "Gerenuk (long-necked antelope)",
      "Beisa oryx",
      "Elephants",
      "Leopards",
      "Wild dogs",
    ],
    bestTime: "June to October and December to March for dry-season river wildlife gatherings",
    highlights: "Watching graceful gerenuks standing on their hind legs to feed on thorn trees and leopards dozing in riverside figs.",
  },
  {
    id: "tsavo-east",
    name: "Tsavo East National Park",
    region: "Coast / Eastern Kenya",
    description:
      "One of the oldest and largest national parks in Kenya, Tsavo East is celebrated for its sweeping golden savannahs, massive herds of 'red elephants' dusted with volcanic soil, Mudanda Rock, and the historic Galana River.",
    image: "https://images.unsplash.com/photo-1509728140741-3d70845b4452?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80"
    ],
    area: "13,747 km²",
    famousFor: [
      "Dust-red elephant herds",
      "Yatta Plateau (world's longest lava flow)",
      "Mudanda Rock natural water catchment",
      "Lugard Falls churning river rapids",
    ],
    wildlife: [
      "Elephants",
      "Lions",
      "Leopards",
      "Cape buffalo",
      "Waterbucks",
      "Lesser kudu",
      "Gerenuk",
      "Crocodiles",
    ],
    bestTime: "June to October and January to February when animals congregate around permanent waterholes",
    highlights: "The sheer untamed scale of Tsavo and seeing whole elephant families bathing in bright red terracotta dust.",
  },
  {
    id: "tsavo-west",
    name: "Tsavo West National Park",
    region: "Coast / Southwestern Kenya",
    description:
      "Characterized by dramatic volcanic cones, lush acacia woodlands, and crystalline Mzima Springs where fifty million gallons of filtered spring water gush daily from Chyulu Hills, providing crystal underwater views of hippos.",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
    ],
    area: "9,065 km²",
    famousFor: [
      "Mzima Springs underwater observation hide",
      "Ngulia Rhino Sanctuary conservation haven",
      "Shetani black lava flows and caves",
      "Chyulu Hills scenic backdrop",
    ],
    wildlife: [
      "Black rhinos",
      "Hippos",
      "Nile crocodiles",
      "Lions",
      "Leopards",
      "Buffalos",
      "Klipspringers",
      "Over 600 bird species",
    ],
    bestTime: "June to October for wildlife sightings and dry conditions",
    highlights: "Descending into the submerged glass hide at Mzima Springs to watch massive hippos effortlessly glide underwater.",
  },
  {
    id: "lake-nakuru",
    name: "Lake Nakuru National Park",
    region: "Rift Valley Province, Central Kenya",
    description:
      "Encircled by wooded grasslands and rocky cliffs in the Great Rift Valley floor, Lake Nakuru is a world-class sanctuary for both endangered black and white rhinos, as well as a haven for millions of feeding pink flamingos.",
    image: "https://images.unsplash.com/photo-1520690214124-2405c5217036?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80"
    ],
    area: "188 km²",
    famousFor: [
      "Endangered black and white rhino sanctuary",
      "Massive flocks of lesser and greater flamingos",
      "Baboon Cliff & Lion Hill scenic lookouts",
      "Makalia Falls and yellow-barked acacia forest",
    ],
    wildlife: [
      "White rhinos",
      "Black rhinos",
      "Rothschild's giraffes",
      "Lions",
      "Leopards",
      "Flamingos",
      "Great white pelicans",
      "Waterbucks",
    ],
    bestTime: "Year-round; January to March and July to October offer sunny days and crisp lake views",
    highlights: "Witnessing grazing white rhinos alongside a neon pink shore of tens of thousands of feeding flamingos.",
  },
];
