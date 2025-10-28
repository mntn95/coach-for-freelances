/**
 * Testimonials data for the coaching website
 * Contains client testimonials with ratings and details
 */

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Thomas Dubois',
    role: 'Développeur Full-Stack',
    company: 'Freelance',
    content: 'En 3 mois avec Laura, je suis passé de 4k€ à 8k€/mois. Elle m\'a aidé à sortir de ma zone de confort et à enfin valoriser mes compétences.',
    rating: 5
  },
  {
    name: 'Sophie Martin',
    role: 'DevOps Engineer',
    company: 'Indépendante',
    content: 'Laura ne vend pas du rêve, elle donne des outils concrets. Grâce à elle, j\'ai doublé mon TJM et je travaille avec des clients qui me respectent.',
    rating: 5
  },
  {
    name: 'Alexandre Rousseau',
    role: 'Consultant Cloud',
    company: 'Freelance',
    content: 'J\'étais bloqué à 5k€/mois depuis 2 ans. Laura m\'a fait réaliser que le problème n\'était pas technique mais mental. Aujourd\'hui je facture 12k€/mois.',
    rating: 5
  }
];

// Extended testimonials for the testimonials page
export const extendedTestimonials: Testimonial[] = [
  {
    name: 'Thomas Dubois',
    role: 'Développeur Full-Stack',
    company: 'Freelance depuis 2020',
    content: 'En 3 mois avec Laura, je suis passé de 4k€ à 8k€/mois. Elle m\'a aidé à sortir de ma zone de confort et à enfin valoriser mes compétences. Le meilleur investissement de ma carrière.',
    rating: 5
  },
  {
    name: 'Amina Belkadi',
    role: 'DevOps Engineer',
    company: 'Ex-SSII, Freelance depuis 2021',
    content: 'Laura ne vend pas du rêve, elle donne des outils concrets. Grâce à elle, j\'ai doublé mon TJM et je travaille avec des clients qui me respectent. Game changer total.',
    rating: 5
  },
  {
    name: 'Alexandre Rousseau',
    role: 'Consultant Cloud AWS',
    company: 'Freelance',
    content: 'J\'étais bloqué à 5k€/mois depuis 2 ans. Laura m\'a fait réaliser que le problème n\'était pas technique mais mental. Aujourd\'hui je facture 12k€/mois et je travaille 30h/semaine.',
    rating: 5
  },
  {
    name: 'Marie Leclerc',
    role: 'Développeuse React',
    company: 'En transition CDI → Freelance',
    content: 'J\'avais peur de quitter mon CDI. Laura m\'a aidée à préparer ma transition et à partir sur de bonnes bases. 6 mois après, je gagne 40% de plus et j\'ai retrouvé ma liberté.',
    rating: 5
  },
  {
    name: 'Marco Romano',
    role: 'Tech Lead',
    company: 'Freelance depuis 2019',
    content: 'La prospection me terrorisait. Laura m\'a donné une méthode simple et efficace. En 1 mois, j\'ai signé 3 nouveaux clients sans me forcer. Son accompagnement est ultra pragmatique.',
    rating: 5
  },
  {
    name: 'Camille Petit',
    role: 'Data Engineer',
    company: 'Freelance',
    content: 'Laura comprend les enjeux des profils techniques. Pas de bullshit, juste des conseils actionnables. J\'ai augmenté mon TJM de 350€ à 650€ en 2 mois grâce à ses stratégies de pricing.',
    rating: 5
  },
  {
    name: 'Youssef Hassani',
    role: 'Développeur Backend',
    company: 'Freelance depuis 2022',
    content: 'Je travaillais 60h/semaine pour 5k€/mois. Laura m\'a aidé à restructurer mon activité. Maintenant je gagne 9k€ en travaillant 35h. C\'est possible et elle montre comment.',
    rating: 5
  },
  {
    name: 'Emma Durand',
    role: 'Développeuse Mobile',
    company: 'Freelance',
    content: 'Le syndrome de l\'imposteur me bloquait complètement. Laura m\'a aidée à reprendre confiance et à oser augmenter mes tarifs. Résultat : +130% de revenus en 4 mois.',
    rating: 5
  },
  {
    name: 'Kofi Mensah',
    role: 'Consultant DevSecOps',
    company: 'Freelance depuis 2018',
    content: 'J\'ai testé plusieurs coaches business. Laura est la seule qui comprend vraiment le monde IT. Ses conseils sont ultra ciblés et ça fait toute la différence.',
    rating: 5
  },
  {
    name: 'Chloé Bonnet',
    role: 'Développeuse Python',
    company: 'Freelance',
    content: 'Laura m\'a appris à dire non aux mauvais projets et à me positionner en experte. Ma vie pro a changé du tout au tout. Je recommande à 200%.',
    rating: 5
  },
  {
    name: 'Tiago Silva',
    role: 'Architecte Solution',
    company: 'Freelance depuis 2017',
    content: 'L\'accompagnement de Laura est un investissement, pas une dépense. Le ROI est juste insane. Je l\'ai récupéré en 1 mois et demi.',
    rating: 5
  },
  {
    name: 'Sarah Roux',
    role: 'Lead Developer',
    company: 'Freelance',
    content: 'Je pensais avoir atteint mon plafond. Laura m\'a montré que non. Elle m\'a aidée à scaler mon activité et à passer de 7k à 15k€/mois. Incroyable.',
    rating: 5
  }
];
