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
    default: "LEA Solutions | Interior Painting & Property Services",
    template: "%s | LEA Solutions",
  },
  description:
    "LEA Solutions provides interior painting and property services across Dublin, Wicklow and Kildare.",
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

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/interior-painting"
                className="text-sm font-semibold text-[#0B3B8C] hover:text-[#082d6c]"
              >
                Interior Painting
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]"
              >
                Other Services
              </Link>
              <Link
                href="/areas-we-cover"
                className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]"
              >
                Areas We Cover
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-slate-700 hover:text-[#0B3B8C]"
              >
                About
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
  className="h-auto w-[170px]"
/>
                <p className="mt-4 text-sm leading-6 text-blue-100">
                  Interior painting and property service quote requests across Dublin, Wicklow and Kildare.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="mt-3 space-y-2 text-sm text-blue-100">
                  <li>
                    <Link href="/interior-painting" className="hover:text-white">
                      Interior Painting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white">
                      Other Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/areas-we-cover" className="hover:text-white">
                      Areas We Cover
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
                    <a
                      href="mailto:steven@leasolutions.ie"
                      className="hover:text-white"
                    >
                      steven@leasolutions.ie
                    </a>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About
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
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/services" className="hover:text-white">
                  Other Services
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}