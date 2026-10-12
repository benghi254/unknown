import type { Review } from "@/app/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < review.rating);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-sand/70 hover:border-accent/40 h-full flex flex-col justify-between group transform hover:-translate-y-1">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">
              {review.avatar}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="font-bold text-earth text-sm">{review.name}</p>
                <span className="inline-flex items-center text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold border border-emerald-200">
                  ✓ Verified
                </span>
              </div>
              <p className="text-xs text-earth-light/60 flex items-center gap-1 mt-0.5">
                <span>📍</span> {review.country}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-0.5 text-amber-400">
            {stars.map((filled, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${filled ? "text-amber-400" : "text-stone-200"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
            🦁 {review.safari}
          </span>
        </div>

        <p className="text-sm text-earth-light/80 leading-relaxed italic">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-sand/50 flex items-center justify-between text-xs text-earth-light/50">
        <span>Safari Experience</span>
        <span>
          {new Date(review.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
