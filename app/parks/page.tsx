import type { Metadata } from "next";
import ParkCard from "../components/ParkCard";
import { parks } from "../data/parks";

export const metadata: Metadata = {
  title: "Parks & Reserves | Unknown Kenya",
  description:
    "Explore Kenya's most iconic national parks and reserves. From Masai Mara to Tsavo, discover the wildlife and landscapes that make Kenya extraordinary.",
};

export default function ParksPage() {
  return (
    <div>
      <section className="bg-earth text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Destinations
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Parks & Reserves
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Kenya is home to some of the most spectacular wildlife destinations
            on Earth. Explore our handpicked parks and reserves.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
