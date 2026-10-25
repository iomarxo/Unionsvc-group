import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { UnionLogo } from './UnionLogo';
import { Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onLanguageChange }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12110f] text-[#cfcabf] pt-16 pb-12 border-t border-[#D6B36A]/30 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block group">
              <UnionLogo
                size="lg"
                subtext={lang === 'ar' ? 'حلول اللوجستيات والتقنية المتكاملة' : 'Logistics & Technology'}
              />
            </a>

            <p className="text-white/60 leading-relaxed max-w-sm">
              {t.fBrand}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-white/40 text-xs">Language:</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${
                  lang === 'en' ? 'text-[#D6B36A] font-bold underline' : 'text-white/60 hover:text-white'
                }`}
              >
                English
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${
                  lang === 'ar' ? 'text-[#D6B36A] font-bold underline' : 'text-white/60 hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-[#f3e6c9] tracking-wider uppercase font-serif">
              {t.fNav}
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href="#home" className="hover:text-[#D6B36A] transition-colors">
                  {t.nHome}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D6B36A] transition-colors">
                  {t.nAbout}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D6B36A] transition-colors">
                  {t.nServ}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#D6B36A] transition-colors">
                  {t.nCalculator}
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-[#D6B36A] transition-colors">
                  {t.nVis}
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-[#D6B36A] transition-colors">
                  {t.nWhy}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Global Commercial Desk */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold text-[#f3e6c9] tracking-wider uppercase font-serif">
              {t.nCont}
            </h4>
            <p className="text-white/60 text-xs leading-relaxed">
              {lang === 'ar'
                ? 'للاستفسارات التجارية، شراكات الخطوط الملاحية، ومشاريع سلاسل الإمداد الرقمية:'
                : 'For commercial inquiries, carrier partnerships, and enterprise supply chain integrations:'}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <Mail className="w-4 h-4 text-[#D6B36A] flex-shrink-0" />
              <a
                href="mailto:Contact@unionsvc.com"
                className="text-[#f3e6c9] font-mono hover:text-[#D6B36A] transition-colors"
              >
                Contact@unionsvc.com
              </a>
            </div>
            <p className="text-[11px] text-white/40 pt-2">
              UNIONSVC Corporate Global Freight Gateway
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} UNIONSVC. {t.rights}</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/70 hover:text-[#D6B36A] transition-colors"
          >
            <span>{lang === 'ar' ? 'العودة للأعلى' : 'Back to Top'}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
