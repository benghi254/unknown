import type { Metadata } from "next";
import ParkCard from "../components/ParkCard";
import { parks } from "../data/parks";

export const metadata: Metadata = {
  title: "National Parks & Game Reserves | Unknown Kenya",
  description:
    "Explore Kenya's world-famous wildlife sanctuaries: Masai Mara, Amboseli, Samburu, Tsavo East, Tsavo West, and Lake Nakuru.",
};

export default function ParksPage() {
  return (
    <div>
      {/* Hero Banner with Web Image */}
      <section className="relative min-h-[42vh] flex flex-col justify-end bg-stone-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=2000&q=80"
            alt="Kenyan National Parks and Wildlife"
            className="w-full h-full object-cover opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block bg-accent/20 border border-accent/40 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            🌍 Wildlife Sanctuaries
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            National Parks & Reserves
          </h1>
          <p className="mt-4 text-stone-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            From the endless savannahs of the Masai Mara to the shadow of Mount
            Kilimanjaro and the volcanic springs of Tsavo. Discover where Kenya&apos;s
            wildlife roams free.
          </p>
        </div>
      </section>

      {/* Parks Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10 pb-4 border-b border-sand/60">
            <div>
              <h2 className="text-2xl font-bold text-earth">
                Featured Wilderness Sanctuaries ({parks.length})
              </h2>
              <p className="text-xs sm:text-sm text-earth-light/60 mt-0.5">
                Protected habitats curated for Big Five sightings and pristine biodiversity.
              </p>
            </div>
            <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mt-2 sm:mt-0">
              KWS Protected Conservancies
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {parks.map((park) => (
              <ParkCard key={park.id} park={park} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
