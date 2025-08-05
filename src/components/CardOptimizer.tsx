import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";

const features = [
  "Travel Insurance",
  "Purchase Protection", 
  "Refund Protection",
  "Travel Accident Cover",
  "FX Fee-Free Spending",
  "Lounge Access",
  "Points & Offers"
];

const scenarios = {
  current: {
    label: "Current: Amex Gold + Revolut Metal",
    cost: "£340/year",
    data: [true, true, true, true, true, true, true]
  },
  optionA: {
    label: "Option A: Keep Amex, Downgrade Revolut", 
    cost: "£196/year",
    data: [true, true, true, true, true, true, true]
  },
  optionB: {
    label: "Option B: Keep Revolut, Cancel Amex",
    cost: "£180/year", 
    data: [true, true, true, true, true, false, false]
  }
};

export const CardOptimizerSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Example Card Cover Comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            You may be paying for overlapping benefits across multiple cards. Explore different combinations to keep essential cover and reduce costs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 w-full">
              <TabsTrigger value="current" className="text-sm">Current Setup</TabsTrigger>
              <TabsTrigger value="optionA" className="text-sm">Option A</TabsTrigger>
              <TabsTrigger value="optionB" className="text-sm">Option B</TabsTrigger>
            </TabsList>

            {Object.entries(scenarios).map(([key, scenario]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <Card className="rounded-2xl border shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{scenario.label}</h3>
                      <p className="text-lg text-muted-foreground">
                        Annual Cost: <span className="font-bold text-primary text-xl">{scenario.cost}</span>
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      {features.map((feature, idx) => (
                        <div key={feature} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                          {scenario.data[idx] ? (
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                          )}
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <Button variant="default" size="lg" className="px-8">
                        Select this option
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> This is not insurance advice. Cover-Check highlights general comparisons based on publicly available policy data. Always check your own policy documents before making decisions.
          </p>
        </div>
      </div>
    </section>
  );
};