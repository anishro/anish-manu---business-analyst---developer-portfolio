import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, ChevronRight, Award, Sparkles } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/resumeData';

export const Experience: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'sales_bd' | 'web_dev'>('all');

  const filteredExperience = WORK_EXPERIENCE.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  return (
    <section id="experience" className="py-20 bg-[#0F0F0F] text-[#F5F5F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-[#262626] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171717] border border-[#262626] text-[11px] font-semibold uppercase tracking-widest text-[#A3A3A3] mb-2">
              <Briefcase className="w-3.5 h-3.5 text-[#A3A3A3]" />
              <span>Career History & Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F5F5F5]">
              Work <span className="font-serif-editorial italic font-normal text-white">Experience</span>
            </h2>
            <p className="text-[#A3A3A3] text-sm mt-2 max-w-2xl leading-relaxed">
              From achieving $7,500+ monthly B2B sales revenue across international markets to engineering responsive web applications for global clients.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#171717] p-1 rounded-lg border border-[#262626] text-xs self-start md:self-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition-all ${
                filterCategory === 'all'
                  ? 'bg-[#262626] text-[#F5F5F5] border border-[#404040]'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              All Roles ({WORK_EXPERIENCE.length})
            </button>
            <button
              onClick={() => setFilterCategory('sales_bd')}
              className={`px-3.5 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition-all ${
                filterCategory === 'sales_bd'
                  ? 'bg-[#262626] text-[#F5F5F5] border border-[#404040]'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Business & Sales
            </button>
            <button
              onClick={() => setFilterCategory('web_dev')}
              className={`px-3.5 py-1.5 rounded text-xs font-medium uppercase tracking-wider transition-all ${
                filterCategory === 'web_dev'
                  ? 'bg-[#262626] text-[#F5F5F5] border border-[#404040]'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Web Engineering
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-[#262626]">
          
          {filteredExperience.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Timeline Node Icon */}
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#171717] border border-[#404040] flex items-center justify-center text-[#F5F5F5] shadow-md z-10">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <div className="bg-[#171717] border border-[#262626] hover:border-[#404040] rounded-xl p-6 shadow-xl transition-all duration-300">
                    
                    {/* Header Details */}
                    <div className="flex flex-wrap items-start justify-between gap-2 pb-4 border-b border-[#262626]">
                      <div>
                        <span className="px-2.5 py-0.5 rounded bg-[#262626] text-[#F5F5F5] border border-[#404040] text-[10px] uppercase tracking-wider font-medium font-mono">
                          {exp.company}
                        </span>
                        <h3 className="text-xl font-medium text-[#F5F5F5] mt-2">{exp.role}</h3>
                      </div>

                      <div className="text-right text-xs text-[#A3A3A3]">
                        <div className="flex items-center gap-1 font-mono text-[#F5F5F5]">
                          <Calendar className="w-3.5 h-3.5 text-[#737373]" />
                          <span>{exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 text-[#737373]" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Summary paragraph */}
                    {exp.summary && (
                      <p className="text-xs sm:text-sm text-[#A3A3A3] mt-3 font-serif-editorial italic leading-relaxed">
                        "{exp.summary}"
                      </p>
                    )}

                    {/* Achievements List */}
                    <div className="mt-4 space-y-2">
                      <div className="text-[10px] font-semibold text-[#737373] uppercase tracking-widest">Key Highlights:</div>
                      {exp.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A3A3A3] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Tags */}
                    <div className="mt-5 pt-4 border-t border-[#262626] flex flex-wrap items-center gap-1.5">
                      {exp.skillsApplied.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded bg-[#0F0F0F] border border-[#262626] text-[#A3A3A3] text-[11px] font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
