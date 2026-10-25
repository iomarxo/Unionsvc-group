import { ShipmentData } from '../types';

export const SAMPLE_SHIPMENTS: Record<string, ShipmentData> = {
  'UN-8921-X': {
    trackingNumber: 'UN-8921-X',
    status: 'in_transit',
    mode: 'ocean_fcl',
    origin: 'Shanghai, China',
    originPort: 'Port of Shanghai (Yangshan Deep Water)',
    destination: 'Dubai, UAE',
    destinationPort: 'Jebel Ali Terminal 2 (AEJEA)',
    carrier: 'Cosco & Union Maritime Alliance',
    vesselOrFlight: 'MV Golden Horizon / V.049W',
    departureDate: 'Oct 14, 2026',
    estimatedArrival: 'Nov 02, 2026',
    cargoType: 'High-Precision Electronic Machinery & Components',
    weight: '24,650 KG',
    volume: '68.4 CBM',
    temperature: '+21.4°C',
    humidity: '42%',
    containerId: 'UNLU-849201-9',
    progressPercent: 68,
    steps: [
      {
        title: 'Booking & Container Gate-In',
        location: 'Shanghai Logistics Hub, CN',
        timestamp: 'Oct 12, 2026 - 08:30 AM',
        completed: true
      },
      {
        title: 'Export Customs Inspection Cleared',
        location: 'Shanghai Customs Post, CN',
        timestamp: 'Oct 13, 2026 - 16:45 PM',
        completed: true
      },
      {
        title: 'Vessel Laden & Cast Off',
        location: 'Port of Shanghai Berth 4',
        timestamp: 'Oct 14, 2026 - 22:15 PM',
        completed: true
      },
      {
        title: 'Malacca Strait Maritime Waypoint Passed',
        location: 'Singapore VTS Sector 3',
        timestamp: 'Oct 21, 2026 - 11:20 AM',
        completed: true,
        current: true
      },
      {
        title: 'Approaching Arabian Sea Waypoint',
        location: 'Indian Ocean Corridor West',
        timestamp: 'Expected Oct 28, 2026',
        completed: false
      },
      {
        title: 'Vessel Berthing & Container Discharge',
        location: 'Jebel Ali Port (Dubai), AE',
        timestamp: 'ETA: Nov 02, 2026',
        completed: false
      }
    ]
  },

  'UN-4402-K': {
    trackingNumber: 'UN-4402-K',
    status: 'customs_cleared',
    mode: 'air_freight',
    origin: 'Frankfurt, Germany',
    originPort: 'Frankfurt CargoCity South (FRA)',
    destination: 'Riyadh, Saudi Arabia',
    destinationPort: 'King Khalid Intl. Cargo Hub (RUH)',
    carrier: 'Lufthansa Cargo / Union Air Charter',
    vesselOrFlight: 'Flight UN-941 (B777F)',
    departureDate: 'Oct 24, 2026',
    estimatedArrival: 'Oct 25, 2026',
    cargoType: 'Biomedical Cold-Chain Vaccines & Diagnostics',
    weight: '1,850 KG',
    volume: '8.2 CBM',
    temperature: '+4.2°C (Cold-Chain Verified)',
    humidity: '35%',
    containerId: 'RAP-99214-LH',
    progressPercent: 84,
    steps: [
      {
        title: 'Cold-Chain Staging & Pallet Inspection',
        location: 'Frankfurt Pharma Hub, DE',
        timestamp: 'Oct 23, 2026 - 14:00 PM',
        completed: true
      },
      {
        title: 'Aircraft Loading & Sensor Handshake',
        location: 'FRA Apron West Stand 41',
        timestamp: 'Oct 24, 2026 - 02:15 AM',
        completed: true
      },
      {
        title: 'Touchdown & Priority Ramp Offload',
        location: 'Riyadh Air Cargo Terminal (RUH)',
        timestamp: 'Oct 24, 2026 - 11:30 AM',
        completed: true
      },
      {
        title: 'SFDA Regulatory & Customs Release',
        location: 'RUH Air Cargo Customs Post',
        timestamp: 'Oct 24, 2026 - 17:00 PM',
        completed: true,
        current: true
      },
      {
        title: 'Temperature-Controlled Final Mile Dispatch',
        location: 'Riyadh Medical City Logistics Depot',
        timestamp: 'ETA: Oct 25, 2026 - 09:00 AM',
        completed: false
      }
    ]
  },

  'UN-7719-M': {
    trackingNumber: 'UN-7719-M',
    status: 'delivered',
    mode: 'ocean_lcl',
    origin: 'Rotterdam, Netherlands',
    originPort: 'Port of Rotterdam Maasvlakte (NLRTM)',
    destination: 'Dammam, Saudi Arabia',
    destinationPort: 'King Abdulaziz Port (SAKAD)',
    carrier: 'Maersk Union Logistics',
    vesselOrFlight: 'MV Northern Pioneer / V.128E',
    departureDate: 'Sep 29, 2026',
    estimatedArrival: 'Oct 20, 2026',
    cargoType: 'Industrial Valves & Precision Tubing',
    weight: '14,200 KG',
    volume: '34.5 CBM',
    temperature: 'Ambient (+24°C)',
    humidity: '48%',
    containerId: 'MRKU-410928-1',
    progressPercent: 100,
    steps: [
      {
        title: 'Cargo Received & Bonded Warehouse Staging',
        location: 'Rotterdam Logistics Gateway, NL',
        timestamp: 'Sep 27, 2026',
        completed: true
      },
      {
        title: 'Vessel Departs Port of Rotterdam',
        location: 'NLRTM Deepwater Berth',
        timestamp: 'Sep 29, 2026',
        completed: true
      },
      {
        title: 'Suez Canal Convoy Transit Cleared',
        location: 'Port Said Gateway, EG',
        timestamp: 'Oct 08, 2026',
        completed: true
      },
      {
        title: 'Port Discharge & Deconsolidation',
        location: 'Dammam Sea Terminal, SA',
        timestamp: 'Oct 18, 2026',
        completed: true
      },
      {
        title: 'Delivery Confirmed & Signed POD',
        location: 'Industrial City 2 Consignee Facility, Dammam',
        timestamp: 'Oct 20, 2026 - 14:15 PM',
        completed: true,
        current: true
      }
    ]
  },

  'UN-5103-T': {
    trackingNumber: 'UN-5103-T',
    status: 'out_for_delivery',
    mode: 'road_freight',
    origin: 'Dubai Logistics City, UAE',
    originPort: 'DLC Central Cross-Dock Hub',
    destination: 'Jeddah, Saudi Arabia',
    destinationPort: 'Jeddah South Logistics Zone',
    carrier: 'UNIONSVC Overland Heavy Fleet',
    vesselOrFlight: 'Volvo FH16 Euro-6 / Fleet #TRK-882',
    departureDate: 'Oct 22, 2026',
    estimatedArrival: 'Oct 25, 2026',
    cargoType: 'Automotive Spares & Retail Consumer Tech',
    weight: '18,500 KG',
    volume: '74.0 CBM',
    temperature: 'Air-Conditioned Cab (+22°C)',
    humidity: '40%',
    containerId: 'UN-TRL-9941',
    progressPercent: 92,
    steps: [
      {
        title: 'Pallet Cross-Dock & GPS Seal Affixed',
        location: 'Dubai Logistics City Terminal A',
        timestamp: 'Oct 22, 2026 - 19:00 PM',
        completed: true
      },
      {
        title: 'Cross-Border Clearance at Batha Customs',
        location: 'UAE-KSA Border Post (Al Batha)',
        timestamp: 'Oct 23, 2026 - 06:45 AM',
        completed: true
      },
      {
        title: 'Riyadh Transshipment Hub Waypoint',
        location: 'Riyadh Ring Road Logistics Oasis',
        timestamp: 'Oct 24, 2026 - 04:30 AM',
        completed: true
      },
      {
        title: 'En Route to Jeddah Metro Corridor',
        location: 'Highway 40 Westbound Marker 812',
        timestamp: 'Oct 25, 2026 - 07:15 AM',
        completed: true,
        current: true
      },
      {
        title: 'Consignee Dock Unloading Scheduled',
        location: 'Jeddah Commercial Hub Depot 7',
        timestamp: 'ETA: Today at 16:30 PM',
        completed: false
      }
    ]
  }
};

/**
 * Generate a dynamic validated tracking profile for any random entered ID
 */
export function getOrCreateShipment(id: string): ShipmentData {
  const cleanId = id.trim().toUpperCase();
  if (SAMPLE_SHIPMENTS[cleanId]) {
    return SAMPLE_SHIPMENTS[cleanId];
  }

  // Generate dynamic realistic tracking for any user string
  return {
    trackingNumber: cleanId,
    status: 'in_transit',
    mode: 'multimodal',
    origin: 'Regional Distribution Center',
    originPort: 'Intermodal Gateway Hub',
    destination: 'Commercial Delivery Destination',
    destinationPort: 'Consignee Receiving Terminal',
    carrier: 'UNIONSVC Global Network',
    vesselOrFlight: `UN-CARRIER / REF-${cleanId.slice(-4) || '8810'}`,
    departureDate: 'Current Cycle',
    estimatedArrival: 'In 3-5 Business Days',
    cargoType: 'Commercial Freight Consignment',
    weight: '6,400 KG',
    volume: '22.0 CBM',
    temperature: 'Monitored Normal (+22°C)',
    humidity: '45%',
    containerId: `UNLU-${cleanId.replace(/[^A-Z0-9]/g, '').slice(0, 6) || '772183'}-0`,
    progressPercent: 55,
    steps: [
      {
        title: 'Consignment Electronic Manifest Generated',
        location: 'Origin Processing Center',
        timestamp: '2 Days Ago - 09:00 AM',
        completed: true
      },
      {
        title: 'Loaded onto Prime Multimodal Mover',
        location: 'Central Rail/Road Yard',
        timestamp: 'Yesterday - 18:30 PM',
        completed: true
      },
      {
        title: 'In Transit Along Designated Freight Corridor',
        location: 'Regional Intermodal Sector Waypoint',
        timestamp: 'Active Satellite Telemetry Ping',
        completed: true,
        current: true
      },
      {
        title: 'Arrival at Destination Logistics Node',
        location: 'Local Sorting & Deconsolidation Hub',
        timestamp: 'Expected within 48 Hours',
        completed: false
      },
      {
        title: 'Final Mile Delivery to Consignee Facility',
        location: 'Destination Address',
        timestamp: 'Scheduled for Delivery',
        completed: false
      }
    ]
  };
}
