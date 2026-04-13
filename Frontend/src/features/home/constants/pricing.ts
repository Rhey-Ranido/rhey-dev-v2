import { FiGlobe, FiLayers, FiZap } from "react-icons/fi";

export interface Pricing {
  icon: React.ElementType;
  title: string;
  description: string;
  price: string;
  highlight?: boolean;
}

export const PRICING: Pricing[] = [
  {
    icon: FiGlobe,
    title: "Starter",
    description:
      "Perfect for simple sites. 1 page redesign, mobile responsive, basic SEO, CTA buttons & forms. Includes 2 months free Website Care Plan.",
    price: "$997",
  },
  {
    icon: FiLayers,
    title: "Business",
    description:
      "3-5 pages redesign, performance optimization, mobile responsive, all features preserved. Includes 2 months free Website Care Plan.",
    price: "$1,497",
    highlight: true,
  },
  {
    icon: FiZap,
    title: "Premium",
    description:
      "5+ pages with UX improvements, priority delivery, full performance optimization. Includes 2 months free Website Care Plan.",
    price: "$1,997",
  },
];
