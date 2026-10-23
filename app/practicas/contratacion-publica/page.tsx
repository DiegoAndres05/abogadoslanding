import PracticePillarPage from "@/components/PracticePillarPage";
import { primaryPracticeAreas } from "@/data/practiceAreas";
import { practicePageMetadata } from "@/lib/site";

const area = primaryPracticeAreas[1];

export const metadata = practicePageMetadata({
  path: "/practicas/contratacion-publica",
  title: area.title,
  description: area.description,
  image: area.image,
  imageWidth: 1200,
  imageHeight: 795,
});

export default function ContratacionPublicaPage() {
  return <PracticePillarPage area={area} />;
}
