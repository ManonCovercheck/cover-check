import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, ArrowRight, Users, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function Pricing() {
  const { t, currency } = useLanguage();
  
  const handleStartScan = () => {
    window.open("https://tally.so/r/3N2ayp", "_blank");
  };

  const features = {
    freemium: [
      { name: "Insurance coverage scan", included: true },
      { name: "Overlap detection", included: true },
      { name: "Hidden perks unlock", included: true },
      { name: "Savings calculator", included: true },
      { name: "Basic recommendations", included: true },
      { name: "Smart claims guidance", included: false }
    ],
    premium: [
      { name: "Insurance coverage scan", included: true },
      { name: "Overlap detection", included: true },
      { name: "Hidden perks unlock", included: true },
      { name: "Savings calculator", included: true },
      { name: "Basic recommendations", included: true },
      { name: "Smart claims guidance", included: true }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <ArrowRight className="h-4 w-4 rotate-180" />
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Simple Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works for you. Start free, upgrade when you need advanced claims guidance.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Freemium Plan */}
          <Card className="relative border-2 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">Freemium</CardTitle>
              <CardDescription className="text-lg">Perfect for getting started</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">Free</span>
                <span className="text-muted-foreground ml-2">forever</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {features.freemium.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
              <Button onClick={handleStartScan} className="w-full mt-8" variant="outline">
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-primary hover:shadow-lg transition-all duration-300">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl font-bold">Premium</CardTitle>
              <CardDescription className="text-lg">Complete insurance optimization</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">{currency}29</span>
                <span className="text-muted-foreground ml-2">/year</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>OR invite 3 friends for free</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {features.premium.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{feature.name}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mt-6">
                <Button onClick={handleStartScan} className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Start Premium
                </Button>
                <Button onClick={handleStartScan} variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Invite 3 Friends Instead
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">What's included in the freemium plan?</h3>
              <p className="text-muted-foreground">
                You get access to our complete insurance scan, overlap detection, hidden perks discovery, and savings calculator. This covers 90% of what most people need to optimize their insurance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What is Smart Claims Guidance?</h3>
              <p className="text-muted-foreground">
                Our premium feature that analyzes your specific policies and provides detailed, actionable guidance on how to file claims successfully. We tell you exactly what to say, what documentation you need, and how to avoid common claim denials.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How does the "invite 3 friends" work?</h3>
              <p className="text-muted-foreground">
                Simply share your unique referral link with 3 friends who complete their free scan, and you'll unlock Premium features for life. It's our way of growing through word-of-mouth rather than expensive advertising.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
              <p className="text-muted-foreground">
                Absolutely. We use bank-level encryption and never store sensitive financial information. We only analyze the policy details you choose to share with us.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 p-8 bg-muted/30 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Stop Overpaying?</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Join thousands who have already saved hundreds on their insurance
          </p>
          <Button onClick={handleStartScan} size="lg" className="text-lg px-8 py-4 h-auto">
            Start Your Free Scan Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
}