"use client";

import React, { useState } from "react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  category: "wildlife" | "resorts" | "activities";
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  location: string;
  details: string;
}

const galleryItems: GalleryItem[] = [
  // Wildlife
  {
    id: "g-lion",
    category: "wildlife",
    title: "Black-Maned Lions",
    subtitle: "Rulers of the Masai Mara Plains",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
    tag: "Big Five",
    location: "Masai Mara National Reserve",
    details:
      "Watch apex predator lion prides stalk wildebeest herds across the open savannah during early morning and late afternoon game drives.",
  },
  {
    id: "g-elephant",
    category: "wildlife",
    title: "Giant Amboseli Tuskers",
    subtitle: "Magnificent Herds Under Mount Kilimanjaro",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
    tag: "Big Five",
    location: "Amboseli National Park",
    details:
      "Witness some of the last legendary 'super tuskers' with ivory grazing the ground, strolling through freshwater marshes fed by Kilimanjaro.",
  },
  {
    id: "g-cheetah",
    category: "wildlife",
    title: "Fastest Land Mammal",
    subtitle: "Cheetah Coalitions on Termite Mounds",
    image:
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1200&q=80",
    tag: "Predator",
    location: "Mara Triangle & Samburu",
    details:
      "Spot sleek cheetahs using termite mounds as lookout vantage points before unleashing blistering 100 km/h bursts across the grassland.",
  },
  {
    id: "g-leopard",
    category: "wildlife",
    title: "The Elusive Acacia Leopard",
    subtitle: "Master of African Camouflage",
    image:
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1200&q=80",
    tag: "Big Five",
    location: "Samburu & Tsavo West",
    details:
      "Search the leafy boughs of yellow-fever acacia trees where leopards rest during the heat of midday, guarding their hard-earned prey.",
  },
  {
    id: "g-rhino",
    category: "wildlife",
    title: "Prehistoric Rhinoceros",
    subtitle: "Protected in Lake Nakuru Sanctuary",
    image:
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
    tag: "Big Five",
    location: "Lake Nakuru & Ol Pejeta",
    details:
      "Track both critically endangered black rhinos and majestic white rhinos safely under the protection of 24/7 dedicated rangers.",
  },
  {
    id: "g-flamingo",
    category: "wildlife",
    title: "Pink Flamingo Spectacle",
    subtitle: "Rift Valley Alkaline Shimmer",
    image:
      "https://images.unsplash.com/photo-1520690214124-2405c5217036?auto=format&fit=crop&w=1200&q=80",
    tag: "Avian Haven",
    location: "Lake Nakuru & Lake Bogoria",
    details:
      "Behold hundreds of thousands of feeding flamingos transforming the lake’s shoreline into a vibrant shimmering sea of electric pink.",
  },

  // Holiday Resorts & Lodges
  {
    id: "g-resort-tent",
    category: "resorts",
    title: "Eco-Luxury Tented Suites",
    subtitle: "Canvas Glamping with Five-Star Amenities",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    tag: "Tented Camp",
    location: "Masai Mara Riverfront",
    details:
      "Sleep enveloped in luxury safari canvas on king orthopedic beds, with timber decks overlooking pods of hippos below.",
  },
  {
    id: "g-resort-pool",
    category: "resorts",
    title: "Savannah Infinity Pools",
    subtitle: "Swim Alongside Grazing Wildlife",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    tag: "Infinity Pool",
    location: "Kilimanjaro View Lodge",
    details:
      "Sip handcrafted cocktails in crystal infinity plunge pools positioned right before active game trails and watering holes.",
  },
  {
    id: "g-resort-dining",
    category: "resorts",
    title: "Candlelit Wilderness Supper",
    subtitle: "Starlit Dining Under African Constellations",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    tag: "Bush Gastronomy",
    location: "Private Conservancies",
    details:
      "Gourmet multi-course cuisine curated by private safari chefs, lit by paraffin hurricane lanterns and the Milky Way.",
  },
  {
    id: "g-resort-beach",
    category: "resorts",
    title: "Diani Beachfront Villas",
    subtitle: "Indian Ocean Post-Safari Retreat",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    tag: "Coastal Luxury",
    location: "Diani Beach Coastline",
    details:
      "Unwind after thrilling dusty game drives on Kenya’s soft white sands, coconut palms, and crystal turquoise waters.",
  },

  // Safari Activities
  {
    id: "g-act-balloon",
    category: "activities",
    title: "Dawn Hot Air Ballooning",
    subtitle: "Floating Silently Over the Great Migration",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tag: "Iconic Flight",
    location: "Masai Mara Plains",
    details:
      "Ascend at first light to float with the wind above galloping herds, concluding with a celebratory champagne bush breakfast.",
  },
  {
    id: "g-act-cruiser",
    category: "activities",
    title: "Open 4x4 Game Drives",
    subtitle: "Custom Land Cruisers with Pop-Up Roofs",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    tag: "Game Drive",
    location: "All National Reserves",
    details:
      "Equipped with VHF animal tracking radios, pop-up roofs, camera bean bags, and high-clearance 4WD for deep wilderness access.",
  },
  {
    id: "g-act-walk",
    category: "activities",
    title: "Guided Bush Walks",
    subtitle: "On Foot with Armed Naturalist Rangers",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    tag: "Walking Safari",
    location: "Crescent Island & Samburu",
    details:
      "Feel the raw pulse of the wild underfoot, learning animal tracking, medicinal plants, and insect ecology safely with rangers.",
  },
  {
    id: "g-act-culture",
    category: "activities",
    title: "Maasai Village Encounters",
    subtitle: "Authentic Tribal Songs, Dances & Culture",
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1200&q=80",
    tag: "Culture",
    location: "Maasai Manyatta Bomas",
    details:
      "Learn traditional fire-making, beadwork craft, and warrior jumping dances directly from the pastoralist custodians of Kenya.",
  },
];

export default function WildlifeActivitiesShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "wildlife" | "resorts" | "activities">("all");
  const [activeModal, setActiveModal] = useState<GalleryItem | null>(null);

  const filtered =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full">
            🦁 Wildlife • 🏨 Resorts • 🎈 Activities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-earth mt-3">
            Wildlife Encounters & Holiday Resorts
          </h2>
          <p className="mt-4 text-earth-light/70 text-base sm:text-lg leading-relaxed">
            Experience the rich tapestry of Kenyan safaris — from heart-pounding
            big cat sightings to world-class holiday lodges and breathtaking
            dawn hot air balloon flights.
          </p>

          {/* Interactive filter buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Wonders" },
              { id: "wildlife", label: "🐾 Big Five Wildlife" },
              { id: "resorts", label: "🏕️ Holiday Resorts & Lodges" },
              { id: "activities", label: "🎈 Safari Activities" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-earth text-white shadow-md scale-105"
                    : "bg-sand/40 text-earth hover:bg-sand"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModal(item)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-sand shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col transform hover:-translate-y-1.5"
            >
              <div className="relative h-64 overflow-hidden bg-earth/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-transparent to-black/20 pointer-events-none" />

                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-amber-200 text-xs font-semibold px-3 py-1 rounded-full border border-amber-300/30">
                  {item.tag}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-extrabold text-lg text-white group-hover:text-amber-300 transition-colors drop-shadow">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs truncate">
                    📍 {item.location}
                  </p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-earth-light/80 line-clamp-2 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-sand/60 flex items-center justify-between text-xs">
                  <span className="text-earth-light/60 font-medium">Click to inspect</span>
                  <span className="text-accent font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-sand relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center text-sm hover:bg-black transition-colors"
            >
              ✕
            </button>

            <div className="relative h-72 sm:h-80 w-full">
              <img
                src={activeModal.image}
                alt={activeModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-accent text-stone-950 text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wider mb-2 inline-block">
                  {activeModal.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">{activeModal.title}</h3>
                <p className="text-amber-200 text-xs sm:text-sm mt-0.5">📍 {activeModal.location}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h4 className="text-lg font-bold text-earth mb-2">{activeModal.subtitle}</h4>
              <p className="text-sm text-earth-light/80 leading-relaxed mb-6">
                {activeModal.details}
              </p>

              <div className="p-4 bg-sand/30 rounded-2xl border border-sand/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-earth-light/60 block">Experience This Moment</span>
                  <p className="text-sm font-bold text-earth">Included in our handcrafted safari packages</p>
                </div>
                <Link
                  href="/safaris"
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-stone-950 text-xs font-bold rounded-full transition-all shrink-0"
                >
                  Explore Safaris &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
