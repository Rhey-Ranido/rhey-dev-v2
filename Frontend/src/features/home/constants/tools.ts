import { 
  SiZapier, 
  SiMake, 
  SiSlack, 
  SiNotion, 
  SiAirtable, 
  SiAsana, 
  SiDiscord, 
  SiOpenai, 
  SiLinear, 
  SiGoogledrive,
  SiN8N
} from "react-icons/si";

export interface Tool {
  name: string;
  icon: React.ElementType;
}

export const TOOLS: Tool[] = [
  { name: "Zapier", icon: SiZapier },
  { name: "n8n", icon: SiN8N },
  { name: "Asana", icon: SiAsana },
  { name: "Slack", icon: SiSlack },
  { name: "Make", icon: SiMake },
  { name: "Notion", icon: SiNotion },
  { name: "Airtable", icon: SiAirtable },
  { name: "Discord", icon: SiDiscord },
  { name: "Google", icon: SiGoogledrive },
  { name: "Linear", icon: SiLinear },
  { name: "OpenAI", icon: SiOpenai },
];
