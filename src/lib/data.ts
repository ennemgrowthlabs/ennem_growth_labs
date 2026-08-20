export const SITE = {
  name: "Ennem Growth Labs",
  short: "EGL",
  tagline: "Build. Automate. Grow.",
  description:
    "Product and engineering studio in Theni. We ship SaaS, APIs, and automation — TaskWagon, GIFT, Snapvy, and Lumen — for brands across Tamil Nadu and beyond.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: "+91 63838 40619",
  phoneHref: "tel:+916383840619",
  email: "info@ennemmarketings.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "https://wa.me/916383840619",
  taskwagonSales: "sales@taskwagon.com",
  address:
    "2nd Floor, Arun Akash Complex, Above Axis Bank, Bodinayakanur – 625582, Theni, Tamil Nadu",
  city: "Theni",
  region: "Tamil Nadu",
  country: "IN",
  // REPLACE_ME if exact metrics change
  stats: [
    { label: "Brands transformed", value: "63", suffix: "+" },
    { label: "Products in flight", value: "6", suffix: "" },
    { label: "Squads", value: "2", suffix: "" },
    { label: "Client retention", value: "98", suffix: "%" },
  ],
  sister: [
    {
      name: "Ennem Marketing",
      href: "https://ennemmarketings.com/",
      note: "Digital marketing agency",
    },
    {
      name: "Ennem AI Studio",
      href: "https://ai.ennemmarketings.com/",
      note: "AI video & automation",
    },
    {
      name: "Ennem Holidays",
      href: "https://ennemholidays.com/",
      note: "Kodaikanal travel",
    },
  ],
  sameAs: [
    "https://ennemmarketings.com/",
    "https://ai.ennemmarketings.com/",
    "https://taskwagon.com/",
    "https://greatindiaformationteam.com/",
    "https://snapvy.ennemmarketings.com/",
  ],
  industries: [
    "Healthcare",
    "Professional Services",
    "Education",
    "Real Estate",
    "Manufacturing",
    "Gems & Jewellery",
    "Tourism & Hospitality",
    "Automobiles",
    "Retail",
    "Entertainment",
    "Logistics",
    "IT & BPM",
    "Infrastructure",
    "Textiles",
    "D2C Brands",
  ],
  process: [
    { step: "01", title: "Discover", body: "Scope, stack, and the number that matters." },
    { step: "02", title: "Build", body: "Squads ship in sprints. You see working software." },
    { step: "03", title: "Ship", body: "CI, Docker, Core Web Vitals, and a real launch." },
    { step: "04", title: "Scale", body: "Automation, ads ops, and product loops after go-live." },
  ],
} as const;

export type TeamSlug = "full-stack" | "automation" | "wordpress";

export const TEAMS: {
  slug: TeamSlug;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
  accent: "ember" | "cyan" | "lime";
}[] = [
  {
    slug: "full-stack",
    name: "Full Stack Developer Team",
    tagline: "SaaS, APIs, dashboards, mobile backends",
    description:
      "Next.js, React, Prisma, and MySQL for products that have to stay up. We own TaskWagon, GIFT, Snapvy, and custom apps from Theni to production.",
    stack: ["Next.js", "React", "TypeScript", "Prisma", "MySQL", "Docker"],
    href: "/teams/full-stack",
    accent: "ember",
  },
  {
    slug: "automation",
    name: "Automation Team",
    tagline: "Bots, flows, CRM, WhatsApp, n8n",
    description:
      "AI workflows, multi-channel bots, and lead ops. Lumen/Nexus, n8n/Make/Zapier, Meta WhatsApp, Telegram, and reporting that does not live in a spreadsheet.",
    stack: ["n8n", "Make", "WhatsApp", "OpenAI", "Redis", "BullMQ"],
    href: "/teams/automation",
    accent: "cyan",
  },
];

export type ProjectStatus = "LIVE" | "BUILDING" | "COMING";
export type ProjectKind = "PRODUCT" | "CLIENT" | "SERVICE";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  problem: string;
  solution: string;
  liveUrl?: string;
  appUrl?: string;
  status: ProjectStatus;
  kind: ProjectKind;
  industry: string;
  year: number;
  stack: string[];
  results: string[];
  featured: boolean;
  sortOrder: number;
  teamSlug: TeamSlug;
  productHref?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "taskwagon",
    title: "TaskWagon",
    summary:
      "Official task management, team channels, and employee portal — with ClickUp import and AI for modern teams.",
    content:
      "TaskWagon is Ennem Growth Labs’ ClickUp-class workspace. Tasks, channels, attendance, notifications, and a public landing at taskwagon.com talking to the Node API at app.taskwagon.com.",
    problem:
      "Teams outgrow chat threads and spreadsheet trackers. Importing from ClickUp without losing history is painful.",
    solution:
      "A React 19 + Vite workspace with Socket.IO, MySQL, and a production API. Landing SEO locked to taskwagon.com.",
    liveUrl: "https://taskwagon.com/",
    appUrl: "https://app.taskwagon.com",
    status: "LIVE",
    kind: "PRODUCT",
    industry: "SaaS / Productivity",
    year: 2026,
    stack: ["React 19", "Vite", "Tailwind", "Node", "MySQL", "Socket.IO"],
    results: ["Live at taskwagon.com", "App API at app.taskwagon.com", "ClickUp import path"],
    featured: true,
    sortOrder: 1,
    teamSlug: "full-stack",
    productHref: "/products/taskwagon",
  },
  {
    slug: "giftindia",
    title: "GIFT — Great India Formation Team",
    summary:
      "Volunteer membership platform: digital ID cards, communities, events, gallery, impact stats, and an admin hub.",
    content:
      "GiftIndia (GIFT) is a Next.js + Prisma membership system for Great India Formation Team — registration, Google login, Facebook-style community feeds, roles, and a split admin hub on Hostinger.",
    problem:
      "A statewide volunteer movement needed instant digital membership cards and district-level ops, not a brochure site.",
    solution:
      "App Router member portal + admin.greatindiaformationteam.com, MySQL, JWT, S3 media, role matrix (ADMIN / MANAGER / STAFF / VIEWER).",
    liveUrl: "https://greatindiaformationteam.com/",
    appUrl: "https://admin.greatindiaformationteam.com/",
    status: "LIVE",
    kind: "PRODUCT",
    industry: "Nonprofit / Community",
    year: 2026,
    stack: ["Next.js", "Prisma", "MySQL", "JWT", "S3", "Hostinger"],
    results: ["Live member portal", "Separate admin hub", "Instant digital membership cards"],
    featured: true,
    sortOrder: 2,
    teamSlug: "full-stack",
    productHref: "/products/giftindia",
  },
  {
    slug: "snapvy",
    title: "Snapvy",
    summary:
      "Business-card scanner and lightweight CRM. OCR on device, AI enhance, Android app plus responsive web.",
    content:
      "Snapvy is Ennem’s visiting-card product: Tesseract + backend vision, save to phone and Snapvy history, subscriptions. Web at snapvy.ennemmarketings.com talks to snapvy.brewishstore.com.",
    problem:
      "Field teams collect cards that never enter CRM. Phone contacts and follow-ups stay disconnected.",
    solution:
      "React Native scanner + Vite web client on a shared Node API. Privacy page ready for Play Console.",
    liveUrl: "https://snapvy.ennemmarketings.com/",
    appUrl: "https://snapvy.brewishstore.com",
    status: "LIVE",
    kind: "PRODUCT",
    industry: "Mobile / CRM",
    year: 2026,
    stack: ["React Native", "Vite", "React 19", "Node", "Tesseract", "OCR"],
    results: ["Live web client", "Play-ready Android build", "Shared production API"],
    featured: true,
    sortOrder: 3,
    teamSlug: "full-stack",
    productHref: "/products/snapvy",
  },
  {
    slug: "lumen",
    title: "Lumen + Nexus — AI Business Platform",
    summary:
      "Multi-tenant AI business OS: CRM, inbox, knowledge base, campaigns, and a React Flow builder for WhatsApp, Telegram, and more.",
    content:
      "Lumen is the workspace. Nexus is super-admin (tenancy, billing). Bots across WhatsApp (Meta/Twilio), Telegram, Instagram, Facebook, Slack, and webchat. Redis/BullMQ for queues.",
    problem:
      "SMBs run five chat tools and zero CRM memory. Agencies need a tenant-safe bot OS, not another Zap.",
    solution:
      "One Contact across channels. Immutable published flows. Draft never executes live traffic. Now in active development — no fake live URL.",
    status: "BUILDING",
    kind: "PRODUCT",
    industry: "SaaS / AI Ops",
    year: 2026,
    stack: ["React", "TanStack", "Prisma", "MySQL", "Redis", "Socket.IO", "Docker"],
    results: ["Unified bot manager in progress", "WhatsApp + Telegram cores", "Flow builder shipping"],
    featured: true,
    sortOrder: 4,
    teamSlug: "automation",
    productHref: "/products/lumen",
  },
  {
    slug: "ennem-growth-analytics",
    title: "Ennem Growth Analytics",
    summary: "Ecommerce analytics dashboard for Ennem stores and client WooCommerce brands.",
    content:
      "Internal analytics product: store performance, ads-to-revenue views, and ops dashboards for Labs products and client sites we already run.",
    problem: "Store metrics live in five admin panels. Nobody sees a single growth number.",
    solution: "Vite dashboard + Node/MySQL warehouse. Status: building — HUD badge, no fake URL.",
    status: "BUILDING",
    kind: "PRODUCT",
    industry: "Analytics / Ecommerce",
    year: 2026,
    stack: ["Vite", "React", "Node", "MySQL"],
    results: ["In development"],
    featured: false,
    sortOrder: 5,
    teamSlug: "full-stack",
  },
  {
    slug: "ennem-ai-studio",
    title: "Ennem AI Studio",
    summary:
      "AI videos, avatars, reels, chatbots, and custom workflows on Make / Zapier / ChatGPT / WhatsApp.",
    content:
      "The live service site for Ennem’s automation and AI video practice. Proof work includes DDCarz, Ramsingh Rice, Viruppam Chekku Oil, Ridha Pizzeria, and Attil.",
    problem: "Local brands need daily video and follow-up without a full in-house studio.",
    solution: "Productized AI video + chatbot systems, delivered by the Automation squad.",
    liveUrl: "https://ai.ennemmarketings.com/",
    status: "LIVE",
    kind: "SERVICE",
    industry: "AI / Marketing",
    year: 2025,
    stack: ["AI Video", "WhatsApp", "Make", "Zapier", "ChatGPT"],
    results: ["Live studio site", "Client reels in production"],
    featured: true,
    sortOrder: 6,
    teamSlug: "automation",
  },
  {
    slug: "elquora",
    title: "Elquora",
    summary: "India’s menstrual-cup D2C store — medical-grade silicone, reusable for years.",
    content: "WooCommerce D2C storefront for Elquora. Featured on the Ennem Marketing homepage.",
    problem: "A D2C health brand needed a store that could rank and convert, not a catalogue PDF.",
    solution: "Storefront, SEO structure, and growth ops for a live D2C catalogue.",
    liveUrl: "https://elquora.com/",
    status: "LIVE",
    kind: "CLIENT",
    industry: "D2C / Healthcare",
    year: 2024,
    stack: ["WordPress", "WooCommerce", "SEO"],
    results: ["Live national D2C store"],
    featured: true,
    sortOrder: 10,
    teamSlug: "wordpress",
  },
  {
    slug: "theni-thaniyam",
    title: "Theni Thaniyam",
    summary: "Traditional rice, millets, and wholesale — multilingual ecommerce from Theni.",
    content:
      "Store + wholesale enquiry for Theni Thaniyam, a heritage grains brand. Tamil and other language routes.",
    problem: "A miller needed retail + distributor intake without losing the Theni story.",
    solution: "Multilingual WooCommerce with wholesale forms and Instagram-led social.",
    liveUrl: "https://thenithaniyam.com/",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Food / Wholesale",
    year: 2024,
    stack: ["WordPress", "WooCommerce", "Multilingual"],
    results: ["Live store + wholesale funnel"],
    featured: true,
    sortOrder: 11,
    teamSlug: "wordpress",
  },
  {
    slug: "ramyam-creations",
    title: "Ramyam Creations",
    summary: "Handmade bead jewellery ecommerce from Theni.",
    liveUrl: "https://ramyamcreations.com/",
    content: "WooCommerce jewellery store with collections, checkout, and WhatsApp assist.",
    problem: "Artisan jewellery had no owned storefront.",
    solution: "Custom ecommerce theme and product photography-ready PDPs.",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Jewellery",
    year: 2024,
    stack: ["WordPress", "WooCommerce"],
    results: ["Live jewellery store"],
    featured: false,
    sortOrder: 12,
    teamSlug: "wordpress",
  },
  {
    slug: "toddlers-diapers",
    title: "Toddlers Diapers",
    summary: "Baby diapers ecommerce — size charts, rashes FAQ, category merchandising.",
    liveUrl: "https://toddlersdiapers.com/",
    content: "WooCommerce for a baby-care SKU family with education content on fit and rashes.",
    problem: "Parents compare absorbency and size; a thin catalogue loses the sale.",
    solution: "Category UX, FAQ, and conversion-focused product pages.",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Baby / D2C",
    year: 2024,
    stack: ["WordPress", "WooCommerce"],
    results: ["Live D2C store"],
    featured: false,
    sortOrder: 13,
    teamSlug: "wordpress",
  },
  {
    slug: "brewish-store",
    title: "Brewish Store",
    summary: "Sensory lamps and ADHD/autism-friendly lights sold online.",
    liveUrl: "https://brewishstore.com/",
    content: "Ecommerce for Brewish sensory bubble lamps, plasma orbs, and related décor.",
    problem: "A niche sensory brand needed Amazon-quality PDPs on its own domain.",
    solution: "WooCommerce with rich product media and shipping-ready checkout.",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Home / Sensory",
    year: 2024,
    stack: ["WordPress", "WooCommerce"],
    results: ["Live sensory store"],
    featured: false,
    sortOrder: 14,
    teamSlug: "wordpress",
  },
  {
    slug: "ts-brand",
    title: "TS Brand Jewellery",
    summary: "Imitation jewellery ecommerce — traditional with a modern twist.",
    liveUrl: "https://tsbrandjewellery.com/",
    content: "Storefront for TS Brand artificial jewellery collections and daily glam SKUs.",
    problem: "High SKU count jewellery needs filters and trust, not a WhatsApp catalogue only.",
    solution: "WooCommerce merchandising and collection landing pages.",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Jewellery",
    year: 2025,
    stack: ["WordPress", "WooCommerce"],
    results: ["Live jewellery ecommerce"],
    featured: false,
    sortOrder: 15,
    teamSlug: "wordpress",
  },
  {
    slug: "tossca",
    title: "Tossca",
    summary: "Premium pet-care products — fountains, nesting boxes, play furniture.",
    liveUrl: "https://tossca.net/",
    content: "WooCommerce for Tossca pet products with US shipping messaging and warranty copy.",
    problem: "Pet hardware SKUs need clear variants and replacement parts.",
    solution: "Category architecture and warranty-led PDP content.",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Pet / Ecommerce",
    year: 2025,
    stack: ["WordPress", "WooCommerce"],
    results: ["Live pet store"],
    featured: false,
    sortOrder: 16,
    teamSlug: "wordpress",
  },
  {
    slug: "dfwin",
    title: "DFWIN",
    summary:
      "Biodegradable birch-wood cutlery for cafes and caterers — plus a custom ops app in the Labs folder.",
    liveUrl: "https://dfwin.co/",
    content:
      "B2B ecommerce for Dhivyaa Fine Wood Industries. A companion custom app lives in our DfwinApp codebase.",
    problem: "A Namakkal manufacturer needed a brand site that could take wholesale orders.",
    solution: "WooCommerce storefront plus a dedicated app track for ops.",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Manufacturing / B2B",
    year: 2025,
    stack: ["WordPress", "WooCommerce", "Custom App"],
    results: ["Live B2B store", "Internal app in development"],
    featured: false,
    sortOrder: 17,
    teamSlug: "wordpress",
  },
  {
    slug: "little-babe",
    title: "Little Babe",
    summary: "Baby care, diapers, toys, and feeding essentials.",
    liveUrl: "https://littlebabe.in/",
    content: "WooCommerce for Little Babe — diapers through Montessori toys.",
    problem: "A multi-category baby brand needed one trusted store.",
    solution: "Category IA, sale merchandising, and mobile checkout.",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Baby / D2C",
    year: 2025,
    stack: ["WordPress", "WooCommerce"],
    results: ["Live baby store"],
    featured: false,
    sortOrder: 18,
    teamSlug: "wordpress",
  },
  {
    slug: "dd-carz",
    title: "DD CARZ Theni",
    summary: "Car wash, detailing, paint, and protection — site plus Instagram AI video work.",
    liveUrl: "https://ddcarz.com/",
    content:
      "Business site for DD CARZ Theni with service storytelling. Automation squad also ships AI reels via @ddcarz_theni.",
    problem: "A detailing shop needed bookings-quality presence and content that actually posts.",
    solution: "Business WordPress + AI video pipeline for Instagram.",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Automobiles",
    year: 2025,
    stack: ["WordPress", "AI Video"],
    results: ["Live business site", "Ongoing AI reels"],
    featured: false,
    sortOrder: 19,
    teamSlug: "wordpress",
  },
  {
    slug: "ennem-holidays",
    title: "Ennem Holidays",
    summary: "Kodaikanal tours, stays, and packages — Ennem’s own travel product.",
    liveUrl: "https://ennemholidays.com/",
    content: "Travel site for valley and village packages out of Vattakanal / Kodaikanal.",
    problem: "A hill-station operator needed packages online, not only WhatsApp.",
    solution: "Business WordPress with tour narratives and enquiry.",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Tourism",
    year: 2024,
    stack: ["WordPress"],
    results: ["Live booking/enquiry site"],
    featured: false,
    sortOrder: 20,
    teamSlug: "wordpress",
  },
  {
    slug: "tadbit",
    title: "Tadbit",
    summary: "Ecommerce project listed on the Ennem portfolio. Live URL not confirmed.",
    content:
      "Tadbit appears on ennemmarketings.com/website-development. Public URL is REPLACE_ME until confirmed.",
    problem: "Portfolio completeness vs an unverified domain.",
    solution: "Shown as COMING until the live URL is verified.",
    status: "COMING",
    kind: "CLIENT",
    industry: "Ecommerce",
    year: 2025,
    stack: ["WordPress", "WooCommerce"],
    results: ["Listed on agency portfolio"],
    featured: false,
    sortOrder: 21,
    teamSlug: "wordpress",
  },
];

export const MEMBERS = [
  {
    name: "Squad Lead — REPLACE_ME",
    role: "Full Stack Lead",
    bio: "Owns SaaS delivery for TaskWagon, GIFT, and Snapvy. Swap this card for the real lead photo and name.",
    skills: ["Next.js", "Prisma", "MySQL", "Docker"],
    years: 0,
    isLead: true,
    teamSlug: "full-stack" as TeamSlug,
    github: undefined as string | undefined,
    linkedin: undefined as string | undefined,
  },
  {
    name: "Engineer — REPLACE_ME",
    role: "Full Stack Developer",
    bio: "App Router, APIs, and Hostinger deploys. Placeholder until the roster is filled.",
    skills: ["TypeScript", "React", "Node"],
    years: 0,
    isLead: false,
    teamSlug: "full-stack" as TeamSlug,
  },
  {
    name: "Squad Lead — REPLACE_ME",
    role: "Automation Lead",
    bio: "Flows, WhatsApp Cloud API, and Lumen bot manager. REPLACE_ME with the real lead.",
    skills: ["n8n", "WhatsApp", "OpenAI", "Redis"],
    years: 0,
    isLead: true,
    teamSlug: "automation" as TeamSlug,
  },
  {
    name: "Engineer — REPLACE_ME",
    role: "Automation Engineer",
    bio: "Chatbots, CRM sync, and reporting jobs. Placeholder card.",
    skills: ["Make", "Zapier", "Node"],
    years: 0,
    isLead: false,
    teamSlug: "automation" as TeamSlug,
  },
];

export const POSTS = [
  {
    slug: "nextjs-app-router-theni-saas",
    title: "Why our Labs products ship on Next.js App Router",
    excerpt:
      "GIFT and this site use App Router for SEO and server data. Here is how we decide between Vite SPAs and Next.",
    tags: ["Next.js", "Full Stack"],
    readingMins: 7,
    content: `TaskWagon is a Vite SPA because the product is an authenticated workspace. GIFT and the Labs marketing site are Next.js because Google has to understand them.

## The split
- **Public + SEO** → App Router, metadata, sitemap, JSON-LD.
- **Logged-in OS** → Vite/React, Socket.IO, Prisma API.

## Theni production
We still deploy on Hostinger Node and Docker. Prisma + MySQL stays constant so squads can move between products without a new data dialect.`,
  },
  {
    slug: "prisma-mysql-multi-product",
    title: "One database dialect for TaskWagon, GIFT, and Lumen",
    excerpt: "Prisma + MySQL is the Labs default. Why we did not split Postgres for one product.",
    tags: ["Prisma", "MySQL"],
    readingMins: 6,
    content: `Every Labs product that needs a relational store uses Prisma and MySQL.

## Why
Hostinger, client VPS, and local Docker all speak MySQL. Migrations stay boring. That is a feature.

## Patterns we reuse
Tenant scoping, cuid ids, JSON columns for stack arrays, and seed scripts that look like production.`,
  },
  {
    slug: "whatsapp-bots-without-chaos",
    title: "WhatsApp bots that do not fork your CRM",
    excerpt:
      "Lumen’s rule: one Contact across channels. Draft flows never execute. Here is the Automation squad’s bar.",
    tags: ["Automation", "WhatsApp"],
    readingMins: 8,
    content: `Most “WhatsApp CRM” stacks duplicate the person. Lumen stores one Contact and attaches channel accounts.

## Release bar
- Published flows are immutable.
- Live traffic never runs drafts.
- Queues for campaigns must not block inbox.

That is how we keep DDCarz-style chatbot work from becoming a second database.`,
  },
];

export const JOBS = [
  {
    slug: "fullstack-next-prisma",
    title: "Full Stack Engineer (Next.js + Prisma)",
    squad: "full-stack",
    location: "Theni / Hybrid",
    type: "Full-time",
    description:
      "Ship Labs products: GIFT, Snapvy APIs, this site. TypeScript required. REPLACE_ME for JD depth.",
  },
  {
    slug: "automation-whatsapp",
    title: "Automation Engineer (WhatsApp + n8n)",
    squad: "automation",
    location: "Theni / Hybrid",
    type: "Full-time",
    description:
      "Lumen flows, Meta Cloud API, and client chatbots. REPLACE_ME for JD depth.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aboobakkar Siddiq",
    quote:
      "Ennem marketing is best team to boost your company with creative ads and their deliverables and quality speaks louder.",
    source: "Google",
  },
  {
    name: "Insurance Point PCM (RAJ T)",
    quote: "Excellent work and attractive design.",
    source: "Google",
  },
  {
    name: "Local operator",
    quote:
      "Websites that sell, plus AI follow-up — that is the Labs + Marketing split we actually run.",
    source: "Client",
  },
];

export type TechStatus = "LIVE" | "BUILDING";

export const PRODUCT_STACKS: {
  name: string;
  slug: string;
  status: TechStatus;
  href: string;
  liveUrl?: string;
  role: string;
  stack: string[];
}[] = [
  {
    name: "TaskWagon",
    slug: "taskwagon",
    status: "LIVE",
    href: "/products/taskwagon",
    liveUrl: "https://taskwagon.com/",
    role: "Full Stack · SaaS",
    stack: [
      "React 19",
      "Vite",
      "Tailwind",
      "Redux / TanStack Query",
      "Socket.IO",
      "Node.js",
      "MySQL",
    ],
  },
  {
    name: "GIFT / GiftIndia",
    slug: "giftindia",
    status: "LIVE",
    href: "/products/giftindia",
    liveUrl: "https://greatindiaformationteam.com/",
    role: "Full Stack · membership",
    stack: ["Next.js App Router", "Prisma", "MySQL", "JWT", "S3", "Hostinger"],
  },
  {
    name: "Snapvy",
    slug: "snapvy",
    status: "LIVE",
    href: "/products/snapvy",
    liveUrl: "https://snapvy.ennemmarketings.com/",
    role: "Full Stack · mobile + web",
    stack: ["React Native", "Vite / React 19", "Node.js", "Tesseract OCR", "OpenAI"],
  },
  {
    name: "Lumen + Nexus",
    slug: "lumen",
    status: "BUILDING",
    href: "/products/lumen",
    role: "Full Stack + Automation",
    stack: [
      "React",
      "React Flow",
      "Node.js",
      "Prisma",
      "MySQL",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Docker",
    ],
  },
  {
    name: "This site",
    slug: "labs-site",
    status: "LIVE",
    href: "/",
    role: "Growth Labs marketing + CMS",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "GSAP",
      "Prisma",
      "MySQL",
      "Docker",
    ],
  },
  {
    name: "Ennem AI Studio",
    slug: "ai-studio",
    status: "LIVE",
    href: "/work/ennem-ai-studio",
    liveUrl: "https://ai.ennemmarketings.com/",
    role: "Automation squad",
    stack: ["WhatsApp Cloud API", "Make / Zapier", "n8n", "ChatGPT", "AI Video"],
  },
];

export const TECH_MAP: {
  layer: string;
  accent: "cyan" | "ember" | "lime";
  items: { name: string; why: string; usedOn: string[]; status: TechStatus }[];
}[] = [
  {
    layer: "Frontend",
    accent: "cyan",
    items: [
      {
        name: "Next.js 15",
        why: "App Router, SSR, and Metadata API for GIFT and this Labs site.",
        usedOn: ["GIFT", "This site"],
        status: "LIVE",
      },
      {
        name: "React 19",
        why: "Product UIs that ship as SPAs where App Router is not the right fit.",
        usedOn: ["TaskWagon", "Snapvy web", "Lumen"],
        status: "LIVE",
      },
      {
        name: "Vite",
        why: "Fast local loop for TaskWagon, Snapvy web, and analytics dashboards.",
        usedOn: ["TaskWagon", "Snapvy", "Growth Analytics"],
        status: "LIVE",
      },
      {
        name: "TypeScript",
        why: "Shared types across squads so APIs and UIs do not drift.",
        usedOn: ["All products", "This site"],
        status: "LIVE",
      },
      {
        name: "Tailwind CSS",
        why: "HUD systems and storefronts without a CSS debt pile.",
        usedOn: ["TaskWagon", "This site", "Snapvy web"],
        status: "LIVE",
      },
      {
        name: "Framer Motion + GSAP",
        why: "Page enter, magnetic buttons, and sequences that stay on the GPU.",
        usedOn: ["This site"],
        status: "LIVE",
      },
    ],
  },
  {
    layer: "Backend",
    accent: "ember",
    items: [
      {
        name: "Node.js",
        why: "APIs behind TaskWagon, Snapvy, and Lumen — one runtime the squad already owns.",
        usedOn: ["TaskWagon", "Snapvy", "Lumen"],
        status: "LIVE",
      },
      {
        name: "Prisma",
        why: "Migrations we can review in Git instead of clicking phpMyAdmin.",
        usedOn: ["GIFT", "Lumen", "This site"],
        status: "LIVE",
      },
      {
        name: "Zod + React Hook Form",
        why: "Runtime validation at the edge of every lead and apply form.",
        usedOn: ["This site", "GIFT"],
        status: "LIVE",
      },
      {
        name: "Socket.IO",
        why: "Live channels, notifications, and bot inbox without polling.",
        usedOn: ["TaskWagon", "Lumen"],
        status: "LIVE",
      },
      {
        name: "JWT / Google login",
        why: "Role gates (ADMIN / MANAGER / STAFF) and volunteer sign-in.",
        usedOn: ["GIFT"],
        status: "LIVE",
      },
    ],
  },
  {
    layer: "Database",
    accent: "lime",
    items: [
      {
        name: "MySQL",
        why: "Hostinger + Docker + every Labs product already speak it.",
        usedOn: ["All products"],
        status: "LIVE",
      },
      {
        name: "Redis + BullMQ",
        why: "Lumen queues, bot rate limits, and campaign jobs.",
        usedOn: ["Lumen"],
        status: "BUILDING",
      },
      {
        name: "S3 object storage",
        why: "Membership cards, gallery, and OCR attachments off the app disk.",
        usedOn: ["GIFT", "Snapvy"],
        status: "LIVE",
      },
    ],
  },
  {
    layer: "Mobile",
    accent: "cyan",
    items: [
      {
        name: "React Native",
        why: "Snapvy Android — scan a card, save to phone + CRM history.",
        usedOn: ["Snapvy"],
        status: "LIVE",
      },
      {
        name: "Tesseract + AI enhance",
        why: "OCR the visiting card, then a model cleans name / phone / company.",
        usedOn: ["Snapvy"],
        status: "LIVE",
      },
    ],
  },
  {
    layer: "DevOps",
    accent: "ember",
    items: [
      {
        name: "Docker + compose",
        why: "App + MySQL (+ Nginx) locally, same shape as prod.",
        usedOn: ["This site", "Lumen"],
        status: "LIVE",
      },
      {
        name: "Hostinger Node",
        why: "Where GIFT, TaskWagon API, and Snapvy actually run today.",
        usedOn: ["GIFT", "TaskWagon", "Snapvy"],
        status: "LIVE",
      },
      {
        name: "ESLint / Prettier / Husky",
        why: "Format and lint on commit so PRs are about product, not spaces.",
        usedOn: ["This site"],
        status: "LIVE",
      },
    ],
  },
  {
    layer: "Automation",
    accent: "cyan",
    items: [
      {
        name: "n8n / Make / Zapier",
        why: "Client ops before a full Lumen tenant is worth the build.",
        usedOn: ["AI Studio", "Client bots"],
        status: "LIVE",
      },
      {
        name: "WhatsApp Cloud API",
        why: "Lead follow-up that hits the phone — Meta / Twilio, not a browser tab.",
        usedOn: ["Lumen", "AI Studio"],
        status: "LIVE",
      },
      {
        name: "Telegram + webchat",
        why: "Same contact, multiple channels — Lumen attaches accounts, not duplicate people.",
        usedOn: ["Lumen"],
        status: "BUILDING",
      },
      {
        name: "OpenAI / ChatGPT",
        why: "OCR enhance, flow AI, product copy, and avatar scripts.",
        usedOn: ["Snapvy", "Lumen", "AI Studio"],
        status: "LIVE",
      },
      {
        name: "React Flow",
        why: "Visual bot builder inside Lumen instead of a YAML graveyard.",
        usedOn: ["Lumen"],
        status: "BUILDING",
      },
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function featuredProjects() {
  return PROJECTS.filter((p) => p.featured).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function products() {
  return PROJECTS.filter((p) => p.kind === "PRODUCT").sort((a, b) => a.sortOrder - b.sortOrder);
}

export function domainOf(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
