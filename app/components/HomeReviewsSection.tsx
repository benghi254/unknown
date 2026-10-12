"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReviewCard from "./ReviewCard";
import type { Review } from "@/app/data/reviews";
import { reviews as fallbackReviews } from "@/app/data/reviews";

const LOCAL_STORAGE_KEY = "unknown_kenya_saved_reviews";

export default function HomeReviewsSection() {
  const [reviewsList, setReviewsList] = useState<Review[]>(fallbackReviews);
  const [showQuickModal, setShowQuickModal] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  const [form, setForm] = useState({
    name: "",
    country: "",
    safari: "Masai Mara Adventure",
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          if (data.reviews && Array.isArray(data.reviews)) {
            setReviewsList(data.reviews);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.reviews));
            return;
          }
        }
      } catch (e) {
        // Fallback
      }

      try {
        const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setReviewsList(parsed);
          }
        }
      } catch (e) {}
    }

    fetchReviews();
  }, []);

  const handleQuickSubmit = async (e: React.FormEvent) => {
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
          setReviewsList(data.reviews);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.reviews));
        }
      } else {
        const newRev: Review = {
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
        const updated = [newRev, ...reviewsList];
        setReviewsList(updated);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      }
    } catch (err) {
      const newRev: Review = {
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
      const updated = [newRev, ...reviewsList];
      setReviewsList(updated);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } finally {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setForm({
        name: "",
        country: "",
        safari: "Masai Mara Adventure",
        rating: 5,
        comment: "",
      });
      setTimeout(() => {
        setSubmittedSuccess(false);
        setShowQuickModal(false);
      }, 2000);
    }
  };

  const featured = reviewsList.slice(0, 3);

  return (
    <section className="py-20 lg:py-24 bg-stone-100/70 border-t border-b border-sand/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full">
                ★ Traveler Testimonials
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full font-medium">
                Live & Verified
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-earth">
              What Our Guests Say
            </h2>
            <p className="text-earth-light/70 text-sm mt-1">
              Real reviews left directly by past safari guests from around the world.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShowQuickModal(true)}
              className="px-5 py-2.5 bg-earth hover:bg-earth-light text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm transition-all"
            >
              + Write a Review
            </button>
            <Link
              href="/reviews"
              className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-stone-950 text-xs sm:text-sm font-bold rounded-full shadow-sm transition-all"
            >
              View All ({reviewsList.length}) &rarr;
            </Link>
          </div>
        </div>

        {/* Featured Reviews Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>

      {/* Quick Review Modal */}
      {showQuickModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-sand relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setShowQuickModal(false)}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-2 text-xl"
            >
              ✕
            </button>

            {submittedSuccess ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-3xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-earth">Review Saved!</h3>
                <p className="text-xs text-earth-light/70 mt-1">
                  Thank you! Your review is now saved and viewable to all future tourists.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                    Direct Traveler Submission
                  </span>
                  <h3 className="text-2xl font-bold text-earth">Leave Your Review</h3>
                  <p className="text-xs text-earth-light/60 mt-0.5">
                    Saved directly to the web and visible to new visitors immediately.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-earth mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-sand rounded-xl focus:outline-none focus:border-accent bg-background"
                    placeholder="e.g. David Miller"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-earth mb-1">Your Country *</label>
                    <input
                      type="text"
                      required
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-sand rounded-xl focus:outline-none focus:border-accent bg-background"
                      placeholder="e.g. Canada"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-earth mb-1">Rating</label>
                    <div className="flex gap-1 py-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setForm({ ...form, rating: s })}
                          className={`text-xl ${s <= form.rating ? "text-amber-400" : "text-stone-300"}`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-earth mb-1">Safari Taken *</label>
                  <select
                    value={form.safari}
                    onChange={(e) => setForm({ ...form, safari: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-sand rounded-xl focus:outline-none focus:border-accent bg-background"
                  >
                    <option value="Masai Mara Adventure">Masai Mara Adventure</option>
                    <option value="Amboseli & Kilimanjaro Views">Amboseli & Kilimanjaro Views</option>
                    <option value="Samburu Special Five">Samburu Special Five</option>
                    <option value="Coast & Safari Combo">Coast & Safari Combo</option>
                    <option value="Rift Valley Lakes & Nakuru">Rift Valley Lakes & Nakuru</option>
                    <option value="Northern Kenya Odyssey">Northern Kenya Odyssey</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-earth mb-1">Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-sand rounded-xl focus:outline-none focus:border-accent bg-background resize-none"
                    placeholder="Share your memorable safari moments..."
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowQuickModal(false)}
                    className="px-5 py-2 text-xs font-semibold text-earth-light/70 hover:text-earth"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-stone-950 font-bold rounded-full text-xs transition-colors shadow-md flex items-center gap-1.5"
                  >
                    {isSubmitting ? "Saving Review..." : "Submit Review"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
