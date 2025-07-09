
import { DollarSign, Shield, Heart, TrendingUp, CheckCircle2, Zap } from "lucide-react";

export const WhyItMattersSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Potential Savings",
      description: "Many families unknowingly pay for overlapping insurance coverage across different policies",
      stat: "Up to",
      statLabel: "thousands per year"
    },
    {
      icon: Shield,
      title: "Better Coverage",
      description: "Identify gaps in protection and ensure you're covered for what matters most",
      stat: "Smart",
      statLabel: "coverage analysis"
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "Sleep better knowing your family is properly protected without overpaying",
      stat: "Clear",
      statLabel: "recommendations"
    }
  ];

  const keyBenefits = [
    "Eliminate duplicate health coverage between spouses",
    "Discover travel insurance included in your credit card",
    "Find phone insurance overlaps with manufacturer warranty",
    "Uncover pet insurance conflicts with homeowner policies",
    "Identify unnecessary extended warranties",
    "Optimize deductibles across all policies"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why This Matters Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most families unknowingly pay for overlapping insurance coverage. CoverCheck finds these hidden costs and puts money back in your pocket.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-secondary" />
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-secondary">{benefit.stat}</div>
                <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Benefits */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
                <Zap className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Common Savings Opportunities</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Money Saved, Benefits Unlocked
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">Based on common insurance overlap patterns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
