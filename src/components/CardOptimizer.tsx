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
  "Rewards & Offers"
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

export default function CardOptimizer() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Card Cover Comparison</h1>
      <Tabs defaultValue="current">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="current">Current Setup</TabsTrigger>
          <TabsTrigger value="optionA">Option A</TabsTrigger>
          <TabsTrigger value="optionB">Option B</TabsTrigger>
        </TabsList>

        {Object.entries(scenarios).map(([key, scenario]) => (
          <TabsContent key={key} value={key}>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{scenario.label}</h2>
                <p className="text-sm text-muted-foreground mb-4">Estimated Cost: <strong>{scenario.cost}</strong></p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {features.map((feature, idx) => (
                    <div key={feature} className="flex items-center space-x-2">
                      {scenario.data[idx] ? (
                        <Check className="text-green-500" />
                      ) : (
                        <X className="text-red-500" />
                      )}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline">Select this option</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}