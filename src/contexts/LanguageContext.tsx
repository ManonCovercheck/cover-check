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
    'hero.benefit3': 'Detailed action plan',
    'hero.cta': 'Start Your Free Scan',
    'hero.trust': 'Free analysis • Results in 3 minutes • Detailed action plan',
    
    // What You Get
    'whatyouget.title': 'What You Get',
    'whatyouget.stop.title': 'Stop Overpaying',
    'whatyouget.stop.description': 'Find duplicate coverage you\'re paying for twice — and cancel the extra.',
    'whatyouget.unlock.title': 'Unlock Hidden Perks',
    'whatyouget.unlock.description': 'You already have free travel, phone, or rental insurance from your card or employer. We\'ll show you how to actually use it.',
    'whatyouget.smart.title': 'Smart Claim',
    'whatyouget.smart.description': 'Most insurance claims fail, rules are vague on purpose. We explain what\'s really covered, what to say, and how to avoid denials — all based on your real policy.',

    // App Preview
    'app.title': 'See Everything in One App',
    'app.subtitle': 'Get instant insights into your insurance coverage, identify overlaps, discover hidden perks, and make smarter claims with our comprehensive coverage dashboard.',
    'app.tabs.overlap': 'Overlap',
    'app.tabs.claims': 'Claims',
    'app.tabs.cover': 'Cover',
    'app.tabs.perks': 'Perks',
    'app.overlap.save': 'Save £327/year',
    'app.overlap.subtitle': 'By removing duplicate coverage',
    'app.overlap.quickfix': 'Quick Fix',
    'app.overlap.cancel': 'Cancel 2 policies to save £327/year',
    'app.claims.title': '📱 Phone Theft Guide',
    'app.claims.bag': 'Must be stolen from zipped bag',
    'app.claims.police': 'Police report within 48h',
    'app.claims.table': 'Not covered if stolen on table at bar',
    'app.claims.tip': '💡 Pro Tip',
    'app.claims.secure': 'Always secure items in zipped bags',
    'app.claims.guide': 'View Full Claim Guide',
    'app.cover.title': 'Your Coverage',
    'app.cover.phone': 'Phone Insurance',
    'app.cover.travel': 'Travel Protection',
    'app.cover.rental': 'Rental Car',
    'app.cover.dental': 'Dental Protection',
    'app.cover.covered': 'Covered',
    'app.cover.missing': 'Missing',
    'app.perks.title': 'Hidden Benefits',
    'app.perks.subtitle': 'Found 5 unused perks worth £850/year',
    'app.perks.travel': 'Free Travel Insurance',
    'app.perks.travel_desc': 'Via your credit card • £200 value',
    'app.perks.rental': 'Rental Car Coverage',
    'app.perks.rental_desc': 'Via employer benefits • £180 value',
    'app.perks.warranty': 'Extended Warranty',
    'app.perks.warranty_desc': 'Via Amex card • £300 value',
    'app.perks.protection': 'Purchase Protection',
    'app.perks.protection_desc': 'Via mastercard • £120 value',
    'app.perks.cashback': 'Cashback Rewards',
    'app.perks.cashback_desc': 'Via reward program • £50 value',
    'app.perks.action': '🎯 Action Needed',
    'app.perks.activate': 'Activate 3 unused benefits',
    'app.features.stop.title': 'Stop Overpaying',
    'app.features.stop.desc': 'Identify duplicate coverage and save hundreds annually',
    'app.features.claims.title': 'Smart Claims',
    'app.features.claims.desc': 'Know exactly what\'s covered before you claim',
    'app.features.perks.title': 'Hidden Perks',
    'app.features.perks.desc': 'Unlock benefits you\'re already paying for',

    // Insurance Quiz
    'quiz.title': 'Quick Saving and Perk Calculators',
    'quiz.subtitle': 'Select the insurance types you currently have, and we\'ll estimate your potential savings and hidden perks.',
    'quiz.calculate': 'Calculate My Potential',
    'quiz.selected': 'selected',
    'quiz.results.title': 'Your Personalized Estimate',
    'quiz.results.savings': 'Potential annual savings',
    'quiz.results.perks': 'Hidden perks to unlock',
    'quiz.results.overlaps': 'Likely overlaps to review',
    'quiz.results.based': 'Based on your',
    'quiz.results.types': 'insurance types:',
    'quiz.results.save_similar': 'Most people with similar coverage save',
    'quiz.results.annually': 'annually',
    'quiz.results.unused': 'You likely have',
    'quiz.results.worth': 'unused benefits worth hundreds per year',
    'quiz.results.duplicate': 'We\'ll check for duplicate coverage costing you extra',
    'quiz.results.cta': '🟢 Start My Free Scan',
    'quiz.results.pricing': 'CoverCheck — 100% free for you. We get paid by insurers and brokers when we help you save.',

    // Insurance Types
    'insurance.health': 'Health',
    'insurance.travel': 'Travel',
    'insurance.phone': 'Phone',
    'insurance.pet': 'Pet',
    'insurance.home': 'Home',
    'insurance.auto': 'Auto',
    'insurance.credit': 'Credit Card',
    'insurance.life': 'Life',
    'insurance.umbrella': 'Umbrella',
    'insurance.dental': 'Dental',
    'insurance.rental': 'Rental Car',
    'insurance.disability': 'Disability',
    'insurance.renters': 'Renters',
    'insurance.liability': 'Liability',

    // Cover Section
    'cover.title': 'Your Complete Coverage',
    'cover.subtitle': 'See all your insurance coverage in one place — from credit cards, employers, and policies you\'ve purchased.',
    'cover.overview': 'Coverage Overview',
    'cover.gap_detected': 'Coverage Gap Detected',
    'cover.gap_message': 'You\'re missing home contents insurance while traveling. Consider adding this to your travel policy for complete protection.',
    'cover.phone_insurance': 'Phone Insurance',
    'cover.travel_protection': 'Travel Protection', 
    'cover.rental_coverage': 'Rental Car Coverage',
    'cover.purchase_protection': 'Purchase Protection',
    'cover.mobile_provider': 'Mobile provider',
    'cover.credit_card': 'Credit Card',
    'cover.employer': 'Employer',
    'cover.multiple': 'Multiple',

    // App Header
    'app.header.title': 'CoverCheck',
    'app.header.subtitle': 'Your Coverage Report',

    // How It Works
    'how_it_works.title': 'How It Works',
    'how_it_works.subtitle': 'You only need to share these 4 simple details:',
    'how_it_works.step1.title': 'Type of Insurance',
    'how_it_works.step1.description': 'Health, Home, Pet, Travel, Car, etc.',
    'how_it_works.step2.title': 'Provider Name',
    'how_it_works.step2.description': 'e.g. AXA, Aviva, Revolut, Amex, etc.',
    'how_it_works.step3.title': 'Package/Tier',
    'how_it_works.step3.description': 'Your specific plan or coverage level',
    'how_it_works.step4.title': 'Country',
    'how_it_works.step4.description': 'For legal terms and regulations',

    // Footer
    'footer.tagline': 'We don\'t sell insurance. We help you finally benefit from it.',
    'footer.cta': '🟢 Start My Free Scan',
    'footer.pricing': 'CoverCheck — 100% free for you. We get paid by insurers and brokers when we help you save.',
    'footer.description': 'Free insurance analysis with detailed savings plans. Discover hidden opportunities in your insurance portfolio.',
    'footer.email': 'hello@covercheck.com',
    'footer.product': 'Product',
    'footer.how': 'How it Works',
    'footer.pricing_link': 'Pricing',
    'footer.security': 'Security',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.contact': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2024 CoverCheck. All rights reserved.',
    'footer.made': 'Made with ❤️ in London',
  },
  fr: {
    // Hero Section
    'hero.badge': 'Analyse Intelligente d\'Assurance',
    'hero.title1': 'Vous Êtes Assuré.',
    'hero.title2': 'Mais En Profitez-Vous?',
    'hero.subtitle': 'CoverCheck analyse votre couverture d\'assurance pour vous aider à arrêter de trop payer, débloquer des avantages inutilisés, et déposer des réclamations plus intelligentes — tout en un seul endroit.',
    'hero.benefit1': 'Analyse gratuite de couverture',
    'hero.benefit2': 'Identifier les économies potentielles',
    'hero.benefit3': 'Plan d\'action détaillé',
    'hero.cta': 'Commencer Votre Scan Gratuit',
    'hero.trust': 'Analyse gratuite • Résultats en 3 minutes • Plan d\'action détaillé',
    
    // What You Get
    'whatyouget.title': 'Ce Que Vous Obtenez',
    'whatyouget.stop.title': 'Arrêter de Trop Payer',
    'whatyouget.stop.description': 'Trouvez la couverture en double que vous payez deux fois — et annulez le surplus.',
    'whatyouget.unlock.title': 'Débloquer les Avantages Cachés',
    'whatyouget.unlock.description': 'Vous avez déjà une assurance voyage, téléphone, ou location gratuite via votre carte ou employeur. Nous vous montrerons comment l\'utiliser réellement.',
    'whatyouget.smart.title': 'Réclamation Intelligente',
    'whatyouget.smart.description': 'La plupart des réclamations d\'assurance échouent, les règles sont vagues à dessein. Nous expliquons ce qui est vraiment couvert, quoi dire, et comment éviter les refus — tout basé sur votre vraie police.',

    // App Preview
    'app.title': 'Voir Tout dans Une App',
    'app.subtitle': 'Obtenez des insights instantanés sur votre couverture d\'assurance, identifiez les chevauchements, découvrez les avantages cachés, et faites des réclamations plus intelligentes avec notre tableau de bord de couverture complet.',
    'app.tabs.overlap': 'Chevauchement',
    'app.tabs.claims': 'Réclamations',
    'app.tabs.cover': 'Couverture',
    'app.tabs.perks': 'Avantages',
    'app.overlap.save': 'Économisez €327/an',
    'app.overlap.subtitle': 'En supprimant la couverture en double',
    'app.overlap.quickfix': 'Solution Rapide',
    'app.overlap.cancel': 'Annulez 2 polices pour économiser €327/an',
    'app.claims.title': '📱 Guide de Vol de Téléphone',
    'app.claims.bag': 'Doit être volé dans un sac fermé',
    'app.claims.police': 'Rapport de police sous 48h',
    'app.claims.table': 'Pas couvert si volé sur une table au bar',
    'app.claims.tip': '💡 Conseil Pro',
    'app.claims.secure': 'Toujours sécuriser les objets dans des sacs fermés',
    'app.claims.guide': 'Voir le Guide Complet de Réclamation',
    'app.cover.title': 'Votre Couverture',
    'app.cover.phone': 'Assurance Téléphone',
    'app.cover.travel': 'Protection Voyage',
    'app.cover.rental': 'Voiture de Location',
    'app.cover.dental': 'Protection Dentaire',
    'app.cover.covered': 'Couvert',
    'app.cover.missing': 'Manquant',
    'app.perks.title': 'Avantages Cachés',
    'app.perks.subtitle': 'Trouvé 5 avantages inutilisés d\'une valeur de €850/an',
    'app.perks.travel': 'Assurance Voyage Gratuite',
    'app.perks.travel_desc': 'Via votre carte de crédit • €200 de valeur',
    'app.perks.rental': 'Couverture Voiture de Location',
    'app.perks.rental_desc': 'Via les avantages employeur • €180 de valeur',
    'app.perks.warranty': 'Garantie Étendue',
    'app.perks.warranty_desc': 'Via carte Amex • €300 de valeur',
    'app.perks.protection': 'Protection d\'Achat',
    'app.perks.protection_desc': 'Via mastercard • €120 de valeur',
    'app.perks.cashback': 'Récompenses Cashback',
    'app.perks.cashback_desc': 'Via programme de récompenses • €50 de valeur',
    'app.perks.action': '🎯 Action Nécessaire',
    'app.perks.activate': 'Activez 3 avantages inutilisés',
    'app.features.stop.title': 'Arrêter de Trop Payer',
    'app.features.stop.desc': 'Identifiez la couverture en double et économisez des centaines annuellement',
    'app.features.claims.title': 'Réclamations Intelligentes',
    'app.features.claims.desc': 'Sachez exactement ce qui est couvert avant de réclamer',
    'app.features.perks.title': 'Avantages Cachés',
    'app.features.perks.desc': 'Débloquez les avantages que vous payez déjà',

    // Insurance Quiz
    'quiz.title': 'Calculateurs d\'Économies et d\'Avantages Rapides',
    'quiz.subtitle': 'Sélectionnez les types d\'assurance que vous avez actuellement, et nous estimerons vos économies potentielles et avantages cachés.',
    'quiz.calculate': 'Calculer Mon Potentiel',
    'quiz.selected': 'sélectionné',
    'quiz.results.title': 'Votre Estimation Personnalisée',
    'quiz.results.savings': 'Économies annuelles potentielles',
    'quiz.results.perks': 'Avantages cachés à débloquer',
    'quiz.results.overlaps': 'Chevauchements probables à examiner',
    'quiz.results.based': 'Basé sur vos',
    'quiz.results.types': 'types d\'assurance:',
    'quiz.results.save_similar': 'La plupart des gens avec une couverture similaire économisent',
    'quiz.results.annually': 'annuellement',
    'quiz.results.unused': 'Vous avez probablement',
    'quiz.results.worth': 'avantages inutilisés valant des centaines par an',
    'quiz.results.duplicate': 'Nous vérifierons la couverture en double qui vous coûte extra',
    'quiz.results.cta': '🟢 Commencer Mon Scan Gratuit',
    'quiz.results.pricing': 'CoverCheck — 100% gratuit pour vous. Nous sommes payés par les assureurs et courtiers quand nous vous aidons à économiser.',

    // Insurance Types
    'insurance.health': 'Santé',
    'insurance.travel': 'Voyage',
    'insurance.phone': 'Téléphone',
    'insurance.pet': 'Animal',
    'insurance.home': 'Maison',
    'insurance.auto': 'Auto',
    'insurance.credit': 'Carte de Crédit',
    'insurance.life': 'Vie',
    'insurance.umbrella': 'Parapluie',
    'insurance.dental': 'Dentaire',
    'insurance.rental': 'Voiture de Location',
    'insurance.disability': 'Invalidité',
    'insurance.renters': 'Locataires',
    'insurance.liability': 'Responsabilité',

    // Cover Section
    'cover.title': 'Votre Couverture Complète',
    'cover.subtitle': 'Voir toute votre couverture d\'assurance en un seul endroit — des cartes de crédit, employeurs et polices que vous avez achetées.',
    'cover.overview': 'Aperçu de la Couverture',
    'cover.gap_detected': 'Lacune de Couverture Détectée',
    'cover.gap_message': 'Il vous manque l\'assurance contenu domiciliaire en voyage. Considérez l\'ajouter à votre police voyage pour une protection complète.',
    'cover.phone_insurance': 'Assurance Téléphone',
    'cover.travel_protection': 'Protection Voyage',
    'cover.rental_coverage': 'Couverture Voiture de Location',
    'cover.purchase_protection': 'Protection d\'Achat',
    'cover.mobile_provider': 'Fournisseur mobile',
    'cover.credit_card': 'Carte de Crédit',
    'cover.employer': 'Employeur',
    'cover.multiple': 'Multiple',

    // App Header
    'app.header.title': 'CoverCheck',
    'app.header.subtitle': 'Votre Rapport de Couverture',

    // How It Works
    'how_it_works.title': 'Comment Ça Marche',
    'how_it_works.subtitle': 'Vous n\'avez besoin de partager que ces 4 détails simples :',
    'how_it_works.step1.title': 'Type d\'Assurance',
    'how_it_works.step1.description': 'Santé, Maison, Animal, Voyage, Auto, etc.',
    'how_it_works.step2.title': 'Nom du Fournisseur',
    'how_it_works.step2.description': 'ex. AXA, Aviva, Revolut, Amex, etc.',
    'how_it_works.step3.title': 'Package/Niveau',
    'how_it_works.step3.description': 'Votre plan spécifique ou niveau de couverture',
    'how_it_works.step4.title': 'Pays',
    'how_it_works.step4.description': 'Pour les termes légaux et réglementations',

    // Footer
    'footer.tagline': 'Nous ne vendons pas d\'assurance. Nous vous aidons à enfin en bénéficier.',
    'footer.cta': '🟢 Commencer Mon Scan Gratuit',
    'footer.pricing': 'CoverCheck — 100% gratuit pour vous. Nous sommes payés par les assureurs et courtiers quand nous vous aidons à économiser.',
    'footer.description': 'Analyse d\'assurance gratuite avec plans d\'économies détaillés. Découvrez les opportunités cachées dans votre portefeuille d\'assurance.',
    'footer.email': 'bonjour@covercheck.com',
    'footer.product': 'Produit',
    'footer.how': 'Comment Ça Marche',
    'footer.pricing_link': 'Tarifs',
    'footer.security': 'Sécurité',
    'footer.support': 'Support',
    'footer.help': 'Centre d\'Aide',
    'footer.contact': 'Nous Contacter',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.copyright': '© 2024 CoverCheck. Tous droits réservés.',
    'footer.made': 'Fait avec ❤️ à Londres',
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