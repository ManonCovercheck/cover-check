import { Smartphone, CheckCircle, XCircle } from "lucide-react";

export const RealLifeExampleSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Real-Life Example
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                📱 Claiming a Stolen Phone in France
              </h3>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Most people don't realize that Orange (via SPB) only approves phone theft claims under very specific conditions:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Must be stolen from a zipped bag</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Police report filed within 48 hours</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Not covered if left unattended at a bar</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We help you understand the fine print — and how to claim confidently, without risking rejection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};