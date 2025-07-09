
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            CoverCheck is launching soon. Be among the first to discover your insurance savings opportunities.
          </p>
        </div>

        {/* Coming Soon Placeholder */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-12 shadow-card">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote className="h-8 w-8 text-secondary" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Real User Stories Coming Soon
            </h3>
            
            <p className="text-muted-foreground text-lg mb-8">
              Once CoverCheck launches, we'll share genuine testimonials from users who have discovered their insurance savings opportunities.
            </p>
            
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-muted-foreground/30" />
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">
              Join our waitlist to be notified when we launch
            </p>
          </div>
        </div>

        {/* Launch Info */}
        <div className="mt-16 text-center">
          <div className="text-muted-foreground">
            <p className="text-lg font-medium mb-2">Get Early Access</p>
            <p className="text-sm">Be among the first to analyze your insurance coverage and discover potential savings</p>
          </div>
        </div>
      </div>
    </section>
  );
};
