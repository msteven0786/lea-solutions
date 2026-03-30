import Link from "next/link";
import QuoteForm from "../components/QuoteForm";

export default function Home() {
  const services = [
    {
      title: "Interior Painting",
      text: "Fast, clean and affordable interior painting for homes and rental properties.",
      href: "/interior-painting",
    },
    {
      title: "Roof Cleaning",
      text: "Professional roof cleaning to remove moss, algae and improve appearance.",
      href: "/roof-cleaning",
    },
    {
      title: "Driveway Cleaning",
      text: "Pressure washing for driveways and outdoor surfaces.",
      href: "/driveway-cleaning",
    },
    {
      title: "Patio Cleaning",
      text: "Deep cleaning for patios and paved areas.",
      href: "/patio-cleaning",
    },
    {
      title: "Gutter Cleaning",
      text: "Prevent blockages and water damage with gutter clearing.",
      href: "/gutter-cleaning",
    },
  ];

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
              Get a fast quote and refresh your space with a professional finish.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/interior-painting"
                className="rounded-xl bg-[#0B3B8C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#082d6c]"
              >
                View Interior Painting
              </Link>

              <Link
                href="#quote"
                className="rounded-xl border border-[#0B3B8C] px-6 py-3 text-sm font-semibold text-[#0B3B8C] hover:bg-[#EAF2FF]"
              >
                Get Free Quote
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
              description="Send your details and we’ll get back to you quickly."
              defaultService="Interior Painting"
              jobDetailsPlaceholder="Tell us about the painting job"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Clean & tidy work",
            "Fast turnaround",
            "Affordable pricing",
            "Trusted local service",
          ].map((item) => (
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
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Perfect For</h2>
          <p className="mt-4 text-lg text-slate-600">
            Interior painting that suits everyday home improvement and property refresh jobs.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Landlords refreshing properties",
              "Homeowners redecorating",
              "Preparing a home for sale",
              "Moving in or moving out",
            ].map((item) => (
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
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Additional Property Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Interior painting is our main focus, with additional property services also available.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.text}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#0B3B8C]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Get Your Interior Painting Quote
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Tell us about your job and we’ll get back to you quickly.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-[#0B3B8C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#082d6c]"
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