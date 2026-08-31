import Link from "next/link";

export default function Home() {
  const solutions = [
    {
      title: "AI Lead Qualification",
      text: "Automatically review new enquiries, identify the strongest opportunities and help your team respond faster.",
    },
    {
      title: "Automated Lead Follow-Up",
      text: "Make sure new leads are followed up consistently without relying on manual emails or admin.",
    },
    {
      title: "Customer Onboarding",
      text: "Automate forms, confirmations, information collection and internal handovers when a new customer comes on board.",
    },
    {
      title: "Business Admin Automation",
      text: "Reduce repetitive work by connecting the tools you already use and automating the steps between them.",
    },
    {
      title: "AI-Assisted Workflows",
      text: "Use AI to help classify enquiries, draft responses, organise information and support everyday business processes.",
    },
    {
      title: "Custom Business Systems",
      text: "Build practical software and workflows around the way your business actually operates.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Find the bottleneck",
      text: "We look at where your team is losing time, repeating tasks or missing opportunities.",
    },
    {
      number: "02",
      title: "Build the solution",
      text: "We design a practical automation or software workflow around the problem.",
    },
    {
      number: "03",
      title: "Test and launch",
      text: "We test the system with you before putting it into everyday use.",
    },
    {
      number: "04",
      title: "Improve over time",
      text: "As your business changes, the system can be refined and expanded.",
    },
  ];

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-[#EAF2FF] via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#DCE8FF] px-4 py-1 text-sm font-medium text-[#0B3B8C]">
              AI & Automation for Service Businesses
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Put repetitive business admin on autopilot.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              LEA Solutions builds practical AI and automation systems that help
              service businesses respond faster, reduce admin and save time every
              week.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xl bg-[#0B3B8C] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#082d6c]"
              >
                Book a Free Automation Review
              </Link>

              <Link
                href="#solutions"
                className="rounded-xl border border-[#0B3B8C] px-6 py-3 text-center text-sm font-semibold text-[#0B3B8C] hover:bg-[#EAF2FF]"
              >
                See What We Can Automate
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
              A typical automation
            </p>

            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              New enquiry → qualified lead → fast follow-up
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Customer submits an enquiry",
                "AI reviews and categorises the lead",
                "Lead details are stored automatically",
                "A personalised response is prepared",
                "The business is notified",
                "Follow-up happens without repetitive admin",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DCE8FF] text-sm font-bold text-[#0B3B8C]">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
            The goal
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Your business doesn&apos;t need more AI.
            <br />
            It needs fewer repetitive tasks.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We focus on practical systems that solve real business problems —
            faster responses, less admin, better follow-up and smoother workflows.
          </p>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
            What we build
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            Practical automation for everyday business problems
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Rather than selling AI for the sake of AI, we build systems around
            repetitive work that is already costing your business time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-10 w-10 rounded-xl bg-[#DCE8FF]" />

              <h3 className="text-xl font-semibold text-slate-900">
                {solution.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{solution.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-[#F8FBFF] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Start with the problem, not the technology
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The first step is understanding how your business currently works
              and where time is being wasted.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-bold text-[#0B3B8C]">
                  {step.number}
                </p>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 rounded-3xl bg-slate-900 px-8 py-12 text-white lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
              Start simple
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Find one process that is wasting your time.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Show us how you currently handle leads, enquiries, customer admin
              or another repetitive process. We&apos;ll look for practical ways to
              automate it.
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
      </section>
    </main>
  );
}