import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Automation Review",
  description:
    "Tell LEA Solutions about a repetitive process or admin bottleneck in your business and explore how AI and automation could help.",
};

export default function ContactPage() {
  const fieldClasses =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0B3B8C] focus:ring-2 focus:ring-[#0B3B8C]/10";

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

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
              Tell us about your business
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Request your free automation review
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Give us a little context about your business and the process you
              would like to improve.
            </p>

            <form
              name="automation-review"
              method="POST"
              action="/thank-you"
              data-netlify="true"
              className="mt-8 space-y-5"
            >
              <input
                type="hidden"
                name="form-name"
                value="automation-review"
              />

              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={fieldClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="text-sm font-semibold text-slate-700"
                >
                  Business name
                </label>

                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Business name"
                  className={fieldClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@business.com"
                  className={fieldClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-slate-700"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  className={fieldClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="problem"
                  className="text-sm font-semibold text-slate-700"
                >
                  What would you like to improve?
                </label>

                <textarea
                  id="problem"
                  name="problem"
                  required
                  rows={5}
                  placeholder="Example: Every new enquiry comes through email and I manually copy the details into a spreadsheet, reply to the customer and then remind myself to follow up..."
                  className={fieldClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="text-sm font-semibold text-slate-700"
                >
                  Roughly how much time does this take?
                </label>

                <select
                  id="time"
                  name="time"
                  defaultValue=""
                  className={`${fieldClasses} appearance-none`}
                >
                  <option value="">Select an option</option>
                  <option value="less-than-1-hour">
                    Less than 1 hour per week
                  </option>
                  <option value="1-3-hours">1–3 hours per week</option>
                  <option value="3-5-hours">3–5 hours per week</option>
                  <option value="5-plus-hours">5+ hours per week</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#0B3B8C] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#082d6c]"
              >
                Request My Free Automation Review
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                No obligation. We&apos;ll review the information and get back to
                you with the most useful next step.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}