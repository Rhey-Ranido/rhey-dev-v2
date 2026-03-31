import { FiGlobe, FiLayers, FiCpu, FiMessageCircle, FiDatabase } from "react-icons/fi";

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: FiGlobe,
    title: "Web Development",
    description: "Custom websites that are built in React, WordPress, and Framer, optimized for performance and user experience.",
  },
  {
    icon: FiLayers,
    title: "Workflow Automation",
    description: "End-to-end automation using Zapier, Make (Integromat), and n8n to streamline repetitive tasks.",
  },
  {
    icon: FiCpu,
    title: "API & Webhook Integration",
    description: "Developing tailored API integrations and webhook setups to enable smooth communication and data flow between different systems.",
  },
  {
    icon: FiMessageCircle,
    title: "AI Chatbot & Receptionist",
    description: "Custom AI-powered chatbot and inbound call AI agent, designed to handle conversations, book, update, cancel appointments and automate customer interactions.",
  },
  {
    icon: FiDatabase,
    title: "CRM & Funnel Setup",
    description: "Specialized in GoHighLevel (GHL) developing optimized sales funnels and automated CRM workflows.",
  },
];
