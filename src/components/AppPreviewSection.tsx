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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Smartphone Mockup */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative w-72 max-w-sm mx-auto">
                {/* iPhone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="bg-black rounded-[2rem] p-1">
                    {/* Notch */}
                    <div className="bg-black h-5 w-24 rounded-b-xl mx-auto mb-1 relative">
                      <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gray-800 rounded-full"></div>
                    </div>
                    
                    {/* Screen Content */}
                    <div className="bg-background rounded-[1.8rem] overflow-hidden h-[500px] flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-5 py-2 bg-background text-xs">
                        <span className="font-medium text-foreground">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 border border-foreground rounded-sm">
                            <div className="w-3 h-1 bg-foreground rounded-sm m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Content - Scrollable */}
                      <div className="px-4 pb-4 flex-1 overflow-y-auto scrollbar-hide">
                        {/* App Header */}
                        <div className="flex items-center justify-between mb-5 px-2">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">CoverCheck</h3>
                            <p className="text-sm text-muted-foreground">Analysis Complete</p>
                          </div>
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <Shield className="h-5 w-5 text-primary-foreground" />
                          </div>
                        </div>

                        {/* Savings Card */}
                        <div className="bg-gradient-primary rounded-2xl p-5 mb-5 text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <TrendingDown className="h-4 w-4 text-primary-foreground" />
                            <span className="text-sm font-medium text-primary-foreground/90">Annual Savings</span>
                          </div>
                          <div className="text-3xl font-bold text-primary-foreground mb-1">£1,476</div>
                          <div className="text-sm text-primary-foreground/80">From 4 policies</div>
                          <div className="mt-3 bg-white/20 rounded-full px-3 py-1.5 inline-block">
                            <span className="text-sm font-medium text-primary-foreground">49% reduction</span>
                          </div>
                        </div>

                        {/* Policy Breakdown */}
                        <div className="space-y-3 mb-5">
                          <h4 className="font-semibold text-foreground px-2">Coverage Overlaps</h4>
                          {savingsData.map((item, index) => (
                            <div key={index} className="bg-card rounded-xl p-3 border border-border/50 shadow-sm">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="font-medium text-foreground">{item.category}</div>
                                  <div className="text-sm text-muted-foreground mt-1">{item.overlap}</div>
                                </div>
                                <div className="text-right bg-secondary/10 rounded-lg px-3 py-1.5">
                                  <div className="font-bold text-secondary">{item.savings}</div>
                                  <div className="text-xs text-muted-foreground">potential saving</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 px-2 mt-5">
                          <button 
                            onClick={handleGetActionPlan}
                            className="w-full bg-secondary text-secondary-foreground rounded-xl py-3 font-semibold text-center shadow-sm hover:bg-secondary/90 transition-colors"
                          >
                            Get Full Plan - £29/year
                          </button>
                          <button 
                            onClick={handleShareWithFamily}
                            className="w-full border border-border text-muted-foreground rounded-xl py-2.5 font-medium text-center hover:bg-muted/50 transition-colors"
                          >
                            Share Analysis
                          </button>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="flex justify-center pb-1">
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