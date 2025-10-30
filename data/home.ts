/**
 * Home page data for the coaching website
 * Contains hero, stats, problems, services, testimonials, and CTA content
 */

import { StatItem, CTAData, IconItem, ServiceBase, TestimonialBase } from '@/types/common/shared';

export interface HeroData {
  badge: string;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  image: {
    src: string;
    alt: string;
  };
}

export type ProblemItem = IconItem;

export interface ServiceItem extends ServiceBase {
  icon: string; // String icon for home page
  // Inherits title, description, price, features from ServiceBase
}

export type TestimonialItem = TestimonialBase;

export interface HomeData {
  hero: HeroData;
  stats: {
    title: string;
    subtitle: string;
    items: StatItem[];
  };
  problems: {
    title: string;
    subtitle: string;
    items: ProblemItem[];
  };
  services: {
    title: string;
    subtitle: string;
    linkText: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    linkText: string;
  };
  cta: CTAData;
}

export const homeData: HomeData = {
  hero: {
    badge: '🚀 Coach pour freelances IT ambitieux',
    title: 'Passez de 5k€ à 10k€+/mois en tant que freelance IT',
    description:
      'Vous êtes développeur, DevOps ou consultant IT ? Vous tournez autour de 5k€/mois mais vous savez que vous valez plus ? Je vous aide à débloquer votre potentiel et à doubler vos revenus.',
    primaryButton: 'Réserver un appel gratuit',
    secondaryButton: 'Découvrir mon parcours',
    image: {
      src: 'https://images.unsplash.com/photo-1610387785204-6daf4e50e2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzYxNTY1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Laura Bianchi - Coach professionnelle',
    },
  },
  stats: {
    title: '',
    subtitle: '',
    items: [
      {
        value: '200+',
        label: 'Freelances accompagnés',
      },
      {
        value: '+120%',
        label: 'Augmentation moyenne TJM',
      },
      {
        value: '3 mois',
        label: 'Durée moyenne résultats',
      },
      {
        value: '98%',
        label: 'Taux de satisfaction',
      },
    ],
  },
  problems: {
    title: 'Vous vous reconnaissez ?',
    subtitle:
      'La plupart des freelances IT sont techniquement excellents, mais bloqués sur le business',
    items: [
      {
        icon: '😰',
        title: "Syndrome de l'imposteur",
        description: "Vous avez peur d'augmenter vos tarifs de peur de perdre vos clients",
      },
      {
        icon: '⏰',
        title: 'Surcharge de travail',
        description: 'Vous travaillez 50h/semaine mais vos revenus stagnent',
      },
      {
        icon: '🎯',
        title: 'Mauvais positionnement',
        description: 'Vous prenez tous les projets sans stratégie claire',
      },
      {
        icon: '💰',
        title: 'TJM trop bas',
        description: 'Vous facturez moins que votre vraie valeur sur le marché',
      },
    ],
  },
  services: {
    title: 'Comment je peux vous aider',
    subtitle: 'Des accompagnements adaptés à votre situation et vos objectifs',
    linkText: 'Voir tous les services →',
  },
  testimonials: {
    title: 'Ils ont doublé leurs revenus',
    subtitle: 'Des freelances comme vous qui ont franchi le cap',
    linkText: 'Lire tous les témoignages →',
  },
  cta: {
    title: "Prêt à passer à l'étape suivante ?",
    subtitle:
      'Réservez votre appel découverte gratuit de 45 minutes. Aucun engagement, juste une conversation honnête sur vos objectifs.',
    buttonText: 'Réserver mon appel gratuit',
  },
};
