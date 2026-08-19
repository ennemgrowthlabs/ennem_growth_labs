import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { StatusPip } from "@/components/ui/ProjectCard";
import { getProject, domainOf } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

const PAGES = {
  taskwagon: {
    extra:
      "Landing + app split: taskwagon.com for acquisition, app.taskwagon.com for the Node API. Sales: sales@taskwagon.com.",
  },
  giftindia: {
    extra:
      "Public membership at greatindiaformationteam.com. Admin hub at admin.greatindiaformationteam.com. Instant digital ID cards.",
  },
  snapvy: {
    extra:
      "Web client at snapvy.ennemmarketings.com. API at snapvy.brewishstore.com. Privacy: /privacy.html for Play Console.",
  },
  lumen: {
    extra:
      "Lumen is the tenant workspace. Nexus is super-admin. Status BUILDING — request access, do not invent a live URL.",
  },
} as const;

type Slug = keyof typeof PAGES;
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug === "giftindia" ? "giftindia" : slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.summary, path: `/products/${slug}` });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (!(slug in PAGES)) notFound();
  const projectSlug = slug as Slug;
  const p = getProject(projectSlug);
  if (!p) notFound();
  const extra = PAGES[projectSlug].extra;

  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
      <StatusPip status={p.status} />
      <h1 className="mt-4 font-display text-5xl">{p.title}</h1>
      <p className="mt-4 text-lg text-white/65">{p.summary}</p>
      <p className="mt-6 text-white/70">{p.content}</p>
      <p className="mt-4 text-sm text-cyan/80">{extra}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        {p.liveUrl ? (
          <Button href={p.liveUrl}>Visit {domainOf(p.liveUrl)}</Button>
        ) : (
          <Button href="/contact">Request early access</Button>
        )}
        {p.appUrl ? (
          <Button href={p.appUrl} variant="ghost">
            {domainOf(p.appUrl)}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
