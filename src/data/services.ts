import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'transportation',
    iconName: 'Truck',
    titleKey: 'c1h',
    descKey: 'c1',
    featuresKey: 'transportFeatures',
    badgeKey: 'Multimodal',
    image: '/assets/aistudio/Golden_Hour_Global_Logistics_3a8175b8.png'
  },
  {
    id: 'coordination',
    iconName: 'PackageCheck',
    titleKey: 'c2h',
    descKey: 'c2',
    featuresKey: 'coordinationFeatures',
    badgeKey: 'Dispatch & Port',
    image: '/assets/aistudio/Golden_Hour_Container_Port_cfd854b7.png'
  },
  {
    id: 'technology',
    iconName: 'Cpu',
    titleKey: 'c3h',
    descKey: 'c3',
    featuresKey: 'techFeatures',
    badgeKey: 'IoT & Cloud EDI',
    image: '/assets/aistudio/Cinematic_Logistics_Dashboard_Office_7bc2abdb.png'
  },
  {
    id: 'integration',
    iconName: 'Network',
    titleKey: 'c4h',
    descKey: 'c4',
    featuresKey: 'integrationFeatures',
    badgeKey: 'ERP / WMS API',
    image: '/assets/aistudio/Golden_Port_Highway_at_Sunset_569d23a1.png'
  },
  {
    id: 'coldchain',
    iconName: 'ThermometerSnowflake',
    titleKey: 'c5h',
    descKey: 'c5',
    featuresKey: 'coldchainFeatures',
    badgeKey: 'Pharma & Food',
    image: '/assets/aistudio/Golden_Hour_Global_Logistics_3a8175b8.png'
  },
  {
    id: 'warehousing',
    iconName: 'Warehouse',
    titleKey: 'c6h',
    descKey: 'c6',
    featuresKey: 'warehousingFeatures',
    badgeKey: 'Bonded & Hubs',
    image: '/assets/aistudio/Golden_Hour_Container_Port_cfd854b7.png'
  }
];

export const SERVICE_DETAILS_DATA: Record<string, {
  en: {
    overview: string;
    capabilities: string[];
    workflow: { step: string; desc: string }[];
    idealFor: string;
  };
  ar: {
    overview: string;
    capabilities: string[];
    workflow: { step: string; desc: string }[];
    idealFor: string;
  };
}> = {
  transportation: {
    en: {
      overview: "UNIONSVC's Transportation & Freight Management is an integrated multimodal service covering ocean shipping (FCL/LCL), scheduled air freight, and cross-border overland fleet routes.",
      capabilities: [
        "Full Container Load (FCL) & Less than Container Load (LCL) ocean freight",
        "Air cargo priority charters & consolidated belly freight",
        "Overland heavy-haul & temperature-controlled trucking fleets",
        "Port-to-port and door-to-door carrier contracting"
      ],
      workflow: [
        { step: "Phase 1: Capacity Booking", desc: "Real-time carrier allocation and equipment confirmation." },
        { step: "Phase 2: Origin Cargo Staging", desc: "Cargo pickup, weighbridge verification, and export documentation." },
        { step: "Phase 3: Line-Haul Transit", desc: "Satellite-tracked ocean, road, or air transport with milestone alerts." },
        { step: "Phase 4: Destination POD", desc: "Consignee dock delivery and digital proof-of-delivery sign-off." }
      ],
      idealFor: "Manufacturers, global exporters, retail distributors, and industrial suppliers."
    },
    ar: {
      overview: "تعتبر خدمة إدارة النقل والشحن الدولي من UNIONSVC حلاً شاملاً متعدد الوسائط يغطي الشحن البحري، والشحن الجوي، والنقل البري الثقيل عبر الحدود.",
      capabilities: [
        "شحن بحري للحاويات الكاملة (FCL) والشحنات المجزأة (LCL)",
        "شحن جوي سريع ورحلات شحن مخصصة للبضائع العاجلة",
        "أسطول نقل بري للشاحنات الثقيلة والمقطورات المبردة",
        "خدمات متكاملة من الباب إلى الباب أو من الميناء إلى الميناء"
      ],
      workflow: [
        { step: "المرحلة الأولى: حجز السعة", desc: "تخصيص مباشر للناقلين وتأكيد جاهزية الحاويات." },
        { step: "المرحلة الثانية: تجهيز المنشأ", desc: "استلام الشحنة، وزنها، وإعداد المستندات الجمركية للتصدير." },
        { step: "المرحلة الثالثة: مسار النقل الدولي", desc: "متابعة مسار الشحنة بالأقمار الصناعية مع إشعارات آلية بالمحطات." },
        { step: "المرحلة الرابعة: إثبات التسليم", desc: "التسليم في موقع العميل وتوثيق استلام الشحنة إلكترونياً." }
      ],
      idealFor: "المصانع، المصدرين، الموردين الدوليين، وشبكات التوزيع التجاري."
    }
  },

  coordination: {
    en: {
      overview: "Shipment Coordination provides single-point-of-contact management for every customs gate, port terminal, and transit milestone.",
      capabilities: [
        "Automated HS-Code classification and duty calculation",
        "Port terminal handling and demurrage risk mitigation",
        "Consolidated electronic bills of lading and documentation",
        "Live exception management and carrier coordination"
      ],
      workflow: [
        { step: "1. Pre-Arrival Clearance", desc: "Advance submission of electronic manifests before vessel/flight arrival." },
        { step: "2. Port Manifest Release", desc: "Immediate customs validation and duty settlement." },
        { step: "3. Terminal Gate Dispatch", desc: "Truck chassis assignment and gate clearance." }
      ],
      idealFor: "Companies importing raw materials, high-turnover consumer goods, and industrial equipment."
    },
    ar: {
      overview: "توفر خدمة تنسيق الشحنات نقطة اتصال مركزية واحدة لإدارة كافة بوابات التخليص الجمركي، محطات الموانئ، ومراحل المسار.",
      capabilities: [
        "تصنيف جمركي آلي وحساب دقيق للرسوم والضرائب",
        "إدارة المناولة في محطات الموانئ وتجنب غرامات التأخير",
        "بوالص شحن إلكترونية موحدة ووثائق متكاملة",
        "معالجة استباقية لأي تعثرات مع خطوط النقل"
      ],
      workflow: [
        { step: "1. التخليص المسبق", desc: "تقديم البيانات إلكترونياً قبل وصول السفينة أو الطائرة لتسريع الإجراءات." },
        { step: "2. الإفراج الجمركي", desc: "فحص المستندات وسداد الرسوم المينائية والجمركية فوراً." },
        { step: "3. خروج الشحنة", desc: "تخصيص الشاحنات ونقل البضاعة مباشرة للمستودع النهائي." }
      ],
      idealFor: "الشركات المستوردة للمواد الخام، السلع الاستهلاكية، والمعدات الصناعية."
    }
  },

  technology: {
    en: {
      overview: "Proprietary cloud telemetry and IoT hardware integration that transforms dark supply chains into live data streams.",
      capabilities: [
        "Live satellite GPS and cellular sensor pinging",
        "Automated milestone webhooks and custom alerts",
        "Cold-chain temperature & tilt breach telemetry",
        "Unified shipment analytics and carrier scorecards"
      ],
      workflow: [
        { step: "Sensor Affixing", desc: "Smart IoT loggers attached to container or pallet seals." },
        { step: "Cloud Uplink", desc: "Real-time transmission of temperature, humidity, and coordinates." },
        { step: "Predictive Analytics", desc: "Algorithms flag route anomalies and dynamically recalculate ETAs." }
      ],
      idealFor: "Enterprises requiring stringent compliance, audit trails, and automated customer updates."
    },
    ar: {
      overview: "دمج متقدم بين الحوسبة السحابية وحساسات إنترنت الأشياء (IoT) لتحويل سلاسل الإمداد التقليدية إلى تدفقات بيانات حية.",
      capabilities: [
        "تتبع حي بالأقمار الصناعية والشبكات الخلوية",
        "تنبيهات فورية وربط تلقائي عبر Webhooks",
        "مستشعرات حرارية ورطوبة لحماية سلاسل التبريد",
        "لوحات إحصائية دقيقة لتقييم أداء شركات النقل"
      ],
      workflow: [
        { step: "تثبيت المستشعرات", desc: "إرفاق أجهزة IoT ذكية على أختام الحاويات أو المنصات." },
        { step: "الاتصال السحابي", desc: "إرسال لحظي للحرارة والموقع الجغرافي والسرعة إلى المنصة." },
        { step: "التحليل الاستباقي", desc: "تنبيه النظام الفوري عند أي انحراف عن المسار وتحديث وقت الوصول." }
      ],
      idealFor: "المؤسسات التي تتطلب معايير امتثال مشددة، وسجلات تدقيق، وتحديثات تلقائية للعملاء."
    }
  },

  integration: {
    en: {
      overview: "Enterprise System Integration bridges UNIONSVC's freight engine directly into your SAP, Oracle, NetSuite, or custom WMS.",
      capabilities: [
        "RESTful API & GraphQL endpoints for real-time order sync",
        "EDI 214, 304, 310, and 856 logistics standard messaging",
        "Automated order-to-dispatch workflow triggers",
        "Enterprise-grade 256-bit encryption and RBAC security"
      ],
      workflow: [
        { step: "Sandbox Integration", desc: "Rapid testing using UNIONSVC's modern developer APIs." },
        { step: "Live Data Pipeline", desc: "Orders in your ERP automatically spawn carrier bookings." },
        { step: "Automated Feedback", desc: "Waybills, tracking links, and invoices feed back without manual input." }
      ],
      idealFor: "High-volume e-commerce brands, 3PL providers, and enterprise corporations."
    },
    ar: {
      overview: "يربط تكامل أنظمة المؤسسات محرك الشحن لدى UNIONSVC مباشرةً مع أنظمة SAP وOracle وNetSuite وبرامج إدارة المستودعات.",
      capabilities: [
        "واجهات برمجية RESTful وGraphQL لمزامنة الطلبات تلقائياً",
        "دعم بروتوكولات EDI القياسية (214, 304, 310, 856)",
        "أتمتة أوامر الشحن فور إصدار فواتير البيع",
        "تشفير عالي الأمان بمستوى 256-bit وصلاحيات وصول متقدمة"
      ],
      workflow: [
        { step: "بيئة الاختبار", desc: "تجربة سريعة للربط عبر وثائق المطورين التفاعلية." },
        { step: "تدفق البيانات الحي", desc: "أوامر البيع في نظامك تنشئ حجوزات شحن فورية دون تدخل بشري." },
        { step: "التغذية العكسية", desc: "استرجاع البوالص وروابط التتبع وحالة الشحنة إلى نظامك مباشرة." }
      ],
      idealFor: "متاجر التجارة الإلكترونية الكبرى، ومزودي الخدمات اللوجستية 3PL، والشركات متعددة الفروع."
    }
  },

  coldchain: {
    en: {
      overview: "End-to-end temperature controlled logistics ensuring product efficacy and full regulatory compliance across critical pharmaceutical and perishable shipments.",
      capabilities: [
        "Active & passive reefer container solutions (-20°C to +25°C)",
        "Certified GDP (Good Distribution Practice) handling",
        "Continuous logger data with digital temperature certs on delivery",
        "High-priority customs transit lane clearance"
      ],
      workflow: [
        { step: "Pre-Cooling & Loading", desc: "Inspection and temperature conditioning before cargo stuffing." },
        { step: "Monitored Transport", desc: "Real-time thermal tracking with redundant secondary sensor backup." },
        { step: "Arrival Verification", desc: "Instant download of temperature graph before consignee acceptance." }
      ],
      idealFor: "Pharmaceutical laboratories, medical distributors, biotech, and perishable food exporters."
    },
    ar: {
      overview: "نظام شامل للنقل المبرد يضمن سلامة المنتجات والامتثال التام للمعايير الدولية للأدوية والمواد سريعة التلف.",
      capabilities: [
        "حاويات مبردة نشطة وسلبية بنطاق (-20°C إلى +25°C)",
        "معايير توزيع صيدلاني معتمدة (GDP)",
        "سجلات حرارية إلكترونية وشهادات مطابقة فور التسليم",
        "مسارات تخليص جمركي سريعة وعالية الأولوية"
      ],
      workflow: [
        { step: "التبريد المسبق والتحميل", desc: "فحص الحاوية وضبط درجة الحرارة المطلوبة قبل التحميل." },
        { step: "النقل المراقب", desc: "متابعة حرارية مستمرة مع مستشعرات احتياطية لضمان عدم الانقطاع." },
        { step: "التحقق عند الوصول", desc: "استخراج تقرير بياني لدرجة الحرارة طوال الرحلة قبل توقيع الاستلام." }
      ],
      idealFor: "المصانع والمستودعات الدوائية، شركات التكنولوجيا الحيوية، ومصدري المنتجات الغذائية الطازجة."
    }
  },

  warehousing: {
    en: {
      overview: "Strategic warehousing, bonded staging, cross-docking, and inventory distribution designed for speed and regional supply chain responsiveness.",
      capabilities: [
        "Bonded and non-bonded warehouse facilities near key ports",
        "Cross-docking and container transshipment services",
        "Palletizing, shrink-wrapping, and barcode labeling",
        "Real-time inventory visibility through customer dashboard"
      ],
      workflow: [
        { step: "Container Inbound", desc: "Rapid container de-stuffing and piece-count verification." },
        { step: "Storage & Staging", desc: "Short or long-term warehousing under optimal conditions." },
        { step: "Outbound Dispatch", desc: "Consolidated picking and immediate distribution loading." }
      ],
      idealFor: "Regional traders, retail networks, and cross-border distribution chains."
    },
    ar: {
      overview: "مستودعات استراتيجية، مناطق تخزين جمركي معتمدة، ومراكز فرز سريع مصممة لزيادة سرعة وسلاسة سلاسل الإمداد الإقليمية.",
      capabilities: [
        "مستودعات حرة وجمركية مرخصة بالقرب من الموانئ الرئيسية",
        "خدمات الفرز السريع (Cross-Docking) وتفريغ الحاويات",
        "رص المنصات وتغليف الشحنات وطباعة الباركود الجمركي",
        "رؤية حية للمخزون عبر بوابة العميل الرقمية"
      ],
      workflow: [
        { step: "استلام الحاوية", desc: "تفريغ فوري للحاوية ومطابقة عدد الطرود وحالتها." },
        { step: "التخزين والترتيب", desc: "تخزين مؤقت أو طويل المدى وفق أعلى معايير الأمان." },
        { step: "إعادة التوزيع", desc: "تجهيز الشحنات وتحميلها مباشرة للشاحنات للتوزيع النهائي." }
      ],
      idealFor: "التجار الإقليميين، شبكات التجزئة الكبرى، وسلاسل التوزيع عبر الحدود."
    }
  }
};
