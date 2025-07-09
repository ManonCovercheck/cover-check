import { Gift, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const WhatYouGetSection = () => {
  const { currency } = useLanguage();
  
  const benefits = [
    {
      icon: "currency" as const,
      title: "Stop Overpaying",
      description: "Find duplicate coverage you're paying for twice — and cancel the extra."
    },
    {
      icon: Gift,
      title: "Unlock Hidden Perks",
      description: "You already have free travel, phone, or rental insurance from your card or employer. We'll show you how to actually use it."
    },
    {
      icon: FileText,
      title: "Smart Claim",
      description: "Insurance rules are vague on purpose. We explain what's really covered, what to say, and how to avoid denials — all based on your real policy."
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What You Get
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
      </div>
    </section>
  );
};