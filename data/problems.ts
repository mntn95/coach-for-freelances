/**
 * Problems data for the coaching website
 * Contains common problems faced by IT freelancers
 */

export interface ProblemItem {
  icon: string;
  title: string;
  description: string;
}

export const problems: ProblemItem[] = [
  {
    icon: '😰',
    title: 'Syndrome de l\'imposteur',
    description: 'Vous avez peur d\'augmenter vos tarifs de peur de perdre vos clients'
  },
  {
    icon: '⏰',
    title: 'Surcharge de travail',
    description: 'Vous travaillez 50h/semaine mais vos revenus stagnent'
  },
  {
    icon: '🎯',
    title: 'Mauvais positionnement',
    description: 'Vous prenez tous les projets sans stratégie claire'
  },
  {
    icon: '💰',
    title: 'TJM trop bas',
    description: 'Vous facturez moins que votre vraie valeur sur le marché'
  }
];
