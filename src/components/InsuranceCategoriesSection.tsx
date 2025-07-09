import { Heart, Plane, Smartphone, PawPrint, Home, Car, Briefcase, CreditCard, Shield } from "lucide-react";
import { useState } from "react";

export const InsuranceCategoriesSection = () => {
  const [showMore, setShowMore] = useState(false);

  const baseCategories = [
    { icon: Heart, name: "Health", color: "text-red-500" },
    { icon: Plane, name: "Travel", color: "text-blue-500" },
    { icon: Smartphone, name: "Phone", color: "text-purple-500" },
    { icon: PawPrint, name: "Pet", color: "text-orange-500" },
    { icon: Home, name: "Home", color: "text-green-500" },
    { icon: Car, name: "Auto", color: "text-indigo-500" },
    { icon: CreditCard, name: "Credit Card", color: "text-pink-500" },
    { icon: Briefcase, name: "Life", color: "text-gray-600" }
  ];

  const additionalCategories = [
    { icon: Shield, name: "Umbrella", color: "text-teal-500" },
    { icon: Heart, name: "Dental", color: "text-blue-400" },
    { icon: Car, name: "Rental Car", color: "text-yellow-500" },
    { icon: Briefcase, name: "Disability", color: "text-red-400" },
    { icon: Home, name: "Renters", color: "text-green-400" },
    { icon: Shield, name: "Liability", color: "text-purple-400" }
  ];

  const displayedCategories = showMore ? [...baseCategories, ...additionalCategories] : baseCategories;

  const handleSeeMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="py-16 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            We Analyze All Types of Insurance
          </h3>
          <p className="text-muted-foreground">
            Comprehensive coverage analysis across your entire insurance portfolio
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {displayedCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center group p-4">
              <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                <category.icon className={`h-6 w-6 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <span className="text-xs font-medium text-foreground text-center">{category.name}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <button 
            onClick={handleSeeMore}
            className="text-primary font-medium hover:text-primary/80 transition-colors duration-300"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};