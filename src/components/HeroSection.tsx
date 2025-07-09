
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const handleStartScan = () => {
    window.open("https://tally.so/r/mY4XZq", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-soft">
            <Shield className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">Smart Insurance Analysis</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Stop Paying for
            <span className="block bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              Insurance You Don't Need
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get a free analysis of your insurance policies and discover potential savings. Detailed insights and action plan available for £29/year.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "Free coverage analysis",
              "Identify potential savings", 
              "Detailed plan for £29/year"
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
              Get Your Free Insurance Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <p className="text-primary-foreground/70 text-sm mt-4">
            Free analysis • Results in 3 minutes • Detailed plan £29/year
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};
