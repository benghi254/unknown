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
    title: `${park.name} | Unknown Kenya`,
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
      {/* Hero */}
      <section className="relative bg-earth text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-earth via-earth-light/20 to-safari-green/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/parks"
            className="text-accent hover:text-accent-light text-sm font-medium mb-4 inline-block"
          >
            &larr; All Parks
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {park.name}
          </h1>
          <p className="mt-2 text-white/60">{park.region}</p>
          <p className="mt-4 text-white/70 text-lg max-w-3xl">
            {park.description}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Facts */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-sand">
                <h2 className="text-xl font-bold text-earth mb-4">
                  Quick Facts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-sand/30 rounded-lg">
                    <span className="text-xs text-earth-light/50 uppercase tracking-wide">
                      Area
                    </span>
                    <p className="text-lg font-bold text-earth mt-1">
                      {park.area}
                    </p>
                  </div>
                  <div className="p-4 bg-sand/30 rounded-lg">
                    <span className="text-xs text-earth-light/50 uppercase tracking-wide">
                      Best Time to Visit
                    </span>
                    <p className="text-sm font-medium text-earth mt-1 leading-relaxed">
                      {park.bestTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Famous For */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-sand">
                <h2 className="text-xl font-bold text-earth mb-4">
                  Famous For
                </h2>
                <ul className="space-y-3">
                  {park.famousFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
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
                      <span className="text-earth-light/80 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wildlife */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-sand">
                <h2 className="text-xl font-bold text-earth mb-4">
                  Wildlife
                </h2>
                <div className="flex flex-wrap gap-2">
                  {park.wildlife.map((animal) => (
                    <span
                      key={animal}
                      className="px-3 py-1.5 bg-safari-green/10 text-safari-green text-sm font-medium rounded-full"
                    >
                      {animal}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-accent/10 rounded-xl p-6 sm:p-8 border border-accent/20">
                <h2 className="text-xl font-bold text-earth mb-2">
                  Highlight
                </h2>
                <p className="text-earth-light/80 leading-relaxed">
                  {park.highlights}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl p-6 sm:p-8 border border-sand shadow-sm">
                <h3 className="text-lg font-bold text-earth mb-4">
                  Plan Your Visit
                </h3>
                <p className="text-sm text-earth-light/60 mb-6 leading-relaxed">
                  Let us create a custom itinerary that includes {park.name} and
                  surrounding attractions.
                </p>
                <Link
                  href={`/contact?safari=${encodeURIComponent(park.name)}`}
                  className="block w-full text-center px-6 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors"
                >
                  Enquire About This Park
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
