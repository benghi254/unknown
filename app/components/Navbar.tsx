"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/safaris", label: "Safari Packages" },
  { href: "/parks", label: "Parks & Reserves" },
  { href: "/reviews", label: "Guest Reviews" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact & Booking" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-950/95 backdrop-blur-md shadow-xl border-b border-amber-300/15 py-1"
          : "bg-stone-950/90 backdrop-blur-sm border-b border-white/10"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 font-black text-base shadow-md group-hover:scale-105 transition-transform">
              🦁
            </div>
            <div>
              <span className="text-amber-300 font-extrabold text-lg sm:text-xl tracking-tight block leading-tight group-hover:text-amber-200 transition-colors">
                Unknown Kenya
              </span>
              <span className="text-[10px] text-stone-400 font-medium tracking-widest uppercase block">
                Authentic Safaris & Lodges
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs xl:text-sm font-semibold rounded-full transition-all ${
                    isActive
                      ? "text-amber-300 bg-white/10 shadow-inner"
                      : "text-stone-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Quick WhatsApp Link */}
            <a
              href="https://wa.me/254718832191"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 rounded-full transition-colors ml-1"
              title="Chat with Safari Specialists on WhatsApp"
            >
              <span className="text-base">💬</span>
            </a>

            {/* Book Now Button */}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 text-xs xl:text-sm font-bold bg-accent hover:bg-accent-dark text-stone-950 rounded-full transition-all shadow-md hover:shadow-accent/25 transform hover:-translate-y-0.5"
            >
              Plan Your Safari &rarr;
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-stone-950/98 backdrop-blur-xl px-4 py-5 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                  isActive
                    ? "text-amber-300 bg-white/10"
                    : "text-stone-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3.5 bg-accent hover:bg-accent-dark text-stone-950 font-bold rounded-xl text-center text-sm transition-colors shadow-md"
            >
              Plan Your Safari &rarr;
            </Link>
            <a
              href="https://wa.me/254718832191"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-emerald-800/80 hover:bg-emerald-700 text-white font-semibold rounded-xl text-center text-xs transition-colors"
            >
              💬 WhatsApp Concierge (+254 718832191)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
