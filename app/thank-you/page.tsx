import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting LEA Solutions.",
};

export default function ThankYouPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            Quote Request Sent
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Thank you for your enquiry
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            We’ve received your details and will be in touch as soon as possible.
            If your request is urgent, you can call us directly below.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:0868886086"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Call 086 888 6086
            </a>

            <Link
              href="/"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}