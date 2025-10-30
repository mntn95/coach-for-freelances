import { NAV_LABELS } from "@/constants/navigation";
import type { Page } from "@/types";
import { NavigationButton } from "../../ui";

export function NavigationSection() {
  const navigationItems: Array<{ page: Page; label: string }> = [
    { page: "about", label: NAV_LABELS.ABOUT },
    { page: "services", label: NAV_LABELS.SERVICES },
    { page: "workshops", label: NAV_LABELS.WORKSHOPS },
    { page: "testimonials", label: NAV_LABELS.TESTIMONIALS },
    { page: "booking", label: NAV_LABELS.BOOKING },
  ];

  return (
    <div>
      <h3 className="text-white mb-4">Navigation</h3>
      <ul className="space-y-2">
        {navigationItems.map((item) => (
          <li key={item.page}>
            <NavigationButton page={item.page} label={item.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}
