import Link from "next/link";
import { SITE, TEAMS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-sm tracking-[0.28em]">ENNEM GROWTH LABS</p>
          <p className="mt-3 max-w-xs text-sm text-white/60">{SITE.tagline}</p>
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-white/45">
            {SITE.address}
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan">Squads</p>
          <ul className="mt-4 space-y-2">
            {TEAMS.map((t) => (
              <li key={t.slug}>
                <Link href={t.href} className="text-sm text-white/70 hover:text-white">
                  {t.name.replace(" Team", "")}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/careers" className="text-sm text-white/70 hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan">Group</p>
          <ul className="mt-4 space-y-2">
            {SITE.sister.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan">Comms</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://ennemmarketings.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white/45"
              >
                Privacy / Terms (group)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
        © {new Date().getFullYear()} Ennem Growth Labs · Theni, Tamil Nadu
      </div>
    </footer>
  );
}
