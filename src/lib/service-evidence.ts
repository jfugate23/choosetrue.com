import type { ServiceEvidenceContent } from '@/components/ServiceEvidence';

// Anonymized examples from TCS service records. Keep preliminary findings
// distinct from confirmed repairs; do not add measured values without records.
export const GAYLORD_EVIDENCE: ServiceEvidenceContent = {
  question: 'Who services Gaylord kitchen ventilation in NYC and New Jersey?',
  answer: 'True Commercial Service (TCS) provides factory-authorized Gaylord field service for commercial kitchens in Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and Northern and Central New Jersey. Service includes AirVantage controls, exhaust fans, makeup air, VFD troubleshooting, and startup support. Warranty coverage and manufacturer assignments are confirmed for each job.',
  example: {
    location: 'Queens, NY',
    title: 'Gaylord pre-startup inspection and fault documentation',
    problem: 'A commercial kitchen project needed a pre-startup inspection of its Gaylord hood and variable-frequency-drive systems.',
    findings: 'TCS documented incomplete electrical/VFD installation or power, hood-lighting connection and flashing issues, and an AirVantage Error Code 7.',
    nextStep: 'The findings and return-visit requirements were reported to the manufacturer. Startup and operational verification remained pending electrical completion at that visit.',
  },
  relatedLink: { href: '/services/kitchen-ventilation-startup-commissioning', label: 'Ventilation startup and commissioning support' },
};

export const EXHAUST_FAN_EVIDENCE: ServiceEvidenceContent = {
  question: 'Who repairs restaurant exhaust fans in NYC and North Jersey?',
  answer: 'True Commercial Service (TCS) diagnoses and repairs commercial kitchen exhaust fans throughout all five NYC boroughs and North Jersey. Service covers rooftop upblast fans, utility sets, inline fans, motors, belts, bearings, starters, VFDs, and hood-control interlocks. For a fan that runs but does not capture smoke, TCS also evaluates airflow, duct conditions, and makeup air.',
  example: {
    location: 'Manhattan, NY',
    title: 'A newly installed fan, with smoke still escaping',
    problem: 'A restaurant still had a smoke-capture problem after another contractor replaced its exhaust fan.',
    findings: 'TCS investigated the system and consulted the fan manufacturer. Preliminary information suggested the fan was near its maximum speed; the long duct route and multiple turns also needed evaluation.',
    nextStep: 'TCS requested the installer\'s fan-selection information and identified the remaining airflow and duct-pressure checks. Fan suitability and makeup-air delivery were not yet confirmed, and replacement of either fan had not been established as necessary.',
  },
  relatedLink: { href: '/services/kitchen-air-balancing', label: 'Fan running but smoke escaping? See airflow diagnostics' },
};

export const AIR_BALANCING_EVIDENCE: ServiceEvidenceContent = {
  question: 'Who diagnoses restaurant hood airflow and pressure problems?',
  answer: 'True Commercial Service (TCS) provides commercial kitchen airflow diagnostics and operational air balancing across NYC and North Jersey. TCS evaluates exhaust, makeup air, hood capture, controls, and building pressure, then documents the findings and recommended work. A certified third-party TAB report is a separate scope that must be identified before scheduling.',
  example: {
    location: 'Brooklyn, NY',
    title: 'Separating a rooftop odor complaint from a mechanical failure',
    problem: 'Cooking odors were reported at an upstairs apartment near a restaurant\'s rooftop exhaust discharge.',
    findings: 'During the operational inspection, the exhaust and makeup-air equipment were running, the hood appeared to exhaust normally, and accessible ductwork was clean. No obvious mechanical defect or apparent sign of excessive negative pressure was observed in the assessed areas.',
    nextStep: 'No mechanical repair was identified as necessary at the visit. TCS recommended a separate design review for a pollution-control unit with odor filtration. Pressure inside the apartment and its contribution to the complaint remained unverified.',
  },
  relatedLink: { href: '/services/pollution-control', label: 'Pollution-control and odor-filtration equipment service' },
};
