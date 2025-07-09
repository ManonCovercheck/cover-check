import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DollarSign, Gift, FileText, ArrowRight, CheckCircle, Shield } from "lucide-react";

export const AppPreviewSection = () => {
  const [activeTab, setActiveTab] = useState("overlapping");
  const handleStartScan = () => {
    window.open("https://tally.so/r/mY4XZq", "_blank");
  };

  const tabs = [
    { id: "overlapping", label: "Overlapping", icon: DollarSign },
    { id: "smart-claim", label: "Smart Claim", icon: FileText },
    { id: "cover", label: "Cover", icon: Shield },
    { id: "perks", label: "Perks", icon: Gift }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case "overlapping":
        return (
          <div className="p-6 space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-red-800">Save €327/year</h4>
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
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Must be stolen from zipped bag</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Police report within 48h</span>
                </div>
              </div>
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
                { type: "Phone Insurance", status: "Active", color: "green" },
                { type: "Travel Protection", status: "Active", color: "green" },
                { type: "Rental Car", status: "Available", color: "blue" },
                { type: "Dental Protection", status: "Missing", color: "red" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-foreground">{item.type}</span>
                   <span className={`text-sm px-2 py-1 rounded-full ${
                     item.color === 'green' ? 'bg-green-100 text-green-700' :
                     item.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                     item.color === 'red' ? 'bg-red-100 text-red-700' :
                     'bg-gray-100 text-gray-700'
                   }`}>
                    {item.status}
                  </span>
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
              <p className="text-green-600 text-sm">Found 5 unused perks worth €850/year</p>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium text-blue-800">Free Travel Insurance</div>
                <div className="text-sm text-blue-600">Via your credit card</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="font-medium text-purple-800">Rental Car Coverage</div>
                <div className="text-sm text-purple-600">Via employer benefits</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Phone Mockup */}
          <div className="relative mx-auto w-72 mb-12">
            {/* Phone Frame */}
            <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-phone border border-gray-800 backdrop-blur-sm">
              <div className="bg-black rounded-[2rem] overflow-hidden h-[600px]">
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
                        className={`p-3 text-xs font-medium transition-colors ${
                          activeTab === tab.id
                            ? 'text-primary border-b-2 border-primary bg-primary/5'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <tab.icon className="h-4 w-4 mx-auto mb-1" />
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <div className="min-h-[400px]">
                    {getTabContent()}
                  </div>
                </div>
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
              Start Your Free Scan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};