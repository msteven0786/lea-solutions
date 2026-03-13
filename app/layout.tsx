import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LEA Solutions | Exterior Cleaning & Property Services",
  description:
    "LEA Solutions connects homeowners with trusted local contractors for roof cleaning, driveway cleaning, patio cleaning and gutter clearing across Dublin and Kildare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LEA Solutions",
    description:
      "Exterior cleaning services including roof cleaning, driveway cleaning, patio cleaning and gutter clearing.",
    areaServed: [
      "Blessington",
      "Naas",
      "Tallaght",
      "Clondalkin",
      "Clane",
      "South Dublin",
      "Templeogue",
      "Terenure",
      "Newbridge",
    ],
    telephone: "+353868886086",
    url: "https://leasolutions.ie",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <a href="/" className="flex shrink-0 items-center">
                <img
                  src="/logo.png"
                  alt="LEA Solutions logo"
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </a>

              <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                <a
                  href="/roof-cleaning"
                  className="text-slate-700 transition hover:text-slate-900"
                >
                  Roof Cleaning
                </a>
                <a
                  href="/driveway-cleaning"
                  className="text-slate-700 transition hover:text-slate-900"
                >
                  Driveway Cleaning
                </a>
                <a
                  href="/patio-cleaning"
                  className="text-slate-700 transition hover:text-slate-900"
                >
                  Patio Cleaning
                </a>
                <a
                  href="/gutter-cleaning"
                  className="text-slate-700 transition hover:text-slate-900"
                >
                  Gutter Cleaning
                </a>
              </nav>

              <div className="hidden items-center gap-3 md:flex">
                <a
                  href="tel:0868886086"
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  086 888 6086
                </a>
                <a
                  href="/#quote"
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="mt-3 flex gap-3 md:hidden">
              <a
                href="tel:0868886086"
                className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Call Now
              </a>
              <a
                href="/#quote"
                className="flex-1 rounded-lg bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get Quote
              </a>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600">
            <p>© {new Date().getFullYear()} LEA Solutions</p>
          </div>
        </footer>
      </body>
    </html>
  );
}