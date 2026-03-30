import Link from "next/link";
import QuoteForm from "../components/QuoteForm";

export default function Home() {
  const services = [
    {
      title: "Interior Painting",
      text: "Fast, clean and affordable interior painting for homes and rental properties across Dublin and Kildare.",
      href: "/interior-painting",
    },
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
      text: "Fast and reliable gutter clearing to help prevent blockages and water damage.",
      href: "/gutter-cleaning",
    },
  ];

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-[#EAF2FF] via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#DCE8FF] px-4 py-1 text-sm font-medium text-[#0B3B8C]">
              Dublin & Kildare
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Interior Painting & Property Services in Dublin & Kildare
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              LEA Solutions provides fast, reliable interior painting and exterior property services for homeowners across Dublin and Kildare.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/interior-painting"
                className="rounded-xl bg-[#0B3B8C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#082d6c]"
              >
                View Interior Painting
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-[#0B3B8C] px-6 py-3 text-sm font-semibold text-[#0B3B8C] hover:bg-[#EAF2FF]"
              >
                Request a Quote
              </Link>

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
              formName="homepage-quote"
              heading="Request a Quote"
              description="Send your details and we’ll help arrange a fast quote for your painting or property service job."
              defaultService="Interior Painting"
              jobDetailsPlaceholder="Tell us about the job"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Interior painting and property services for homeowners across Dublin and Kildare.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0B3B8C] hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#0B3B8C]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FBFF] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A simple way to request a quote and get your job moving.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#DCE8FF] font-bold text-[#0B3B8C]">
                1
              </div>
              <h3 className="font-semibold text-slate-900">Submit Details</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tell us what service you need and where you are located.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#DCE8FF] font-bold text-[#0B3B8C]">
                2
              </div>
              <h3 className="font-semibold text-slate-900">We Review Your Job</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We review the details and help arrange the right next step for your painting or property service job.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#DCE8FF] font-bold text-[#0B3B8C]">
                3
              </div>
              <h3 className="font-semibold text-slate-900">Get Your Quote</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Receive a quote and arrange the work quickly and easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Ready to get started?
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Request a quote today and we’ll help you get your job sorted quickly.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/interior-painting"
            className="rounded-xl bg-[#0B3B8C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#082d6c]"
          >
            View Interior Painting
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-[#0B3B8C] px-6 py-3 text-sm font-semibold text-[#0B3B8C] hover:bg-[#EAF2FF]"
          >
            Request a Quote
          </Link>

          <a
            href="tel:0868886086"
            className="rounded-xl border border-[#0B3B8C] px-6 py-3 text-sm font-semibold text-[#0B3B8C] hover:bg-[#EAF2FF]"
          >
            Call 086 888 6086
          </a>
        </div>
      </section>
    </main>
  );
}