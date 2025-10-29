/**
 * Booking page data for the coaching website
 * Contains hero, info, expectations, calendly, and FAQ content
 */

import { FAQItem, IconItem, StepItem } from "@/types/common/shared";
import { LucideIcon, Calendar, Clock, Video, CheckCircle2 } from "lucide-react";

export interface InfoItem extends IconItem {
  icon: LucideIcon; // Lucide icon for booking page
}

export type ExpectationItem = StepItem;

export interface BookingData {
  hero: {
    title: string;
    subtitle: string;
  };
  info: {
    items: InfoItem[];
  };
  expectations: {
    title: string;
    subtitle: string;
    items: ExpectationItem[];
  };
  calendly: {
    title: string;
    subtitle: string;
    url: string;
    placeholder: {
      title: string;
      description: string;
      code: string;
    };
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
}

export const bookingData: BookingData = {
  hero: {
    title: "Réservez votre appel",
    subtitle:
      "Choisissez un créneau qui vous convient pour notre premier échange",
  },
  info: {
    items: [
      {
        icon: Clock,
        title: "45 minutes",
        description: "Durée de l'appel découverte",
      },
      {
        icon: Video,
        title: "En visio",
        description: "Via Zoom ou Google Meet",
      },
      {
        icon: Calendar,
        title: "100% gratuit",
        description: "Aucun engagement",
      },
      {
        icon: CheckCircle2,
        title: "Actionnable",
        description: "Vous repartez avec un plan",
      },
    ],
  },
  expectations: {
    title: "À quoi s'attendre pendant l'appel ?",
    subtitle: "Un échange honnête et structuré pour comprendre vos enjeux",
    items: [
      {
        step: "1",
        title: "Analyse de votre situation",
        description:
          "On fait le point sur votre activité actuelle, vos revenus, votre organisation, et vos frustrations.",
      },
      {
        step: "2",
        title: "Identification des blocages",
        description:
          "On identifie ce qui vous empêche de passer au niveau supérieur : prix, positionnement, mindset, prospection...",
      },
      {
        step: "3",
        title: "Définition d'objectifs clairs",
        description:
          "On fixe ensemble des objectifs concrets et mesurables pour les 3-6 prochains mois.",
      },
      {
        step: "4",
        title: "Plan d'action personnalisé",
        description:
          "Je vous donne des premiers quick wins actionnables immédiatement, même si on ne travaille pas ensemble.",
      },
      {
        step: "5",
        title: "Discussion sur l'accompagnement",
        description:
          "Si ça fait sens, on discute de comment je peux vous aider à atteindre vos objectifs. Sinon, pas de souci !",
      },
    ],
  },
  calendly: {
    title: "Choisissez votre créneau",
    subtitle: "Sélectionnez le jour et l'heure qui vous conviennent le mieux",
    url: "https://calendly.com/YOUR_CALENDLY_USERNAME/45min?hide_gdpr_banner=1",
    placeholder: {
      title: "Widget Calendly",
      description:
        'Remplacez "YOUR_CALENDLY_USERNAME" dans le code par votre nom d\'utilisateur Calendly pour activer le widget de réservation.',
      code: 'data-url="https://calendly.com/votre-nom-utilisateur/45min"',
    },
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "L'appel découverte est-il vraiment gratuit ?",
        a: "Oui, 100% gratuit et sans engagement. C'est un moment d'échange pour voir si on peut travailler ensemble.",
      },
      {
        q: "Dois-je préparer quelque chose ?",
        a: "Après votre réservation, vous recevrez un questionnaire à remplir. Ça me permet de mieux comprendre votre situation avant notre échange.",
      },
      {
        q: "Que se passe-t-il si je ne peux pas honorer mon créneau ?",
        a: "Aucun problème ! Vous pouvez annuler ou reporter jusqu'à 24h avant via le lien dans votre email de confirmation.",
      },
      {
        q: "Vais-je être poussé à acheter quelque chose ?",
        a: "Non. Si je pense pouvoir vous aider, je vous le dirai. Sinon, vous repartirez avec des conseils gratuits et actionnable. Sans pression.",
      },
      {
        q: "L'appel se fait par téléphone ou visio ?",
        a: "En visio (Zoom ou Google Meet). C'est plus pratique pour partager des ressources et créer une vraie connexion.",
      },
    ],
  },
};
