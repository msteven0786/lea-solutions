"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900"
      >
        {open ? (
          <span className="text-2xl leading-none">×</span>
        ) : (
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-900" />
            <span className="block h-0.5 w-5 bg-slate-900" />
            <span className="block h-0.5 w-5 bg-slate-900" />
          </div>
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white shadow-lg">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-5">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
            >
              Home
            </Link>

            <Link
              href="/solutions"
              onClick={closeMenu}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
            >
              Solutions
            </Link>

            <Link
              href="/how-it-works"
              onClick={closeMenu}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
            >
              How It Works
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-3 text-sm font-medium text-slate-700"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 rounded-xl bg-[#0B3B8C] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Free Automation Review
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}