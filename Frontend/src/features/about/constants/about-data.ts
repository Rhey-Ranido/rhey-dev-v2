export const PROFILE = {
  name: "Rhey Ranido",
  role: "Design Engineer",
  location: "Asia/Manila",
  languages: ["English", "Filipino"],
  avatar: "https://github.com/Rhey-Ranido.png",
  bio: "Rhey is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.", // Keeping the bio from image but using the provided name Rhey Ranido in general headers. Note: User used Selene's image content, so I'll keep the text but use Rhey's name where possible.
  socials: [
    { name: "LinkedIn", link: "https://linkedin.com" },
    { name: "Upwork", link: "https://upwork.com" },
    { name: "Email", link: "mailto:rhey@example.com" },
  ],
};

export const NAV_LINKS = [
  { label: "Introduction", id: "introduction" },
  { label: "Work Experience", id: "experience" },
  { label: "Studies", id: "studies" },
  { label: "Technical skills", id: "skills" },
];

export const EXPERIENCES = [
  {
    company: "FLY",
    role: "Senior Design Engineer",
    period: "2022 - Present",
    description: [
      "Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.",
      "Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
    ],
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000&auto=format&fit=crop", // Placeholder from Unsplash matching the dark UI vibe
  },
  {
    company: "Creativ3",
    role: "Lead Designer",
    period: "2018 - 2022",
    description: [
      "Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.",
      "Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.",
    ],
  },
];

export const STUDIES = [
  {
    institution: "University of Jakarta",
    description: "Studied software engineering.",
  },
  {
    institution: "Build the Future",
    description: "Studied online marketing and personal branding.",
  },
];

export const SKILLS = [
  {
    name: "Figma",
    description: "Able to prototype in Figma with Once UI with unnatural speed.",
    tags: ["Figma"],
    images: [
      "https://images.unsplash.com/photo-1613909209472-7bb11ad80c6e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541462608141-ad4d05e4aa6c?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    name: "Next.js",
    description: "Building next gen apps with Next.js + Once UI + Supabase.",
    tags: ["JavaScript", "Next.js", "Supabase"],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    ],
  },
];
