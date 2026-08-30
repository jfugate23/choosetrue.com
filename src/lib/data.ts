// ─── BRAND-LEVEL (shared defaults) ─────────────────────────────
// COMPANY holds the default contact details for pages that aren't
// market-aware. New market-aware pages should import MARKET_NJ directly.
export const COMPANY = {
  name: 'True Commercial Service',
  legal: 'True Commercial Service LLC',
  phone: '(646) 942-9394',
  phoneHref: 'tel:+16469429394',
  emergencyPhone: '(646) 942-9394',
  emergencyPhoneHref: 'tel:+16469429394',
  email: 'service@choosetrue.com',
  tagline: 'Commercial Kitchen Ventilation. Diagnosed Right.',
  description: 'True Commercial Service provides specialized commercial kitchen ventilation diagnostics and repair across Northern New Jersey and New York City.',
};

// ─── MARKET-SPECIFIC ───────────────────────────────────────────
// The NJ/NYC market is the business entity for SEO purposes: its own
// LocalBusiness schema (via schemaId), phone, address, and hero copy.
// Used by the homepage and all market-aware pages.

export const MARKET_NJ = {
  slug: 'nj',
  name: 'True Commercial Service',
  legal: 'True Commercial Service LLC',
  phone: '(646) 942-9394',
  phoneHref: 'tel:+16469429394',
  emergencyPhone: '(646) 942-9394',
  emergencyPhoneHref: 'tel:+16469429394',
  email: 'service@choosetrue.com',
  tagline: 'Commercial Kitchen Ventilation. Diagnosed Right.',
  heroLabel: 'COMMERCIAL KITCHEN VENTILATION • NYC + NORTH JERSEY',
  description: 'True Commercial Service provides specialized commercial kitchen ventilation diagnostics and repair across Northern New Jersey and New York City.',
  address: {
    street: '638 Marshall St',
    city: 'Elizabeth',
    region: 'NJ',
    postalCode: '07206',
    country: 'US',
  },
  serviceAreaCities: ['Elizabeth', 'Newark', 'Jersey City', 'Paterson', 'New Brunswick', 'Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'],
  schemaId: 'https://choosetrue.com/#localbusiness',
  homeUrl: 'https://choosetrue.com/',
} as const;

export const MARKETS = {
  nj: MARKET_NJ,
} as const;

export type MarketSlug = keyof typeof MARKETS;

export const SERVICES = [
  {
    slug: 'cooking-equipment',
    title: 'Cooking Equipment Repair',
    shortTitle: 'Cooking',
    icon: 'Flame',
    description: 'Cooking-equipment support for manufacturer-assigned, dealer-referred, and established-customer work.',
    longDescription: 'TCS accepts selected commercial cooking-equipment work when the manufacturer, dealer, or an established customer requests support. The equipment, symptoms, service area, and required authorization are confirmed before dispatch.',
    equipment: ['Combi Ovens', 'Convection Ovens', 'Conveyor Ovens', 'Fryers', 'Griddles', 'Charbroilers', 'Ranges', 'Steamers', 'Tilt Skillets', 'Salamanders', 'Rotisseries', 'Induction Cooktops'],
    brands: ['Rational', 'Alto-Shaam', 'Vulcan', 'Garland', 'Blodgett', 'Henny Penny', 'Pitco', 'Frymaster', 'Cleveland', 'TurboChef'],
  },
  {
    slug: 'refrigeration',
    title: 'Commercial Refrigeration Repair',
    shortTitle: 'Refrigeration',
    icon: 'Thermometer',
    description: 'Selected walk-in and self-contained refrigeration work, subject to scope, licensing, and referral fit.',
    longDescription: 'TCS considers selected commercial refrigeration assignments after confirming the equipment, location, refrigerant scope, licensing requirements, and service relationship. Direct public marketing remains focused on commercial kitchen ventilation.',
    equipment: ['Walk-In Coolers', 'Walk-In Freezers', 'Reach-In Refrigerators', 'Prep Tables', 'Display Cases', 'Ice Cream Cabinets', 'Blast Chillers', 'Undercounter Units', 'Refrigerated Bases'],
    brands: ['True Manufacturing', 'Traulsen', 'Hoshizaki', 'Turbo Air', 'Continental', 'Beverage-Air', 'Delfield', 'Randell', 'Master-Bilt'],
  },
  {
    slug: 'hvac',
    title: 'Commercial HVAC Service',
    shortTitle: 'HVAC',
    icon: 'Wind',
    description: 'Selected commercial HVAC support where the job scope, licensing, and existing service relationship fit.',
    longDescription: 'TCS focuses publicly on kitchen exhaust, makeup air, airflow, and controls. Other commercial HVAC work is considered only after the equipment, scope, licensing requirements, and referral or customer relationship are confirmed.',
    equipment: ['Rooftop Units (RTUs)', 'Split Systems', 'Kitchen Exhaust Hoods', 'Makeup Air Units', 'Exhaust Fans', 'VRF Systems', 'Walk-In Unit Coolers', 'Condensing Units'],
    brands: ['Carrier', 'Trane', 'Lennox', 'Daikin', 'Bard', 'Captive Aire', 'Accurex'],
  },
  {
    slug: 'beverage-equipment',
    title: 'Beverage Equipment Repair',
    shortTitle: 'Beverage',
    icon: 'GlassWater',
    description: 'Beverage-equipment support considered for manufacturer, dealer, and established-customer assignments.',
    longDescription: 'TCS reviews beverage-equipment requests individually and confirms the manufacturer, model, service scope, and assignment before dispatch. These calls are not part of the site\'s active direct-marketing focus.',
    equipment: ['Ice Machines', 'Fountain Dispensers', 'Tea Brewers', 'Coffee Brewers', 'Juice Dispensers', 'Beer Systems', 'Water Filtration', 'Carbonation Systems'],
    brands: ['Hoshizaki', 'Manitowoc', 'Scotsman', 'Ice-O-Matic', 'Bunn', 'Cornelius', 'Lancer', 'Wunder-Bar'],
  },
  {
    slug: 'espresso-machines',
    title: 'Espresso Machine Repair',
    shortTitle: 'Espresso',
    icon: 'Coffee',
    description: 'Espresso-equipment work considered only after manufacturer, model, training, and assignment fit are confirmed.',
    longDescription: 'Commercial espresso equipment requires product-specific knowledge and parts support. TCS reviews these requests individually and accepts work only when the equipment and assignment fit the currently supportable scope.',
    equipment: ['Multi-Group Espresso Machines', 'Superautomatic Machines', 'Commercial Grinders', 'Steam Wands', 'Group Heads', 'Boilers', 'Water Treatment Systems'],
    brands: ['La Marzocco', 'Nuova Simonelli', 'La Cimbali', 'Rancilio', 'Slayer', 'Synesso', 'Mazzer', 'Mahlkönig'],
  },
  {
    slug: 'pollution-control',
    title: 'Kitchen Exhaust Pollution Control (ESP/PCU)',
    shortTitle: 'Pollution Control',
    icon: 'Wind',
    description: 'ESP and ecology-unit diagnostics, power-supply faults, controls, interlocks, fans, and airflow verification.',
    longDescription: 'TCS diagnoses operating problems on commercial kitchen pollution-control systems, including electrostatic precipitators and ecology units. Service focuses on electrical, controls, fan, interlock, and airflow issues; cleaning scope is confirmed separately before dispatch.',
    equipment: ['Electrostatic Precipitators (ESP)', 'Ecology Rooftop Units', 'Smoke Hog Systems', 'Carbon/Charcoal Odor Filters', 'UV Oxidation Systems', 'Catalytic Oxidizers', 'Pre-Filters and Post-Filters', 'ESP Power Supplies and Controls'],
    brands: ['Smoke Hog', 'CaptiveAire', 'Halton', 'Ecology', 'Accurex', 'Greenheck', 'Streivor', 'PPC Air'],
  },
  {
    slug: 'preventive-maintenance',
    title: 'Preventive Maintenance Agreements',
    shortTitle: 'PM Plans',
    icon: 'ShieldCheck',
    description: 'Scheduled ventilation and assigned-equipment maintenance built around documented condition and operating checks.',
    longDescription: 'TCS builds preventive-maintenance scopes around the equipment inventory, operating conditions, access, and manufacturer requirements. Publicly promoted PM work centers on commercial kitchen ventilation and controls.',
    equipment: ['Full Kitchen PM Programs', 'Refrigeration-Only PM', 'HVAC PM', 'Custom Equipment Audits', 'Seasonal Tune-Ups'],
    brands: [],
  },
];

export const LOCATIONS = [
  // ─── NORTHERN NJ / NYC METRO ─────────────────────────────────
  {
    slug: 'elizabeth-nj',
    city: 'Elizabeth',
    state: 'NJ',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving Elizabeth, Union County & the NJ/NYC Metro',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['Elizabeth', 'Linden', 'Roselle', 'Roselle Park', 'Rahway', 'Clark', 'Hillside', 'Union', 'Cranford', 'Kenilworth'],
  },
  {
    slug: 'newark-nj',
    city: 'Newark',
    state: 'NJ',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving Newark, the Ironbound & Essex County',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['Newark', 'Ironbound', 'East Orange', 'Orange', 'Irvington', 'Belleville', 'Bloomfield', 'Nutley', 'Montclair', 'Maplewood'],
  },
  {
    slug: 'jersey-city-nj',
    city: 'Jersey City',
    state: 'NJ',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving Jersey City, Hoboken & Hudson County',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['Jersey City', 'Hoboken', 'Union City', 'North Bergen', 'West New York', 'Weehawken', 'Bayonne', 'Secaucus', 'Kearny', 'Harrison'],
  },
  {
    slug: 'union-county-nj',
    city: 'Union County',
    state: 'NJ',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving All of Union County, NJ',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['Elizabeth', 'Plainfield', 'Westfield', 'Summit', 'Scotch Plains', 'Cranford', 'Linden', 'Rahway', 'Roselle', 'Springfield', 'Clark', 'Mountainside', 'Berkeley Heights', 'New Providence'],
  },
  {
    slug: 'paterson-nj',
    city: 'Paterson',
    state: 'NJ',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving Paterson, Passaic County & North Jersey',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['Paterson', 'Passaic', 'Clifton', 'Wayne', 'Totowa', 'Little Falls', 'Woodland Park', 'Haledon', 'Hawthorne', 'Fair Lawn'],
  },
  {
    slug: 'new-brunswick-nj',
    city: 'New Brunswick',
    state: 'NJ',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving New Brunswick, Middlesex County & Central NJ',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['New Brunswick', 'Edison', 'Woodbridge', 'Perth Amboy', 'Piscataway', 'Highland Park', 'South Plainfield', 'Metuchen', 'Sayreville', 'Old Bridge'],
  },

  // ─── NEW YORK CITY ─────────────────────────────────────────────
  {
    slug: 'new-york-city',
    city: 'New York City',
    state: 'NY',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving All Five Boroughs of NYC',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'],
  },
  {
    slug: 'manhattan-ny',
    city: 'Manhattan',
    state: 'NY',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving Manhattan: Midtown to the Financial District',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['Midtown', 'Lower Manhattan', 'Upper East Side', 'Upper West Side', 'Chelsea', 'Greenwich Village', 'SoHo', 'Tribeca', 'Harlem', 'East Village', 'Hell\'s Kitchen', 'Financial District', 'Chinatown', 'Little Italy'],
  },
  {
    slug: 'brooklyn-ny',
    city: 'Brooklyn',
    state: 'NY',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving Brooklyn: Williamsburg to Bay Ridge',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['Williamsburg', 'DUMBO', 'Park Slope', 'Bushwick', 'Crown Heights', 'Bay Ridge', 'Sunset Park', 'Flatbush', 'Greenpoint', 'Red Hook', 'Bed-Stuy', 'Borough Park', 'Brighton Beach', 'Bensonhurst'],
  },
  {
    slug: 'queens-ny',
    city: 'Queens',
    state: 'NY',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving Queens: Astoria to Jamaica',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['Astoria', 'Long Island City', 'Flushing', 'Jackson Heights', 'Jamaica', 'Forest Hills', 'Elmhurst', 'Woodside', 'Bayside', 'Ridgewood', 'Corona', 'Sunnyside', 'Rego Park', 'Fresh Meadows'],
  },
  {
    slug: 'bronx-ny',
    city: 'The Bronx',
    state: 'NY',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving The Bronx: Arthur Avenue to City Island',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['South Bronx', 'Fordham', 'Arthur Avenue', 'Riverdale', 'Kingsbridge', 'Pelham Bay', 'City Island', 'Mott Haven', 'Hunts Point', 'Parkchester', 'Throggs Neck', 'Morris Park'],
  },
  {
    slug: 'staten-island-ny',
    city: 'Staten Island',
    state: 'NY',
    status: 'active' as 'active' | 'coming-soon',
    tagline: 'Serving Staten Island: St. George to Tottenville',
    phone: '(646) 942-9394',
    phoneHref: 'tel:+16469429394',
    serviceArea: ['St. George', 'Stapleton', 'New Dorp', 'Tottenville', 'Great Kills', 'Eltingville', 'Todt Hill', 'West Brighton', 'Port Richmond', 'Willowbrook', 'Huguenot', 'Annadale'],
  },

];

export const VERTICALS = [
  {
    slug: 'restaurants',
    title: 'Restaurants',
    icon: 'UtensilsCrossed',
    description: 'Ventilation troubleshooting for restaurant kitchens where capture, pressure, heat, and fan reliability affect every service.',
    longDescription: 'Restaurant ventilation problems show up as smoke escaping the hood, doors that are hard to open, excessive kitchen heat, odors entering the dining room, or an exhaust fan that will not run. TCS measures the connected exhaust, makeup-air, controls, and building-pressure conditions before recommending repairs.',
    painPoints: ['Smoke or heat escaping the hood', 'Kitchen doors hard to open or slamming', 'Exhaust fan noise, faults, or weak draw', 'Makeup air not keeping up during service'],
  },
  {
    slug: 'grocery-stores',
    title: 'Grocery Stores',
    icon: 'ShoppingCart',
    description: 'Kitchen ventilation support for prepared-food, bakery, deli, rotisserie, and other cooking operations inside grocery facilities.',
    longDescription: 'Prepared-food departments can combine long operating hours, multiple hoods, rooftop fans, makeup-air units, and building controls. TCS supports ventilation complaints by tracing the complete operating sequence and documenting the measured condition for store and facilities teams.',
    painPoints: ['Multiple hoods or departments affected', 'Exhaust and makeup air not starting together', 'Heat or odors moving into sales areas', 'Clear documentation needed for facilities teams'],
  },
  {
    slug: 'schools-institutions',
    title: 'Schools & Institutions',
    icon: 'GraduationCap',
    description: 'Ventilation diagnostics and documented findings for cafeterias, campus dining, healthcare kitchens, and public facilities.',
    longDescription: 'Institutional kitchens need service that accounts for access procedures, fixed meal schedules, procurement requirements, and coordination with facility personnel. TCS evaluates hood capture, exhaust, makeup air, controls, and pressure as one system and provides clear findings for the next decision.',
    painPoints: ['Fixed meal and production schedules', 'Roof and mechanical-room access coordination', 'Interlocks or controls affecting multiple systems', 'Documented findings required for approval'],
  },
  {
    slug: 'hotels',
    title: 'Hotels & Hospitality',
    icon: 'Building2',
    description: 'Ventilation service for hotel kitchens, banquet operations, restaurants, and other foodservice outlets sharing complex building systems.',
    longDescription: 'Hotel kitchens often share rooftop, controls, and building-pressure relationships with guest and event spaces. TCS works with engineering teams to isolate exhaust, makeup-air, VFD, sensor, and interlock problems without treating each unit as an unrelated component.',
    painPoints: ['Multiple kitchens or outlets on one property', 'Odors or pressure affecting guest areas', 'Banquet deadlines and changing cooking loads', 'Coordination with hotel engineering and access teams'],
  },
];

// Directory & social profile URLs: update each as you register
// These feed into schema.org sameAs and the footer
export const PROFILES = {
  // Add real URLs as you create each listing
  google: '', // Google Business Profile URL
  yelp: '', // Yelp business page URL
  facebook: '', // Facebook business page URL
  instagram: '', // Instagram profile URL
  linkedin: '', // LinkedIn company page URL
  bbb: '', // BBB listing URL
  angi: '', // Angi/HomeAdvisor listing URL
  thumbtack: '', // Thumbtack profile URL
  nextdoor: '', // Nextdoor business page URL
  apple: '', // Apple Maps listing URL
};

// Per-location directory URLs: each directory listing should link back to the specific location page
// When registering on Yelp/Angi/Google for a specific city, set the website URL to:
//   choosetrue.com/locations/{slug}
// Example: Yelp NYC listing → website: choosetrue.com/locations/new-york-city
// Example: Google Business (Elizabeth) → website: choosetrue.com/locations/elizabeth-nj

// Hub locations shown in footer (not every sub-city)
export const HUB_LOCATIONS = ['elizabeth-nj', 'newark-nj', 'jersey-city-nj', 'new-york-city'];

// Ventilation-specific city landing pages (50-mile radius from Elizabeth NJ)
export const VENTILATION_CITIES = [
  // NJ Cities
  {
    slug: 'elizabeth-nj',
    city: 'Elizabeth',
    state: 'NJ',
    region: 'Union County',
    restaurantScene: 'Elizabeth combines neighborhood restaurants, institutional kitchens, airport-area hospitality, and foodservice operations near major transportation corridors. Roof access, shared building pressure, and mixed exhaust and makeup-air equipment make whole-system diagnosis important.',
    neighborhoods: ['Elmora', 'Midtown', 'Bayway', 'Elizabeth Port', 'Westminster'],
    nearbyAreas: ['Linden', 'Roselle', 'Rahway', 'Clark', 'Hillside', 'Union'],
  },
  {
    slug: 'newark-nj',
    city: 'Newark',
    state: 'NJ',
    region: 'Essex County',
    restaurantScene: 'Newark includes dense restaurant corridors in the Ironbound, downtown foodservice, institutional kitchens, and airport-area hospitality. TCS evaluates the hood, exhaust fan, makeup air, controls, and building pressure together when capture or comfort problems appear.',
    neighborhoods: ['Ironbound', 'Downtown', 'North Newark', 'Vailsburg', 'Roseville'],
    nearbyAreas: ['East Orange', 'Irvington', 'Belleville', 'Bloomfield', 'Nutley', 'Montclair'],
  },
  {
    slug: 'jersey-city-nj',
    city: 'Jersey City',
    state: 'NJ',
    region: 'Hudson County',
    restaurantScene: 'Jersey City restaurants operate in waterfront towers, older mixed-use buildings, neighborhood storefronts, and food halls. Those conditions can create difficult roof access, shared-shaft questions, and pressure complaints that require measured diagnosis.',
    neighborhoods: ['Downtown', 'Journal Square', 'Heights', 'Greenville', 'Bergen-Lafayette'],
    nearbyAreas: ['Hoboken', 'Union City', 'North Bergen', 'Bayonne', 'Weehawken', 'Secaucus'],
  },
  {
    slug: 'paterson-nj',
    city: 'Paterson',
    state: 'NJ',
    region: 'Passaic County',
    restaurantScene: 'Paterson\'s bakeries, restaurants, and high-heat cooking operations depend on reliable hood capture and properly coordinated replacement air. TCS checks the operating sequence and airflow instead of assuming the visible symptom identifies the failed component.',
    neighborhoods: ['Main Street District', 'South Paterson', 'Eastside', 'Northside'],
    nearbyAreas: ['Clifton', 'Passaic', 'Wayne', 'Totowa', 'Fair Lawn', 'Hawthorne'],
  },
  {
    slug: 'new-brunswick-nj',
    city: 'New Brunswick',
    state: 'NJ',
    region: 'Middlesex County',
    restaurantScene: 'New Brunswick combines downtown restaurants, university dining, healthcare foodservice, and Route 1 corridor operations. Institutional access requirements and multi-system controls make clear documentation especially useful.',
    neighborhoods: ['Downtown', 'George Street', 'Route 1 Corridor', 'French Street'],
    nearbyAreas: ['Edison', 'Piscataway', 'Highland Park', 'Woodbridge', 'Perth Amboy', 'Metuchen'],
  },
  {
    slug: 'morristown-nj',
    city: 'Morristown',
    state: 'NJ',
    region: 'Morris County',
    restaurantScene: 'Morristown includes restaurants in older downtown buildings along with hotel, institutional, and corporate foodservice across the surrounding area. Different building types can produce very different exhaust, replacement-air, and access conditions.',
    neighborhoods: ['The Green', 'South Street', 'Speedwell Avenue'],
    nearbyAreas: ['Parsippany', 'Morris Plains', 'Madison', 'Florham Park', 'East Hanover', 'Denville'],
  },
  {
    slug: 'woodbridge-nj',
    city: 'Woodbridge',
    state: 'NJ',
    region: 'Middlesex County',
    restaurantScene: 'Woodbridge and the Route 1 and Route 9 corridors include restaurants, hotels, retail foodservice, and institutional kitchens. TCS reviews the actual hood, rooftop equipment, controls, and site access before dispatch.',
    neighborhoods: ['Woodbridge Proper', 'Iselin', 'Avenel', 'Colonia', 'Port Reading'],
    nearbyAreas: ['Edison', 'Rahway', 'Carteret', 'Perth Amboy', 'Linden', 'Clark'],
  },
  // NYC Boroughs
  {
    slug: 'manhattan-ny',
    city: 'Manhattan',
    state: 'NY',
    region: 'New York City',
    restaurantScene: 'Manhattan kitchens operate in dense buildings with constrained roof access, long duct runs, shared mechanical spaces, and strict delivery and access procedures. TCS confirms those conditions before dispatch and evaluates airflow, equipment, and controls as one system.',
    neighborhoods: ['Midtown', 'Lower Manhattan', 'Upper East Side', 'Chelsea', 'SoHo', 'Tribeca', 'Harlem', 'Hell\'s Kitchen', 'Chinatown', 'East Village'],
    nearbyAreas: ['Brooklyn', 'Queens', 'Jersey City', 'Hoboken'],
  },
  {
    slug: 'brooklyn-ny',
    city: 'Brooklyn',
    state: 'NY',
    region: 'New York City',
    restaurantScene: 'Brooklyn commercial kitchens range from compact storefronts to hotels, institutions, production kitchens, and large restaurant spaces. Building age, roof access, neighbor complaints, and renovation history often matter to the ventilation diagnosis.',
    neighborhoods: ['Williamsburg', 'DUMBO', 'Park Slope', 'Bushwick', 'Crown Heights', 'Bay Ridge', 'Sunset Park', 'Flatbush', 'Greenpoint', 'Red Hook'],
    nearbyAreas: ['Manhattan', 'Queens', 'Staten Island'],
  },
  {
    slug: 'queens-ny',
    city: 'Queens',
    state: 'NY',
    region: 'New York City',
    restaurantScene: 'Queens includes dense restaurant corridors, hotels, institutions, bakeries, and high-production commercial kitchens. TCS uses the reported symptom, equipment information, roof access, and measured operating condition to narrow the cause.',
    neighborhoods: ['Astoria', 'Flushing', 'Jackson Heights', 'Long Island City', 'Jamaica', 'Forest Hills', 'Elmhurst', 'Bayside', 'Ridgewood', 'Corona'],
    nearbyAreas: ['Manhattan', 'Brooklyn', 'The Bronx', 'Long Island'],
  },
  {
    slug: 'bronx-ny',
    city: 'The Bronx',
    state: 'NY',
    region: 'New York City',
    restaurantScene: 'Bronx foodservice includes restaurants, bakeries, institutions, markets, and production kitchens with a wide range of hood and rooftop configurations. Exhaust, makeup air, and building-pressure complaints are evaluated together.',
    neighborhoods: ['Arthur Avenue', 'Fordham', 'Mott Haven', 'City Island', 'Riverdale', 'Pelham Bay', 'Kingsbridge'],
    nearbyAreas: ['Manhattan', 'Queens', 'Westchester'],
  },
  {
    slug: 'staten-island-ny',
    city: 'Staten Island',
    state: 'NY',
    region: 'New York City',
    restaurantScene: 'Staten Island restaurants, pizzerias, hotels, and institutional kitchens span both standalone buildings and mixed-use properties. Its proximity to the Elizabeth base can make planned roof and ventilation service practical when scope and scheduling align.',
    neighborhoods: ['St. George', 'New Dorp', 'Tottenville', 'Great Kills', 'West Brighton', 'Port Richmond'],
    nearbyAreas: ['Elizabeth NJ', 'Brooklyn', 'Bayonne NJ'],
  },
];

export const STATS = [
  { value: 'Owner', label: 'Led Diagnostics' },
  { value: 'NYC', label: '& North Jersey' },
  { value: 'Measured', label: 'Airflow Readings' },
  { value: 'Commercial', label: 'Kitchens Only' },
];

export const MANUFACTURERS = [
  'CaptiveAire', 'Gaylord', 'Accurex', 'Greenheck',
  'Halton', 'Loren Cook', 'Yaskawa', 'ABB',
];
