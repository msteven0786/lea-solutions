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
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="LEA Solutions logo"
                className="h-12 w-auto"
              />
            </a>

            <nav className="hidden gap-6 text-sm font-medium md:flex">
              <a
                href="/roof-cleaning"
                className="text-slate-700 hover:text-slate-900"
              >
                Roof Cleaning
              </a>
              <a
                href="/driveway-cleaning"
                className="text-slate-700 hover:text-slate-900"
              >
                Driveway Cleaning
              </a>
              <a
                href="/patio-cleaning"
                className="text-slate-700 hover:text-slate-900"
              >
                Patio Cleaning
              </a>
              <a
                href="/gutter-cleaning"
                className="text-slate-700 hover:text-slate-900"
              >
                Gutter Cleaning
              </a>
            </nav>

            <a
              href="#quote"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get Quote
            </a>
          </div>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600">
            <p>© {new Date().getFullYear()} LEA Solutions</p>
          </div>
        </footer>
      </body>
    </html>
  );
}