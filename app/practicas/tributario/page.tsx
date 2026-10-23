import PracticePillarPage from "@/components/PracticePillarPage";
import { primaryPracticeAreas } from "@/data/practiceAreas";
import { practicePageMetadata } from "@/lib/site";

const area = primaryPracticeAreas[2];

export const metadata = practicePageMetadata({
  path: "/practicas/tributario",
  title: area.title,
  description: area.description,
  image: area.image,
  imageWidth: 1200,
  imageHeight: 689,
});

export default function TributarioPage() {
  return <PracticePillarPage area={area} />;
}
