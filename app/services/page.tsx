import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Other Services",
  description:
    "Explore additional property services from LEA Solutions across Dublin, Wicklow and Kildare.",
};

const services = [
  {
    title: "Roof Cleaning",
    text: "Professional roof cleaning to remove moss, algae and improve appearance.",
    href: "/roof-cleaning",
  },
  {
    title: "Driveway Cleaning",
    text: "Pressure washing for driveways and outdoor surfaces.",
    href: "/driveway-cleaning",
  },
  {
    title: "Patio Cleaning",
    text: "Deep cleaning for patios and paved areas.",
    href: "/patio-cleaning",
  },
  {
    title: "Gutter Cleaning",
    text: "Prevent blockages and water damage with gutter clearing.",
    href: "/gutter-cleaning",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-[#EAF2FF] via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="inline-flex rounded-full bg-[#DCE8FF] px-4 py-1 text-sm font-medium text-[#0B3B8C]">
            Dublin, Wicklow & Kildare
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Other Property Services
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            In addition to interior painting, LEA Solutions also offers a range of property services across Dublin, Wicklow and Kildare.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h2>
              <p className="mt-3 text-slate-600">{service.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#0B3B8C]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}