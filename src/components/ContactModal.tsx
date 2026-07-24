import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Phone, MapPin, Building, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    roleType: 'Full-Time Business Analyst',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      roleType: 'Full-Time Business Analyst',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0F0F]/90 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#171717] border border-[#262626] rounded-xl w-full max-w-lg shadow-2xl overflow-hidden text-[#F5F5F5] my-8">
        
        {/* Modal Top Bar */}
        <div className="p-4 bg-[#0F0F0F] border-b border-[#262626] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#A3A3A3]" />
            <h3 className="font-medium text-xs uppercase tracking-wider text-[#F5F5F5]">Connect with Anish Manu</h3>
          </div>

          <button
            id="btn-close-contact-modal"
            onClick={onClose}
            className="p-1.5 rounded bg-[#262626] hover:bg-[#333333] text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-xl bg-[#262626] border border-[#404040] text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-light text-[#F5F5F5]">Message <span className="font-serif-editorial italic">Logged</span></h4>
                <p className="text-xs text-[#A3A3A3] mt-1 max-w-xs mx-auto">
                  Thank you for reaching out, {formData.name}. Anish Manu will respond directly to <strong className="text-[#F5F5F5]">{formData.email}</strong> shortly.
                </p>
              </div>

              <div className="p-3 bg-[#0F0F0F] rounded border border-[#262626] text-xs font-mono text-[#A3A3A3]">
                CRM Lead Record ID: #AM-LEAD-{Math.floor(Math.random() * 8999 + 1000)}
              </div>

              <button
                id="btn-contact-done"
                onClick={handleReset}
                className="w-full py-2.5 rounded bg-[#F5F5F5] hover:bg-white text-[#0F0F0F] font-medium text-xs uppercase tracking-wider transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div>
                <label className="block text-[#A3A3A3] font-medium uppercase tracking-wider text-[10px] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0F0F0F] border border-[#262626] rounded p-2.5 text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:border-[#404040] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#A3A3A3] font-medium uppercase tracking-wider text-[10px] mb-1">Corporate Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0F0F0F] border border-[#262626] rounded p-2.5 text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:border-[#404040] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#A3A3A3] font-medium uppercase tracking-wider text-[10px] mb-1">Company / Organization</label>
                <input
                  type="text"
                  placeholder="e.g. Global Tech Solutions"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-[#0F0F0F] border border-[#262626] rounded p-2.5 text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:border-[#404040] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#A3A3A3] font-medium uppercase tracking-wider text-[10px] mb-1">Engagement Type</label>
                <select
                  value={formData.roleType}
                  onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                  className="w-full bg-[#0F0F0F] border border-[#262626] rounded p-2.5 text-[#F5F5F5] focus:outline-none focus:border-[#404040]"
                >
                  <option value="Full-Time Business Analyst">Full-Time Business Analyst / BDE Hiring</option>
                  <option value="Pre-Sales Consulting">Pre-Sales & Market Research Consulting</option>
                  <option value="Web Development Project">Freelance Web App Development</option>
                  <option value="General Inquiry">General Professional Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[#A3A3A3] font-medium uppercase tracking-wider text-[10px] mb-1">Message / Requirements Brief</label>
                <textarea
                  rows={3}
                  placeholder="Outline your project scope, role opportunity, or timeline requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0F0F0F] border border-[#262626] rounded p-2.5 text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:border-[#404040] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="btn-submit-contact-form"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded bg-[#F5F5F5] hover:bg-white text-[#0F0F0F] font-medium uppercase tracking-wider text-xs shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry</span>
                </button>
              </div>

              <div className="pt-2 text-center text-[11px] text-[#737373]">
                Direct Email: <a href={`mailto:${PERSONAL_INFO.emailPrimary}`} className="text-[#F5F5F5] underline">{PERSONAL_INFO.emailPrimary}</a>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
