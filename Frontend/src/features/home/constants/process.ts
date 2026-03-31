import { FaSearch, FaMap, FaWrench, FaRocket, FaUserShield } from "react-icons/fa";

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
    title: "Discovery Call",
    description: "We map your current workflow bottlenecks and identify the highest-impact automation opportunities in your business.",
  },
  {
    icon: FaMap,
    number: "2",
    title: "Strategy Design",
    description: "We architect your custom AI automation blueprint — no templates, no cookie-cutter solutions. Built around how your business actually works.",
  },
  {
    icon: FaWrench,
    number: "3",
    title: "Build & Test",
    description: "We build and rigorously test every workflow before it touches your real business. You see it working before we go live.",
  },
  {
    icon: FaRocket,
    number: "4",
    title: "Launch & Train",
    description: "We deploy your system live and walk your team through operating it. I personally ensures a smooth handoff.",
  },
  {
    icon: FaUserShield,
    number: "5",
    title: "Ongoing Support",
    description: "We monitor, optimize, and evolve your automations as your business grows. Your AI system gets smarter over time.",
  },
];