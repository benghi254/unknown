import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-earth text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent font-bold text-2xl">UK</span>
              <span className="text-white/80 text-sm font-medium">
                Unknown Kenya
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Authentic safari experiences across Kenya. We take you beyond the
              tourist trails into the heart of wild Africa.
            </p>
          </div>

          <div>
            <h3 className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/safaris", label: "Our Safaris" },
                { href: "/parks", label: "Parks & Reserves" },
                { href: "/reviews", label: "Guest Reviews" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Popular Safaris
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/safaris/masai-mara-adventure", label: "Masai Mara Adventure" },
                { href: "/safaris/amboseli-summit", label: "Amboseli & Kilimanjaro" },
                { href: "/safaris/samburu-explorer", label: "Samburu Explorer" },
                { href: "/safaris/diani-beach-safari", label: "Coast & Safari Combo" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Nairobi, Kenya</li>
              <li>+254 700 123 456</li>
              <li>info@unknownkenya.co.ke</li>
              <li>Mon - Sat: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Unknown Kenya. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Licensed by Kenya Tourism Board
          </p>
        </div>
      </div>
    </footer>
  );
}
