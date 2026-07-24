import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { EducationCertifications } from './components/EducationCertifications';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'showcase', 'experience', 'skills', 'education'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5] font-sans selection:bg-[#F5F5F5] selection:text-[#0F0F0F]">
      {/* Top Navbar */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Header */}
      <Hero
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Project Showcase */}
      <ProjectShowcase />

      {/* Work Experience */}
      <Experience />

      {/* Skills Matrix & ATS Keywords */}
      <Skills />

      {/* Academic Education & Certifications */}
      <EducationCertifications />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
