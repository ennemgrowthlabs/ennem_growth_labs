"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroScan() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current) return;
    const tween = gsap.fromTo(
      ref.current,
      { yPercent: -120, opacity: 0.9 },
      { yPercent: 420, opacity: 0, duration: 2.4, ease: "power2.inOut", repeat: -1, repeatDelay: 2 },
    );
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
    />
  );
}
