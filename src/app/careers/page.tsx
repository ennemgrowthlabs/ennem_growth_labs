import { JOBS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Careers",
  description: "Join Ennem Growth Labs in Theni — full stack and automation.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
      <SectionHeading
        kicker="Careers"
        title="Open quests"
        body="Placeholder JDs. Apply anyway — we read every brief."
      />
      <div className="mt-10 space-y-4">
        {JOBS.map((j) => (
          <article key={j.slug} id={j.slug} className="glass p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">
              {j.squad} · {j.type} · {j.location}
            </p>
            <h2 className="mt-2 font-display text-2xl">{j.title}</h2>
            <p className="mt-3 text-sm text-white/60">{j.description}</p>
            <div className="mt-5">
              <Button href="/contact">Apply via contact</Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
