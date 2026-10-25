import React, { useState } from 'react';
import { Language, ShipmentData } from '../types';
import { translations } from '../data/translations';
import { SAMPLE_SHIPMENTS } from '../data/shipments';
import {
  X,
  LayoutDashboard,
  Radio,
  Ship,
  Plane,
  Truck,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Activity,
  Globe2,
  Filter,
  CheckCircle2,
  Clock,
  MapPin
} from 'lucide-react';

interface DashboardPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectShipment: (id: string) => void;
}

export const DashboardPreviewModal: React.FC<DashboardPreviewModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectShipment
}) => {
  const [filter, setFilter] = useState<'all' | 'in_transit' | 'at_port' | 'customs_cleared' | 'out_for_delivery'>('all');
  const t = translations[lang];

  if (!isOpen) return null;

  const allShipments = Object.values(SAMPLE_SHIPMENTS);
  const filteredShipments = allShipments.filter((s) => {
    if (filter === 'all') return true;
    return s.status === filter;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#151515] border-2 border-[#D6B36A]/50 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden my-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D6B36A]/20 bg-[#1c1b18]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D6B36A] flex items-center justify-center bg-[#151515]">
              <LayoutDashboard className="w-5 h-5 text-[#D6B36A]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#f3e6c9]">
                {t.dbTitle}
              </h3>
              <p className="text-xs text-[#D6B36A] flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span>{t.dbSubtitle}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-white/20 hover:border-[#D6B36A] flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Close Dashboard"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dashboard Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Top 4 KPI Metrics Cards matching the Cinematic Dashboard image */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#1b1a17] border border-[#D6B36A]/30">
              <span className="text-xs text-white/50 block mb-1">{t.dbActiveShipments}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-mono font-bold text-[#f3e6c9]">48</span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  +14%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                <div className="w-[78%] h-full bg-[#D6B36A] rounded-full"></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1b1a17] border border-[#D6B36A]/30">
              <span className="text-xs text-white/50 block mb-1">{t.dbOnTimeRate}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-mono font-bold text-emerald-400">92%</span>
                <span className="text-[11px] font-mono text-emerald-400">Target 90%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                <div className="w-[92%] h-full bg-emerald-400 rounded-full"></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1b1a17] border border-[#D6B36A]/30">
              <span className="text-xs text-white/50 block mb-1">{t.dbTotalTeu}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-mono font-bold text-[#f3e6c9]">12,480</span>
                <span className="text-[11px] text-white/40">TEU</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                <div className="w-[85%] h-full bg-blue-400 rounded-full"></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1b1a17] border border-[#D6B36A]/30">
              <span className="text-xs text-white/50 block mb-1">{t.dbAirTons}</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-mono font-bold text-[#f3e6c9]">850</span>
                <span className="text-[11px] text-white/40">Tons</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                <div className="w-[64%] h-full bg-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Real Asset Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D6B36A]/30 group">
            <img
              src="/assets/aistudio/Cinematic_Logistics_Dashboard_Office_7bc2abdb.png"
              alt="UNIONSVC Logistics Command Center"
              className="w-full h-48 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/40 to-transparent flex items-end p-6">
              <div className="max-w-2xl">
                <span className="px-2.5 py-1 rounded bg-[#D6B36A] text-black text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                  Live Global Telemetry
                </span>
                <h4 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {lang === 'ar'
                    ? 'رؤية لحظية شاملة لكافة خطوط الملاحة والموانئ ومحطات الترانزيت'
                    : 'Real-Time Global Visibility Across Maritime, Air, and Overland Hubs'}
                </h4>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#D6B36A]" />
              <span className="text-xs font-semibold text-[#f3e6c9] uppercase tracking-wider">
                {t.dbShipmentList}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === 'all'
                    ? 'bg-[#D6B36A] text-black font-semibold'
                    : 'bg-[#201f1c] text-white/60 hover:text-white'
                }`}
              >
                {t.dbFilterAll}
              </button>
              <button
                type="button"
                onClick={() => setFilter('in_transit')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === 'in_transit'
                    ? 'bg-[#D6B36A] text-black font-semibold'
                    : 'bg-[#201f1c] text-white/60 hover:text-white'
                }`}
              >
                {t.dbFilterTransit}
              </button>
              <button
                type="button"
                onClick={() => setFilter('at_port')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === 'at_port'
                    ? 'bg-[#D6B36A] text-black font-semibold'
                    : 'bg-[#201f1c] text-white/60 hover:text-white'
                }`}
              >
                {t.dbFilterPort}
              </button>
              <button
                type="button"
                onClick={() => setFilter('customs_cleared')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === 'customs_cleared'
                    ? 'bg-[#D6B36A] text-black font-semibold'
                    : 'bg-[#201f1c] text-white/60 hover:text-white'
                }`}
              >
                {t.dbFilterCustoms}
              </button>
              <button
                type="button"
                onClick={() => setFilter('out_for_delivery')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filter === 'out_for_delivery'
                    ? 'bg-[#D6B36A] text-black font-semibold'
                    : 'bg-[#201f1c] text-white/60 hover:text-white'
                }`}
              >
                {t.dbFilterDelivery}
              </button>
            </div>
          </div>

          {/* Shipments List */}
          <div className="space-y-3">
            {filteredShipments.map((s) => (
              <div
                key={s.trackingNumber}
                onClick={() => {
                  onClose();
                  onSelectShipment(s.trackingNumber);
                }}
                className="p-4 rounded-xl bg-[#1b1a17] border border-white/5 hover:border-[#D6B36A]/50 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#151515] border border-[#D6B36A]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {s.mode.includes('ocean') && <Ship className="w-5 h-5 text-[#D6B36A]" />}
                    {s.mode === 'air_freight' && <Plane className="w-5 h-5 text-[#D6B36A]" />}
                    {s.mode === 'road_freight' && <Truck className="w-5 h-5 text-[#D6B36A]" />}
                    {s.mode === 'multimodal' && <Layers className="w-5 h-5 text-[#D6B36A]" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-[#f3e6c9]">
                        {s.trackingNumber}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-semibold bg-white/10 text-white/80">
                        {s.vesselOrFlight}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 mt-0.5 flex items-center gap-1">
                      <span>{s.origin}</span>
                      <span className="text-[#D6B36A]">➔</span>
                      <span>{s.destination}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 text-xs">
                  <div>
                    <span className="text-white/40 block mb-0.5">ETA Delivery</span>
                    <span className="font-mono text-emerald-400 font-medium">
                      {s.estimatedArrival}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/40 block mb-0.5">Progress</span>
                    <span className="font-mono text-[#f3e6c9] font-medium">
                      {s.progressPercent}%
                    </span>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg border border-[#D6B36A]/50 text-[#f3e6c9] group-hover:bg-[#D6B36A] group-hover:text-black font-semibold transition-all flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#191816] flex justify-between items-center text-xs">
          <span className="text-white/40">
            {lang === 'ar'
              ? 'نظام القيادة والمتابعة اللوجستية السحابي © UNIONSVC'
              : 'UNIONSVC Cloud Logistics Operations Engine'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            {t.dbClose}
          </button>
        </div>
      </div>
    </div>
  );
};
