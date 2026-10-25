import React, { useState, useMemo } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { FAQS_DATA } from '../data/faqs';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('q1');

  const categories = [
    { id: 'all', label: t.qFilterAll },
    { id: 'logistics', label: t.qFilterLogistics },
    { id: 'technology', label: t.qFilterTech },
    { id: 'pricing', label: t.qFilterPricing },
    { id: 'partnership', label: t.qFilterPartners }
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((item) => {
      const qText = ((t as any)[item.questionKey] || '').toLowerCase();
      const aText = ((t as any)[item.answerKey] || '').toLowerCase();
      const matchesSearch =
        !searchTerm.trim() ||
        qText.includes(searchTerm.toLowerCase()) ||
        aText.includes(searchTerm.toLowerCase());

      const matchesCat =
        selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [t, searchTerm, selectedCategory]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#161513] text-white border-t border-[#D6B36A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Title & Search */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-bold">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f3e6c9] leading-tight">
              {t.qH}
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              {t.qD}
            </p>

            {/* Search Input */}
            <div className="relative pt-2">
              <Search className="absolute inset-y-0 start-3.5 my-auto w-4 h-4 text-[#D6B36A]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.qSearchPlaceholder}
                className="w-full ps-10 pe-4 py-2.5 bg-[#1b1a17] border border-[#D6B36A]/40 rounded-xl text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D6B36A] transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedCategory === c.id
                      ? 'bg-[#D6B36A] text-black font-semibold'
                      : 'bg-[#1c1b18] text-white/60 hover:text-white border border-white/5'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-[#1b1a17] border border-white/5 text-white/50 text-sm">
                {lang === 'ar'
                  ? 'لا توجد نتائج مطابقة لبحثك. يرجى تجربة كلمات بحث أخرى أو التواصل معنا مباشرة.'
                  : 'No matching questions found. Please try a different query or reach out via our contact desk.'}
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl transition-all border ${
                      isOpen
                        ? 'bg-[#1c1b18] border-[#D6B36A]/50 shadow-md'
                        : 'bg-[#181715] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 text-start flex items-center justify-between gap-4 font-medium text-sm sm:text-base text-[#f3e6c9]"
                    >
                      <span>{(t as any)[faq.questionKey]}</span>
                      <span
                        className={`p-1 rounded-full border border-[#D6B36A]/30 text-[#D6B36A] transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180 bg-[#D6B36A]/20' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                        {(t as any)[faq.answerKey]}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
