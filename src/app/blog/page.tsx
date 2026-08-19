import Link from "next/link";
import { POSTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Journal",
  description:
    "Notes from Ennem Growth Labs on Next.js, Prisma, WhatsApp automation, and WooCommerce speed.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
      <SectionHeading kicker="Journal" title="Field notes from the three squads" />
      <div className="mt-10 space-y-4">
        {POSTS.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="glass block p-6 hover:glow-ember">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
              {p.readingMins} min · {p.tags.join(" / ")}
            </p>
            <h2 className="mt-2 font-display text-2xl">{p.title}</h2>
            <p className="mt-2 text-sm text-white/60">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
