import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { parks } from "@/app/data/parks";

export function generateStaticParams() {
  return parks.map((park) => ({ id: park.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const park = parks.find((p) => p.id === id);
  if (!park) return { title: "Park Not Found" };
  return {
    title: `${park.name} | Unknown Kenya Parks`,
    description: park.description,
  };
}

export default async function ParkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const park = parks.find((p) => p.id === id);
  if (!park) notFound();

  return (
    <div>
      {/* Hero with Web Image */}
      <section className="relative min-h-[50vh] flex flex-col justify-end bg-stone-950 text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={park.image}
            alt={park.name}
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link
            href="/parks"
            className="text-amber-300 hover:text-white text-xs font-semibold mb-4 inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 transition-colors"
          >
            &larr; Back to All Parks
          </Link>
          <div className="flex flex-wrap items-center gap-2 mt-2 mb-2">
            <span className="bg-accent text-stone-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {park.area}
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">
              📍 {park.region}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            {park.name}
          </h1>
          <p className="mt-4 text-stone-200 text-base sm:text-lg max-w-3xl leading-relaxed drop-shadow">
            {park.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Photo Gallery Grid */}
              {park.gallery && park.gallery.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-sm">
                  <h2 className="text-xl font-bold text-earth mb-4">
                    Landscape & Wildlife Gallery
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {park.gallery.map((imgUrl, i) => (
                      <div
                        key={i}
                        className="relative h-36 sm:h-44 rounded-2xl overflow-hidden group shadow-sm"
                      >
                        <img
                          src={imgUrl}
                          alt={`${park.name} gallery ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Facts */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-sm">
                <h2 className="text-xl font-bold text-earth mb-4">
                  Quick Facts & Seasonality
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-sand/30 rounded-2xl border border-sand/50">
                    <span className="text-xs text-earth-light/60 font-semibold uppercase tracking-wider">
                      Protected Reserve Area
                    </span>
                    <p className="text-2xl font-extrabold text-earth mt-1">
                      {park.area}
                    </p>
                  </div>
                  <div className="p-4 bg-sand/30 rounded-2xl border border-sand/50">
                    <span className="text-xs text-earth-light/60 font-semibold uppercase tracking-wider">
                      Prime Visiting Window
                    </span>
                    <p className="text-sm font-bold text-earth mt-1 leading-snug">
                      {park.bestTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Wildlife Found Here */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-sm">
                <h2 className="text-xl font-bold text-earth mb-4 flex items-center gap-2">
                  <span>🐾</span> Iconic Wildlife in {park.name}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {park.wildlife.map((animal) => (
                    <span
                      key={animal}
                      className="px-4 py-2 bg-safari-green/10 text-safari-green text-sm font-semibold rounded-full border border-safari-green/20"
                    >
                      {animal}
                    </span>
                  ))}
                </div>
              </div>

              {/* Famous For */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-sm">
                <h2 className="text-xl font-bold text-earth mb-4 flex items-center gap-2">
                  <span>⭐</span> Key Highlights & Experiences
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {park.famousFor.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-sand/20 border border-sand/40"
                    >
                      <span className="w-5 h-5 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center shrink-0 text-xs">
                        ✓
                      </span>
                      <span className="text-earth text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlight callout */}
              <div className="bg-accent/15 rounded-3xl p-6 sm:p-8 border border-accent/30">
                <h3 className="text-lg font-bold text-earth mb-2 flex items-center gap-2">
                  <span>✨</span> Naturalist Notes
                </h3>
                <p className="text-earth-light/90 leading-relaxed text-sm sm:text-base">
                  {park.highlights}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-xl">
                <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                  Ready to Visit?
                </span>
                <h3 className="text-2xl font-bold text-earth mb-3">
                  Incorporate {park.name}
                </h3>
                <p className="text-xs sm:text-sm text-earth-light/70 mb-6 leading-relaxed">
                  We custom design private itineraries combining {park.name} with
                  luxury lodge stays and scenic bush flights.
                </p>

                <div className="space-y-3">
                  <Link
                    href={`/contact?safari=${encodeURIComponent(park.name)}`}
                    className="block w-full text-center px-6 py-4 bg-accent hover:bg-accent-dark text-stone-950 font-bold rounded-full transition-all shadow-md text-sm"
                  >
                    Custom Itinerary Request &rarr;
                  </Link>
                  <a
                    href={`https://wa.me/254718832191?text=${encodeURIComponent(
                      `Hello! I'd like to plan a visit to ${park.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-full transition-all text-xs"
                  >
                    💬 WhatsApp Safari Planner
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
