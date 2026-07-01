"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Croissant,
  MapPin,
  Navigation,
  Sparkles,
} from "lucide-react";

const rotatingItems = [
  "chocolate croissant",
  "custom cake",
  "brunch pastry box",
  "coffee & pastry stop",
  "birthday dessert table",
  "warm sourdough loaf",
];

const neighborhoods = [
  "Wynwood",
  "Brickell",
  "Coral Gables",
  "Coconut Grove",
  "Little Havana",
  "South Beach",
];

export function BakeryFinderSection() {
  const [itemIndex, setItemIndex] = useState(0);
  const [neighborhoodIndex, setNeighborhoodIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setItemIndex((current) => (current + 1) % rotatingItems.length);
    }, 2500);

    return () => {
      window.clearInterval(interval);
    };
  }, [prefersReducedMotion]);

  const activeNeighborhood = neighborhoods[neighborhoodIndex];

  const shiftNeighborhood = (direction: "previous" | "next") => {
    setNeighborhoodIndex((current) => {
      if (direction === "previous") {
        return (current - 1 + neighborhoods.length) % neighborhoods.length;
      }

      return (current + 1) % neighborhoods.length;
    });
  };

  return (
    <section className="bakery-finder" aria-labelledby="bakery-finder-title">
      <div className="bakery-finder-shell">
        <div className="bakery-finder-badges" aria-label="Bakery highlights">
          <span className="bakery-finder-badge">
            <Croissant size={15} strokeWidth={2} />
            Fresh baked daily
          </span>
          <span className="bakery-finder-badge">
            <Sparkles size={15} strokeWidth={2} />
            Miami pickup & delivery
          </span>
        </div>

        <div className="bakery-finder-content">
          <h2 className="bakery-finder-title" id="bakery-finder-title">
            Find a{" "}
            <span className="rotating-word-frame" aria-live="polite">
              <span className="rotating-word" key={rotatingItems[itemIndex]}>
                {rotatingItems[itemIndex]}
              </span>
            </span>{" "}
            in Miami
          </h2>

          <div className="bakery-zone-picker" aria-label="Explore Honeyvault neighborhoods">
            <button
              className="bakery-zone-arrow"
              type="button"
              aria-label="Show previous Miami neighborhood"
              onClick={() => shiftNeighborhood("previous")}
            >
              <ArrowLeft size={18} strokeWidth={2.2} />
            </button>

            <a
              className="bakery-map-card"
              href="https://www.google.com/maps/search/bakery+near+Miami"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bakery-map-icon" aria-hidden="true">
                <MapPin size={22} strokeWidth={2.1} />
              </span>
              <span className="bakery-map-copy">
                <span className="bakery-map-title">See shops near you</span>
                <span className="bakery-map-subtitle">
                  Fresh pastries available near {activeNeighborhood}
                </span>
              </span>
            </a>

            <button
              className="bakery-zone-arrow"
              type="button"
              aria-label="Show next Miami neighborhood"
              onClick={() => shiftNeighborhood("next")}
            >
              <ArrowRight size={18} strokeWidth={2.2} />
            </button>
          </div>

          <a
            className="bakery-open-map"
            href="https://www.google.com/maps/search/bakery+near+Miami"
            target="_blank"
            rel="noreferrer"
          >
            <Navigation size={14} strokeWidth={2} />
            Open map
          </a>
        </div>
      </div>
    </section>
  );
}
