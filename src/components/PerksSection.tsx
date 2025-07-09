import { Gift, CreditCard, Building, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const PerksSection = () => {
  const { currency } = useLanguage();
  const hiddenPerks = [
    {
      title: "Free Travel Insurance",
      source: "Visa Premium Card",
      value: `${currency}200/year`,
      description: `Covers medical, baggage, and trip cancellation up to ${currency}50,000`,
      icon: CreditCard,
      color: "blue"
    },
    {
      title: "Rental Car Coverage",
      source: "Employer Benefits",
      value: `${currency}180/year`, 
      description: "Full damage waiver and theft protection worldwide",
      icon: Building,
      color: "purple"
    },
    {
      title: "Purchase Protection",
      source: "Multiple Cards",
      value: `${currency}300/year`,
      description: "90-day protection against theft, damage, and defects",
      icon: Sparkles,
      color: "green"
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Gift className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              🎁 Unlock Hidden Perks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You already have free travel, phone, or rental insurance from your card or employer. We'll show you how to actually use it.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Found {currency}680 in Unused Benefits
              </h3>
              <p className="text-green-600">These perks are already included with your existing accounts</p>
            </div>

            <div className="grid gap-6">
              {hiddenPerks.map((perk, index) => (
                <div key={index} className="flex items-start gap-6 p-6 bg-muted/30 rounded-xl border">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    perk.color === 'blue' ? 'bg-blue-100' :
                    perk.color === 'purple' ? 'bg-purple-100' :
                    'bg-green-100'
                  }`}>
                    <perk.icon className={`h-6 w-6 ${
                      perk.color === 'blue' ? 'text-blue-600' :
                      perk.color === 'purple' ? 'text-purple-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{perk.title}</h4>
                      </div>
                      <div className="text-right ml-4">
                        <span className="font-bold text-primary block">{perk.value}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{perk.description}</p>
                    <p className="text-xs text-primary font-medium">Via {perk.source}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};