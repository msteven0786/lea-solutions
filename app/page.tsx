export default function Home() {
  const services = [
    {
      title: "Driveway Cleaning",
      text: "Professional pressure washing to remove moss, algae, dirt and staining from driveways and outdoor surfaces.",
    },
    {
      title: "Patio Cleaning",
      text: "Refresh patios and paved areas with a deep clean that improves appearance and removes built-up grime.",
    },
    {
      title: "Gutter Clearing",
      text: "Fast and reliable gutter clearing to help prevent blockages, overflow and water damage.",
    },
    {
      title: "Exterior House Cleaning",
      text: "Exterior surface cleaning arranged through trusted local contractors for homes and properties.",
    },
    {
      title: "Wheelie Bin Cleaning",
      text: "Monthly wheelie bin cleaning service coming soon for local homes and estates.",
    },
    {
      title: "Roof Cleaning",
      text: "Professional roof cleaning to remove moss, algae and restore the appearance of your home."
   }
  ];

  const steps = [
    "Request a quote online or by phone.",
    "We review the job and match you with a trusted local contractor.",
    "Your job gets completed quickly and professionally.",
  ];

  const areas = [
    "Blessington",
    "Tallaght",
    "Naas",
    "Clane",
    "Clondalkin",
    "South Dublin",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <p className="inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Local Cleaning & Property Services
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Reliable Local Cleaning & Property Services
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              LEA Solutions helps homeowners quickly find trusted local
              contractors for driveway cleaning, patio washing, gutter clearing
              and roof cleaning.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Get a Free Quote
              </a>

              <a
                href="tel:0868886086"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Call 086 888 6086
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium">
                Fast local quotes
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium">
                Trusted contractors
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium">
                Competitive pricing
              </div>
            </div>
          </div>

          <div
            id="quote"
            className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:mt-0"
          >
            <h2 className="text-2xl font-bold tracking-tight">Request a Quote</h2>
            <p className="mt-3 text-slate-600">
              Send your details and we’ll help arrange a fast quote for your
              job.
            </p>

            <form className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-500"
              />
              <input
                type="text"
                placeholder="Area / Address"
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-500"
              />
              <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-500">
                <option>Select Service</option>
                <option>Driveway Cleaning</option>
                <option>Patio Cleaning</option>
                <option>Gutter Clearing</option>
                <option>Exterior House Cleaning</option>
                <option>Wheelie Bin Cleaning</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about the job"
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-500"
              />
              <button
                type="button"
                className="rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
              >
                Request My Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Services We Arrange
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A simple way for homeowners to get reliable local quotes for
            cleaning and exterior property services.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-lg font-medium leading-8">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Areas We Cover</h2>
            <p className="mt-4 text-lg text-slate-600">
              We focus on local areas in Dublin and nearby towns so customers
              can get fast quotes and reliable service.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight">
              Why choose LEA Solutions?
            </h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>Trusted local contractor network</li>
              <li>Fast and simple quote process</li>
              <li>Clear communication from start to finish</li>
              <li>Focused on practical local service delivery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight">
            Need a quote for your property?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Call, email or send your details through the quote form and we’ll
            help arrange a fast response.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:steven@leasolutions.ie"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              steven@leasolutions.ie
            </a>
            <a
              href="tel:0868886086"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              086 888 6086
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}