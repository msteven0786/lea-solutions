import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about LEA Solutions and how we help homeowners across Dublin and Kildare arrange trusted exterior cleaning services.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-slate-200 px-4 py-1 text-sm font-medium text-slate-700">
              About LEA Solutions
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Helping homeowners find trusted local exterior cleaning services
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              LEA Solutions helps homeowners across Dublin and Kildare connect with
              trusted local contractors for exterior cleaning and property services.
              Our focus is simple: make it easier to request a quote quickly and get
              help from reliable local professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Our Approach</h2>
            <p className="mt-4 leading-7 text-slate-600">
              We keep the process simple. You tell us what service you need, where
              you are based, and a few details about the job. From there, we help
              arrange a quote from a suitable local contractor.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Services Covered</h2>
            <p className="mt-4 leading-7 text-slate-600">
              We help with roof cleaning, gutter cleaning, patio cleaning and driveway
              cleaning for homeowners who want a fast, straightforward way to get
              exterior cleaning work priced.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Areas Covered</h2>
            <p className="mt-4 leading-7 text-slate-600">
              LEA Solutions focuses on Dublin and Kildare, helping homeowners in local
              areas connect with trusted professionals for exterior cleaning jobs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Need a quote for an exterior cleaning job?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Visit our contact page and send over a few details. We’ll help point you
            in the right direction.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </section>
    </main>
  );
}