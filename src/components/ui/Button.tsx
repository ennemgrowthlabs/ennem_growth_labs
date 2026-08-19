import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "cyan";
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
}: Props) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-transform duration-200 hover:scale-[1.03]",
    variant === "primary" && "glow-ember bg-ember text-white",
    variant === "ghost" && "border border-white/25 text-white hover:border-white/60",
    variant === "cyan" && "border border-cyan/50 bg-cyan/10 text-cyan",
    className,
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        data-magnetic
        className={styles}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} data-magnetic className={styles}>
      {children}
    </button>
  );
}
