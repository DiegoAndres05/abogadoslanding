import type { Metadata } from "next";
import PracticePillarPage from "@/components/PracticePillarPage";
import { primaryPracticeAreas } from "@/data/practiceAreas";
import { siteName, siteUrl } from "@/lib/site";

const area = primaryPracticeAreas[2];

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  alternates: { canonical: new URL("/practicas/tributario", siteUrl).toString() },
  openGraph: { title: `${area.title} | ${siteName}`, description: area.description, url: "/practicas/tributario" },
};

export default function TributarioPage() {
  return <PracticePillarPage area={area} />;
}
