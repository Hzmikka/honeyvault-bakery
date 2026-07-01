"use client";

import { FormEvent, useState } from "react";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="newsletter booking-section" id="booking">
      <div className="container newsletter-inner booking-inner">
        <div className="booking-intro">
          <p>Honeyvault Bakery</p>
          <h2>Plan your next sweet order</h2>
          <span>
            Custom boxes, event trays, brunch desserts, birthday sweets, and
            made-to-order batches - tell us what you need and we&apos;ll help you plan it.
          </span>
        </div>

        <form className="newsletter-form booking-form" onSubmit={handleSubmit}>
          <div className="booking-field">
            <label htmlFor="booking-name">Name</label>
            <input id="booking-name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="booking-field">
            <label htmlFor="booking-contact">Email or phone</label>
            <input
              id="booking-contact"
              name="contact"
              type="text"
              placeholder="Email or phone"
              required
            />
          </div>
          <div className="booking-field">
            <label htmlFor="booking-type">Order type / occasion</label>
            <input
              id="booking-type"
              name="orderType"
              type="text"
              placeholder="Birthday, brunch, office treat, dessert table, custom box..."
            />
          </div>
          <div className="booking-field">
            <label htmlFor="booking-date">Preferred date</label>
            <input id="booking-date" name="date" type="date" />
          </div>
          <div className="booking-field booking-field-wide">
            <label htmlFor="booking-message">Message</label>
            <textarea
              id="booking-message"
              name="message"
              rows={4}
              placeholder="Tell us what you're planning, how many people, and any flavors you have in mind."
            />
          </div>

          <div className="booking-actions">
            <button type="submit">Request a booking</button>
            <a
              className="whatsapp-button"
              href="#booking"
            >
              Message us on WhatsApp
            </a>
          </div>
        </form>

        <p className="privacy booking-microcopy">
          {submitted
            ? "Thank you - we'll reach out to plan your order."
            : "We'll confirm availability, quantities, flavors, and pickup or local delivery options."}
        </p>
      </div>
    </section>
  );
}
