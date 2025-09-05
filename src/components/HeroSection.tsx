
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, LogIn } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const handleStartScan = () => {
    window.open("https://tally.so/r/3N2ayp", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <img 
        src={heroImage}
        alt=""
        className="absolute inset-0 opacity-10 w-full h-full object-cover object-center"
        fetchPriority="high"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Top Navigation */}
        <div className="fixed top-16 right-2 z-50 flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-background/10"
            onClick={() => window.open("https://tally.so/r/3N2ayp", "_blank")}
          >
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
          <LanguageSwitcher />
        </div>
        
        <div className="max-w-4xl mx-auto text-center pt-16">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            {t('hero.title1')}
            <span className="block text-secondary leading-tight">
              {t('hero.title2')}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              t('hero.benefit1'),
              t('hero.benefit2'), 
              t('hero.benefit3')
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleStartScan}
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <p className="text-primary-foreground/70 text-sm mt-4">
            {t('hero.trust')}
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};
