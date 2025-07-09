import { HeroSection } from "@/components/HeroSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { OverlappingSection } from "@/components/OverlappingSection";
import { SmartClaimSection } from "@/components/SmartClaimSection";
import { CoverSection } from "@/components/CoverSection";
import { PerksSection } from "@/components/PerksSection";
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
      <AppPreviewSection />
      <FooterSection />
    </div>
  );
};

export default Index;
