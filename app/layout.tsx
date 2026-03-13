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
  title: "LEA Solutions",
  description:
    "Exterior cleaning services including roof cleaning, driveway cleaning, patio cleaning and gutter clearing in Dublin and Kildare.",
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
    url: "https://lea-solutions.netlify.app",
    serviceType: [
      "Roof Cleaning",
      "Driveway Cleaning",
      "Patio Cleaning",
      "Gutter Cleaning",
    ],
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
        {children}
      </body>
    </html>
  );
}