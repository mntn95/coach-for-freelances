# Plan d'Implémentation - 4 Points d'Audit

## 1. Examiner la migration vers le routing Next.js natif ou documenter l'approche SPA actuelle

### 📋 Analyse de la situation actuelle

- **Approche actuelle** : SPA (Single Page Application) avec navigation basée sur `useState`
- **Fichier principal** : `app/page.tsx` contient un switch statement pour gérer les pages
- **Navigation** : Utilisation de `onNavigate` callback passé en props partout
- **Scroll** : `useNavigation` hook gère le scroll vers le haut

### ✅ Option A : Documenter l'approche SPA actuelle (Recommandée pour maintenant)

**Changements à effectuer :**

1. **Créer `/docs/ARCHITECTURE.md`**

   - Section "Navigation & Routing"
   - Expliquer pourquoi SPA a été choisi
   - Documenter le flow de navigation actuel
   - Exemples de code pour ajouter une nouvelle page
   - Considérations SEO (si applicable)

2. **Ajouter des commentaires dans `app/page.tsx`**

   ```typescript
   /**
    * SPA Navigation System
    *
    * This application uses a Single Page Application (SPA) approach instead of
    * Next.js native routing. This was chosen for:
    * - Instant navigation without page reloads
    * - Shared state management across pages
    * - Simplified routing logic
    *
    * TODO: Consider migrating to Next.js App Router for:
    * - Better SEO
    * - Server-side rendering per page
    * - URL-based navigation
    */
   ```

3. **Documenter le hook `useNavigation`**
   - Expliquer son rôle
   - Documenter les limitations actuelles

### 🔄 Option B : Migration vers Next.js App Router (Future)

**Changements nécessaires (si migration décidée) :**

1. **Créer structure de routes Next.js**

   ```
   app/
     about/page.tsx
     services/page.tsx
     workshops/page.tsx
     testimonials/page.tsx
     booking/page.tsx
     legal/page.tsx
   ```

2. **Convertir les composants pages**

   - Remplacer `onNavigate` props par `useRouter()` de Next.js
   - Utiliser `Link` component pour la navigation
   - Adapter `useNavigation` hook ou le supprimer

3. **Mettre à jour les composants de navigation**
   - Header, Footer, MobileMenu
   - Remplacer `onNavigate` callbacks par `Link` components

**Estimation rocky** : ~2-3 jours de travail

---

## 2. Nettoyer les fichiers de types : supprimer les lignes vides excessives

### 📋 Fichiers identifiés avec lignes vides excessives

**Fichiers à nettoyer :**

1. **`types/components/ui/core.ts`**

   - Lignes 78-81 : 4 lignes vides consécutives à la fin
   - **Action** : Supprimer toutes les lignes vides après la ligne 76

2. **`types/navigation.ts`**

   - Vérifier et supprimer lignes vides inutiles

3. **Tous les fichiers dans `/types`**
   - Scanner tous les fichiers `.ts` dans `/types`
   - Règles à appliquer :
     - Maximum 1 ligne vide entre sections
     - Maximum 2 lignes vides avant un commentaire de section majeur
     - Pas de lignes vides à la fin du fichier (ou exactement 1 si nécessaire pour certains outils)

**Changements détaillés :**

```bash
# Fichiers à modifier exactement :
- types/components/ui/core.ts (lignes 78-81)
- types/components/ui/animation.ts (vérifier)
- types/components/ui/navigation.ts (vérifier)
- types/components/features/index.ts (vérifier)
- types/components/layout/index.ts (vérifier)
- types/common/shared.ts (vérifier)
- types/common/utils.ts (vérifier)
- types/index.ts (vérifier lignes vides entre sections)
```

**Script de nettoyage suggéré :**

- Créer un script Node.js pour automatiser le nettoyage
- Ou utiliser Prettier (voir point 3) pour formater automatiquement

---

## 3. Ajouter des outils de qualité : Prettier, scripts de formatage

### 📋 État actuel

- **Prettier** : ❌ Non installé
- **Scripts de formatage** : ❌ Aucun dans package.json
- **ESLint** : ✅ Présent (eslint.config.mjs)

### ✅ Changements à effectuer

**1. Installer Prettier et plugins**

```bash
npm install --save-dev prettier
```

**2. Créer `.prettierrc` à la racine**

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss você"]
}
```

**3. Créer `.prettierignore`**

```
node_modules
.next
dist
build
coverage
*.min.js
package-lock.json
tsconfig.tsbuildinfo
```

**4. Ajouter scripts dans `package.json`**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "lint:fix": "eslint --fix .",
    "type-check": "tsc --noEmit",
    "check-all": "npm run lint && npm run format:check && npm run type-check"
  }
}
```

**5. Installer prettier-plugin-tailwindcss (optionnel mais recommandé)**

```bash
npm install --save-dev prettier-plugin-tailwindcss
```

_Note: Classer automatiquement les classes Tailwind_

**6. Créer `.editorconfig` (optionnel mais recommandé)**

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = tab
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

**7. Créer un hook pre-commit (optionnel mais recommandé)**

- Utiliser `husky` et `lint-staged`
- Formater automatiquement avant commit

---

## 4. Standardiser les imports de types : utiliser principalement le baril /types/index.ts

### 📋 État actuel

- **Fichiers utilisant `@/types/navigation` directement** : 12 fichiers
- **Fichiers utilisant `@/types/components/*` directement** : 2 fichiers
- **Fichiers utilisant `@/types` (baril)** : ~20 fichiers
- **Fichier baril** : `types/index.ts` exporte déjà la plupart des types

### ✅ Changements à effectuer

**1. Vérifier que tous les types sont exportés depuis `types/index.ts`**

Types actuellement exportés via le baril :

- ✅ `Page`, `WithNavigation`, `WithNavigationAndPage`
- ✅ `CTAButtonProps`, `ImageProps`, `BadgeProps`, etc.
- ✅ `TestimonialCardProps`, `ServiceCardProps`, `WorkshopCardProps`

Types manquants à ajouter au baril :

- ❌ `DEFAULT_PAGE` (valeur, pas un type)
- ❌ `PAGE_VALUES` (valeur, optionnel)

**2. Mettre à jour `types/index.ts` pour exporter `DEFAULT_PAGE`**

```typescript
// Navigation types
export type { Page } from "./navigation";
export { DEFAULT_PAGE } from "./navigation"; // Ajouter cette ligne
```

**3. Fichiers à modifier (12 fichiers avec `@/types/navigation`) :**

```
app/components/features/home/ServicesSection.tsx
app/components/features/home/HeroSection.tsx
app/components/features/home/CTASection.tsx
app/components/features/home/TestimonialsSection.tsx
app/components/features/workshops/WorkshopsGridSection.tsx
app/components/features/services/ServicesGridSection.tsx
app/components/features/services/CTASection.tsx
app/components/features/workshops/CTASection.tsx
app/components/features/footer/NavigationSection.tsx
app/components/features/header/MobileMenu.tsx
app/page.tsx
hooks/useNavigation.ts
```

**Changement pour chaque fichier :**

```typescript
// AVANT
import type { Page } from "@/types/navigation";
import { DEFAULT_PAGE } from "@/types/navigation";

// APRÈS
import type { Page } from "@/types";
import { DEFAULT_PAGE } from "@/types";
```

**4. Fichiers à modifier (2 fichiers avec `@/types/components/*`) :**

```
app/components/features/cards/ServiceCard.tsx
app/components/features/header/MobileMenu.tsx
```

**ServiceCard.tsx :**

```typescript
// AVANT
import { ServiceCardProps } from "@/types/components/features/cards";

// APRÈS
import { ServiceCardProps } from "@/types";
```

**MobileMenu.tsx :**

```typescript
// AVANT
import type { MobileMenuProps } from "@/types/components/features";

// APRÈS
import type { MobileMenuProps } from "@/types";
```

**5. Vérifier tous les imports de types dans le projet**

- Lancer un grep pour trouver tous les imports depuis `/types/`
- S'assurer que tous passent par le baril `/types`

**Script de vérification :**

```bash
# Trouver tous les imports directs
grep -r "from.*@/types/" app hooks data --include="*.ts" --include="*.tsx" | \
  grep -v "from.*@/types['\"]" | \
  grep -v "from.*@/types/index"
```

---

## 📊 Récapitulatif des changements

### Fichiers à créer :

1. `docs/ARCHITECTURE.md` (documentation routing)
2. `.prettierrc` (config Prettier)
3. `.prettierignore` (fichiers à ignorer)
4. `.editorconfig` (optionnel)

### Fichiers à modifier :

1. `app/page.tsx` (ajouter commentaire SPA)
2. `types/index.ts` (exporter DEFAULT_PAGE)
3. `types/components/ui/core.ts` (nettoyer lignes vides)
4. `package.json` (ajouter scripts format)
5. **14 fichiers** pour standardiser les imports types

### Commandes à exécuter :

```bash
npm install --save-dev prettier prettier-plugin-tailwindcss
npm install --save-dev husky lint-staged  # Optionnel
```

### Priorité d'exécution :

1. ⚡ **Priorité 1** : Point 3 (Prettier) - Base pour la qualité du code
2. ⚡ **Priorité 2** : Point 4 (Imports types) - Cohérence du code
3. ⚡ **Priorité 3** : Point 2 (Nettoyage) - Facile, peut être automatisé
4. ⚡ **Priorité 4** : Point 1 (Documentation) - Important mais non-bloquant
