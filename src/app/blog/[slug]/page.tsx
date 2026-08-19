import { notFound } from "next/navigation";
import { POSTS } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMeta({ title: post.title, description: post.excerpt, path: `/blog/${slug}` });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-2xl px-4 pb-24 pt-12">
      <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">
        {post.readingMins} min read
      </p>
      <h1 className="mt-3 font-display text-4xl">{post.title}</h1>
      <p className="mt-4 text-white/55">{post.excerpt}</p>
      <div className="prose-invert mt-10 space-y-4 whitespace-pre-wrap text-white/75">
        {post.content}
      </div>
      <aside className="mt-16 border-t border-white/10 pt-8">
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Related</p>
        <ul className="mt-3 space-y-2">
          {related.map((r) => (
            <li key={r.slug}>
              <a href={`/blog/${r.slug}`} className="text-cyan hover:text-white">
                {r.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
