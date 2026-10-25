import React, { useState, useEffect } from 'react';
import { Language, ServiceItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { DashboardPreviewModal } from './components/DashboardPreviewModal';
import { VisionSection } from './components/VisionSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { RateCalculator } from './components/RateCalculator';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { TrackingModal } from './components/TrackingModal';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('unionsvc_lang');
      return saved === 'ar' || saved === 'en' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [activeTrackingId, setActiveTrackingId] = useState('UN-8921-X');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledOrigin, setPrefilledOrigin] = useState('');
  const [prefilledDestination, setPrefilledDestination] = useState('');

  // Handle language change & HTML direction
  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('unionsvc_lang', newLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Check URL hash for tracking param or quick links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#track=')) {
        const id = decodeURIComponent(hash.replace('#track=', '')).trim();
        if (id) {
          setActiveTrackingId(id);
          setIsTrackingOpen(true);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenTrackingWithId = (id: string) => {
    setActiveTrackingId(id);
    setIsTrackingOpen(true);
  };

  const handleApplyRateToQuote = (data: {
    origin: string;
    destination: string;
    mode: string;
    estimate: number;
    weight: number;
    volume: number;
  }) => {
    setPrefilledOrigin(data.origin);
    setPrefilledDestination(data.destination);
    setPrefilledService(
      lang === 'ar'
        ? `تقدير شحن (${data.mode.toUpperCase()} - $${data.estimate.toLocaleString()} USD)`
        : `Rate Estimate (${data.mode.toUpperCase()} - $${data.estimate.toLocaleString()} USD)`
    );
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
  };

  return (
    <div className={`min-h-screen bg-[#F7F4EC] text-[#222] font-sans selection:bg-[#D6B36A] selection:text-black ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <Header
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenTracking={() => setIsTrackingOpen(true)}
        onOpenCalculator={() => {
          const calcEl = document.getElementById('calculator');
          if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenTrackingWithId={handleOpenTrackingWithId}
          onOpenCalculator={() => {
            const calcEl = document.getElementById('calculator');
            if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Who We Are / About Section */}
        <AboutSection
          lang={lang}
          onOpenDashboardPreview={() => setIsDashboardOpen(true)}
        />

        {/* Services Section */}
        <ServicesSection
          lang={lang}
          onSelectService={(s) => setSelectedService(s)}
          onOpenCalculator={() => {
            const calcEl = document.getElementById('calculator');
            if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Live Freight Rate Estimator */}
        <RateCalculator
          lang={lang}
          onApplyToQuote={handleApplyRateToQuote}
        />

        {/* Vision Section */}
        <VisionSection lang={lang} />

        {/* Why Choose Section with Interactive Comparison */}
        <WhyChooseSection lang={lang} />

        {/* Contact & RFQ Form Section */}
        <ContactSection
          lang={lang}
          prefilledService={prefilledService}
          prefilledOrigin={prefilledOrigin}
          prefilledDestination={prefilledDestination}
        />

        {/* Searchable FAQ Section */}
        <FAQSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onLanguageChange={handleLanguageChange}
      />

      {/* Modals */}
      <TrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        lang={lang}
        initialTrackingId={activeTrackingId}
      />

      <DashboardPreviewModal
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        lang={lang}
        onSelectShipment={(id) => {
          setActiveTrackingId(id);
          setIsTrackingOpen(true);
        }}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        lang={lang}
        onSelectForQuote={handleSelectServiceForQuote}
      />
    </div>
  );
}
