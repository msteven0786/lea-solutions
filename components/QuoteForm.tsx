type QuoteFormProps = {
  formName: string;
  heading: string;
  description: string;
  defaultService: string;
  jobDetailsPlaceholder: string;
};

export default function QuoteForm({
  formName,
  heading,
  description,
  defaultService,
  jobDetailsPlaceholder,
}: QuoteFormProps) {
  return (
    <div
      id="quote"
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {heading}
      </h2>

      <p className="mt-3 text-slate-600">{description}</p>

      <form
        name={formName}
        method="POST"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="mt-6 grid gap-4"
      >
        <input type="hidden" name="form-name" value={formName} />

        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human:{" "}
            <input name="bot-field" />
          </label>
        </p>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
        />

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
        />

        <input
          type="email"
          name="emailAddress"
          placeholder="Email Address"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
        />

        <input
          type="text"
          name="areaAddress"
          placeholder="Area / Address"
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
        />

        <select
          name="service"
          defaultValue={defaultService}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
        >
          <option value="Interior Painting">Interior Painting</option>
          <option value="Roof Cleaning">Roof Cleaning</option>
          <option value="Driveway Cleaning">Driveway Cleaning</option>
          <option value="Patio Cleaning">Patio Cleaning</option>
          <option value="Gutter Cleaning">Gutter Cleaning</option>
          <option value="Exterior House Cleaning">Exterior House Cleaning</option>
        </select>

        <textarea
          rows={4}
          name="jobDetails"
          placeholder={jobDetailsPlaceholder}
          required
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#0B3B8C] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#082d6c]"
        >
          Request My Quote
        </button>
      </form>
    </div>
  );
}