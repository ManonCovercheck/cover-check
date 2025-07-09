import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DollarSign, Gift, FileText, ArrowRight, CheckCircle, Shield, XCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const AppPreviewSection = () => {
  const { t, currency } = useLanguage();
  const [activeTab, setActiveTab] = useState("overlapping");
  const handleStartScan = () => {
    window.open("https://tally.so/r/mY4XZq", "_blank");
  };

  const tabs = [
    { id: "overlapping", label: "Overlap", iconType: "currency" as const },
    { id: "smart-claim", label: "Claims", iconType: "component" as const, icon: FileText },
    { id: "cover", label: "Cover", iconType: "component" as const, icon: Shield },
    { id: "perks", label: "Perks", iconType: "component" as const, icon: Gift }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case "overlapping":
        return (
          <div className="p-6 space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{currency}</span>
                </div>
                <h4 className="font-semibold text-red-800">Save {currency}327/year</h4>
              </div>
              <p className="text-red-600 text-sm">By removing duplicate coverage</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="text-foreground">Travel Insurance</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">x2</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="text-foreground">Phone Protection</span>
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">x2</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-foreground">Health Insurance</span>
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">x3</span>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="text-sm font-medium text-green-800">Quick Fix</div>
              <div className="text-xs text-green-600">Cancel 2 policies to save {currency}327/year</div>
            </div>
          </div>
        );
      case "smart-claim":
        return (
          <div className="p-6 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">📱 Phone Theft Guide</h4>
              <div className="space-y-2 text-sm">
                 <div className="flex items-center gap-2">
                   <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                   <span>Must be stolen from zipped bag</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                   <span>Police report within 48h</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                   <span>Not covered if stolen on table at bar</span>
                 </div>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="text-sm font-medium text-yellow-800">💡 Pro Tip</div>
              <div className="text-xs text-yellow-600">Always secure items in zipped bags</div>
            </div>
            <Button className="w-full" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              View Full Claim Guide
            </Button>
          </div>
        );
      case "cover":
        return (
          <div className="p-6 space-y-4">
            <h4 className="font-semibold text-foreground mb-4">Your Coverage</h4>
            <div className="space-y-3">
              {[
                { type: "Phone Insurance", status: "Covered", color: "green" },
                { type: "Travel Protection", status: "Covered", color: "green" },
                { type: "Rental Car", status: "Covered", color: "blue" },
                { type: "Dental Protection", status: "Missing", color: "red" }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium text-sm">{item.type}</span>
                     <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'Covered' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                       {item.status}
                     </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "perks":
        return (
          <div className="p-6 space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Gift className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Hidden Benefits</h4>
              </div>
              <p className="text-green-600 text-sm">Found 5 unused perks worth {currency}850/year</p>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium text-blue-800 text-sm">Free Travel Insurance</div>
                <div className="text-xs text-blue-600">Via your credit card • {currency}200 value</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="font-medium text-purple-800 text-sm">Rental Car Coverage</div>
                <div className="text-xs text-purple-600">Via employer benefits • {currency}180 value</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="font-medium text-orange-800 text-sm">Extended Warranty</div>
                <div className="text-xs text-orange-600">Via Amex card • {currency}300 value</div>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="text-sm font-medium text-yellow-800">🎯 Action Needed</div>
              <div className="text-xs text-yellow-600">Activate 3 unused benefits</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6 lg:order-1">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  See Everything in One App
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Get instant insights into your insurance coverage, identify overlaps, discover hidden perks, and make smarter claims with our comprehensive coverage dashboard.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">{currency}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Stop Overpaying</h4>
                    <p className="text-sm text-muted-foreground">Identify duplicate coverage and save hundreds annually</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Smart Claims</h4>
                    <p className="text-sm text-muted-foreground">Know exactly what's covered before you claim</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Gift className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Hidden Perks</h4>
                    <p className="text-sm text-muted-foreground">Unlock benefits you're already paying for</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="relative mx-auto w-72 lg:order-2">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-phone border border-gray-800 backdrop-blur-sm">
                <div className="bg-black rounded-[2rem] overflow-hidden h-[650px]">
                  {/* Status Bar */}
                  <div className="bg-black text-white px-6 py-2 flex justify-between items-center text-sm">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-6 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-gradient-primary text-primary-foreground p-4">
                    <h3 className="text-lg font-semibold">CoverCheck</h3>
                    <p className="text-primary-foreground/80 text-sm">Your Coverage Report</p>
                  </div>

                  {/* Tab Navigation */}
                  <div className="bg-white border-b">
                    <div className="grid grid-cols-4">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`p-2 text-[10px] font-medium transition-colors ${
                            activeTab === tab.id
                              ? 'text-primary border-b-2 border-primary bg-primary/5'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {tab.iconType === "currency" ? (
                            <span className="text-xs font-bold text-primary">{currency}</span>
                          ) : (
                            <tab.icon className="h-3 w-3 mx-auto mb-1" />
                          )}
                          <div className="truncate">{tab.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="bg-white h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="min-h-[400px]">
                      {getTabContent()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button
              onClick={handleStartScan}
              variant="default"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Start Your Free Scan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};