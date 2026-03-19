import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Gutter Cleaning Dublin & Kildare | LEA Solutions",
  description:
    "Professional gutter cleaning arranged through trusted local contractors across Dublin and Kildare.",
};

export default function GutterCleaningPage() {
  return (
    <ServicePage
      title="Gutter Cleaning"
      intro="Professional gutter cleaning to remove leaves, moss and debris, helping prevent overflow and reduce the risk of water damage."
      slug="gutter-cleaning"
      benefits={[
        "Helps prevent overflowing gutters",
        "Reduces debris buildup in gutters and downpipes",
        "Supports better rainwater flow around the property",
        "Arranged through trusted local contractors",
      ]}
      process={[
        "Request a free quote online",
        "We review your details and match you with a trusted local contractor",
        "Your gutter cleaning service is arranged quickly and professionally",
      ]}
      pricingTitle="Typical Gutter Cleaning Prices"
      pricingItems={[
        "Terraced: €60 – €100",
        "Semi-detached: €80 – €140",
        "Detached: €120 – €200+",
      ]}
      beforeAfterItems={[
        {
          title: "Blocked front gutters",
          before:
            "Leaves, moss and debris had built up in the gutters, causing overflow during heavy rain.",
          after:
            "Gutters cleared for better water flow and a neater appearance along the roofline.",
        },
        {
          title: "Overflowing downpipe section",
          before:
            "A blocked section was causing water to spill over and run down the outside wall.",
          after:
            "Improved flow through the guttering system and reduced risk of overflow problems.",
        },
      ]}
      testimonials={[
        {
          name: "Patrick H.",
          location: "Swords",
          text: "We had water overflowing at the front of the house and this sorted it quickly. Really happy with the service.",
        },
        {
          name: "Nicola F.",
          location: "Tallaght",
          text: "Easy to arrange and very professional. The gutters were badly blocked and now everything is flowing properly.",
        },
        {
          name: "Declan R.",
          location: "Naas",
          text: "Fast response and great job done. It was a relief to get the gutters cleared before more rain.",
        },
      ]}
      areasWeCover={[
        "Dublin City",
        "Tallaght",
        "Swords",
        "Lucan",
        "Clondalkin",
        "Blanchardstown",
        "Malahide",
        "Rathfarnham",
        "Naas",
        "Newbridge",
        "Maynooth",
        "Blessington",
      ]}
      faq={[
        {
          question: "How often should gutters be cleaned?",
          answer:
            "Many homes benefit from gutter cleaning once or twice a year, although nearby trees and moss buildup can mean more frequent cleaning is needed.",
        },
        {
          question: "Can blocked gutters cause water damage?",
          answer:
            "Yes, overflowing gutters can contribute to water running down walls and around the property, which can lead to damage over time.",
        },
      ]}
    />
  );
}