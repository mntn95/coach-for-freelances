/**
 * About page data for the coaching website
 * Contains Laura's story, values, expertise, and certifications
 */

import { IconItem } from "@/types/common/shared";
import {
  LucideIcon,
  CheckCircle2,
  Heart,
  Target,
  TrendingUp,
} from "lucide-react";

export interface ValueItem extends IconItem {
  icon: LucideIcon; // Lucide icon for about page
}

export interface CertificationItem {
  title: string;
  org: string;
  year: string;
}

export interface AboutData {
  hero: {
    title: string;
    subtitle: string;
  };
  story: {
    title: string;
    paragraphs: string[];
    quote: string;
  };
  values: {
    title: string;
    subtitle: string;
    items: ValueItem[];
  };
  expertise: {
    title: string;
    description: string;
    skills: string[];
    certifications: {
      title: string;
      subtitle: string;
      items: CertificationItem[];
    };
  };
  mission: {
    title: string;
    paragraphs: string[];
  };
}

export const aboutData: AboutData = {
  hero: {
    title: "À propos de Laura",
    subtitle:
      "De développeuse bloquée à 4k€/mois à coach pour freelances IT qui veulent leur liberté",
  },
  story: {
    title: "Mon histoire",
    paragraphs: [
      "En 2018, j'étais développeuse full-stack freelance. Techniquement au top. Mais financièrement ? Coincée à 4 000€/mois depuis 3 ans. Je travaillais 50h par semaine, je disais oui à tous les projets, et j'avais l'impression de courir dans une roue de hamster.",
      "Le déclic est venu quand un client m'a dit : \"Tu es la meilleure dev avec qui j'ai travaillé, mais tes tarifs sont ridiculement bas.\" J'ai réalisé que mon problème n'était pas technique, mais mental.",
      "J'ai investi dans ma première formation business. En 6 mois, j'ai triplé mes tarifs et doublé mes revenus. Aujourd'hui, je facture 15k€/mois en travaillant 25h par semaine. Et je consacre le reste de mon temps à aider d'autres freelances IT à faire la même transformation.",
    ],
    quote:
      "Votre valeur n'est pas déterminée par vos compétences techniques, mais par l'impact que vous créez pour vos clients.",
  },
  values: {
    title: "Mes valeurs",
    subtitle: "Ce qui guide mon accompagnement au quotidien",
    items: [
      {
        icon: Heart,
        title: "Authenticité",
        description:
          "Pas de fausses promesses. Je vous dis la vérité, même si elle dérange.",
      },
      {
        icon: Target,
        title: "Résultats concrets",
        description:
          "Moins de théorie, plus d'action. Chaque séance débouche sur des résultats mesurables.",
      },
      {
        icon: TrendingUp,
        title: "Ambition",
        description:
          "Je crois que vous pouvez aller plus loin que vous ne le pensez. Et je vais vous y pousser.",
      },
      {
        icon: CheckCircle2,
        title: "Pragmatisme",
        description:
          "Des stratégies testées et éprouvées, pas des théories à la mode.",
      },
    ],
  },
  expertise: {
    title: "Mon expertise",
    description:
      "Je ne suis pas coach généraliste. Je me spécialise uniquement dans l'accompagnement de freelances IT (développeurs, DevOps, consultants cloud, data engineers...) qui veulent passer un cap financier et retrouver leur liberté.",
    skills: [
      "Stratégie de pricing et négociation",
      "Positionnement de marché et personal branding",
      "Prospection et acquisition clients",
      "Productivité et gestion du temps",
      "Mindset entrepreneurial",
      "Transition salariat → freelance",
    ],
    certifications: {
      title: "Formations & Certifications",
      subtitle: "",
      items: [
        {
          title: "Certifiée Coach Professionnelle",
          org: "ICF (International Coach Federation)",
          year: "2021",
        },
        {
          title: "Master en Informatique",
          org: "Université Paris-Saclay",
          year: "2015",
        },
        {
          title: "Formation Business pour Freelances",
          org: "LiveMentor",
          year: "2019",
        },
        {
          title: "8 ans d'expérience en développement",
          org: "Full-stack JavaScript, Python, DevOps",
          year: "2015-2023",
        },
      ],
    },
  },
  mission: {
    title: "Ma mission",
    paragraphs: [
      "Aider 1 000 freelances IT francophones à dépasser les 10k€/mois d'ici 2027. Non pas pour devenir riches, mais pour retrouver leur liberté : liberté de choisir leurs projets, leurs clients, et de vivre la vie qu'ils veulent vraiment.",
      "Le freelancing, c'est la plus belle opportunité de notre génération. Mais seulement si on sait comment en tirer parti.",
    ],
  },
};
