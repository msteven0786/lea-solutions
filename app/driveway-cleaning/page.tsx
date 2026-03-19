import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "Driveway Cleaning Dublin & Kildare | LEA Solutions",
  description:
    "Professional driveway cleaning arranged through trusted local contractors across Dublin and Kildare.",
};

export default function DrivewayCleaningPage() {
  return (
    <ServicePage
      title="Driveway Cleaning"
      intro="Professional driveway cleaning to remove moss, algae, dirt and staining from concrete, tarmac and paved surfaces."
      slug="driveway-cleaning"
      benefits={[
        "Improves kerb appeal",
        "Removes slippery moss and algae buildup",
        "Helps restore the appearance of paving and hard surfaces",
        "Fast quote process through trusted local contractors",
      ]}
      process={[
        "Send us your driveway details",
        "We match you with a trusted local contractor",
        "Your driveway is professionally cleaned and refreshed",
      ]}
      pricingTitle="Typical Driveway Cleaning Prices"
      pricingItems={[
        "Small driveway: €100 – €180",
        "Medium driveway: €150 – €250",
        "Large driveway: €220 – €350+",
      ]}
      beforeAfterItems={[
        {
          title: "Blocked paving driveway",
          before:
            "Dull paving with black spots, algae and built-up grime making the driveway look old and poorly maintained.",
          after:
            "Brighter, cleaner paving with a fresher finish and a much stronger first impression.",
        },
        {
          title: "Concrete driveway with surface staining",
          before:
            "Dirt, tyre marks and weather staining had reduced the appearance of the front of the property.",
          after:
            "Cleaner concrete surface with a fresher, better-maintained look.",
        },
      ]}
      testimonials={[
        {
          name: "Emma R.",
          location: "Clondalkin",
          text: "The driveway came up far better than I expected. It really changed the front of the house.",
        },
        {
          name: "David M.",
          location: "Newbridge",
          text: "Quick quote, easy booking and a great result. Would definitely use again.",
        },
        {
          name: "Lisa T.",
          location: "Maynooth",
          text: "The difference before and after was unreal. It looked years newer once finished.",
        },
      ]}
      areasWeCover={[
        "Dublin City",
        "Tallaght",
        "Lucan",
        "Clondalkin",
        "Rathfarnham",
        "Templeogue",
        "Swords",
        "Malahide",
        "Naas",
        "Newbridge",
        "Celbridge",
        "Maynooth",
      ]}
      faq={[
        {
          question: "Can driveway cleaning remove moss and algae?",
          answer:
            "Yes, professional driveway cleaning is very effective for removing moss, algae, dirt and general buildup from most outdoor hard surfaces.",
        },
        {
          question: "How long does driveway cleaning take?",
          answer:
            "Most driveway cleaning jobs are completed within a few hours, depending on the size and condition of the area.",
        },
      ]}
    />
  );
}