import Link from "next/link";
import { TEAMS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services",
  description:
    "Full stack SaaS and WhatsApp automation — two Ennem Growth Labs squads in Theni.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-12">
      <SectionHeading
        kicker="Services"
        title="Pick a squad, not a vague retainers menu."
        body="Each lane has a deep page: stack, deliverables, and the live work behind it."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {TEAMS.map((t) => (
          <Link key={t.slug} href={`/services/${t.slug}`} className="glass block p-6 hover:glow-ember">
            <h2 className="font-display text-2xl">{t.name.replace(" Team", "")}</h2>
            <p className="mt-3 text-sm text-white/60">{t.tagline}</p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-cyan">
              Open playbook →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
