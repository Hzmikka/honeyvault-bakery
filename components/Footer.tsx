const footerGroups = [
  {
    heading: "Bakery",
    links: [
      { label: "Signature textures", href: "#textures" },
      { label: "Fresh pastries", href: "#textures" },
      { label: "Large orders", href: "#large-orders" },
      { label: "About us", href: "#highlights" },
    ],
  },
  {
    heading: "Orders",
    links: [
      { label: "Custom boxes", href: "#booking" },
      { label: "Event trays", href: "#booking" },
      { label: "Birthday sweets", href: "#booking" },
      { label: "Office treats", href: "#booking" },
      { label: "Request a booking", href: "#booking" },
    ],
  },
  {
    heading: "Contact",
    links: [
      {
        label: "WhatsApp",
        href: "#booking",
      },
      { label: "Email us", href: "mailto:hello@honeyvaultbakery.example" },
      { label: "Pickup info", href: "#locations" },
      { label: "Local delivery", href: "#locations" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", shortLabel: "IG", href: "#top" },
  { label: "TikTok", shortLabel: "TT", href: "#top" },
  { label: "Pinterest", shortLabel: "PI", href: "#top" },
  { label: "Email", shortLabel: "@", href: "mailto:hello@honeyvaultbakery.example" },
];

export function Footer() {
  return (
    <footer className="footer" aria-label="Honeyvault Bakery footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="footer-title" href="#top" aria-label="Honeyvault Bakery home">
            Honeyvault Bakery
          </a>
          <p>
            Fresh pastries, custom boxes, and made-to-order sweets for brunches,
            birthdays, office treats, and dessert tables.
          </p>
          <span className="footer-social-label">Follow us</span>
          <div className="social-row" aria-label="Social links">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.label} aria-label={link.label}>
                {link.shortLabel}
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <nav className="footer-column" aria-label={group.heading} key={group.heading}>
            <h3>{group.heading}</h3>
            {group.links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}
      </div>

      <div className="container footer-demo-note">
        <p>
          Honeyvault Bakery is a fictional bakery concept created as a premium
          portfolio demo. Real ordering details, pricing, and availability would be
          added before launch.
        </p>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2026 Honeyvault Bakery Demo. Fictional portfolio project — not a real
          bakery. Design, copy, and visuals are intellectual property. No real
          orders are processed through this demo.
        </div>
      </div>
    </footer>
  );
}
