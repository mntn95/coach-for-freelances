import { legalData } from '@/data/legal';
import { ScrollReveal } from '../../ui';

export const PrivacyContentSection = () => (
  <div className="space-y-8">
    {legalData.privacy.map((section, index) => (
      <ScrollReveal key={index} delay={index * 0.1}>
        <div>
          <h2 className="text-gray-900 mb-4">{section.title}</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-3">{section.content}</p>
            {section.listItems && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {section.listItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.includes('Calendly') && section.serviceLinks?.calendly ? (
                      <>
                        <strong>Calendly :</strong> pour la gestion des rendez-vous (
                        <a
                          href={section.serviceLinks.calendly.url}
                          className="text-purple-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {section.serviceLinks.calendly.text}
                        </a>
                        )
                      </>
                    ) : item.includes('Vercel') && section.serviceLinks?.vercel ? (
                      <>
                        <strong>Vercel :</strong> pour l&apos;hébergement du site (
                        <a
                          href={section.serviceLinks.vercel.url}
                          className="text-purple-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {section.serviceLinks.vercel.text}
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
            {section.additionalInfo && (
              <p className="text-gray-700 mt-4">
                <strong>{section.additionalInfo}</strong>
              </p>
            )}
            {section.contactText && (
              <p className="text-gray-700 mt-4">
                {section.contactText}{' '}
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
      </ScrollReveal>
    ))}
    <ScrollReveal delay={legalData.privacy.length * 0.1}>
      <p className="text-sm text-gray-500 italic">Dernière mise à jour : {legalData.lastUpdated}</p>
    </ScrollReveal>
  </div>
);
