"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Sofia R.",
    tag: "Wynwood",
    rating: 5,
    title: "The pistachio croissant was unreal",
    body: "The pastry layers were crisp, buttery, and filled with the smoothest pistachio cream. It felt like a tiny luxury before work.",
  },
  {
    name: "Maya C.",
    tag: "Coral Gables",
    rating: 5,
    title: "My new morning ritual",
    body: "I stopped in for coffee and left with a box of pastries. Everything felt warm, polished, and still very neighborhood.",
  },
  {
    name: "Elena V.",
    tag: "South Beach",
    rating: 4,
    title: "Beautiful enough to photograph",
    body: "The strawberry cream croissant tasted as good as it looked. Light, glossy, fresh, and not overly sweet.",
  },
  {
    name: "Camille D.",
    tag: "Brickell",
    rating: 5,
    title: "The chocolate roll is dangerous",
    body: "Deep cocoa, flaky edges, and that glossy center. I bought one for later and ate it before reaching the car.",
  },
  {
    name: "Nina P.",
    tag: "Little Havana",
    rating: 4,
    title: "Soft, elegant, and actually delicious",
    body: "A lot of pretty bakeries forget flavor. Honeyvault feels designed, but the pastries still taste handmade.",
  },
  {
    name: "Ari M.",
    tag: "Miami Beach",
    rating: 5,
    title: "Best pastry box for brunch",
    body: "The mix of croissants, rolls, and fruit pastries made the table look expensive with zero effort.",
  },
  {
    name: "Valeria G.",
    tag: "Coconut Grove",
    rating: 5,
    title: "The kind of place you remember",
    body: "Warm light, beautiful pastries, good coffee, and staff that didn't rush us. It felt like a small escape.",
  },
  {
    name: "Isabel T.",
    tag: "Wynwood",
    rating: 5,
    title: "Worth crossing town for",
    body: "The almond cream croissant had crisp edges, toasted almonds, and a soft center that tasted rich without being heavy.",
  },
  {
    name: "Lucia B.",
    tag: "Coral Gables",
    rating: 4,
    title: "Great coffee stop, slightly busy",
    body: "The space feels calm and intentional, and the pastries were lovely. It was a little crowded when I went, but still worth the stop.",
  },
  {
    name: "Reina S.",
    tag: "South Beach",
    rating: 5,
    title: "Fresh, glossy, and flaky",
    body: "The fruit pastries were bright and delicate, with that perfect bakery-window shine. Very Miami, but still classic.",
  },
  {
    name: "Daniela M.",
    tag: "Wynwood",
    rating: 5,
    title: "The textures are everything",
    body: "You can hear the croissant crack when you cut it. That alone sold me.",
  },
  {
    name: "Ana L.",
    tag: "Coral Gables",
    rating: 4,
    title: "A bakery that feels curated",
    body: "Every detail made sense: the pastries, the packaging, the colors, the coffee. It feels premium without feeling cold.",
  },
  {
    name: "Bianca F.",
    tag: "Downtown Miami",
    rating: 5,
    title: "Bought one, came back for six",
    body: "The vanilla glazed roll was soft, warm, and ridiculously comforting. I went back for a box the next morning.",
  },
  {
    name: "Marina J.",
    tag: "South Beach",
    rating: 4,
    title: "Elegant but not intimidating",
    body: "It looks fancy, but it still feels like somewhere you can sit with coffee and breathe for a minute.",
  },
  {
    name: "Clara N.",
    tag: "Wynwood",
    rating: 5,
    title: "That caramel spiral roll",
    body: "Sticky, crisp, glossy, and layered. It tasted like the bakery version of a good perfume ad.",
  },
  {
    name: "Paula E.",
    tag: "Miami",
    rating: 5,
    title: "Small details, big difference",
    body: "The pastry box had labels, textures, and flavors that felt considered. It made a casual brunch feel special.",
  },
  {
    name: "Lola R.",
    tag: "Coral Gables",
    rating: 4,
    title: "The baguette was perfect",
    body: "Crisp crust, open crumb, and just enough chew. I bought it for dinner and ended up eating half on the way home.",
  },
  {
    name: "Gabriela H.",
    tag: "South Beach",
    rating: 5,
    title: "My favorite sweet stop",
    body: "The iced coffee and croissant combo was exactly what I wanted after the beach: cold, flaky, and a little indulgent.",
  },
  {
    name: "Amelia K.",
    tag: "Wynwood",
    rating: 5,
    title: "Pretty, but with substance",
    body: "The branding is beautiful, but the real reason I came back was the dough. The lamination is genuinely good.",
  },
  {
    name: "Noa S.",
    tag: "Miami",
    rating: 3,
    title: "Beautiful pastries, but the wait was long",
    body: "The pastries were genuinely good and the branding is gorgeous, but the line moved slowly when I visited. I'd come back earlier in the morning next time.",
  },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function HoneyvaultHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeReview = reviews[activeIndex];
  const dotWindowStart = Math.min(
    Math.max(activeIndex - 2, 0),
    Math.max(reviews.length - 5, 0),
  );
  const visibleDots = reviews.slice(dotWindowStart, dotWindowStart + 5);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  useEffect(() => {
    if (isPaused || prefersReducedMotion()) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section
      className="section highlights"
      id="highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="section-heading highlights-heading">
          <div>
            <h2>Honeyvault Highlights</h2>
          </div>
          <span>Demo reviews for portfolio presentation.</span>
        </div>

        <div className="highlights-grid">
          <article className="testimonial-card" aria-live="polite">
            <div className="profile-row">
              <div className="avatar" aria-hidden="true">
                {activeReview.name.charAt(0)}
              </div>
              <div>
                <strong>{activeReview.name}</strong>
                <span>{activeReview.tag}</span>
              </div>
            </div>
            <div className="testimonial-copy">
              <div className="stars" aria-label={`${activeReview.rating} star review`}>
                {[...Array(activeReview.rating)].map((_, index) => (
                  <Star key={index} size={12} fill="currentColor" />
                ))}
              </div>
              <h3>{activeReview.title}</h3>
              <p>{activeReview.body}</p>
            </div>

            <div className="testimonial-controls" aria-label="Review controls">
              <button type="button" onClick={showPrevious} aria-label="Previous review">
                <ChevronLeft size={15} strokeWidth={2} />
              </button>
              <div className="testimonial-dots" aria-label="Select review">
                {visibleDots.map((review, index) => {
                  const reviewIndex = dotWindowStart + index;

                  return (
                    <button
                      type="button"
                      className={reviewIndex === activeIndex ? "active" : ""}
                      aria-label={`Show review from ${review.name}`}
                      aria-pressed={reviewIndex === activeIndex}
                      key={`${review.name}-${review.tag}`}
                      onClick={() => setActiveIndex(reviewIndex)}
                    />
                  );
                })}
              </div>
              <button type="button" onClick={showNext} aria-label="Next review">
                <ChevronRight size={15} strokeWidth={2} />
              </button>
            </div>
          </article>

          <div className="highlight-media-column">
            <article className="highlight-media large-media lift-card">
              <Image
                src="/images/croissant-car/croissant-car.webp"
                alt="Honeyvault Bakery branded croissant delivery truck"
                fill
                sizes="(max-width: 768px) 100vw, 430px"
              />
            </article>
            <p>Real words from our demo bakery guests.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
