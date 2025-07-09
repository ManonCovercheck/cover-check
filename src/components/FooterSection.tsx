
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const FooterSection = () => {
  const handleStartScan = () => {
    window.open("https://tally.so/r/mY4XZq", "_blank");
  };

  const handleFooterLink = (section: string) => {
    // Scroll to sections or show coming soon message
    if (section === 'how-it-works') {
      document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'pricing') {
      document.querySelector('#faq-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Coming soon! This feature will be available at launch.');
    }
  };

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      {/* Final CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We don't sell insurance. We help you finally benefit from it.
          </p>
          
          <Button
            onClick={handleStartScan}
            variant="secondary"
            size="lg"
            className="text-lg px-8 py-4 h-auto mb-6"
          >
            🟢 Start My Free Scan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-primary-foreground/70 text-sm">
            29£/year for overlap report and action plan • 49£/year for overlap + smart claim, perks and cover visibility
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-primary-foreground/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">CoverCheck</div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Free insurance analysis with detailed savings plans. Discover hidden opportunities in your insurance portfolio.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <Mail className="h-4 w-4" />
                  <span>hello@covercheck.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><button onClick={() => handleFooterLink('how-it-works')} className="hover:text-primary-foreground transition-colors">How it Works</button></li>
                <li><button onClick={() => handleFooterLink('pricing')} className="hover:text-primary-foreground transition-colors">Pricing</button></li>
                <li><button onClick={() => handleFooterLink('security')} className="hover:text-primary-foreground transition-colors">Security</button></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><button onClick={() => handleFooterLink('help')} className="hover:text-primary-foreground transition-colors">Help Center</button></li>
                <li><button onClick={() => handleFooterLink('contact')} className="hover:text-primary-foreground transition-colors">Contact Us</button></li>
                <li><button onClick={() => handleFooterLink('privacy')} className="hover:text-primary-foreground transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => handleFooterLink('terms')} className="hover:text-primary-foreground transition-colors">Terms of Service</button></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 CoverCheck. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Made with ❤️ in London</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
