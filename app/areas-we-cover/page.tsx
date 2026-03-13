import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Cover | LEA Solutions",
  description:
    "LEA Solutions connects homeowners with trusted local contractors for roof cleaning, driveway cleaning, patio cleaning and gutter clearing across Dublin and Kildare.",
};

export default function AreasWeCoverPage() {
  const roofCleaningAreas = [
    { name: "Blessington", href: "/roof-cleaning-blessington" },
    { name: "Naas", href: "/roof-cleaning-naas" },
    { name: "Tallaght", href: "/roof-cleaning-tallaght" },
    { name: "Clondalkin", href: "/roof-cleaning-clondalkin" },
    { name: "Clane", href: "/roof-cleaning-clane" },
    { name: "Newbridge", href: "/roof-cleaning-newbridge" },
    { name: "Templeogue", href: "/roof-cleaning-templeogue" },
    { name: "Terenure", href: "/roof-cleaning-terenure" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Areas We Cover
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            LEA Solutions connects homeowners with trusted local contractors for
            roof cleaning, driveway cleaning, patio cleaning and gutter
            clearing across Dublin and Kildare.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">
          Roof Cleaning Areas
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Explore our roof cleaning location pages below.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roofCleaningAreas.map((area) => (
            <a
              key={area.href}
              href={area.href}
              className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">
                Roof Cleaning {area.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Local roof cleaning quotes available in {area.name}.
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}