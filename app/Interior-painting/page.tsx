import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Painting Dublin, Wicklow & Kildare | Fast & Affordable",
  description:
    "Professional interior painting services across Dublin, Wicklow and Kildare. Clean, reliable and fast turnaround. Get a free quote today.",
};

export default function InteriorPaintingPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        Interior Painting Services Dublin, Wicklow & Kildare
      </h1>

      <p className="mb-6 text-lg">
        We provide fast, clean and affordable interior painting for homes and rental properties.
        Whether you need a single room refreshed or a full house painted, we can help.
      </p>

      {/* CTA */}
      <a
        href="#quote"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg mb-10"
      >
        Get a Free Quote
      </a>

      {/* Why Choose Us */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Clean and tidy work</li>
          <li>Fast turnaround</li>
          <li>Affordable pricing</li>
          <li>Local and reliable service</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Typical Interior Painting Prices
        </h2>
        <ul className="space-y-2">
          <li>Single room: €150 – €350</li>
          <li>2–3 rooms: €400 – €800</li>
          <li>Full house: €900 – €2,000+</li>
        </ul>
        <p className="mt-3 text-sm">
          Prices depend on size, prep work and paint choice.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Request a quote</li>
          <li>We review details or arrange a quick call</li>
          <li>Job completed cleanly and professionally</li>
        </ol>
      </section>

      {/* Areas */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Areas We Cover</h2>
        <p>
          Dublin, Tallaght, Clondalkin, Terenure, Templeogue, Naas, Blessington,
          Newbridge and surrounding areas.
        </p>
      </section>

      {/* Quote Form */}
      <section id="quote" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Get a Free Quote</h2>

        <form
          name="quote-request"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="quote-request" />
          <p hidden>
            <input name="bot-field" />
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
          />

          <textarea
            name="details"
            placeholder="What needs painting? (rooms, size, etc.)"
            required
            className="w-full border p-3 rounded h-32"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Request Quote
          </button>
        </form>
      </section>

    </main>
  );
}