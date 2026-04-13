export type ProjectCategory = "GHL" | "Make" | "n8n" | "Zapier" | "Web Development";

export interface MeasuredResult {
  label: string;
  value: string;
}

export interface ProjectV2 {
  title: string;
  description: string;
  image: string;
  images?: string[]; // Multiple images for gallery support
  tags: string[];
  category: ProjectCategory;
  link: string;
  impact: {
    before: string;
    after: string;
  };
  // Case Study Details
  originalWorkflow?: string;
  howItBecameAutomated?: string;
  businessImpact?: string;
  measuredResults?: MeasuredResult[];
  toolsUsed?: string[];
  videoUrl?: string;
  websiteUrl?: string;
}

export const PROJECTS_V2: ProjectV2[] = [
  // ─── Make.com Projects ───────────────────────────────────────────────────────
  {
    title: "Email Attachment AI Organizer",
    description:
      "Automatically watches Gmail for incoming attachments, classifies them with AI, renames files descriptively, and uploads them to the correct Google Drive folder — all without human intervention.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    tags: ["Make.com", "Gmail API", "Google Drive API", "OpenAI API"],
    category: "Make",
    link: "/projects/email-ai-organizer",
    impact: {
      before: "30 mins / email",
      after: "2 seconds / email",
    },
    originalWorkflow:
      "Teams reviewed inbox attachments one-by-one, downloaded files manually, guessed file naming standards, moved files to folders, and tracked results in spreadsheets. This was error-prone and hard to maintain at scale.",
    howItBecameAutomated:
      "Make.com watches Gmail for incoming messages with attachments, downloads each file, sends file content/context to OpenAI (or Claude) for quick classification and descriptive naming, renames the attachment based on output, uploads it to the correct Google Drive folder, logs timestamp/original/new filename and file type in Google Sheets, and sends a summary email after processing.",
    businessImpact:
      "Attachment handling is now standardized and searchable, file organization is faster, and teams gain reliable visibility through structured logs and summary notifications.",
    measuredResults: [
      { label: "HOURS SAVED", value: "6-10 hrs/week" },
      { label: "COST SAVED", value: "$220-$380/month" },
      { label: "MANUAL UPLOAD WORK", value: "~60% reduced" },
      { label: "DATA FRESHNESS", value: "Near real-time" },
    ],
    toolsUsed: [
      "Make.com",
      "Gmail API",
      "Google Drive API",
      "Google Sheets API",
      "OpenAI/Claude API",
      "Email Notifications",
    ],
    videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_HERE/view",
  },
  {
    title: "Multi-Step Client Onboarding",
    description:
      "Synchronized user onboarding across Stripe, Slack, PostgreSQL, and SendGrid — triggered automatically on checkout completion with zero manual steps.",
    image: "https://images.unsplash.com/photo-1551288049-bbda6465fba1?q=80&w=2070&auto=format&fit=crop",
    tags: ["Make.com", "Slack API", "Stripe", "PostgreSQL"],
    category: "Make",
    link: "/projects/make-onboarding",
    impact: {
      before: "Manual Entry (1hr)",
      after: "Automated (5 mins)",
    },
    originalWorkflow:
      "When a new client signed up via Stripe, staff had to manually create their account in the database, invite them to Slack, and send a welcome email. This took up to an hour per client and was prone to being forgotten during busy periods.",
    howItBecameAutomated:
      "A Make.com scenario triggers on Stripe checkout completion, automatically provisions resources, updates the PostgreSQL DB, invites the user to Slack via the API, and sends a personalized welcome email via SendGrid — all within seconds.",
    businessImpact:
      "Eliminated human error in account provisioning and ensured every client had a perfect, instant onboarding experience. Staff reclaimed hours previously spent on repetitive admin tasks.",
    measuredResults: [
      { label: "ONBOARDING TIME", value: "Instantly" },
      { label: "ADMIN LABOR", value: "90% Reduction" },
      { label: "ERROR RATE", value: "Near 0%" },
      { label: "CLIENT SATISFACTION", value: "Significantly Higher" },
    ],
    toolsUsed: ["Make.com", "Stripe API", "Slack API", "PostgreSQL", "SendGrid"],
    videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_HERE/view",
  },

  // ─── Zapier Projects ─────────────────────────────────────────────────────────
  {
    title: "Lead Qualification & Prioritization",
    description:
      "Real-time lead scoring and prioritization using AI to enrich incoming webhook data, store records in SQL, and instantly alert sales teams of high-value prospects.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    tags: ["Zapier", "Webhook API", "SQL Database", "Gemini API"],
    category: "Zapier",
    link: "/projects/lead-qualification",
    impact: {
      before: "Manual Follow-up",
      after: "100% Lead Capture",
    },
    originalWorkflow:
      "This was one of the sample tasks from my automation course and modeled after a real client-style request from the course conductor. Normally, teams manually collected lead form entries, researched company data, prioritized prospects by intuition, and notified sales through ad hoc messages.",
    howItBecameAutomated:
      "The workflow receives real-time webhook lead data (name, email, company, size, source), enriches it via external APIs, applies scoring/prioritization logic, stores processed records in SQL, and alerts the sales team when a high-priority lead is detected. A Gemini-powered step can generate a personalized outreach draft from the lead profile.",
    businessImpact:
      "Sales teams can focus on high-value leads first, qualification becomes data-driven and repeatable, and outreach preparation is accelerated through AI-assisted drafting while keeping lead records centralized.",
    measuredResults: [
      { label: "HOURS SAVED", value: "8-12 hrs/week" },
      { label: "COST SAVED", value: "$250-$450/month" },
      { label: "PROCESS ACCURACY", value: "+30-45%" },
      { label: "TURNAROUND TIME", value: "2-4x faster" },
    ],
    toolsUsed: [
      "Zapier",
      "Webhook API",
      "SQL Database",
      "External Enrichment APIs",
      "Gemini API",
      "Notification APIs",
      "CRM Integration",
    ],
    videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_HERE/view",
  },
  {
    title: "Zero-Touch Automated Invoicing",
    description:
      "Automated invoice generation and payment tracking from Stripe sales directly into QuickBooks — eliminating manual data entry and Friday accounting marathons.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    tags: ["Zapier", "QuickBooks", "Stripe", "Gmail"],
    category: "Zapier",
    link: "/projects/zapier-invoicing",
    impact: {
      before: "Manual Invoicing",
      after: "Zero-Touch Billing",
    },
    originalWorkflow:
      "Accountants manually copied sales data from Stripe into QuickBooks to generate invoices, taking up several hours every Friday. Errors were common and sometimes invoices were missed entirely.",
    howItBecameAutomated:
      "A Zapier flow connects Stripe to QuickBooks. On every successful payment, an invoice is automatically created, marked as paid, and a copy is emailed to the customer automatically — no human involvement required.",
    businessImpact:
      "Reclaimed hours of accounting time and eliminated the risk of human data entry errors in financial records. Clients receive invoices instantly, improving perceived professionalism.",
    measuredResults: [
      { label: "TIME SAVED", value: "4-6 hrs/week" },
      { label: "ERROR RATE", value: "Near 0%" },
      { label: "INVOICE DELIVERY", value: "Instant" },
      { label: "COST SAVED", value: "$150-$250/month" },
    ],
    toolsUsed: ["Zapier", "Stripe API", "QuickBooks Online", "Gmail API"],
    videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_HERE/view",
  },

  // ─── n8n Projects ─────────────────────────────────────────────────────────────
  {
    title: "AI Exam Checker Workflow",
    description:
      "Automatically checks exams submitted to Google Drive, evaluates essays with AI scoring using a rubric, and logs results with feedback directly into Google Sheets.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    tags: ["n8n", "Gemini API", "Google Sheets API", "Google Drive API"],
    category: "n8n",
    link: "/projects/ai-exam-checker",
    impact: {
      before: "30 mins / exam",
      after: "2 seconds / exam",
    },
    originalWorkflow:
      "Teachers manually graded multiple-choice and essay questions, which was time-consuming and prone to human error or bias. Feedback was often delayed by days, slowing down the learning cycle.",
    howItBecameAutomated:
      "n8n monitors a Google Drive folder for new exam submissions (PDF/Images), uses OCR to extract text, sends responses to Gemini for grading based on a rubric, and saves final scores and feedback directly into a Google Sheet while alerting the teacher via Slack.",
    businessImpact:
      "Teachers save hundreds of hours per semester, and students receive feedback almost instantly, improving the learning cycle and overall satisfaction.",
    measuredResults: [
      { label: "GRADING TIME", value: "Reduced by 95%" },
      { label: "FEEDBACK SPEED", value: "Instant" },
      { label: "TEACHER HOURS SAVED", value: "10+ hrs/week" },
      { label: "STUDENT SATISFACTION", value: "Significantly Higher" },
    ],
    toolsUsed: ["n8n", "Gemini API", "Google Sheets API", "Google Drive API", "OCR Engine", "Slack"],
    videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_HERE/view",
  },
  {
    title: "Discord Server Moderation Bot",
    description:
      "Automates moderation actions, role-based alerts, and scheduled community messages for a Discord server — providing 24/7 protection without constant human supervision.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2074&auto=format&fit=crop",
    tags: ["n8n", "Discord API", "Webhook API", "Rule-based Logic"],
    category: "n8n",
    link: "/projects/discord-mod-bot",
    impact: {
      before: "Manual Moderation",
      after: "24/7 Auto-Mod",
    },
    originalWorkflow:
      "Community managers had to manually monitor chat for spam, offensive content, and rule-breaking 24/7, which was impossible for a small team. Violations often went unaddressed for hours.",
    howItBecameAutomated:
      "Using n8n and Discord Webhooks, we built a bot that scans messages in real-time, applies regex-based filters, automatically warns or mutes users for violations, and logs all actions in a private staff channel.",
    businessImpact:
      "The community stays safe and clean without constant human supervision, allowing staff to focus on engagement rather than policing. Member retention improved significantly.",
    measuredResults: [
      { label: "SPAM REDUCTION", value: "99%" },
      { label: "UPTIME", value: "100% 24/7" },
      { label: "RESPONSE TIME", value: "< 1 second" },
      { label: "STAFF HOURS SAVED", value: "20+ hrs/week" },
    ],
    toolsUsed: ["n8n", "Discord API", "Webhook API", "Regex Patterns", "PostgreSQL"],
    videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_HERE/view",
  },
  {
    title: "Facebook Page AI Support Agent",
    description:
      "Automated page assistant that answers customer questions with updated service and hiring information pulled live from Google Sheets — powered by Gemini AI.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    tags: ["n8n", "Meta Developer API", "Gemini API", "Google Sheets API"],
    category: "n8n",
    link: "/projects/facebook-ai-agent",
    impact: {
      before: "Manual Replies",
      after: "Instant AI Support",
    },
    originalWorkflow:
      "Small business owners spent hours daily answering repetitive questions about pricing, hours, and job openings on Facebook Messenger. Delayed responses led to lost leads.",
    howItBecameAutomated:
      "Integrated Meta's Messenger API with n8n and Google Sheets. The AI (Gemini) reads business info from the sheet to provide accurate, real-time answers to customer inquiries automatically — and the business owner can update info just by editing the sheet.",
    businessImpact:
      "Response rates improved to 100% and average response time dropped from hours to seconds, leading to higher customer satisfaction and more leads captured.",
    measuredResults: [
      { label: "RESPONSE RATE", value: "100%" },
      { label: "TIME SAVED/OWNER", value: "10+ hrs/week" },
      { label: "AVG RESPONSE TIME", value: "< 3 seconds" },
      { label: "LEAD CAPTURE", value: "+35%" },
    ],
    toolsUsed: ["n8n", "Meta API", "Gemini API", "Google Sheets", "Cloudflare Tunnel"],
    videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_HERE/view",
  },

  // ─── GHL Projects ─────────────────────────────────────────────────────────────
  {
    title: "GHL Lead Nurturing System",
    description:
      "Complex GoHighLevel workflow for automated lead follow-ups, appointment booking, and CRM updates — triggered the moment a new lead comes in from Facebook Ads.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    tags: ["GHL", "Twilio", "Mailgun", "CRM Automation"],
    category: "GHL",
    link: "/projects/ghl-lead-system",
    impact: {
      before: "Manual Follow-up",
      after: "100% Lead Capture",
    },
    originalWorkflow:
      "Leads from Facebook Ads were sitting in a spreadsheet for days before a salesperson called them, resulting in low conversion rates. The delay meant prospects had already moved on or chosen a competitor.",
    howItBecameAutomated:
      "Set up a GHL (GoHighLevel) workflow that triggers instantly on new lead creation. It sends an SMS and Email sequence, offers an appointment booking link, and adds the lead to a specialized pipeline for the sales team — all within 2 minutes of the lead submitting the form.",
    businessImpact:
      "Lead conversion rates increased by 40% because of the 'speed to lead' factor — contacting them while they are still on the site and in a buying mindset.",
    measuredResults: [
      { label: "CONVERSION INCREASE", value: "40%" },
      { label: "FIRST CONTACT TIME", value: "< 2 mins" },
      { label: "LEADS CAPTURED", value: "100%" },
      { label: "COST PER LEAD", value: "Reduced 30%" },
    ],
    toolsUsed: ["GHL", "Twilio", "Mailgun", "Lead Connector API", "FB Lead Forms"],
    videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_HERE/view",
  },

  // ─── Web Development Projects ─────────────────────────────────────────────────
  {
    title: "Headless E-commerce Storefront",
    description:
      "High-performance web application built with Next.js and Shopify's Storefront API for maximum SEO, speed, and conversion — replacing a bloated CMS with a 99+ Lighthouse score.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Shopify", "Tailwind CSS", "TypeScript"],
    category: "Web Development",
    link: "/projects/headless-store",
    impact: {
      before: "Slow WordPress Site",
      after: "99+ Lighthouse Score",
    },
    originalWorkflow:
      "The client's previous site was built on a bloated CMS, leading to 5+ second load times and poor mobile experience, causing high bounce rates and lost sales.",
    howItBecameAutomated:
      "Rebuilt the frontend using Next.js for Static Site Generation and Shopify's Storefront API for the backend. Implemented modern image optimization, edge caching, and lazy loading strategies for maximum performance.",
    businessImpact:
      "Bounce rates dropped by 25% and conversion increased by 15% due to the improved speed and user experience. The site now ranks significantly higher in Google search results.",
    measuredResults: [
      { label: "LOAD TIME", value: "< 1s" },
      { label: "SEO SCORE", value: "100/100" },
      { label: "BOUNCE RATE", value: "-25%" },
      { label: "CONVERSION RATE", value: "+15%" },
    ],
    toolsUsed: ["Next.js", "Shopify Hydrogen", "Tailwind CSS", "Vercel", "Framer Motion"],
    websiteUrl: "https://storefront.example.com",
  },

  // ─── GHL Redesign Projects ─────────────────────────────────────────────────
  {
    title: "Fitness Coach GHL Redesign",
    description:
      "Transformed a slow, clunky GoHighLevel website into a blazing-fast React site with modern design, improving load times by 85% and increasing bookings by 35%.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
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
];
