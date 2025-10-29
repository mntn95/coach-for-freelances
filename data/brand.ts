/**
 * Brand information data for the coaching website
 * Contains brand details and logo information
 */

export interface BrandInfo {
  name: string;
  description: string;
  logo: string;
}

export const brandInfo: BrandInfo = {
  name: "Laura Bianchi",
  description:
    "Coach professionnelle pour freelances IT qui veulent dépasser les 5k€/mois et trouver leur liberté.",
  logo: "/logo.png",
};
