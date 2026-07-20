"use client";

import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews as initialReviews } from "../data/reviews";
import type { Review } from "../data/reviews";

export default function ReviewsPage() {
  const [allReviews, setAllReviews] = useState<Review[]>(initialReviews);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    country: "",
    safari: "",
    rating: 5,
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: String(Date.now()),
      name: form.name,
      country: form.country,
      safari: form.safari,
      rating: form.rating,
      date: new Date().toISOString().split("T")[0],
      comment: form.comment,
      avatar: form.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2),
    };
    setAllReviews([newReview, ...allReviews]);
    setSubmitted(true);
    setForm({ name: "", country: "", safari: "", rating: 5, comment: "" });
  };

  return (
    <div>
      <section className="bg-earth text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Guest Reviews
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Hear from travelers who have experienced the magic of Kenya with
            Unknown Kenya.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Reviews List */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {allReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>

            {/* Leave a Review Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl p-6 sm:p-8 border border-sand shadow-sm">
                <h2 className="text-xl font-bold text-earth mb-2">
                  Leave a Review
                </h2>
                <p className="text-sm text-earth-light/50 mb-6">
                  Share your experience with fellow travelers.
                </p>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-safari-green/10 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-safari-green"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-earth mb-1">
                      Thank You!
                    </h3>
                    <p className="text-sm text-earth-light/60">
                      Your review has been published.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-sm text-accent hover:text-accent-dark font-medium"
                    >
                      Submit another review
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-earth-light/60 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-earth-light/60 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        required
                        value={form.country}
                        onChange={(e) =>
                          setForm({ ...form, country: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background"
                        placeholder="e.g. United States"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-earth-light/60 mb-1">
                        Safari Taken
                      </label>
                      <input
                        type="text"
                        required
                        value={form.safari}
                        onChange={(e) =>
                          setForm({ ...form, safari: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background"
                        placeholder="e.g. Masai Mara Adventure"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-earth-light/60 mb-1">
                        Rating
                      </label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setForm({ ...form, rating: star })}
                            className="p-0.5"
                          >
                            <svg
                              className={`w-7 h-7 ${
                                star <= form.rating
                                  ? "text-accent"
                                  : "text-sand"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-earth-light/60 mb-1">
                        Your Review
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.comment}
                        onChange={(e) =>
                          setForm({ ...form, comment: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background resize-none"
                        placeholder="Tell us about your experience..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors"
                    >
                      Submit Review
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
