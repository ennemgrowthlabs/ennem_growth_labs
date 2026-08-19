import { SITE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description:
    "Ennem Growth Labs is the product and engineering studio of Ennem Marketings in Bodinayakanur, Theni.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
      <SectionHeading
        kicker="Origin"
        title="From Theni to production software"
        body="ENNEM means essential partner. Marketing still runs campaigns. Labs ships the products those campaigns need to stand on."
      />
      <div className="mt-10 space-y-6 text-white/70">
        <p>
          Ennem Marketings started in Theni so local businesses could get the same digital
          stack metros take for granted. That work became stores, reels, and automation — then
          our own SaaS: TaskWagon, GIFT, Snapvy, and Lumen.
        </p>
        <p>
          Growth Labs is the engineering brand. Three squads. Full stack, automation, WordPress.
          We do not pretend the marketing about page roster is real — team photos stay REPLACE_ME
          until people are confirmed.
        </p>
      </div>

      <h2 className="mt-14 font-display text-2xl">The group</h2>
      <div className="mt-6 grid gap-4">
        {[
          {
            name: "Ennem Growth Labs",
            body: "Products + custom software. This site.",
          },
          {
            name: "Ennem Marketing",
            body: "Agency, ads, brand. ennemmarketings.com",
            href: "https://ennemmarketings.com/",
          },
          {
            name: "Ennem AI Studio",
            body: "AI video and chatbot delivery. ai.ennemmarketings.com",
            href: "https://ai.ennemmarketings.com/",
          },
        ].map((b) => (
          <div key={b.name} className="glass p-5">
            <p className="font-display text-xl">{b.name}</p>
            <p className="mt-2 text-sm text-white/55">{b.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl">How we work</h2>
      <p className="mt-4 text-white/65">
        Sprints. Working software in the client&apos;s hands. Docker when it matters. WhatsApp
        when it is faster than a ticket. Address: {SITE.address}.
      </p>
    </div>
  );
}
