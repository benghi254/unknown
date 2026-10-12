import type { Metadata } from "next";
import SafariCard from "../components/SafariCard";
import { safaris } from "../data/safaris";

export const metadata: Metadata = {
  title: "Safari Packages | Unknown Kenya",
  description:
    "Browse our range of all-inclusive safari packages across Kenya. From the legendary Masai Mara to Amboseli and Samburu, experience authentic wild Africa.",
};

export default function SafarisPage() {
  return (
    <div>
      {/* Hero Banner with Web Image */}
      <section className="relative min-h-[42vh] flex flex-col justify-end bg-stone-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80"
            alt="Safari In Kenya"
            className="w-full h-full object-cover opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block bg-accent/20 border border-accent/40 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            ✨ Handcrafted Itineraries
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Kenyan Safari Packages
          </h1>
          <p className="mt-4 text-stone-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            All-inclusive small group and private safaris. Custom 4x4 Land Cruisers,
            guaranteed window seats, five-star tented luxury, and AMREF Flying
            Doctors emergency air evacuation included.
          </p>
        </div>
      </section>

      {/* Safari Packages Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10 pb-4 border-b border-sand/60">
            <div>
              <h2 className="text-2xl font-bold text-earth">
                Available Departures ({safaris.length})
              </h2>
              <p className="text-xs sm:text-sm text-earth-light/60 mt-0.5">
                Each package can be booked as-is or tailored to your bespoke dates.
              </p>
            </div>
            <span className="text-xs font-semibold text-safari-green bg-safari-green/10 px-3 py-1 rounded-full mt-2 sm:mt-0">
              ✓ 100% Guaranteed Departures
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {safaris.map((safari) => (
              <SafariCard key={safari.id} safari={safari} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
