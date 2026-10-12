import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Unknown Kenya Safaris",
  description:
    "Learn about Unknown Kenya - our story, our certified guides, and our mission for authentic, responsible safari travel across Kenya.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Banner with Web Photography */}
      <section className="relative min-h-[42vh] flex flex-col justify-end bg-stone-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=2000&q=80"
            alt="Authentic Kenyan Safari Heritage"
            className="w-full h-full object-cover opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block bg-accent/20 border border-accent/40 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            🇰🇪 Our Story & Philosophy
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            About Unknown Kenya
          </h1>
          <p className="mt-4 text-stone-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Born from a deep love for Kenya&apos;s wild landscapes and indigenous
            custodians. We bring travelers beyond crowded tourist loops into
            the soul of untamed Africa.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Story Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand/80 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-earth-light/80 leading-relaxed text-sm sm:text-base">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                Founded in 2014 • Nairobi, Kenya
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-earth">
                Born in the Heart of the Mara
              </h2>
              <p>
                Unknown Kenya was founded by a team of professional Kenyan field
                guides who grew up tracking lions and elephants across the Great Rift
                Valley and Mara plains. We believed the finest safari journeys
                arise from generational bush knowledge, genuine human connection,
                and ethical conservation.
              </p>
              <p>
                What started with a single customized Land Cruiser has grown into
                a boutique team of over 20 certified naturalists, private bush
                chefs, and safari hosts. We pride ourselves on keeping group sizes
                intimate (maximum 6 per vehicle), ensuring every traveler has a
                guaranteed window seat and tailored attention.
              </p>
            </div>

            <div className="md:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80"
                alt="Kenyan Wildlife Safari"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-semibold">
                  Preserving Kenya&apos;s heritage for future generations
                </span>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/15 px-3 py-1 rounded-full">
                Guiding Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-earth mt-2">
                What Sets Our Safaris Apart
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Authentic Wilderness First",
                  desc: "We prioritize private conservancies and remote tracks where you observe natural animal behaviors away from tourist traffic.",
                  icon: "🐾",
                },
                {
                  title: "Conservation Impact",
                  desc: "Portions of every safari fee directly support rangers, anti-poaching camera traps, and local primary school education.",
                  icon: "🌱",
                },
                {
                  title: "Certified Professionalism",
                  desc: "Our guides are certified by the Kenya Professional Safari Guides Association (KPSGA), with deep botanical and fauna expertise.",
                  icon: "🧭",
                },
                {
                  title: "Guest Safety & Total Peace of Mind",
                  desc: "Every guest travels with automatic AMREF Flying Doctors 24/7 emergency medical air evacuation coverage across all parks.",
                  icon: "🛡️",
                },
              ].map((val) => (
                <div
                  key={val.title}
                  className="p-6 rounded-2xl bg-white border border-sand/70 shadow-sm hover:shadow-lg transition-all"
                >
                  <span className="text-3xl mb-3 block">{val.icon}</span>
                  <h3 className="text-base font-bold text-earth mb-2">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-earth-light/70 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Callout to Reviews */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-stone-900 to-stone-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                ★ 4.9 Average Rating
              </span>
              <h3 className="text-2xl font-bold">Hear What Our Guests Say</h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-lg">
                Read direct traveler stories or submit your own review after your
                journey across Kenya with our guides.
              </p>
            </div>
            <Link
              href="/reviews"
              className="px-6 py-3 bg-accent hover:bg-accent-dark text-stone-950 font-bold rounded-full text-xs sm:text-sm transition-all shrink-0"
            >
              Read Guest Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
