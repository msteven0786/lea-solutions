import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Patio Cleaning Dublin & Kildare | LEA Solutions",
  description:
    "Professional patio cleaning arranged through trusted local contractors across Dublin and Kildare.",
};

export default function PatioCleaningPage() {
  return (
    <ServicePage
      title="Patio Cleaning"
      intro="Professional patio cleaning to remove algae, moss, dirt and staining from slabs, paving and outdoor seating areas."
      slug="patio-cleaning"
      benefits={[
        "Refreshes the appearance of outdoor living spaces",
        "Helps remove slippery algae and moss",
        "Improves the overall look of patios and paved areas",
        "Quick and simple quote process",
      ]}
      process={[
        "Request a free quote online",
        "We review the job and match you with a trusted local contractor",
        "Your patio cleaning service is arranged quickly and professionally",
      ]}
      pricingTitle="Typical Patio Cleaning Prices"
      pricingItems={[
        "Small patio: €80 – €140",
        "Medium patio: €120 – €200",
        "Large patio: €180 – €300+",
      ]}
      beforeAfterItems={[
        {
          title: "Patio with algae buildup",
          before:
            "Green algae and embedded grime made the area look damp, slippery and uncared for.",
          after:
            "Cleaner, brighter paving with a much more inviting look for outdoor use.",
        },
        {
          title: "Weathered slab patio",
          before:
            "Dark staining and surface dirt had built up over time, making the patio feel older and duller.",
          after:
            "The slabs looked fresher and cleaner, helping the whole garden area feel more maintained.",
        },
      ]}
      testimonials={[
        {
          name: "Karen W.",
          location: "Rathfarnham",
          text: "The patio looks so much better now. It feels like we got our garden space back.",
        },
        {
          name: "Brian L.",
          location: "Celbridge",
          text: "Very smooth process and the result was excellent. The area looked brighter straight away.",
        },
        {
          name: "Aoife M.",
          location: "Naas",
          text: "We were surprised by how much of a difference the cleaning made. It came up brilliantly.",
        },
      ]}
      areasWeCover={[
        "Dublin City",
        "Rathfarnham",
        "Templeogue",
        "Tallaght",
        "Lucan",
        "Clondalkin",
        "Swords",
        "Naas",
        "Newbridge",
        "Maynooth",
        "Celbridge",
        "Blessington",
      ]}
      faq={[
        {
          question: "Is patio cleaning suitable for older paving slabs?",
          answer:
            "In many cases yes, although the best cleaning approach depends on the material, age and condition of the patio surface.",
        },
        {
          question: "Will patio cleaning make the area safer?",
          answer:
            "Removing moss and algae can help reduce slippery buildup and improve the surface underfoot.",
        },
      ]}
    />
  );
}