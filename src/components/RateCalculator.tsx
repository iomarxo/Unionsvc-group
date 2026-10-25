import React, { useState, useMemo } from 'react';
import { Language, TransportMode, CargoType, RateEstimateInput } from '../types';
import { translations } from '../data/translations';
import { TRADE_HUBS, calculateFreightEstimate } from '../utils/calculator';
import {
  Calculator,
  Ship,
  Plane,
  Truck,
  Layers,
  Clock,
  Leaf,
  DollarSign,
  ArrowRight,
  Shield,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface RateCalculatorProps {
  lang: Language;
  onApplyToQuote?: (data: {
    origin: string;
    destination: string;
    mode: string;
    estimate: number;
    weight: number;
    volume: number;
  }) => void;
}

export const RateCalculator: React.FC<RateCalculatorProps> = ({
  lang,
  onApplyToQuote
}) => {
  const t = translations[lang];

  const [origin, setOrigin] = useState('shanghai');
  const [destination, setDestination] = useState('dubai');
  const [mode, setMode] = useState<TransportMode>('ocean_fcl');
  const [cargoType, setCargoType] = useState<CargoType>('general');
  const [weightKg, setWeightKg] = useState<number>(5500);
  const [volumeCbm, setVolumeCbm] = useState<number>(18);
  const [appliedNotice, setAppliedNotice] = useState(false);

  const estimateInput: RateEstimateInput = useMemo(
    () => ({
      origin,
      destination,
      mode,
      cargoType,
      weightKg,
      volumeCbm
    }),
    [origin, destination, mode, cargoType, weightKg, volumeCbm]
  );

  const result = useMemo(() => calculateFreightEstimate(estimateInput), [estimateInput]);

  const originHub = TRADE_HUBS.find((h) => h.id === origin) || TRADE_HUBS[0];
  const destHub = TRADE_HUBS.find((h) => h.id === destination) || TRADE_HUBS[1];

  const handleApply = () => {
    if (onApplyToQuote) {
      onApplyToQuote({
        origin: lang === 'ar' ? originHub.nameAr : originHub.nameEn,
        destination: lang === 'ar' ? destHub.nameAr : destHub.nameEn,
        mode,
        estimate: result.totalEstimate,
        weight: weightKg,
        volume: volumeCbm
      });
      setAppliedNotice(true);
      setTimeout(() => setAppliedNotice(false), 3000);

      // Smooth scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const modesList: { id: TransportMode; label: string; icon: React.ReactNode }[] = [
    {
      id: 'ocean_fcl',
      label: lang === 'ar' ? 'بحري (حاوية كاملة FCL)' : 'Ocean Freight (FCL)',
      icon: <Ship className="w-4 h-4" />
    },
    {
      id: 'ocean_lcl',
      label: lang === 'ar' ? 'بحري مجزأ (LCL)' : 'Ocean Freight (LCL)',
      icon: <Ship className="w-4 h-4" />
    },
    {
      id: 'air_freight',
      label: lang === 'ar' ? 'شحن جوي سريع' : 'Air Freight Cargo',
      icon: <Plane className="w-4 h-4" />
    },
    {
      id: 'road_freight',
      label: lang === 'ar' ? 'نقل بري ثقيل' : 'Overland Trucking',
      icon: <Truck className="w-4 h-4" />
    },
    {
      id: 'multimodal',
      label: lang === 'ar' ? 'نقل متعدد الوسائط' : 'Multimodal Corridor',
      icon: <Layers className="w-4 h-4" />
    }
  ];

  const cargoTypesList: { id: CargoType; label: string }[] = [
    { id: 'general', label: lang === 'ar' ? 'بضائع جافة عامة' : 'General Dry Cargo' },
    {
      id: 'temperature_controlled',
      label: lang === 'ar' ? 'سلسلة تبريد / مواد مبردة' : 'Cold Chain / Perishables'
    },
    {
      id: 'high_value',
      label: lang === 'ar' ? 'إلكترونيات ومواد ثمينة' : 'High-Value Electronics'
    },
    {
      id: 'hazardous',
      label: lang === 'ar' ? 'مواد خطرة مصنفة (HAZMAT)' : 'Hazardous Materials'
    }
  ];

  return (
    <section id="calculator" className="py-20 bg-[#161513] text-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 end-0 w-96 h-96 bg-[#D6B36A]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 start-0 w-96 h-96 bg-[#B99348]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-semibold mb-3">
            {t.calcEye}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f3e6c9] leading-tight mb-4">
            {t.calcH}
          </h2>
          <p className="text-sm sm:text-base text-white/70">
            {t.calcD}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Parameters Panel */}
          <div className="lg:col-span-7 bg-[#1c1b18] border border-[#D6B36A]/30 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="text-lg font-serif font-semibold text-[#f3e6c9] flex items-center gap-2 border-b border-white/10 pb-3">
              <Calculator className="w-5 h-5 text-[#D6B36A]" />
              <span>{lang === 'ar' ? 'تحديد معايير الشحنة' : 'Configure Shipment Parameters'}</span>
            </h3>

            {/* Origin & Destination Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">
                  {t.calcOrigin}
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#141414] border border-[#D6B36A]/40 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#D6B36A] transition-colors"
                >
                  {TRADE_HUBS.map((hub) => (
                    <option key={hub.id} value={hub.id} disabled={hub.id === destination}>
                      {lang === 'ar' ? hub.nameAr : hub.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">
                  {t.calcDestination}
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#141414] border border-[#D6B36A]/40 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#D6B36A] transition-colors"
                >
                  {TRADE_HUBS.map((hub) => (
                    <option key={hub.id} value={hub.id} disabled={hub.id === origin}>
                      {lang === 'ar' ? hub.nameAr : hub.nameEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Transport Mode Radio Cards */}
            <div>
              <label className="block text-xs font-medium text-white/70 mb-2">
                {t.calcMode}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {modesList.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMode(m.id)}
                    className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-medium text-start transition-all ${
                      mode === m.id
                        ? 'border-[#D6B36A] bg-[#D6B36A]/20 text-white shadow-sm'
                        : 'border-white/10 bg-[#151515] text-white/60 hover:border-white/30'
                    }`}
                  >
                    <span className={mode === m.id ? 'text-[#D6B36A]' : 'text-white/40'}>
                      {m.icon}
                    </span>
                    <span className="truncate">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Cargo Classification */}
            <div>
              <label className="block text-xs font-medium text-white/70 mb-2">
                {t.calcCargoType}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cargoTypesList.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCargoType(c.id)}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-start transition-all ${
                      cargoType === c.id
                        ? 'border-[#D6B36A] bg-[#D6B36A]/20 text-[#f3e6c9]'
                        : 'border-white/10 bg-[#151515] text-white/60 hover:border-white/30'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight and Volume Sliders / Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/70">{t.calcWeight}</span>
                  <span className="font-mono font-bold text-[#D6B36A]">
                    {weightKg.toLocaleString()} KG
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="35000"
                  step="100"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-[#D6B36A] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/40">
                  <span>100 KG</span>
                  <span>10,000 KG</span>
                  <span>35,000 KG</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/70">{t.calcVolume}</span>
                  <span className="font-mono font-bold text-[#D6B36A]">
                    {volumeCbm.toFixed(1)} CBM
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="120"
                  step="0.5"
                  value={volumeCbm}
                  onChange={(e) => setVolumeCbm(Number(e.target.value))}
                  className="w-full accent-[#D6B36A] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/40">
                  <span>0.5 CBM</span>
                  <span>40 CBM</span>
                  <span>120 CBM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Card Panel */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1e1c18] to-[#161513] border-2 border-[#D6B36A]/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D6B36A] block mb-1">
                {t.calcSummaryTitle}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-mono font-bold text-[#f3e6c9]">
                  ${result.totalEstimate.toLocaleString()}
                </span>
                <span className="text-xs text-white/60">USD</span>
              </div>
              <p className="text-xs text-white/40 mt-1">
                {lang === 'ar' ? 'سعر إرشادي شامل الرسوم المينائية' : 'Estimated all-in commercial freight benchmark'}
              </p>
            </div>

            {/* Breakdown List */}
            <div className="space-y-3 py-4 border-y border-white/10 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-white/70">
                <span>{t.calcBaseFreight}</span>
                <span className="font-mono text-white font-medium">
                  ${result.baseFreight.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-white/70">
                <span>{t.calcBunkerFuel}</span>
                <span className="font-mono text-white font-medium">
                  ${result.fuelSurcharge.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-white/70">
                <span>{t.calcHandling}</span>
                <span className="font-mono text-white font-medium">
                  ${result.handlingFee.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Transit and Carbon Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#141414] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-white/60">
                  <Clock className="w-3.5 h-3.5 text-[#D6B36A]" />
                  <span>{t.calcTransitTime}</span>
                </div>
                <p className="text-sm font-bold text-emerald-400 font-mono">
                  {result.estimatedDaysMin} – {result.estimatedDaysMax} {lang === 'ar' ? 'أيام' : 'Days'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#141414] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-white/60">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.calcCarbonOffset}</span>
                </div>
                <p className="text-sm font-bold text-[#f3e6c9] font-mono">
                  ~{result.carbonOffsetKg.toLocaleString()} KG CO2
                </p>
              </div>
            </div>

            {/* CTA: Apply this estimate to RFQ form */}
            <button
              type="button"
              onClick={handleApply}
              className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] font-bold text-sm hover:shadow-[0_0_20px_rgba(214,179,106,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>{t.calcApplyToQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {appliedNotice && (
              <p className="text-center text-xs text-emerald-400 flex items-center justify-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>
                  {lang === 'ar'
                    ? 'تم نقل التقدير إلى نموذج طلب التسعيرة بالأسفل!'
                    : 'Estimate parameters applied to the RFQ form below!'}
                </span>
              </p>
            )}

            <p className="text-[11px] text-white/40 leading-relaxed italic">
              {t.calcDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
