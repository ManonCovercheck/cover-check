import { DollarSign, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const OverlappingSection = () => {
  const { currency } = useLanguage();
  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">{currency}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              💰 Stop Overpaying
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find duplicate coverage you're paying for twice — and cancel the extra.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    <h4 className="font-semibold text-red-800">Overlap Detected</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <span className="text-foreground">Travel Insurance</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">x3</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <span className="text-foreground">Phone Protection</span>
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">x2</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-semibold text-green-800 mb-4">Potential Savings</h4>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700 mb-2">{currency}327</div>
                    <div className="text-green-600">per year</div>
                  </div>
                </div>
                <div className="text-muted-foreground text-sm">
                  Most people unknowingly pay for the same coverage through multiple policies. 
                  We identify these overlaps so you can keep the best one and cancel the rest.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};