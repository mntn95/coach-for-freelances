import { legalData } from "@/data/legal";
import { ScrollReveal } from "../../ui";

export function LegalContentSection() {
  return (
    <div className="space-y-8">
      {legalData.legal.map((section, index) => (
        <ScrollReveal key={index} delay={index * 0.1}>
          <div>
            <h2 className="text-gray-900 mb-4">{section.title}</h2>
            {section.items ? (
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                {section.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-gray-700">
                    <strong>{item.label} :</strong>{" "}
                    {item.label === "Site web" ? (
                      <a
                        href={`https://${item.value}`}
                        className="text-purple-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                ))}
              </div>
            ) : (
              <div className="prose prose-gray max-w-none">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
