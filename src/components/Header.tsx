import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { UnionLogo } from './UnionLogo';
import { Search, Calculator, Mail, Menu, X, Globe, Ship } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenTracking: () => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onOpenTracking,
  onOpenCalculator
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nHome },
    { href: '#about', label: t.nAbout },
    { href: '#services', label: t.nServ },
    { href: '#vision', label: t.nVis },
    { href: '#why', label: t.nWhy },
    { href: '#faq', label: t.nFaq },
    { href: '#contact', label: t.nCont }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141414]/95 backdrop-blur-md border-b border-[#D6B36A]/30 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#141414]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Official Brand Logo */}
          <a
            href="#home"
            className="group focus:outline-none"
            aria-label="UNIONSVC Home"
          >
            <UnionLogo
              size="md"
              subtext={lang === 'ar' ? 'حلول اللوجستيات والتقنية' : 'Logistics & Tech'}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#D6B36A] transition-colors relative py-1 after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#D6B36A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Tools: Tracking, Calculator, Language Switcher, CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Track Icon Button */}
            <button
              onClick={onOpenTracking}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D6B36A]/50 bg-[#1c1b18] hover:bg-[#D6B36A]/20 text-[#f3e6c9] text-xs font-medium transition-all"
              title={t.nTrackBtn}
            >
              <Search className="w-3.5 h-3.5 text-[#D6B36A]" />
              <span className="hidden md:inline">{t.nTrack}</span>
            </button>

            {/* Quick Rate Estimator Button */}
            <button
              onClick={onOpenCalculator}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D6B36A]/50 bg-[#1c1b18] hover:bg-[#D6B36A]/20 text-[#f3e6c9] text-xs font-medium transition-all"
              title={t.calcH}
            >
              <Calculator className="w-3.5 h-3.5 text-[#D6B36A]" />
              <span className="hidden md:inline">{t.nCalculator}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center rounded-full border border-[#D6B36A]/40 bg-[#191919] p-0.5 text-xs font-medium text-white">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] font-semibold shadow'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  lang === 'ar'
                    ? 'bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] font-semibold shadow'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>

            {/* Contact Us CTA Button */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] text-xs font-semibold hover:shadow-[0_0_20px_rgba(214,179,106,0.4)] transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.nBtn}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#D6B36A]/40 text-[#f3e6c9] hover:bg-[#D6B36A]/20 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414]/98 border-b border-[#D6B36A]/40 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-base font-medium text-white/90 hover:text-[#D6B36A] py-1 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTracking();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#D6B36A] text-[#f3e6c9] text-sm"
              >
                <Search className="w-4 h-4 text-[#D6B36A]" />
                {t.nTrackBtn}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#D6B36A] text-[#f3e6c9] text-sm"
              >
                <Calculator className="w-4 h-4 text-[#D6B36A]" />
                {t.calcH}
              </button>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] font-semibold text-sm"
              >
                {t.nBtn}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
