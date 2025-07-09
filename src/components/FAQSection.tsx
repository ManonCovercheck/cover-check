import { useState } from "react";
import { ChevronDown, Shield, Lock, Clock, Zap } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use bank-level encryption and never store your personal documents. Our analysis happens in real-time, and all data is deleted immediately after your report is generated. We're SOC 2 certified and GDPR compliant.",
      icon: Lock
    },
    {
      question: "How can this be free?",
      answer: "CoverCheck is free because we believe everyone deserves insurance clarity. We may earn referral fees if you choose to switch providers through our recommendations, but there's never any pressure to buy anything.",
      icon: Zap
    },
    {
      question: "What if I have complex business insurance?",
      answer: "Currently, CoverCheck focuses on personal and family insurance policies. For business insurance analysis, we recommend consulting with a commercial insurance broker who can provide specialized expertise.",
      icon: Shield
    },
    {
      question: "How long does the analysis take?",
      answer: "Most scans complete in under 3 minutes. Complex portfolios with many policies might take up to 5 minutes. You'll get an instant preliminary report, with detailed recommendations available within 24 hours.",
      icon: Clock
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Common Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about getting your insurance scan
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <faq.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
                
                {openIndex === index && (
                  <div className="mt-4 pl-14 pr-8">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="text-primary hover:text-primary-light font-medium underline underline-offset-4">
            Contact our support team
          </button>
        </div>
      </div>
    </section>
  );
};