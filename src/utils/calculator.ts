import { RateEstimateInput, RateEstimateResult } from '../types';

export const TRADE_HUBS = [
  { id: 'dubai', nameEn: 'Dubai, UAE (Jebel Ali / DXB)', nameAr: 'دبي، الإمارات (جبل علي / DXB)', lat: 25.2, lng: 55.27 },
  { id: 'riyadh', nameEn: 'Riyadh, Saudi Arabia (RUH)', nameAr: 'الرياض، السعودية (RUH)', lat: 24.71, lng: 46.67 },
  { id: 'jeddah', nameEn: 'Jeddah, Saudi Arabia (JED)', nameAr: 'جدة، السعودية (JED)', lat: 21.48, lng: 39.19 },
  { id: 'dammam', nameEn: 'Dammam, Saudi Arabia (KAD)', nameAr: 'الدمام، السعودية (KAD)', lat: 26.42, lng: 50.09 },
  { id: 'shanghai', nameEn: 'Shanghai, China (SHA / Yangshan)', nameAr: 'شنغهاي، الصين (SHA / Yangshan)', lat: 31.23, lng: 121.47 },
  { id: 'rotterdam', nameEn: 'Rotterdam, Netherlands (RTM)', nameAr: 'روتردام، هولندا (RTM)', lat: 51.92, lng: 4.47 },
  { id: 'newyork', nameEn: 'New York, USA (JFK / NY/NJ)', nameAr: 'نيويورك، أمريكا (JFK / NY/NJ)', lat: 40.71, lng: -74.0 },
  { id: 'singapore', nameEn: 'Singapore Gateway (SIN)', nameAr: 'سنغافورة (SIN)', lat: 1.35, lng: 103.81 },
  { id: 'hamburg', nameEn: 'Hamburg, Germany (HAM)', nameAr: 'هامبورغ، ألمانيا (HAM)', lat: 53.55, lng: 9.99 },
  { id: 'london', nameEn: 'London, UK (LHR / Gateway)', nameAr: 'لندن، بريطانيا (LHR / Gateway)', lat: 51.5, lng: -0.12 }
];

export function calculateFreightEstimate(input: RateEstimateInput): RateEstimateResult {
  const { mode, cargoType, weightKg, volumeCbm } = input;

  // Chargeable weight calculation (Air uses 1:6 ratio, Road 1:3, Sea 1:1)
  let chargeableWeight = weightKg;
  let baseRatePerKg = 0.45;
  let baseHandling = 180;
  let fuelMultiplier = 0.14;
  let daysMin = 14;
  let daysMax = 22;
  let carbonFactorPerKg = 0.08;

  switch (mode) {
    case 'air_freight':
      chargeableWeight = Math.max(weightKg, volumeCbm * 167);
      baseRatePerKg = 3.85;
      baseHandling = 290;
      fuelMultiplier = 0.22;
      daysMin = 2;
      daysMax = 4;
      carbonFactorPerKg = 0.65;
      break;

    case 'ocean_fcl':
      chargeableWeight = Math.max(weightKg, volumeCbm * 1000);
      baseRatePerKg = 0.28;
      baseHandling = 420;
      fuelMultiplier = 0.16;
      daysMin = 18;
      daysMax = 26;
      carbonFactorPerKg = 0.04;
      break;

    case 'ocean_lcl':
      chargeableWeight = Math.max(weightKg, volumeCbm * 1000);
      baseRatePerKg = 0.38;
      baseHandling = 240;
      fuelMultiplier = 0.15;
      daysMin = 20;
      daysMax = 30;
      carbonFactorPerKg = 0.05;
      break;

    case 'road_freight':
      chargeableWeight = Math.max(weightKg, volumeCbm * 333);
      baseRatePerKg = 0.65;
      baseHandling = 160;
      fuelMultiplier = 0.18;
      daysMin = 3;
      daysMax = 6;
      carbonFactorPerKg = 0.18;
      break;

    case 'multimodal':
      chargeableWeight = Math.max(weightKg, volumeCbm * 500);
      baseRatePerKg = 1.45;
      baseHandling = 310;
      fuelMultiplier = 0.19;
      daysMin = 7;
      daysMax = 12;
      carbonFactorPerKg = 0.22;
      break;
  }

  // Cargo type multiplier
  let cargoMultiplier = 1.0;
  if (cargoType === 'temperature_controlled') {
    cargoMultiplier = 1.45;
    baseHandling += 150;
  } else if (cargoType === 'hazardous') {
    cargoMultiplier = 1.6;
    baseHandling += 250;
  } else if (cargoType === 'high_value') {
    cargoMultiplier = 1.3;
    baseHandling += 180;
  }

  const baseFreight = Math.round(chargeableWeight * baseRatePerKg * cargoMultiplier);
  const fuelSurcharge = Math.round(baseFreight * fuelMultiplier);
  const handlingFee = baseHandling;
  const totalEstimate = baseFreight + fuelSurcharge + handlingFee;
  const carbonOffsetKg = Math.round(chargeableWeight * carbonFactorPerKg);

  return {
    baseFreight,
    fuelSurcharge,
    handlingFee,
    totalEstimate,
    estimatedDaysMin: daysMin,
    estimatedDaysMax: daysMax,
    carbonOffsetKg
  };
}
