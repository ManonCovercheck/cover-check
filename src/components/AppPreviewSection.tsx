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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Smartphone Mockup */}
            <div className="order-2 lg:order-1">
              <div className="relative max-w-sm mx-auto">
                {/* iPhone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="bg-black rounded-[2.5rem] p-2">
                    {/* Notch */}
                    <div className="bg-black h-6 w-32 rounded-b-2xl mx-auto mb-2 relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
                    </div>
                    
                    {/* Screen Content */}
                    <div className="bg-background rounded-[2rem] overflow-hidden min-h-[600px]">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-2 bg-background text-xs">
                        <span className="font-medium text-foreground">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 border border-foreground rounded-sm">
                            <div className="w-3 h-1 bg-foreground rounded-sm m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="px-4 pb-4">
                        {/* App Header */}
                        <div className="flex items-center justify-between mb-6 px-2">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">CoverCheck</h3>
                            <p className="text-sm text-muted-foreground">Analysis Complete</p>
                          </div>
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <Shield className="h-5 w-5 text-primary-foreground" />
                          </div>
                        </div>

                        {/* Savings Card */}
                        <div className="bg-gradient-primary rounded-2xl p-6 mb-6 text-center">
                          <div className="flex items-center justify-center gap-2 mb-3">
                            <TrendingDown className="h-5 w-5 text-primary-foreground" />
                            <span className="text-sm font-medium text-primary-foreground/90">Annual Savings Found</span>
                          </div>
                          <div className="text-4xl font-bold text-primary-foreground mb-2">£1,476</div>
                          <div className="text-sm text-primary-foreground/80">From 4 overlapping policies</div>
                          <div className="mt-4 bg-white/20 rounded-full px-4 py-2 inline-block">
                            <span className="text-sm font-medium text-primary-foreground">49% reduction</span>
                          </div>
                        </div>

                        {/* Policy Breakdown */}
                        <div className="space-y-3 mb-6">
                          <h4 className="font-semibold text-foreground px-2">Coverage Overlaps Found</h4>
                          {savingsData.map((item, index) => (
                            <div key={index} className="bg-card rounded-xl p-4 border border-border/50 shadow-sm">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="font-medium text-foreground">{item.category}</div>
                                  <div className="text-sm text-muted-foreground mt-1">{item.overlap}</div>
                                </div>
                                <div className="text-right bg-secondary/10 rounded-lg px-3 py-2">
                                  <div className="font-bold text-secondary">{item.savings}</div>
                                  <div className="text-xs text-muted-foreground">saved</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 px-2">
                          <button 
                            onClick={handleGetActionPlan}
                            className="w-full bg-secondary text-secondary-foreground rounded-xl py-4 font-semibold text-center shadow-sm hover:bg-secondary/90 transition-colors"
                          >
                            Get Full Action Plan - £29/year
                          </button>
                          <button 
                            onClick={handleShareWithFamily}
                            className="w-full border border-border text-muted-foreground rounded-xl py-3 font-medium text-center hover:bg-muted/50 transition-colors"
                          >
                            Share with Family
                          </button>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="flex justify-center pb-2">
                        <div className="w-32 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Content - Removed */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div className="text-center opacity-0">
                {/* Empty space for layout balance */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};