# Honeyvault Bakery Starter

Premium editorial landing page for a fictional Miami bakery brand. The project uses a two-color identity, brand textures, location cards, pastry close-ups, testimonials, large-order sections, and typographic campaign banners.

## Run locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Build

```bash
npm run build
```

## Scripts

- `npm run dev`: local development server.
- `npm run lint`: lint check.
- `npm run build`: production build.
- `npm run clean`: removes `.next` and TypeScript build cache.

## Main sections

- `components/Header.tsx`: navigation and search bar.
- `components/Hero.tsx`: main editorial bakery hero.
- `components/BakeryFinderSection.tsx`: rotating pastry finder and neighborhood selector.
- `components/BakeryTextureGallery.tsx`: horizontal texture gallery with product information.
- `components/HoneyvaultHighlights.tsx`: rotating review/testimonial carousel.
- `components/LargeOrdersSection.tsx`: custom boxes and event tray section.
- `components/TypographicBanner.tsx`: Honeyvault campaign banner imagery.
- `components/LocationsSection.tsx`: Miami locations section.
- `components/Newsletter.tsx`: demo booking form.
- `components/Footer.tsx`: footer and portfolio demo note.

## Brand palette

- Cherry Blossom: `#F5CBD9`
- Midnight Cocoa: `#2E1B1B`

## Notes

Honeyvault Bakery is a fictional portfolio concept. Real ordering details, contact information, and operational availability should be replaced before any real launch.

The cleaned portfolio package intentionally excludes `node_modules` and `.next`. Run `npm install` before development or building.
