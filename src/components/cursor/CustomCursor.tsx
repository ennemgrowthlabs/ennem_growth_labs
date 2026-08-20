"use client";

import { useEffect, useRef, useState } from "react";

type Particle = { id: number; x: number; y: number; angle: number; dist: number };

export function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const cur = useRef({ x: -100, y: -100 });
  const hover = useRef(false);
  const visible = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [burst, setBurst] = useState<Particle[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-hud-cursor");

    const onMove = (e: PointerEvent | MouseEvent) => {
      visible.current = true;
      pos.current = { x: e.clientX, y: e.clientY };
      const t = e.target as HTMLElement | null;
      hover.current = Boolean(
        t?.closest("a, button, [data-magnetic], input, textarea, select, label"),
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

    const onLeave = () => {
      visible.current = false;
    };

    let raf = 0;
    const tick = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.28;
      cur.current.y += (pos.current.y - cur.current.y) * 0.28;
      const x = cur.current.x;
      const y = cur.current.y;
      const s = hover.current ? 1.7 : 1;
      const opacity = visible.current ? "1" : "0";
      const ringEl = ring.current;
      const dotEl = dot.current;
      if (ringEl) {
        ringEl.style.opacity = opacity;
        ringEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${s})`;
        ringEl.style.borderColor = hover.current
          ? "rgba(34,211,238,0.95)"
          : "rgba(226,60,20,0.95)";
        ringEl.style.boxShadow = hover.current
          ? "0 0 16px rgba(34,211,238,0.55)"
          : "0 0 14px rgba(226,60,20,0.5)";
      }
      if (dotEl) {
        dotEl.style.opacity = opacity;
        dotEl.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);
    return () => {
      document.documentElement.classList.remove("has-hud-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mousedown", onDown);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 rounded-full border-2 border-ember"
        style={{ willChange: "transform, opacity", opacity: 0 }}
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-white"
        style={{ willChange: "transform, opacity", opacity: 0 }}
      />
      {burst.map((p) => (
        <span
          key={p.id}
          aria-hidden
          className="cursor-spark pointer-events-none fixed z-[9999] h-1.5 w-1.5 rounded-full bg-ember"
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
