"use client";

import React, { useRef } from "react";
import Link from "next/link";
import HeroPointerTrail from "./HeroPointerTrail";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-center bg-stone-950 text-white overflow-hidden select-none"
    >
      {/* Background Photography with slow cinematic kenburns effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=85"
          alt="Kenyan Savannah Sunset Safari"
          className="w-full h-full object-cover animate-kenburns opacity-45 scale-105"
        />
        {/* Layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/50" />
      </div>

      {/* Floating Interactive Pointer Popups (Wildlife, Resorts, Activities) */}
      <HeroPointerTrail containerRef={containerRef} />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Live Sightings Ticker Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-semibold mb-6 shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Live Sightings: Big 5 spotted in Masai Mara & Amboseli today</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-md">
            Discover the Soul of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
              Wild Kenya
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-stone-200 max-w-2xl leading-relaxed drop-shadow">
            Unforgettable safari journeys through majestic savannahs, luxury
            eco-resorts, and untamed wildlife corridors. Led by certified indigenous
            guides with guaranteed window seats and bespoke itineraries.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/safaris"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-stone-950 font-bold text-sm sm:text-base rounded-full shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Explore Safari Packages &rarr;
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-full border border-white/20 backdrop-blur-md transition-all duration-300"
            >
              Custom Trip Planner
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-4 text-amber-200/90 hover:text-white font-medium text-sm transition-colors"
            >
              <span className="text-amber-400">★ 4.9</span> (Guest Reviews)
            </Link>
          </div>

          {/* Quick Experience Metrics */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 sm:gap-10 max-w-lg">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-300">
                12+
              </p>
              <p className="text-xs sm:text-sm text-stone-400 mt-1 font-medium">
                Years of Guiding
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-300">
                2,400+
              </p>
              <p className="text-xs sm:text-sm text-stone-400 mt-1 font-medium">
                Happy Tourists
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-300">
                99%
              </p>
              <p className="text-xs sm:text-sm text-stone-400 mt-1 font-medium">
                Big Five Sighting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
