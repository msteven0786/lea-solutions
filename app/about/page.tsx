import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about LEA Solutions and how we help homeowners across Dublin, Wicklow and Kildare with interior painting and property services.",
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
              Interior painting and property services made simple
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              LEA Solutions connects homeowners with trusted local professionals for
              interior painting and property services across Dublin, Wicklow and
              Kildare. Our goal is simple: make it easier to request a quote quickly
              and get help from reliable local professionals.
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
              arrange the right next step and a fast quote from a suitable local
              professional.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Interior Painting First
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Interior painting is our main focus. From refreshing a single room to
              repainting larger spaces, we help homeowners and landlords improve
              their properties with clean, reliable and affordable painting
              services.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Additional Property Services
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Alongside interior painting, we also help with other property services
              including roof cleaning, gutter cleaning, patio cleaning and driveway
              cleaning across Dublin, Wicklow and Kildare.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Need a quote for interior painting or another property service?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Visit our contact page and send over a few details. We’ll get back to
            you quickly and help point you in the right direction.
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