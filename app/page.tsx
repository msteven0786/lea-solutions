import Link from "next/link";
import QuoteForm from "../components/QuoteForm";

export default function Home() {
  const services = [
    {
      title: "Roof Cleaning",
      text: "Professional roof cleaning to remove moss, algae and improve the appearance of your home.",
      href: "/roof-cleaning",
    },
    {
      title: "Driveway Cleaning",
      text: "Pressure washing for driveways and outdoor surfaces to remove dirt, moss, algae and staining.",
      href: "/driveway-cleaning",
    },
    {
      title: "Patio Cleaning",
      text: "Refresh patios and paved areas with a deep clean that restores their look and improves kerb appeal.",
      href: "/patio-cleaning",
    },
    {
      title: "Gutter Cleaning",
      text: "Fast and reliable gutter clearing to prevent blockages and water damage.",
      href: "/gutter-cleaning",
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-slate-200 px-4 py-1 text-sm font-medium text-slate-700">
              Dublin & Kildare
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Get Fast Quotes for Roof, Gutter, Patio & Driveway Cleaning
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              LEA Solutions helps homeowners connect with trusted local contractors
              for exterior cleaning services across Dublin and Kildare.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Request a Quote
              </Link>

              <a
                href="tel:0868886086"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Call 086 888 6086
              </a>
            </div>
          </div>

          {/* QUOTE FORM */}
          <div>
            <QuoteForm
              formName="homepage-quote"
              heading="Request a Quote"
              description="Send your details and we’ll help arrange a fast quote for your job."
              defaultService="Roof Cleaning"
              jobDetailsPlaceholder="Tell us about the job"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Our Services
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            How It Works
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">1. Submit Details</h3>
              <p className="mt-2 text-sm text-slate-600">
                Tell us what service you need and where you are located.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">2. We Connect You</h3>
              <p className="mt-2 text-sm text-slate-600">
                We help connect you with a suitable local contractor.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">3. Get Your Quote</h3>
              <p className="mt-2 text-sm text-slate-600">
                Receive a quote and arrange the work directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Ready to get started?
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Request a quote today and we’ll help you get your job sorted quickly.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Request a Quote
          </Link>

          <a
            href="tel:0868886086"
            className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Call 086 888 6086
          </a>
        </div>
      </section>
    </main>
  );
}