import { DollarSign, TrendingDown, Calculator, Shield } from "lucide-react";

export const AppPreviewSection = () => {
  const savingsData = [
    { category: "Health Insurance", overlap: "Spouse duplicate coverage", savings: "£45/month" },
    { category: "Travel Insurance", overlap: "Credit card benefit", savings: "£120/year" },
    { category: "Phone Insurance", overlap: "Manufacturer warranty", savings: "£8/month" },
    { category: "Pet Insurance", overlap: "Home policy coverage", savings: "£25/month" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See Your Savings in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's what a typical family discovers with CoverCheck - overlapping coverage costing hundreds per year
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* App Interface Mockup */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Phone Frame */}
                <div className="bg-card rounded-3xl p-6 shadow-elegant border">
                  <div className="bg-gradient-subtle rounded-2xl p-4">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-foreground">Coverage Analysis</h3>
                      <div className="flex items-center gap-2 bg-secondary/10 rounded-full px-3 py-1">
                        <Shield className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium text-secondary">Complete</span>
                      </div>
                    </div>

                    {/* Savings Summary */}
                    <div className="bg-gradient-primary rounded-xl p-4 mb-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <TrendingDown className="h-5 w-5 text-primary-foreground" />
                        <span className="text-sm font-medium text-primary-foreground/80">Potential Annual Savings</span>
                      </div>
                      <div className="text-3xl font-bold text-primary-foreground">£1,476</div>
                      <div className="text-sm text-primary-foreground/80">From 4 overlapping policies</div>
                    </div>

                    {/* Policy List */}
                    <div className="space-y-3">
                      {savingsData.map((item, index) => (
                        <div key={index} className="bg-card rounded-lg p-3 border border-border/50">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="font-medium text-foreground text-sm">{item.category}</div>
                              <div className="text-xs text-muted-foreground">{item.overlap}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-secondary text-sm">{item.savings}</div>
                              <div className="text-xs text-muted-foreground">saved</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="mt-6">
                      <button className="w-full bg-secondary text-secondary-foreground rounded-lg py-3 font-medium text-sm">
                        Get Detailed Action Plan - £29/year
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-full p-3 shadow-lg">
                  <Calculator className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                  <DollarSign className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Benefits Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
                    <Calculator className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">Real Example</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    From Analysis to Action
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    This is what the Johnson family discovered when they uploaded their 6 insurance policies. 
                    CoverCheck found £1,476 in annual savings from overlapping coverage they didn't even know they had.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Free Analysis</div>
                      <div className="text-sm text-muted-foreground">Upload policies, get immediate overview of potential savings</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Detailed Action Plan</div>
                      <div className="text-sm text-muted-foreground">Step-by-step guide to claim savings and optimize coverage</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-foreground">Ongoing Monitoring</div>
                      <div className="text-sm text-muted-foreground">Annual updates as your insurance needs change</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-subtle rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-2">£29/year</div>
                    <div className="text-sm text-muted-foreground">Pays for itself in the first month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};