import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how LEA Solutions identifies repetitive business processes and turns them into practical AI and automation systems.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Show us the process",
      text: "We start by understanding how the task works today, where time is being lost and what is frustrating your team.",
    },
    {
      number: "02",
      title: "Find the opportunity",
      text: "We identify which parts can realistically be automated, simplified or improved without adding unnecessary complexity.",
    },
    {
      number: "03",
      title: "Design the workflow",
      text: "We map out a practical solution using the right combination of automation, AI and software for the job.",
    },
    {
      number: "04",
      title: "Build and test",
      text: "We build the system, test it with real scenarios and make sure it works reliably before launch.",
    },
    {
      number: "05",
      title: "Launch and improve",
      text: "Once live, the workflow can be refined, expanded or connected to more parts of the business over time.",
    },
  ];

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-[#EAF2FF] via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#DCE8FF] px-4 py-1 text-sm font-medium text-[#0B3B8C]">
              How It Works
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Start with the business problem, not the technology.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              You don&apos;t need to know which AI tool or automation platform
              to use. Show us what is repetitive, slow or frustrating and
              we&apos;ll work backwards from there.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
            Our process
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From repetitive task to working system.
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[90px_1fr]"
            >
              <div className="text-3xl font-bold text-[#0B3B8C]">
                {step.number}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
                What we look for
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                Good automation usually starts with something repetitive.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Repeated data entry",
                "Manual lead follow-up",
                "Copying information between systems",
                "Routine emails and confirmations",
                "Customer onboarding admin",
                "Internal notifications",
                "Forms and spreadsheets",
                "Repetitive document creation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white sm:px-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                First step
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Show us one process that wastes your time.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                We&apos;ll review how it currently works and explore whether
                automation could make it faster, simpler or more reliable.
              </p>
            </div>

            <div className="lg:text-right">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Book a Free Automation Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}