import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: December 2024",
      sections: {
        introduction: {
          title: "1. Introduction",
          content: "CoverCheck (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our insurance analysis service."
        },
        information: {
          title: "2. Information We Collect",
          content: "We collect information you provide directly to us, such as when you create an account, use our service, or contact us. This may include your name, email address, insurance policy information, and payment details."
        },
        usage: {
          title: "3. How We Use Your Information",
          content: "We use your information to provide our insurance analysis service, process payments, communicate with you, improve our service, and comply with legal obligations."
        },
        sharing: {
          title: "4. Information Sharing",
          content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business, subject to confidentiality agreements."
        },
        security: {
          title: "5. Data Security",
          content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        retention: {
          title: "6. Data Retention",
          content: "We retain your personal information for as long as necessary to provide our service and comply with legal obligations. You may request deletion of your account and data at any time."
        },
        rights: {
          title: "7. Your Rights",
          content: "You have the right to access, update, or delete your personal information. You may also object to certain processing activities. Contact us to exercise these rights."
        },
        contact: {
          title: "8. Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us at hello@covercheck.com"
        }
      }
    },
    fr: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : Décembre 2024",
      sections: {
        introduction: {
          title: "1. Introduction",
          content: "CoverCheck (\"nous,\" \"notre,\" ou \"nos\") s'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre service d'analyse d'assurance."
        },
        information: {
          title: "2. Informations que Nous Collectons",
          content: "Nous collectons les informations que vous nous fournissez directement, par exemple lorsque vous créez un compte, utilisez notre service, ou nous contactez. Cela peut inclure votre nom, adresse e-mail, informations de police d'assurance, et détails de paiement."
        },
        usage: {
          title: "3. Comment Nous Utilisons Vos Informations",
          content: "Nous utilisons vos informations pour fournir notre service d'analyse d'assurance, traiter les paiements, communiquer avec vous, améliorer notre service, et respecter les obligations légales."
        },
        sharing: {
          title: "4. Partage d'Informations",
          content: "Nous ne vendons, n'échangeons, ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec des prestataires de services qui nous aident à exploiter notre entreprise, sous réserve d'accords de confidentialité."
        },
        security: {
          title: "5. Sécurité des Données",
          content: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction."
        },
        retention: {
          title: "6. Conservation des Données",
          content: "Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir notre service et respecter les obligations légales. Vous pouvez demander la suppression de votre compte et de vos données à tout moment."
        },
        rights: {
          title: "7. Vos Droits",
          content: "Vous avez le droit d'accéder, de mettre à jour ou de supprimer vos informations personnelles. Vous pouvez également vous opposer à certaines activités de traitement. Contactez-nous pour exercer ces droits."
        },
        contact: {
          title: "8. Nous Contacter",
          content: "Si vous avez des questions sur cette Politique de Confidentialité, veuillez nous contacter à bonjour@covercheck.com"
        }
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-6 py-8 max-w-2xl text-center">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-foreground">Coming Soon</h1>
          <p className="text-xl text-muted-foreground">
            Our Privacy Policy is currently being finalized. 
            We're working hard to provide you with comprehensive information about how we protect your data.
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button size="lg">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;