import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/lea-solutions-logo-header.png"
                alt="LEA Solutions"
                width={220}
                height={56}
                priority
                className="h-auto w-[170px] sm:w-[210px]"
              />
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              <Link href="/roof-cleaning" className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]">
                Roof Cleaning
              </Link>
              <Link href="/driveway-cleaning" className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]">
                Driveway Cleaning
              </Link>
              <Link href="/patio-cleaning" className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]">
                Patio Cleaning
              </Link>
              <Link href="/gutter-cleaning" className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]">
                Gutter Cleaning
              </Link>
              <Link href="/areas-we-cover" className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]">
                Areas We Cover
              </Link>
              <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]">
                Contact
              </Link>
            </nav>

            <a
              href="tel:0868886086"
              className="rounded-xl bg-[#0B3B8C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#082d6c]"
            >
              Call Now
            </a>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-[#0B3B8C] text-white">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <Image
                  src="/lea-solutions-logo-header.png"
                  alt="LEA Solutions"
                  width={220}
                  height={56}
                  className="h-auto w-[170px] brightness-0 invert"
                />
                <p className="mt-4 text-sm leading-6 text-blue-100">
                  Exterior cleaning and property service quote requests across Dublin and Kildare.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="mt-3 space-y-2 text-sm text-blue-100">
                  <li>
                    <Link href="/roof-cleaning" className="hover:text-white">
                      Roof Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/driveway-cleaning" className="hover:text-white">
                      Driveway Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/patio-cleaning" className="hover:text-white">
                      Patio Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/gutter-cleaning" className="hover:text-white">
                      Gutter Cleaning
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Contact</h3>
                <ul className="mt-3 space-y-2 text-sm text-blue-100">
                  <li>
                    <a href="tel:0868886086" className="hover:text-white">
                      086 888 6086
                    </a>
                  </li>
                  <li>
                    <a href="mailto:steven@leasolutions.ie" className="hover:text-white">
                      steven@leasolutions.ie
                    </a>
                  </li>
                  <li>
                    <Link href="/areas-we-cover" className="hover:text-white">
                      Areas We Cover
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm text-blue-100 md:flex-row">
              <p>© {new Date().getFullYear()} LEA Solutions. All rights reserved.</p>

              <div className="flex gap-4">
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
                <Link href="/privacy-policy" className="hover:text-white">
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