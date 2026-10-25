import React, { useState, useEffect } from 'react';
import { Language, ContactFormData } from '../types';
import { translations } from '../data/translations';
import { Mail, Send, CheckCircle2, Copy, Check, Phone, Building, ArrowRight, X } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  prefilledService?: string;
  prefilledOrigin?: string;
  prefilledDestination?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  prefilledService = '',
  prefilledOrigin = '',
  prefilledDestination = ''
}) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: prefilledService,
    mode: '',
    origin: prefilledOrigin,
    destination: prefilledDestination,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successCode, setSuccessCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledOrigin || prefilledDestination) {
      setFormData((prev) => ({
        ...prev,
        origin: prefilledOrigin || prev.origin,
        destination: prefilledDestination || prev.destination
      }));
    }
  }, [prefilledOrigin, prefilledDestination]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = t.req;
    if (!formData.email.trim()) {
      errs.email = t.req;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = t.bad;
    }
    if (!formData.service) errs.service = t.req;
    if (!formData.message.trim()) errs.message = t.req;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable API logging
    setTimeout(() => {
      const generatedRef = `UN-RFQ-${new Date().getFullYear()}-${Math.floor(
        1000 + Math.random() * 9000
      )}`;
      setSuccessCode(generatedRef);
      setIsSubmitting(false);
    }, 600);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(`UNIONSVC RFQ [${successCode}] - ${formData.service}`);
    const body = encodeURIComponent(
      `Reference: ${successCode}\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Service: ${formData.service}\n` +
      `Origin: ${formData.origin || 'N/A'}\n` +
      `Destination: ${formData.destination || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:Contact@unionsvc.com?subject=${subject}&body=${body}`;
  };

  const handleCopyCode = () => {
    if (successCode) {
      navigator.clipboard.writeText(successCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#151515] text-white relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#D6B36A_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-bold">
              {t.kEye}
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f3e6c9] leading-tight">
              {t.kH}
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {t.kD}
            </p>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#1b1a17] border border-[#D6B36A]/30 flex items-center gap-4 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-[#D6B36A] text-[#141414] flex items-center justify-center flex-shrink-0 shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs text-white/60 block">{t.kMail}</span>
                <a
                  href="mailto:Contact@unionsvc.com"
                  className="text-base sm:text-lg font-mono font-bold text-[#f3e6c9] hover:underline"
                >
                  Contact@unionsvc.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="mailto:Contact@unionsvc.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D6B36A] text-[#f3e6c9] hover:bg-[#D6B36A] hover:text-[#141414] text-xs font-semibold transition-all"
              >
                <span>{t.kBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: RFQ Form */}
          <div className="lg:col-span-7 bg-[#1b1a17] border border-[#D6B36A]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            <h3 className="text-lg font-serif font-semibold text-[#f3e6c9] mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
              <Building className="w-5 h-5 text-[#D6B36A]" />
              <span>{lang === 'ar' ? 'نموذج طلب عرض أسعار / استفسار تجاري' : 'Request for Quote / Commercial Inquiry'}</span>
            </h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    {t.fName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 bg-[#141414] border rounded-xl text-sm text-white focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-400' : 'border-[#D6B36A]/40 focus:border-[#D6B36A]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    {t.fComp}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#141414] border border-[#D6B36A]/40 rounded-xl text-sm text-white focus:outline-none focus:border-[#D6B36A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    {t.fMail}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 bg-[#141414] border rounded-xl text-sm text-white focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-400' : 'border-[#D6B36A]/40 focus:border-[#D6B36A]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    {t.fTel}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#141414] border border-[#D6B36A]/40 rounded-xl text-sm text-white focus:outline-none focus:border-[#D6B36A] transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1">
                  {t.fSvc}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2.5 bg-[#141414] border rounded-xl text-sm text-white focus:outline-none transition-colors ${
                    errors.service ? 'border-rose-400' : 'border-[#D6B36A]/40 focus:border-[#D6B36A]'
                  }`}
                >
                  <option value="">{t.fSel}</option>
                  <option value={t.o1}>{t.o1}</option>
                  <option value={t.o2}>{t.o2}</option>
                  <option value={t.o3}>{t.o3}</option>
                  <option value={t.o4}>{t.o4}</option>
                  <option value={t.o5}>{t.o5}</option>
                  <option value={t.o6}>{t.o6}</option>
                  <option value={t.o7}>{t.o7}</option>
                </select>
                {errors.service && <p className="text-[11px] text-rose-400 mt-1">{errors.service}</p>}
              </div>

              {/* Optional Corridor Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    {t.fOrigin}
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    placeholder="e.g. Shanghai / Dubai"
                    className="w-full px-3.5 py-2.5 bg-[#141414] border border-[#D6B36A]/40 rounded-xl text-sm text-white focus:outline-none focus:border-[#D6B36A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    {t.fDest}
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Riyadh / Jeddah"
                    className="w-full px-3.5 py-2.5 bg-[#141414] border border-[#D6B36A]/40 rounded-xl text-sm text-white focus:outline-none focus:border-[#D6B36A] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1">
                  {t.fMsg}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    lang === 'ar'
                      ? 'يرجى تزويدنا بتفاصيل الشحنة، الأوزان، الحجوم، والجدول الزمني المطلوب...'
                      : 'Provide your shipment specifications, container requirements, weight, and timeline...'
                  }
                  className={`w-full px-3.5 py-2.5 bg-[#141414] border rounded-xl text-sm text-white focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-rose-400' : 'border-[#D6B36A]/40 focus:border-[#D6B36A]'
                  }`}
                ></textarea>
                {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] font-bold text-sm hover:shadow-[0_0_25px_rgba(214,179,106,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.fSending : t.fSend}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Confirmation Modal */}
      {successCode && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1b1a17] border-2 border-[#D6B36A] rounded-2xl p-6 sm:p-8 max-w-lg w-full text-center space-y-5 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#f3e6c9]">
                {t.successTitle}
              </h3>
              <p className="text-xs text-white/50 mt-1">{t.successRef}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-xl bg-[#141414] border border-[#D6B36A]/50">
                <span className="font-mono text-base font-bold text-[#D6B36A]">
                  {successCode}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="text-white/60 hover:text-white p-1"
                  title="Copy Reference ID"
                >
                  {copiedCode ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {t.successMsg}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleOpenMailClient}
                className="flex-1 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] font-bold text-xs hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{t.successActionEmail}</span>
              </button>
              <button
                type="button"
                onClick={() => setSuccessCode(null)}
                className="py-2.5 px-6 rounded-full border border-white/20 text-white text-xs font-semibold hover:border-white transition-colors"
              >
                {t.successActionClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
