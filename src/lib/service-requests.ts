// Shared by the form and lead endpoint so submitted categories stay valid.
export const SERVICE_LABELS: Record<string, string> = {
  'kitchen-maintenance': 'Commercial kitchen preventive maintenance',
  'cooking-repair': 'Commercial cooking equipment repair',
  'hvac-repair': 'Commercial HVAC repair / maintenance',
  'refrigeration-repair': 'Commercial refrigeration / walk-in repair',
  'ice-machine-repair': 'Commercial ice machine repair',
  'hood-airflow': 'Hood airflow / smoke capture',
  'exhaust-fan': 'Exhaust fan repair',
  'makeup-air': 'Makeup air unit issue',
  controls: 'VFD / DCV / controls',
  'pollution-control': 'ESP / pollution-control issue',
  startup: 'Startup / commissioning',
  'performance-testing': 'Airflow / performance testing',
  manufacturer: 'Manufacturer warranty / startup',
  other: 'Other commercial equipment inquiry',
};
