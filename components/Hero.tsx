"use client";

import Image from "next/image";
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
          <Image
            src="/images/hero/honeyvault-bakery.webp"
            alt="Honeyvault Bakery"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1120px"
          />
        </motion.div>
      </div>
    </section>
  );
}
