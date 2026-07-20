import type { Review } from "@/app/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < review.rating);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-sand h-full flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm shrink-0">
          {review.avatar}
        </div>
        <div>
          <p className="font-semibold text-earth text-sm">{review.name}</p>
          <p className="text-xs text-earth-light/50">{review.country}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 mb-2">
        {stars.map((filled, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${filled ? "text-accent" : "text-sand"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-xs text-accent font-medium mb-2">{review.safari}</p>
      <p className="text-sm text-earth-light/70 leading-relaxed flex-1">
        {review.comment}
      </p>
      <p className="text-xs text-earth-light/40 mt-3">
        {new Date(review.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
