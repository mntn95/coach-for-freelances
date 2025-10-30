import { contactInfo } from '@/data/contact';
import { Linkedin, Mail, Phone } from 'lucide-react';

const ContactSection = () => (
  <div>
    <h3 className="text-white mb-4">Contact</h3>
    <ul className="space-y-3">
      <li className="flex items-center space-x-3 text-sm">
        <Mail size={16} className="text-purple-400" />
        <a
          href={`mailto:${contactInfo.email}`}
          className="hover:text-purple-400 transition-colors"
          aria-label={`Send email to ${contactInfo.email}`}
        >
          {contactInfo.email}
        </a>
      </li>
      <li className="flex items-center space-x-3 text-sm">
        <Phone size={16} className="text-purple-400" />
        <span>{contactInfo.phone}</span>
      </li>
      <li className="flex items-center space-x-3 text-sm">
        <Linkedin size={16} className="text-purple-400" />
        <a
          href={contactInfo.linkedin}
          className="hover:text-purple-400 transition-colors"
          aria-label="Visit LinkedIn profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
);

export { ContactSection };
