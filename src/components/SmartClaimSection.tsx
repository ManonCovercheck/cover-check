import { FileText, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SmartClaimSection = () => {
  const handleStartScan = () => {
    window.open("https://tally.so/r/mY4XZq", "_blank");
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Smart Claim
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insurance rules are vague on purpose. We explain what's really covered, what to say, and how to avoid denials — all based on your real policy.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  📱 Phone Theft Claims Made Simple
                </h3>
                  <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Must be stolen from a secured location</div>
                      <div className="text-sm text-muted-foreground">Zipped bag, locked car, etc.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Police report within 48 hours</div>
                      <div className="text-sm text-muted-foreground">Essential for claim approval</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Not covered if stolen on table at bar</div>
                      <div className="text-sm text-muted-foreground">Or left unattended in public spaces</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">Success Rate</h4>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700 mb-2">94%</div>
                    <div className="text-blue-600 text-sm">Claims approved when following our guides</div>
                  </div>
                </div>
                <Button className="w-full" size="lg" onClick={handleStartScan}>
                  <FileText className="mr-2 h-5 w-5" />
                  Start My Free Scan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
