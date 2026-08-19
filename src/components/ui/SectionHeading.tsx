import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  body,
  className,
}: {
  kicker: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="mb-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-cyan">
        <span className="h-px w-8 bg-cyan/70" />
        {kicker}
      </div>
      <h2 className="font-display text-3xl tracking-wide text-white md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-base text-white/60 md:text-lg">{body}</p> : null}
    </div>
  );
}
