import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: {
    default: "LEA Solutions | Exterior Cleaning & Property Services",
    template: "%s | LEA Solutions",
  },
  description:
    "LEA Solutions connects homeowners with trusted local contractors for roof cleaning, driveway cleaning, patio cleaning and gutter cleaning across Dublin and Kildare.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-slate-900 antialiased`}
      >
        {/* HEADER */}
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              LEA Solutions
            </Link>

            <nav className="hidden gap-6 md:flex">
              <Link href="/roof-cleaning" className="text-sm font-medium hover:text-slate-600">
                Roof Cleaning
              </Link>
              <Link href="/driveway-cleaning" className="text-sm font-medium hover:text-slate-600">
                Driveway Cleaning
              </Link>
              <Link href="/patio-cleaning" className="text-sm font-medium hover:text-slate-600">
                Patio Cleaning
              </Link>
              <Link href="/gutter-cleaning" className="text-sm font-medium hover:text-slate-600">
                Gutter Cleaning
              </Link>
              <Link href="/areas-we-cover" className="text-sm font-medium hover:text-slate-600">
                Areas We Cover
              </Link>

              {/* NEW LINKS */}
              <Link href="/about" className="text-sm font-medium hover:text-slate-600">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-slate-600">
                Contact
              </Link>
            </nav>

            <a
              href="tel:0868886086"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Call Now
            </a>
          </div>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid gap-8 md:grid-cols-3">
              {/* COMPANY */}
              <div>
                <h3 className="text-lg font-semibold">LEA Solutions</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Exterior cleaning and property service quote requests across Dublin and Kildare.
                </p>
              </div>

              {/* SERVICES */}
              <div>
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <Link href="/roof-cleaning">Roof Cleaning</Link>
                  </li>
                  <li>
                    <Link href="/driveway-cleaning">Driveway Cleaning</Link>
                  </li>
                  <li>
                    <Link href="/patio-cleaning">Patio Cleaning</Link>
                  </li>
                  <li>
                    <Link href="/gutter-cleaning">Gutter Cleaning</Link>
                  </li>
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h3 className="text-lg font-semibold">Contact</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <a href="tel:0868886086">086 888 6086</a>
                  </li>
                  <li>
                    <a href="mailto:steven@leasolutions.ie">
                      steven@leasolutions.ie
                    </a>
                  </li>
                  <li>
                    <Link href="/areas-we-cover">Areas We Cover</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
              <p>© {new Date().getFullYear()} LEA Solutions. All rights reserved.</p>

              <div className="flex gap-4">
                <Link href="/about" className="hover:text-slate-700">
                  About
                </Link>
                <Link href="/contact" className="hover:text-slate-700">
                  Contact
                </Link>
                <Link href="/privacy-policy" className="hover:text-slate-700">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}