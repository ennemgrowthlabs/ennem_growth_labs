import Link from "next/link";
import type { Project } from "@/lib/data";
import { domainOf } from "@/lib/data";
import { cn } from "@/lib/utils";

export function StatusPip({ status }: { status: Project["status"] }) {
  const map = {
    LIVE: { label: "LIVE", className: "text-lime border-lime/40" },
    BUILDING: { label: "BUILDING", className: "text-amber-300 border-amber-300/40" },
    COMING: { label: "URL COMING", className: "text-white/50 border-white/20" },
  }[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em]",
        map.className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "LIVE" && "bg-lime pip-live",
          status === "BUILDING" && "bg-amber-300 pip-live",
          status === "COMING" && "bg-white/40",
        )}
      />
      {map.label}
    </span>
  );
}

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const href = project.productHref || `/work/${project.slug}`;
  const visit = project.liveUrl;

  return (
    <article
      className={cn(
        "group glass relative flex h-full flex-col p-5 transition-transform duration-300 hover:-translate-y-1",
        featured && "md:p-7",
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-px bg-gradient-to-br from-ember/30 via-transparent to-cyan/20" />
      </div>
      <div className="relative flex items-start justify-between gap-3">
        <StatusPip status={project.status} />
        <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
          {project.kind} · {project.year}
        </span>
      </div>
      <Link href={href} className="relative mt-5">
        <h3 className="font-display text-2xl tracking-wide text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{project.summary}</p>
      </Link>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((s) => (
          <span
            key={s}
            className="border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-white/55"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="relative mt-auto flex items-center justify-between pt-6">
        <span className="font-mono text-[10px] text-white/40">{project.industry}</span>
        {visit ? (
          <a
            href={visit}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan hover:text-white"
          >
            Visit {domainOf(visit)} →
          </a>
        ) : (
          <Link
            href="/contact"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-300"
          >
            Early access →
          </Link>
        )}
      </div>
    </article>
  );
}
