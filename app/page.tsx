import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { siteName, siteUrl } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteUrl.origin}/#legal-service`,
  name: siteName,
  url: siteUrl.origin,
  image: `${siteUrl.origin}/firm.jpg`,
  description:
    "Soluciones jurídicas, tributarias y financieras integradas para empresas, inversionistas, entidades y familias en Colombia.",
  email: "getlegalcol@gmail.com",
  telephone: ["+57 318 338 3714", "+57 301 524 6127"],
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  serviceType: [
    "Asesoría legal corporativa",
    "Asesoría tributaria",
    "Asesoría financiera",
    "Litigios y arbitraje",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+57 318 338 3714",
      email: "getlegalcol@gmail.com",
      availableLanguage: ["Spanish"],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <PracticeAreas />
        <About />
        <WhyUs />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
