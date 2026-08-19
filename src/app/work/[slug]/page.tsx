import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { StatusPip } from "@/components/ui/ProjectCard";
import { PROJECTS, domainOf, getProject } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMeta({
    title: p.title,
    description: p.summary,
    path: `/work/${p.slug}`,
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": p.kind === "PRODUCT" ? "SoftwareApplication" : "CreativeWork",
    name: p.title,
    description: p.summary,
    url: `${SITE.url}/work/${p.slug}`,
    sameAs: [p.liveUrl, p.appUrl].filter(Boolean),
  };

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/work"
        className="font-mono text-[10px] uppercase tracking-widest text-white/40"
      >
        ← Archive
      </Link>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <StatusPip status={p.status} />
        <span className="font-mono text-[10px] text-white/40">
          {p.kind} · {p.teamSlug} · {p.year}
        </span>
      </div>
      <h1 className="mt-4 font-display text-4xl md:text-6xl">{p.title}</h1>
      <p className="mt-4 text-lg text-white/65">{p.summary}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {p.liveUrl ? (
          <Button href={p.liveUrl}>Visit {domainOf(p.liveUrl)}</Button>
        ) : (
          <Button href="/contact">Request early access</Button>
        )}
        {p.productHref ? (
          <Button href={p.productHref} variant="ghost">
            Product page
          </Button>
        ) : null}
      </div>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="glass p-5">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-cyan">Problem</h2>
          <p className="mt-3 text-sm text-white/70">{p.problem}</p>
        </div>
        <div className="glass p-5">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-cyan">Solution</h2>
          <p className="mt-3 text-sm text-white/70">{p.solution}</p>
        </div>
      </section>
      <p className="mt-8 text-base leading-relaxed text-white/70">{p.content}</p>
      <ul className="mt-8 space-y-2">
        {p.results.map((r) => (
          <li key={r} className="font-mono text-xs text-lime">
            ▸ {r}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}
