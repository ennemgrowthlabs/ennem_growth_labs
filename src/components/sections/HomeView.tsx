"use client";

import { motion } from "framer-motion";
import {
  PROJECTS,
  SITE,
  TEAMS,
  TECH_MAP,
  TESTIMONIALS,
  domainOf,
  featuredProjects,
  products,
} from "@/lib/data";
import { HeroScan } from "@/components/motion/HeroScan";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function HomeView() {
  const featured = featuredProjects();
  const own = products();
  const domains = PROJECTS.filter((p) => p.liveUrl).map((p) => domainOf(p.liveUrl));

  return (
    <div>
      <section className="relative overflow-hidden px-4 pb-24 pt-16 md:pt-24">
        <HeroScan />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(226,60,20,0.18),transparent_55%)]" />
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fade}
            className="font-mono text-[11px] uppercase tracking-[0.42em] text-cyan"
          >
            Theni · Tamil Nadu · Tech studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, clipPath: "inset(0 0 40% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 font-display text-5xl leading-[0.95] tracking-wide text-white md:text-8xl"
          >
            ENNEM
            <br />
            GROWTH LABS
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
            variants={fade}
            className="mt-6 max-w-xl text-lg text-white/65 md:text-xl"
          >
            {SITE.tagline} Three squads. Own products first — TaskWagon, GIFT, Snapvy, Lumen —
            then stores that already sell.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ delay: 0.25 }}
            variants={fade}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/work">View work</Button>
            <Button href="/contact" variant="ghost">
              Hire a team
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-ember py-3">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.28em] text-white">
          {[...domains, ...domains].map((d, i) => (
            <span key={`${d}-${i}`}>◈ {d}</span>
          ))}
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-4">
        {SITE.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            variants={fade}
            className="glass p-6"
          >
            <p className="font-display text-4xl text-ember md:text-5xl">
              {s.value}
              <span className="text-2xl text-cyan">{s.suffix}</span>
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/45">
              {s.label}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeading
          kicker="Squad select"
          title="Three teams. One launch bar."
          body="Full stack ships products. Automation runs the follow-up. WordPress keeps the stores converting."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TEAMS.map((t, i) => (
            <motion.a
              key={t.slug}
              href={t.href}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              variants={fade}
              className="glass group block p-6 hover:-translate-y-1 hover:glow-ember"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan">
                0{i + 1} / {t.accent.toUpperCase()}
              </p>
              <h3 className="mt-4 font-display text-2xl text-white">{t.name.replace(" Team", "")}</h3>
              <p className="mt-3 text-sm text-white/60">{t.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-white/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          kicker="Own products"
          title="Shipped from Theni. Running in production."
          body="TaskWagon, GIFT, and Snapvy are live. Lumen is in active build — no fake URL."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {own.map((p) => (
            <ProjectCard key={p.slug} project={p} featured />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          kicker="Client work"
          title="Stores and sites already live"
          body="WordPress squad catalogue — every card that has a URL visits the real domain."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured
            .filter((p) => p.kind !== "PRODUCT")
            .map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
        </div>
        <div className="mt-8">
          <Button href="/work" variant="ghost">
            Full archive
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading kicker="Stack" title="Why this kit" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TECH_MAP.map((layer) => (
            <div key={layer.layer} className="glass p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-lime">
                {layer.layer}
              </p>
              <ul className="mt-4 space-y-3">
                {layer.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm text-white">{item.name}</p>
                    <p className="text-xs text-white/45">{item.why}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading kicker="Process" title="Discover → Build → Ship → Scale" />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {SITE.process.map((p) => (
            <div key={p.step} className="border border-white/10 p-5">
              <p className="font-display text-3xl text-ember">{p.step}</p>
              <h3 className="mt-3 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-white/55">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading kicker="Industries" title="Where we already operate" />
        <div className="mt-8 flex flex-wrap gap-2">
          {SITE.industries.map((i) => (
            <span
              key={i}
              className="border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white/60"
            >
              {i}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading kicker="Signal" title="From Google reviews" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="glass p-6">
              <p className="text-sm leading-relaxed text-white/75">“{t.quote}”</p>
              <footer className="mt-4 font-mono text-[10px] uppercase tracking-widest text-cyan">
                {t.name} · {t.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="relative mx-4 mb-16 overflow-hidden border border-ember/40 bg-gradient-to-r from-ember/20 to-cyan/10 px-6 py-16 text-center md:mx-auto md:max-w-6xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-cyan">Quest</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl">Book a strategy call</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/60">
          Tell us which squad you need. We answer on WhatsApp the same day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Start a brief</Button>
          <Button href={SITE.whatsapp} variant="cyan">
            WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
