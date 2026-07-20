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
    title: `${safari.title} | Unknown Kenya`,
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
      {/* Hero */}
      <section className="relative bg-earth text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-earth via-earth-light/20 to-safari-green/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/safaris"
            className="text-accent hover:text-accent-light text-sm font-medium mb-4 inline-block"
          >
            &larr; All Safaris
          </Link>
          <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {safari.duration}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {safari.title}
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-3xl">
            {safari.description}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Highlights */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-sand">
                <h2 className="text-xl font-bold text-earth mb-4">
                  Safari Highlights
                </h2>
                <ul className="space-y-3">
                  {safari.highlights.map((item) => (
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

              {/* What's Included */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-sand">
                <h2 className="text-xl font-bold text-earth mb-4">
                  What&apos;s Included
                </h2>
                <ul className="space-y-3">
                  {safari.included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-safari-green mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-earth-light/80 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Parks visited */}
              {safariParks.length > 0 && (
                <div className="bg-white rounded-xl p-6 sm:p-8 border border-sand">
                  <h2 className="text-xl font-bold text-earth mb-4">
                    Parks You&apos;ll Visit
                  </h2>
                  <div className="space-y-4">
                    {safariParks.map((park) => (
                      <Link
                        key={park.id}
                        href={`/parks/${park.id}`}
                        className="block p-4 rounded-lg border border-sand hover:border-accent/30 transition-colors"
                      >
                        <h3 className="font-semibold text-earth hover:text-accent transition-colors">
                          {park.name}
                        </h3>
                        <p className="text-sm text-earth-light/60 mt-1">
                          {park.highlights}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl p-6 sm:p-8 border border-sand shadow-sm">
                <div className="text-center mb-6">
                  <span className="text-xs text-earth-light/50 uppercase tracking-wide">
                    Starting from
                  </span>
                  <p className="text-4xl font-bold text-safari-green">
                    ${safari.price.toLocaleString()}
                  </p>
                  <span className="text-sm text-earth-light/50">
                    per person
                  </span>
                </div>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-sand">
                    <span className="text-earth-light/60">Duration</span>
                    <span className="font-medium text-earth">
                      {safari.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-sand">
                    <span className="text-earth-light/60">Group Size</span>
                    <span className="font-medium text-earth">
                      {safari.groupSize}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/contact?safari=${encodeURIComponent(safari.title)}`}
                  className="block w-full text-center px-6 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors"
                >
                  Book This Safari
                </Link>
                <p className="text-xs text-earth-light/40 text-center mt-3">
                  Free cancellation up to 30 days before departure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
