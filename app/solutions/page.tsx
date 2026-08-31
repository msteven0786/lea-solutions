import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI & Automation Solutions",
  description:
    "Practical AI, automation and custom business systems for service businesses. Reduce repetitive admin, improve follow-up and save time with LEA Solutions.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      number: "01",
      title: "Lead Follow-Up Automation",
      description:
        "Make sure new enquiries are followed up consistently without relying on manual emails, reminders or repetitive admin.",
      examples: [
        "Automatically capture new enquiries",
        "Categorise and qualify leads",
        "Prepare personalised responses",
        "Notify the right person",
        "Keep lead information organised",
      ],
    },
    {
      number: "02",
      title: "Customer Onboarding",
      description:
        "Create a smoother process when a new customer comes on board by automating forms, confirmations and information collection.",
      examples: [
        "Send welcome information automatically",
        "Collect customer details",
        "Create internal records",
        "Send confirmations and next steps",
        "Reduce repetitive data entry",
      ],
    },
    {
      number: "03",
      title: "Business Admin Automation",
      description:
        "Reduce time spent on repetitive administrative work by connecting the tools and processes your business already uses.",
      examples: [
        "Move information between systems",
        "Create automatic notifications",
        "Organise incoming requests",
        "Generate routine documents",
        "Reduce manual copying and data entry",
      ],
    },
    {
      number: "04",
      title: "AI-Assisted Workflows",
      description:
        "Use AI where it genuinely adds value — helping your business understand enquiries, organise information and prepare useful responses.",
      examples: [
        "Classify incoming enquiries",
        "Summarise customer information",
        "Draft personalised responses",
        "Extract useful information",
        "Route requests to the right workflow",
      ],
    },
    {
      number: "05",
      title: "Custom Business Systems",
      description:
        "When off-the-shelf software doesn't quite fit, we can build practical systems around the way your business actually operates.",
      examples: [
        "Simple internal dashboards",
        "Customer and job tracking",
        "Custom forms and workflows",
        "Administrative systems",
        "Industry-specific software",
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-[#EAF2FF] via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#DCE8FF] px-4 py-1 text-sm font-medium text-[#0B3B8C]">
              AI & Automation Solutions
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Automate the repetitive work that slows your business down.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              LEA Solutions builds practical automation and AI systems for
              service businesses — helping reduce admin, improve follow-up and
              create more efficient ways of working.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-[#0B3B8C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#082d6c]"
              >
                Book a Free Automation Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0B3B8C]">
              Where we can help
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your team shouldn't spend hours doing work software can handle.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              Many service businesses grow with processes that work initially
              but become increasingly manual over time. Enquiries need to be
              copied, emails need to be sent, information needs to be entered
              into different systems and important follow-ups depend on someone
              remembering to do them.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              We look at those repetitive processes and find practical ways to
              simplify or automate them.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0B3B8C]">
              What we build
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Practical systems built around your business.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              You don't need to know what technology or AI tools you need. Tell
              us what's taking up your time and we'll work backwards from the
              problem.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {solutions.map((solution) => (
              <div
                key={solution.number}
                className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[100px_1fr_1fr]"
              >
                <div>
                  <span className="text-3xl font-bold text-[#0B3B8C]">
                    {solution.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {solution.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {solution.description}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Examples
                  </p>

                  <ul className="mt-3 space-y-2">
                    {solution.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span className="mt-1 font-bold text-[#0B3B8C]">✓</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE APPROACH IT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#0B3B8C]">
            Start with the problem
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            You don't need an AI strategy.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Start by showing us the repetitive work that's costing you time.
            We'll help identify where automation could make the biggest
            difference.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "1",
              title: "Show us the process",
              text: "Tell us what's repetitive, slow or frustrating in your business.",
            },
            {
              number: "2",
              title: "We find the opportunity",
              text: "We identify where automation or AI could remove unnecessary manual work.",
            },
            {
              number: "3",
              title: "We build the solution",
              text: "We create and test a practical workflow designed around how your business operates.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-200 p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DCE8FF] font-bold text-[#0B3B8C]">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B3B8C]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Not sure what you should automate?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            That's exactly what the free automation review is for. Tell us how
            your business currently works and we'll help identify where you
            could save time.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B3B8C] hover:bg-blue-50"
            >
              Book a Free Automation Review
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}