import Link from "next/link";
import type { Park } from "@/app/data/parks";

export default function ParkCard({ park }: { park: Park }) {
  return (
    <Link
      href={`/parks/${park.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sand"
    >
      <div className="relative h-48 sm:h-52 bg-sand overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-earth/70 via-earth/20 to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center text-earth-light/30 text-5xl font-bold z-0">
          UK
        </div>
        <div className="absolute bottom-3 left-3 z-20">
          <h3 className="text-white font-bold text-lg drop-shadow-lg">
            {park.name}
          </h3>
          <p className="text-white/80 text-xs">{park.region}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-earth-light/70 line-clamp-2">
          {park.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-earth-light/50">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {park.area}
          </div>
          <span className="text-sm text-accent font-medium group-hover:translate-x-1 transition-transform inline-block">
            Explore &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
