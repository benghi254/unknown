import Link from "next/link";
import SafariCard from "./components/SafariCard";
import ParkCard from "./components/ParkCard";
import ReviewCard from "./components/ReviewCard";
import { safaris } from "./data/safaris";
import { parks } from "./data/parks";
import { reviews } from "./data/reviews";

export default function Home() {
  const featuredSafaris = safaris.slice(0, 3);
  const featuredParks = parks.slice(0, 3);
  const recentReviews = reviews.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-earth text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-earth via-earth-light/30 to-safari-green/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl font-bold text-white/20 select-none">
            UK
          </div>
          <div className="absolute bottom-10 right-10 text-9xl font-bold text-white/20 select-none">
            KE
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Unknown Kenya &mdash; UKe
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Discover the Soul
              <br />
              <span className="text-accent">of Wild Kenya</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              Authentic safari experiences crafted by local experts. We take you
              beyond the tourist trails into the heart of Africa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/safaris"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors"
              >
                Explore Safaris
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-colors"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-accent">10+</p>
              <p className="text-xs sm:text-sm text-white/50 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-accent">2000+</p>
              <p className="text-xs sm:text-sm text-white/50 mt-1">Happy Travelers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-accent">6</p>
              <p className="text-xs sm:text-sm text-white/50 mt-1">Major Parks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Safaris */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                Popular Safaris
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-earth">
                Our Top Safari Packages
              </h2>
            </div>
            <Link
              href="/safaris"
              className="text-accent hover:text-accent-dark font-medium text-sm shrink-0"
            >
              View all safaris &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredSafaris.map((safari) => (
              <SafariCard key={safari.id} safari={safari} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Parks */}
      <section className="py-16 sm:py-20 lg:py-24 bg-sand/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                Destinations
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-earth">
                Popular Parks & Reserves
              </h2>
            </div>
            <Link
              href="/parks"
              className="text-accent hover:text-accent-dark font-medium text-sm shrink-0"
            >
              View all parks &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredParks.map((park) => (
              <ParkCard key={park.id} park={park} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Why UKe
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-earth">
              Why Travel With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Local Guides",
                desc: "Our guides are born and raised in Kenya with deep knowledge of wildlife, culture, and hidden gems.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                title: "Small Group Sizes",
                desc: "Intimate groups of 2 to 14 ensure personalized attention and authentic wilderness encounters.",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                title: "Flexible Booking",
                desc: "Customizable itineraries and free cancellation up to 30 days before departure.",
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
              {
                title: "Conservation First",
                desc: "A portion of every booking goes directly to local conservation and community projects.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl bg-white border border-sand"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-earth mb-2">{item.title}</h3>
                <p className="text-sm text-earth-light/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 sm:py-20 lg:py-24 bg-sand/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                Testimonials
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-earth">
                What Our Guests Say
              </h2>
            </div>
            <Link
              href="/reviews"
              className="text-accent hover:text-accent-dark font-medium text-sm shrink-0"
            >
              Read all reviews &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recentReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for the Adventure of a Lifetime?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Let us craft your perfect Kenyan safari. Get in touch today for a
            free, no-obligation itinerary tailored to your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/254797872804"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
