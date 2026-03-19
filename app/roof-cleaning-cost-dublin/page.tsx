import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Cleaning Cost Dublin | Moss Removal Prices",
  description:
    "Typical roof cleaning costs in Dublin and Kildare. Learn how much moss removal and roof cleaning costs and request a fast quote today.",
};

export default function RoofCleaningCostPage() {
  const priceExamples = [
    {
      type: "Small Terraced House",
      price: "€250 – €400",
    },
    {
      type: "Semi-Detached House",
      price: "€350 – €600",
    },
    {
      type: "Detached House",
      price: "€500 – €900",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Roof Cleaning Cost in Dublin
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Roof cleaning prices in Dublin and Kildare vary depending on roof
            size, moss build-up and property access. This guide explains typical
            roof cleaning costs and what factors affect pricing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">
          Typical Roof Cleaning Prices
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          The cost of roof cleaning normally depends on the property size and
          the amount of moss present. Below are typical price ranges seen for
          roof cleaning jobs in Dublin and surrounding areas.
        </p>

        <div className="mt-10 space-y-6">
          {priceExamples.map((item) => (
            <div
              key={item.type}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{item.type}</h3>
                <span className="text-lg font-bold text-slate-900">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            What Affects Roof Cleaning Cost?
          </h2>

          <ul className="mt-8 space-y-4 text-lg text-slate-600">
            <li>• Roof size and number of tiles</li>
            <li>• Amount of moss or algae present</li>
            <li>• Roof pitch and accessibility</li>
            <li>• Property height</li>
            <li>• Whether gutters require clearing afterwards</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">
          Why Professional Roof Cleaning Matters
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Moss can trap moisture and affect the condition of roof tiles over
          time. Professional roof cleaning removes moss and debris safely while
          protecting the roof surface.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Many homeowners choose roof cleaning every few years to maintain the
          appearance of the property and prevent moss build-up.
        </p>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight">
            Get a Roof Cleaning Quote
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Request a fast quote today for roof cleaning in Dublin and Kildare.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/roof-cleaning#quote"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100"
            >
              Get Quote
            </a>

            <a
              href="tel:0868886086"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Call 086 888 6086
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}