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
        <div className="bg-white py-8">
          <WhatYouGetSection />
        </div>
        <div className="bg-muted/50 py-12">
          <AppPreviewSection />
        </div>
        <div className="bg-muted/50 py-8">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <button
                onClick={() => window.open("https://tally.so/r/mY4XZq", "_blank")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                Commencer Votre Scan Gratuit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white py-12">
          <InsuranceQuizSection />
        </div>
        <div className="bg-muted/50 py-12">
          <OverlappingSection />
        </div>
        <div className="bg-white py-12">
          <SmartClaimSection />
        </div>
        <div className="bg-muted/50 py-12">
          <CoverSection />
        </div>
        <div className="bg-white py-12">
          <PerksSection />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
