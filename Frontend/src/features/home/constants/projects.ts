export interface Project {
  title: string;
  description: string;
  images: string[];
  link: string;
  impact?: {
    before: string;
    after: string;
  };
  avatars?: string[];
}

export const AUTOMATION_FLOW: Project = {
  title: "Process Automation Engine",
  description:
    "Built intelligent automation workflows that eliminate repetitive manual tasks for clients. Features a clean, refactored constant-based data structure for scalable and maintainable automation rules.",
  images: [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop", // keep one if you like
    "https://images.unsplash.com/photo-1551288049-bbda6465fba1?q=80&w=2070&auto=format&fit=crop", // dashboard / automation feel
    "https://images.unsplash.com/photo-1454165833762-02ac4f40c1ce?q=80&w=2070&auto=format&fit=crop", // workflow / task
  ],
  link: "/projects/automation-flow",
  impact: {
    before: "Manual Task",
    after: "Saved 42 hours",
  },
  avatars: ["https://github.com/Rhey-Ranido.png", "https://i.pravatar.cc/150?u=a042581f4e29026704d"],
};

export const ONCE_UI: Project = {
  title: "Building Once UI, a Customizable Design System",
  description:
    "Development of a flexible and highly customizable design system using Next.js for front-end and Figma for design collaboration.",
  images: [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  ],
  link: "/projects/once-ui",
  impact: {
    before: "Manual Styling",
    after: "Dynamic Design System",
  },
  avatars: ["https://github.com/Rhey-Ranido.png", "https://i.pravatar.cc/150?u=a042581f4e29026704d"],
};

export const NEXUS_DASH: Project = {
  title: "Nexus Analytics Dashboard",
  description:
    "A high-performance SaaS dashboard for real-time data visualization and infrastructure monitoring, built with React and D3.js.",
  images: [
    "https://images.unsplash.com/photo-1551288049-bbda6465fba1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  ],
  link: "/projects/nexus-dash",
  impact: {
    before: "Manual Reports",
    after: "Real-time Tracking",
  },
  avatars: ["https://github.com/Rhey-Ranido.png"],
};

export const SHOP_SPARK: Project = {
  title: "ShopSpark E-commerce",
  description:
    "A headless e-commerce solution with sub-second page loads, featuring an AI-driven recommendation engine and seamless Stripe integration.",
  images: [
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
  ],
  link: "/projects/shop-spark",
  impact: {
    before: "Manual Task",
    after: "Saved 42 hours",
  },
  avatars: ["https://github.com/Rhey-Ranido.png", "https://i.pravatar.cc/150?u=a042581f4e29026704d"],
};

export const FLOW_TASK: Project = {
  title: "FlowTask Management Tool",
  description:
    "Collaborative project management application with real-time updates using WebSockets and a focus on intuitive user experience.",
  images: ["https://images.unsplash.com/photo-1454165833762-02ac4f40c1ce?q=80&w=2070&auto=format&fit=crop"],
  link: "/projects/flow-task",
  impact: {
    before: "Siloed Data",
    after: "Seamless Workflow",
  },
  avatars: ["https://github.com/Rhey-Ranido.png"],
};

export const PROJECTS = [AUTOMATION_FLOW, ONCE_UI, NEXUS_DASH, SHOP_SPARK, FLOW_TASK];
