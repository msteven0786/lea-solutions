import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for LEA Solutions.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            This page explains how LEA Solutions collects, uses and stores information
            submitted through this website.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-10 text-slate-600">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Who we are</h2>
            <p className="mt-3 leading-7">
              LEA Solutions provides a website where homeowners can request quotes for
              exterior cleaning and related property services across Dublin and Kildare.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">What information we collect</h2>
            <p className="mt-3 leading-7">
              When you complete a contact or quote form, we may collect information
              such as your name, phone number, email address, location and details
              about the work you need carried out.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">How we use your information</h2>
            <p className="mt-3 leading-7">
              We use the information you provide to respond to your enquiry, arrange
              quotes, communicate with you about your request and improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">How your information is stored</h2>
            <p className="mt-3 leading-7">
              We take reasonable steps to keep your information secure. Information is
              only kept for as long as necessary to handle your enquiry and operate
              our services properly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Sharing of information</h2>
            <p className="mt-3 leading-7">
              Your information may be shared with relevant service providers or local
              contractors where necessary to help arrange a quote or respond to your
              request.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
            <p className="mt-3 leading-7">
              If you have any questions about this Privacy Policy or how your data is
              handled, please contact LEA Solutions at{" "}
              <a
                href="mailto:steven@leasolutions.ie"
                className="font-medium text-slate-900 underline"
              >
                steven@leasolutions.ie
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}