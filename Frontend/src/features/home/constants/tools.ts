import { 
  SiReact, 
  SiVercel, 
  SiTailwindcss, 
  SiTypescript, 
  SiVite,
  SiGoogledrive,
  SiStripe,
  SiGithub
} from "react-icons/si";
import { FiCode, FiLayout, FiServer, FiSmartphone } from "react-icons/fi";

export interface Tool {
  name: string;
  icon: React.ElementType;
}

export const TOOLS: Tool[] = [
  { name: "React", icon: SiReact },
  { name: "Vite", icon: SiVite },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vercel", icon: SiVercel },
  { name: "GoHighLevel", icon: FiLayout },
  { name: "GitHub", icon: SiGithub },
  { name: "Stripe", icon: SiStripe },
  { name: "Responsive Design", icon: FiSmartphone },
  { name: "Performance", icon: FiServer },
  { name: "Clean Code", icon: FiCode },
];
