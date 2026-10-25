import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Shield, Cpu, TrendingUp, LayoutDashboard, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenDashboardPreview: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenDashboardPreview
}) => {
  const t = translations[lang];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#F7F4EC] to-[#EEE7DA] text-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-[#B99348] font-bold">
              {t.aEye}
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#151515] leading-tight">
              {t.aH}
            </h2>
            <p className="text-sm sm:text-base text-[#77746D] leading-relaxed">
              {t.aD}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDashboardPreview}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#B99348] text-[#151515] text-xs font-semibold hover:bg-[#B99348] hover:text-white transition-all shadow-sm"
              >
                <LayoutDashboard className="w-4 h-4 text-[#B99348] group-hover:text-white" />
                <span>{t.aPreviewDashboardBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Middle Column: Visual Frame with the Real Asset */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl p-2 bg-[#F7F4EC] border-2 border-[#B99348] shadow-2xl overflow-hidden group">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/assets/aistudio/Cinematic_Logistics_Dashboard_Office_7bc2abdb.png"
                  alt="Logistics Technology Command Center"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[11px] font-mono text-[#D6B36A] font-semibold">
                    UNIONSVC DIGITAL PORTAL
                  </span>
                  <p className="text-xs text-white/90 font-medium">
                    {lang === 'ar'
                      ? 'لوحة تحكم حية لمتابعة حركات الشحن والأداء الميداني'
                      : 'Live global dashboard for active shipments and field telemetry'}
                  </p>
                  <button
                    onClick={onOpenDashboardPreview}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#D6B36A] hover:text-white font-bold transition-colors"
                  >
                    <span>{t.aPreviewDashboardBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Strategic Pillars */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-[#B99348]/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full border border-[#B99348] flex items-center justify-center flex-shrink-0 bg-[#F7F4EC] text-[#B99348]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#151515] mb-1">
                  {t.p1h}
                </h3>
                <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
                  {t.p1}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-[#B99348]/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full border border-[#B99348] flex items-center justify-center flex-shrink-0 bg-[#F7F4EC] text-[#B99348]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#151515] mb-1">
                  {t.p2h}
                </h3>
                <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
                  {t.p2}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-[#B99348]/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full border border-[#B99348] flex items-center justify-center flex-shrink-0 bg-[#F7F4EC] text-[#B99348]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#151515] mb-1">
                  {t.p3h}
                </h3>
                <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
                  {t.p3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
