import Link from "next/link";
import type { Safari } from "@/app/data/safaris";

export default function SafariCard({ safari }: { safari: Safari }) {
  return (
    <Link
      href={`/safaris/${safari.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sand"
    >
      <div className="relative h-52 sm:h-56 bg-sand overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-earth/60 to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center text-earth-light/40 text-6xl font-bold z-0">
          UK
        </div>
        <span className="absolute top-3 left-3 z-20 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
          {safari.duration}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-earth group-hover:text-accent transition-colors">
          {safari.title}
        </h3>
        <p className="mt-2 text-sm text-earth-light/70 line-clamp-2">
          {safari.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-earth-light/50 uppercase tracking-wide">
              From
            </span>
            <p className="text-xl font-bold text-safari-green">
              ${safari.price.toLocaleString()}
            </p>
            <span className="text-xs text-earth-light/50">
              per person
            </span>
          </div>
          <span className="text-sm text-accent font-medium group-hover:translate-x-1 transition-transform inline-block">
            View Details &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
