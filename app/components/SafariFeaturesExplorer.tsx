"use client";

import React, { useState } from "react";

interface FeatureCategory {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  image: string;
  features: {
    title: string;
    description: string;
    highlight: string;
  }[];
}

const featureCategories: FeatureCategory[] = [
  {
    id: "vehicles",
    name: "Safari Fleet & 4x4",
    icon: "🚙",
    tagline: "Purpose-Built 4x4 Safari Land Cruisers Engineered for the Wild",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "360° Pop-Up Photography Roof",
        description:
          "Custom pop-up roofs allow unobstructed standing views and 360-degree photography of lions, cheetahs, and migrating herds.",
        highlight: "Ideal for telephoto lenses",
      },
      {
        title: "Guaranteed Window Seat",
        description:
          "We cap our 4x4 Cruisers at maximum 6 travelers so every single guest has a dedicated window seat with panoramic visibility.",
        highlight: "100% Window Seating",
      },
      {
        title: "On-Board Power & Charging Stations",
        description:
          "Individual 220V European/UK plug sockets and USB ports at each seat keep your cameras, phones, and drones fully charged in the bush.",
        highlight: "Continuous Device Power",
      },
      {
        title: "Chilled Cooler Box & Refreshments",
        description:
          "Vehicles feature an on-board refrigeration unit stocked with unlimited chilled mineral water, soft drinks, and safari snacks.",
        highlight: "Complimentary Hydration",
      },
    ],
  },
  {
    id: "lodges",
    name: "Luxury Accommodation",
    icon: "🏕️",
    tagline: "Handcrafted Tented Suites & 5-Star Eco-Lodges in Prime Wildlife Corridors",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "En-Suite Luxury Canvas Suites",
        description:
          "Spacious walk-in safari tents featuring handcrafted cedar furniture, king-size beds, and private timber verandas looking over the savannah.",
        highlight: "Five-Star Comfort",
      },
      {
        title: "Private Solar Hot Water & Rain Showers",
        description:
          "Enjoy hot solar-heated showers and modern flush toilets inside your en-suite bathroom after an exhilarating day on game drives.",
        highlight: "Eco-Conscious Luxury",
      },
      {
        title: "Savannah Infinity Plunge Pools",
        description:
          "Relax between game drives in scenic infinity pools overlooking active wildlife watering holes and riverbeds.",
        highlight: "Plunge with Wildlife Views",
      },
      {
        title: "Nightly Campfire & Turndown",
        description:
          "Nightly bed warming with hot water bottles and gatherings around the Maasai boma campfire beneath star-filled African skies.",
        highlight: "Authentic Bush Magic",
      },
    ],
  },
  {
    id: "dining",
    name: "Bush Dining & Cuisine",
    icon: "🍷",
    tagline: "Gourmet Wilderness Gastronomy Prepared by Private Safari Chefs",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "Champagne Bush Breakfast",
        description:
          "After an early morning game drive or hot air balloon flight, sit down to a white-tablecloth breakfast set up under an acacia tree.",
        highlight: "Cooked to order in the wild",
      },
      {
        title: "Panoramic Sunset Sundowners",
        description:
          "Toast the sunset with chilled drinks, artisanal hors d’oeuvres, and gin & tonics at handpicked viewpoint ridges across Kenya.",
        highlight: "Iconic African Tradition",
      },
      {
        title: "Chef-Crafted 3-Course Dinners",
        description:
          "Evenings feature candlelit multi-course dinners infused with fresh local Kenyan ingredients and international culinary flair.",
        highlight: "Farm-to-Table Dining",
      },
      {
        title: "All Dietary Needs Catered",
        description:
          "Full customization for vegetarian, vegan, gluten-free, halal, kosher-friendly, and allergy-sensitive requirements upon request.",
        highlight: "Tailored to You",
      },
    ],
  },
  {
    id: "guides",
    name: "Certified Guides & Rangers",
    icon: "🧭",
    tagline: "Gold & Silver KPSGA Field Naturalists with Lifelong Instincts",
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "Indigenous Maasai & Samburu Guides",
        description:
          "Guides born and raised in these lands who possess unmatched tracking instincts, reading animal tracks and calls with effortless precision.",
        highlight: "Generations of Knowledge",
      },
      {
        title: "KPSGA Certified Professionals",
        description:
          "Every guide is certified by the Kenya Professional Safari Guides Association, holding extensive knowledge in ecology, botany, and fauna.",
        highlight: "Silver & Gold Rated",
      },
      {
        title: "Dedicated Photography Support",
        description:
          "Guides know how to position vehicles with the sun at your back for optimal lighting and will stabilize beanbags for telephoto stability.",
        highlight: "Pro Photo Positioning",
      },
      {
        title: "Armed Ranger Guided Bush Walks",
        description:
          "Step down from the vehicle for safe walking safaris accompanied by Kenya Wildlife Service rangers to examine flora, insects, and tracks.",
        highlight: "Close-up Wilderness",
      },
    ],
  },
  {
    id: "safety",
    name: "Care & Inclusions",
    icon: "🛡️",
    tagline: "Every Detail Covered: Medical Evacuation, Park Permits & 24/7 Concierge",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        title: "AMREF Flying Doctors Coverage Included",
        description:
          "Every traveler is automatically enrolled with 24/7 emergency medical air evacuation coverage anywhere in Kenya.",
        highlight: "Zero Extra Cost",
      },
      {
        title: "All Park & Conservancy Fees Paid",
        description:
          "No hidden entrance fees or unexpected checkpoint charges — your package covers all statutory national park and conservancy levies.",
        highlight: "100% Transparent",
      },
      {
        title: "24/7 Dedicated Concierge",
        description:
          "From your Nairobi airport arrival to your final departure flight, your personal safari concierge coordinates every seamless detail.",
        highlight: "Round-the-Clock Support",
      },
      {
        title: "Direct Conservation Impact",
        description:
          "A portion of every booking funds community schooling, anti-poaching patrol equipment, and wildlife corridor conservation.",
        highlight: "Sustainable Travel",
      },
    ],
  },
];

export default function SafariFeaturesExplorer() {
  const [activeTab, setActiveTab] = useState<string>("vehicles");
  const activeCategory =
    featureCategories.find((c) => c.id === activeTab) || featureCategories[0];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-safari-green/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 px-4 py-1.5 rounded-full text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <span>✨ Complete Safari Inclusions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Features Provided in Our Safaris
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            From heavy-duty customized 4x4 Land Cruisers to luxury tented suites,
            champagne bush breakfasts, and Flying Doctors medical cover — every
            element is designed for an effortless, five-star wilderness journey.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {featureCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-stone-950 shadow-lg shadow-accent/25 scale-105 font-bold"
                    : "bg-stone-800/80 hover:bg-stone-700/80 text-stone-300 border border-white/10"
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-amber-300/20 shadow-2xl bg-stone-800 h-[380px] sm:h-[440px]">
              <img
                src={activeCategory.image}
                alt={activeCategory.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-accent/90 text-stone-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  {activeCategory.icon} Standard On Every Safari
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                  {activeCategory.name}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  {activeCategory.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inclusions Breakdown */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {activeCategory.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-stone-900/90 border border-white/10 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 text-accent flex items-center justify-center text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                      {feature.highlight}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-amber-200/70">
                  <svg
                    className="w-4 h-4 text-accent shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Included with no surcharge</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <p className="text-2xl font-bold text-accent">100%</p>
            <p className="text-xs text-stone-400 mt-1">Guaranteed Window Seat</p>
          </div>
          <div className="p-3">
            <p className="text-2xl font-bold text-accent">24/7</p>
            <p className="text-xs text-stone-400 mt-1">AMREF Flying Doctors</p>
          </div>
          <div className="p-3">
            <p className="text-2xl font-bold text-accent">Silver & Gold</p>
            <p className="text-xs text-stone-400 mt-1">KPSGA Certified Guides</p>
          </div>
          <div className="p-3">
            <p className="text-2xl font-bold text-accent">All Inclusive</p>
            <p className="text-xs text-stone-400 mt-1">Park Permits & Meals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
