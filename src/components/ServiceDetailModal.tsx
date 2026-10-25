import React from 'react';
import { Language, ServiceItem } from '../types';
import { translations } from '../data/translations';
import { SERVICE_DETAILS_DATA } from '../data/services';
import {
  X,
  Truck,
  PackageCheck,
  Cpu,
  Network,
  ThermometerSnowflake,
  Warehouse,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  lang: Language;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  lang,
  onSelectForQuote
}) => {
  const t = translations[lang];

  if (!service) return null;

  const details = SERVICE_DETAILS_DATA[service.id]?.[lang] || SERVICE_DETAILS_DATA.transportation[lang];

  const getServiceIcon = () => {
    switch (service.id) {
      case 'transportation':
        return <Truck className="w-6 h-6 text-[#D6B36A]" />;
      case 'coordination':
        return <PackageCheck className="w-6 h-6 text-[#D6B36A]" />;
      case 'technology':
        return <Cpu className="w-6 h-6 text-[#D6B36A]" />;
      case 'integration':
        return <Network className="w-6 h-6 text-[#D6B36A]" />;
      case 'coldchain':
        return <ThermometerSnowflake className="w-6 h-6 text-[#D6B36A]" />;
      case 'warehousing':
        return <Warehouse className="w-6 h-6 text-[#D6B36A]" />;
      default:
        return <Truck className="w-6 h-6 text-[#D6B36A]" />;
    }
  };

  const handleRequestQuote = () => {
    const serviceName = (t as any)[service.titleKey] || service.id;
    onSelectForQuote(serviceName);
    onClose();

    // Scroll to contact form
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#161513] border border-[#D6B36A]/50 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden my-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with image if available */}
        {service.image && (
          <div className="relative h-44 sm:h-52 w-full overflow-hidden">
            <img
              src={service.image}
              alt="Service Visual"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-[#161513]/50 to-transparent"></div>
            <button
              onClick={onClose}
              className="absolute top-4 end-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 hover:border-[#D6B36A] flex items-center justify-center text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1c1b18] border border-[#D6B36A] flex items-center justify-center flex-shrink-0">
              {getServiceIcon()}
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D6B36A] font-semibold block mb-1">
                {service.badgeKey}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#f3e6c9]">
                {(t as any)[service.titleKey]}
              </h3>
            </div>
          </div>

          {/* Overview */}
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {details.overview}
          </p>

          {/* Core Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#D6B36A] font-semibold">
              {lang === 'ar' ? 'القدرات والميزات التشغيلية:' : 'Core Operational Capabilities:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {details.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#1c1b18] border border-white/5 text-xs text-white/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D6B36A] flex-shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Phases */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#D6B36A] font-semibold">
              {lang === 'ar' ? 'مراحل ومسار تنفيذ الخدمة:' : 'Execution Workflow & Stages:'}
            </h4>
            <div className="space-y-2.5">
              {details.workflow.map((w, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#1a1916] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                >
                  <span className="font-semibold text-[#f3e6c9] sm:w-1/3">
                    {w.step}
                  </span>
                  <span className="text-white/60 sm:w-2/3">
                    {w.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal for */}
          <div className="p-3.5 rounded-xl bg-[#1e1c18] border border-[#D6B36A]/20 flex items-center gap-3 text-xs">
            <Building2 className="w-4 h-4 text-[#D6B36A] flex-shrink-0" />
            <p className="text-white/80">
              <strong className="text-white">
                {lang === 'ar' ? 'القطاعات المناسبة: ' : 'Recommended For: '}
              </strong>
              {details.idealFor}
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRequestQuote}
              className="flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] font-bold text-sm hover:shadow-[0_0_20px_rgba(214,179,106,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>{t.sRequestQuoteForThis}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="py-3 px-6 rounded-full border border-white/20 hover:border-[#D6B36A] text-white text-sm font-medium transition-colors"
            >
              {lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
