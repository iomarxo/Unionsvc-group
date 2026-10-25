import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ShieldCheck, Leaf, Users2, ArrowRight } from 'lucide-react';

interface VisionSectionProps {
  lang: Language;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="vision" className="relative min-h-[560px] flex items-center py-24 text-white overflow-hidden">
      {/* Background Graphic with Highway through Golden Mountains */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/Golden_Port_Highway_at_Sunset_569d23a1.png"
          alt="Connected Logistics Highway Vision"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/95 via-[#141414]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-[#D6B36A]/10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-bold">
            {t.vEye}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f3e6c9] leading-tight">
            {t.vH}
          </h2>
          <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed">
            {t.vD}
          </p>

          <div className="w-20 h-0.5 bg-gradient-to-r from-[#D6B36A] to-transparent"></div>

          {/* 3 Strategic Commitments */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-black/40 backdrop-blur-md border border-[#D6B36A]/20">
              <ShieldCheck className="w-5 h-5 text-[#D6B36A] mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">
                {t.vCommitment1Title}
              </h4>
              <p className="text-xs text-white/60">
                {t.vCommitment1Desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 backdrop-blur-md border border-[#D6B36A]/20">
              <Leaf className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">
                {t.vCommitment2Title}
              </h4>
              <p className="text-xs text-white/60">
                {t.vCommitment2Desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 backdrop-blur-md border border-[#D6B36A]/20">
              <Users2 className="w-5 h-5 text-[#D6B36A] mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">
                {t.vCommitment3Title}
              </h4>
              <p className="text-xs text-white/60">
                {t.vCommitment3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
