import React from 'react';
import { Language, ServiceItem } from '../types';
import { translations } from '../data/translations';
import { SERVICES } from '../data/services';
import {
  Truck,
  PackageCheck,
  Cpu,
  Network,
  ThermometerSnowflake,
  Warehouse,
  ArrowRight,
  Calculator
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenCalculator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
  onOpenCalculator
}) => {
  const t = translations[lang];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#B99348]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-[#B99348]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#B99348]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#B99348]" />;
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake className="w-5 h-5 text-[#B99348]" />;
      case 'Warehouse':
        return <Warehouse className="w-5 h-5 text-[#B99348]" />;
      default:
        return <Truck className="w-5 h-5 text-[#B99348]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#EEE7DA] text-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#B99348] font-bold mb-2">
              {t.sEye}
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#151515] leading-tight mb-3">
              {t.sH}
            </h2>
            <p className="text-sm sm:text-base text-[#77746D]">
              {t.sD}
            </p>
          </div>
          <button
            onClick={onOpenCalculator}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#B99348] text-[#151515] text-xs font-semibold hover:bg-[#B99348] hover:text-white transition-all shadow-sm self-start md:self-auto"
          >
            <Calculator className="w-4 h-4 text-[#B99348] group-hover:text-white" />
            <span>{t.calcH}</span>
          </button>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              onClick={() => onSelectService(s)}
              className="p-7 rounded-2xl bg-[#F7F4EC] border border-[#B99348]/40 hover:border-[#B99348] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#B99348]/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(s.iconName)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#B99348]/15 text-[#8c6a28]">
                    {s.badgeKey}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#151515] mb-2.5 group-hover:text-[#8c6a28] transition-colors">
                  {(t as any)[s.titleKey]}
                </h3>

                <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed mb-6">
                  {(t as any)[s.descKey]}
                </p>
              </div>

              <div className="pt-4 border-t border-[#B99348]/20 flex items-center justify-between text-xs font-semibold text-[#8c6a28]">
                <span>{t.sViewDetails}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
