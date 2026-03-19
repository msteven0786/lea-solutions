import Link from "next/link";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

type BeforeAfterItem = {
  title: string;
  before: string;
  after: string;
};

type BeforeAfterImageItem = {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

type TestimonialItem = {
  name: string;
  location: string;
  text: string;
  rating?: number;
};

type ServicePageProps = {
  title: string;
  intro: string;
  benefits: string[];
  process?: string[];
  pricingTitle?: string;
  pricingItems?: string[];
  faq?: FAQItem[];
  ctaTitle?: string;
  ctaText?: string;
  slug?: string;
  beforeAfterItems?: BeforeAfterItem[];
  beforeAfterImages?: BeforeAfterImageItem[];
  testimonials?: TestimonialItem[];
  areasWeCover?: string[];
};

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div
      className="mb-3 flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < rating;

        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            className={`h-5 w-5 ${filled ? "text-yellow-500" : "text-gray-300"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M11.48 3.499a.562.562 0 0 1 1.039 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321 1.01l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.386a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.98 20.562a.562.562 0 0 1-.84-.61l1.285-5.386a.563.563 0 0 0-.182-.557L3.04 10.407a.562.562 0 0 1 .321-1.01l5.518-.442a.563.563 0 0 0 .475-.345l2.125-5.11Z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function ServicePage({
  title,
  intro,
  benefits,
  process = [],
  pricingTitle,
  pricingItems = [],
  faq = [],
  ctaTitle = "Get a Free Quote",
  ctaText = "Tell us a few details and we’ll connect you with a trusted local contractor.",
  slug = "",
  beforeAfterItems = [],
  beforeAfterImages = [],
  testimonials = [],
  areasWeCover = [],
}: ServicePageProps) {
  const faqSchema =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{title}</h1>
        <p className="max-w-3xl text-lg leading-8 text-gray-700">{intro}</p>
      </section>

      <section className="mb-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold">Why choose this service?</h2>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {process.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">How it works</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {beforeAfterImages.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Before & After Results</h2>
          <div className="space-y-6">
            {beforeAfterImages.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-700">
                      Before
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                      <Image
                        src={item.beforeImage}
                        alt={item.beforeAlt}
                        width={1200}
                        height={800}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
                      After
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                      <Image
                        src={item.afterImage}
                        alt={item.afterAlt}
                        width={1200}
                        height={800}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {beforeAfterItems.length > 0 && beforeAfterImages.length === 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Before & After Results</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {beforeAfterItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>

                <div className="space-y-4">
                  <div className="rounded-xl border border-red-100 bg-red-50 p-4">
                    <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-red-700">
                      Before
                    </p>
                    <p className="text-gray-700">{item.before}</p>
                  </div>

                  <div className="rounded-xl border border-green-100 bg-green-50 p-4">
                    <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-green-700">
                      After
                    </p>
                    <p className="text-gray-700">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {pricingTitle && pricingItems.length > 0 && (
        <section className="mb-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">{pricingTitle}</h2>
          <ul className="space-y-3">
            {pricingItems.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Final pricing depends on property size, access, condition and level of buildup.
          </p>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="mb-12">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold">What customers say</h2>
            <div className="inline-flex w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm">
              Rated highly by local customers
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <StarRating rating={item.rating ?? 5} />
                <p className="mb-4 text-gray-700">“{item.text}”</p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p>{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {areasWeCover.length > 0 && (
        <section className="mb-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Areas We Cover</h2>
          <p className="mb-4 text-gray-700">
            We arrange services through trusted local contractors across Dublin and Kildare,
            including:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {areasWeCover.map((area, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700"
              >
                {area}
              </div>
            ))}
          </div>
        </section>
      )}

      {faq.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-2xl bg-black px-6 py-10 text-white shadow-lg">
        <h2 className="mb-3 text-2xl font-semibold">{ctaTitle}</h2>
        <p className="mb-6 max-w-2xl text-gray-200">{ctaText}</p>
        <Link
          href={`/quote${slug ? `?service=${slug}` : ""}`}
          className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Request a Quote
        </Link>
      </section>
    </main>
  );
}