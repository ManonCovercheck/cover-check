import { Gift, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const WhatYouGetSection = () => {
  const { currency, t } = useLanguage();
  
  const benefits = [
    {
      icon: "currency" as const,
      title: t('whatyouget.stop.title'),
      description: t('whatyouget.stop.description')
    },
    {
      icon: Gift,
      title: t('whatyouget.unlock.title'),
      description: t('whatyouget.unlock.description')
    },
    {
      icon: FileText,
      title: t('whatyouget.smart.title'),
      description: t('whatyouget.smart.description')
    }
  ];

  return (
    <section className="py-8 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('whatyouget.title')}
            </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-card border shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                {benefit.icon === "currency" ? (
                  <span className="text-2xl font-bold text-primary">{currency}</span>
                ) : (
                  <benefit.icon className="h-8 w-8 text-primary" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            CoverCheck - All-in-one insurance scan, overlap detection, perks unlock, and smart claims guidance.
          </p>
        </div>
      </div>
    </section>
  );
};