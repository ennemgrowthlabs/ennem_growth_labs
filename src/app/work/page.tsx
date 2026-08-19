import { WorkGrid } from "@/components/sections/WorkGrid";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Work",
  description:
    "TaskWagon, GIFT, Snapvy, Lumen, and live WooCommerce stores shipped by Ennem Growth Labs in Theni.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkGrid />;
}
