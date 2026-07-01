import Image from "next/image";

const orderItems = [
  {
    name: "Glazed Croissant Cubes",
    image: "/images/order_section_images/01_glazed_croissant_cubes.webp",
  },
  {
    name: "Strawberry Cream Tartlets",
    image: "/images/order_section_images/02_strawberry_cream_tartlets.webp",
  },
  {
    name: "Raspberry Cream Cupcakes",
    image: "/images/order_section_images/03_raspberry_cream_cupcakes.webp",
  },
  {
    name: "Black Forest Mini Cakes",
    image: "/images/order_section_images/04_black_forest_mini_cakes.webp",
  },
  {
    name: "Citrus Cream Cups",
    image: "/images/order_section_images/05_citrus_cream_cups.webp",
  },
  {
    name: "Strawberry Danish Rounds",
    image: "/images/order_section_images/06_strawberry_danish_rounds.webp",
  },
  {
    name: "Cherry Blossom Mini Cakes",
    image: "/images/order_section_images/07_cherry_blossom_mini_cakes.webp",
  },
  {
    name: "Pastel Cake Pops",
    image: "/images/order_section_images/08_pastel_cake_pops.webp",
  },
  {
    name: "Chocolate Covered Strawberries",
    image: "/images/order_section_images/09_chocolate_covered_strawberries.webp",
  },
];

export function LargeOrdersSection() {
  return (
    <section className="section large-orders" id="large-orders" aria-labelledby="large-orders-title">
      <div className="container">
        <div className="large-orders-heading">
          <div>
            <p className="large-orders-eyebrow">Honeyvault Bakery</p>
            <h2 id="large-orders-title">Big orders, baked beautifully</h2>
            <p>
              From one box to full dessert tables - custom batches for birthdays,
              brunches, office treats, gifting, and celebrations.
            </p>
          </div>
          <span className="large-orders-note">Pre-orders start at 1 box</span>
        </div>

        <div className="large-orders-gallery" aria-label="Large order dessert options">
          {orderItems.map((item) => (
            <article className="large-order-card" tabIndex={0} key={item.name}>
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 72vw, 260px"
              />
              <span>{item.name}</span>
            </article>
          ))}
        </div>

        <aside className="large-orders-cta" aria-label="Custom box ordering details">
          <div>
            <h3>Custom boxes & event trays</h3>
            <p>
              Planning a birthday, brunch, office treat, or dessert table? Pick your
              favorites and contact us for quantities, availability, and custom flavors.
            </p>
            <ul className="large-orders-details" aria-label="Large order details">
              <li>Minimum: 1 box</li>
              <li>Made to order</li>
              <li>Pickup or local delivery options</li>
            </ul>
          </div>
          <div className="large-orders-actions">
            <a className="large-orders-button" href="#booking">
              Request a large order
            </a>
            <p>Call or message us to plan your box.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
