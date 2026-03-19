import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Roof Cleaning Dublin & Kildare | LEA Solutions",
  description:
    "Professional roof cleaning arranged through trusted local contractors across Dublin and Kildare.",
};

export default function RoofCleaningPage() {
  return (
    <ServicePage
      title="Roof Cleaning"
      intro="Professional roof cleaning to remove moss, algae and built-up debris, helping improve appearance and protect your property."
      slug="roof-cleaning"
      benefits={[
        "Improves the appearance of your home",
        "Helps reduce moss and debris buildup",
        "Can help prevent gutter blockages caused by roof runoff",
        "Arranged through trusted local contractors",
      ]}
      process={[
        "Request your free quote online",
        "We review your details and match you with a trusted local contractor",
        "Your roof cleaning service is arranged quickly and professionally",
      ]}
      pricingTitle="Typical Roof Cleaning Prices"
      pricingItems={[
        "Terraced house: €250 – €400",
        "Semi-detached: €350 – €600",
        "Detached: €500 – €900",
      ]}
      beforeAfterItems={[
        {
          title: "Moss-covered tiled roof",
          before:
            "Heavy moss growth, dark staining and loose debris made the roof look neglected and untidy.",
          after:
            "Cleaner roof surface, fresher appearance and less loose moss dropping into gutters and downpipes.",
        },
        {
          title: "Roof with algae staining",
          before:
            "Green staining and patchy discoloration affected the overall appearance of the property.",
          after:
            "A brighter, cleaner-looking roof that improved the look of the home from ground level.",
        },
      ]}
      testimonials={[
        {
          name: "Michael D.",
          location: "Tallaght",
          text: "The roof looked completely different afterwards. The whole house looked cleaner straight away.",
        },
        {
          name: "Sarah K.",
          location: "Naas",
          text: "Very easy process from quote to completion. Delighted with how tidy and professional everything was.",
        },
        {
          name: "John P.",
          location: "Lucan",
          text: "We had loads of moss on the roof and it was making the place look run down. Huge improvement.",
        },
      ]}
      areasWeCover={[
        "Dublin City",
        "Tallaght",
        "Lucan",
        "Clondalkin",
        "Blanchardstown",
        "Swords",
        "Malahide",
        "Rathfarnham",
        "Templeogue",
        "Naas",
        "Newbridge",
        "Maynooth",
      ]}
      faq={[
        {
          question: "Do contractors need to walk on the roof?",
          answer:
            "That depends on the roof type, height and condition. Many jobs can be assessed and completed using the safest suitable access method.",
        },
        {
          question: "How long does roof cleaning take?",
          answer:
            "Most residential roof cleaning jobs can be completed within a day, depending on size, access and level of buildup.",
        },
      ]}
    />
  );
}