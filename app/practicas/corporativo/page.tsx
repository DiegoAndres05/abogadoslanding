import PracticePillarPage from "@/components/PracticePillarPage";
import { primaryPracticeAreas } from "@/data/practiceAreas";
import { practicePageMetadata } from "@/lib/site";

const area = primaryPracticeAreas[0];

export const metadata = practicePageMetadata({
  path: "/practicas/corporativo",
  title: area.title,
  description: area.description,
  image: area.image,
  imageWidth: 1200,
  imageHeight: 801,
});

export default function CorporativoPage() {
  return <PracticePillarPage area={area} />;
}
