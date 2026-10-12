import Link from "next/link";
import HeroSection from "./components/HeroSection";
import SafariFeaturesExplorer from "./components/SafariFeaturesExplorer";
import WildlifeActivitiesShowcase from "./components/WildlifeActivitiesShowcase";
import HomeReviewsSection from "./components/HomeReviewsSection";
import SafariCard from "./components/SafariCard";
import ParkCard from "./components/ParkCard";
import { safaris } from "./data/safaris";
import { parks } from "./data/parks";

export default function Home() {
  const featuredSafaris = safaris.slice(0, 3);
  const featuredParks = parks.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section with Pointer Trail Popup of Wildlife, Resorts & Activities */}
      <HeroSection />

      {/* 2. Interactive Wildlife, Resorts & Safari Activities Showcase */}
      <WildlifeActivitiesShowcase />

      {/* 3. Comprehensive Features Provided in the Safaris */}
      <SafariFeaturesExplorer />

      {/* 4. Top Safari Packages */}
      <section className="py-20 lg:py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full">
                Featured Itineraries
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-earth">
                Handcrafted Safari Packages
              </h2>
              <p className="mt-2 text-earth-light/70 text-sm max-w-xl">
                Small-group and private luxury departures led by certified local
                guides across Kenya&apos;s greatest conservation parks.
              </p>
            </div>
            <Link
              href="/safaris"
              className="inline-flex items-center gap-1 text-accent hover:text-accent-dark font-bold text-sm shrink-0 group"
            >
              <span>Explore all {safaris.length} safaris</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredSafaris.map((safari) => (
              <SafariCard key={safari.id} safari={safari} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Popular Parks & Reserves */}
      <section className="py-20 lg:py-24 bg-sand/30 relative border-t border-sand/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full">
                Iconic Destinations
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-earth">
                Kenya&apos;s Crown Jewel Parks
              </h2>
              <p className="mt-2 text-earth-light/70 text-sm max-w-xl">
                From the Great Rift Valley lakes to Mount Kilimanjaro plains and
                the remote Samburu frontier.
              </p>
            </div>
            <Link
              href="/parks"
              className="inline-flex items-center gap-1 text-accent hover:text-accent-dark font-bold text-sm shrink-0 group"
            >
              <span>View all {parks.length} parks</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredParks.map((park) => (
              <ParkCard key={park.id} park={park} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full">
              The UKe Promise
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-earth">
              Why Discerning Tourists Choose Us
            </h2>
            <p className="mt-3 text-earth-light/70 text-sm sm:text-base leading-relaxed">
              We eliminate intermediaries and place you directly in the hands of
              born-and-raised local guides who know every game trail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Local Naturalists",
                desc: "Certified guides with decades of tracking instincts. They read the birds, wind, and tracks to get you prime front-row views.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                tag: "Silver & Gold Certified",
              },
              {
                title: "Guaranteed Window Seating",
                desc: "Never fight for a view. We cap our customized 4x4 Land Cruisers at 6 guests so everyone has an open pop-up roof window.",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                tag: "Max 6 Per 4x4",
              },
              {
                title: "Flexible & Transparent",
                desc: "Free date adjustments up to 30 days before departure, zero hidden park checkpoint fees, and full-board accommodations.",
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                tag: "All-Inclusive Pricing",
              },
              {
                title: "Conservation & Community",
                desc: "A portion of every booking directly funds anti-poaching patrols and community schooling in the conservancies we traverse.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                tag: "Direct Community Benefit",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-sand/70 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-earth-light/60 bg-sand/40 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-earth text-base mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-earth-light/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Persistent Guest Reviews with Direct User Submission */}
      <HomeReviewsSection />

      {/* 8. Luxury Call to Action */}
      <section className="py-20 lg:py-28 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
            alt="Starlit Safari Fireplace Camp"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-accent/20 border border-accent/40 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            ✨ Your African Dream Awaits
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">
            Ready for the Safari of a Lifetime?
          </h2>
          <p className="text-stone-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our local Kenyan safari specialists craft a personalized itinerary
            tailored to your travel dates, wildlife wish-list, and accommodation
            preferences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-stone-950 font-bold rounded-full transition-all shadow-lg hover:shadow-accent/30 text-sm sm:text-base"
            >
              Get a Free Custom Quote &rarr;
            </Link>
            <a
              href="https://wa.me/254718832191"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-full transition-all shadow-lg text-sm sm:text-base"
            >
              <span>💬 WhatsApp Our Guides</span>
            </a>
          </div>
          <p className="text-stone-400 text-xs mt-4">
            Free quote within 24 hours • No obligation • Customized to your budget
          </p>
        </div>
      </section>
    </div>
  );
}
