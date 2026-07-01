type TypographicBannerProps = {
  src?: string;
  mobileSrc?: string;
  alt?: string;
  className?: string;
};

export function TypographicBanner({
  src = "/images/typographic-banner/typographic-banner.webp",
  mobileSrc,
  alt = "Honeyvault Bakery typographic banner",
  className,
}: TypographicBannerProps) {
  return (
    <section
      className={`typographic-banner${className ? ` ${className}` : ""}`}
      aria-label="Honeyvault typographic banner"
    >
      <picture>
        {mobileSrc ? <source media="(max-width: 680px)" srcSet={mobileSrc} /> : null}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </section>
  );
}
