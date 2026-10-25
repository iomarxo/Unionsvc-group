export type Language = 'en' | 'ar';

export type TransportMode = 'ocean_fcl' | 'ocean_lcl' | 'air_freight' | 'road_freight' | 'multimodal';

export type CargoType = 'general' | 'temperature_controlled' | 'high_value' | 'hazardous';

export interface TrackingStep {
  title: string;
  location: string;
  timestamp: string;
  completed: boolean;
  current?: boolean;
}

export interface ShipmentData {
  trackingNumber: string;
  status: 'in_transit' | 'at_port' | 'customs_cleared' | 'out_for_delivery' | 'delivered';
  mode: TransportMode;
  origin: string;
  originPort: string;
  destination: string;
  destinationPort: string;
  carrier: string;
  vesselOrFlight: string;
  departureDate: string;
  estimatedArrival: string;
  cargoType: string;
  weight: string;
  volume: string;
  temperature?: string;
  humidity?: string;
  containerId?: string;
  progressPercent: number;
  steps: TrackingStep[];
}

export interface ServiceItem {
  id: string;
  iconName: string;
  titleKey: string;
  descKey: string;
  featuresKey: string;
  image?: string;
  badgeKey?: string;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'logistics' | 'technology' | 'pricing' | 'partnership';
  questionKey: string;
  answerKey: string;
}

export interface RateEstimateInput {
  origin: string;
  destination: string;
  mode: TransportMode;
  cargoType: CargoType;
  weightKg: number;
  volumeCbm: number;
}

export interface RateEstimateResult {
  baseFreight: number;
  fuelSurcharge: number;
  handlingFee: number;
  totalEstimate: number;
  estimatedDaysMin: number;
  estimatedDaysMax: number;
  carbonOffsetKg: number;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  mode: string;
  origin: string;
  destination: string;
  message: string;
}
