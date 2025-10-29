/**
 * Workshops data for the coaching website
 * Contains workshop offerings with dates, pricing and details
 */

import {
  WorkshopsPageData,
  Workshop,
} from "@/types/data/workshops";

export const workshopsPageData: WorkshopsPageData = {
  hero: {
    title: "Ateliers Collectifs",
    subtitle:
      "Des workshops pratiques en petits groupes pour développer vos compétences business",
  },
  benefits: [
    {
      icon: "🎯",
      title: "Apprentissage ciblé",
      description:
        "Chaque atelier se concentre sur une compétence spécifique et actionnable",
    },
    {
      icon: "👥",
      title: "Petits groupes",
      description: "Maximum 15-20 participants pour des échanges de qualité",
    },
    {
      icon: "💡",
      title: "Networking",
      description: "Connectez-vous avec d'autres freelances IT ambitieux",
    },
  ],
  workshops: {
    title: "Prochains ateliers",
    subtitle:
      "Des sessions pratiques pour progresser rapidement sur un sujet précis",
  },
  included: {
    title: "Ce qui est inclus dans chaque atelier",
    items: [
      { text: "Session live en visio avec Laura" },
      { text: "Replay disponible pendant 30 jours" },
      { text: "Workbook et templates à télécharger" },
      { text: "Groupe WhatsApp dédié pendant 7 jours" },
      { text: "Certificat de participation" },
      { text: "Accès aux ressources et bonus" },
    ],
  },
  testimonials: {
    title: "Ce que disent les participants",
  },
  cta: {
    title: "Rejoignez le prochain atelier",
    subtitle:
      "Les places sont limitées pour garantir la qualité des échanges. Réservez votre place maintenant.",
    buttonText: "Réserver ma place",
  },
};

export const workshops: Workshop[] = [
  {
    title: "Pricing Strategy : Doublez votre TJM en 90 jours",
    description:
      "Apprenez à fixer vos tarifs en fonction de votre valeur réelle, pas de votre ancienneté ou de vos doutes.",
    date: "Jeudi 15 février 2025",
    duration: "3 heures (9h-12h)",
    participants: "Max 15 participants",
    level: "Débutant",
    price: "197€",
  },
  {
    title: "Personal Branding sur LinkedIn pour Devs",
    description:
      "Construisez votre marque personnelle et attirez des clients premium sans être un influenceur.",
    date: "Mardi 27 février 2025",
    duration: "2h30 (14h-16h30)",
    participants: "Max 12 participants",
    level: "Intermédiaire",
    price: "147€",
  },
  {
    title: "Prospection Efficace : Trouvez 3 clients en 30 jours",
    description:
      "Méthode éprouvée pour prospecter sans être commercial, même si vous détestez vendre.",
    date: "Jeudi 6 mars 2025",
    duration: "3 heures (9h-12h)",
    participants: "Max 15 participants",
    level: "Débutant",
    price: "197€",
  },
  {
    title: "Négociation : Gérez les objections et closing",
    description:
      "Techniques de négociation adaptées aux profils techniques pour closer vos deals sans stress.",
    date: "Mardi 18 mars 2025",
    duration: "2 heures (10h-12h)",
    participants: "Max 10 participants",
    level: "Intermédiaire",
    price: "147€",
  },
  {
    title: "Transition Salariat → Freelance : Le Guide Complet",
    description:
      "Toutes les étapes pour quitter votre CDI et lancer votre activité freelance sereinement.",
    date: "Jeudi 27 mars 2025",
    duration: "4 heures (9h-13h)",
    participants: "Max 20 participants",
    level: "Débutant",
    price: "247€",
  },
  {
    title: "Productivité & Time Management pour Freelances",
    description:
      "Travaillez moins, gagnez plus : méthodes pour doubler votre productivité sans burnout.",
    date: "Mardi 8 avril 2025",
    duration: "2h30 (14h-16h30)",
    participants: "Max 15 participants",
    level: "Intermédiaire",
    price: "147€",
  },
];

// Workshop testimonials
export const workshopTestimonials = [
  {
    name: "Marc Lefebvre",
    role: "Développeur React",
    text: "L'atelier sur le pricing m'a ouvert les yeux. J'ai augmenté mon TJM de 350€ à 600€ deux semaines après. Meilleur ROI de ma vie.",
  },
  {
    name: "Julie Moreau",
    role: "Consultante DevOps",
    text: "Super format : concret, actionnable, avec d'autres freelances qui vivent les mêmes challenges. Les templates fournis sont gold.",
  },
  {
    name: "Kevin Dufour",
    role: "Développeur Fullstack",
    text: "Je suis très introverti et l'idée de prospecter me terrorisait. L'atelier prospection m'a donné une méthode simple qui fonctionne. J'ai signé 2 clients le mois suivant.",
  },
];
