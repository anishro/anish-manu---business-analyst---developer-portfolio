import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Award, Code, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILL_GROUPS, PROJECTS, ATS_KEYWORDS } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
ANISH MANU
${PERSONAL_INFO.location} | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.emailPrimary} | ${PERSONAL_INFO.linkedin}

SUMMARY
${PERSONAL_INFO.summary}

WORK EXPERIENCE
${WORK_EXPERIENCE.map(
  (exp) => `
${exp.role} - ${exp.company} (${exp.period})
${exp.achievements.map((a) => `• ${a}`).join('\n')}
`
).join('\n')}

PROJECTS
${PROJECTS.map(
  (p) => `
${p.title} (${p.tools.join(', ')})
• ${p.description}
`
).join('\n')}

EDUCATION
${EDUCATION.map((e) => `• ${e.degree} - ${e.institution} (${e.period})`).join('\n')}

CERTIFICATIONS
${CERTIFICATIONS.map((c) => `• ${c.title} (${c.issuer})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0F0F]/90 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#171717] border border-[#262626] rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl my-8 overflow-hidden text-[#F5F5F5]">
        
        {/* Modal Header */}
        <div className="p-4 bg-[#0F0F0F] border-b border-[#262626] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5F5F5]" />
            <h3 className="font-medium text-sm text-[#F5F5F5] uppercase tracking-wider">Anish Manu — Complete Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-copy-resume-modal"
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#262626] hover:bg-[#333333] border border-[#404040] text-xs font-medium uppercase tracking-wider text-[#F5F5F5] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#A3A3A3]" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              id="btn-print-resume-modal"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#F5F5F5] hover:bg-white text-[#0F0F0F] text-xs font-medium uppercase tracking-wider transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              id="btn-close-resume-modal"
              onClick={onClose}
              className="p-1.5 rounded bg-[#262626] hover:bg-[#333333] text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Printable Document Frame */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-6 text-[#A3A3A3] bg-[#171717] font-sans text-xs sm:text-sm">
          
          {/* Document Header */}
          <div className="border-b border-[#262626] pb-6 text-center md:text-left space-y-2">
            <h1 className="text-3xl font-light text-[#F5F5F5] tracking-tight">{PERSONAL_INFO.name}</h1>
            <p className="text-[#F5F5F5] font-serif-editorial italic text-base">{PERSONAL_INFO.title}</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#737373] pt-1">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.emailPrimary}`} className="text-[#F5F5F5] hover:underline">{PERSONAL_INFO.emailPrimary}</a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#A3A3A3] hover:text-[#F5F5F5] hover:underline">LinkedIn Profile</a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-[11px] font-semibold text-[#F5F5F5] uppercase tracking-widest pb-1 border-b border-[#262626]">
              Executive Summary
            </h2>
            <p className="text-[#A3A3A3] leading-relaxed text-xs">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-[11px] font-semibold text-[#F5F5F5] uppercase tracking-widest pb-1 border-b border-[#262626]">
              Work Experience
            </h2>
            
            {WORK_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-wrap justify-between items-baseline">
                  <div className="font-medium text-[#F5F5F5] text-sm">
                    {exp.role} <span className="text-[#A3A3A3] font-normal">— {exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-[#737373]">{exp.period}</span>
                </div>
                <ul className="space-y-1 text-xs text-[#A3A3A3] pl-4 list-disc">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-[11px] font-semibold text-[#F5F5F5] uppercase tracking-widest pb-1 border-b border-[#262626]">
              Key Projects
            </h2>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="font-medium text-[#F5F5F5] text-xs">
                  {proj.title} <span className="font-normal text-[#737373]">| Tools: {proj.tools.join(', ')}</span>
                </div>
                <p className="text-xs text-[#A3A3A3]">{proj.description}</p>
              </div>
            ))}
          </div>

          {/* Education & Certs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-[11px] font-semibold text-[#F5F5F5] uppercase tracking-widest pb-2 border-b border-[#262626]">
                Education
              </h2>
              <div className="space-y-2 pt-2 text-xs">
                {EDUCATION.map((edu) => (
                  <div key={edu.id}>
                    <div className="font-medium text-[#F5F5F5]">{edu.degree}</div>
                    <div className="text-[#737373]">{edu.institution} ({edu.period})</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[11px] font-semibold text-[#F5F5F5] uppercase tracking-widest pb-2 border-b border-[#262626]">
                Certifications
              </h2>
              <div className="space-y-2 pt-2 text-xs">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="flex justify-between">
                    <span className="font-medium text-[#F5F5F5]">• {cert.title}</span>
                    <span className="text-[#737373] font-mono">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
