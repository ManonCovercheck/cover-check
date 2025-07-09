import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  currency: string;
}

const translations = {
  en: {
    // Hero Section
    'hero.badge': 'Smart Insurance Analysis',
    'hero.title1': 'You\'re Covered.',
    'hero.title2': 'But Are You Benefiting?',
    'hero.subtitle': 'CoverCheck scans your insurance coverage to help you stop overpaying, unlock unused perks, and file smarter claims — all in one place.',
    'hero.benefit1': 'Free coverage analysis',
    'hero.benefit2': 'Identify potential savings',
    'hero.benefit3': 'Detailed plan for £29/year',
    'hero.cta': 'Start Your Free Scan',
    'hero.trust': 'Free analysis • Results in 3 minutes • Detailed plan £29/year',
    
    // App Preview
    'app.overlapping.save': 'Save £327/year',
    'app.overlapping.subtitle': 'By removing duplicate coverage',
    'app.perks.title': 'Hidden Benefits',
    'app.perks.subtitle': 'Found 5 unused perks worth £850/year',
    'app.perks.travel': 'Free Travel Insurance',
    'app.perks.travel_desc': 'Via your credit card',
    'app.perks.rental': 'Rental Car Coverage',
    'app.perks.rental_desc': 'Via employer benefits',
    
    // FAQ
    'faq.question1': 'What do I get for free vs. paid?',
    'faq.answer1': 'You get a free analysis showing potential savings and coverage gaps. For £29/year, you unlock detailed recommendations, step-by-step action plans, and ongoing policy monitoring with alerts when better deals become available.',
    
    // How It Works
    'how.savings.title': 'Get Detailed Savings Plan',
    'how.savings.desc': 'Receive a free overview of potential savings. Unlock detailed recommendations and step-by-step action plan for £29/year.',
    
    // Overlapping Section
    'overlapping.savings': '£327',
    
    // Footer
    'footer.trust': 'Free analysis • Results in 3 minutes • Detailed plan £29/year',
    
    // Insurance Quiz
    'quiz.title': 'What Insurance Do You Currently Have?',
    'quiz.subtitle': 'Select all that apply to get your personalized savings estimate',
    'quiz.calculate': 'Calculate My Potential Savings',
    'quiz.results.title': 'Your Personalized Analysis',
    'quiz.results.subtitle': 'Based on your current coverage, here\'s what we found:',
    'quiz.results.savings': 'Potential Annual Savings',
    'quiz.results.perks': 'Hidden Perks Value',
    'quiz.results.overlaps': 'Coverage Overlaps Found',
    'quiz.results.cta': 'Get Your Detailed Report',
  },
  fr: {
    // Hero Section
    'hero.badge': 'Analyse Intelligente d\'Assurance',
    'hero.title1': 'Vous Êtes Assuré.',
    'hero.title2': 'Mais En Profitez-Vous?',
    'hero.subtitle': 'CoverCheck analyse votre couverture d\'assurance pour vous aider à arrêter de trop payer, débloquer des avantages inutilisés, et déposer des réclamations plus intelligentes — tout en un seul endroit.',
    'hero.benefit1': 'Analyse gratuite de couverture',
    'hero.benefit2': 'Identifier les économies potentielles',
    'hero.benefit3': 'Plan détaillé pour €29/an',
    'hero.cta': 'Commencer Votre Scan Gratuit',
    'hero.trust': 'Analyse gratuite • Résultats en 3 minutes • Plan détaillé €29/an',
    
    // App Preview
    'app.overlapping.save': 'Économisez €327/an',
    'app.overlapping.subtitle': 'En supprimant la couverture en double',
    'app.perks.title': 'Avantages Cachés',
    'app.perks.subtitle': 'Trouvé 5 avantages inutilisés d\'une valeur de €850/an',
    'app.perks.travel': 'Assurance Voyage Gratuite',
    'app.perks.travel_desc': 'Via votre carte de crédit',
    'app.perks.rental': 'Couverture Voiture de Location',
    'app.perks.rental_desc': 'Via les avantages employeur',
    
    // FAQ
    'faq.question1': 'Que reçois-je gratuitement vs payant?',
    'faq.answer1': 'Vous obtenez une analyse gratuite montrant les économies potentielles et les lacunes de couverture. Pour €29/an, vous débloquez des recommandations détaillées, des plans d\'action étape par étape, et une surveillance continue des polices avec des alertes quand de meilleures offres deviennent disponibles.',
    
    // How It Works
    'how.savings.title': 'Obtenez un Plan d\'Économies Détaillé',
    'how.savings.desc': 'Recevez un aperçu gratuit des économies potentielles. Débloquez des recommandations détaillées et un plan d\'action étape par étape pour €29/an.',
    
    // Overlapping Section
    'overlapping.savings': '€327',
    
    // Footer
    'footer.trust': 'Analyse gratuite • Résultats en 3 minutes • Plan détaillé €29/an',
    
    // Insurance Quiz
    'quiz.title': 'Quelles Assurances Avez-Vous Actuellement?',
    'quiz.subtitle': 'Sélectionnez tout ce qui s\'applique pour obtenir votre estimation d\'économies personnalisée',
    'quiz.calculate': 'Calculer Mes Économies Potentielles',
    'quiz.results.title': 'Votre Analyse Personnalisée',
    'quiz.results.subtitle': 'Basé sur votre couverture actuelle, voici ce que nous avons trouvé:',
    'quiz.results.savings': 'Économies Annuelles Potentielles',
    'quiz.results.perks': 'Valeur des Avantages Cachés',
    'quiz.results.overlaps': 'Chevauchements de Couverture Trouvés',
    'quiz.results.cta': 'Obtenir Votre Rapport Détaillé',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const currency = language === 'en' ? '£' : '€';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currency }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};