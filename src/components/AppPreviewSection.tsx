import { DollarSign, TrendingDown, Shield } from "lucide-react";

export const AppPreviewSection = () => {
  const handleGetActionPlan = () => {
    window.open('https://tally.so/r/mY4XZq', '_blank');
  };

  const handleShareWithFamily = () => {
    if (navigator.share) {
      navigator.share({
        title: 'CoverCheck - Insurance Analysis',
        text: 'Check out CoverCheck for finding insurance savings!',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Smartphone Mockup */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative w-64 max-w-xs mx-auto">
                {/* iPhone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="bg-black rounded-[2rem] p-1.5">
                    {/* Notch */}
                    <div className="bg-black h-5 w-24 rounded-b-xl mx-auto mb-1.5 relative">
                      <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gray-800 rounded-full"></div>
                    </div>
                    
                    {/* Screen Content */}
                    <div className="bg-background rounded-[1.5rem] overflow-hidden h-96">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-4 py-1.5 bg-background text-xs">
                        <span className="font-medium text-foreground">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-1.5 border border-foreground rounded-sm">
                            <div className="w-2 h-0.5 bg-foreground rounded-sm m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="px-3 pb-3 flex flex-col h-full">
                        {/* App Header */}
                        <div className="flex items-center justify-between mb-4 px-1">
                          <div>
                            <h3 className="text-lg font-bold text-foreground">CoverCheck</h3>
                            <p className="text-xs text-muted-foreground">Analysis Complete</p>
                          </div>
                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                            <Shield className="h-4 w-4 text-primary-foreground" />
                          </div>
                        </div>

                        {/* Savings Card */}
                        <div className="bg-gradient-primary rounded-xl p-4 mb-4 text-center">
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <TrendingDown className="h-4 w-4 text-primary-foreground" />
                            <span className="text-xs font-medium text-primary-foreground/90">Annual Savings</span>
                          </div>
                          <div className="text-2xl font-bold text-primary-foreground mb-1">£1,476</div>
                          <div className="text-xs text-primary-foreground/80">From 4 policies</div>
                          <div className="mt-2 bg-white/20 rounded-full px-3 py-1 inline-block">
                            <span className="text-xs font-medium text-primary-foreground">49% reduction</span>
                          </div>
                        </div>

                        {/* Policy Breakdown - Shortened */}
                        <div className="space-y-2 mb-4 flex-1">
                          <h4 className="font-semibold text-foreground px-1 text-sm">Coverage Overlaps</h4>
                          {savingsData.slice(0, 2).map((item, index) => (
                            <div key={index} className="bg-card rounded-lg p-3 border border-border/50 shadow-sm">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="font-medium text-foreground text-sm">{item.category}</div>
                                  <div className="text-xs text-muted-foreground mt-0.5">{item.overlap}</div>
                                </div>
                                <div className="text-right bg-secondary/10 rounded-lg px-2 py-1">
                                  <div className="font-bold text-secondary text-sm">{item.savings}</div>
                                  <div className="text-xs text-muted-foreground">saved</div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="text-center text-xs text-muted-foreground">+2 more overlaps found</div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2 px-1 mt-auto">
                          <button 
                            onClick={handleGetActionPlan}
                            className="w-full bg-secondary text-secondary-foreground rounded-lg py-2.5 font-semibold text-center shadow-sm hover:bg-secondary/90 transition-colors text-sm"
                          >
                            Get Full Plan - £29/year
                          </button>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="flex justify-center pb-1.5">
                        <div className="w-24 h-0.5 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    See Your Savings in Real-Time
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our smart analysis instantly identifies overlapping coverage across all your insurance policies. 
                    Get a clear breakdown of potential savings with actionable insights.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Instant Analysis</h4>
                      <p className="text-muted-foreground">Upload your policies and get immediate insights in under 3 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Clear Savings Breakdown</h4>
                      <p className="text-muted-foreground">See exactly where you're overpaying and how much you could save</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Actionable Recommendations</h4>
                      <p className="text-muted-foreground">Get step-by-step guidance on how to claim your savings</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-subtle rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-2">Average Family Saves</div>
                    <div className="text-3xl font-bold text-secondary mb-2">£1,200+ per year</div>
                    <div className="text-sm text-muted-foreground">Based on common overlap patterns</div>
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