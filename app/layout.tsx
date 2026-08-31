import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";
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
    default: "LEA Solutions | AI & Automation for Service Businesses",
    template: "%s | LEA Solutions",
  },
  description:
    "LEA Solutions helps service businesses save time, reduce repetitive admin and respond faster using practical AI, automation and custom business systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-slate-900 antialiased`}
      >
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
            {/* LOGO */}
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B3B8C] text-sm font-bold text-white">
                LEA
              </div>

              <div className="min-w-0">
                <p className="text-base font-bold leading-none text-slate-900 sm:text-lg">
                  LEA Solutions
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  AI & Automation
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/"
                className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]"
              >
                Home
              </Link>

              <Link
                href="/solutions"
                className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]"
              >
                Solutions
              </Link>

              <Link
                href="/how-it-works"
                className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]"
              >
                How It Works
              </Link>

              <Link
                href="/about"
                className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]"
              >
                Contact
              </Link>
            </nav>

            {/* MOBILE MENU */}
            <MobileMenu />

            {/* DESKTOP CTA */}
            <Link
              href="/contact"
              className="hidden rounded-xl bg-[#0B3B8C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#082d6c] md:inline-flex"
            >
              Free Automation Review
            </Link>
          </div>
        </header>

        {children}

        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
            <div className="grid gap-8 md:grid-cols-3 md:gap-10">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#0B3B8C]">
                    LEA
                  </div>

                  <div>
                    <p className="text-lg font-bold leading-none">
                      LEA Solutions
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      AI & Automation
                    </p>
                  </div>
                </div>

                <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
                  Practical AI, automation and custom business systems designed
                  to reduce repetitive work and help service businesses run more
                  efficiently.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold sm:text-lg">Explore</h3>

                <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-300 md:block md:space-y-3">
                  <li>
                    <Link href="/solutions" className="hover:text-white">
                      Solutions
                    </Link>
                  </li>

                  <li>
                    <Link href="/how-it-works" className="hover:text-white">
                      How It Works
                    </Link>
                  </li>

                  <li>
                    <Link href="/about" className="hover:text-white">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold sm:text-lg">Contact</h3>

                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>
                    <a
                      href="mailto:steven@leasolutions.ie"
                      className="break-all hover:text-white"
                    >
                      steven@leasolutions.ie
                    </a>
                  </li>

                  <li>
                    <Link href="/contact" className="hover:text-white">
                      Book a Free Automation Review
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-slate-400 sm:text-sm md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} LEA Solutions. All rights reserved.
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>

                <Link href="/about" className="hover:text-white">
                  About
                </Link>

                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}