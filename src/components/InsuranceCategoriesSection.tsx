
import { Heart, Plane, Smartphone, PawPrint, Home, Car, Shield, Briefcase, CreditCard } from "lucide-react";

export const InsuranceCategoriesSection = () => {
  const categories = [
    { icon: Heart, name: "Health", color: "text-red-500" },
    { icon: Plane, name: "Travel", color: "text-blue-500" },
    { icon: Smartphone, name: "Phone", color: "text-purple-500" },
    { icon: PawPrint, name: "Pet", color: "text-orange-500" },
    { icon: Home, name: "Home", color: "text-green-500" },
    { icon: Car, name: "Auto", color: "text-indigo-500" },
    { icon: CreditCard, name: "Credit Card", color: "text-pink-500" },
    { icon: Briefcase, name: "Life", color: "text-gray-600" },
    { icon: Shield, name: "Umbrella", color: "text-teal-500" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            We Analyze All Types of Insurance
          </h3>
          <p className="text-muted-foreground">
            Comprehensive coverage analysis across your entire insurance portfolio
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                <category.icon className={`h-8 w-8 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <span className="text-sm font-medium text-foreground">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
