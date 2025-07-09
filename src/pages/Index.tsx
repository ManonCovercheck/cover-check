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
      <div>
        <WhatYouGetSection />
        <div className="-mt-16">
          <OverlappingSection />
          <div className="-mt-8">
            <SmartClaimSection />
          </div>
          <div className="-mt-8">
            <CoverSection />
          </div>
          <div className="-mt-8">
            <PerksSection />
          </div>
        </div>
        <div className="-mt-8">
          <AppPreviewSection />
        </div>
        <div className="-mt-8">
          <InsuranceQuizSection />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
