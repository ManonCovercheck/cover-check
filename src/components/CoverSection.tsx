import { Shield, CheckCircle, Clock, AlertTriangle } from "lucide-react";

export const CoverSection = () => {
  const coverageItems = [
    { type: "Phone Insurance", status: "Active", provider: "Orange SPB", color: "green", icon: CheckCircle },
    { type: "Travel Protection", status: "Active", provider: "Credit Card", color: "green", icon: CheckCircle },
    { type: "Rental Car Coverage", status: "Available", provider: "Employer", color: "blue", icon: Clock },
    { type: "Purchase Protection", status: "Unused", provider: "Multiple", color: "gray", icon: AlertTriangle }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              🛡️ Your Complete Coverage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See all your insurance coverage in one place — from credit cards, employers, and policies you've purchased.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border">
            <h3 className="text-2xl font-bold text-foreground mb-8">Coverage Overview</h3>
            
            <div className="grid gap-4">
              {coverageItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-muted/50 rounded-xl border">
                  <div className="flex items-center gap-4">
                    <item.icon className={`h-6 w-6 ${
                      item.color === 'green' ? 'text-green-500' :
                      item.color === 'blue' ? 'text-blue-500' :
                      item.color === 'gray' ? 'text-gray-500' : 'text-gray-500'
                    }`} />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">{item.type}</div>
                      <div className="text-sm text-muted-foreground">{item.provider}</div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.color === 'green' ? 'bg-green-100 text-green-700' :
                    item.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Coverage Gap Detected</h4>
              <p className="text-sm text-muted-foreground">
                You're missing home contents insurance while traveling. 
                Consider adding this to your travel policy for complete protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};