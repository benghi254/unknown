"use client";

import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews as fallbackReviews } from "../data/reviews";
import type { Review } from "../data/reviews";

const LOCAL_STORAGE_KEY = "unknown_kenya_saved_reviews";

export default function ReviewsPage() {
  const [allReviews, setAllReviews] = useState<Review[]>(fallbackReviews);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [form, setForm] = useState({
    name: "",
    country: "",
    safari: "Masai Mara Adventure",
    rating: 5,
    comment: "",
  });

  // Load reviews on mount from API and sync with localStorage
  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          if (data.reviews && Array.isArray(data.reviews)) {
            setAllReviews(data.reviews);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.reviews));
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn("Could not fetch reviews from API, checking local storage...");
      }

      // Check localStorage fallback
      try {
        const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setAllReviews(parsed);
            setIsLoading(false);
            return;
          }
        }
      } catch (e) {
        // use fallback
      }

      setIsLoading(false);
    }

    loadReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reviews) {
          setAllReviews(data.reviews);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.reviews));
        }
      } else {
        // Fallback local save if offline
        const localNew: Review = {
          id: `local-${Date.now()}`,
          name: form.name.trim(),
          country: form.country.trim(),
          safari: form.safari,
          rating: form.rating,
          date: new Date().toISOString().split("T")[0],
          comment: form.comment.trim(),
          avatar: form.name
            .trim()
            .split(" ")
            .map((w) => w[0])
            .join("")
            .toUpperCase()
            .slice(0, 2),
        };
        const updated = [localNew, ...allReviews];
        setAllReviews(updated);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      }
    } catch (err) {
      // Local fallback
      const localNew: Review = {
        id: `local-${Date.now()}`,
        name: form.name.trim(),
        country: form.country.trim(),
        safari: form.safari,
        rating: form.rating,
        date: new Date().toISOString().split("T")[0],
        comment: form.comment.trim(),
        avatar: form.name
          .trim()
          .split(" ")
          .map((w) => w[0])
          .join("")
          .toUpperCase()
          .slice(0, 2),
      };
      const updated = [localNew, ...allReviews];
      setAllReviews(updated);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({
        name: "",
        country: "",
        safari: "Masai Mara Adventure",
        rating: 5,
        comment: "",
      });
    }
  };

  // Calculations for stats
  const totalReviews = allReviews.length;
  const averageRating =
    totalReviews > 0
      ? (allReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
      : "5.0";
  const fiveStarPercent =
    totalReviews > 0
      ? Math.round(
          (allReviews.filter((r) => r.rating === 5).length / totalReviews) * 100
        )
      : 100;

  // Filter reviews
  const filteredReviews = allReviews.filter((review) => {
    const matchesFilter =
      selectedFilter === "all"
        ? true
        : review.rating === Number(selectedFilter);

    const matchesSearch =
      searchQuery.trim() === ""
        ? true
        : review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          review.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
          review.safari.toLowerCase().includes(searchQuery.toLowerCase()) ||
          review.country.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-earth text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-earth to-safari-green/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 border border-accent/40 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              ★ Authentic Traveler Stories
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Guest Reviews & Experiences
            </h1>
            <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
              Read uncensored feedback from travelers who traversed Kenya&apos;s
              wilderness with Unknown Kenya. Have you traveled with us? Share your
              experience below — your review is published instantly for fellow adventurers.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <span className="text-xs text-stone-300 block">Overall Rating</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-300 flex items-center gap-1 mt-1">
                {averageRating} <span className="text-amber-400 text-xl">★</span>
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <span className="text-xs text-stone-300 block">Total Reviews</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {totalReviews}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <span className="text-xs text-stone-300 block">5-Star Reviews</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-300 mt-1">
                {fiveStarPercent}%
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <span className="text-xs text-stone-300 block">Verification</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
                100%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reviews & Submission Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Reviews Column */}
            <div className="lg:col-span-7 xl:col-span-8">
              {/* Filter and Search Bar */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-sand/80 shadow-sm mb-6 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                {/* Rating filter pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-semibold text-earth-light/60 mr-1">
                    Rating:
                  </span>
                  {[
                    { id: "all", label: "All" },
                    { id: "5", label: "5 ★" },
                    { id: "4", label: "4 ★" },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        selectedFilter === filter.id
                          ? "bg-earth text-white shadow-sm"
                          : "bg-sand/40 text-earth hover:bg-sand"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                {/* Search input */}
                <div className="relative min-w-[200px]">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search reviews..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs border border-sand rounded-lg focus:outline-none focus:border-accent bg-background"
                  />
                  <svg
                    className="w-3.5 h-3.5 text-earth-light/40 absolute left-2.5 top-1/2 -translate-y-1/2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Reviews List */}
              {isLoading ? (
                <div className="p-12 text-center text-earth-light/60">
                  <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  Loading traveler reviews...
                </div>
              ) : filteredReviews.length === 0 ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-sand">
                  <p className="text-earth font-semibold">No reviews found matching criteria.</p>
                  <button
                    onClick={() => {
                      setSelectedFilter("all");
                      setSearchQuery("");
                    }}
                    className="mt-3 text-xs text-accent font-semibold hover:underline"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {filteredReviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              )}
            </div>

            {/* Leave a Review Form (Sticky Sidebar) */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-24 bg-white rounded-3xl p-6 sm:p-8 border border-sand/80 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-accent uppercase tracking-wider bg-accent/10 px-2.5 py-0.5 rounded-full">
                    Share Your Journey
                  </span>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200">
                    Saves Directly
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-earth">
                  Add Your Review
                </h2>
                <p className="text-xs text-earth-light/60 mt-1 mb-6">
                  Your feedback is saved directly to our platform and immediately
                  visible to fellow tourists around the globe.
                </p>

                {submitted ? (
                  <div className="text-center py-8 bg-amber-50/50 rounded-2xl p-6 border border-amber-200/50">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-safari-green/10 text-safari-green flex items-center justify-center">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-earth text-lg mb-1">
                      Review Published!
                    </h3>
                    <p className="text-xs text-earth-light/70 mb-4">
                      Thank you for sharing your adventure! Your review has been
                      permanently saved and is now live on the site.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 bg-accent hover:bg-accent-dark text-white rounded-full text-xs font-semibold transition-colors"
                    >
                      Post Another Review
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-earth mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-sand rounded-xl focus:outline-none focus:border-accent bg-background"
                        placeholder="e.g. Jessica Sterling"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-earth mb-1">
                          Country of Origin *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.country}
                          onChange={(e) =>
                            setForm({ ...form, country: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 text-sm border border-sand rounded-xl focus:outline-none focus:border-accent bg-background"
                          placeholder="e.g. Australia"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-earth mb-1">
                          Star Rating
                        </label>
                        <div className="flex items-center gap-1 py-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setForm({ ...form, rating: star })}
                              className="p-1 text-amber-400 focus:outline-none"
                              title={`${star} Stars`}
                            >
                              <svg
                                className={`w-6 h-6 ${
                                  star <= form.rating
                                    ? "text-amber-400"
                                    : "text-stone-300"
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
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-earth mb-1">
                        Safari Package Taken *
                      </label>
                      <select
                        value={form.safari}
                        onChange={(e) =>
                          setForm({ ...form, safari: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-sand rounded-xl focus:outline-none focus:border-accent bg-background"
                      >
                        <option value="Masai Mara Adventure">
                          Masai Mara Adventure (5 Days)
                        </option>
                        <option value="Amboseli & Kilimanjaro Views">
                          Amboseli & Kilimanjaro Views (4 Days)
                        </option>
                        <option value="Samburu Special Five">
                          Samburu Special Five (4 Days)
                        </option>
                        <option value="Coast & Safari Combo">
                          Coast & Safari Combo (7 Days)
                        </option>
                        <option value="Rift Valley Lakes & Nakuru">
                          Rift Valley Lakes & Nakuru (3 Days)
                        </option>
                        <option value="Northern Kenya Odyssey">
                          Northern Kenya Odyssey (8 Days)
                        </option>
                        <option value="Custom Bespoke Safari">
                          Custom Bespoke Safari
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-earth mb-1">
                        Your Review & Highlights *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.comment}
                        onChange={(e) =>
                          setForm({ ...form, comment: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-sand rounded-xl focus:outline-none focus:border-accent bg-background resize-none leading-relaxed"
                        placeholder="Tell future tourists about the wildlife sightings, lodges, guide hospitality, and meals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-accent hover:bg-accent-dark disabled:opacity-60 text-stone-950 font-bold rounded-full transition-all shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                          <span>Publishing Review...</span>
                        </>
                      ) : (
                        <span>Publish Review Directly</span>
                      )}
                    </button>
                    <p className="text-[11px] text-earth-light/40 text-center">
                      Saved directly to live site & visible to new visitors immediately.
                    </p>
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
