/**
 * Legal page data for the coaching website
 * Contains hero, legal content, and privacy policy content
 */

export interface LegalSection {
  title: string;
  content: string;
  items?: { label: string; value: string }[];
}

export interface PrivacySection {
  title: string;
  content: string;
  listItems?: string[];
  contactInfo?: { email: string; phone: string };
  additionalInfo?: string;
  contactText?: string;
  serviceLinks?: {
    calendly?: { text: string; url: string };
    vercel?: { text: string; url: string };
  };
}

export interface LegalData {
  hero: {
    title: string;
    subtitle: string;
  };
  tabs: {
    legal: string;
    privacy: string;
  };
  legal: LegalSection[];
  privacy: PrivacySection[];
  contact: {
    email: string;
    phone: string;
  };
  lastUpdated: string;
}

export const legalData: LegalData = {
  hero: {
    title: 'Mentions Légales',
    subtitle: 'Informations légales et politique de confidentialité',
  },
  tabs: {
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
  },
  legal: [
    {
      title: 'Éditeur du site',
      content: '',
      items: [
        { label: 'Nom', value: 'Laura Bianchi' },
        { label: 'Statut', value: 'Auto-entrepreneur / Micro-entreprise' },
        { label: 'SIRET', value: '456 789 123 45678' },
        { label: 'Adresse', value: '17 rue Gabriel Péri 93200 Saint-Denis' },
        { label: 'Email', value: 'contact@laurabianchi.fr' },
        { label: 'Téléphone', value: '+33 6 12 34 56 78' },
      ],
    },
    {
      title: 'Hébergement',
      content: '',
      items: [
        { label: 'Hébergeur', value: 'Vercel Inc.' },
        {
          label: 'Adresse',
          value: '340 S Lemon Ave #4133, Walnut, CA 91789, USA',
        },
        { label: 'Site web', value: 'vercel.com' },
      ],
    },
    {
      title: 'Propriété intellectuelle',
      content:
        "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.\n\nLa reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.",
    },
    {
      title: 'Cookies',
      content:
        "Ce site n'utilise pas de cookies de tracking ou de publicité. Les seuls cookies utilisés sont des cookies strictement nécessaires au fonctionnement du site (session, préférences utilisateur).\n\nLe widget Calendly peut déposer ses propres cookies conformément à sa politique de confidentialité.",
    },
    {
      title: 'Crédits',
      content: '',
      items: [
        { label: 'Photos', value: 'Unsplash (licence libre)' },
        { label: 'Icons', value: 'Lucide Icons' },
        { label: 'Design', value: 'Laura Bianchi' },
      ],
    },
  ],
  privacy: [
    {
      title: 'Introduction',
      content:
        'La protection de vos données personnelles est une priorité. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles.',
    },
    {
      title: 'Données collectées',
      content: 'Nous collectons les données suivantes :',
      listItems: [
        'Nom, prénom',
        'Adresse email',
        'Numéro de téléphone (optionnel)',
        'Informations fournies dans les formulaires de contact ou questionnaires',
        'Données de réservation via Calendly',
      ],
    },
    {
      title: 'Utilisation des données',
      content: 'Vos données sont utilisées pour :',
      listItems: [
        "Gérer les rendez-vous et l'accompagnement",
        'Vous envoyer des informations sur nos services (avec votre consentement)',
        'Améliorer nos services',
        'Respecter nos obligations légales',
      ],
      additionalInfo: 'Nous ne vendons jamais vos données à des tiers.',
    },
    {
      title: 'Conservation des données',
      content:
        'Vos données sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et au maximum 3 ans après notre dernier contact.',
    },
    {
      title: 'Vos droits',
      content: 'Conformément au RGPD, vous disposez des droits suivants :',
      listItems: [
        "Droit d'accès : obtenir une copie de vos données",
        'Droit de rectification : corriger vos données inexactes',
        "Droit à l'effacement : demander la suppression de vos données",
        "Droit d'opposition : vous opposer au traitement de vos données",
        'Droit à la portabilité : récupérer vos données dans un format structuré',
      ],
      contactText: 'Pour exercer vos droits, contactez-nous à :',
    },
    {
      title: 'Sécurité',
      content:
        'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.',
    },
    {
      title: 'Services tiers',
      content: 'Nous utilisons les services suivants :',
      listItems: [
        'Calendly : pour la gestion des rendez-vous (politique de confidentialité)',
        "Vercel : pour l'hébergement du site (politique de confidentialité)",
      ],
      serviceLinks: {
        calendly: {
          text: 'politique de confidentialité',
          url: 'https://calendly.com/privacy',
        },
        vercel: {
          text: 'politique de confidentialité',
          url: 'https://vercel.com/legal/privacy-policy',
        },
      },
    },
    {
      title: 'Contact',
      content:
        'Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous :',
      contactInfo: {
        email: 'contact@laurabianchi.fr',
        phone: '+33 6 12 34 56 78',
      },
    },
  ],
  contact: {
    email: 'contact@laurabianchi.fr',
    phone: '+33 6 12 34 56 78',
  },
  lastUpdated: '27 octobre 2025',
};
