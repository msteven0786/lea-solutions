import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Moss Removal Dublin | Professional Roof Cleaning",
  description:
    "Professional roof moss removal in Dublin and Kildare. Remove moss, algae and debris from roof tiles safely. Request a fast roof cleaning quote today.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is roof moss removal necessary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Moss traps moisture which can affect roof tiles and block gutters over time. Removing moss helps maintain the condition of the roof.",
      },
    },
    {
      "@type": "Question",
      name: "How is moss removed from roofs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional roof moss removal usually involves manual moss removal followed by a soft wash treatment to clean remaining algae and debris.",
      },
    },
    {
      "@type": "Question",
      name: "How much does roof moss removal cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roof moss removal costs vary depending on roof size, moss build-up and access. Many jobs range between €250 and €900 depending on the property.",
      },
    },
  ],
};

export default function RoofMossRemovalPage() {
  const benefits = [
    "Removes heavy moss build-up",
    "Improves roof appearance",
    "Helps prevent blocked gutters",
    "Reduces moisture on roof tiles",
    "Fast local quote service",
  ];

  const areas = [
    "Blessington",
    "Naas",
    "Tallaght",
    "Clondalkin",
    "Clane",
    "South Dublin",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Roof Moss Removal
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Roof Moss Removal in Dublin
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Moss can quickly build up on roof tiles, especially in damp Irish
              weather conditions. Professional roof moss removal helps restore
              the appearance of your roof while helping prevent blocked gutters
              and moisture build-up.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              LEA Solutions helps homeowners connect with trusted local roof
              cleaning contractors across Dublin and Kildare.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/roof-cleaning#quote"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800"
              >
                Request Quote
              </a>

              <a
                href="tel:0868886086"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-100"
              >
                Call 086 888 6086
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight">
              Why Remove Moss From Your Roof?
            </h2>

            <ul className="mt-6 space-y-4 text-slate-600">
              {benefits.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">
            What Causes Moss to Grow on Roofs?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Moss grows easily on roof tiles in damp climates where moisture
            remains on the surface for long periods. Shade from nearby trees and
            north-facing roofs can also increase moss growth.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Over time moss can trap moisture against tiles and cause debris to
            collect in gutters and valleys.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            Areas We Cover for Roof Moss Removal
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold">
                  Roof Moss Removal {area}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Local roof moss removal quotes available in {area}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            Roof Moss Removal FAQs
          </h2>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                Is roof moss removal necessary?
              </h3>
              <p className="mt-3 text-slate-600">
                Moss traps moisture which can affect roof tiles and block
                gutters. Removing moss helps maintain roof condition and
                improve appearance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                How is moss removed from roofs?
              </h3>
              <p className="mt-3 text-slate-600">
                Moss removal normally involves careful scraping of moss
                followed by soft wash treatment to clean remaining algae and
                debris.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                How much does roof moss removal cost?
              </h3>
              <p className="mt-3 text-slate-600">
                Roof moss removal costs vary depending on roof size, moss
                build-up and access. Typical jobs often range from €250 to €900.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight">
            Need Roof Moss Removed?
          </h2>

          <p className="mt-4 text-lg text-slate-300">
            Request a fast quote today for roof moss removal in Dublin and
            Kildare.
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