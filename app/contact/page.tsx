import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LEA Solutions for roof cleaning, gutter cleaning, patio cleaning and driveway cleaning quotes across Dublin and Kildare.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-slate-200 px-4 py-1 text-sm font-medium text-slate-700">
              Contact LEA Solutions
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Request a quote or get in touch
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Looking for roof cleaning, driveway cleaning, patio cleaning or gutter
              cleaning? Send us your details and we’ll help connect you with a trusted
              local contractor.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Contact Details</h2>

            <div className="mt-6 space-y-5 text-slate-600">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </p>
                <a
                  href="tel:0868886086"
                  className="mt-1 block text-lg font-medium text-slate-900 hover:text-slate-700"
                >
                  086 888 6086
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:steven@leasolutions.ie"
                  className="mt-1 block text-lg font-medium text-slate-900 hover:text-slate-700"
                >
                  steven@leasolutions.ie
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Areas Covered
                </p>
                <p className="mt-1 text-lg text-slate-900">
                  Dublin and Kildare
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Fastest way to get a quote
              </h3>
              <p className="mt-2 text-slate-600">
                Fill in the form with a few details about your job and we’ll be in touch
                as soon as possible.
              </p>
            </div>
          </div>

          <QuoteForm
            formName="contact-page-quote"
            heading="Request a Quote"
            description="Tell us what service you need and we’ll help arrange a fast quote."
            defaultService="Roof Cleaning"
            jobDetailsPlaceholder="Example: semi-detached house, moss on roof, located in Tallaght"
          />
        </div>
      </section>
    </main>
  );
}