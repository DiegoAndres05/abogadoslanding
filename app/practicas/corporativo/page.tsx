import type { Metadata } from "next";
import PracticePillarPage from "@/components/PracticePillarPage";
import { primaryPracticeAreas } from "@/data/practiceAreas";
import { siteName, siteUrl } from "@/lib/site";

const area = primaryPracticeAreas[0];

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  alternates: { canonical: new URL("/practicas/corporativo", siteUrl).toString() },
  openGraph: { title: `${area.title} | ${siteName}`, description: area.description, url: "/practicas/corporativo" },
};

export default function CorporativoPage() {
  return <PracticePillarPage area={area} />;
}
