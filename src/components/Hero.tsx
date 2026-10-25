import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Search, ArrowRight, ShieldCheck, Globe, Clock, Layers, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenTrackingWithId: (id: string) => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenTrackingWithId,
  onOpenCalculator
}) => {
  const [trackingId, setTrackingId] = useState('');
  const t = translations[lang];

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      onOpenTrackingWithId(trackingId.trim());
    } else {
      onOpenTrackingWithId('UN-8921-X');
    }
  };

  const sampleIds = ['UN-8921-X', 'UN-4402-K', 'UN-7719-M', 'UN-5103-T'];

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-28 pb-20 text-white overflow-hidden">
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/Golden_Hour_Global_Logistics_3a8175b8.png"
          alt="UNIONSVC Global Logistics and Transportation"
          className="w-full h-full object-cover object-[65%_center] lg:object-center"
        />
        {/* Multilayered gradient overlays for text readability & luxury tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/95 via-[#141414]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-[#D6B36A]/5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D6B36A]/40 bg-[#161513]/70 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#D6B36A] animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#f3e6c9]">
              {t.hEye}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.12]">
            <span className="text-white block">{t.h1a}</span>
            <span className="text-gold-gradient block">{t.h1b}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/80 max-w-xl font-light leading-relaxed">
            {t.hSub}
          </p>

          {/* Live Quick Tracking Bar */}
          <div className="pt-2 max-w-xl">
            <form
              onSubmit={handleTrackSubmit}
              className="p-1.5 rounded-2xl bg-[#181715]/90 backdrop-blur-md border border-[#D6B36A]/50 shadow-2xl flex flex-col sm:flex-row gap-2"
            >
              <div className="relative flex-1 flex items-center">
                <Search className="w-5 h-5 text-[#D6B36A] ms-3.5 flex-shrink-0" />
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder={t.hTrackPlaceholder}
                  className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] font-bold text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(214,179,106,0.5)] transition-all flex items-center justify-center gap-2 flex-shrink-0"
              >
                <span>{t.hTrackAction}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Sample IDs */}
            <div className="flex flex-wrap items-center gap-2 text-xs mt-2.5">
              <span className="text-white/60 text-[11px]">{t.hOrTrySamples}</span>
              {sampleIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => onOpenTrackingWithId(id)}
                  className="px-2 py-0.5 rounded border border-white/20 bg-black/40 text-[10px] font-mono text-[#f3e6c9] hover:border-[#D6B36A] transition-colors"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] text-sm font-bold hover:shadow-[0_0_25px_rgba(214,179,106,0.4)] transition-all"
            >
              <span>{t.hC1}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 hover:border-[#D6B36A] bg-[#141414]/50 backdrop-blur-sm text-white text-sm font-medium transition-all"
            >
              <span>{t.calcH}</span>
            </button>
          </div>
        </div>

        {/* Live Metrics Ticker Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1c1b18] border border-[#D6B36A]/40 flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 text-[#D6B36A]" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-mono font-bold text-[#f3e6c9] leading-tight">
                {t.hStat1Value}
              </p>
              <p className="text-xs text-white/60">{t.hStat1Label}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1c1b18] border border-[#D6B36A]/40 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-mono font-bold text-emerald-400 leading-tight">
                {t.hStat2Value}
              </p>
              <p className="text-xs text-white/60">{t.hStat2Label}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1c1b18] border border-[#D6B36A]/40 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#D6B36A]" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-mono font-bold text-[#f3e6c9] leading-tight">
                {t.hStat3Value}
              </p>
              <p className="text-xs text-white/60">{t.hStat3Label}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1c1b18] border border-[#D6B36A]/40 flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 text-[#D6B36A]" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-mono font-bold text-[#f3e6c9] leading-tight">
                {t.hStat4Value}
              </p>
              <p className="text-xs text-white/60">{t.hStat4Label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
