import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Target, Network, TrendingUp, Users, ChevronDown, ChevronUp, Check, X } from 'lucide-react';

interface WhyChooseSectionProps {
  lang: Language;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ lang }) => {
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const t = translations[lang];

  return (
    <section id="why" className="py-24 bg-[#F7F4EC] text-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B99348] font-bold mb-2">
            {t.wEye}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#151515] leading-tight">
            {t.wH}
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-white border border-[#B99348]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full border border-[#B99348] flex items-center justify-center mb-5 text-[#B99348] bg-[#F7F4EC]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#151515] mb-2">
              {t.w1h}
            </h3>
            <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
              {t.w1}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#B99348]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full border border-[#B99348] flex items-center justify-center mb-5 text-[#B99348] bg-[#F7F4EC]">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#151515] mb-2">
              {t.w2h}
            </h3>
            <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
              {t.w2}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#B99348]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full border border-[#B99348] flex items-center justify-center mb-5 text-[#B99348] bg-[#F7F4EC]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#151515] mb-2">
              {t.w3h}
            </h3>
            <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
              {t.w3}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#B99348]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full border border-[#B99348] flex items-center justify-center mb-5 text-[#B99348] bg-[#F7F4EC]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#151515] mb-2">
              {t.w4h}
            </h3>
            <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
              {t.w4}
            </p>
          </div>
        </div>

        {/* Interactive Comparison Toggle Drawer */}
        <div className="rounded-2xl bg-[#1c1b18] border border-[#D6B36A]/40 text-white overflow-hidden shadow-xl">
          <button
            type="button"
            onClick={() => setComparisonOpen(!comparisonOpen)}
            className="w-full px-6 py-4 flex items-center justify-between text-start text-sm sm:text-base font-semibold text-[#f3e6c9] hover:bg-white/5 transition-colors"
          >
            <span>{t.wToggleTitle}</span>
            <span className="p-1.5 rounded-full border border-white/20 text-[#D6B36A]">
              {comparisonOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </button>

          {comparisonOpen && (
            <div className="px-6 pb-6 pt-2 border-t border-white/10 overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-start min-w-[550px]">
                <thead>
                  <tr className="border-b border-white/10 text-[#D6B36A]">
                    <th className="py-3 px-4 font-semibold text-start">Metric / Dimension</th>
                    <th className="py-3 px-4 font-semibold text-start text-white/50">{t.wColTraditional}</th>
                    <th className="py-3 px-4 font-semibold text-start text-[#f3e6c9]">{t.wColUnion}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-white">{t.wRow1Label}</td>
                    <td className="py-3.5 px-4 text-white/50 flex items-center gap-1.5">
                      <X className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      <span>{t.wRow1Trad}</span>
                    </td>
                    <td className="py-3.5 px-4 text-emerald-300 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{t.wRow1Union}</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-4 font-medium text-white">{t.wRow2Label}</td>
                    <td className="py-3.5 px-4 text-white/50 flex items-center gap-1.5">
                      <X className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      <span>{t.wRow2Trad}</span>
                    </td>
                    <td className="py-3.5 px-4 text-emerald-300 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{t.wRow2Union}</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-4 font-medium text-white">{t.wRow3Label}</td>
                    <td className="py-3.5 px-4 text-white/50 flex items-center gap-1.5">
                      <X className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      <span>{t.wRow3Trad}</span>
                    </td>
                    <td className="py-3.5 px-4 text-emerald-300 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{t.wRow3Union}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
