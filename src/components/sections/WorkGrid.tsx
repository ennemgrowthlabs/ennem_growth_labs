"use client";

import { useMemo, useState } from "react";
import { PROJECTS, type ProjectKind, type TeamSlug } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const FILTERS: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "PRODUCT", label: "Products" },
  { id: "full-stack", label: "Full Stack" },
  { id: "automation", label: "Automation" },
  { id: "CLIENT", label: "Client sites" },
];

export function WorkGrid() {
  const [filter, setFilter] = useState("all");

  const list = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (filter === "all") return true;
      if (filter === "PRODUCT") return p.kind === ("PRODUCT" as ProjectKind);
      if (filter === "CLIENT") return p.kind === ("CLIENT" as ProjectKind);
      return p.teamSlug === (filter as TeamSlug);
    }).sort((a, b) => a.sortOrder - b.sortOrder);
  }, [filter]);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-12">
      <SectionHeading
        kicker="Archive"
        title="Work"
        body="Own products first, then n8n automations with real runs (TaskWagon audit, Thenimart NiBot, GST sheets). Client URLs we can verify come after."
      />
      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "border px-3 py-2 font-mono text-[10px] uppercase tracking-widest",
              filter === f.id
                ? "border-ember bg-ember/20 text-white"
                : "border-white/15 text-white/55 hover:text-white",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
