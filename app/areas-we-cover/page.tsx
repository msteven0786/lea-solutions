import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Cover | LEA Solutions",
  description:
    "LEA Solutions provides interior painting and property services across Dublin, Wicklow and Kildare. Get a fast quote from trusted local professionals.",
};

export default function AreasWeCoverPage() {
  const areas = [
    "Blessington",
    "Naas",
    "Tallaght",
    "Clondalkin",
    "Clane",
    "Newbridge",
    "Templeogue",
    "Terenure",
  ];

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
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Areas We Cover
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            LEA Solutions provides interior painting and property services across
            Dublin, Wicklow and Kildare. Get a fast quote and connect with trusted
            local professionals for your home improvement project.
          </p>
        </div>
      </section>

      {/* AREAS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">
          Local Areas We Serve
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          We focus on local areas so homeowners can quickly get quotes for interior
          painting and other property services.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{area}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Interior painting and property services available in {area}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OTHER SERVICES (keeps SEO value but reframed) */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            Additional Property Services by Area
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            In addition to interior painting, we also provide access to other
            property services such as roof cleaning across Dublin, Wicklow and
            Kildare.
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
                  Roof cleaning services available in {area.name}.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}