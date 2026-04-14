import { FaSearch, FaFileInvoice, FaPaintBrush, FaRocket, FaUserShield } from "react-icons/fa";

export interface ProcessStep {
  icon: React.ElementType;
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: FaSearch,
    number: "1",
    title: "Free Site Audit",
    description: "I analyze your current GHL website. Count pages, identify forms, CTAs, and existing features to create a detailed redesign plan.",
  },
  {
    icon: FaFileInvoice,
    number: "2",
    title: "Quote & Proposal",
    description: "You receive a clear proposal with package options and any add-ons needed. Choose the monthly plan ($87/mo+) or one-time payment.",
  },
  {
    icon: FaPaintBrush,
    number: "3",
    title: "Design & Develop",
    description: "I redesign your site in React with modern UI, preserving all your existing functionality while dramatically improving performance and design.",
  },
  {
    icon: FaRocket,
    number: "4",
    title: "Deploy on Vercel",
    description: "Your new site goes live on Vercel for fast global performance. I handle the deployment and ensure everything works perfectly.",
  },
  {
    icon: FaUserShield,
    number: "5",
    title: "Ongoing Support",
    description: "Monthly Reports and Ongoing support is available for hosting, updates, and long term peace of mind.",
  },
];
