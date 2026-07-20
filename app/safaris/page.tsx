import type { Metadata } from "next";
import SafariCard from "../components/SafariCard";
import { safaris } from "../data/safaris";

export const metadata: Metadata = {
  title: "Safaris | Unknown Kenya",
  description:
    "Browse our range of safari packages across Kenya. From Masai Mara to Samburu, find the perfect safari for your African adventure.",
};

export default function SafarisPage() {
  return (
    <div>
      <section className="bg-earth text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Our Packages
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Safari Packages
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Choose from our carefully crafted safari itineraries, each designed
            to give you an unforgettable Kenyan experience.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
