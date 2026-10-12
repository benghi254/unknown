import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white mt-auto border-t border-amber-300/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 font-black text-base shadow-md">
                🦁
              </div>
              <div>
                <span className="text-amber-300 font-extrabold text-xl tracking-tight block leading-tight">
                  Unknown Kenya
                </span>
                <span className="text-[10px] text-stone-400 font-medium tracking-widest uppercase block">
                  Authentic Safaris & Lodges
                </span>
              </div>
            </Link>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Authentic luxury safari journeys across Kenya&apos;s wildest conservation
              corridors. Locally guided, ethically operated, with 100% guaranteed
              window seating and Flying Doctors emergency cover.
            </p>

            {/* Inclusions badge */}
            <div className="flex flex-wrap gap-2 text-[11px] text-stone-400">
              <span className="bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                🛡️ AMREF Air Rescue Included
              </span>
              <span className="bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                🚙 Custom 4x4 Land Cruisers
              </span>
              <span className="bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                🧭 Gold/Silver KPSGA Guides
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              Explore Safaris
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { href: "/safaris", label: "All Safari Packages" },
                { href: "/parks", label: "National Parks Guide" },
                { href: "/reviews", label: "Guest Testimonials" },
                { href: "/about", label: "About Unknown Kenya" },
                { href: "/contact", label: "Bookings & Inquiries" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Itineraries */}
          <div>
            <h3 className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              Top Destinations
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                {
                  href: "/safaris/masai-mara-adventure",
                  label: "Masai Mara Migration",
                },
                {
                  href: "/safaris/amboseli-summit",
                  label: "Amboseli & Kilimanjaro",
                },
                {
                  href: "/safaris/samburu-explorer",
                  label: "Samburu Special Five",
                },
                {
                  href: "/safaris/diani-beach-safari",
                  label: "Tsavo & Diani Beach",
                },
                {
                  href: "/safaris/lake-nakuru-flamingo",
                  label: "Rift Valley Flamingo",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              Nairobi Office
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Langata, Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>+254 718832191</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <span>info@unknownkenya.co.ke</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕒</span>
                <span>Mon - Sun: 6:00 AM - 6:00 PM (EAT)</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/254718832191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition-colors"
                >
                  <span>💬 Direct WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Unknown Kenya Safaris & Lodges. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Licensed Kenya Tourism Board Operator</span>
            <span>•</span>
            <Link href="/reviews" className="hover:text-stone-400">
              Read Guest Reviews
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-stone-400">
              Plan Custom Itinerary
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
