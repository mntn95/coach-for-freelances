import { ScrollReveal } from '../ScrollReveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function Legal() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-white mb-6">Mentions Légales</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-purple-100">
              Informations légales et politique de confidentialité
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Tabs defaultValue="legal" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="legal">Mentions légales</TabsTrigger>
                <TabsTrigger value="privacy">Politique de confidentialité</TabsTrigger>
              </TabsList>

              <TabsContent value="legal" className="space-y-8">
                {/* Éditeur */}
                <div>
                  <h2 className="text-gray-900 mb-4">Éditeur du site</h2>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                    <p className="text-gray-700"><strong>Nom :</strong> Laura Bianchi</p>
                    <p className="text-gray-700"><strong>Statut :</strong> Auto-entrepreneur / Micro-entreprise</p>
                    <p className="text-gray-700"><strong>SIRET :</strong> 456 789 123 45678</p>
                    <p className="text-gray-700"><strong>Adresse :</strong> 17 rue Gabriel Péri 93200 Saint-Denis</p>
                    <p className="text-gray-700"><strong>Email :</strong> contact@laurabianchi.fr</p>
                    <p className="text-gray-700"><strong>Téléphone :</strong> +33 6 12 34 56 78</p>
                  </div>
                </div>

                {/* Hébergeur */}
                <div>
                  <h2 className="text-gray-900 mb-4">Hébergement</h2>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                    <p className="text-gray-700"><strong>Hébergeur :</strong> Vercel Inc.</p>
                    <p className="text-gray-700"><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                    <p className="text-gray-700"><strong>Site web :</strong> <a href="https://vercel.com" className="text-purple-600 hover:underline">vercel.com</a></p>
                  </div>
                </div>

                {/* Propriété intellectuelle */}
                <div>
                  <h2 className="text-gray-900 mb-4">Propriété intellectuelle</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700">
                      L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                    <p className="text-gray-700">
                      La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                    </p>
                  </div>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="text-gray-900 mb-4">Cookies</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700">
                      Ce site n'utilise pas de cookies de tracking ou de publicité. Les seuls cookies utilisés sont des cookies strictement nécessaires au fonctionnement du site (session, préférences utilisateur).
                    </p>
                    <p className="text-gray-700">
                      Le widget Calendly peut déposer ses propres cookies conformément à sa politique de confidentialité.
                    </p>
                  </div>
                </div>

                {/* Crédits */}
                <div>
                  <h2 className="text-gray-900 mb-4">Crédits</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700">
                      <strong>Photos :</strong> Unsplash (licence libre)
                    </p>
                    <p className="text-gray-700">
                      <strong>Icons :</strong> Lucide Icons
                    </p>
                    <p className="text-gray-700">
                      <strong>Design :</strong> Laura Bianchi
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="privacy" className="space-y-8">
                {/* Introduction */}
                <div>
                  <h2 className="text-gray-900 mb-4">Introduction</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700">
                      La protection de vos données personnelles est une priorité. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles.
                    </p>
                  </div>
                </div>

                {/* Données collectées */}
                <div>
                  <h2 className="text-gray-900 mb-4">Données collectées</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-3">Nous collectons les données suivantes :</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Nom, prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone (optionnel)</li>
                      <li>Informations fournies dans les formulaires de contact ou questionnaires</li>
                      <li>Données de réservation via Calendly</li>
                    </ul>
                  </div>
                </div>

                {/* Utilisation des données */}
                <div>
                  <h2 className="text-gray-900 mb-4">Utilisation des données</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-3">Vos données sont utilisées pour :</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Gérer les rendez-vous et l'accompagnement</li>
                      <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                      <li>Améliorer nos services</li>
                      <li>Respecter nos obligations légales</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      <strong>Nous ne vendons jamais vos données à des tiers.</strong>
                    </p>
                  </div>
                </div>

                {/* Conservation */}
                <div>
                  <h2 className="text-gray-900 mb-4">Conservation des données</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700">
                      Vos données sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et au maximum 3 ans après notre dernier contact.
                    </p>
                  </div>
                </div>

                {/* Droits */}
                <div>
                  <h2 className="text-gray-900 mb-4">Vos droits</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                      <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                      <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                      <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                      <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@laurabianchi.fr" className="text-purple-600 hover:underline">contact@laurabianchi.fr</a>
                    </p>
                  </div>
                </div>

                {/* Sécurité */}
                <div>
                  <h2 className="text-gray-900 mb-4">Sécurité</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700">
                      Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
                    </p>
                  </div>
                </div>

                {/* Services tiers */}
                <div>
                  <h2 className="text-gray-900 mb-4">Services tiers</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-3">Nous utilisons les services suivants :</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Calendly :</strong> pour la gestion des rendez-vous (<a href="https://calendly.com/privacy" className="text-purple-600 hover:underline">politique de confidentialité</a>)</li>
                      <li><strong>Vercel :</strong> pour l'hébergement du site (<a href="https://vercel.com/legal/privacy-policy" className="text-purple-600 hover:underline">politique de confidentialité</a>)</li>
                    </ul>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="text-gray-900 mb-4">Contact</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700">
                      Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous :
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6 mt-4">
                      <p className="text-gray-700"><strong>Email :</strong> contact@laurabianchi.fr</p>
                      <p className="text-gray-700"><strong>Téléphone :</strong> +33 6 XX XX XX XX</p>
                    </div>
                  </div>
                </div>

                {/* Mise à jour */}
                <div>
                  <p className="text-sm text-gray-500 italic">
                    Dernière mise à jour : 27 octobre 2025
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
