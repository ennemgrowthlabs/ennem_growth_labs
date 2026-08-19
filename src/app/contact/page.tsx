import { SITE } from "@/lib/data";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description: "Hire Ennem Growth Labs in Theni — full stack, automation, or WordPress.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-12">
      <SectionHeading
        kicker="Comms"
        title="Start a brief"
        body={`${SITE.address}. ${SITE.phone}. ${SITE.email}.`}
      />
      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
