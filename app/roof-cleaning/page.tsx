export default function RoofCleaningPage() {
  const includedServices = [
    "Roof moss removal",
    "Soft wash roof cleaning",
    "Tile roof cleaning",
    "Gutter clearing after roof cleaning",
    "Downpipe flushing",
  ];

  const areas = [
    "Blessington",
    "Naas",
    "Tallaght",
    "Clane",
    "Clondalkin",
    "South Dublin",
  ];

  const steps = [
    "Request a quote online or by phone.",
    "We review your job and match you with a trusted local contractor.",
    "Your roof cleaning is completed safely and professionally.",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Roof Cleaning & Moss Removal
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Roof Cleaning & Moss Removal in Dublin and Kildare
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Professional roof cleaning to remove moss, algae and debris from
              tiled roofs. LEA Solutions helps homeowners get fast quotes from
              trusted local contractors across Blessington, Naas, Tallaght and
              surrounding areas.
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
                Safe moss removal methods
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium">
                Trusted local contractors
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium">
                Fast local quotes
              </div>
            </div>
          </div>

         <div
            id="quote"
             className="relative z-10 mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:mt-0"
           >
            <h2 className="text-2xl font-bold tracking-tight">
              Request a Roof Cleaning Quote
            </h2>
            <p className="mt-3 text-slate-600">
              Send your details and we’ll help arrange a fast quote for your
              roof cleaning job.
            </p>

          <form
  name="quote-request"
  method="POST"
  action="/thank-you.html"
  data-netlify="true"
  netlify
  data-netlify-honeypot="bot-field"
  className="relative z-10 mt-6 grid gap-4"
>
  <input type="hidden" name="form-name" value="quote-request" />

  <p className="hidden">
    <label>
      Don’t fill this out if you're human: <input name="bot-field" />
    </label>
  </p>

  <input
    type="text"
    name="fullName"
    placeholder="Full Name"
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
  />

  <input
    type="text"
    name="phoneNumber"
    placeholder="Phone Number"
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
  />

  <input
    type="email"
    name="emailAddress"
    placeholder="Email Address"
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
  />

  <input
    type="text"
    name="areaAddress"
    placeholder="Area / Address"
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
  />

  <select
    name="service"
    defaultValue="Roof Cleaning"
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
  >
    <option>Roof Cleaning</option>
    <option>Driveway Cleaning</option>
    <option>Patio Cleaning</option>
    <option>Gutter Clearing</option>
    <option>Exterior House Cleaning</option>
    <option>Wheelie Bin Cleaning</option>
  </select>

  <textarea
    rows={4}
    name="jobDetails"
    placeholder="Tell us about your roof, moss build-up, property type or access"
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
  />

  <button
    type="submit"
    className="relative z-20 w-full rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
  >
    Request My Quote
  </button>
</form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Why Roof Cleaning Matters
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Moss and algae trap moisture, which can affect roof tiles, block
              gutters and contribute to long-term problems if left untreated.
              Regular roof cleaning improves kerb appeal and helps protect the
              condition of your roof.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-bold tracking-tight">
              What’s Included
            </h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              {includedServices.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
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
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Areas We Cover for Roof Cleaning
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We help connect homeowners with local roof cleaning contractors in
            Dublin, Kildare and surrounding areas.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold">Roof Cleaning {area}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Local roof cleaning quotes available in {area}.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight">
            Need roof moss removed?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Get a fast quote today for roof cleaning in Dublin and Kildare.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get Quote
            </a>
            <a
              href="tel:0868886086"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Call 086 888 6086
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}