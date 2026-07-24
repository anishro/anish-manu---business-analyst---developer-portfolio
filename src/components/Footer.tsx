import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0F0F] border-t border-[#262626] text-[#A3A3A3] py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#262626]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#171717] border border-[#262626] flex items-center justify-center text-[#F5F5F5] font-serif-editorial italic text-base">
                AM
              </div>
              <span className="text-[#F5F5F5] font-medium text-base tracking-tight">{PERSONAL_INFO.name}</span>
            </div>

            <p className="text-[#A3A3A3] leading-relaxed max-w-sm">
              Business Analyst & Development Executive delivering $7,500+ monthly revenue across international markets, backed by an MBA (MIT-WPU), BCA (Computer Applications), and 3+ years of React web engineering experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[#F5F5F5] font-medium uppercase tracking-widest text-[11px]">Navigation</div>
            <ul className="space-y-1.5 text-[#A3A3A3]">
              <li><a href="#showcase" className="hover:text-[#F5F5F5] transition-colors">Interactive Showcase</a></li>
              <li><a href="#experience" className="hover:text-[#F5F5F5] transition-colors">Career Experience</a></li>
              <li><a href="#skills" className="hover:text-[#F5F5F5] transition-colors">Skills & Competencies</a></li>
              <li><a href="#education" className="hover:text-[#F5F5F5] transition-colors">Education & Certifications</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[#F5F5F5] font-medium uppercase tracking-widest text-[11px]">Direct Contact</div>
            <div className="space-y-1.5 text-[#A3A3A3]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#737373]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#737373]" />
                <a href={`mailto:${PERSONAL_INFO.emailPrimary}`} className="hover:text-[#F5F5F5] transition-colors">{PERSONAL_INFO.emailPrimary}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#737373]" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[#F5F5F5] transition-colors">{PERSONAL_INFO.phone}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#737373] text-[11px]">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Portfolio constructed from authentic resume data.
          </div>

          <button
            id="btn-footer-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#171717] hover:bg-[#262626] text-[#A3A3A3] hover:text-[#F5F5F5] border border-[#262626] uppercase tracking-wider text-[11px] transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#A3A3A3]" />
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
