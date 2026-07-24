import React, { useState, useEffect } from 'react';
import { FileText, Mail, Menu, X, Briefcase, BarChart2, Award, UserCheck, ChevronRight, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showcase', href: '#showcase', icon: BarChart2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: UserCheck },
    { name: 'Education', href: '#education', icon: Award },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#top"
          id="nav-logo-link"
          className="flex items-center gap-3.5 group"
          onClick={(e) => handleNavClick(e, '#top')}
        >
          <div className="w-9 h-9 rounded-md bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#F5F5F5] font-serif-editorial italic text-lg shadow-inner group-hover:border-neutral-500 transition-colors">
            AM
          </div>
          <div>
            <div className="text-[#F5F5F5] font-semibold tracking-tight text-base leading-snug flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="text-[11px] text-[#A3A3A3] font-medium tracking-wide uppercase hidden sm:block">
              Business Analyst & Developer
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 bg-[#171717] p-1.5 rounded-full border border-[#262626]">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-item-${link.name.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-medium transition-all ${
                  isActive
                    ? 'bg-[#262626] text-[#F5F5F5] border border-[#404040]'
                    : 'text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#1A1A1A]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#A3A3A3]" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="btn-view-resume-nav"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#171717] hover:bg-[#262626] text-[#F5F5F5] border border-[#262626] text-xs font-medium tracking-wide uppercase transition-all hover:border-[#404040]"
          >
            <FileText className="w-3.5 h-3.5 text-[#A3A3A3]" />
            <span>Resume</span>
          </button>

          <button
            id="btn-contact-nav"
            onClick={onOpenContact}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#F5F5F5] hover:bg-white text-[#0F0F0F] text-xs font-semibold tracking-wide uppercase transition-all shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="btn-mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-md bg-[#171717] text-[#A3A3A3] hover:text-[#F5F5F5] border border-[#262626] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="md:hidden bg-[#171717] border-b border-[#262626] px-4 pt-3 pb-6 mt-3 space-y-3 animate-fadeIn">
          <div className="space-y-1 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md text-xs uppercase tracking-widest font-medium text-[#A3A3A3] hover:bg-[#262626] hover:text-[#F5F5F5]"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#A3A3A3]" />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#737373]" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#262626] grid grid-cols-2 gap-2">
            <button
              id="mobile-btn-resume"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-md bg-[#262626] text-[#F5F5F5] border border-[#404040] text-xs font-medium uppercase tracking-wider"
            >
              <FileText className="w-4 h-4 text-[#A3A3A3]" />
              <span>Resume</span>
            </button>

            <button
              id="mobile-btn-contact"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-md bg-[#F5F5F5] text-[#0F0F0F] text-xs font-semibold uppercase tracking-wider"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
