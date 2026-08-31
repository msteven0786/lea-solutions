import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about LEA Solutions and our practical approach to AI, automation and software for service businesses.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#DCE8FF] px-4 py-1 text-sm font-medium text-[#0B3B8C]">
              About LEA Solutions
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Practical technology built around real business problems.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              LEA Solutions helps service businesses reduce repetitive admin,
              improve how they handle enquiries and build smarter workflows
              using AI, automation and custom software.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
              Why LEA Solutions
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              AI should solve a problem, not create another one.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Small businesses are surrounded by new AI tools, automation
              platforms and software. But knowing which ones are actually useful
              — and getting them to work together — can quickly become another
              job in itself.
            </p>

            <p>
              LEA Solutions takes a different approach. We start by looking at
              how your business currently operates and identifying repetitive
              work, slow processes and opportunities that may be getting missed.
            </p>

            <p>
              Then we build a practical solution around the problem.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FBFF] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Start small. Solve something useful. Build from there.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold text-[#0B3B8C]">01</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Understand
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Understand how the business works today and identify where time
                is being lost.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold text-[#0B3B8C]">02</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Automate
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Build a focused system that removes repetitive work or improves
                an important process.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold text-[#0B3B8C]">03</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Improve
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Measure what works and expand the system when there is a clear
                reason to do so.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Where is your business losing time?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Show us a repetitive process, admin bottleneck or lead-handling
            problem and we&apos;ll explore whether AI or automation can improve it.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Book a Free Automation Review
          </Link>
        </div>
      </section>
    </main>
  );
}