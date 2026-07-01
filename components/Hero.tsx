"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-image-wrap">
          <Image
            src="/images/hero/honeyvault-bakery.webp"
            alt="Honeyvault Bakery"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1120px"
          />
        </div>
      </div>
    </section>
  );
}
