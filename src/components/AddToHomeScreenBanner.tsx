import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

export const AddToHomeScreenBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Check if already installed as PWA
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator as any).standalone === true;
    
    // Don't show if already installed
    if (isStandalone || isInWebAppiOS) return;

    // Always show the banner for web users
    setIsVisible(true);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsVisible(false);
      }
      setDeferredPrompt(null);
    } else {
      // For iOS or browsers that don't support the install prompt
      alert('To add this to your home screen:\n\n1. Tap the Share button\n2. Select "Add to Home Screen"');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-3 px-4 relative">
      <div className="container mx-auto text-center">
        <Button
          variant="ghost"
          onClick={handleInstallClick}
          className="text-primary-foreground hover:bg-white/10 flex items-center gap-2 mx-auto"
        >
          <Download className="h-5 w-5" />
          <div className="text-sm">
            <span className="font-medium">Install CoverCheck</span>
            <span className="hidden sm:inline ml-2">— Get instant access from your home screen</span>
          </div>
        </Button>
      </div>
    </div>
  );
};