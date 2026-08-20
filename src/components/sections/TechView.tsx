"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { PRODUCT_STACKS, TECH_MAP } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function TechView() {
  const layers = ["All", ...TECH_MAP.map((l) => l.layer)];
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? TECH_MAP : TECH_MAP.filter((l) => l.layer === active)),
    [active],
  );

  const constellation = TECH_MAP.flatMap((l) => l.items.map((i) => i.name));

  return (
    <div>
      <section className="relative overflow-hidden px-4 pb-16 pt-12 md:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-ember/10 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="Production kit"
            title="The stack we actually run"
            body="Not a logo wall of tools we tried once. This is the dialect across TaskWagon, GIFT, Snapvy, Lumen, and this site — the stack Labs actually hires for."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {["TaskWagon", "GIFT", "Snapvy", "Lumen", "Next.js", "WhatsApp Cloud"].map((tag) => (
              <span
                key={tag}
                className="border border-cyan/25 bg-cyan/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-4">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">
          {[...constellation, ...constellation].map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center gap-8">
              {name}
              <span className="text-ember">◆</span>
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          kicker="Where it ships"
          title="Product → stack"
          body="Each product has a real runtime. LIVE means customers hit it. BUILDING means it is on disk, not a fake URL."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_STACKS.map((p, i) => (
            <motion.article
              key={p.slug}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={fade}
              transition={{ delay: i * 0.05 }}
              className="glass group relative overflow-hidden p-5"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-ember/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                    {p.role}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-white">{p.name}</h3>
                </div>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em]",
                    p.status === "LIVE"
                      ? "border-lime/40 text-lime"
                      : "border-amber-300/40 text-amber-300",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full pip-live",
                      p.status === "LIVE" ? "bg-lime" : "bg-amber-300",
                    )}
                  />
                  {p.status === "LIVE" ? "LIVE" : "BUILDING"}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                <Link href={p.href} className="text-cyan hover:text-white">
                  Open case →
                </Link>
                {p.liveUrl ? (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-ember hover:text-white">
                    Visit live
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="flex flex-wrap gap-2">
          {layers.map((layer) => (
            <button
              key={layer}
              type="button"
              onClick={() => setActive(layer)}
              className={cn(
                "border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors",
                active === layer
                  ? "border-ember bg-ember/15 text-ember"
                  : "border-white/15 text-white/55 hover:border-white/40 hover:text-white",
              )}
            >
              {layer}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {visible.map((layer, li) => (
            <motion.section
              key={layer.layer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={fade}
              transition={{ delay: li * 0.06 }}
              className="glass relative overflow-hidden p-6"
            >
              <div
                className={cn(
                  "mb-5 flex items-center justify-between gap-3",
                  layer.accent === "cyan" && "text-cyan",
                  layer.accent === "ember" && "text-ember",
                  layer.accent === "lime" && "text-lime",
                )}
              >
                <h2 className="font-display text-2xl">{layer.layer}</h2>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-70">
                  {String(layer.items.length).padStart(2, "0")} tools
                </span>
              </div>
              <ul className="space-y-5">
                {layer.items.map((item) => (
                  <li key={item.name} className="border-t border-white/10 pt-4 first:border-0 first:pt-0">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-white">{item.name}</p>
                      <span
                        className={cn(
                          "shrink-0 font-mono text-[9px] uppercase tracking-widest",
                          item.status === "LIVE" ? "text-lime" : "text-amber-300",
                        )}
                      >
                        {item.status === "LIVE" ? "in prod" : "now building"}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-white/50">{item.why}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.usedOn.map((u) => (
                        <span
                          key={u}
                          className="border border-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white/45"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>

        <div className="mt-14 border border-white/10 bg-ember/10 p-8 text-center">
          <p className="font-display text-2xl text-white md:text-3xl">Need this kit on your product?</p>
          <p className="mx-auto mt-3 max-w-lg text-white/55">
            Full stack or automation — we ship with the same dialect you see here.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Hire a squad</Button>
            <Button href="/work" variant="ghost">
              See it live
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
