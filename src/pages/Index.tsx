import { HeroSection } from "@/components/HeroSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { RealLifeExampleSection } from "@/components/RealLifeExampleSection";
import { AppPreviewSection } from "@/components/AppPreviewSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyItMattersSection } from "@/components/WhyItMattersSection";
import { InsuranceCategoriesSection } from "@/components/InsuranceCategoriesSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatYouGetSection />
      <RealLifeExampleSection />
      <AppPreviewSection />
      <FooterSection />
    </div>
  );
};

export default Index;
