
import { Upload, Search, PiggyBank } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Policies",
      description: "Snap photos or upload PDFs of all your insurance documents. We handle health, travel, phone, pet, home, and auto policies."
    },
    {
      icon: Search,
      title: "Free AI Analysis",
      description: "Our smart technology scans for overlapping coverage, gaps, and potential savings opportunities across all your policies."
    },
    {
      icon: PiggyBank,
      title: "Get Detailed Savings Plan",
      description: "Receive a free overview of potential savings. Unlock detailed recommendations and step-by-step action plan for £29/year."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How CoverCheck Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free analysis first, then unlock detailed savings plan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border z-0 transform -translate-x-1/2" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
