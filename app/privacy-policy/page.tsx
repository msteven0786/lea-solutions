import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for LEA Solutions, an AI and automation services business based in Ireland.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <span className="inline-flex rounded-full bg-[#DCE8FF] px-4 py-1 text-sm font-medium text-[#0B3B8C]">
            Privacy
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            This Privacy Policy explains how LEA Solutions collects, uses and
            protects personal information when you visit our website or contact
            us about our services.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Last updated: 31 August 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12">

          {/* WHO WE ARE */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              1. Who We Are
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              LEA Solutions provides AI, automation and custom business system
              services designed to help service businesses reduce repetitive
              administrative work and improve their processes.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              If you have any questions about this Privacy Policy or how your
              personal information is handled, you can contact us at{" "}
              <a
                href="mailto:steven@leasolutions.ie"
                className="font-medium text-[#0B3B8C] hover:underline"
              >
                steven@leasolutions.ie
              </a>
              .
            </p>
          </div>

          {/* INFORMATION */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              2. Information We May Collect
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              When you contact LEA Solutions, submit an enquiry or request an
              automation review, we may collect information such as:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number, if provided</li>
              <li>Your business or company name</li>
              <li>Information about your business processes or requirements</li>
              <li>Any other information you choose to provide in your enquiry</li>
            </ul>
          </div>

          {/* HOW USED */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              3. How We Use Your Information
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Information you provide may be used to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600">
              <li>Respond to your enquiry</li>
              <li>Arrange or provide an automation review</li>
              <li>Understand your business requirements</li>
              <li>Provide information about relevant LEA Solutions services</li>
              <li>Communicate with you regarding requested services</li>
              <li>Improve our website, services and business processes</li>
            </ul>
          </div>

          {/* LEGAL BASIS */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              4. Legal Basis for Processing
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Where applicable under data protection law, we process personal
              information where it is necessary to respond to your request,
              provide or prepare to provide services, comply with legal
              obligations, or pursue legitimate business interests.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Where consent is required for a particular use of your
              information, we will seek that consent where appropriate.
            </p>
          </div>

          {/* THIRD PARTIES */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              5. Service Providers
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              LEA Solutions may use trusted third-party service providers to
              operate the website, process enquiries, communicate with
              customers and support our business operations.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              These providers may process personal information on our behalf
              where necessary to provide their services. We aim to use
              appropriate providers and safeguards when personal information is
              processed by third parties.
            </p>
          </div>

          {/* AUTOMATION AND AI */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              6. Automation and AI
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              As part of our services, LEA Solutions may use automation and
              artificial intelligence tools to assist with tasks such as
              organising information, processing enquiries, preparing content
              or improving business workflows.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Where personal information is involved, we aim to use these tools
              responsibly and in accordance with applicable data protection
              requirements.
            </p>
          </div>

          {/* RETENTION */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              7. How Long We Keep Information
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Personal information will be retained only for as long as
              reasonably necessary for the purpose for which it was collected,
              including responding to enquiries, providing services and meeting
              applicable legal, accounting or business requirements.
            </p>
          </div>

          {/* SECURITY */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              8. Protecting Your Information
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We take reasonable steps to protect personal information against
              unauthorised access, loss, misuse, alteration or disclosure.
              However, no internet-based system can be guaranteed to be
              completely secure.
            </p>
          </div>

          {/* RIGHTS */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              9. Your Data Protection Rights
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Depending on the circumstances and applicable law, you may have
              rights relating to your personal information, including the right
              to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information in certain circumstances</li>
              <li>Request restriction of certain processing</li>
              <li>Object to certain uses of your information</li>
              <li>Request data portability where applicable</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>

            <p className="mt-4 leading-7 text-slate-600">
              To make a request relating to your personal information, contact{" "}
              <a
                href="mailto:steven@leasolutions.ie"
                className="font-medium text-[#0B3B8C] hover:underline"
              >
                steven@leasolutions.ie
              </a>
              .
            </p>
          </div>

          {/* COMPLAINTS */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              10. Complaints
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              If you have concerns about how your personal information is being
              handled, please contact us first so that we can try to address
              your concern.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              You may also have the right to make a complaint to the relevant
              data protection supervisory authority.
            </p>
          </div>

          {/* CHANGES */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              11. Changes to This Policy
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We may update this Privacy Policy from time to time to reflect
              changes to our services, website or legal requirements. The most
              recent version will be published on this page.
            </p>
          </div>

          {/* CONTACT CTA */}
          <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold">
              Questions about your information?
            </h2>

            <p className="mt-3 leading-7 text-slate-300">
              Contact LEA Solutions if you have a question about this Privacy
              Policy or the personal information we hold about you.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Contact LEA Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}