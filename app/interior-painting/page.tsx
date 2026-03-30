import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "../../components/QuoteForm";

export const metadata: Metadata = {
  title: "Interior Painting Dublin, Wicklow & Kildare",
  description:
    "Professional interior painting services across Dublin, Wicklow and Kildare. Clean, reliable and affordable painting for homes and rental properties. Get a fast free quote today.",
};

const benefits = [
  "Clean and tidy work",
  "Fast turnaround",
  "Affordable pricing",
  "Trusted local service",
];

const idealFor = [
  "Single room refreshes",
  "Rental property repaints",
  "Living rooms, bedrooms and hallways",
  "Moving in or moving out",
];

const pricing = [
  "Single room: €150 – €350",
  "2–3 rooms: €400 – €800",
  "Full house: €900 – €2,000+",
];

const process = [
  {
    title: "Send Your Details",
    text: "Tell us what needs painting, where the property is located and any useful details about the job.",
  },
  {
    title: "Get a Fast Quote",
    text: "We review your request and come back to you quickly with the next step and a quote.",
  },
  {
    title: "Refresh Your Space",
    text: "Get your interior painting job completed with a clean, professional finish.",
  },
];

const faqs = [
  {
    question: "How much does interior painting cost?",
    answer:
      "Interior painting prices depend on the size of the room, the amount of prep work needed and the type of paint used. Small rooms usually cost less, while larger or more detailed jobs cost more.",
  },
  {
    question: "Do you cover Dublin, Wicklow and Kildare?",
    answer:
      "Yes, we cover Dublin, Wicklow and Kildare, including surrounding areas where possible.",
  },
  {
    question: "Can I request a quote from photos?",
    answer:
      "Yes, in many cases a quote can be started from photos and basic job details, which helps speed things up.",
  },
  {
    question: "Is interior painting suitable for rental properties?",
    answer:
      "Yes, interior painting is ideal for rental refreshes, pre-sale touch-ups and general home improvement.",
  },
];

export default function InteriorPaintingPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-[#EAF2FF] via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#DCE8FF] px-4 py-1 text-sm font-medium text-[#0B3B8C]">
              Dublin, Wicklow & Kildare
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Interior Painting Services in Dublin, Wicklow & Kildare
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Clean, reliable and affordable interior painting for homes and rental properties.
              Whether you need one room refreshed or a full property repainted, we can help you get it sorted quickly.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#quote"
                className="rounded-xl bg-[#0B3B8C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#082d6c]"
              >
                Get Free Quote
              </a>

              <a
                href="tel:0868886086"
                className="rounded-xl border border-[#0B3B8C] px-6 py-3 text-sm font-semibold text-[#0B3B8C] hover:bg-[#EAF2FF]"
              >
                Call 086 888 6086
              </a>
            </div>
          </div>

          <div>
            <QuoteForm
              formName="interior-painting-quote"
              heading="Request an Interior Painting Quote"
              description="Send your details and we’ll get back to you quickly."
              defaultService="Interior Painting"
              jobDetailsPlaceholder="Tell us about the painting job"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <p className="font-semibold text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FBFF] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Perfect For
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Interior painting that works well for everyday property updates and refresh jobs.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {idealFor.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Typical Interior Painting Prices
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Pricing depends on room size, prep work, surface condition and paint choice, but these guide prices help give a rough idea.
            </p>

            <ul className="mt-8 space-y-4">
              {pricing.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <span className="font-medium text-slate-900">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-slate-500">
              Final pricing may vary depending on access, prep requirements and the scope of the job.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Why Homeowners Choose Interior Painting
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              A fresh coat of paint can quickly improve the look of a room, brighten tired spaces and make a property feel cleaner, newer and better cared for.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">Refresh tired rooms</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Interior painting is one of the fastest ways to update bedrooms, hallways, living rooms and rental spaces.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">Improve presentation</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Fresh paint helps when preparing a property for sale, new tenants or simply making your home feel better to live in.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">Fast visual impact</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Even one room can make a noticeable difference when painted neatly and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FBFF] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A simple way to request your quote and get your painting job moving.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#DCE8FF] font-bold text-[#0B3B8C]">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-[#0B3B8C] px-8 py-10 text-white md:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Ready to refresh your home?
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                Get a fast interior painting quote for your home or rental property in Dublin, Wicklow or Kildare.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="#quote"
                className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-[#0B3B8C] hover:bg-blue-50"
              >
                Request a Quote
              </a>
              <a
                href="tel:0868886086"
                className="rounded-xl border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                Call 086 888 6086
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Looking for other services too?
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          We also help with additional property services across Dublin, Wicklow and Kildare.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/roof-cleaning"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:border-[#0B3B8C] hover:text-[#0B3B8C]"
          >
            Roof Cleaning
          </Link>
          <Link
            href="/driveway-cleaning"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:border-[#0B3B8C] hover:text-[#0B3B8C]"
          >
            Driveway Cleaning
          </Link>
          <Link
            href="/patio-cleaning"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:border-[#0B3B8C] hover:text-[#0B3B8C]"
          >
            Patio Cleaning
          </Link>
          <Link
            href="/gutter-cleaning"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:border-[#0B3B8C] hover:text-[#0B3B8C]"
          >
            Gutter Cleaning
          </Link>
        </div>
      </section>
    </main>
  );
}