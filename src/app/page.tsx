import { HomeView } from "@/components/sections/HomeView";
import { SITE } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Ennem Growth Labs | TaskWagon, Snapvy, GIFT & Custom Software in Theni",
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return <HomeView />;
}
