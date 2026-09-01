import type { Metadata } from "next";
import AutomationReviewForm from "../../components/AutomationReviewForm";

export const metadata: Metadata = {
  title: "Free Automation Review",
  description:
    "Tell LEA Solutions about a repetitive process or admin bottleneck in your business and explore how AI and automation could help.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#DCE8FF] px-4 py-1 text-sm font-medium text-[#0B3B8C]">
              Free Automation Review
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Where is your business losing time?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Tell us about a repetitive task, admin bottleneck or process that
              takes too much time. We&apos;ll look at whether AI or automation
              could make it faster, simpler or more reliable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
              What happens next?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Start with one real business problem.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              You don&apos;t need to know anything about AI or automation. Just
              explain how the process currently works and what is frustrating
              about it.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  number: "1",
                  title: "Tell us about the problem",
                  text: "Describe the repetitive task or process you would like to improve.",
                },
                {
                  number: "2",
                  title: "We review the workflow",
                  text: "We look at where automation could remove manual work or improve the process.",
                },
                {
                  number: "3",
                  title: "You get a practical recommendation",
                  text: "If there is a worthwhile solution, we explain what could be built and what the next step would be.",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DCE8FF] text-sm font-bold text-[#0B3B8C]">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Email
              </p>

              <a
                href="mailto:steven@leasolutions.ie"
                className="mt-2 block text-lg font-semibold text-slate-900 hover:text-[#0B3B8C]"
              >
                steven@leasolutions.ie
              </a>
            </div>
          </div>

          <AutomationReviewForm />
        </div>
      </section>
    </main>
  );
}