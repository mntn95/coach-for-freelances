import { Linkedin, Mail, Phone } from 'lucide-react';
import { Image } from '../ui/image';
import type { Page } from '../../page';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Laura Bianchi Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-white">Laura Bianchi</span>
            </div>
            <p className="text-sm text-gray-400">
              Coach professionnelle pour freelances IT qui veulent dépasser les 5k€/mois et trouver leur liberté.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigate('about')}
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('services')}
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('workshops')}
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  Ateliers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('testimonials')}
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  Témoignages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('booking')}
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  Réserver un appel
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-purple-400" />
                <a href="mailto:contact@laurabianchi.fr" className="hover:text-purple-400 transition-colors">
                  contact@laurabianchi.fr
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-purple-400" />
                <span>+33 6 XX XX XX XX</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Linkedin size={16} className="text-purple-400" />
                <a href="#" className="hover:text-purple-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © 2025 Laura Bianchi. Tous droits réservés.
          </p>
          <button
            onClick={() => handleNavigate('legal')}
            className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
          >
            Mentions légales & Confidentialité
          </button>
        </div>
      </div>
    </footer>
  );
}
