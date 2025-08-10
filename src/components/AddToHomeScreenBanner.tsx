import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from './ui/button';

export const AddToHomeScreenBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Check if banner was previously dismissed
    const isDismissed = localStorage.getItem('addToHomeScreenDismissed');
    if (isDismissed) return;

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator as any).standalone === true;
    
    if (!isStandalone && !isInWebAppiOS) {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      
      // Show banner for iOS devices (they don't support beforeinstallprompt)
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        setIsVisible(true);
      }
    }

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

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('addToHomeScreenDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Download className="h-5 w-5 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-medium">Install CoverCheck</span>
            <span className="hidden sm:inline ml-2">— Get instant access from your home screen</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleInstallClick}
            className="bg-white/20 text-primary-foreground hover:bg-white/30 border-white/30"
          >
            Install
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="text-primary-foreground hover:bg-white/20 p-1 h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};