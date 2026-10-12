import Link from "next/link";
import type { Park } from "@/app/data/parks";

export default function ParkCard({ park }: { park: Park }) {
  return (
    <Link
      href={`/parks/${park.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-sand/70 hover:border-accent/40 flex flex-col h-full transform hover:-translate-y-1"
    >
      <div className="relative h-52 sm:h-60 bg-earth/10 overflow-hidden">
        {/* Real web image */}
        <img
          src={park.image}
          alt={park.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/30 to-black/30 pointer-events-none" />

        <div className="absolute top-3 left-3 z-10">
          <span className="bg-earth/80 backdrop-blur-md text-amber-200 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-amber-300/30">
            {park.area}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 z-10">
          <h3 className="text-white font-bold text-lg drop-shadow-md leading-tight group-hover:text-amber-200 transition-colors">
            {park.name}
          </h3>
          <p className="text-white/80 text-xs mt-0.5">{park.region}</p>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs sm:text-sm text-earth-light/80 line-clamp-2 leading-relaxed">
            {park.description}
          </p>

          {/* Wildlife badges */}
          <div className="mt-3">
            <span className="text-[10px] text-earth-light/50 font-bold uppercase tracking-wider block mb-1.5">
              Key Wildlife
            </span>
            <div className="flex flex-wrap gap-1">
              {park.wildlife.slice(0, 4).map((animal) => (
                <span
                  key={animal}
                  className="text-[11px] bg-safari-green/10 text-safari-green font-medium px-2 py-0.5 rounded-full"
                >
                  {animal}
                </span>
              ))}
              {park.wildlife.length > 4 && (
                <span className="text-[11px] text-earth-light/60 px-1 py-0.5">
                  +{park.wildlife.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-sand/60 flex items-center justify-between">
          <span className="text-xs text-earth-light/70 font-medium">
            Best: <span className="text-earth font-semibold">Dry Seasons</span>
          </span>
          <span className="text-xs sm:text-sm text-accent font-semibold group-hover:text-accent-dark group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
            Discover Park &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
