import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Austin, TX",
      savings: "$840",
      quote: "I had no idea my husband's health plan already covered our daughter. CoverCheck found we were paying for duplicate pediatric coverage. Saved us $70/month instantly!",
      rating: 5
    },
    {
      name: "Michael K.",
      location: "Denver, CO", 
      savings: "$1,200",
      quote: "The travel insurance from my credit card was way better than what I was buying separately. Plus they found overlaps in my phone insurance. Mind blown.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      location: "Miami, FL",
      savings: "$650",
      quote: "Three different pet insurance policies for the same coverage?! CoverCheck showed me exactly which one to keep and which to cancel. So simple.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Stories, Real Savings
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of families who've discovered hidden savings in their insurance
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

              {/* Savings Badge */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm font-bold text-secondary">Saved {testimonial.savings}</span>
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

        {/* Trust Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "50K+", label: "Families Helped" },
              { number: "$62M", label: "Total Saved" },
              { number: "4.9/5", label: "Rating" },
              { number: "< 3min", label: "Scan Time" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};