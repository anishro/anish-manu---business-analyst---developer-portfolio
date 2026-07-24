import React from 'react';
import { FileText, Mail, MapPin, Phone, Linkedin, ExternalLink, ArrowRight, TrendingUp, Code2, Database, Globe2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0F0F0F] text-[#F5F5F5]">
      {/* Background Subtle Gradient & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Intro & Bio */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#262626] text-[11px] uppercase tracking-widest text-[#A3A3A3] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-semibold text-[#F5F5F5]">Available for Business Analyst Roles</span>
              <span className="text-[#404040]">|</span>
              <span className="text-neutral-400">MBA (MIT-WPU)</span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F5F5F5] leading-none">
                Anish <span className="font-serif-editorial italic font-normal text-white">Manu</span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl font-normal text-[#A3A3A3] max-w-2xl leading-relaxed">
                Business Analyst & Business Development Executive <span className="text-[#737373]">—</span> Ex-Freelance Web Developer
              </p>
            </div>

            {/* Location & Quick Contact Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-[#A3A3A3]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#171717] border border-[#262626]">
                <MapPin className="w-3.5 h-3.5 text-[#A3A3A3]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#171717] border border-[#262626] hover:border-[#404040] hover:text-[#F5F5F5] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#A3A3A3]" />
                <span>{PERSONAL_INFO.emailPrimary}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#171717] border border-[#262626] hover:border-[#404040] hover:text-[#F5F5F5] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A3A3A3]" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#171717] border border-[#262626] hover:border-[#404040] hover:text-[#F5F5F5] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#A3A3A3]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[#737373]" />
              </a>
            </div>

            {/* Executive Summary */}
            <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed max-w-2xl pt-1">
              {PERSONAL_INFO.summary}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                id="hero-btn-explore-projects"
                onClick={() => scrollToSection('#showcase')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#F5F5F5] hover:bg-white text-[#0F0F0F] font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Interactive Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-open-resume"
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#171717] hover:bg-[#262626] text-[#F5F5F5] border border-[#262626] hover:border-[#404040] font-medium text-xs uppercase tracking-wider transition-all"
              >
                <FileText className="w-4 h-4 text-[#A3A3A3]" />
                <span>View Resume</span>
              </button>

              <button
                id="hero-btn-contact"
                onClick={onOpenContact}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-transparent hover:bg-[#171717] text-[#A3A3A3] hover:text-[#F5F5F5] border border-[#262626] font-medium text-xs uppercase tracking-wider transition-all"
              >
                <Mail className="w-4 h-4 text-[#A3A3A3]" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Key Skill Tags */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-[11px] text-[#737373] uppercase tracking-widest font-semibold mr-1">Competencies:</span>
              {['B2B Sales ($7.5k+/mo)', 'Requirements Gathering', 'SQL & Power BI', 'ReactJS & Frontend', 'CRM Analytics', 'APAC/Europe/MEA'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#171717] border border-[#262626] text-[#A3A3A3] text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Dynamic Profile Card & Stats Grid */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-[#171717] border border-[#262626] rounded-xl p-6 shadow-2xl">
              
              {/* Profile Avatar Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-[#262626]">
                <div className="relative">
                  {/* Editorial Avatar Badge */}
                  <div className="w-16 h-16 rounded-xl bg-[#0F0F0F] border border-[#333] flex items-center justify-center text-[#F5F5F5] font-serif-editorial italic text-2xl shadow-inner">
                    AM
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 rounded-full border-2 border-[#171717]" title="Available for Hiring">
                    <CheckCircle2 className="w-3 h-3 text-[#0F0F0F]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#F5F5F5] leading-tight">Anish Manu</h3>
                  <p className="text-xs text-[#A3A3A3] font-medium mt-0.5">Wiseguy Reports • Ex-TotalEnergies</p>
                  <p className="text-xs text-[#737373] mt-0.5">Udaipur & Pune, India</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <div className="bg-[#0F0F0F] p-4 rounded-lg border border-[#262626] hover:border-[#404040] transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#737373] uppercase tracking-wider mb-1">
                    <span>Target</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-light font-serif-editorial italic text-[#F5F5F5]">$7,500+</div>
                  <div className="text-[11px] text-[#A3A3A3] mt-0.5">Monthly USD B2B Sales</div>
                </div>

                <div className="bg-[#0F0F0F] p-4 rounded-lg border border-[#262626] hover:border-[#404040] transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#737373] uppercase tracking-wider mb-1">
                    <span>Tech Stack</span>
                    <Code2 className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="text-2xl font-light font-serif-editorial italic text-[#F5F5F5]">3+ Yrs</div>
                  <div className="text-[11px] text-[#A3A3A3] mt-0.5">React, SQL, Python</div>
                </div>

                <div className="bg-[#0F0F0F] p-4 rounded-lg border border-[#262626] hover:border-[#404040] transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#737373] uppercase tracking-wider mb-1">
                    <span>Markets</span>
                    <Globe2 className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="text-xl font-medium text-[#F5F5F5]">APAC/EU/MEA</div>
                  <div className="text-[11px] text-[#A3A3A3] mt-0.5">Global Client Growth</div>
                </div>

                <div className="bg-[#0F0F0F] p-4 rounded-lg border border-[#262626] hover:border-[#404040] transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#737373] uppercase tracking-wider mb-1">
                    <span>Education</span>
                    <Database className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <div className="text-xl font-medium text-[#F5F5F5]">MBA + BCA</div>
                  <div className="text-[11px] text-[#A3A3A3] mt-0.5">MIT-WPU & IBM Certs</div>
                </div>
              </div>

              {/* Quick Resume Highlights */}
              <div className="mt-6 pt-5 border-t border-[#262626] text-xs space-y-2">
                <div className="flex items-start gap-2 text-[#A3A3A3]">
                  <span className="text-[#F5F5F5] font-bold">•</span>
                  <span><strong className="text-[#F5F5F5]">Sales & Requirements:</strong> Discovery calls, client communications, CRM pipeline tracking.</span>
                </div>
                <div className="flex items-start gap-2 text-[#A3A3A3]">
                  <span className="text-[#F5F5F5] font-bold">•</span>
                  <span><strong className="text-[#F5F5F5]">Analytics & BI:</strong> SQL query creation, Power BI dashboards, KPI tracking.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
