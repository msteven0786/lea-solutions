import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting LEA Solutions about your automation needs.",
};

export default function ThankYouPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            Automation Review Request Received
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Thanks — we&apos;ve received your enquiry
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            We&apos;ll review the information you&apos;ve provided and look for
            practical ways AI and automation could help reduce repetitive admin
            in your business.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-left">
            <h2 className="text-lg font-semibold text-slate-900">
              What happens next?
            </h2>

            <div className="mt-4 space-y-3 text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">1.</span> We review
                your current process and the tasks you&apos;d like to improve.
              </p>

              <p>
                <span className="font-semibold text-slate-900">2.</span> We
                identify where automation could save time or improve follow-up.
              </p>

              <p>
                <span className="font-semibold text-slate-900">3.</span> We&apos;ll
                get in touch to discuss the most useful next step.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Keep an eye on your inbox for a response from LEA Solutions.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-xl bg-[#0B3B8C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#082d6c]"
            >
              Back to Home
            </Link>

            <Link
              href="/solutions"
              className="rounded-xl border border-[#0B3B8C] px-6 py-3 text-sm font-semibold text-[#0B3B8C] hover:bg-[#EAF2FF]"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}