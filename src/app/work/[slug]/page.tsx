import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { StatusPip } from "@/components/ui/ProjectCard";
import { PROJECTS, SITE, domainOf, getProject } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

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
          <Button href="/contact">Run this on your stack</Button>
        )}
        {p.productHref ? (
          <Button href={p.productHref} variant="ghost">
            Product page
          </Button>
        ) : (
          <Button href="/contact" variant="ghost">
            Hire automation
          </Button>
        )}
      </div>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="glass p-5">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-cyan">Problem</h2>
          <p className="mt-3 text-sm text-white/70">{p.problem}</p>
        </div>
        <div className="glass p-5">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-cyan">What we built</h2>
          <p className="mt-3 text-sm text-white/70">{p.solution}</p>
        </div>
      </section>

      {p.usage ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl text-white">How it runs in real time</h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{p.usage}</p>
        </section>
      ) : null}

      {p.workflow?.length ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl text-white">Pipeline</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {p.workflow.map((step) => (
              <li key={step.step} className="border border-white/10 p-5">
                <p className="font-display text-2xl text-ember">{step.step}</p>
                <h3 className="mt-2 font-display text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-white/55">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {p.features?.length ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl text-white">In the canvas</h2>
          <ul className="mt-5 space-y-2">
            {p.features.map((f) => (
              <li key={f} className="font-mono text-xs text-lime">
                ▸ {f}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="mt-10 text-base leading-relaxed text-white/70">{p.content}</p>

      {p.gallery?.length ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl text-white">Proof</h2>
          <div className="mt-6 grid gap-4">
            {p.gallery.map((src) => (
              <div key={src} className="relative overflow-hidden border border-white/10">
                <Image
                  src={src}
                  alt={`${p.title} workflow proof`}
                  width={1200}
                  height={720}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <h2 className="mt-12 font-display text-2xl text-white">Results</h2>
      <ul className="mt-5 space-y-2">
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
