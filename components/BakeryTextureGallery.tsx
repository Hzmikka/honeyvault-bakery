"use client";

import { KeyboardEvent, useState } from "react";
import { ShoppingBag } from "lucide-react";

const pastries = [
  {
    name: "Almond Cream Croissant",
    price: "$7.95",
    detail: "Almond cream, toasted almonds, powdered sugar.",
    nutrition: "480 cal / contains nuts / dairy",
    image: "/images/close-up/croissant-almendras.webp",
  },
  {
    name: "Pistachio Croissant",
    price: "$7.50",
    detail: "Pistachio cream, laminated crust, crushed pistachios.",
    nutrition: "430 cal / contains nuts / dairy",
    image: "/images/close-up/croissant-pistacho.webp",
  },
  {
    name: "Vanilla Glazed Roll",
    price: "$6.25",
    detail: "Soft laminated swirl, vanilla glaze, golden crust.",
    nutrition: "410 cal / contains dairy / gluten",
    image: "/images/close-up/roll-glaseado-blanco.webp",
  },
  {
    name: "Chocolate Roll",
    price: "$6.95",
    detail: "Cocoa swirl, glossy chocolate, caramelized layers.",
    nutrition: "460 cal / contains dairy / gluten",
    image: "/images/close-up/roll-chocolate.webp",
  },
  {
    name: "Strawberry Cream Croissant",
    price: "$7.75",
    detail: "Fresh strawberry, vanilla cream, flaky laminated shell.",
    nutrition: "450 cal / contains dairy / gluten",
    image: "/images/close-up/croissant-fresa-crema.webp",
  },
  {
    name: "Chocolate Éclair",
    price: "$6.75",
    detail: "Dark chocolate glaze, airy pastry, cocoa finish.",
    nutrition: "390 cal / contains dairy / gluten",
    image: "/images/close-up/eclair-chocolate.webp",
  },
  {
    name: "Artisan Baguette",
    price: "$5.25",
    detail: "Crisp crust, open crumb, slow-fermented dough.",
    nutrition: "280 cal / vegan / gluten",
    image: "/images/close-up/pan-baguette.webp",
  },
  {
    name: "Caramel Spiral Roll",
    price: "$6.50",
    detail: "Burnished spiral layers, caramel shine, crisp edges.",
    nutrition: "420 cal / contains dairy / gluten",
    image: "/images/close-up/roll-espiral-superior.webp",
  },
];

export function BakeryTextureGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePastry = activeIndex === null ? null : pastries[activeIndex];

  const selectPastry = (index: number) => {
    setActiveIndex(index);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectPastry(index);
    }
  };

  return (
    <section className="texture-gallery section" id="textures" aria-labelledby="texture-gallery-title">
      <div className="container texture-gallery-inner">
        <div className="texture-gallery-heading">
          <div>
            <p>Honeyvault Bakery</p>
            <h2 id="texture-gallery-title">Signature textures</h2>
          </div>
          <span>Hover a pastry to reveal the craving.</span>
        </div>

        <div className="texture-card-row" aria-label="Signature pastry texture menu">
          {pastries.map((pastry, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                className={`texture-card${isActive ? " active" : ""}`}
                type="button"
                aria-label={`Reveal ${pastry.name}`}
                aria-pressed={isActive}
                key={pastry.name}
                onMouseEnter={() => selectPastry(index)}
                onFocus={() => selectPastry(index)}
                onClick={() => selectPastry(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pastry.image}
                  alt=""
                />
                <span className="texture-card-sheen" />
              </button>
            );
          })}
        </div>

        <div className="texture-info-panel" aria-live="polite">
          <div className="texture-info-bubble">
            {activePastry ? (
              <>
                <div className="texture-info-copy">
                  <div className="texture-info-title-row">
                    <h3>{activePastry.name}</h3>
                    <strong>{activePastry.price}</strong>
                  </div>
                  <p>{activePastry.detail}</p>
                  <span>{activePastry.nutrition}</span>
                </div>
                <a className="texture-info-button" href="#booking">
                  <ShoppingBag size={15} strokeWidth={2} />
                  Add to box
                </a>
              </>
            ) : (
              <div className="texture-placeholder">
                <strong>HONEYVAULT BAKERY</strong>
                <span>Explore the textures behind our signature pastries.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
