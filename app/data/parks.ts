export interface Park {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
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
      "The Masai Mara is one of the most famous wildlife reserves in the world. Spanning over 1,500 km² of rolling savannah, it is renowned for its exceptional populations of lions, leopards, and cheetahs, and the annual Great Migration of wildebeest, zebra, and Thomson's gazelle from the Serengeti.",
    image: "/parks/masai-mara.jpg",
    area: "1,510 km²",
    famousFor: [
      "The Great Migration",
      "Big Five game viewing",
      "Hot air balloon safaris",
      "Maasai cultural experiences",
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
      "Crocodiles",
    ],
    bestTime: "July to October for the Great Migration; year-round for general game viewing",
    highlights: "The Mara River crossing during the Great Migration is one of nature's most dramatic spectacles.",
  },
  {
    id: "amboseli",
    name: "Amboseli National Park",
    region: "Kajiado County, Southern Kenya",
    description:
      "Famous for its large elephant herds and stunning views of Mount Kilimanjaro — Africa's highest peak — Amboseli offers one of the most iconic safari backdrops on the continent. The park's varied landscapes include dried lake beds, swamps, and open plains.",
    image: "/parks/amboseli.jpg",
    area: "392 km²",
    famousFor: [
      "Elephants with Kilimanjaro backdrop",
      "Birdwatching paradise",
      "Observation Hill panoramic views",
      "Swamp ecosystem",
    ],
    wildlife: [
      "African elephants",
      "Lions",
      "Cheetahs",
      "Hyenas",
      "Giraffes",
      "Zebras",
      "Wildebeest",
      "Over 400 bird species",
    ],
    bestTime: "June to October (dry season) for best wildlife viewing and Kilimanjaro views",
    highlights: "Watching elephants stroll across the plains with snow-capped Kilimanjaro towering behind is unforgettable.",
  },
  {
    id: "samburu",
    name: "Samburu National Reserve",
    region: "Samburu County, Northern Kenya",
    description:
      "Samburu is a rugged, semi-arid wilderness along the banks of the Ewaso Nyaro River. It is famous for the Samburu Special Five — rare species found only in northern Kenya — and offers an exclusive, off-the-beaten-path safari experience.",
    image: "/parks/samburu.jpg",
    area: "165 km²",
    famousFor: [
      "The Samburu Special Five",
      "Reticulated giraffes",
      "Grevy's zebras",
      "Pristine wilderness",
    ],
    wildlife: [
      "Grevy's zebra",
      "Reticulated giraffe",
      "Somali ostrich",
      "Gerenuk",
      "Beisa oryx",
      "Elephants",
      "Lions",
      "Leopards",
      "Wild dogs",
    ],
    bestTime: "June to October during the dry season; also good from January to March",
    highlights: "Samburu offers some of the most exclusive safari experiences in Kenya with far fewer tourists.",
  },
  {
    id: "tsavo-east",
    name: "Tsavo East National Park",
    region: "Coastal Province, Southeastern Kenya",
    description:
      "One of the oldest and largest parks in Kenya, Tsavo East is famous for its red-dust elephants, the Mudanda Rock, and the Lugard Falls. Its flat, open plains make it ideal for spotting wildlife.",
    image: "/parks/tsavo-east.jpg",
    area: "13,747 km²",
    famousFor: [
      "Red elephants",
      "Mudanda Rock",
      "Lugard Falls",
      "Yatta Plateau",
    ],
    wildlife: [
      "Elephants",
      "Lions",
      "Leopards",
      "Buffalo",
      "Giraffes",
      "Zebras",
      "Hippos",
      "Crocodiles",
      "Over 500 bird species",
    ],
    bestTime: "June to October (dry season) when animals gather at water sources",
    highlights: "The vastness of Tsavo East gives you a true sense of Africa's wild, untamed beauty.",
  },
  {
    id: "tsavo-west",
    name: "Tsavo West National Park",
    region: "Coastal Province, Southeastern Kenya",
    description:
      "Tsavo West is more mountainous and varied than its eastern counterpart, with lush vegetation, volcanic landscapes, and the crystal-clear Mzima Springs where hippos and crocodiles can be viewed underwater.",
    image: "/parks/tsavo-west.jpg",
    area: "9,065 km²",
    famousFor: [
      "Mzima Springs underwater viewing",
      "Volcanic landscape",
      "Shetani lava flows",
      "Rich birdlife",
    ],
    wildlife: [
      "Elephants",
      "Rhinos",
      "Lions",
      "Leopards",
      "Buffalo",
      "Hippos",
      "Crocodiles",
      "Diverse birdlife",
    ],
    bestTime: "June to October for dry season game viewing; January to February for migratory birds",
    highlights: "Mzima Springs' underwater observation chamber offers a mesmerizing view of hippos swimming overhead.",
  },
  {
    id: "lake-nakuru",
    name: "Lake Nakuru National Park",
    region: "Rift Valley Province, Central Kenya",
    description:
      "A sanctuary for both black and white rhinos, Lake Nakuru is also world-famous for its vast flocks of flamingos that paint the lakeshore pink. The park sits in the heart of the Great Rift Valley.",
    image: "/parks/nakuru.jpg",
    area: "188 km²",
    famousFor: [
      "Flamingo flocks",
      "Rhino sanctuary",
      "Baboon Cliff viewpoint",
      "Rift Valley scenery",
    ],
    wildlife: [
      "White rhinos",
      "Black rhinos",
      "Lions",
      "Leopards",
      "Giraffes",
      "Buffalo",
      "Waterbucks",
      "Flamingos",
      "Pelicans",
      "Over 450 bird species",
    ],
    bestTime: "Year-round; best flamingo viewing from January to June",
    highlights: "The sight of thousands of flamingos lining the lake shore is one of Kenya's most iconic images.",
  },
];
