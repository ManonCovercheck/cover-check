import { HeroSection } from "@/components/HeroSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { OverlappingSection } from "@/components/OverlappingSection";
import { SmartClaimSection } from "@/components/SmartClaimSection";
import { CoverSection } from "@/components/CoverSection";
import { PerksSection } from "@/components/PerksSection";
import { InsuranceCategoriesSection } from "@/components/InsuranceCategoriesSection";
import { InsuranceQuizSection } from "@/components/InsuranceQuizSection";
import { AppPreviewSection } from "@/components/AppPreviewSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatYouGetSection />
      <OverlappingSection />
      <SmartClaimSection />
      <CoverSection />
      <PerksSection />
      <InsuranceCategoriesSection />
      <InsuranceQuizSection />
      <AppPreviewSection />
      <FooterSection />
    </div>
  );
};

export default Index;
