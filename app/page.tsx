import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import {
  corporateEmail,
  phoneNumbers,
  primaryServiceTypes,
  siteName,
  siteUrl,
} from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteUrl.origin}/#legal-service`,
  name: siteName,
  url: siteUrl.origin,
  image: `${siteUrl.origin}/firm.jpg`,
  description:
    "Acompañamos a empresas, inversionistas y contratistas del Estado en la estructuración de negocios, la ejecución de contratos y la gestión de riesgos jurídicos y fiscales.",
  email: corporateEmail,
  telephone: phoneNumbers,
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  serviceType: [
    ...primaryServiceTypes,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: phoneNumbers[0],
      email: corporateEmail,
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
