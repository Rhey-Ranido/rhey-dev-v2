import type { ProjectV2 } from "#/features/projects/constants/projects_v2";

export const WEBSITE_PROJECTS: ProjectV2[] = [
  {
    title: "Fitness Coach GHL Redesign",
    description:
      "Transformed a slow, clunky GoHighLevel website into a blazing-fast React site with modern design, improving load times by 85% and increasing bookings by 35%.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "GHL Integration"],
    category: "GHL",
    link: "/projects/ghl-fitness-redesign",
    impact: {
      before: "5.2s Load, 68 Score",
      after: "0.8s Load, 98 Score",
    },
    originalWorkflow:
      "The client's GHL site was slow, unresponsive on mobile, and had an outdated design that didn't convert visitors. Forms were clunky and the booking system was confusing.",
    howItBecameAutomated:
      "Redesigned the entire site in React with Vite, preserving all existing GHL forms and CTAs while creating a modern, conversion-focused UI. Deployed on Vercel for global edge performance.",
    businessImpact:
      "Site speed improved dramatically, mobile experience became seamless, and the cleaner design with clearer CTAs led to a 35% increase in online bookings within the first month.",
    measuredResults: [
      { label: "LOAD TIME", value: "5.2s → 0.8s" },
      { label: "LIGHTHOUSE SCORE", value: "68 → 98" },
      { label: "BOOKING INCREASE", value: "+35%" },
      { label: "MOBILE SCORE", value: "45 → 95" },
    ],
    toolsUsed: ["React", "Vite", "Tailwind CSS", "Vercel", "GoHighLevel API", "TypeScript"],
    websiteUrl: "https://fitness-coach-example.vercel.app",
  },
  {
    title: "Marketing Agency GHL Migration",
    description:
      "Complete redesign of a marketing agency's GHL website with 8+ pages, integrating forms, payment processing, and maintaining all automations while achieving sub-second load times.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    ],
    tags: ["React", "GHL", "Stripe", "Multi-page"],
    category: "GHL",
    link: "/projects/ghl-agency-redesign",
    impact: {
      before: "Clunky Multi-page GHL",
      after: "Fast Modern React Site",
    },
    originalWorkflow:
      "The agency had a 8-page GHL site with complex forms, payment integrations, and lead magnets. The site was slow, hard to navigate, and didn't reflect their brand quality.",
    howItBecameAutomated:
      "Rebuilt all 8 pages in React with modern routing, preserved all GHL form submissions and webhook integrations, added Stripe payment processing, and deployed on Vercel with edge caching.",
    businessImpact:
      "The agency now has a professional site that matches their brand, loads instantly, and seamlessly integrates with their existing GHL workflows and client onboarding process.",
    measuredResults: [
      { label: "PAGES REDESIGNED", value: "8" },
      { label: "LOAD TIME", value: "4.1s → 0.6s" },
      { label: "FORM CONVERSIONS", value: "+28%" },
      { label: "SEO SCORE", value: "95/100" },
    ],
    toolsUsed: ["React", "Vite", "Tailwind CSS", "Vercel", "GoHighLevel", "Stripe", "TypeScript"],
    websiteUrl: "https://agency-example.vercel.app",
  },
  {
    title: "Local Business Hub",
    description:
      "Slow, outdated GHL site transformed into a fast, modern conversion-focused website that drives more leads and provides better user experience.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565514020147-7d9190dfad7a?q=80&w=2070&auto=format&fit=crop",
    ],
    tags: ["React", "GHL", "Local Business", "Responsive"],
    category: "GHL",
    link: "/projects/local-business-hub",
    impact: {
      before: "Slow, outdated design",
      after: "Fast, modern conversion-focused site",
    },
    originalWorkflow:
      "The local business was using a slow, outdated GHL website that failed to capture leads effectively. The site was not mobile-friendly and had poor conversion rates.",
    howItBecameAutomated:
      "Completely redesigned the site with a focus on conversion optimization, mobile responsiveness, and performance. Integrated with existing GHL workflows to maintain all business processes while dramatically improving user experience.",
    businessImpact:
      "The new site loads instantly on all devices, captures 40% more form submissions, and better represents the brand's professional image.",
    measuredResults: [
      { label: "LOAD TIME", value: "3.8s → 0.7s" },
      { label: "FORM SUBMISSIONS", value: "+40%" },
      { label: "MOBILE USERS", value: "+55%" },
      { label: "CONVERSION RATE", value: "+32%" },
    ],
    toolsUsed: ["React", "Vite", "Tailwind CSS", "Vercel", "GoHighLevel"],
    websiteUrl: "https://local-business-example.vercel.app",
  },
];