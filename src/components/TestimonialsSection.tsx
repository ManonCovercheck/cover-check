
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Austin, TX",
      savings: "potential savings",
      quote: "The preview showed I might have duplicate pediatric coverage between my husband's plan and mine. Really eye-opening to see the overlaps we never considered.",
      rating: 5
    },
    {
      name: "Michael K.",
      location: "Denver, CO", 
      savings: "great insights",
      quote: "Never realized my credit card already included comprehensive travel insurance. The analysis helped me understand what I actually needed vs what I was paying for.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      location: "Miami, FL",
      savings: "helpful analysis",
      quote: "The tool identified overlapping coverage areas I had no idea about. Looking forward to the detailed recommendations to optimize my policies.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Early User Feedback
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what people are saying about their insurance analysis experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-secondary-foreground" />
                </div>
              </div>

              {/* Feedback Badge */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm font-bold text-secondary">{testimonial.savings}</span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Stats */}
        <div className="mt-16 text-center">
          <div className="text-muted-foreground mb-4">
            <p className="text-lg">CoverCheck is launching soon</p>
            <p className="text-sm">Be among the first to discover your insurance savings opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};
