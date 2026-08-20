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
      "AI workflows we run in n8n today: Full AI Search Audit, Thenimart NiBot, WhatsApp RAG + lead capture, Telegram GST logger, and the AI Marketing Team desk. Lumen/Nexus is the long game.",
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
  usage?: string;
  features?: string[];
  workflow?: { step: string; title: string; body: string }[];
  gallery?: string[];
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
    slug: "ai-search-audit",
    title: "Full AI Search Audit",
    summary:
      "One URL in. Six GPT-4o-mini agents out — Technical SEO, Content SEO, auto-fixes, AIO, AEO, and GEO — emailed as a Markdown report.",
    content:
      "This is a live n8n engine, not a slide deck. A client (or our own product team) pastes a landing URL into an n8n form. The workflow scrapes the live HTML, fans out to six specialised GPT-4o-mini agents in parallel, merges their findings, formats a full Markdown report, writes it to Google Docs, and emails it on Gmail. WhatsApp delivery exists on the canvas and is toggled off until a campaign needs it. We ran it against TaskWagon and got a real scorecard: missing meta description and H1, AIO/AEO/GEO readiness at 3/10, plus ready-to-paste JSON for title, description, headings, alt text, and LocalBusiness schema.",
    problem:
      "SEO, Google AI Overviews, featured snippets, and ChatGPT/Perplexity citations are four different jobs. Agencies still do them as four retainers.",
    solution:
      "One scrape. Six agents. One report. Technical SEO finds code-level gaps. Content SEO scores keywords and readability. SEO Fix Generator returns JSON (meta, H1/H2, alt, schema). AIO scores Google AI Overviews. AEO scores featured snippets and voice. GEO scores citability in ChatGPT, Claude, and Perplexity.",
    status: "LIVE",
    kind: "PRODUCT",
    industry: "SEO / AI Search",
    year: 2026,
    stack: ["n8n", "GPT-4o-mini", "Web scrape", "Google Docs", "Gmail"],
    results: [
      "Real TaskWagon run: missing meta + H1 called out with copy-paste fixes",
      "AIO / AEO / GEO readiness scored (3) with FAQ and snippet rewrites",
      "Auto JSON: meta_title, meta_description, schema LocalBusiness",
    ],
    featured: true,
    sortOrder: 7,
    teamSlug: "automation",
    usage:
      "In production we treat this as a 10-minute intake. Paste taskwagon.com (or any client URL) into the n8n form. While you stay on the call, scrape → six agents → Merge All → Aggregator → Format Full Report → Google Doc + Gmail. The operator does not rewrite the audit; they send the Doc link. Same-day use: ship the JSON block to the Full Stack squad for metadata and schema on the Next.js site.",
    features: [
      "n8n Form Trigger — single URL field, no custom app",
      "Live HTML scrape of the submitted landing page",
      "Six parallel OpenAI agents (not one mega-prompt)",
      "Merge + Markdown formatter → Google Docs",
      "Gmail delivery; WhatsApp notify node on the canvas (deactivated)",
    ],
    workflow: [
      {
        step: "01",
        title: "Form + scrape",
        body: "Operator submits the URL. n8n pulls the live HTML so agents see what Google and AI crawlers see — not a screenshot of the SPA.",
      },
      {
        step: "02",
        title: "Six agents in parallel",
        body: "Technical SEO, Content SEO, SEO Fix Generator, AIO (AI Overviews), AEO (snippets + voice), GEO (ChatGPT / Claude / Perplexity citations).",
      },
      {
        step: "03",
        title: "Merge + format",
        body: "Merge All + Aggregator stitch sections 1–6 into one Markdown pack: critical issues, quick wins, opportunities, JSON fixes.",
      },
      {
        step: "04",
        title: "Deliver",
        body: "Google Docs document is created. Gmail sends the report. WhatsApp is wired but off until the client wants chat delivery.",
      },
    ],
    gallery: [
      "/automation/ai-search-workflow.png",
      "/automation/ai-search-aeo-geo.png",
      "/automation/ai-search-fixes.png",
    ],
  },
  {
    slug: "thenimart-nibot",
    title: "Thenimart NiBot",
    summary:
      "Multi-agent shopping assistant on thenimart.com — intent routing for orders, product recs, and support tickets in English and Tamil.",
    content:
      "NiBot is the chat widget on Thenimart (Ennem’s marketplace). A webhook takes the shopper’s message plus a session id. An intent agent (NiBot) appends JSON such as order_status or support_ticket. A Code node extracts the intent; a Switch fans out to three specialists: Order Specialist (Supabase, live delivery by order id), Shopping Concierge (catalogue search + recommendations), Support Manager (ticket ids + Gmail confirmation). Every agent has Window Buffer Memory so the thread stays human. Responses are sanitised before Respond to Webhook, so the shopper never sees n8n JSON. The same canvas handles bilingual English/Tamil and can hand a checkout link — discovery to transaction without a human agent on shift.",
    problem:
      "A multi-vendor marketplace cannot staff 24/7 chat in two languages and still look up real order rows and SKUs.",
    solution:
      "Webhook in, intent out, specialists on Supabase + Gmail. NiBot greets on thenimart.com: browse products, track order, today’s deals.",
    liveUrl: "https://thenimart.com/",
    status: "LIVE",
    kind: "CLIENT",
    industry: "Ecommerce / Marketplace",
    year: 2026,
    stack: ["n8n", "OpenAI", "Supabase", "Webhooks", "Gmail", "NiBot"],
    results: [
      "Live chat on thenimart.com (NiBot greeting + track-order chips)",
      "Order status from Supabase, not a canned reply",
      "Auto support tickets with unique ids + Gmail confirm",
    ],
    featured: true,
    sortOrder: 8,
    teamSlug: "automation",
    usage:
      "Shopper opens the blue chat chip on thenimart.com. Message hits the webhook with a session id. NiBot classifies intent. If they paste an order id, the Order Specialist reads Supabase and answers with real delivery state. If they name a category, the Concierge calls getProducts / getProductRecommendation and can return a checkout path. If they need help, Support Manager creates a ticket, emails them, and the widget confirms. Memory keeps “that biryani order” in context across turns. Tamil and English on the same flow.",
    features: [
      "Intent JSON from NiBot — no brittle keyword lists",
      "Supabase for live orders and catalogue",
      "Window Buffer Memory on every specialist",
      "Bilingual English + Tamil",
      "Ticket ids generated in Code nodes + Gmail",
    ],
    workflow: [
      {
        step: "01",
        title: "Webhook + session",
        body: "Chat widget posts the message and session id into n8n.",
      },
      {
        step: "02",
        title: "NiBot intent",
        body: "AI agent appends intent (order_status, shopping, support_ticket). Code node extracts it for the Switch.",
      },
      {
        step: "03",
        title: "Specialists",
        body: "Order Specialist ↔ Supabase. Shopping Concierge ↔ product DB. Support Manager ↔ tickets + Gmail.",
      },
      {
        step: "04",
        title: "Clean reply",
        body: "Strip tooling markup. Respond to Webhook so the Thenimart chip shows a normal answer.",
      },
    ],
    gallery: ["/automation/thenimart-chat.png"],
  },
  {
    slug: "whatsapp-knowledge-agent",
    title: "WhatsApp Knowledge Agent",
    summary:
      "Multimodal WhatsApp brain — text, images, PDF, and Excel into a vector store, then answers from the private knowledge base.",
    content:
      "This is the marketing/support WhatsApp agent: not a menu bot. WhatsApp Trigger receives the message. A Switch splits Text / Image / Document. Images go to OpenAI Vision for a description. PDFs and Excel are loaded to text. Everything is embedded and upserted into a vector store so the next question can retrieve. A Chain/Agent node mixes the live query + retrieved chunks + vision captions and replies on WhatsApp. Real-time use: a client drops a rate card, a product photo, or a policy PDF in chat; the agent answers from that file without a human opening Drive.",
    problem:
      "WhatsApp groups dump PDFs and product photos. Replies still come from whoever saw the chat last.",
    solution:
      "Vision + document loaders + embeddings + agent. The WhatsApp thread is the UI; the vector store is the memory.",
    status: "LIVE",
    kind: "PRODUCT",
    industry: "WhatsApp / RAG",
    year: 2026,
    stack: ["n8n", "WhatsApp", "OpenAI Vision", "Embeddings", "Vector store"],
    results: [
      "Text, image, and PDF/Excel on one Switch",
      "Private knowledge base searchable in chat",
      "Reply stays inside WhatsApp — no extra portal",
    ],
    featured: true,
    sortOrder: 9,
    teamSlug: "automation",
    usage:
      "Customer or staff sends a WhatsApp. If it is a photo of a product or a board, Vision describes it. If it is a PDF/xlsx, loaders extract text and upsert into the vector store. The next question (“what is the GST on that SKU?”) retrieves the chunk and answers in the same thread. Operators do not re-upload files to a CMS; the chat is the ingest.",
    features: [
      "WhatsApp Trigger as the only frontend",
      "OpenAI Vision on images",
      "PDF + Excel loaders",
      "Embeddings → vector store retrieval",
      "Agent reply back on WhatsApp",
    ],
    workflow: [
      {
        step: "01",
        title: "Trigger + switch",
        body: "Incoming WhatsApp classified as text, image, or document.",
      },
      {
        step: "02",
        title: "Understand media",
        body: "Vision captions images. Document loaders flatten PDF/Excel to text.",
      },
      {
        step: "03",
        title: "Index + retrieve",
        body: "Embeddings land in the vector store. The agent queries it with the user’s question.",
      },
      {
        step: "04",
        title: "Reply",
        body: "WhatsApp Send Response returns a sourced answer, not a hallucinated brochure.",
      },
    ],
    gallery: ["/automation/whatsapp-agent-canvas.png"],
  },
  {
    slug: "whatsapp-lead-capture",
    title: "WhatsApp / Telegram Lead Capture",
    summary:
      "Voice, card photos, and PDFs in — structured contacts out. Google Sheet rows for name, company, phone, email, web, address.",
    content:
      "Field teams WhatsApp or Telegram a visiting card photo, a voice note, or a PDF. The workflow detects type, transcribes (Whisper on audio, GPT-4o Vision on images, PDF extract on docs), then an LLM pulls Name, Title, Company, Phone, Email, Website, Address, City, Country. JS cleans the JSON. Google Sheets appends a row. The same chat gets a confirmation. Proof sheet “Takedats” already holds real Theni rows — including Ennem Marketing and local operators — so this is not a demo with fake names.",
    problem:
      "Cards and voice intros never reach CRM. Snapvy covers the app path; this covers the chat path the team already lives in.",
    solution:
      "n8n WhatsApp/Telegram trigger → multimodal extract → Google Sheet. Optional vector upsert so the WhatsApp agent can recall the new contact.",
    status: "LIVE",
    kind: "PRODUCT",
    industry: "CRM / Field sales",
    year: 2026,
    stack: ["n8n", "WhatsApp", "Telegram", "GPT-4o Vision", "Whisper", "Google Sheets"],
    results: [
      "Live sheet columns: name, title, company, phone, email, website, address",
      "Real captured rows (ENNEM Marketing, local Theni businesses)",
      "Confirmation message back on the same channel",
    ],
    featured: true,
    sortOrder: 10,
    teamSlug: "automation",
    usage:
      "On a shop floor, shoot the visiting card into the Ennem WhatsApp/Telegram bot. In under a minute the sheet has the person and the sender gets “details added.” Voice notes work the same way after Whisper. No one types columns on a laptop between meetings.",
    features: [
      "WhatsApp + Telegram triggers",
      "Whisper for voice notes",
      "GPT-4o Vision OCR on cards",
      "PDF extract path",
      "Google Sheets as the ops database",
    ],
    workflow: [
      {
        step: "01",
        title: "Capture",
        body: "Message hits WhatsApp or Telegram. Type detect: text, audio, image, PDF.",
      },
      {
        step: "02",
        title: "Transcribe",
        body: "Whisper, Vision, or PDF extract collapse the input to text.",
      },
      {
        step: "03",
        title: "Parse + clean",
        body: "LLM extracts contact fields. JS node sanitises formatting before the sheet write.",
      },
      {
        step: "04",
        title: "Log + confirm",
        body: "Append Google Sheet row. Reply on chat. Optional upsert into the knowledge vector store.",
      },
    ],
    gallery: ["/automation/telegram-lead-flow.png", "/automation/whatsapp-agent-canvas.png"],
  },
  {
    slug: "telegram-expense-tracker",
    title: "Telegram Expense Tracker",
    summary:
      "Voice, receipt photo, or PDF on Telegram → GPT-4o-mini JSON (vendor, GSTIN, amount, CGST/SGST) → Google Sheet → confirmation.",
    content:
      "Ops and founders dump expenses where they already talk: Telegram. The workflow accepts voice notes, receipt images, PDFs, or plain text. GPT-4o-mini is prompted to return a strict JSON array (date, vendor, GSTIN, amount, tax name/type/percent, destination of supply, GST treatment). A JS node sanitises the model output so a bad comma cannot break the sheet. Each line becomes a row with INR, exchange rate, reverse charge, and Tamil Nadu as destination when that is the fact. The bot replies with a personalised summary so the sender knows the book is updated without opening Sheets. Output columns match accounting handoff (Zoho-style GST fields), not a toy “amount + note” list.",
    problem:
      "Receipts live in camera rolls. By month-end nobody remembers GSTIN, tax split, or destination of supply.",
    solution:
      "Telegram in, structured GST row out. AI parse + JS clean + Google Sheets + instant Telegram ack.",
    status: "LIVE",
    kind: "PRODUCT",
    industry: "Finance / Ops",
    year: 2026,
    stack: ["n8n", "Telegram", "GPT-4o-mini", "Whisper", "GPT-4o Vision", "Google Sheets"],
    results: [
      "Sheet rows for COM domain, Zoho Books, food — with CGST/SGST splits",
      "GST treatment and destination of supply (Tamil Nadu) captured",
      "Same-thread confirmation after every log",
    ],
    featured: true,
    sortOrder: 11,
    teamSlug: "automation",
    usage:
      "Forward a restaurant bill photo or say “Zoho Books Professional 4,500 GST” on Telegram. Whisper/Vision turns it into text; GPT-4o-mini fills the JSON; Sheets gets a bookkeeping-ready row; you get the ack. Accountant opens the sheet, not a WhatsApp archaeology session.",
    features: [
      "Telegram-only intake (voice, image, PDF, text)",
      "GPT-4o-mini strict JSON expenses array",
      "JS sanitiser before write",
      "GST / CGST / SGST / reverse charge columns",
      "Instant Telegram summary",
    ],
    workflow: [
      {
        step: "01",
        title: "Telegram in",
        body: "Voice → Whisper. Photo → Vision. PDF → extract. Text passes through.",
      },
      {
        step: "02",
        title: "Parse",
        body: "GPT-4o-mini extracts date, vendor, GSTIN, amount, tax lines into JSON.",
      },
      {
        step: "03",
        title: "Clean",
        body: "JS Code node fixes formatting so Sheets never gets a broken array.",
      },
      {
        step: "04",
        title: "Log + ack",
        body: "Append row. Telegram sends the logged summary back to the same user.",
      },
    ],
    gallery: ["/automation/expense-tracker-sheet.png"],
  },
  {
    slug: "ai-marketing-team",
    title: "AI Marketing Team",
    summary:
      "Six n8n “digital employees” in one folder: Search Images, Create Image, Edit Image, Blog Post, LinkedIn Post, Faceless Video.",
    content:
      "This is an n8n project folder — AI Marketing Team Workflows — six separate canvases that a marketer turns on per job instead of hiring six freelancers for one campaign week. Search Images pulls references. Create Image (DALL·E / Midjourney-class gen) makes originals from prompts. Edit Image applies brand passes. Blog Post drafts long-form. LinkedIn Post writes the professional cut. Faceless Video builds reel/short packages (script + stock/avatar path). They sit Inactive between campaigns on purpose: you activate the desk you need, run the job, then park it so tokens do not burn overnight. Real-time usage: strategy call in the morning, toggle Create Image + LinkedIn Post, ship assets before ads ops starts.",
    problem:
      "A Theni marketing desk cannot staff a writer, designer, and video editor for every client every week.",
    solution:
      "Six named workflows as digital employees. Activate per campaign. Same n8n credentials, separate executions.",
    status: "LIVE",
    kind: "PRODUCT",
    industry: "Marketing ops",
    year: 2025,
    stack: ["n8n", "OpenAI", "DALL·E", "Image gen", "LinkedIn copy", "Faceless video"],
    results: [
      "Six workflows in one n8n folder (created 22 Dec 2025)",
      "Image search / create / edit + blog + LinkedIn + faceless video",
      "Idle when Inactive — no always-on token burn",
    ],
    featured: true,
    sortOrder: 12,
    teamSlug: "automation",
    usage:
      "Producer opens n8n → AI Marketing Team Workflows. Need a reel? Toggle Faceless Video, drop the brief, execute. Need a thought-leadership post? LinkedIn Post. Need a blog with a hero? Blog Post + Create Image. Each run is an Execution you can audit. Toggle back to Inactive when the batch is done.",
    features: [
      "Search Images",
      "Create Image (generative)",
      "Edit Image (brand pass)",
      "Blog Post drafter",
      "LinkedIn Post drafter",
      "Faceless Video pipeline",
    ],
    workflow: [
      {
        step: "01",
        title: "Pick the employee",
        body: "Six canvases, one folder. Activate only the workflow the campaign needs.",
      },
      {
        step: "02",
        title: "Brief + execute",
        body: "Prompt or source URL in. Image, copy, or video job runs as an n8n execution.",
      },
      {
        step: "03",
        title: "Handoff",
        body: "Assets go to ads/ops or Ennem AI Studio for client publishing.",
      },
      {
        step: "04",
        title: "Park",
        body: "Set Inactive so the desk does not keep calling image/video models overnight.",
      },
    ],
    gallery: ["/automation/ai-marketing-workflows.png"],
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
    sortOrder: 20,
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
    sortOrder: 21,
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
    sortOrder: 22,
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
    sortOrder: 23,
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
    sortOrder: 24,
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
    sortOrder: 25,
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
    sortOrder: 26,
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
    sortOrder: 27,
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
    sortOrder: 28,
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
    sortOrder: 29,
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
    sortOrder: 30,
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
    sortOrder: 31,
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
        usedOn: ["AI Studio", "Search audit", "NiBot", "WhatsApp agent"],
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

export const N8N_SLUGS = [
  "ai-search-audit",
  "thenimart-nibot",
  "whatsapp-knowledge-agent",
  "whatsapp-lead-capture",
  "telegram-expense-tracker",
  "ai-marketing-team",
] as const;

export function n8nProjects() {
  return PROJECTS.filter((p) => N8N_SLUGS.includes(p.slug as (typeof N8N_SLUGS)[number])).sort(
    (a, b) => a.sortOrder - b.sortOrder,
  );
}

export function featuredProjects() {
  return PROJECTS.filter((p) => p.featured).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function products() {
  return PROJECTS.filter(
    (p) => p.kind === "PRODUCT" && !N8N_SLUGS.includes(p.slug as (typeof N8N_SLUGS)[number]),
  ).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function domainOf(url?: string) {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
