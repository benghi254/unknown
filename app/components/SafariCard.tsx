import Link from "next/link";
import type { Safari } from "@/app/data/safaris";

export default function SafariCard({ safari }: { safari: Safari }) {
  return (
    <Link
      href={`/safaris/${safari.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-sand/70 hover:border-accent/40 flex flex-col h-full transform hover:-translate-y-1"
    >
      <div className="relative h-56 sm:h-64 bg-earth/10 overflow-hidden">
        {/* Real web image */}
        <img
          src={safari.image}
          alt={safari.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-earth/20 to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="bg-earth/80 backdrop-blur-md text-amber-200 text-xs font-semibold px-3 py-1 rounded-full border border-amber-300/30 flex items-center gap-1 shadow-md">
            <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {safari.duration}
          </span>
          {safari.badge && (
            <span className="bg-accent text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wider text-[10px]">
              {safari.badge}
            </span>
          )}
        </div>

        {/* Bottom overlay badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-white/90 text-xs">
          <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
            {safari.lodgingType}
          </span>
          <span className="flex items-center gap-1 text-amber-300 font-semibold bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
            ★ 5.0
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-earth group-hover:text-accent transition-colors line-clamp-1">
            {safari.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-earth-light/80 line-clamp-2 leading-relaxed">
            {safari.description}
          </p>

          {/* Highlights pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {safari.highlights.slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-sand/50 text-earth px-2 py-0.5 rounded-md font-medium truncate max-w-full"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-sand/60 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-earth-light/60 uppercase tracking-wider font-semibold block">
              All Inclusive From
            </span>
            <p className="text-xl font-bold text-safari-green">
              ${safari.price.toLocaleString()}
              <span className="text-xs font-normal text-earth-light/60 ml-1">/pp</span>
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-accent group-hover:text-accent-dark group-hover:translate-x-1 transition-all">
            Explore Details &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
