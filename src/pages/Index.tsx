import { HeroSection } from "@/components/HeroSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { OverlappingSection } from "@/components/OverlappingSection";
import { SmartClaimSection } from "@/components/SmartClaimSection";
import { CoverSection } from "@/components/CoverSection";
import { PerksSection } from "@/components/PerksSection";

import { InsuranceQuizSection } from "@/components/InsuranceQuizSection";
import { AppPreviewSection } from "@/components/AppPreviewSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="space-y-2">
        <WhatYouGetSection />
        <div className="space-y-2">
          <OverlappingSection />
          <SmartClaimSection />
          <CoverSection />
          <PerksSection />
        </div>
        <AppPreviewSection />
        <div className="space-y-2">
          <InsuranceQuizSection />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
