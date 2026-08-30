export interface ManufacturerServiceData {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  badge?: string;
  systems: { title: string; description: string }[];
  issues: string[];
  equipment: string[];
  faqs: { question: string; answer: string }[];
}

export const MANUFACTURERS: ManufacturerServiceData[] = [
  {
    slug: 'gaylord',
    name: 'Gaylord',
    eyebrow: 'Factory-Authorized Gaylord Service',
    title: 'Gaylord hood, fan, makeup air, and controls service.',
    description: 'Factory-authorized diagnostics, startup, and repair for Gaylord commercial kitchen ventilation systems across NYC and New Jersey.',
    metaTitle: 'Gaylord Hood Service — NYC & NJ',
    metaDescription: 'Factory-authorized Gaylord hood, AirVantage, exhaust fan, makeup air, controls, and PCU service across NYC and New Jersey.',
    image: '/images/full-kitchen-ventilation-install.jpg',
    imageAlt: 'Commercial kitchen ventilation hoods and controls',
    badge: 'Factory authorized',
    systems: [
      { title: 'Hoods & AirVantage', description: 'Capture complaints, wash operation, sensors, airflow commands, and demand-control sequence.' },
      { title: 'Exhaust & makeup air', description: 'Fans, motors, belts, VFDs, starters, interlocks, rotation, and delivered airflow.' },
      { title: 'PCU & ESP equipment', description: 'Power, controls, filtration status, fan operation, faults, and system sequencing.' },
      { title: 'Startup & assigned service', description: 'Operational checkout, settings, punch-list findings, warranty assignments, and closeout.' },
    ],
    issues: ['Hood not capturing smoke', 'AirVantage fault or wrong fan speed', 'Exhaust fan will not start', 'Makeup air not operating', 'VFD or interlock fault', 'PCU or ESP system trip'],
    equipment: ['AirVantage DCV', 'EL / ELX ventilators', 'Ultima UV systems', 'Wash controls', 'PCU / ESP systems', 'Exhaust and supply fans'],
    faqs: [
      { question: 'Is TCS factory authorized for Gaylord service?', answer: 'Yes. True Commercial Service provides factory-authorized Gaylord field service. Assignment and warranty details are confirmed for the specific equipment and job.' },
      { question: 'Can TCS troubleshoot the complete Gaylord system?', answer: 'Yes. TCS evaluates the hood, AirVantage controls, exhaust fan, makeup air, VFDs, interlocks, airflow, and pollution-control equipment as one operating system.' },
      { question: 'Do you service Gaylord systems outside Manhattan?', answer: 'Yes. TCS serves commercial kitchens across all five NYC boroughs and Northern and Central New Jersey.' },
    ],
  },
  {
    slug: 'captiveaire',
    name: 'CaptiveAire',
    eyebrow: 'CaptiveAire Kitchen Ventilation Service',
    title: 'CaptiveAire hood, fan, makeup air, and control repair.',
    description: 'Focused troubleshooting for CaptiveAire commercial kitchen ventilation equipment, airflow, fans, controls, and connected systems.',
    metaTitle: 'CaptiveAire Hood Repair — NYC & NJ',
    metaDescription: 'CaptiveAire hood, exhaust fan, makeup air, ECPM03, SC, DCV, VFD, and PCU troubleshooting across NYC and New Jersey.',
    image: '/images/captiveaire-hood-active-kitchen.jpg',
    imageAlt: 'CaptiveAire hood operating over a commercial cooking line',
    systems: [
      { title: 'Hoods & capture', description: 'Smoke escape, weak draw, filter loading, supply-air interference, and capture conditions.' },
      { title: 'SC & DCV controls', description: 'ECPM03, HMI, sensors, enable signals, VFD communication, and sequence faults.' },
      { title: 'Fans & makeup air', description: 'Exhaust and supply fans, motors, belts, airflow, dampers, heat enable, and interlocks.' },
      { title: 'PCU & connected equipment', description: 'Pollution-control operation, fan commands, pressure, alarms, and system integration.' },
    ],
    issues: ['Supply or MUA interlock fault', 'VFD communication fault', 'Fan not responding to controls', 'Temperature sensor alarm', 'Kitchen under negative pressure', 'Weak hood capture'],
    equipment: ['ECPM03 controls', 'SC / DCV systems', 'HMI interfaces', 'Exhaust fans', 'Makeup air units', 'Pollution-control units'],
    faqs: [
      { question: 'Do you repair CaptiveAire control faults?', answer: 'Yes. TCS troubleshoots control power, ECPM03-based SC and DCV systems, sensors, VFD communication, interlocks, and fan commands.' },
      { question: 'Can you determine whether the problem is the hood, fan, or makeup air?', answer: 'Yes. TCS checks capture, exhaust, supply, controls, and building pressure together instead of judging one component in isolation.' },
      { question: 'Does this page claim CaptiveAire factory authorization?', answer: 'No. TCS provides expert field service on CaptiveAire equipment but does not represent itself as an authorized CaptiveAire service provider.' },
    ],
  },
  {
    slug: 'accurex',
    name: 'Accurex',
    eyebrow: 'Accurex Kitchen Ventilation Service',
    title: 'Accurex exhaust fan, makeup air, and controls service.',
    description: 'Commercial kitchen ventilation troubleshooting for Accurex fans, makeup-air units, hoods, airflow controls, and connected equipment.',
    metaTitle: 'Accurex Fan Repair — NYC & NJ',
    metaDescription: 'Accurex exhaust fan, makeup air unit, Vari-Flow, VFD, hood, and kitchen ventilation troubleshooting across NYC and New Jersey.',
    image: '/images/rooftop-makeup-air-unit-install.jpg',
    imageAlt: 'Commercial rooftop makeup air unit serving a kitchen ventilation system',
    systems: [
      { title: 'Exhaust fans', description: 'Upblast, utility, and inline fans; motors, belts, bearings, rotation, vibration, and airflow.' },
      { title: 'Makeup air units', description: 'Blowers, drives, heat enable, safeties, dampers, filters, controls, and delivered air.' },
      { title: 'Vari-Flow & VFD controls', description: 'Sensors, speed commands, drives, interlocks, contactors, and sequence-of-operation faults.' },
      { title: 'Whole-system performance', description: 'Hood capture, exhaust-to-supply relationship, kitchen pressure, and operating verification.' },
    ],
    issues: ['Exhaust fan down or noisy', 'Makeup air will not start', 'Fan speed is incorrect', 'VFD repeatedly faults', 'Kitchen doors hard to open', 'Smoke escaping the hood'],
    equipment: ['Upblast exhaust fans', 'Utility-set fans', 'Makeup air units', 'Vari-Flow controls', 'VFD systems', 'Kitchen hoods'],
    faqs: [
      { question: 'Do you service Accurex exhaust and makeup-air fans?', answer: 'Yes. TCS services the mechanical, electrical, controls, and airflow conditions that affect Accurex exhaust and supply equipment.' },
      { question: 'Can you troubleshoot Accurex Vari-Flow operation?', answer: 'Yes. TCS can evaluate sensors, VFD commands, fan response, interlocks, and the operating sequence between exhaust and makeup air.' },
      { question: 'Do you provide airflow readings after the repair?', answer: 'When the complaint or repair requires it, TCS verifies fan operation, hood capture, airflow, and the exhaust-to-supply relationship.' },
    ],
  },
  {
    slug: 'halton',
    name: 'Halton',
    eyebrow: 'Halton Kitchen Ventilation Service',
    title: 'Halton hood, controls, and pollution-control service.',
    description: 'Diagnostics and operational support for Halton commercial kitchen hoods, demand controls, exhaust, makeup air, and pollution-control systems.',
    metaTitle: 'Halton Hood Service — NYC & NJ',
    metaDescription: 'Halton hood, M.A.R.V.E.L., Capture Jet, Capture Ray, PolluStop, fan, makeup air, and controls service across NYC and New Jersey.',
    image: '/images/upscale-commercial-kitchen-line.jpg',
    imageAlt: 'High-volume commercial cooking line beneath ventilation hoods',
    systems: [
      { title: 'Hoods & Capture Jet', description: 'Capture performance, supply-air effects, exhaust volume, controls, and operating condition.' },
      { title: 'M.A.R.V.E.L. controls', description: 'Demand-control response, sensors, fan commands, VFD operation, alarms, and sequencing.' },
      { title: 'Capture Ray & PolluStop', description: 'UV and pollution-control operating faults, airflow, interlocks, alarms, and connected fans.' },
      { title: 'Exhaust & makeup air', description: 'Fan operation, drives, starters, delivered airflow, pressure, and system balance.' },
    ],
    issues: ['Demand controls not responding', 'Hood capture is inconsistent', 'Exhaust or supply fan fault', 'VFD or sensor alarm', 'Pollution-control system fault', 'Kitchen pressure complaint'],
    equipment: ['Capture Jet hoods', 'M.A.R.V.E.L. controls', 'Capture Ray UV', 'PolluStop systems', 'Exhaust fans', 'Makeup air equipment'],
    faqs: [
      { question: 'Can TCS troubleshoot Halton demand-control systems?', answer: 'Yes. TCS evaluates sensors, fan commands, VFD response, interlocks, airflow, and the complete operating sequence.' },
      { question: 'Do you service Halton pollution-control equipment?', answer: 'TCS diagnoses operating faults involving controls, airflow, fans, interlocks, alarms, and electrical components. Cleaning requirements are handled separately.' },
      { question: 'Can you help with a Halton hood that is not capturing smoke?', answer: 'Yes. The diagnosis can include exhaust airflow, supply-air interference, fan speed, controls, kitchen pressure, and the actual cooking plume.' },
    ],
  },
  {
    slug: 'greenheck',
    name: 'Greenheck',
    eyebrow: 'Greenheck Kitchen Ventilation Service',
    title: 'Greenheck fan, makeup air, and kitchen airflow service.',
    description: 'Repair and operational troubleshooting for Greenheck commercial kitchen fans, makeup-air equipment, controls, and airflow problems.',
    metaTitle: 'Greenheck Fan Repair — NYC & NJ',
    metaDescription: 'Greenheck commercial kitchen exhaust fan, makeup air, Vari-Green motor, controls, and airflow service across NYC and New Jersey.',
    image: '/images/rooftop-exhaust-fans-commercial.jpg',
    imageAlt: 'Commercial rooftop exhaust fans serving kitchen ventilation systems',
    systems: [
      { title: 'Kitchen exhaust fans', description: 'Upblast, utility, and inline fans; motors, belts, bearings, wheels, rotation, and vibration.' },
      { title: 'Makeup air equipment', description: 'Supply fans, blowers, filters, dampers, heating operation, safeties, and controls.' },
      { title: 'Motors & speed controls', description: 'Vari-Green motors, VFDs, starters, speed commands, control power, and fan response.' },
      { title: 'Airflow & system balance', description: 'Delivered exhaust and supply, hood capture, pressure complaints, and operating verification.' },
    ],
    issues: ['Rooftop fan will not run', 'Fan noise or vibration', 'Weak exhaust airflow', 'Makeup air not keeping up', 'Motor or speed-control fault', 'Kitchen pressure problem'],
    equipment: ['Upblast exhaust fans', 'Utility-set fans', 'Inline fans', 'Vari-Green motors', 'Makeup air units', 'Fan controls'],
    faqs: [
      { question: 'Do you repair Greenheck commercial kitchen exhaust fans?', answer: 'Yes. TCS diagnoses motor, belt, bearing, fan wheel, starter, disconnect, speed-control, VFD, and airflow problems.' },
      { question: 'Can you service Greenheck makeup-air equipment?', answer: 'Yes. TCS evaluates fan operation, belts, filters, dampers, controls, heat enable, safeties, interlocks, and delivered airflow within the approved job scope.' },
      { question: 'Can you verify airflow after a Greenheck fan repair?', answer: 'Yes. When appropriate, TCS verifies rotation, amperage, speed, operating condition, hood capture, and airflow after service.' },
    ],
  },
];

export function getManufacturer(slug: string) {
  return MANUFACTURERS.find((manufacturer) => manufacturer.slug === slug);
}
