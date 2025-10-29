import { NAV_LABELS } from "@/constants/navigation";
import { brandInfo } from "@/data/brand";
import { NavigationButton } from "../../ui/navButton";

export function BottomBar() {
  return (
    <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p className="text-sm text-gray-400">
        © 2025 {brandInfo.name}. Tous droits réservés.
      </p>
      <NavigationButton page="legal" label={NAV_LABELS.LEGAL} />
    </div>
  );
}
