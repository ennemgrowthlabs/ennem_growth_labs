"use client";

import { useEffect, useRef, useState } from "react";

type Particle = { id: number; x: number; y: number; angle: number; dist: number };

export function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });
  const hover = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [burst, setBurst] = useState<Particle[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-hud-cursor");

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const t = e.target as HTMLElement | null;
      hover.current = Boolean(
        t?.closest("a, button, [data-magnetic], input, textarea, select"),
      );
    };

    const onDown = (e: MouseEvent) => {
      const next: Particle[] = [];
      for (let i = 0; i < 12; i++) {
        next.push({
          id: idRef.current++,
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / 12,
          dist: 18 + Math.random() * 22,
        });
      }
      setBurst(next);
      window.setTimeout(() => setBurst([]), 340);
    };

    let raf = 0;
    const tick = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.22;
      cur.current.y += (pos.current.y - cur.current.y) * 0.22;
      const el = ring.current;
      if (el) {
        const s = hover.current ? 1.85 : 1;
        el.style.transform = `translate3d(${cur.current.x}px, ${cur.current.y}px, 0) translate(-50%, -50%) scale(${s})`;
        el.style.borderColor = hover.current
          ? "rgba(34,211,238,0.95)"
          : "rgba(226,60,20,0.9)";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    return () => {
      document.documentElement.classList.remove("has-hud-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] h-5 w-5 rounded-full border-2 mix-blend-screen"
        style={{ willChange: "transform" }}
      />
      {burst.map((p) => (
        <span
          key={p.id}
          aria-hidden
          className="cursor-spark pointer-events-none fixed z-[89] h-1.5 w-1.5 rounded-full bg-ember"
          style={{
            left: p.x,
            top: p.y,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--dx" as any]: `${Math.cos(p.angle) * p.dist}px`,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--dy" as any]: `${Math.sin(p.angle) * p.dist}px`,
          }}
        />
      ))}
    </>
  );
}
