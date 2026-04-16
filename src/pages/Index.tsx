import HeroSection from "@/components/HeroSection";
import ProofSection from "@/components/ProofSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import DifferentialSection from "@/components/DifferentialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <ProofSection />
    <AboutSection />
    <BenefitsSection />
    <ProductsSection />
    <DifferentialSection />
    <CTASection />
    <Footer />
    <WhatsAppButton />
  </main>
);

export default Index;
