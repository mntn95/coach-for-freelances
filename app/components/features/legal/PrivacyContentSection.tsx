import { legalData } from "@/data/legal";
import { AnimatedSection } from "../../ui/animated";

export function PrivacyContentSection() {
  return (
    <div className="space-y-8">
      {legalData.privacy.map((section, index) => (
        <AnimatedSection key={index} delay={index * 0.1}>
          <div>
            <h2 className="text-gray-900 mb-4">{section.title}</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-3">{section.content}</p>
              {section.listItems && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.includes("Calendly") ? (
                        <>
                          <strong>Calendly :</strong> pour la gestion des
                          rendez-vous (
                          <a
                            href="https://calendly.com/privacy"
                            className="text-purple-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            politique de confidentialité
                          </a>
                          )
                        </>
                      ) : item.includes("Vercel") ? (
                        <>
                          <strong>Vercel :</strong> pour l'hébergement du site (
                          <a
                            href="https://vercel.com/legal/privacy-policy"
                            className="text-purple-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            politique de confidentialité
                          </a>
                          )
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {section.title === "Utilisation des données" && (
                <p className="text-gray-700 mt-4">
                  <strong>
                    Nous ne vendons jamais vos données à des tiers.
                  </strong>
                </p>
              )}
              {section.title === "Vos droits" && (
                <p className="text-gray-700 mt-4">
                  Pour exercer vos droits, contactez-nous à :{" "}
                  <a
                    href={`mailto:${legalData.contact.email}`}
                    className="text-purple-600 hover:underline"
                  >
                    {legalData.contact.email}
                  </a>
                </p>
              )}
              {section.contactInfo && (
                <div className="bg-gray-50 rounded-lg p-6 mt-4">
                  <p className="text-gray-700">
                    <strong>Email :</strong> {section.contactInfo.email}
                  </p>
                  <p className="text-gray-700">
                    <strong>Téléphone :</strong> {section.contactInfo.phone}
                  </p>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      ))}
      <AnimatedSection delay={legalData.privacy.length * 0.1}>
        <p className="text-sm text-gray-500 italic">
          Dernière mise à jour : {legalData.lastUpdated}
        </p>
      </AnimatedSection>
    </div>
  );
}
