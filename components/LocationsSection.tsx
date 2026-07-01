"use client";

import { KeyboardEvent, useState } from "react";

const locations = [
  {
    id: "wynwood",
    label: "Flagship",
    name: "Honeyvault Wynwood",
    address: "255 NW 24th St",
    meta: "255 NW 24th St · 7am-6pm",
    image: "/images/Ubication/Flagship.png",
    mapImage: "/images/location/Honeyvault-Wynwood.png",
    detail:
      "Our signature pastry studio with laminated classics, seasonal viennoiserie, and specialty coffee. Open Mon-Sun, 7:00 AM-6:00 PM.",
  },
  {
    id: "coral-gables",
    label: "Neighborhood shop",
    name: "Honeyvault Coral Gables",
    address: "151 Miracle Mile",
    meta: "151 Miracle Mile · 7:30am-5:30pm",
    image: "/images/Ubication/Neighborhood-stop.png",
    mapImage: "/images/location/Honeyvault-Coral-Gables.png",
    detail:
      "A softer neighborhood stop for brunch boxes, pastries, and custom sweets. Open Mon-Sat, 7:30 AM-5:30 PM.",
  },
  {
    id: "south-beach",
    label: "Beach stop",
    name: "Honeyvault South Beach",
    address: "845 Collins Ave",
    meta: "845 Collins Ave · 8am-7pm",
    image: "/images/Ubication/Beach-stop.png",
    mapImage: "/images/location/Honeyvault-South-Beach.png",
    detail:
      "A bright coastal pickup spot for coffee, croissants, and weekend dessert boxes. Open daily, 8:00 AM-7:00 PM.",
  },
];

export function LocationsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedLocation = locations[selectedIndex];

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedIndex(index);
    }
  };

  return (
    <section className="section locations-section" id="locations">
      <div className="container">
        <p className="locations-kicker">Fresh pastry stops across Miami</p>
        <div className="section-heading split-heading">
          <div>
            <h2>Find Honeyvault in Miami</h2>
            <p className="locations-subtitle">
              Three neighborhood bakeries, one shared pastry obsession.
            </p>
          </div>
        </div>

        <div className="locations-grid">
          <article className="location-feature">
            <div className="location-map-media location-map-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="location-map-image"
                src={selectedLocation.mapImage}
                alt={`Stylized pink map showing ${selectedLocation.name} location`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="category">About Honeyvault</p>
            <h3>Crafted in Miami, layered with intention.</h3>
            <p className="excerpt">
              Honeyvault Bakery is a Miami pastry concept built around laminated dough,
              specialty coffee, and small everyday rituals. Our shops are imagined as warm
              neighborhood stops for croissants, fruit pastries, chocolate rolls, and seasonal bakes.
            </p>
            <a
              className="outline-button location-visit-button"
              href="#booking"
            >
              Plan your visit
            </a>
          </article>

          <div className="location-card-list location-list" aria-label="Honeyvault Bakery locations">
            {locations.map((location, index) => {
              const isActive = selectedIndex === index;

              return (
                <article className={`location-row location-card${isActive ? " active" : ""}`} key={location.name}>
                  <button
                    type="button"
                    aria-label={`Show ${location.name} on map`}
                    aria-pressed={isActive}
                    onClick={() => setSelectedIndex(index)}
                    onFocus={() => setSelectedIndex(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  >
                    <span className="location-icon" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={location.image} alt="" loading="lazy" decoding="async" />
                    </span>
                    <span className="location-copy">
                      <span className="category">{location.label}</span>
                      <strong>{location.name}</strong>
                      <span>{location.meta}</span>
                    </span>
                  </button>
                  {isActive ? (
                    <div className="location-detail">
                      <p>{location.detail}</p>
                      <button type="button" onClick={() => setSelectedIndex(index)}>
                        Show this map
                      </button>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
