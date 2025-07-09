import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Plane, Smartphone, PawPrint, Home, Car, Briefcase, CreditCard, Shield, CheckCircle, ArrowRight, DollarSign, Gift, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const InsuranceQuizSection = () => {
  const { currency } = useLanguage();
  const [selectedInsurance, setSelectedInsurance] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const insuranceTypes = [
    { id: "health", name: "Health Insurance", icon: Heart, savings: 45, perks: 2 },
    { id: "travel", name: "Travel Insurance", icon: Plane, savings: 120, perks: 3 },
    { id: "phone", name: "Phone Insurance", icon: Smartphone, savings: 80, perks: 1 },
    { id: "pet", name: "Pet Insurance", icon: PawPrint, savings: 60, perks: 1 },
    { id: "home", name: "Home Insurance", icon: Home, savings: 200, perks: 4 },
    { id: "auto", name: "Auto Insurance", icon: Car, savings: 150, perks: 3 },
    { id: "life", name: "Life Insurance", icon: Briefcase, savings: 90, perks: 2 },
    { id: "credit", name: "Credit Card Protection", icon: CreditCard, savings: 180, perks: 5 }
  ];

  const handleInsuranceToggle = (insuranceId: string) => {
    if (selectedInsurance.includes(insuranceId)) {
      setSelectedInsurance(selectedInsurance.filter(id => id !== insuranceId));
    } else {
      setSelectedInsurance([...selectedInsurance, insuranceId]);
    }
  };

  const calculateResults = () => {
    const selectedTypes = insuranceTypes.filter(type => selectedInsurance.includes(type.id));
    const totalSavings = selectedTypes.reduce((sum, type) => sum + type.savings, 0);
    const totalPerks = selectedTypes.reduce((sum, type) => sum + type.perks, 0);
    const potentialOverlaps = Math.floor(selectedTypes.length * 0.3);

    return { totalSavings, totalPerks, potentialOverlaps, selectedCount: selectedTypes.length };
  };

  const results = calculateResults();

  const handleStartQuiz = () => {
    if (selectedInsurance.length > 0) {
      setShowResults(true);
    }
  };

  const handleStartScan = () => {
    window.open("https://tally.so/r/mY4XZq", "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-8">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Quick Saving and Perk Calculators
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select the insurance types you currently have, and we'll estimate your potential savings and hidden perks.
              </p>
            </div>
          </div>

          {!showResults ? (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {insuranceTypes.map((insurance) => (
                  <Card
                    key={insurance.id}
                    className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                      selectedInsurance.includes(insurance.id)
                        ? 'border-primary bg-primary/5 shadow-lg'
                        : 'border-border hover:border-primary/30'
                    }`}
                    onClick={() => handleInsuranceToggle(insurance.id)}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                        selectedInsurance.includes(insurance.id)
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <insurance.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium text-sm text-foreground">{insurance.name}</h3>
                      {selectedInsurance.includes(insurance.id) && (
                        <CheckCircle className="h-5 w-5 text-primary mx-auto mt-2" />
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button
                  onClick={handleStartQuiz}
                  disabled={selectedInsurance.length === 0}
                  size="lg"
                  className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto"
                >
                  Calculate My Potential ({selectedInsurance.length} selected)
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <Card className="p-8 bg-card border shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Your Personalized Estimate
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-700 mb-2">{currency}{results.totalSavings}</div>
                    <div className="text-green-600 text-sm">Potential annual savings</div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                    <Gift className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-700 mb-2">{results.totalPerks}</div>
                    <div className="text-blue-600 text-sm">Hidden perks to unlock</div>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
                    <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-orange-700 mb-2">{results.potentialOverlaps}</div>
                    <div className="text-orange-600 text-sm">Likely overlaps to review</div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-4">Based on your {results.selectedCount} insurance types:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Most people with similar coverage save {currency}{Math.round(results.totalSavings * 0.7)} annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>You likely have {results.totalPerks} unused benefits worth hundreds per year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>We'll check for duplicate coverage costing you extra</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center mt-8">
                  <Button
                    onClick={handleStartScan}
                    size="lg"
                    className="text-lg px-8 py-4 h-auto"
                  >
                    🟢 Start My Free Scan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-muted-foreground text-sm mt-3">
                    29£/year for overlap report and action plan • 49£/year for overlap + smart claim, perks and cover visibility
                  </p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};