"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

export interface SafariMoment {
  id: string;
  category: "wildlife" | "resort" | "activity";
  badge: string;
  title: string;
  location: string;
  image: string;
}

export const safariMoments: SafariMoment[] = [
  // Wildlife
  {
    id: "m-lion",
    category: "wildlife",
    badge: "🦁 Wildlife",
    title: "Lion Pride at Dawn",
    location: "Masai Mara Reserve",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-elephant",
    category: "wildlife",
    badge: "🐘 Wildlife",
    title: "Amboseli Elephant Herd",
    location: "Mount Kilimanjaro Plains",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-cheetah",
    category: "wildlife",
    badge: "🐆 Wildlife",
    title: "Cheetah on Savannah Lookout",
    location: "Mara Triangle",
    image:
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-giraffe",
    category: "wildlife",
    badge: "🦒 Wildlife",
    title: "Reticulated Giraffes at Sunset",
    location: "Samburu National Reserve",
    image:
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-zebra",
    category: "wildlife",
    badge: "🦓 Wildlife",
    title: "Grevy's Zebra Migration",
    location: "Tsavo East Plains",
    image:
      "https://images.unsplash.com/photo-1509728140741-3d70845b4452?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-flamingo",
    category: "wildlife",
    badge: "🦩 Wildlife",
    title: "Lake Nakuru Flamingo Haven",
    location: "Great Rift Valley",
    image:
      "https://images.unsplash.com/photo-1520690214124-2405c5217036?auto=format&fit=crop&w=600&q=80",
  },

  // Holiday Resorts & Lodges
  {
    id: "m-resort-tent",
    category: "resort",
    badge: "🏕️ Luxury Resort",
    title: "Panoramic Tented Suite",
    location: "Mara Riverfront Luxury Camp",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-resort-pool",
    category: "resort",
    badge: "✨ Holiday Resort",
    title: "Savannah Edge Infinity Pool",
    location: "Kilimanjaro View Lodge",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-resort-dining",
    category: "resort",
    badge: "🍷 Bush Dining",
    title: "Candlelit Wilderness Supper",
    location: "Samburu Private Conservancy",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-resort-suite",
    category: "resort",
    badge: "⭐ 5-Star Lodge",
    title: "Serengeti View Master Suite",
    location: "Great Rift Escarpment",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-resort-beach",
    category: "resort",
    badge: "🏖️ Coast Resort",
    title: "Diani Beachfront Ocean Villa",
    location: "Kenyan Indian Ocean Coast",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-resort-deck",
    category: "resort",
    badge: "🔥 Lodge Deck",
    title: "Sundowner Boma Fire Lounge",
    location: "Tsavo Chyulu Hills Lodge",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
  },

  // Safari Activities
  {
    id: "m-activity-balloon",
    category: "activity",
    badge: "🎈 Safari Activity",
    title: "Sunrise Hot Air Balloon Flight",
    location: "Over the Maasai Mara Savannah",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-activity-4x4",
    category: "activity",
    badge: "🚙 Safari Activity",
    title: "Open-Top 4x4 Game Tracking",
    location: "Tsavo & Amboseli Expeditions",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-activity-walk",
    category: "activity",
    badge: "🥾 Safari Activity",
    title: "Ranger-Led Bush Walking Safari",
    location: "Crescent Island & Lake Naivasha",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-activity-maasai",
    category: "activity",
    badge: "🥁 Cultural Tour",
    title: "Maasai Warrior Cultural Dance",
    location: "Enkare Maasai Boma Village",
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "m-activity-sundowner",
    category: "activity",
    badge: "🥂 Sundowner",
    title: "Golden Hour Sundowner Cocktails",
    location: "Observation Hill Vistas",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
  },
];

interface ActivePopup {
  key: string;
  x: number;
  y: number;
  moment: SafariMoment;
  rotation: number;
  isLeaving: boolean;
  scale: number;
}

export default function HeroPointerTrail({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [popups, setPopups] = useState<ActivePopup[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [trailEnabled, setTrailEnabled] = useState<boolean>(true);
  const lastPos = useRef<{ x: number; y: number; time: number }>({
    x: 0,
    y: 0,
    time: 0,
  });
  const momentIndexRef = useRef<number>(0);

  const filteredMoments =
    activeCategory === "all"
      ? safariMoments
      : safariMoments.filter((m) => m.category === activeCategory);

  const spawnCard = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Ensure within bounds
      if (x < 10 || x > rect.width - 10 || y < 10 || y > rect.height - 10) return;

      const currentMoments = filteredMoments.length > 0 ? filteredMoments : safariMoments;
      const moment = currentMoments[momentIndexRef.current % currentMoments.length];
      momentIndexRef.current += 1;

      const randomRot = Math.floor(Math.random() * 14) - 7; // -7 to +7 deg
      const jitterX = (Math.random() - 0.5) * 30;
      const jitterY = (Math.random() - 0.5) * 30;

      const newKey = `${Date.now()}-${Math.random()}`;
      const newCard: ActivePopup = {
        key: newKey,
        x: x + jitterX,
        y: y + jitterY,
        moment,
        rotation: randomRot,
        isLeaving: false,
        scale: 0.95 + Math.random() * 0.1,
      };

      setPopups((prev) => {
        // Keep max 6 cards on screen for butter smooth performance
        const trimmed = prev.length >= 6 ? prev.slice(prev.length - 5) : prev;
        return [...trimmed, newCard];
      });

      // Schedule exit animation
      setTimeout(() => {
        setPopups((prev) =>
          prev.map((p) => (p.key === newKey ? { ...p, isLeaving: true } : p))
        );
      }, 1600);

      // Remove after ease-out transition finishes
      setTimeout(() => {
        setPopups((prev) => prev.filter((p) => p.key !== newKey));
      }, 2200);
    },
    [containerRef, filteredMoments]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !trailEnabled) return;

    const handlePointerMove = (e: PointerEvent) => {
      const now = Date.now();
      const dist = Math.hypot(
        e.clientX - lastPos.current.x,
        e.clientY - lastPos.current.y
      );

      // Trigger if user moved at least 70px or 350ms elapsed since last position
      if (dist > 75 && now - lastPos.current.time > 140) {
        lastPos.current = { x: e.clientX, y: e.clientY, time: now };
        spawnCard(e.clientX, e.clientY);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      spawnCard(e.clientX, e.clientY);
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerdown", handlePointerDown);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [containerRef, spawnCard, trailEnabled]);

  // Ambient automatic demo popups when user is idle
  useEffect(() => {
    if (!trailEnabled) return;
    const interval = setInterval(() => {
      if (!containerRef.current) return;
      const now = Date.now();
      if (now - lastPos.current.time > 3500 && popups.length === 0) {
        const rect = containerRef.current.getBoundingClientRect();
        // Pick random spot around the right or upper side
        const randX = rect.left + rect.width * (0.45 + Math.random() * 0.4);
        const randY = rect.top + rect.height * (0.2 + Math.random() * 0.5);
        spawnCard(randX, randY);
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [containerRef, spawnCard, trailEnabled, popups.length]);

  return (
    <>
      {/* Floating Interactive Image Trail Canvas */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-20"
        aria-hidden="true"
      >
        {popups.map((popup) => (
          <div
            key={popup.key}
            style={{
              left: `${popup.x}px`,
              top: `${popup.y}px`,
              transform: `translate(-50%, -50%) rotate(${popup.rotation}deg) scale(${
                popup.isLeaving ? 0.75 : popup.scale
              })`,
              opacity: popup.isLeaving ? 0 : 1,
              transition:
                "transform 550ms cubic-bezier(0.16, 1, 0.3, 1), opacity 550ms ease-out",
            }}
            className="absolute will-change-transform shadow-2xl rounded-2xl p-2 bg-stone-900/90 backdrop-blur-md border border-amber-300/40 w-52 sm:w-60 pointer-events-none select-none transition-all"
          >
            {/* Image Container with smooth aspect ratio */}
            <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden bg-stone-800">
              <img
                src={popup.moment.image}
                alt={popup.moment.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Badge */}
              <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-[10px] font-semibold text-amber-200 px-2 py-0.5 rounded-full border border-amber-400/30">
                {popup.moment.badge}
              </span>
            </div>

            {/* Card Info */}
            <div className="mt-2 px-1 text-left">
              <h4 className="text-white text-xs sm:text-sm font-bold line-clamp-1 leading-snug drop-shadow-sm">
                {popup.moment.title}
              </h4>
              <p className="text-amber-200/80 text-[10px] sm:text-xs flex items-center gap-1 mt-0.5 truncate">
                <svg
                  className="w-3 h-3 text-accent shrink-0"
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
                {popup.moment.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Interactive Filter & Hint Ribbon */}
      <div className="relative z-30 mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          <span className="text-amber-200/90 font-medium">
            Hover cursor or tap screen to pop up wildlife, resorts & activities
          </span>
        </div>

        {/* Category Filter Chips for Cursor Pops */}
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full border border-white/15">
          {[
            { id: "all", label: "All Wonders" },
            { id: "wildlife", label: "🦁 Wildlife" },
            { id: "resort", label: "🏕️ Resorts" },
            { id: "activity", label: "🎈 Activities" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-accent text-white shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setTrailEnabled(!trailEnabled)}
            title={trailEnabled ? "Pause cursor trail" : "Resume cursor trail"}
            className="px-2 py-1 text-[10px] text-white/50 hover:text-white rounded-full ml-1"
          >
            {trailEnabled ? "Pause" : "Resume"}
          </button>
        </div>
      </div>
    </>
  );
}
