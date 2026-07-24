import React from 'react';
import { GraduationCap, Award, CheckCircle, BarChart3, Trophy, Sparkles } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/resumeData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0F0F0F] text-[#F5F5F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Education Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171717] border border-[#262626] text-[11px] font-semibold uppercase tracking-widest text-[#A3A3A3]">
              <GraduationCap className="w-3.5 h-3.5 text-[#A3A3A3]" />
              <span>Academic Qualifications</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F5F5F5]">
              Education & <span className="font-serif-editorial italic font-normal text-white">Degrees</span>
            </h2>

            <div className="space-y-4 pt-2">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-[#171717] border border-[#262626] rounded-xl p-6 shadow-xl relative overflow-hidden group hover:border-[#404040] transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-[#262626]">
                    <div>
                      <h3 className="text-lg font-medium text-[#F5F5F5] group-hover:text-white transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-[#A3A3A3] font-medium mt-0.5">{edu.institution}</p>
                    </div>

                    <span className="px-3 py-1 rounded bg-[#262626] border border-[#404040] text-xs font-mono text-[#A3A3A3]">
                      {edu.period}
                    </span>
                  </div>

                  {edu.details && (
                    <p className="text-xs text-[#A3A3A3] mt-3 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Achievements */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171717] border border-[#262626] text-[11px] font-semibold uppercase tracking-widest text-[#A3A3A3]">
              <Award className="w-3.5 h-3.5 text-[#A3A3A3]" />
              <span>Credentials & Honors</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F5F5F5]">
              Certifications & <span className="font-serif-editorial italic font-normal text-white">Impact</span>
            </h2>

            {/* Certifications Cards */}
            <div className="space-y-3 pt-2">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl bg-[#171717] border border-[#262626] flex items-center justify-between gap-4 hover:border-[#404040] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#262626] border border-[#404040] flex items-center justify-center text-[#F5F5F5]">
                      {cert.icon === 'BarChart3' ? <BarChart3 className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-[#F5F5F5]">{cert.title}</h4>
                      <p className="text-xs text-[#A3A3A3]">Issued by {cert.issuer}</p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-800/40">
                    Verified
                  </span>
                </div>
              ))}
            </div>

            {/* Key Achievements Box */}
            <div className="p-6 rounded-xl bg-[#171717] border border-[#262626] space-y-3">
              <div className="flex items-center gap-2 text-[#F5F5F5] font-medium text-sm uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-[#A3A3A3]" />
                <span>Key Commercial Achievement</span>
              </div>

              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Generated consistent monthly business revenue exceeding <strong className="text-[#F5F5F5] font-medium">USD $7,500</strong>. Managed international accounts across APAC, Europe, and MEA regions with cross-functional execution and CRM data hygiene.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
