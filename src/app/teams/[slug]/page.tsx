import { notFound } from "next/navigation";
import { MEMBERS, PROJECTS, TEAMS, type TeamSlug } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";

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
    path: `/teams/${slug}`,
  });
}

export default async function TeamPage({ params }: Props) {
  const { slug } = await params;
  const team = TEAMS.find((t) => t.slug === slug);
  if (!team) notFound();
  const people = MEMBERS.filter((m) => m.teamSlug === (slug as TeamSlug));
  const work = PROJECTS.filter((p) => p.teamSlug === slug).slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-12">
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-cyan">Squad</p>
      <h1 className="mt-3 font-display text-4xl md:text-6xl">{team.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-white/65">{team.description}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {team.stack.map((s) => (
          <span
            key={s}
            className="border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest"
          >
            {s}
          </span>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl">Roster</h2>
      <p className="mt-2 text-sm text-white/40">
        Names and photos are REPLACE_ME until the live roster is supplied. Do not use the
        duplicated marketing-site placeholders.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {people.map((m) => (
          <article key={m.role + m.name} className="glass p-5">
            <div className="mb-4 grid h-16 w-16 place-items-center border border-white/15 font-mono text-[10px] text-white/35">
              PHOTO
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ember">
              {m.isLead ? "Lead" : "Member"}
            </p>
            <h3 className="mt-1 font-display text-xl">{m.name}</h3>
            <p className="text-sm text-white/50">{m.role}</p>
            <p className="mt-3 text-sm text-white/65">{m.bio}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl">Selected work</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {work.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="mt-10">
        <Button href="/contact">Hire this squad</Button>
      </div>
    </div>
  );
}
