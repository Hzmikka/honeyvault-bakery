"use client";

import { FormEvent } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { navLinks } from "@/data/content";

const searchTargets = [
  {
    id: "textures",
    terms: [
      "pastry",
      "pastries",
      "croissant",
      "roll",
      "bread",
      "baguette",
      "eclair",
      "éclair",
      "chocolate",
      "almond",
      "pistachio",
      "strawberry",
      "texture",
      "textures",
      "menu",
    ],
  },
  {
    id: "large-orders",
    terms: [
      "box",
      "boxes",
      "custom",
      "cake",
      "cakes",
      "birthday",
      "brunch",
      "event",
      "tray",
      "trays",
      "office",
      "dessert",
      "large order",
      "order",
    ],
  },
  {
    id: "locations",
    terms: [
      "location",
      "locations",
      "shop",
      "shops",
      "map",
      "miami",
      "wynwood",
      "coral",
      "gables",
      "south",
      "beach",
      "pickup",
      "delivery",
    ],
  },
  {
    id: "highlights",
    terms: ["review", "reviews", "testimonial", "testimonials", "rating", "ratings", "highlight", "highlights"],
  },
  {
    id: "booking",
    terms: ["book", "booking", "contact", "visit", "plan", "request", "date", "message"],
  },
];

function getSearchTarget(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return "textures";
  }

  return (
    searchTargets.find((target) =>
      target.terms.some((term) => normalizedQuery.includes(term)),
    )?.id ?? "textures"
  );
}

export function Header() {
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = String(formData.get("site-search") ?? "");
    const targetId = getSearchTarget(query);
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label="Honeyvault Bakery home">
          <Image
            src="/images/logo/Primary-Logo.png"
            alt="Honeyvault Bakery"
            width={600}
            height={362}
            priority
            sizes="128px"
          />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <form className="search-pill" role="search" onSubmit={handleSearch}>
            <label className="sr-only" htmlFor="site-search">
              Search pastries and orders
            </label>
            <input
              id="site-search"
              name="site-search"
              type="search"
              placeholder="Search pastries, boxes, or occasions..."
            />
            <button type="submit" aria-label="Search">
              <Search size={15} strokeWidth={2.1} />
            </button>
          </form>
          <a className="signin-button" href="#booking">
            Book
          </a>
        </div>
      </div>
    </header>
  );
}
