"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/honeyvault-bakery.png"
            alt="Honeyvault Bakery"
          />
        </motion.div>
      </div>
    </section>
  );
}
