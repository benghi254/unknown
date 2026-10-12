"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    safari: "",
    date: "",
    groupSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative min-h-[42vh] flex flex-col justify-end bg-stone-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2000&q=80"
            alt="Plan Your Kenya Safari"
            className="w-full h-full object-cover opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="inline-block bg-accent/20 border border-accent/40 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            ✨ Tailored Safari Planning
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Plan Your Kenyan Safari
          </h1>
          <p className="mt-4 text-stone-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Ready for your adventure in the wild? Tell us your preferred dates,
            destinations, and travel group size. Our local safari experts will
            design a custom itinerary within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-sand">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-safari-green/10 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-safari-green"
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
                    <h2 className="text-2xl font-bold text-earth mb-2">
                      Request Received!
                    </h2>
                    <p className="text-earth-light/60 max-w-md mx-auto">
                      Thank you for your interest in Unknown Kenya. Our team
                      will review your request and get back to you within 24
                      hours with a personalized safari plan.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          safari: "",
                          date: "",
                          groupSize: "",
                          message: "",
                        });
                      }}
                      className="mt-6 px-6 py-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors text-sm"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-earth-light/60 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full px-3 py-2.5 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-earth-light/60 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="w-full px-3 py-2.5 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-earth-light/60 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className="w-full px-3 py-2.5 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-earth-light/60 mb-1">
                          Interested Safari
                        </label>
                        <select
                          value={form.safari}
                          onChange={(e) =>
                            setForm({ ...form, safari: e.target.value })
                          }
                          className="w-full px-3 py-2.5 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background"
                        >
                          <option value="">Select a safari...</option>
                          <option value="Masai Mara Adventure">
                            Masai Mara Adventure
                          </option>
                          <option value="Amboseli & Kilimanjaro Views">
                            Amboseli & Kilimanjaro Views
                          </option>
                          <option value="Samburu Special Five">
                            Samburu Special Five
                          </option>
                          <option value="Coast & Safari Combo">
                            Coast & Safari Combo
                          </option>
                          <option value="Rift Valley Lakes & Nakuru">
                            Rift Valley Lakes & Nakuru
                          </option>
                          <option value="Northern Kenya Odyssey">
                            Northern Kenya Odyssey
                          </option>
                          <option value="custom">Custom Itinerary</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-earth-light/60 mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) =>
                            setForm({ ...form, date: e.target.value })
                          }
                          className="w-full px-3 py-2.5 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-earth-light/60 mb-1">
                          Group Size
                        </label>
                        <select
                          value={form.groupSize}
                          onChange={(e) =>
                            setForm({ ...form, groupSize: e.target.value })
                          }
                          className="w-full px-3 py-2.5 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background"
                        >
                          <option value="">Select...</option>
                          <option value="1-2">1-2 travelers</option>
                          <option value="3-4">3-4 travelers</option>
                          <option value="5-8">5-8 travelers</option>
                          <option value="9-14">9-14 travelers</option>
                          <option value="14+">14+ (group/custom)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-earth-light/60 mb-1">
                        Additional Details
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full px-3 py-2.5 text-sm border border-sand rounded-lg focus:outline-none focus:border-accent bg-background resize-none"
                        placeholder="Any special requirements, interests, or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors"
                    >
                      Send Booking Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl p-6 border border-sand">
                <h3 className="text-lg font-bold text-earth mb-4">
                  Contact Details
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-earth">Office</p>
                      <p className="text-earth-light/60">
                        Langata, Nairobi, Kenya
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-earth">Phone</p>
                      <p className="text-earth-light/60">+254 718832191</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-earth">Email</p>
                      <p className="text-earth-light/60">
                        info@unknownkenya.co.ke
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-earth">Hours</p>
                      <p className="text-earth-light/60">
                        Mon - Sun: 6:00 AM - 6:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-sand">
                <h3 className="text-lg font-bold text-earth mb-2">
                  Quick Response
                </h3>
                <p className="text-sm text-earth-light/60 mb-4 leading-relaxed">
                  For immediate assistance, reach us on WhatsApp. We typically
                  respond within minutes during business hours.
                </p>
                <a
                  href="https://wa.me/254718832191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-full transition-colors text-sm shadow-md"
                >
                  💬 Chat on WhatsApp (+254 718832191)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
