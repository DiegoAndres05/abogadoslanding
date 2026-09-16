import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
