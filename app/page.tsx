import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BakeryFinderSection } from "@/components/BakeryFinderSection";
import { BakeryTextureGallery } from "@/components/BakeryTextureGallery";
import { LocationsSection } from "@/components/LocationsSection";
import { HoneyvaultHighlights } from "@/components/HoneyvaultHighlights";
import { TypographicBanner } from "@/components/TypographicBanner";
import { LargeOrdersSection } from "@/components/LargeOrdersSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BakeryFinderSection />
        <Reveal><BakeryTextureGallery /></Reveal>
        <Reveal><HoneyvaultHighlights /></Reveal>
        <Reveal><LargeOrdersSection /></Reveal>
        <Reveal><TypographicBanner /></Reveal>
        <Reveal><LocationsSection /></Reveal>
        <Reveal>
          <TypographicBanner
            src="/images/typographic-banner/typographic-banner-2.webp"
            mobileSrc="/images/typographic-banner/typographic-banner-movil.webp"
            alt="Honeyvault Bakery typographic banner"
            className="flush-top"
          />
        </Reveal>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
