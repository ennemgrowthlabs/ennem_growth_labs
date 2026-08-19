"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { SITE, TEAMS } from "@/lib/data";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/tech", label: "Tech" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

function pathMatches(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/work" && pathname.startsWith("/products")) return true;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [teamsOpen, setTeamsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const teamsActive = pathname.startsWith("/teams");

  useEffect(() => {
    const readY = () => {
      const lenis = window.__eglLenis;
      return typeof lenis?.scroll === "number" ? lenis.scroll : window.scrollY;
    };
    const onScroll = () => setScrolled(readY() > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const lenis = window.__eglLenis;
    lenis?.on("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      lenis?.off("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setTeamsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] isolate">
      <div
        className={cn(
          "absolute inset-0 border-b border-white/10 bg-[#05070A]/95 backdrop-blur-md",
          scrolled && "shadow-[0_16px_48px_rgba(0,0,0,0.85)]",
        )}
        aria-hidden
      />
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[72px]">
        <Link
          href="/"
          className={cn("flex items-center gap-3", pathname === "/" && "opacity-100")}
          data-magnetic
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <span className="grid h-9 w-9 place-items-center border border-ember/70 bg-ember/15 font-display text-[10px] tracking-widest text-ember">
            EGL
          </span>
          <span className="hidden font-display text-[11px] tracking-[0.28em] text-white sm:block">
            ENNEM GROWTH LABS
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setTeamsOpen(true)}
            onMouseLeave={() => setTeamsOpen(false)}
          >
            <Link
              href="/teams/full-stack"
              className={navClass(teamsActive)}
              aria-current={teamsActive ? "page" : undefined}
            >
              Teams
              {teamsActive ? <NavPip /> : null}
            </Link>
            {teamsOpen && (
              <div className="absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 pt-3">
                <div className="border border-white/10 bg-[#05070A] p-2 shadow-xl">
                  {TEAMS.map((t) => {
                    const active = pathMatches(pathname, t.href);
                    return (
                      <Link
                        key={t.slug}
                        href={t.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block px-3 py-2 font-mono text-[11px] uppercase tracking-widest hover:bg-white/5",
                          active ? "bg-ember/10 text-ember" : "text-white/70 hover:text-cyan",
                        )}
                      >
                        {t.name.replace(" Team", "")}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          {LINKS.map((l) => {
            const active = pathMatches(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={navClass(active)}
              >
                {l.label}
                {active ? <NavPip /> : null}
              </Link>
            );
          })}
          <Link
            href="/contact"
            data-magnetic
            className="glow-ember bg-ember px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white"
          >
            Hire a squad
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-white/15 bg-[#05070A] lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-mono text-xs">{open ? "CLS" : "MENU"}</span>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative border-t border-white/10 bg-[#05070A] px-4 py-4 lg:hidden"
        >
          <MobileLink href="/" active={pathname === "/"} onClick={() => setOpen(false)}>
            Home
          </MobileLink>
          {LINKS.map((l) => (
            <MobileLink
              key={l.href}
              href={l.href}
              active={pathMatches(pathname, l.href)}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </MobileLink>
          ))}
          {TEAMS.map((t) => (
            <MobileLink
              key={t.slug}
              href={t.href}
              active={pathMatches(pathname, t.href)}
              onClick={() => setOpen(false)}
              muted
            >
              {t.name}
            </MobileLink>
          ))}
          <p className="pt-3 font-mono text-[10px] text-white/40">{SITE.phone}</p>
        </motion.div>
      )}
    </header>
  );
}

function NavPip() {
  return (
    <span
      aria-hidden
      className="absolute -bottom-2 left-1/2 h-px w-6 -translate-x-1/2 bg-ember shadow-[0_0_10px_#E23C14]"
    />
  );
}

function navClass(active: boolean) {
  return cn(
    "relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors",
    active ? "text-ember" : "text-white/70 hover:text-white",
  );
}

function MobileLink({
  href,
  active,
  onClick,
  children,
  muted,
}: {
  href: string;
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "block border-b border-white/10 py-3 font-mono text-xs uppercase tracking-widest",
        active ? "text-ember" : muted ? "text-white/70" : "text-white",
      )}
    >
      {children}
    </Link>
  );
}
