import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DollarSign, Gift, FileText, ArrowRight, CheckCircle, Shield, XCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const AppPreviewSection = () => {
  const { t, currency } = useLanguage();
  const [activeTab, setActiveTab] = useState("overlapping");
  const handleStartScan = () => {
    window.open("https://tally.so/r/3N2ayp", "_blank");
  };

  const tabs = [
    { id: "overlapping", label: t('app.tabs.overlap'), iconType: "currency" as const },
    { id: "smart-claim", label: t('app.tabs.claims'), iconType: "component" as const, icon: FileText },
    { id: "cover", label: t('app.tabs.cover'), iconType: "component" as const, icon: Shield },
    { id: "perks", label: t('app.tabs.perks'), iconType: "component" as const, icon: Gift }
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
                <h4 className="font-semibold text-red-800">{t('app.overlap.save')}</h4>
              </div>
              <p className="text-red-600 text-sm">{t('app.overlap.subtitle')}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="text-foreground">{t('app.cover.travel')}</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">x2</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="text-foreground">{t('app.cover.phone')}</span>
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">x2</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-foreground">{t('insurance.health')} Insurance</span>
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">x3</span>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="text-sm font-medium text-green-800">{t('app.overlap.quickfix')}</div>
              <div className="text-xs text-green-600">{t('app.overlap.cancel')}</div>
            </div>
          </div>
        );
      case "smart-claim":
        return (
          <div className="p-6 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t('app.claims.title')}</h4>
              <div className="space-y-2 text-sm">
                 <div className="flex items-center gap-2">
                   <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                   <span>{t('app.claims.bag')}</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                   <span>{t('app.claims.police')}</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                   <span>{t('app.claims.table')}</span>
                 </div>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="text-sm font-medium text-yellow-800">{t('app.claims.tip')}</div>
              <div className="text-xs text-yellow-600">{t('app.claims.secure')}</div>
            </div>
            <Button className="w-full" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              {t('app.claims.guide')}
            </Button>
          </div>
        );
      case "cover":
        return (
          <div className="p-6 space-y-4">
            <h4 className="font-semibold text-foreground mb-4">{t('app.cover.title')}</h4>
            <div className="space-y-3">
              {[
                { type: t('app.cover.phone'), status: t('app.cover.covered'), color: "green" },
                { type: t('app.cover.travel'), status: t('app.cover.covered'), color: "green" },
                { type: t('app.cover.rental'), status: t('app.cover.covered'), color: "blue" },
                { type: t('app.cover.dental'), status: t('app.cover.missing'), color: "red" }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium text-sm">{item.type}</span>
                     <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === t('app.cover.covered') ? 'bg-green-100 text-green-700' :
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
          <div className="p-6 space-y-4 h-full">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Gift className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t('app.perks.title')}</h4>
              </div>
              <p className="text-green-600 text-sm">{t('app.perks.subtitle')}</p>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium text-blue-800 text-sm">{t('app.perks.travel')}</div>
                <div className="text-xs text-blue-600">{t('app.perks.travel_desc')}</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="font-medium text-purple-800 text-sm">{t('app.perks.rental')}</div>
                <div className="text-xs text-purple-600">{t('app.perks.rental_desc')}</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="font-medium text-orange-800 text-sm">{t('app.perks.warranty')}</div>
                <div className="text-xs text-orange-600">{t('app.perks.warranty_desc')}</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="font-medium text-green-800 text-sm">{t('app.perks.protection')}</div>
                <div className="text-xs text-green-600">{t('app.perks.protection_desc')}</div>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <div className="font-medium text-yellow-800 text-sm">{t('app.perks.cashback')}</div>
                <div className="text-xs text-yellow-600">{t('app.perks.cashback_desc')}</div>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="text-sm font-medium text-yellow-800">{t('app.perks.action')}</div>
              <div className="text-xs text-yellow-600">{t('app.perks.activate')}</div>
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
          {/* Title Above Phone */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('app.title')}
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              {t('app.subtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Phone Mockup */}
            <div className="relative mx-auto w-72 lg:order-1">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-phone border border-gray-800 backdrop-blur-sm">
                <div className="bg-black rounded-[2rem] overflow-hidden h-[550px]">
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
                  <div className="bg-white h-[460px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="min-h-[480px]">
                      {getTabContent()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Feature Highlights */}
            <div className="space-y-6 lg:order-2">
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">{currency}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">{t('app.features.stop.title')}</h4>
                    <p className="text-lg text-muted-foreground">{t('app.features.stop.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">{t('app.features.claims.title')}</h4>
                    <p className="text-lg text-muted-foreground">{t('app.features.claims.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Gift className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">{t('app.features.perks.title')}</h4>
                    <p className="text-lg text-muted-foreground">{t('app.features.perks.desc')}</p>
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