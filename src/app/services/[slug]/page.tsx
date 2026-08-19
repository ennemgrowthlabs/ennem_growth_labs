import { notFound } from "next/navigation";
import { TEAMS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { pageMeta } from "@/lib/seo";

const PLAYBOOK: Record<
  string,
  { deliverables: string[]; does: string }
> = {
  "full-stack": {
    does:
      "Next.js apps, Node APIs, dashboards, D2C backends, and SaaS like TaskWagon, GIFT, and Snapvy.",
    deliverables: [
      "Production App Router or Vite workspace",
      "Prisma schema + seed",
      "Docker / Hostinger Node deploy",
      "Auth, roles, admin hub",
    ],
  },
  automation: {
    does:
      "AI agents, WhatsApp / Telegram bots, n8n / Make, lead ops, reporting. Lumen is the long game.",
    deliverables: [
      "Channel-connected inbox",
      "Flow builder or n8n recipes",
      "CRM contact memory",
      "Campaign queues that do not block support",
    ],
  },
  wordpress: {
    does:
      "Custom themes, WooCommerce, Core Web Vitals, migrations — Elquora through DFWIN.",
    deliverables: [
      "Store or business site",
      "CWV pass on templates",
      "SEO basics (titles, schema, sitemap)",
      "Handover + 30-day hypercare",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TEAMS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const team = TEAMS.find((t) => t.slug === slug);
  if (!team) return {};
  return pageMeta({
    title: team.name,
    description: team.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const team = TEAMS.find((t) => t.slug === slug);
  const book = PLAYBOOK[slug];
  if (!team || !book) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
      <h1 className="font-display text-4xl md:text-6xl">{team.name}</h1>
      <p className="mt-4 text-lg text-white/65">{book.does}</p>
      <h2 className="mt-12 font-display text-2xl">Deliverables</h2>
      <ul className="mt-4 space-y-2">
        {book.deliverables.map((d) => (
          <li key={d} className="font-mono text-sm text-lime">
            ▸ {d}
          </li>
        ))}
      </ul>
      <h2 className="mt-12 font-display text-2xl">Stack</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {team.stack.map((s) => (
          <span
            key={s}
            className="border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-12 flex gap-4">
        <Button href="/contact">Hire this squad</Button>
        <Button href={`/teams/${slug}`} variant="ghost">
          Meet the roster
        </Button>
      </div>
    </div>
  );
}
