/**
 * Testimonials data for the coaching website
 * Contains client testimonials with ratings and details
 */

import { TestimonialsPageData, Testimonial } from "@/types/data/testimonials";

export const testimonialsPageData: TestimonialsPageData = {
  hero: {
    title: "Témoignages",
    subtitle:
      "Des freelances IT comme vous qui ont doublé leurs revenus et retrouvé leur liberté",
  },
  stats: [
    { value: "200+", label: "Freelances accompagnés" },
    { value: "+120%", label: "Augmentation moyenne revenus" },
    { value: "3 mois", label: "Durée moyenne résultats" },
    { value: "98%", label: "Taux de satisfaction" },
  ],
  testimonials: {
    title: "Ce qu'ils disent de leur transformation",
    subtitle: "Des résultats concrets, des parcours inspirants",
  },
  successStories: {
    title: "Histoires de réussite",
    subtitle:
      "Découvrez en détail comment certains de mes clients ont transformé leur activité",
    stories: [
      {
        name: "Thomas Dubois",
        role: "Développeur Full-Stack",
        before: "4k€/mois, 50h/semaine",
        after: "8k€/mois, 35h/semaine",
        duration: "3 mois",
        story:
          "Thomas était un excellent développeur mais il ne savait pas vendre ses compétences. Il acceptait tous les projets par peur de dire non. Ensemble, on a travaillé sur son positionnement, son pricing et sa confiance. En 3 mois, il a doublé son TJM et appris à sélectionner ses clients. Aujourd'hui, il travaille moins et gagne plus.",
      },
      {
        name: "Marie Leclerc",
        role: "Développeuse React",
        before: "CDI à 42k€/an",
        after: "Freelance à 7k€/mois (84k€/an)",
        duration: "6 mois de préparation",
        story:
          "Marie voulait devenir freelance mais avait peur de sauter le pas. On a préparé sa transition pendant 6 mois : positionnement, création de son offre, prospection, premiers clients en side project. Quand elle a quitté son CDI, elle avait déjà 3 clients signés. 6 mois plus tard, elle gagne 2x plus et a retrouvé sa liberté.",
      },
      {
        name: "Alexandre Rousseau",
        role: "Consultant Cloud AWS",
        before: "5k€/mois stagnant depuis 2 ans",
        after: "12k€/mois, 30h/semaine",
        duration: "4 mois",
        story:
          "Alexandre avait un énorme syndrome de l'imposteur. Pourtant, c'est un expert AWS reconnu. Le blocage était 100% mental. On a travaillé sur sa confiance, son personal branding LinkedIn, et sa stratégie de prospection. En 4 mois, il a triplé son TJM et travaille maintenant avec des scale-ups qui valorisent son expertise.",
      },
    ],
  },
  videoTestimonials: {
    title: "Témoignages vidéo",
    subtitle: "Ils racontent leur parcours en vidéo",
    videos: [
      {
        id: 1,
        title: "Témoignage #1",
        thumbnail:
          "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYxNTM1ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: 2,
        title: "Témoignage #2",
        thumbnail:
          "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYxNTM1ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id: 3,
        title: "Témoignage #3",
        thumbnail:
          "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYxNTM1ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    placeholder: "* Vidéos disponibles prochainement",
  },
};

export const testimonials: Testimonial[] = [
  {
    name: "Thomas Dubois",
    role: "Développeur Full-Stack",
    company: "Freelance",
    content:
      "En 3 mois avec Laura, je suis passé de 4k€ à 8k€/mois. Elle m'a aidé à sortir de ma zone de confort et à enfin valoriser mes compétences.",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    role: "DevOps Engineer",
    company: "Indépendante",
    content:
      "Laura ne vend pas du rêve, elle donne des outils concrets. Grâce à elle, j'ai doublé mon TJM et je travaille avec des clients qui me respectent.",
    rating: 5,
  },
  {
    name: "Alexandre Rousseau",
    role: "Consultant Cloud",
    company: "Freelance",
    content:
      "J'étais bloqué à 5k€/mois depuis 2 ans. Laura m'a fait réaliser que le problème n'était pas technique mais mental. Aujourd'hui je facture 12k€/mois.",
    rating: 5,
  },
];

// Extended testimonials for the testimonials page
export const extendedTestimonials: Testimonial[] = [
  {
    name: "Thomas Dubois",
    role: "Développeur Full-Stack",
    company: "Freelance depuis 2020",
    content:
      "En 3 mois avec Laura, je suis passé de 4k€ à 8k€/mois. Elle m'a aidé à sortir de ma zone de confort et à enfin valoriser mes compétences. Le meilleur investissement de ma carrière.",
    rating: 5,
  },
  {
    name: "Amina Belkadi",
    role: "DevOps Engineer",
    company: "Ex-SSII, Freelance depuis 2021",
    content:
      "Laura ne vend pas du rêve, elle donne des outils concrets. Grâce à elle, j'ai doublé mon TJM et je travaille avec des clients qui me respectent. Game changer total.",
    rating: 5,
  },
  {
    name: "Alexandre Rousseau",
    role: "Consultant Cloud AWS",
    company: "Freelance",
    content:
      "J'étais bloqué à 5k€/mois depuis 2 ans. Laura m'a fait réaliser que le problème n'était pas technique mais mental. Aujourd'hui je facture 12k€/mois et je travaille 30h/semaine.",
    rating: 5,
  },
  {
    name: "Marie Leclerc",
    role: "Développeuse React",
    company: "En transition CDI → Freelance",
    content:
      "J'avais peur de quitter mon CDI. Laura m'a aidée à préparer ma transition et à partir sur de bonnes bases. 6 mois après, je gagne 40% de plus et j'ai retrouvé ma liberté.",
    rating: 5,
  },
  {
    name: "Marco Romano",
    role: "Tech Lead",
    company: "Freelance depuis 2019",
    content:
      "La prospection me terrorisait. Laura m'a donné une méthode simple et efficace. En 1 mois, j'ai signé 3 nouveaux clients sans me forcer. Son accompagnement est ultra pragmatique.",
    rating: 5,
  },
  {
    name: "Camille Petit",
    role: "Data Engineer",
    company: "Freelance",
    content:
      "Laura comprend les enjeux des profils techniques. Pas de bullshit, juste des conseils actionnables. J'ai augmenté mon TJM de 350€ à 650€ en 2 mois grâce à ses stratégies de pricing.",
    rating: 5,
  },
  {
    name: "Youssef Hassani",
    role: "Développeur Backend",
    company: "Freelance depuis 2022",
    content:
      "Je travaillais 60h/semaine pour 5k€/mois. Laura m'a aidé à restructurer mon activité. Maintenant je gagne 9k€ en travaillant 35h. C'est possible et elle montre comment.",
    rating: 5,
  },
  {
    name: "Emma Durand",
    role: "Développeuse Mobile",
    company: "Freelance",
    content:
      "Le syndrome de l'imposteur me bloquait complètement. Laura m'a aidée à reprendre confiance et à oser augmenter mes tarifs. Résultat : +130% de revenus en 4 mois.",
    rating: 5,
  },
  {
    name: "Kofi Mensah",
    role: "Consultant DevSecOps",
    company: "Freelance depuis 2018",
    content:
      "J'ai testé plusieurs coaches business. Laura est la seule qui comprend vraiment le monde IT. Ses conseils sont ultra ciblés et ça fait toute la différence.",
    rating: 5,
  },
  {
    name: "Chloé Bonnet",
    role: "Développeuse Python",
    company: "Freelance",
    content:
      "Laura m'a appris à dire non aux mauvais projets et à me positionner en experte. Ma vie pro a changé du tout au tout. Je recommande à 200%.",
    rating: 5,
  },
  {
    name: "Tiago Silva",
    role: "Architecte Solution",
    company: "Freelance depuis 2017",
    content:
      "L'accompagnement de Laura est un investissement, pas une dépense. Le ROI est juste insane. Je l'ai récupéré en 1 mois et demi.",
    rating: 5,
  },
  {
    name: "Sarah Roux",
    role: "Lead Developer",
    company: "Freelance",
    content:
      "Je pensais avoir atteint mon plafond. Laura m'a montré que non. Elle m'a aidée à scaler mon activité et à passer de 7k à 15k€/mois. Incroyable.",
    rating: 5,
  },
];
