/**
 * Services data for the coaching website
 * Contains service offerings with pricing and features
 */

import { FAQItem, ServiceBase, StepItem, CTAData } from "@/types/common/shared";
import {
  LucideIcon,
  Target,
  TrendingUp,
  Zap,
  Users,
  Calendar,
  MessageCircle,
} from "lucide-react";

export interface Service extends ServiceBase {
  icon: LucideIcon; // Lucide icon for services page
  // Inherits title, description, price, features from ServiceBase
}

export type ProcessStep = StepItem;

export interface ServicesPageData {
  hero: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  cta: CTAData;
}

export const servicesPageData: ServicesPageData = {
  hero: {
    title: "Mes Services",
    subtitle:
      "Des accompagnements sur mesure pour chaque étape de votre parcours freelance",
  },
  services: {
    title: "Choisissez votre formule",
    subtitle:
      "Que vous ayez besoin d'un coup de boost ou d'un accompagnement long terme, il y a une solution adaptée",
  },
  process: {
    title: "Comment ça marche ?",
    subtitle: "Le processus en 4 étapes simples",
    steps: [
      {
        step: "01",
        title: "Réservez",
        description: "Choisissez un créneau qui vous convient via Calendly",
      },
      {
        step: "02",
        title: "Préparation",
        description:
          "Remplissez un questionnaire pour que je comprenne vos enjeux",
      },
      {
        step: "03",
        title: "Session",
        description:
          "On se retrouve en visio pour travailler sur vos objectifs",
      },
      {
        step: "04",
        title: "Suivi",
        description:
          "Vous recevez un plan d'action et les ressources nécessaires",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Comment choisir la bonne formule ?",
        a: "Commencez toujours par la séance découverte gratuite. On analysera ensemble votre situation et je vous recommanderai la formule la plus adaptée.",
      },
      {
        q: "Les résultats sont-ils garantis ?",
        a: "Sur les programmes 3 et 6 mois, oui. Si vous appliquez ce qu'on met en place et que vous n'obtenez pas de résultats, je prolonge l'accompagnement gratuitement jusqu'à ce que vous les atteigniez.",
      },
      {
        q: "Puis-je payer en plusieurs fois ?",
        a: "Oui, tous les programmes peuvent être payés en 2 à 3 fois sans frais. On en discute lors de la séance découverte.",
      },
      {
        q: "Combien de temps avant de voir des résultats ?",
        a: "La plupart de mes clients voient leurs premiers résultats (augmentation de tarifs, meilleure prospection) dans les 30 premiers jours. Les résultats durables (doublement des revenus) prennent généralement 3 à 6 mois.",
      },
      {
        q: "Je suis encore salarié, est-ce adapté pour moi ?",
        a: "Absolument ! Beaucoup de mes clients sont en transition salariat → freelance. Je les aide à préparer leur lancement pour partir sur de bonnes bases.",
      },
      {
        q: "Les séances se passent comment ?",
        a: "Tout se fait en visio (Zoom ou Google Meet). C'est plus flexible et tout aussi efficace qu'en présentiel. Chaque séance est enregistrée pour que vous puissiez la revoir.",
      },
    ],
  },
  cta: {
    title: "Prêt à passer à l'action ?",
    subtitle:
      "Réservez votre séance découverte gratuite et découvrons ensemble comment doubler vos revenus freelance",
    buttonText: "Réserver ma séance gratuite",
  },
};

// Featured services for the home page
export const featuredServices: Service[] = [
  {
    icon: Target,
    title: "Séance Découverte",
    description:
      "Un premier rendez-vous de 45 minutes pour analyser votre situation et débloquer vos premiers leviers.",
    price: "Gratuit",
    features: [
      "Analyse de votre situation actuelle",
      "Identification des blocages",
      "Plan d'action personnalisé",
      "Aucun engagement",
    ],
  },
  {
    icon: TrendingUp,
    title: "Accompagnement 3 mois",
    description:
      "Programme intensif pour passer de 5k€ à 10k€/mois et structurer votre activité freelance.",
    price: "À partir de 1 500€",
    features: [
      "6 séances de coaching individuelles",
      "Support WhatsApp illimité",
      "Outils et templates inclus",
      "Suivi de progression hebdomadaire",
    ],
  },
  {
    icon: Zap,
    title: "Session Stratégique",
    description:
      "Une séance de 2h pour résoudre un problème précis : positionnement, pricing, prospection...",
    price: "297€",
    features: [
      "2h de coaching intensif",
      "Plan d'action concret",
      "Replay de la session",
      "Suivi email pendant 7 jours",
    ],
  },
];

// Complete services list for the services page
export const allServices: Service[] = [
  {
    icon: Target,
    title: "Séance Découverte",
    description:
      "Un premier rendez-vous de 45 minutes pour analyser votre situation, identifier vos blocages et définir vos objectifs.",
    price: "Gratuit",
    features: [
      "Analyse complète de votre situation actuelle",
      "Identification des blocages principaux",
      "Définition d'objectifs clairs et mesurables",
      "Plan d'action personnalisé",
      "Aucun engagement de votre part",
    ],
  },
  {
    icon: Zap,
    title: "Session Stratégique",
    description:
      "Une séance intensive de 2h pour résoudre un problème spécifique : positionnement, pricing, prospection, négociation...",
    price: "297€",
    features: [
      "2 heures de coaching intensif en visio",
      "Focus sur un problème précis à résoudre",
      "Plan d'action détaillé et actionnable",
      "Replay vidéo de la session",
      "Suivi email pendant 7 jours",
      "Templates et ressources inclus",
    ],
  },
  {
    icon: TrendingUp,
    title: "Accompagnement 3 mois",
    description:
      "Programme intensif pour passer de 5k€ à 10k€/mois et structurer durablement votre activité freelance.",
    price: "À partir de 1 500€",
    features: [
      "6 séances de coaching individuelles (2h/séance)",
      "Support WhatsApp illimité 7j/7",
      "Outils, templates et checklist inclus",
      "Suivi de progression hebdomadaire",
      "Stratégie personnalisée et plan d'action",
      "Accès à vie aux ressources",
      "Garantie résultats ou prolongation gratuite",
    ],
  },
  {
    icon: Users,
    title: "Accompagnement 6 mois",
    description:
      "Pour aller au-delà de 10k€/mois, développer votre personal brand et créer un business scalable.",
    price: "À partir de 2 700€",
    features: [
      "12 séances de coaching individuelles",
      "Support WhatsApp illimité",
      "Stratégie de personal branding complète",
      "Aide à la création de contenu LinkedIn",
      "Optimisation de votre funnel commercial",
      "Automatisation et délégation",
      "Networking et introductions clients",
      "Garantie résultats ou prolongation gratuite",
    ],
  },
  {
    icon: Calendar,
    title: "Séance Ponctuelle",
    description:
      "Une séance de coaching de 1h pour un besoin spécifique : préparer une négociation, valider une décision...",
    price: "197€",
    features: [
      "1 heure de coaching en visio",
      "Réponse à vos questions urgentes",
      "Conseils actionnables immédiatement",
      "Replay de la session",
      "Idéal pour un coup de pouce rapide",
    ],
  },
  {
    icon: MessageCircle,
    title: "Mentorat Mensuel",
    description:
      "Un accompagnement récurrent pour garder le cap et avoir un regard extérieur sur vos décisions.",
    price: "297€/mois",
    features: [
      "2 séances de coaching par mois (1h)",
      "Support WhatsApp entre les séances",
      "Suivi de vos objectifs mensuels",
      "Accountability et motivation",
      "Sans engagement, résiliable à tout moment",
      "Replays des sessions",
    ],
  },
];
