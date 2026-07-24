import React, { useState } from 'react';
import { UserCheck, Search, Check, Copy, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { SKILL_GROUPS, ATS_KEYWORDS } from '../data/resumeData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedAts, setCopiedAts] = useState(false);

  const handleCopyAtsKeywords = () => {
    navigator.clipboard.writeText(ATS_KEYWORDS.join(', '));
    setCopiedAts(true);
    setTimeout(() => setCopiedAts(false), 2000);
  };

  return (
    <section id="skills" className="py-20 bg-[#121212] text-[#F5F5F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171717] border border-[#262626] text-[11px] font-semibold uppercase tracking-widest text-[#A3A3A3]">
            <UserCheck className="w-3.5 h-3.5 text-[#A3A3A3]" />
            <span>Technical & Strategic Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#F5F5F5]">
            Core Competencies & <span className="font-serif-editorial italic font-normal text-white">Skills</span>
          </h2>
          <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed">
            Bridging B2B client requirements, SQL & Power BI analytics, and modern React web engineering.
          </p>

          {/* Interactive Skill Search */}
          <div className="pt-3 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. SQL, React, B2B Sales, CRM)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-xs sm:text-sm text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:border-[#525252] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group) => {
            const filteredSkills = group.skills.filter((s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div
                key={group.category}
                className="bg-[#171717] border border-[#262626] rounded-xl p-6 shadow-xl space-y-6 hover:border-[#404040] transition-colors"
              >
                <div>
                  <h3 className="text-lg font-medium text-[#F5F5F5] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F5F5F5]" />
                    <span>{group.category}</span>
                  </h3>
                  <p className="text-xs text-[#A3A3A3] mt-1">{group.description}</p>
                </div>

                <div className="space-y-4">
                  {filteredSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-[#F5F5F5] flex items-center gap-1.5">
                          {skill.name}
                          {skill.highlight && (
                            <span className="px-1.5 py-0.2 bg-[#262626] text-[#F5F5F5] text-[9px] uppercase tracking-wider rounded border border-[#404040] font-mono">
                              Core
                            </span>
                          )}
                        </span>
                        <span className="text-[#737373] font-mono text-[11px]">{skill.level}%</span>
                      </div>

                      {/* Level Progress Bar */}
                      <div className="w-full bg-[#262626] h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#F5F5F5] h-full rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ATS Keywords Cloud Section */}
        <div className="mt-12 p-6 rounded-xl bg-[#171717] border border-[#262626]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#262626]">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#F5F5F5] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#A3A3A3]" />
                <span>ATS & Recruiter Search Keywords</span>
              </div>
              <p className="text-xs text-[#A3A3A3] mt-0.5">Optimized for automated resume screening systems</p>
            </div>

            <button
              id="btn-copy-ats-keywords"
              onClick={handleCopyAtsKeywords}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#262626] hover:bg-[#333333] border border-[#404040] text-xs font-medium uppercase tracking-wider text-[#F5F5F5] transition-colors"
            >
              {copiedAts ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Keywords!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A3A3A3]" />
                  <span>Copy ATS Keywords</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-4 flex flex-wrap gap-2">
            {ATS_KEYWORDS.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 rounded bg-[#0F0F0F] border border-[#262626] text-xs text-[#A3A3A3] font-mono hover:border-[#404040] transition-colors"
              >
                • {keyword}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
