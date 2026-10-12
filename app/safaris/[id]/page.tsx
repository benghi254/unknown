import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { safaris } from "@/app/data/safaris";
import { parks } from "@/app/data/parks";

export function generateStaticParams() {
  return safaris.map((safari) => ({ id: safari.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const safari = safaris.find((s) => s.id === id);
  if (!safari) return { title: "Safari Not Found" };
  return {
    title: `${safari.title} | Unknown Kenya Safaris`,
    description: safari.description,
  };
}

export default async function SafariDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const safari = safaris.find((s) => s.id === id);
  if (!safari) notFound();

  const safariParks = parks.filter((p) => safari.parkIds.includes(p.id));

  return (
    <div>
      {/* Hero Section with High-Res Web Image */}
      <section className="relative min-h-[50vh] flex flex-col justify-end bg-stone-950 text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={safari.image}
            alt={safari.title}
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link
            href="/safaris"
            className="text-amber-300 hover:text-white text-xs font-semibold mb-4 inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 transition-colors"
          >
            &larr; Back to All Safaris
          </Link>
          <div className="flex flex-wrap items-center gap-2 mt-2 mb-3">
            <span className="bg-accent text-stone-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {safari.duration}
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">
              {safari.lodgingType}
            </span>
            {safari.badge && (
              <span className="bg-amber-400 text-stone-950 text-xs font-bold px-3 py-1 rounded-full">
                ★ {safari.badge}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            {safari.title}
          </h1>
          <p className="mt-4 text-stone-200 text-base sm:text-lg max-w-3xl leading-relaxed drop-shadow">
            {safari.description}
          </p>
        </div>
      </section>

      {/* Main Details and Booking Sidebar */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Photo Gallery Grid from the Web */}
              {safari.gallery && safari.gallery.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-sm">
                  <h2 className="text-xl font-bold text-earth mb-4">
                    Photo Highlights & Lodging
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {safari.gallery.map((imgUrl, i) => (
                      <div
                        key={i}
                        className="relative h-36 sm:h-44 rounded-2xl overflow-hidden group shadow-sm"
                      >
                        <img
                          src={imgUrl}
                          alt={`${safari.title} moment ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-sm">
                <h2 className="text-xl font-bold text-earth mb-4 flex items-center gap-2">
                  <span>🦁</span> Safari Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {safari.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-sand/30 border border-sand/50"
                    >
                      <svg
                        className="w-5 h-5 text-accent mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-earth text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-sm">
                <h2 className="text-xl font-bold text-earth mb-4 flex items-center gap-2">
                  <span>✨</span> What&apos;s Included In Your Package
                </h2>
                <ul className="space-y-3">
                  {safari.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-earth-light/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Parks visited */}
              {safariParks.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-sm">
                  <h2 className="text-xl font-bold text-earth mb-4">
                    Parks & Reserves Visited
                  </h2>
                  <div className="space-y-4">
                    {safariParks.map((park) => (
                      <Link
                        key={park.id}
                        href={`/parks/${park.id}`}
                        className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-sand hover:border-accent/40 transition-all hover:shadow-md group"
                      >
                        <div className="w-full sm:w-36 h-24 rounded-xl overflow-hidden shrink-0">
                          <img
                            src={park.image}
                            alt={park.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-earth group-hover:text-accent transition-colors">
                            {park.name}
                          </h3>
                          <p className="text-xs text-earth-light/60 mt-1 line-clamp-2">
                            {park.highlights}
                          </p>
                          <span className="text-xs text-accent font-semibold mt-2 inline-block">
                            View Park Details &rarr;
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Booking Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-xl">
                <div className="text-center pb-6 border-b border-sand/60">
                  <span className="text-xs text-earth-light/60 uppercase tracking-widest font-semibold">
                    All-Inclusive Starting From
                  </span>
                  <p className="text-4xl font-extrabold text-safari-green mt-1">
                    ${safari.price.toLocaleString()}
                  </p>
                  <span className="text-xs text-earth-light/60">
                    USD per person (double occupancy)
                  </span>
                </div>

                <div className="space-y-3 py-6 text-sm border-b border-sand/60">
                  <div className="flex items-center justify-between">
                    <span className="text-earth-light/60">Duration</span>
                    <span className="font-bold text-earth">{safari.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-earth-light/60">Group Size</span>
                    <span className="font-bold text-earth">{safari.groupSize} travelers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-earth-light/60">Vehicle</span>
                    <span className="font-bold text-earth">Custom 4x4 Cruiser</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-earth-light/60">Medical Evacuation</span>
                    <span className="font-bold text-emerald-700">AMREF Flying Doctors Included</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <Link
                    href={`/contact?safari=${encodeURIComponent(safari.title)}`}
                    className="block w-full text-center px-6 py-4 bg-accent hover:bg-accent-dark text-stone-950 font-bold rounded-full transition-all shadow-md hover:shadow-lg text-sm"
                  >
                    Request Custom Quote & Dates &rarr;
                  </Link>
                  <a
                    href={`https://wa.me/254718832191?text=${encodeURIComponent(
                      `Hello! I'm interested in booking the ${safari.title} safari.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-full transition-all text-xs"
                  >
                    💬 WhatsApp Us About This Trip
                  </a>
                  <p className="text-[11px] text-earth-light/50 text-center mt-2">
                    Free date change up to 30 days prior • Instant confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
