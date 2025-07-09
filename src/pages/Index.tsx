import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AppPreviewSection } from "@/components/AppPreviewSection";
import { WhyItMattersSection } from "@/components/WhyItMattersSection";
import { InsuranceCategoriesSection } from "@/components/InsuranceCategoriesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InsuranceCategoriesSection />
      <HowItWorksSection />
      <AppPreviewSection />
      <WhyItMattersSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
