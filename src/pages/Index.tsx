import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AppPreviewSection } from "@/components/AppPreviewSection";
import { WhyItMattersSection } from "@/components/WhyItMattersSection";
import { InsuranceCategoriesSection } from "@/components/InsuranceCategoriesSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AppPreviewSection />
      <InsuranceCategoriesSection />
      <HowItWorksSection />
      <WhyItMattersSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
