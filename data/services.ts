/**
 * Services data for the coaching website
 * Contains service offerings with pricing and features
 */

import { Target, TrendingUp, Zap, Users, Calendar, MessageCircle } from 'lucide-react';

export interface Service {
  icon: typeof Target;
  title: string;
  description: string;
  price: string;
  features: string[];
}

// Featured services for the home page
export const featuredServices: Service[] = [
  {
    icon: Target,
    title: 'Séance Découverte',
    description: 'Un premier rendez-vous de 45 minutes pour analyser votre situation et débloquer vos premiers leviers.',
    price: 'Gratuit',
    features: [
      'Analyse de votre situation actuelle',
      'Identification des blocages',
      'Plan d\'action personnalisé',
      'Aucun engagement'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Accompagnement 3 mois',
    description: 'Programme intensif pour passer de 5k€ à 10k€/mois et structurer votre activité freelance.',
    price: 'À partir de 1 500€',
    features: [
      '6 séances de coaching individuelles',
      'Support WhatsApp illimité',
      'Outils et templates inclus',
      'Suivi de progression hebdomadaire'
    ]
  },
  {
    icon: Zap,
    title: 'Session Stratégique',
    description: 'Une séance de 2h pour résoudre un problème précis : positionnement, pricing, prospection...',
    price: '297€',
    features: [
      '2h de coaching intensif',
      'Plan d\'action concret',
      'Replay de la session',
      'Suivi email pendant 7 jours'
    ]
  }
];

// Complete services list for the services page
export const allServices: Service[] = [
  {
    icon: Target,
    title: 'Séance Découverte',
    description: 'Un premier rendez-vous de 45 minutes pour analyser votre situation, identifier vos blocages et définir vos objectifs.',
    price: 'Gratuit',
    features: [
      'Analyse complète de votre situation actuelle',
      'Identification des blocages principaux',
      'Définition d\'objectifs clairs et mesurables',
      'Plan d\'action personnalisé',
      'Aucun engagement de votre part'
    ]
  },
  {
    icon: Zap,
    title: 'Session Stratégique',
    description: 'Une séance intensive de 2h pour résoudre un problème spécifique : positionnement, pricing, prospection, négociation...',
    price: '297€',
    features: [
      '2 heures de coaching intensif en visio',
      'Focus sur un problème précis à résoudre',
      'Plan d\'action détaillé et actionnable',
      'Replay vidéo de la session',
      'Suivi email pendant 7 jours',
      'Templates et ressources inclus'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Accompagnement 3 mois',
    description: 'Programme intensif pour passer de 5k€ à 10k€/mois et structurer durablement votre activité freelance.',
    price: 'À partir de 1 500€',
    features: [
      '6 séances de coaching individuelles (2h/séance)',
      'Support WhatsApp illimité 7j/7',
      'Outils, templates et checklist inclus',
      'Suivi de progression hebdomadaire',
      'Stratégie personnalisée et plan d\'action',
      'Accès à vie aux ressources',
      'Garantie résultats ou prolongation gratuite'
    ]
  },
  {
    icon: Users,
    title: 'Accompagnement 6 mois',
    description: 'Pour aller au-delà de 10k€/mois, développer votre personal brand et créer un business scalable.',
    price: 'À partir de 2 700€',
    features: [
      '12 séances de coaching individuelles',
      'Support WhatsApp illimité',
      'Stratégie de personal branding complète',
      'Aide à la création de contenu LinkedIn',
      'Optimisation de votre funnel commercial',
      'Automatisation et délégation',
      'Networking et introductions clients',
      'Garantie résultats ou prolongation gratuite'
    ]
  },
  {
    icon: Calendar,
    title: 'Séance Ponctuelle',
    description: 'Une séance de coaching de 1h pour un besoin spécifique : préparer une négociation, valider une décision...',
    price: '197€',
    features: [
      '1 heure de coaching en visio',
      'Réponse à vos questions urgentes',
      'Conseils actionnables immédiatement',
      'Replay de la session',
      'Idéal pour un coup de pouce rapide'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Mentorat Mensuel',
    description: 'Un accompagnement récurrent pour garder le cap et avoir un regard extérieur sur vos décisions.',
    price: '297€/mois',
    features: [
      '2 séances de coaching par mois (1h)',
      'Support WhatsApp entre les séances',
      'Suivi de vos objectifs mensuels',
      'Accountability et motivation',
      'Sans engagement, résiliable à tout moment',
      'Replays des sessions'
    ]
  }
];
