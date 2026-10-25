import React, { useState } from 'react';
import { Language, ShipmentData } from '../types';
import { translations } from '../data/translations';
import { getOrCreateShipment, SAMPLE_SHIPMENTS } from '../data/shipments';
import {
  X,
  Search,
  Ship,
  Plane,
  Truck,
  Layers,
  Thermometer,
  Droplets,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Radio,
  Copy,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialTrackingId?: string;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialTrackingId = 'UN-8921-X'
}) => {
  const [searchInput, setSearchInput] = useState(initialTrackingId);
  const [currentShipment, setCurrentShipment] = useState<ShipmentData>(
    getOrCreateShipment(initialTrackingId)
  );
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setCurrentShipment(getOrCreateShipment(searchInput));
    }
  };

  const handleSelectSample = (id: string) => {
    setSearchInput(id);
    setCurrentShipment(getOrCreateShipment(id));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/#track=${currentShipment.trackingNumber}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getStatusBadge = (status: ShipmentData['status']) => {
    switch (status) {
      case 'in_transit':
        return {
          label: t.trStatusInTransit,
          color: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
        };
      case 'at_port':
        return {
          label: t.trStatusAtPort,
          color: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
        };
      case 'customs_cleared':
        return {
          label: t.trStatusCustoms,
          color: 'bg-purple-500/10 text-purple-400 border-purple-500/30'
        };
      case 'out_for_delivery':
        return {
          label: t.trStatusOutForDelivery,
          color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
        };
      case 'delivered':
        return {
          label: t.trStatusDelivered,
          color: 'bg-green-500/10 text-green-400 border-green-500/30'
        };
      default:
        return {
          label: t.trStatusInTransit,
          color: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
        };
    }
  };

  const statusBadge = getStatusBadge(currentShipment.status);

  const getModeIcon = () => {
    switch (currentShipment.mode) {
      case 'ocean_fcl':
      case 'ocean_lcl':
        return <Ship className="w-5 h-5 text-[#D6B36A]" />;
      case 'air_freight':
        return <Plane className="w-5 h-5 text-[#D6B36A]" />;
      case 'road_freight':
        return <Truck className="w-5 h-5 text-[#D6B36A]" />;
      default:
        return <Layers className="w-5 h-5 text-[#D6B36A]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#171614] border border-[#D6B36A]/50 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden my-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D6B36A]/20 bg-[#1f1d19]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D6B36A]/60 flex items-center justify-center bg-[#151515]">
              {getModeIcon()}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#f3e6c9]">
                {t.trTitle}
              </h3>
              <p className="text-xs text-[#D6B36A] flex items-center gap-1.5">
                <Radio className="w-3 h-3 animate-pulse text-emerald-400" />
                {t.trSubtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-white/20 hover:border-[#D6B36A] flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Close Tracking Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Search Input & Samples */}
        <div className="p-6 border-b border-white/5 bg-[#141414]">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute inset-y-0 start-3.5 my-auto w-4 h-4 text-[#D6B36A]" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter Tracking ID (e.g. UN-8921-X)"
                className="w-full ps-10 pe-4 py-2.5 bg-[#1b1a18] border border-[#D6B36A]/40 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D6B36A] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D6B36A] to-[#B99348] text-[#141414] font-semibold text-sm hover:shadow-[0_0_15px_rgba(214,179,106,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>{t.hTrackAction}</span>
            </button>
          </form>

          {/* Quick Samples */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-white/50">{t.hOrTrySamples}</span>
            {Object.keys(SAMPLE_SHIPMENTS).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => handleSelectSample(id)}
                className={`px-2.5 py-1 rounded-md border text-[11px] font-mono transition-colors ${
                  currentShipment.trackingNumber === id
                    ? 'border-[#D6B36A] bg-[#D6B36A]/20 text-[#f3e6c9]'
                    : 'border-white/10 bg-[#1c1b18] text-white/70 hover:border-[#D6B36A]/50'
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        {/* Main Shipment Card Details */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
          {/* Status & Reference Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#1b1a17] border border-[#D6B36A]/20">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl font-mono font-bold tracking-wider text-[#f3e6c9]">
                  {currentShipment.trackingNumber}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusBadge.color}`}
                >
                  {statusBadge.label}
                </span>
              </div>
              <p className="text-xs text-white/60 mt-1">
                {currentShipment.cargoType}
              </p>
            </div>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 hover:border-[#D6B36A] bg-[#222] text-xs text-white/80 transition-colors self-start sm:self-auto"
            >
              <Copy className="w-3.5 h-3.5 text-[#D6B36A]" />
              <span>{copied ? t.trWaybillCopied : t.trWaybillCopy}</span>
            </button>
          </div>

          {/* Route Overview: Origin ➔ Destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#191816] border border-white/5 space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#D6B36A] block">
                {lang === 'ar' ? 'نقطة الانطلاق والميناء' : 'Origin Gateway'}
              </span>
              <p className="text-base font-semibold text-white">{currentShipment.origin}</p>
              <p className="text-xs text-white/60 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D6B36A]" />
                {currentShipment.originPort}
              </p>
              <p className="text-xs text-white/40 pt-1">
                {t.trDeparted}: {currentShipment.departureDate}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#191816] border border-white/5 space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#D6B36A] block">
                {lang === 'ar' ? 'وجهة الوصول النهائية' : 'Destination Port'}
              </span>
              <p className="text-base font-semibold text-white">{currentShipment.destination}</p>
              <p className="text-xs text-white/60 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D6B36A]" />
                {currentShipment.destinationPort}
              </p>
              <p className="text-xs text-emerald-400 font-medium pt-1">
                {t.trEta}: {currentShipment.estimatedArrival}
              </p>
            </div>
          </div>

          {/* Cargo & Vessel Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-[#191816] border border-white/5">
              <span className="text-white/40 block mb-0.5">{t.trCarrier}</span>
              <p className="font-semibold text-white truncate">{currentShipment.carrier}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#191816] border border-white/5">
              <span className="text-white/40 block mb-0.5">{t.trVesselFlight}</span>
              <p className="font-mono font-semibold text-[#f3e6c9] truncate">
                {currentShipment.vesselOrFlight}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#191816] border border-white/5">
              <span className="text-white/40 block mb-0.5">Gross Weight & Volume</span>
              <p className="font-semibold text-white">
                {currentShipment.weight} | {currentShipment.volume}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#191816] border border-white/5">
              <span className="text-white/40 block mb-0.5">{t.trContainer}</span>
              <p className="font-mono font-semibold text-white truncate">
                {currentShipment.containerId || 'N/A'}
              </p>
            </div>
          </div>

          {/* IoT Telemetry Monitoring Strip (if temperature logger present) */}
          {currentShipment.temperature && (
            <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-xl bg-gradient-to-r from-blue-950/40 via-[#1b1a17] to-emerald-950/30 border border-cyan-500/30 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="font-medium text-white/90">
                  {lang === 'ar' ? 'سلسلة التبريد وحساسات IoT:' : 'IoT Telemetry Cold-Chain Sensors:'}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <Thermometer className="w-4 h-4" />
                  <span>{currentShipment.temperature}</span>
                </div>
                {currentShipment.humidity && (
                  <div className="flex items-center gap-1.5 text-blue-300">
                    <Droplets className="w-4 h-4" />
                    <span>{currentShipment.humidity} RH</span>
                  </div>
                )}
                <div className="flex items-center gap-1 text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>ONLINE</span>
                </div>
              </div>
            </div>
          )}

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-xs text-white/60 mb-2 font-mono">
              <span>Progress Status</span>
              <span>{currentShipment.progressPercent}% Completed</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D6B36A] to-[#B99348] rounded-full transition-all duration-700"
                style={{ width: `${currentShipment.progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Detailed Milestone Timeline */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-semibold text-[#f3e6c9] tracking-wide uppercase">
              {t.trStepsTitle}
            </h4>
            <div className="relative border-s-2 border-[#D6B36A]/30 ms-3 space-y-6">
              {currentShipment.steps.map((step, idx) => (
                <div key={idx} className="relative ps-6 group">
                  {/* Step node dot */}
                  <span
                    className={`absolute -start-[9px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                      step.completed
                        ? 'border-[#D6B36A] bg-[#B99348]'
                        : 'border-white/30 bg-[#171614]'
                    } ${step.current ? 'ring-4 ring-[#D6B36A]/30 scale-110' : ''}`}
                  >
                    {step.completed && <CheckCircle2 className="w-3 h-3 text-[#141414]" />}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p
                        className={`text-sm font-medium ${
                          step.completed ? 'text-white' : 'text-white/50'
                        }`}
                      >
                        {step.title}
                      </p>
                      <span className="text-[11px] font-mono text-white/40">
                        {step.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-[#D6B36A]/80 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {step.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#191816] flex justify-between items-center text-xs">
          <span className="text-white/40">
            {lang === 'ar' ? 'بيانات معتمدة من شبكة UNIONSVC اللوجستية' : 'Verified by UNIONSVC Logistics Network'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            {lang === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
