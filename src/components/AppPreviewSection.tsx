import { Button } from "@/components/ui/button";
import { DollarSign, Gift, FileText, ArrowRight } from "lucide-react";

export const AppPreviewSection = () => {
  const handleStartScan = () => {
    window.open("https://tally.so/r/mY4XZq", "_blank");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-soft border overflow-hidden">
            {/* Coverage Report Header */}
            <div className="bg-gradient-primary text-primary-foreground p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Coverage Report Summary</h3>
                  <p className="text-primary-foreground/80">Your personalized analysis</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Report Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Savings Estimate */}
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="h-6 w-6 text-green-600" />
                      <h4 className="font-semibold text-green-800">Save €327/year</h4>
                    </div>
                    <p className="text-green-600 text-sm">By removing duplicate coverage</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Gift className="h-6 w-6 text-blue-600" />
                      <h4 className="font-semibold text-blue-800">Hidden Perks</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-blue-700">Travel Insurance</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">x2</span>
                    </div>
                    <p className="text-blue-600 text-sm">Overlap detected</p>
                  </div>
                </div>

                {/* Coverage Items */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground mb-4">Your Coverage</h4>
                  <div className="space-y-3">
                    {[
                      { type: "Phone Insurance", status: "Covered", color: "green" },
                      { type: "Travel Insurance", status: "2x Coverage", color: "orange" },
                      { type: "Rental Car", status: "Available", color: "blue" },
                      { type: "Purchase Protection", status: "Unused", color: "gray" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-foreground">{item.type}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          item.color === 'green' ? 'bg-green-100 text-green-700' :
                          item.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                          item.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <Button 
                  className="w-full md:w-auto"
                  size="lg"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  How to Claim
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              onClick={handleStartScan}
              variant="default"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              🟢 Start My Free Scan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};