import { TechView } from "@/components/sections/TechView";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Tech stack",
  description:
    "Next.js, React Native, Prisma, MySQL, Docker, n8n, WhatsApp Cloud API, WooCommerce — the production kit Ennem Growth Labs runs in Theni.",
  path: "/tech",
});

export default function TechPage() {
  return <TechView />;
}
