"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AutomationReviewForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fieldClasses =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0B3B8C] focus:ring-2 focus:ring-[#0B3B8C]/10";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const encoded = new URLSearchParams();

    formData.forEach((value, key) => {
      encoded.append(key, value.toString());
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encoded.toString(),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      router.push("/thank-you");
    } catch {
      setError(
        "Something went wrong while sending your enquiry. Please try again or email steven@leasolutions.ie."
      );
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#0B3B8C]">
        Tell us about your business
      </p>

      <h2 className="mt-3 text-2xl font-bold text-slate-900">
        Request your free automation review
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        Give us a little context about your business and the process you would
        like to improve.
      </p>

      <form
        name="automation-review"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
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

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-[#0B3B8C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#082d6c] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting
            ? "Sending..."
            : "Request My Free Automation Review"}
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          No obligation. We&apos;ll review the information and get back to you
          with the most useful next step.
        </p>
      </form>
    </div>
  );
}