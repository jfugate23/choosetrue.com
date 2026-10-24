export type GrowthService = {
  slug: string;
  seoTitle: string;
  description: string;
  title: string;
  intro: string;
  availability: string;
  requestType: string;
  equipment: string[];
  symptoms: string[];
  sections: { title: string; text: string }[];
  related: { href: string; label: string }[];
  faqs: { question: string; answer: string }[];
};

// Reviewed service pages enter the sitemap. Every request is reviewed by
// equipment, scope, service location, and schedule before dispatch.
export const GROWTH_SERVICES: Record<string, GrowthService> = {
  'cooking-equipment': {
    slug: 'cooking-equipment',
    seoTitle: 'Cooking Equipment Repair | NYC & NJ',
    description: 'Commercial oven, fryer, range, and griddle repair requests in NYC and North Jersey. Send TCS the model, symptoms, and location to confirm service.',
    title: 'Commercial cooking equipment repair in NYC and North Jersey',
    intro: 'An oven that stops heating or a fryer that will not stay on can interrupt the whole line. TCS reviews commercial cooking-equipment repair requests directly, with the model, symptoms, parts needs, and service location confirmed before dispatch.',
    availability: 'Direct service requests are welcome. Acceptance depends on the equipment, repair scope, parts support, schedule, and location. Manufacturer warranty authorization is confirmed separately for each assignment.',
    requestType: 'cooking-repair',
    equipment: ['Combi and convection ovens', 'Pizza and conveyor ovens', 'Commercial ranges and griddles', 'Fryers and charbroilers', 'Steamers and heated holding equipment'],
    symptoms: ['Oven does not heat or recover between loads', 'Uneven cooking or inconsistent temperature', 'Fault code or interrupted cooking cycle', 'Fan, conveyor, or rotating-deck problem', 'Steam or cleaning cycle does not complete'],
    sections: [
      { title: 'Start with the operating complaint', text: 'Tell us what changed, when it happens, and which cooking modes still work. A unit that heats in one mode but not another needs a different investigation from a unit with no power. Photos of the data plate and display help identify the equipment before a visit. Keep the original fault information rather than repeatedly resetting the oven.' },
      { title: 'Brand and model matter', text: 'Lainox combi ovens and Cuppone pizza ovens have dedicated service-request pages below. Other equipment is reviewed by model and scope. Listing a brand does not establish factory authorization, warranty coverage, or access to every replacement part. For warranty work, include the dealer or manufacturer work order so the correct approval process can be followed.' },
      { title: 'Check the equipment and its surroundings', text: 'A cooking complaint can involve the appliance, its controls, utilities, or the kitchen environment. TCS has specialized ventilation experience and can evaluate related airflow or hood complaints when they are part of the assignment. Gas piping, installation, and other regulated work are confirmed separately before anyone commits to the job.' },
      { title: 'Make the visit productive', text: 'Include the business address, model and serial number, fault code, operating symptoms, and best site contact. Tell us whether the equipment is gas or electric, whether building access requires an appointment, and whether the kitchen can release the equipment for testing. Model-specific diagnosis comes before a repair recommendation or parts order.' },
    ],
    related: [
      { href: '/manufacturer-service/lainox', label: 'Lainox combi oven repair' },
      { href: '/manufacturer-service/cuppone', label: 'Cuppone pizza oven repair' },
      { href: '/blog/commercial-oven-not-heating-evenly', label: 'Commercial oven not heating evenly: what to record' },
      { href: '/services/kitchen-ventilation', label: 'Kitchen ventilation diagnostics' },
    ],
    faqs: [
      { question: 'Can restaurant owners request cooking-equipment service directly?', answer: 'Yes. Send the manufacturer, model, serial number, symptoms, and service ZIP code. TCS confirms the scope, schedule, and equipment fit before accepting the assignment.' },
      { question: 'Do you repair Lainox and Cuppone ovens?', answer: 'TCS accepts direct service requests for Lainox combi ovens and Cuppone pizza ovens. Use the brand pages to send equipment details. Parts availability and warranty authorization are confirmed for the specific job.' },
      { question: 'Do you cover Manhattan, Brooklyn, and New Jersey?', answer: 'TCS reviews requests across the five NYC boroughs and its North and Central Jersey service area. Coverage depends on job scope, scheduling, travel, and site access.' },
    ],
  },
  hvac: {
    slug: 'hvac',
    seoTitle: 'Commercial HVAC Repair | NYC & NJ',
    description: 'Commercial HVAC repair, troubleshooting, and maintenance requests in NYC and North Jersey. Rooftop units, comfort complaints, filters, and airflow.',
    title: 'Commercial HVAC service in NYC and North Jersey',
    intro: 'TCS reviews heating, cooling, airflow, and maintenance requests for restaurants and commercial facilities. Describe the occupied-space problem and the equipment involved so the scope can be confirmed before a visit.',
    availability: 'Commercial HVAC assignments are accepted after review of the equipment, location, schedule, and required scope. Refrigerant, gas, installation, and other licensed work must be confirmed before dispatch.',
    requestType: 'hvac-repair',
    equipment: ['Packaged rooftop units', 'Commercial split systems', 'Supply and return air systems', 'HVAC filters and accessible maintenance items', 'Related kitchen exhaust and makeup air systems'],
    symptoms: ['Dining room or commercial space will not cool', 'Heating does not maintain the occupied-space temperature', 'Weak supply air or uneven comfort between rooms', 'Recurring controls faults or equipment shutdowns', 'Kitchen becomes hot or drafty when the hood runs'],
    sections: [
      { title: 'Heating and cooling complaints need a complete picture', text: 'Record the thermostat setting, displayed temperature, occupied hours, and whether the problem affects one area or the whole building. Note whether the indoor fan runs, whether the problem changes with outdoor weather, and whether it follows the kitchen exhaust schedule. These observations help define the investigation without assuming which part has failed.' },
      { title: 'Rooftop units and planned maintenance', text: 'For a rooftop unit, send the model, serial number, unit number, and roof-access instructions. Maintenance planning starts with the equipment inventory and manufacturer requirements. Filter dimensions, access, operating hours, visible condition, and previous service records help establish a practical scope. Replacing a filter does not establish that the rest of the unit is operating correctly.' },
      { title: 'Restaurant HVAC and makeup air work together', text: 'A restaurant can have separate comfort-cooling and kitchen-airflow complaints at the same time. TCS specializes in tracing exhaust, makeup air, controls, and pressure relationships. If the kitchen becomes uncomfortable when the hood starts, mention that sequence. Related ventilation work can be evaluated alongside the HVAC complaint when it is included in the agreed scope.' },
      { title: 'Plan access and responsibility before the visit', text: 'Tell us who controls the equipment, whether the landlord has a service contractor, and whether roof access requires management approval. Share recent repair reports and any known warranty coverage. TCS confirms which work can be accepted and identifies scope that needs a separate appropriately qualified contractor before dispatch.' },
    ],
    related: [
      { href: '/blog/restaurant-hvac-or-makeup-air-problem', label: 'Restaurant too hot: HVAC or makeup air?' },
      { href: '/services/makeup-air-unit-repair', label: 'Makeup air unit repair' },
      { href: '/services/kitchen-air-balancing', label: 'Kitchen airflow and pressure diagnosis' },
      { href: '/locations', label: 'NYC and New Jersey service coverage' },
    ],
    faqs: [
      { question: 'Do you accept commercial HVAC repair requests?', answer: 'Yes. TCS reviews commercial HVAC troubleshooting, repair, and maintenance requests. Equipment, service scope, licensing requirements, access, and scheduling are confirmed before acceptance.' },
      { question: 'Can you help distinguish an AC problem from a ventilation problem?', answer: 'TCS can review comfort complaints together with exhaust, makeup air, controls, and pressure conditions when the assignment includes that scope. A hot kitchen does not identify the failed component by itself.' },
      { question: 'Can I request HVAC filter maintenance?', answer: 'Yes. Send the equipment inventory, filter dimensions if known, service address, access requirements, and desired maintenance schedule so TCS can review the scope.' },
    ],
  },
  refrigeration: {
    slug: 'refrigeration',
    seoTitle: 'Refrigeration Repair | NYC & NJ',
    description: 'Commercial refrigeration, walk-in cooler, and freezer repair inquiries in NYC and New Jersey. TCS reviews equipment, scope, and availability before scheduling.',
    title: 'Commercial refrigeration and walk-in cooler repair in NYC and NJ',
    intro: 'Send TCS your walk-in cooler, walk-in freezer, reach-in refrigerator, or prep-table repair inquiry. Include the equipment details, symptoms, and service location so the job can be reviewed before scheduling.',
    availability: 'TCS reviews commercial refrigeration repair requests individually. Equipment, repair scope, parts support, service location, and scheduling are confirmed before a visit.',
    requestType: 'refrigeration-repair',
    equipment: ['Walk-in coolers', 'Walk-in freezers', 'Reach-in refrigerators and freezers', 'Refrigerated prep tables and chef bases', 'Undercounter units and display cases'],
    symptoms: ['Temperature rises during service or fails to recover', 'Visible ice buildup or blocked interior airflow', 'Door does not close or seal consistently', 'Water collects inside or around the equipment', 'Controller shows an alarm or repeated shutdown'],
    sections: [
      { title: 'Walk-in cooler and freezer service begins with identification', text: 'A walk-in can have separate labels for the box, condensing unit, evaporator, and controls. Photograph the accessible data plates and record which equipment serves the affected box. A room label alone may not identify the components or replacement parts. Include prior repair invoices and any changes made before the temperature complaint began.' },
      { title: 'Record the condition before anyone resets the controls', text: 'Document the displayed temperature, an independent temperature reading if available, the time, door activity, and any alarm. Note whether a large delivery or an unusually busy service period preceded the problem. These records describe the operating conditions; they do not prove that the unit is low on refrigerant or that a particular component has failed.' },
      { title: 'Separate operator observations from technical work', text: 'Check that doors close and stored product is not blocking the normal interior air paths. Follow the equipment instructions for operator checks. Leave electrical panels, refrigerant connections, defrost settings, and protective controls to a qualified refrigeration contractor. Do not chip ice from a coil or repeatedly reset a tripping protective device.' },
      { title: 'Prepare a useful service handoff', text: 'Give the contractor the business address, equipment labels, symptoms, temperature history, and access details for both the indoor and outdoor components. Explain whether other equipment is affected. Follow the site food-safety procedures while arranging service; a website inquiry should never delay protecting product or contacting an available contractor.' },
    ],
    related: [
      { href: '/blog/walk-in-cooler-not-cooling-troubleshooting-guide', label: 'Walk-in cooler not cooling: an operator checklist' },
      { href: '/services/ice-machines', label: 'Commercial ice machine repair' },
      { href: '/services', label: 'Services TCS currently accepts' },
    ],
    faqs: [
      { question: 'Can I request walk-in cooler or freezer repair?', answer: 'Yes. Send the equipment model, symptoms, service location, and access details. TCS reviews each request individually and confirms the scope and schedule before accepting the job.' },
      { question: 'What information should I give a refrigeration contractor?', answer: 'Provide the service address, equipment model and serial numbers, displayed alarms, temperature history, operating symptoms, and access details for the condensing unit and evaporator.' },
      { question: 'Does a warm cooler mean it needs refrigerant?', answer: 'A temperature complaint alone does not identify the cause. Door condition, airflow, controls, operating load, and refrigeration components all need appropriate evaluation before a repair is recommended.' },
    ],
  },
  'ice-machines': {
    slug: 'ice-machines',
    seoTitle: 'Ice Machine Repair | NYC & NJ',
    description: 'Commercial ice machine repair inquiries in NYC and New Jersey. Send TCS the manufacturer, model, symptoms, and location to confirm scope and availability.',
    title: 'Commercial ice machine repair in NYC and New Jersey',
    intro: 'Ice machine stopped producing, making less ice, or displaying a fault? Restaurants, bars, hotels, and foodservice operators can send TCS the model, symptoms, and service location for individual review.',
    availability: 'TCS reviews commercial ice machine repair requests individually. Equipment, repair scope, parts support, service location, and scheduling are confirmed before a visit.',
    requestType: 'ice-machine-repair',
    equipment: ['Modular ice machines and separate storage bins', 'Undercounter commercial ice makers', 'Cube, nugget, and flake equipment', 'Ice and water dispensers', 'Water filtration and remote condenser arrangements'],
    symptoms: ['No ice production or lower output than usual', 'Machine stops with a displayed fault or alarm', 'Ice forms but does not release normally', 'Water leak or interrupted water supply', 'Production changes after maintenance or a water outage'],
    sections: [
      { title: 'Identify the machine, bin, and installation', text: 'The ice machine head and storage bin may have different labels. Record the machine model and serial number, ice type, water-filter information, and whether the condenser is nearby or remote. Hoshizaki, Manitowoc, Scotsman, and Ice-O-Matic equipment use different controls and procedures. Brand names here identify equipment categories. Warranty authorization is confirmed separately for the specific assignment.' },
      { title: 'Describe production instead of guessing at a failed part', text: 'Tell the service contractor whether the machine never starts, runs without producing, makes some ice, or stops with a full bin. Record the actual display or alarm pattern and when production changed. Include recent cleaning, filter changes, water interruptions, or nearby kitchen changes. The sequence is more useful than a request to replace a control board without diagnosis.' },
      { title: 'Use the instructions for the exact model', text: 'Consult the operator manual for permitted checks and cleaning procedures. Do not use a generic reset sequence, mix cleaning chemicals, bypass the bin control, or enter the electrical or refrigerant compartments. If there is suspected contamination, follow the site sanitation procedures and arrange appropriate service before returning the equipment to use.' },
      { title: 'Prepare for repair or planned maintenance', text: 'Keep the manual, model information, maintenance record, and water-filter details with the equipment inventory. Give the contractor clear access to the machine and any remote components. For a TCS service inquiry, include the business location, machine model, and whether you need repair or planned maintenance. TCS confirms the equipment fit and schedule before accepting the assignment.' },
    ],
    related: [
      { href: '/blog/commercial-ice-machine-not-making-ice', label: 'Ice machine not making ice: what to record' },
      { href: '/services/refrigeration', label: 'Walk-in and commercial refrigeration repair' },
      { href: '/services', label: 'Services TCS currently accepts' },
    ],
    faqs: [
      { question: 'Can I request commercial ice machine repair?', answer: 'Yes. Send the manufacturer, model, symptoms, and service location. TCS reviews each request individually and confirms whether the equipment, scope, and schedule fit before accepting the job.' },
      { question: 'Are Hoshizaki and Manitowoc troubleshooting steps interchangeable?', answer: 'Use the operator instructions for the exact machine model. Different equipment uses different controls, alarms, cleaning procedures, and installation requirements.' },
      { question: 'What should I send with an ice machine repair inquiry?', answer: 'Include the business name, service ZIP code, manufacturer, model, serial number if available, operating symptoms, and whether you need repair or planned maintenance. TCS will confirm the scope and scheduling before a visit.' },
    ],
  },
};
