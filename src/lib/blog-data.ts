export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  faqs?: FAQ[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'walk-in-cooler-not-cooling-troubleshooting-guide',
    title: 'Walk-In Cooler Not Cooling? 7 Things to Check Before Calling for Service',
    description: 'Your walk-in cooler is running but not holding temp. Here are 7 things to check before you call for emergency repair — and when to call immediately.',
    date: '2026-03-27',
    category: 'Refrigeration',
    readTime: '5 min',
    content: `Your walk-in cooler is running but the temperature is climbing. Product is at risk. Before you panic, here are seven things to check — and clear signs you need a professional immediately.

## Check These First

### 1. Door Gaskets
Run your hand along the door seal while it's closed. Feel cold air escaping? Worn or torn gaskets are the #1 cause of walk-in temperature problems. A gasket replacement costs $50-150 and takes 30 minutes — much cheaper than a compressor.

### 2. Evaporator Coils
Open the unit and look at the evaporator coils. If they're covered in ice or frost, you have an airflow problem. This is usually caused by a failed defrost timer, a bad defrost heater, or blocked drain lines. **Do not chip the ice off** — you'll damage the coils.

### 3. Condenser Coils
Check the condenser unit (usually on top or outside). If the coils are packed with grease, dust, or debris, the system can't reject heat. A dirty condenser makes the compressor work harder and run hotter — eventually it'll fail completely. Clean condensers should be part of your quarterly maintenance.

### 4. Fan Motors
Listen. Are the evaporator fans running? If the fan motor has failed, air isn't circulating and the unit can't cool evenly. You'll notice warm spots and inconsistent temperatures.

### 5. Thermostat Setting
It sounds obvious, but check the thermostat. Someone may have bumped it, or it may have been adjusted for a delivery and never reset. Walk-in coolers should be set between 35°F and 38°F.

### 6. Door Traffic
During peak service, the walk-in door might be opening every 30 seconds. Each time, warm air floods in. If your cooler struggles during service but recovers overnight, the issue is door traffic — not equipment failure. Consider strip curtains.

### 7. Refrigerant Charge
If none of the above solves it, you likely have a refrigerant issue — a leak, low charge, or restriction. **This requires a licensed technician with EPA 608 certification.** Do not attempt refrigerant work yourself.

## When to Call Immediately

- Temperature above 41°F and climbing — you're in the food safety danger zone
- Compressor is running but making unusual noises (clicking, grinding, hissing)
- Visible oil stains around the compressor or refrigerant lines (indicates a leak)
- Electrical burning smell
- Circuit breaker keeps tripping

## The Cost of Waiting

Every hour your walk-in is above temperature puts your inventory at risk. A typical restaurant walk-in holds $3,000-8,000 in product. The average emergency repair costs $350-800. The math is simple — call early, not late.

## Prevent It Next Time

Quarterly preventive maintenance catches 80% of walk-in problems before they become emergencies. A PM visit typically includes condenser cleaning, refrigerant pressure check, gasket inspection, drain clearing, and temperature calibration.

**True Commercial Service provides 24/7 emergency repair and preventive maintenance for commercial walk-in coolers and freezers across Union County, NJ. Text us anytime.**

## Related Articles

- [Walk-In Freezer vs Cooler: Service Differences](/blog/walk-in-freezer-vs-cooler-service-differences)
- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
- [What Does Equipment Repair Cost in NJ?](/blog/commercial-kitchen-equipment-repair-cost-nj)

Looking for service? Visit our [Refrigeration Repair](/services/refrigeration) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why is my walk-in cooler running but not cooling?', answer: 'The most common causes are worn door gaskets, dirty condenser coils, frozen evaporator coils, failed fan motors, or low refrigerant charge. Check gaskets and condenser cleanliness first — these account for over half of walk-in temperature problems.' },
      { question: 'What temperature should a walk-in cooler be set at?', answer: 'Walk-in coolers should be set between 35°F and 38°F. If the temperature rises above 41°F, you are in the food safety danger zone and should call for emergency service immediately.' },
      { question: 'How much does walk-in cooler repair cost?', answer: 'The average emergency walk-in cooler repair costs $350-800. However, a typical restaurant walk-in holds $3,000-8,000 in perishable product, so calling early is always cheaper than waiting.' },
    ],
  },
  {
    slug: 'commercial-ice-machine-not-making-ice',
    title: 'Commercial Ice Machine Not Making Ice? Here\'s What\'s Wrong',
    description: 'Your Hoshizaki, Manitowoc, or Scotsman ice machine stopped producing. Common causes, what you can fix yourself, and when you need a tech.',
    date: '2026-03-25',
    category: 'Ice Machines',
    readTime: '4 min',
    content: `No ice during dinner service is an emergency. Here's a systematic approach to figuring out what's wrong with your commercial ice machine.

## The Most Common Causes

### Water Supply Issues (30% of calls)
Before anything else — is the water turned on? Check the water supply valve behind or under the machine. Then check for a kinked water line. If you recently had plumbing work done, someone may have shut off the line and forgotten to reopen it.

### Dirty Condenser (25% of calls)
The condenser coil is the single most common reason ice machines underperform. In a commercial kitchen, grease and dust accumulate fast. A dirty condenser raises operating temperature, slows the freeze cycle, and eventually triggers a safety shutdown.

**Where to find it:** Air-cooled models have the condenser behind a panel on the front or back. You'll see metal fins — they should be clean and clear, not matted with gunk.

### Harvest Cycle Problems (20% of calls)
The machine freezes ice but can't release it from the evaporator plate. You'll see a thick sheet of ice stuck to the plate. This is usually caused by a failed hot gas valve, low refrigerant, or a malfunctioning harvest assist motor.

### Scale Buildup (15% of calls)
Hard water deposits mineral scale on the evaporator plate and water distribution system. The ice comes out thin, cloudy, or misshapen — then production drops — then it stops entirely. This is preventable with regular descaling (every 6 months minimum, every 3 months in hard water areas).

### Control Board Failures (10% of calls)
Modern ice machines have electronic controls that manage the freeze and harvest cycles. When the board fails, the machine either won't start, runs continuously without producing, or cycles on and off rapidly. Board replacement typically costs $300-600.

## What You Can Do Right Now

1. **Check water supply** — turn valve off and on, check for kinks
2. **Clean the condenser** — if accessible, brush or vacuum the fins gently
3. **Check the bin** — is the bin actually full and the machine shut off normally? Some machines have a bin sensor.
4. **Look for error codes** — most Hoshizaki and Manitowoc machines have LED diagnostic codes. Write down what you see.
5. **Power cycle** — turn off for 10 minutes, turn back on. Sometimes the control board needs a reset.

## What Requires a Technician

- Refrigerant-related issues (EPA 608 certification required)
- Harvest valve replacement
- Control board diagnosis and replacement
- Evaporator plate damage
- Compressor issues

## Ice Machine Maintenance Schedule

| Task | Frequency |
|------|-----------|
| Condenser cleaning | Monthly |
| Full machine cleaning & sanitizing | Every 6 months |
| Water filter replacement | Every 6 months |
| Descaling | Every 3-6 months |
| Professional inspection | Annually |

A well-maintained ice machine should last 8-12 years. A neglected one fails in 3-5.

**True Commercial Service repairs all major ice machine brands including Hoshizaki, Manitowoc, and Scotsman. 24/7 emergency service across Union County, NJ.**

## Related Articles

- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
- [EPA 608 Certification: What Owners Should Know](/blog/epa-608-certification-restaurant-owners)
- [What Does Equipment Repair Cost in NJ?](/blog/commercial-kitchen-equipment-repair-cost-nj)

Looking for service? Visit our [Beverage Equipment Repair](/services/beverage-equipment) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why did my commercial ice machine stop making ice?', answer: 'The most common causes are water supply issues (30% of calls), dirty condenser coils (25%), harvest cycle problems (20%), mineral scale buildup (15%), and control board failures (10%). Start by checking the water supply valve and condenser cleanliness.' },
      { question: 'How often should a commercial ice machine be cleaned?', answer: 'Commercial ice machines should be descaled every 6 months minimum, and every 3 months in hard water areas. Regular cleaning prevents scale buildup that reduces production and eventually causes complete shutdown.' },
      { question: 'How long should a commercial ice machine last?', answer: 'A well-maintained commercial ice machine should last 8-12 years. A neglected one typically fails in 3-5 years. Regular condenser cleaning and descaling are the biggest factors in equipment longevity.' },
    ],
  },
  {
    slug: 'rational-combi-oven-error-codes-guide',
    title: 'Rational Combi Oven Error Codes: What They Mean and What to Do',
    description: 'Complete guide to Rational iCombi Pro and SCC error codes. What each code means, whether you can fix it yourself, and when to call a certified tech.',
    date: '2026-03-22',
    category: 'Combi Ovens',
    readTime: '6 min',
    content: `Rational combi ovens are the gold standard in commercial kitchens — but when they throw an error code, production stops. Here's what the common codes mean and what to do about them.

## Understanding Rational Error Codes

Rational uses "E" codes on the iCombi Pro and SCC series. The code appears on the display and the oven may lock out depending on severity.

## Common Error Codes

### E1 — Temperature Sensor Fault
**What it means:** The cooking chamber temperature probe is reading out of range or not responding.
**What to do:** Power cycle the unit. If it returns, the probe or its wiring may need replacement. Check the probe connection at the PCB.

### E2 — Core Probe Error
**What it means:** The food core temperature probe is faulty.
**What to do:** Remove and reinsert the core probe. Check for damaged cable. Try a different probe if available.

### E4 — Steam Generator Issue
**What it means:** The steam generator isn't heating properly or isn't detecting water.
**What to do:** Check water supply to the unit. Run a descale cycle — mineral buildup is the most common cause. If descaling doesn't fix it, the heating element or water level sensor may need replacement.

### E6 — Door Switch Error
**What it means:** The oven thinks the door is open when it's closed, or vice versa.
**What to do:** Check for food debris in the door seal. Inspect the magnetic door switch. Clean the gasket area.

### E10 — Drain Issue
**What it means:** Water isn't draining properly from the cooking chamber.
**What to do:** Check the drain for blockages. Run water through the drain manually. The drain valve may be stuck or the drain line may be clogged.

### E22 — Fan Motor Error
**What it means:** The convection fan isn't running at the expected speed.
**What to do:** This requires a technician. The fan motor, fan belt, or motor controller may need replacement. **Do not operate the oven without the fan working properly.**

### E42 — Temperature Probe Fault
**What it means:** Chamber temperature probe resistance is out of specification.
**What to do:** Check probe connection at PCB J3. Resistance should read approximately 1000Ω at 0°C. Replace probe assembly if open circuit.

## Before You Call a Technician

1. **Power cycle** — turn off for 5 minutes, restart
2. **Run a descale cycle** — solves 30% of steam-related errors
3. **Check water supply** — low pressure or shut-off valve issues mimic electrical faults
4. **Write down the exact code** — including any sub-codes shown
5. **Note when it happens** — during preheat? Mid-cook? Only in steam mode?

## When You Need a Certified Tech

- Any code that returns after power cycling
- E22 (fan motor) — safety risk if operated without proper fan function
- Any code involving "heating" or "electrical" — internal component work requires training
- Repeated E4 after descaling — may indicate failed heating element
- Any error accompanied by unusual smells or sounds

## Rational Service Partner Network

Rational requires that service technicians complete factory training before working on their equipment. Using an unauthorized tech can void your warranty and may result in improper repairs.

**True Commercial Service is pursuing Rational Authorized Service Partner certification. We service all Rational iCombi Pro, iCombi Classic, and SCC models across Union County, NJ.**

## Related Articles

- [Commercial Fryer Troubleshooting](/blog/commercial-fryer-troubleshooting)
- [What Does Equipment Repair Cost in NJ?](/blog/commercial-kitchen-equipment-repair-cost-nj)
- [How to Choose a Repair Company in NJ](/blog/how-to-choose-commercial-kitchen-equipment-repair-company-nj)

Looking for service? Visit our [Cooking Equipment Repair](/services/cooking-equipment) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What do Rational combi oven error codes mean?', answer: 'Rational combi ovens display error codes on the control panel to indicate specific malfunctions. Common codes include E1 (temperature sensor failure), E2 (boiler issues), E3 (humidity sensor problems), and E22 (water supply). Some are resettable by staff; others require a trained technician.' },
      { question: 'Can I reset a Rational combi oven error code myself?', answer: 'Some minor errors can be cleared by power cycling the oven (turn off, wait 60 seconds, turn back on). However, persistent or recurring error codes indicate a real mechanical or electrical issue that needs professional diagnosis. Do not ignore repeated error codes.' },
      { question: 'Does Rational require authorized service technicians?', answer: 'Yes. Rational requires that service technicians complete factory training before working on their equipment. Using an unauthorized tech can void your warranty and may result in improper repairs.' },
    ],
  },
  {
    slug: 'how-often-should-commercial-kitchen-equipment-be-serviced',
    title: 'How Often Should Commercial Kitchen Equipment Be Serviced? The Complete PM Schedule',
    description: 'A preventive maintenance schedule for every piece of commercial kitchen equipment. How often, what\'s checked, and why it saves you money.',
    date: '2026-03-20',
    category: 'Maintenance',
    readTime: '5 min',
    content: `Preventive maintenance isn't optional — it's the difference between a $200 PM visit and a $3,000 emergency repair on a Saturday night. Here's how often every piece of equipment in your commercial kitchen should be serviced.

## The Complete PM Schedule

### Refrigeration (Walk-ins, Reach-ins, Prep Tables)
**Frequency:** Quarterly
**What's checked:**
- Condenser coil cleaning
- Evaporator coil inspection
- Door gasket condition
- Temperature calibration
- Drain line clearing
- Refrigerant pressure check
- Fan motor operation
- Defrost cycle timing

**Why it matters:** 70% of commercial refrigeration failures are preventable with regular maintenance. A dirty condenser makes the compressor work 30% harder — cutting its life in half.

### Ice Machines
**Frequency:** Every 6 months (cleaning), monthly (condenser)
**What's checked:**
- Full system cleaning and sanitizing
- Descaling (water mineral removal)
- Water filter replacement
- Condenser cleaning
- Harvest cycle timing
- Bin thermostat calibration
- Water inlet valve condition

**Why it matters:** Health codes require ice machines to be cleaned and sanitized regularly. Scale buildup reduces ice production by up to 30% before causing a complete failure.

### Cooking Equipment (Ovens, Ranges, Fryers, Grills)
**Frequency:** Semi-annually
**What's checked:**
- Gas connection and leak check
- Burner flame pattern and efficiency
- Thermostat accuracy
- Door hinges and gaskets (ovens)
- Igniter condition
- Oil filtration system (fryers)
- Exhaust ventilation flow

**Why it matters:** Misadjusted burners waste gas and cook unevenly. A faulty igniter that clicks for 30 seconds before lighting is one click away from not lighting at all.

### Combi Ovens (Rational, Alto-Shaam)
**Frequency:** Quarterly
**What's checked:**
- Descale cycle
- Steam generator inspection
- Temperature probe calibration
- Door seal condition
- Drain valve function
- Software updates (where applicable)
- Fan motor bearings

**Why it matters:** Combi ovens cost $15,000-40,000. A $250 quarterly PM extends the life by 3-5 years. The descale cycle alone prevents the most common failure mode.

### Dishwashers
**Frequency:** Quarterly
**What's checked:**
- Wash and rinse temperature verification
- Chemical dispenser calibration
- Spray arm condition
- Door gasket and curtain
- Pump and motor inspection
- Drain system
- Deliming

**Why it matters:** A dishwasher running at wrong temperatures fails health inspection. Low rinse temperature means sanitization isn't happening.

### Kitchen Ventilation (Hoods, Exhaust Fans, Makeup Air)
**Frequency:** Quarterly (fan service), semi-annually (air balancing)
**What's checked:**
- Fan belt tension and condition
- Motor bearings and lubrication
- Exhaust airflow measurement
- Makeup air balance
- Filter condition
- Fire suppression system inspection
- Grease buildup assessment

**Why it matters:** Improperly balanced kitchen ventilation wastes energy, creates uncomfortable conditions for staff, pulls conditioned air from the dining room, and is a fire code compliance issue.

## The Cost Comparison

| Scenario | Cost |
|----------|------|
| Quarterly PM program (all equipment) | $1,200-2,400/year |
| Average emergency repair call | $450-800 per incident |
| Walk-in compressor failure (emergency) | $2,500-5,000 |
| Failed health inspection | $500+ fine + closure |
| Lost revenue during equipment downtime | $500-2,000 per hour |

**A $200/quarter PM visit that prevents one $2,500 emergency repair pays for itself 3x over.**

## How PM Contracts Work

Most equipment service companies offer PM agreements with:
- Scheduled visits at set intervals
- Priority response for emergencies
- Discounted labor and parts rates
- Written documentation for health inspections
- Equipment inventory tracking

The best time to set up a PM program is before something breaks.

**True Commercial Service offers customized preventive maintenance agreements for commercial kitchens across Union County, NJ. Contact us to schedule a free equipment assessment.**

## Related Articles

- [What Is a PM Agreement?](/blog/pm-agreement-benefits-nj-restaurants)
- [The True Cost of Equipment Downtime](/blog/restaurant-equipment-downtime-cost)
- [Questions Before Signing a Service Contract](/blog/questions-before-signing-equipment-service-contract)

Looking for service? Visit our [Preventive Maintenance Agreements](/services/preventive-maintenance) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'How often should commercial kitchen equipment be serviced?', answer: 'Most commercial kitchen equipment should be professionally serviced quarterly. High-use items like fryers and ice machines may need monthly attention. Refrigeration systems need quarterly condenser cleaning. HVAC and ventilation should be serviced twice per year.' },
      { question: 'What is included in a commercial kitchen equipment PM visit?', answer: 'A typical preventive maintenance visit includes cleaning (condensers, burners, filters), calibration (thermostats, timers, gas pressures), inspection (gaskets, wiring, belts, bearings), lubrication of moving parts, and a written report of equipment condition and recommended repairs.' },
      { question: 'Is preventive maintenance worth the cost for restaurant equipment?', answer: 'Yes. Studies show that preventive maintenance reduces emergency breakdowns by up to 80% and extends equipment life by 30-50%. A quarterly PM program typically costs less than a single emergency service call.' },
    ],
  },
  {
    slug: 'commercial-kitchen-ventilation-problems-signs',
    title: '5 Signs Your Commercial Kitchen Ventilation Needs Service',
    description: 'Smoke in the dining room? Kitchen too hot? Grease buildup? Here are 5 warning signs your kitchen ventilation system needs professional attention.',
    date: '2026-03-18',
    category: 'Ventilation',
    readTime: '4 min',
    content: `Kitchen ventilation is the most overlooked system in a commercial kitchen — until it fails. Here are five warning signs that your exhaust and makeup air system needs attention.

## 1. Smoke or Cooking Odors in the Dining Room

If customers can smell the fryer from their table, your exhaust system isn't capturing properly. This usually means:
- Exhaust fan speed has decreased (worn belt, failing motor)
- Makeup air unit isn't providing enough replacement air
- Kitchen is running at negative pressure, pulling air from the dining room instead of the other way around

**The fix:** Air balance test and fan service. A properly balanced kitchen should be slightly negative relative to the dining room — enough to contain cooking odors but not enough to pull conditioned air.

## 2. Excessive Heat in the Kitchen

Your kitchen is hotter than it should be. Staff is uncomfortable. Food quality suffers.

**Common causes:**
- Makeup air unit not functioning (kitchen is pulling hot unconditioned air from outside)
- Exhaust volume too low (heat isn't being removed)
- Makeup air temperature not being tempered in winter or cooled in summer

**Why it matters:** OSHA recommends kitchen temperatures below 86°F. Beyond comfort, excessive heat accelerates equipment wear, increases refrigeration costs, and affects food safety.

## 3. Grease Dripping from Hoods or Ductwork

Visible grease accumulation on hood surfaces, duct seams, or fan housings is a **fire hazard**. Commercial kitchen fires caused by grease buildup in ductwork account for thousands of incidents per year.

**What to do:**
- Schedule hood cleaning immediately (NFPA 96 requires quarterly for heavy-use kitchens)
- Have the ductwork inspected — grease may have accumulated in areas the cleaning crew can't reach
- Check that grease filters are being cleaned/replaced regularly by kitchen staff

## 4. Fan Making Unusual Noises

Grinding, squealing, rattling, or vibration from the exhaust fan means mechanical problems:
- **Squealing:** Belt slipping or worn
- **Grinding:** Bearing failure (replace immediately before total failure)
- **Rattling:** Loose mounting, debris in fan housing, or unbalanced fan wheel
- **Vibration:** Grease buildup on fan blades causing imbalance

A fan that fails completely shuts down your kitchen. These sounds are your warning — address them before they become emergencies.

## 5. Doors That Are Hard to Open or Slam Shut

If your front door requires extra force to open, or slams shut violently when released, your kitchen is running at excessive negative pressure. This means the exhaust is pulling out more air than the makeup air system is providing.

**Consequences:**
- Energy waste (pulling heated/cooled dining room air into the kitchen)
- Customer discomfort (drafts near the entrance)
- Equipment strain (refrigeration works harder against warm infiltration air)
- Backdrafting risk in gas appliances

**The fix:** Professional air balance measurement and makeup air system service.

## How Air Balancing Works

A qualified technician uses instruments to measure:
- Exhaust airflow at each hood section (CFM)
- Makeup air supply volume
- Pressure differential between kitchen and dining room
- Temperature of supply air

The goal: kitchen at -0.02 to -0.05 inches of water column relative to the dining room. Enough to contain odors, not enough to cause problems.

## Ventilation Maintenance Schedule

| Service | Frequency |
|---------|-----------|
| Grease filter cleaning | Weekly (kitchen staff) |
| Hood cleaning | Quarterly |
| Fan belt inspection | Quarterly |
| Full air balance test | Semi-annually |
| Ductwork inspection | Annually |
| Fire suppression inspection | Semi-annually |

**True Commercial Service specializes in commercial kitchen ventilation systems including CaptiveAire hoods, makeup air units, and exhaust fan service. We perform air balancing, fan repair, and ongoing maintenance across Union County, NJ.**

## Related Articles

- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)
- [Kitchen Hood Not Capturing Smoke](/blog/kitchen-hood-not-capturing-smoke)
- [CaptiveAire Hood Maintenance Guide](/blog/captiveaire-hood-maintenance-repair-guide)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'How do I know if my commercial kitchen ventilation needs service?', answer: 'Warning signs include visible grease buildup on hood surfaces, smoke or steam not being captured by the hood, excessive heat in the kitchen, grease dripping from filters or ductwork, and unusual odors or poor air quality. Any of these indicate your ventilation system needs immediate attention.' },
      { question: 'How often should commercial kitchen hoods be cleaned?', answer: 'Kitchen exhaust filters should be cleaned weekly. The full hood and ductwork system should be professionally cleaned every 3-6 months depending on cooking volume. High-volume operations like charbroiling may need monthly deep cleaning.' },
      { question: 'What is kitchen air balancing and why does it matter?', answer: 'Air balancing ensures the right ratio of exhaust air to makeup air in your kitchen. Poor balance causes negative pressure (doors hard to open, pilot lights blowing out) or smoke spillage from hoods. Proper balancing improves ventilation efficiency and kitchen comfort.' },
    ],
  },
  {
    slug: 'commercial-kitchen-equipment-repair-cost-nj',
    title: 'What Does Commercial Kitchen Equipment Repair Cost in NJ? 2026 Pricing Guide',
    description: 'Honest breakdown of what commercial kitchen equipment repair costs in New Jersey. Service call fees, hourly rates, common repairs by equipment type.',
    date: '2026-03-15',
    category: 'Pricing',
    readTime: '5 min',
    content: `Understanding repair costs helps you budget properly and avoid getting overcharged. Here's what commercial kitchen equipment repair actually costs in New Jersey in 2026.

## Service Call Structure

Most commercial equipment repair companies in NJ charge:

| Fee Type | Typical Range |
|----------|--------------|
| Service call / trip charge | $95 - $165 |
| Standard hourly labor | $125 - $185/hr |
| Emergency / after-hours rate | $185 - $275/hr |
| Minimum service charge | $150 - $250 |

The minimum service charge means even a 15-minute fix costs at least $150-250. This covers the tech's drive time, vehicle, tools, and insurance.

## Average Repair Costs by Equipment

### Refrigeration (Walk-ins, Reach-ins)
- Thermostat replacement: $200 - $400
- Fan motor replacement: $300 - $600
- Compressor replacement: $1,500 - $4,000
- Door gasket replacement: $100 - $250
- Defrost system repair: $250 - $500

### Ice Machines
- Cleaning and descaling: $200 - $350
- Water valve replacement: $200 - $400
- Compressor repair: $800 - $2,500
- Control board replacement: $400 - $700
- Harvest valve repair: $300 - $600

### Cooking Equipment
- Igniter replacement: $150 - $300
- Thermostat replacement: $200 - $450
- Gas valve replacement: $300 - $600
- Burner repair: $200 - $500
- Combi oven repairs: $400 - $2,500

### Dishwashers
- Pump replacement: $400 - $800
- Heating element: $300 - $600
- Wash/rinse arm replacement: $150 - $300
- Chemical dispenser repair: $100 - $250

### Ventilation
- Fan belt replacement: $150 - $250
- Fan motor replacement: $400 - $900
- Air balancing service: $400 - $1,200
- Makeup air unit repair: $500 - $2,000

## Parts Markup

Expect a 25-40% markup on parts. This covers the service company's cost of stocking inventory, shipping, warranty handling, and the time to source the correct part. A $100 wholesale part might be billed at $130-140.

## How to Avoid Overpaying

1. **Ask for the diagnosis before authorizing repair** — a good tech will explain what's wrong and give you a cost estimate before turning a wrench
2. **Get an NTE (not-to-exceed) agreement** — caps the total cost and requires approval before going over
3. **PM contracts reduce emergency costs** — quarterly maintenance catches problems when they're $200 fixes, not $2,000 emergencies
4. **Don't shop on price alone** — the cheapest tech who misdiagnoses the problem costs you more than the experienced tech who fixes it right the first time

## When Repair vs Replace Makes Sense

**Repair if:**
- Equipment is under 7 years old
- Repair cost is less than 50% of replacement cost
- Parts are still available from the manufacturer
- No history of recurring failures

**Replace if:**
- Equipment is 10+ years old
- Repair cost exceeds 50% of replacement cost
- Refrigerant type is being phased out (R-22)
- Multiple failures in the past 12 months

**True Commercial Service provides transparent, upfront pricing for all commercial kitchen equipment repair in Union County, NJ. No hidden fees. NTE agreements on every job.**

## Related Articles

- [How to Choose a Repair Company in NJ](/blog/how-to-choose-commercial-kitchen-equipment-repair-company-nj)
- [The True Cost of Equipment Downtime](/blog/restaurant-equipment-downtime-cost)
- [Questions Before Signing a Service Contract](/blog/questions-before-signing-equipment-service-contract)

Looking for service? Visit our [Schedule Service](/schedule-service) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'How much does commercial kitchen equipment repair cost in NJ?', answer: 'In New Jersey, typical repair costs range from $150-300 for minor fixes (thermostats, gaskets, igniters) to $500-1,500 for major repairs (compressor replacement, control board, motor). Emergency and after-hours calls typically add a $50-150 premium.' },
      { question: 'Is it cheaper to repair or replace commercial kitchen equipment?', answer: 'As a general rule, if the repair cost exceeds 50% of the replacement cost and the equipment is past its expected lifespan, replacement is usually more cost-effective. For newer equipment, repair almost always makes more sense.' },
      { question: 'Do commercial equipment repair companies charge a diagnostic fee?', answer: 'Most reputable companies charge a diagnostic or trip fee ($75-150) that covers the technician visit and diagnosis. Many companies apply this fee toward the repair if you proceed. Be wary of companies that offer free diagnostics — the cost is usually built into inflated repair prices.' },
    ],
  },
  {
    slug: 'how-to-choose-commercial-kitchen-equipment-repair-company-nj',
    title: 'How to Choose a Commercial Kitchen Equipment Repair Company in NJ',
    description: 'Not all repair companies are equal. Here\'s what to look for when choosing a commercial kitchen equipment service provider in New Jersey.',
    date: '2026-03-13',
    category: 'Guides',
    readTime: '4 min',
    content: `When your walk-in goes down on a Friday night, you don't have time to research repair companies. Make the decision now — before you need it.

## What to Look For

### 1. Response Time
Ask: "What's your average response time for emergencies?" The answer should be under 2 hours for your area. If they can't give you a number, they don't track it — which means it's slow.

### 2. CFESA Certification
The Commercial Food Equipment Service Association (CFESA) certifies technicians who pass rigorous testing in electrical, gas, steam, and refrigeration. A CFESA-certified company has invested in training and meets industry standards.

### 3. Manufacturer Authorizations
Who are they authorized to work on? Factory-authorized technicians have access to OEM parts, technical support lines, and current service bulletins. Working with an unauthorized tech can void your equipment warranty.

### 4. 24/7 Availability
Equipment doesn't break on a schedule. Your service company needs to answer at 10pm on a Saturday, not just Monday through Friday 8-5.

### 5. Transparent Pricing
Before they start work, you should know:
- Service call fee
- Hourly rate
- Not-to-exceed limit
- Parts markup policy

If they won't give you these numbers upfront, find someone who will.

### 6. First-Time Fix Rate
Ask: "What percentage of your calls are resolved on the first visit?" Industry average is around 70%. Good companies hit 85%+. This matters because a return visit costs you another service call, more downtime, and more frustration.

### 7. Insurance and Licensing
At minimum, they should carry:
- General liability ($1M+)
- Workers' compensation
- Commercial auto insurance
- EPA 608 certification for all techs handling refrigerant

### 8. References from Similar Businesses
A company that services hospitals and hotels may not understand the urgency of a restaurant kitchen. Ask for references from businesses similar to yours.

## Red Flags

- **No written estimates** — everything should be documented
- **Can't explain the diagnosis** — if the tech can't tell you what's wrong in plain language, they may not know
- **Pushes replacement over repair** — some companies make more money selling equipment than fixing it
- **No warranty on work** — reputable companies guarantee their repairs for 30-90 days minimum
- **Doesn't carry parts on the truck** — if every call requires a return visit for parts, their first-time fix rate is terrible

## The PM Agreement Test

A company that offers preventive maintenance agreements is invested in keeping your equipment running — not just profiting from breakdowns. PM agreements create recurring revenue for them and lower costs for you. It's a sign of a partnership-oriented company.

## Make the Call Before You Need It

Set up a PM agreement or at least establish a relationship with a service company now. When your freezer goes down at 9pm, you want to text a number that already knows your name, your equipment, and your address — not start Googling "emergency repair near me."

**True Commercial Service provides 24/7 commercial kitchen equipment repair across Union County, NJ. We believe in transparent pricing, first-visit resolution, and preventive maintenance that keeps your kitchen running.**

## Related Articles

- [What Does Equipment Repair Cost in NJ?](/blog/commercial-kitchen-equipment-repair-cost-nj)
- [Questions Before Signing a Service Contract](/blog/questions-before-signing-equipment-service-contract)
- [What Is a PM Agreement?](/blog/pm-agreement-benefits-nj-restaurants)

Looking for service? Visit our [About True Commercial Service](/about) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What should I look for in a commercial kitchen equipment repair company?', answer: 'Look for factory-trained technicians with manufacturer certifications, guaranteed response times (under 4 hours for emergencies), transparent pricing with written estimates, a strong first-time fix rate (above 85%), and experience with your specific equipment brands.' },
      { question: 'Should I use the equipment manufacturer for repairs or a third-party company?', answer: 'Third-party independent service companies are often faster, more flexible, and less expensive than manufacturer service departments. The key is ensuring the third-party techs have factory training and certifications on your specific equipment brands.' },
      { question: 'How important are response times for commercial kitchen repair?', answer: 'Extremely important. Every hour of equipment downtime costs a restaurant $200-500 in lost revenue, wasted product, and labor inefficiency. A company guaranteeing sub-4-hour response can save you thousands compared to one that takes 24-48 hours.' },
    ],
  },
  {
    slug: 'restaurant-equipment-downtime-cost',
    title: 'The True Cost of Kitchen Equipment Downtime for NJ Restaurants',
    description: 'Equipment downtime costs more than the repair. Lost revenue, spoiled inventory, health code risk, and staff overtime add up fast.',
    date: '2026-03-11',
    category: 'Business',
    readTime: '4 min',
    content: `A broken walk-in cooler isn't a $500 repair problem. It's a $5,000 business problem. Here's the real math.

## The Visible Costs

### The Repair Bill
Average emergency service call in NJ: $450-800. This is what shows up on the invoice — and it's the smallest part of the total cost.

### Spoiled Inventory
A walk-in cooler that's above 41°F for more than 4 hours puts all contents at risk. Average product value in a restaurant walk-in: $3,000-8,000. Health code requires you to discard anything that's been in the temperature danger zone (41°F-135°F) for more than 4 hours.

## The Hidden Costs

### Lost Revenue
If your only fryer goes down during dinner service, you lose every fried item on the menu. If your combi oven fails before a catering event, you lose the entire contract. Conservative estimate: $500-2,000 per hour of kitchen downtime during service.

### Staff Overtime
Emergency repairs outside business hours mean overtime for the tech — but also overtime for your kitchen staff who have to work around the broken equipment, prep food differently, or stay late to catch up.

### Menu Limitations
When a major piece of equipment is down and waiting for parts, you're running a limited menu. Customers notice. They order less. Some don't come back.

### Health Code Risk
A walk-in above temperature isn't just a product loss — it's a potential health code violation. Inspectors don't care that your compressor failed at 2am. If product is out of temp when they show up, you get cited.

### Reputation Damage
One bad Yelp review that says "food was cold" or "they were out of half the menu" costs you more than the repair ever will.

## The Math

| Cost Category | Low Estimate | High Estimate |
|---|---|---|
| Repair bill | $450 | $2,500 |
| Spoiled inventory | $500 | $8,000 |
| Lost revenue (4 hours) | $2,000 | $8,000 |
| Staff overtime | $200 | $500 |
| Health code fine | $0 | $1,000 |
| **Total** | **$3,150** | **$20,000** |

A single equipment failure can cost 5-20x the repair bill itself.

## How to Minimize Downtime Cost

### 1. Preventive Maintenance
80% of emergency breakdowns are preventable. Quarterly PM costs $200-400/visit. One prevented emergency saves $3,000-20,000.

### 2. Emergency Response Agreement
Have a service company on speed dial — not one you're finding on Google at 10pm. An existing relationship means faster response.

### 3. Know Your Equipment Age
Equipment over 10 years old fails more frequently. Plan replacements before they become emergencies.

### 4. Backup Plans
Know which menu items you can serve if the fryer goes down. Have a backup ice supplier's number. Know where the nearest walk-in you can rent is.

**True Commercial Service offers 24/7 emergency response and preventive maintenance designed to minimize downtime for NJ restaurants. Every minute of downtime costs you money — we show up fast.**

## Related Articles

- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
- [What Is a PM Agreement?](/blog/pm-agreement-benefits-nj-restaurants)
- [What Does Equipment Repair Cost in NJ?](/blog/commercial-kitchen-equipment-repair-cost-nj)

Looking for service? Visit our [Preventive Maintenance Agreements](/services/preventive-maintenance) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'How much does equipment downtime cost a restaurant?', answer: 'Equipment downtime costs a typical restaurant $200-500 per hour when you factor in lost revenue, food waste, labor inefficiency, and customer loss. A single refrigeration failure can result in $3,000-8,000 in spoiled inventory on top of the repair cost.' },
      { question: 'What equipment failures cost restaurants the most money?', answer: 'Refrigeration failures are the most expensive because of inventory loss. A walk-in cooler failure can spoil thousands of dollars in product within hours. Cooking line failures during service are second — they directly impact revenue and can force a restaurant to close mid-shift.' },
      { question: 'How can restaurants reduce equipment downtime?', answer: 'The most effective strategy is a preventive maintenance program that catches problems before they become emergencies. PM reduces breakdowns by up to 80%. Additionally, choose a service company with fast response times and high first-time fix rates.' },
    ],
  },
  {
    slug: 'epa-608-certification-restaurant-owners',
    title: 'EPA 608 Certification: What Restaurant Owners Need to Know About Refrigerant Work',
    description: 'Why your equipment tech needs EPA 608 certification, what it covers, and why you should never let an uncertified person touch your refrigeration.',
    date: '2026-03-09',
    category: 'Compliance',
    readTime: '4 min',
    content: `If anyone works on the refrigerant side of your walk-in cooler, reach-in, or ice machine, they are required by federal law to hold EPA Section 608 certification. Here's what that means for you as a restaurant owner.

## What Is EPA 608?

The EPA (Environmental Protection Agency) requires that anyone who purchases, handles, or disposes of refrigerants must be certified under Section 608 of the Clean Air Act. This applies to all commercial refrigeration and HVAC equipment.

## Why It Matters to You

### Legal Liability
If an uncertified person vents refrigerant from your equipment — even accidentally — the **property owner** can be held liable. Fines range from $10,000 to $44,539 per day, per violation.

### Insurance
If equipment is damaged by an uncertified tech working on the refrigerant system, your insurance may deny the claim.

### Environmental
Commercial refrigerants (R-134a, R-404A, R-410A) are potent greenhouse gases. Proper handling isn't just legal compliance — it's environmental responsibility.

## Certification Types

| Type | Covers |
|------|--------|
| Type I | Small appliances (under 5 lbs refrigerant) |
| Type II | High-pressure systems (most commercial equipment) |
| Type III | Low-pressure systems (large chillers) |
| Universal | All of the above |

**For commercial kitchen equipment, your tech needs at minimum Type II — ideally Universal.**

## What to Ask Your Service Company

1. "Are all your techs EPA 608 certified?" (The answer should be yes without hesitation)
2. "What type of certification?" (Type II or Universal for restaurant work)
3. "Do you recover refrigerant or vent it?" (Venting is illegal — recovery is required)
4. "Do you have refrigerant tracking documentation?" (Required for systems with 50+ lbs)

## Red Flags

- Tech says "I don't need that for this type of equipment" — wrong, all refrigerant work requires certification
- No recovery equipment visible — they may be venting refrigerant
- Can't show certification when asked — it should be on their person or in the van
- Adds refrigerant without checking for leaks — topping off a leaking system is a temporary fix that wastes money and harms the environment

## R-22 Phase-Out

If your older equipment uses R-22 (Freon), it's been phased out of production. The remaining supply is expensive — $50-100+ per pound. If your system uses R-22 and develops a leak, it may be more cost-effective to retrofit or replace the system than to keep recharging.

**Every technician at True Commercial Service holds EPA 608 Universal certification. We practice proper refrigerant recovery on every job across Union County, NJ.**

## Related Articles

- [Walk-In Cooler Troubleshooting Guide](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)
- [Ice Machine Not Making Ice](/blog/commercial-ice-machine-not-making-ice)
- [Walk-In Freezer vs Cooler Differences](/blog/walk-in-freezer-vs-cooler-service-differences)

Looking for service? Visit our [Refrigeration Repair](/services/refrigeration) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What is EPA 608 certification?', answer: 'EPA Section 608 certification is a federal requirement for anyone who services, maintains, or repairs equipment that uses refrigerants. It ensures technicians understand proper refrigerant handling, recovery, and environmental regulations. There are four types based on equipment size.' },
      { question: 'Can a restaurant owner work on their own refrigeration equipment?', answer: 'If the work involves the refrigerant circuit (charging, recovering, or repairing refrigerant lines), you must hold EPA 608 certification. Routine maintenance like cleaning coils, replacing gaskets, or changing filters does not require certification.' },
      { question: 'What happens if an uncertified person works on refrigerant equipment?', answer: 'Violations of EPA Section 608 can result in fines up to $44,539 per day per violation. Both the person performing the work and the business owner who authorized it can be held liable. Always verify your technician holds current EPA 608 certification.' },
    ],
  },
  {
    slug: 'commercial-fryer-troubleshooting',
    title: 'Commercial Fryer Troubleshooting: 6 Common Problems and How to Fix Them',
    description: 'Your commercial fryer won\'t heat, oil is foaming, pilot light won\'t stay lit? Here are the 6 most common fryer problems and what to do.',
    date: '2026-03-07',
    category: 'Cooking',
    readTime: '4 min',
    content: `Fryers are the workhorses of most commercial kitchens — and when they go down, a big chunk of your menu goes with them.

## 1. Fryer Won't Heat

**Check first:** Is the pilot light on? Is the gas supply valve open? Is the electrical outlet working (for electric fryers)?

**Common causes:**
- Failed thermostat — the thermostat tells the burner when to fire. If it fails, the burner never gets the signal.
- Bad gas valve — the solenoid that opens the gas supply to the burners may have failed.
- Faulty igniter — if the pilot or electronic ignition isn't working, the burner won't light.

**What you can do:** Check the obvious — gas valve, pilot, power. Beyond that, call a tech.

## 2. Oil Is Foaming

Foaming oil is a food quality and safety issue.

**Common causes:**
- Oil needs changing — degraded oil foams. If it's dark, smells off, or has been in use more than 5-7 days, it's done.
- Water contamination — frozen foods not properly thawed, wet baskets, or a leak in the system can introduce water.
- Soap residue — if the vat was cleaned with detergent and not rinsed thoroughly, soap causes foaming.

**Fix:** Change the oil. If foaming persists with fresh oil, look for water sources.

## 3. Pilot Light Won't Stay Lit

**Common causes:**
- Bad thermocouple — the safety device that keeps the gas valve open. If it can't sense the pilot flame, it shuts off gas. Thermocouple replacement costs $75-200.
- Clogged pilot orifice — grease and carbon buildup blocks the tiny pilot opening.
- Draft — excessive airflow from the hood system can blow out the pilot.

## 4. Temperature Won't Hold Steady

The oil swings between too hot and too cold.

**Common causes:**
- Failing thermostat — not reading temperature accurately.
- Clogged burner tubes — uneven flame means uneven heating.
- Oversized loads — dropping too much cold food at once overwhelms the recovery time.

**Pro tip:** A fryer should recover to set temperature within 3-5 minutes of a normal food load. If it takes longer, something is wrong.

## 5. Burner Flame Is Yellow or Uneven

A healthy gas burner produces a blue flame with small yellow tips. A predominantly yellow or orange flame means incomplete combustion.

**Common causes:**
- Clogged burner orifices — clean with a wire brush (when cold and gas is off)
- Incorrect air shutter adjustment — the air mixer may need adjusting
- Gas pressure issue — call your gas company or a qualified tech

**Don't ignore this.** Incomplete combustion produces carbon monoxide.

## 6. Oil Is Draining Slowly or Not at All

At the end of the night, the oil won't drain for filtering.

**Common causes:**
- Clogged drain valve — carbon and food debris builds up
- Sediment in the drain line — needs to be flushed
- Damaged drain valve handle — may need replacement

**Prevention:** Filter oil daily. Skim debris during service. This extends oil life and prevents drain clogs.

## Fryer Maintenance Schedule

| Task | Frequency |
|------|-----------|
| Skim debris | During every service |
| Filter oil | Daily |
| Boil out (deep clean) | Weekly |
| Check thermostat accuracy | Monthly |
| Professional inspection | Semi-annually |

**True Commercial Service repairs all major commercial fryer brands across Union County, NJ. Gas and electric. Same-day emergency service available.**

## Related Articles

- [Rational Combi Oven Error Codes](/blog/rational-combi-oven-error-codes-guide)
- [What Does Equipment Repair Cost in NJ?](/blog/commercial-kitchen-equipment-repair-cost-nj)
- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)

Looking for service? Visit our [Cooking Equipment Repair](/services/cooking-equipment) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why is my commercial fryer not heating up?', answer: 'The most common causes for a commercial fryer not heating are a failed thermostat, defective high-limit safety switch, faulty igniter or pilot assembly (gas fryers), or burned-out heating elements (electric fryers). Check the pilot light first on gas models — it is the simplest fix.' },
      { question: 'How often should commercial fryer oil be changed?', answer: 'Commercial fryer oil should be filtered daily and completely changed every 1-2 weeks depending on volume and what you are frying. Breaded and battered items degrade oil faster. Dark, foamy, or foul-smelling oil should be changed immediately.' },
      { question: 'Why is my commercial fryer producing dark or greasy food?', answer: 'Dark or greasy food usually indicates the oil temperature is incorrect, the oil is degraded and needs changing, or the thermostat is out of calibration. A thermostat that reads 350°F but is actually at 300°F produces greasy, undercooked food. Have the thermostat calibrated.' },
    ],
  },
  {
    slug: 'pm-agreement-benefits-nj-restaurants',
    title: 'What Is a PM Agreement and Why Does Every NJ Restaurant Need One?',
    description: 'Preventive maintenance agreements save money, prevent emergencies, and keep your kitchen running. Here\'s how they work and what to expect.',
    date: '2026-03-05',
    category: 'Maintenance',
    readTime: '4 min',
    content: `A PM (preventive maintenance) agreement is a contract between your restaurant and an equipment service company for regular, scheduled maintenance visits. Think of it as an oil change schedule for your kitchen.

## How PM Agreements Work

### What's Included
Typically, a PM agreement covers:
- Scheduled visits (quarterly is most common)
- Comprehensive inspection of all covered equipment
- Cleaning (condensers, coils, filters, drains)
- Temperature calibration and verification
- Safety checks (gas connections, electrical)
- Written documentation of findings
- Priority scheduling for emergency calls
- Discounted labor and parts rates

### What It Costs
PM agreement pricing varies by equipment count and kitchen size:

| Kitchen Size | Quarterly Cost | Annual Cost |
|---|---|---|
| Small (5-10 pieces) | $200 - $350/visit | $800 - $1,400 |
| Medium (10-20 pieces) | $350 - $600/visit | $1,400 - $2,400 |
| Large (20+ pieces) | $600 - $1,000/visit | $2,400 - $4,000 |

### What You Get in Return
- **Fewer emergencies** — PM catches problems at the $200 stage, not the $2,000 stage
- **Extended equipment life** — properly maintained equipment lasts 30-50% longer
- **Lower energy costs** — clean condensers and calibrated thermostats run more efficiently
- **Health code compliance** — documented maintenance satisfies inspector questions
- **Priority response** — PM customers go to the front of the line for emergencies
- **Predictable budgeting** — fixed quarterly cost instead of surprise repair bills

## The Numbers That Matter

A restaurant with 15 pieces of commercial equipment will average 3-4 emergency service calls per year without PM. With PM, that drops to 0-1.

| Scenario | Annual Cost |
|---|---|
| No PM + 4 emergencies | $3,200 - $6,400 in repair bills |
| PM agreement + 1 emergency | $1,800 - $3,200 total |
| **Net savings with PM** | **$1,400 - $3,200/year** |

And that's before you factor in prevented inventory loss, prevented downtime, and extended equipment life.

## What a PM Visit Looks Like

A technician arrives at a scheduled time (usually during off-peak hours). They spend 1-3 hours working through every piece of covered equipment with a checklist:

1. Visual inspection for wear, damage, leaks
2. Temperature readings on all refrigeration
3. Condenser coil cleaning
4. Drain clearing
5. Gasket inspection
6. Filter check/replacement
7. Gas connection check (cooking equipment)
8. Electrical connection tightening
9. Calibration verification
10. Written report with photos

You get a report documenting everything checked, anything found, and any recommendations for repair before the next visit.

## When to Start

The best time is now — before something breaks. The second best time is right after something breaks and you're feeling the pain of an emergency repair bill.

Don't wait for the busy season. Equipment fails when it's working hardest — summer for refrigeration, winter for heating. Get ahead of it.

**True Commercial Service offers customized PM agreements for commercial kitchens across Union County, NJ. Contact us for a free equipment assessment and PM proposal.**

## Related Articles

- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
- [The True Cost of Equipment Downtime](/blog/restaurant-equipment-downtime-cost)
- [Questions Before Signing a Service Contract](/blog/questions-before-signing-equipment-service-contract)

Looking for service? Visit our [Preventive Maintenance Agreements](/services/preventive-maintenance) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What is a PM agreement for restaurant equipment?', answer: 'A Preventive Maintenance agreement is a scheduled service contract where a technician visits your kitchen on a regular cadence (monthly or quarterly) to clean, inspect, calibrate, and maintain your commercial equipment. This prevents breakdowns and extends equipment life.' },
      { question: 'How much does a PM agreement cost for a restaurant?', answer: 'PM agreements typically cost $200-600 per quarter depending on the number of equipment pieces and visit frequency. This is significantly less than a single emergency repair call, and PM programs reduce emergency breakdowns by up to 80%.' },
      { question: 'What equipment should be covered under a PM agreement?', answer: 'At minimum, cover refrigeration (walk-ins, reach-ins), cooking equipment (ovens, fryers), and ventilation (hoods, exhaust fans). Ice machines and espresso machines also benefit greatly from regular maintenance. Prioritize equipment that is critical to daily operations.' },
    ],
  },
  {
    slug: 'captiveaire-hood-maintenance-repair-guide',
    title: 'CaptiveAire Hood Systems: Complete Maintenance and Repair Guide',
    description: 'Everything you need to know about maintaining and repairing CaptiveAire commercial kitchen ventilation systems. Filters, fans, makeup air, and fire suppression.',
    date: '2026-03-03',
    category: 'Ventilation',
    readTime: '5 min',
    content: `CaptiveAire is the largest manufacturer of commercial kitchen ventilation systems in the US. If you have a commercial kitchen built or renovated in the last 20 years, there's a good chance your hood system is CaptiveAire.

## CaptiveAire System Components

### Exhaust Hoods
The stainless steel canopy over your cooking equipment. Captures heat, grease, smoke, and steam. Available in Type I (for grease-producing equipment) and Type II (for steam/heat only).

### Exhaust Fans
The motor that pulls air through the hood and ductwork to the roof. CaptiveAire uses upblast fans (motor on the roof) for most commercial installations.

### Makeup Air Units (MAU)
When the exhaust fan pulls air out, replacement air must come from somewhere. The MAU provides conditioned (heated or cooled) replacement air to prevent negative pressure issues.

### Grease Filters
Baffle-style stainless steel filters that capture grease before it enters the ductwork. First line of defense against grease fires.

### Fire Suppression
ANSUL or similar wet chemical fire suppression system integrated into the hood. Required by code in all Type I hood systems.

## Maintenance Schedule

### Daily (Kitchen Staff)
- Wipe down accessible hood surfaces
- Check that grease filters are properly seated
- Empty grease cups/troughs
- Verify fire suppression system is armed (green light)

### Weekly (Kitchen Staff)
- Remove and clean grease filters (dishwasher or soak in degreaser)
- Wipe interior hood surfaces
- Check grease cup levels

### Quarterly (Professional Service)
- Exhaust fan belt inspection and replacement
- Fan bearing lubrication
- Motor amp draw reading
- Airflow measurement (CFM) at hood face
- Makeup air unit filter replacement
- MAU heating/cooling function test
- Ductwork access panel inspection

### Semi-Annually (Professional Service)
- Complete air balance test (exhaust vs makeup air)
- Makeup air unit deep cleaning
- Fan wheel cleaning and balance check
- Complete hood cleaning (per NFPA 96)
- Fire suppression system inspection (per code)

### Annually (Professional Service)
- Full system inspection and performance report
- Fan motor electrical connections
- Ductwork integrity check
- Fire suppression recharge/recertification
- Code compliance verification

## Common Problems

### Kitchen Too Hot
**Likely cause:** Makeup air unit not providing enough tempered air. The exhaust fan is pulling air out but the replacement air is unconditioned — or the MAU has failed entirely.

### Smoke Escaping the Hood
**Likely cause:** Exhaust fan speed has decreased (worn belt, failing motor), filters are clogged, or the hood was not properly sized for the equipment configuration.

### Grease Dripping from Hood
**Likely cause:** Filters not being cleaned frequently enough, filters installed incorrectly, or grease has accumulated in the ductwork beyond the filters.

### Excessive Noise
**Likely cause:** Fan belt slipping, bearing failure, fan wheel imbalance (usually from grease accumulation), or loose ductwork connections.

### Doors Hard to Open
**Likely cause:** Excessive negative pressure in the kitchen. The exhaust is pulling out more air than the makeup air system provides. This needs an air balance test.

## Air Balancing

Proper air balance is the most overlooked aspect of commercial kitchen ventilation. The kitchen should be slightly negative relative to the dining room — enough to contain odors, not enough to cause door problems or HVAC issues.

**Measurement target:** -0.02 to -0.05 inches water column (negative relative to dining room)

An air balance test uses a digital manometer and anemometer to measure:
- Exhaust volume at each hood section
- Makeup air supply volume
- Pressure differential between zones
- Supply air temperature

This takes 1-2 hours and should be done semi-annually or whenever cooking equipment is added or changed.

**True Commercial Service provides expert CaptiveAire ventilation service including hood maintenance, fan repair, makeup air units, and professional air balancing across Union County, NJ. We understand ventilation from the inside out.**

## Related Articles

- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)
- [CaptiveAire Hood Service in NJ](/blog/captiveaire-hood-service-nj)
- [Kitchen Ventilation Problems: 5 Signs](/blog/commercial-kitchen-ventilation-problems-signs)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'How often should CaptiveAire hood systems be serviced?', answer: 'CaptiveAire recommends quarterly professional maintenance for most commercial kitchen hood systems. Filters should be cleaned weekly. The full ductwork should be cleaned every 3-6 months. High-volume cooking operations (charbroiling, wok cooking) may need more frequent service.' },
      { question: 'What does CaptiveAire hood maintenance include?', answer: 'Maintenance includes cleaning or replacing grease filters, inspecting and cleaning the exhaust fan, checking belt tension and motor bearings, testing the fire suppression system, verifying proper airflow and capture, and inspecting the makeup air unit for correct balance.' },
      { question: 'Can any HVAC company work on CaptiveAire systems?', answer: 'While any licensed HVAC technician can perform basic cleaning, CaptiveAire recommends using technicians with specific training on their systems — especially for fire suppression, demand control ventilation, and makeup air balancing. Improper service can create fire hazards and code violations.' },
    ],
  },
  {
    slug: 'espresso-machine-repair-nj',
    title: 'Espresso Machine Repair in NJ: La Marzocco, Nuova Simonelli, and More',
    description: 'Finding qualified espresso machine repair in New Jersey is harder than it should be. Here\'s what to know about service for commercial espresso equipment.',
    date: '2026-03-01',
    category: 'Espresso',
    readTime: '4 min',
    content: `Commercial espresso machines are precision instruments that cost $8,000-$25,000. When one goes down, your coffee shop's revenue goes to zero. Here's what NJ coffee shop owners need to know about espresso machine service.

## The Service Gap in New Jersey

Northern New Jersey has hundreds of specialty coffee shops with high-end espresso machines — but very few qualified service technicians. The nearest La Marzocco authorized service center is in upstate New York. Most shops wait 3-5 days for service when their machine fails.

## Common Espresso Machine Problems

### Group Head Leaking
Water dripping from the group head during or between shots. Usually caused by worn group gaskets — a $15 part that requires specific knowledge to replace properly. If ignored, water damage to internal components follows.

### Steam Wand Not Producing Steam
The steam boiler may have a failed heating element, a clogged steam tip, or a scale-blocked valve. In hard water areas (much of NJ), scale is the #1 steam system issue.

### Inconsistent Shot Temperature
Temperature stability is everything in specialty coffee. If shots are running hot and cold, the PID controller, temperature probe, or heating element may be failing. Some machines have dual-boiler systems where one boiler can fail while the other works fine.

### Machine Won't Turn On
Check the obvious first — is it plugged in? Is the circuit breaker tripped? Espresso machines draw significant power (20-30 amps). Beyond that, it's usually a failed power switch, blown fuse, or control board issue.

### Low Pump Pressure
Shots pulling too slowly, channeling, or producing thin crema. The rotary pump may be wearing out, the pump motor capacitor may be failing, or the pressure adjustment needs recalibration.

## Maintenance That Prevents Failures

| Task | Frequency |
|------|-----------|
| Backflush with detergent | Daily |
| Clean steam wand | After every use |
| Clean drip tray and drain box | Daily |
| Descale (water softener check) | Monthly |
| Group gasket replacement | Every 6-12 months |
| Shower screen cleaning | Weekly |
| Full professional service | Annually |

### Water Quality Matters Most

The single most important thing you can do for your espresso machine is install and maintain a water filtration/softening system. Scale from hard water destroys heating elements, clogs valves, and reduces boiler capacity. A $500 water softener protects a $20,000 machine.

## Brands We Service

**La Marzocco** — Linea PB, Linea Classic, KB90, GB5, Strada
The gold standard of specialty espresso. Italian-made, dual-boiler, saturated group heads. These machines are built to last decades with proper maintenance.

**Nuova Simonelli / Victoria Arduino** — Aurelia Wave, Appia, Eagle One
Strong performer in the mid-to-high-end specialty segment. The Victoria Arduino Eagle One is the current World Barista Championship machine.

**Rancilio** — Classe 7, Classe 9, Classe 11
Workhorse Italian machines common in established cafes and Italian restaurants throughout NJ.

**Schaerer** — Coffee Art Plus (Dunkin' standard)
Super-automatic machines found in QSR chains. Different service approach than traditional espresso machines.

## What to Look for in an Espresso Tech

1. **Brand-specific training** — La Marzocco and Nuova Simonelli each have their own certification programs. A general appliance tech shouldn't touch a $20,000 espresso machine.
2. **SCA (Specialty Coffee Association) membership** — indicates involvement in the specialty coffee industry
3. **Carries espresso-specific parts** — group gaskets, shower screens, o-rings, common valve components
4. **Understands water chemistry** — can test and advise on filtration
5. **Fast response** — a coffee shop without an espresso machine has no revenue

**True Commercial Service is building espresso machine service capability for Northern New Jersey. We're pursuing La Marzocco and Nuova Simonelli factory certifications to provide the fast, qualified service that NJ coffee shops deserve.**

## Related Articles

- [How to Choose a Repair Company in NJ](/blog/how-to-choose-commercial-kitchen-equipment-repair-company-nj)
- [What Does Equipment Repair Cost in NJ?](/blog/commercial-kitchen-equipment-repair-cost-nj)
- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)

Looking for service? Visit our [Espresso Machine Repair](/services/espresso-machines) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'How much does commercial espresso machine repair cost?', answer: 'Commercial espresso machine repairs typically range from $150-400 for common fixes like group head gaskets, solenoid valves, and steam wand tips, to $800-2,000+ for major work like boiler replacement, PID controller replacement, or full pump rebuilds.' },
      { question: 'How often should a commercial espresso machine be serviced?', answer: 'Commercial espresso machines should receive professional maintenance every 3-6 months. This includes group head gasket replacement, shower screen cleaning, boiler descaling, water softener check, and pressure calibration. Daily backflushing by staff is also essential.' },
      { question: 'Can any repair company work on La Marzocco or Nuova Simonelli machines?', answer: 'Most general kitchen equipment repair companies will not touch commercial espresso machines. Look for a company with technicians specifically trained on your machine brand. La Marzocco, Nuova Simonelli, and Slayer all have specific service training programs.' },
    ],
  },
  {
    slug: 'walk-in-freezer-vs-cooler-service-differences',
    title: 'Walk-In Freezer vs Walk-In Cooler: Service Differences Every Owner Should Know',
    description: 'Walk-in freezers and coolers look similar but have very different service needs. Understanding the differences saves money and prevents failures.',
    date: '2026-02-27',
    category: 'Refrigeration',
    readTime: '4 min',
    content: `Walk-in freezers and walk-in coolers share the same basic technology — but the operating conditions are so different that they require different maintenance approaches.

## Key Differences

| Factor | Walk-In Cooler | Walk-In Freezer |
|--------|----------------|-----------------|
| Temperature range | 33°F - 40°F | -10°F to 0°F |
| Compressor load | Moderate | High (continuous) |
| Defrost cycles | Minimal | Critical (3-4x daily) |
| Door gasket wear | Moderate | High (frost/ice buildup) |
| Energy consumption | Lower | 2-3x higher |
| Failure urgency | 4-6 hours before product risk | 1-2 hours before product risk |

## Freezer-Specific Issues

### Defrost System Failures
Freezers must actively defrost the evaporator coils multiple times per day. If the defrost system fails — whether it's a timer, heater, or thermostat — ice builds up on the coils, airflow drops, and the freezer can't maintain temperature.

**Signs of defrost problems:**
- Ice buildup visible on evaporator coils
- Temperature slowly rising over days
- Water on the floor near the evaporator
- Compressor running continuously

### Door Heater Issues
Freezer doors have built-in heaters that prevent the gasket from freezing to the frame. If the door heater fails, the gasket freezes shut — and when staff forces it open, they tear the gasket. A torn gasket on a freezer leaks cold air continuously and creates ice buildup around the frame.

### Drain Line Freezing
The condensate drain in a freezer can freeze, causing water to back up into the unit. This creates ice on the floor (slip hazard) and can damage the evaporator. Freezer drain lines need heat tape or a heated drain pan.

## Cooler-Specific Issues

### Condenser Maintenance
Coolers run at higher temperatures, so the condenser doesn't work as hard — but it still needs regular cleaning. A dirty condenser on a cooler might cause a gradual temperature rise that you don't notice until product is compromised.

### Humidity Control
Walk-in coolers need to balance temperature and humidity. Too dry and produce wilts. Too humid and you get condensation, mold, and premature spoilage. The evaporator coil size and fan speed affect humidity levels.

### Door Traffic Impact
Coolers get opened much more frequently than freezers during service — sometimes every 30 seconds. Each door opening introduces warm, humid air. Strip curtains are essential for high-traffic coolers.

## Maintenance Priorities

### For Freezers (Quarterly PM Must Include)
1. Defrost system test — verify all heaters fire and timer is correct
2. Door gasket and door heater inspection
3. Drain line and drain pan heater check
4. Evaporator coil inspection for ice buildup
5. Compressor amp draw (high amp draw indicates system strain)
6. Refrigerant pressure check

### For Coolers (Quarterly PM Must Include)
1. Condenser coil cleaning (this is #1)
2. Evaporator coil inspection
3. Temperature calibration
4. Door gasket inspection
5. Fan motor check
6. Drain clearing

## Emergency Response Differences

When a **cooler** fails, you have 4-6 hours before product enters the danger zone (41°F). You have time to call for same-day service.

When a **freezer** fails, product starts thawing within 1-2 hours. If it's a weekend or holiday, you may need to emergency-transfer product to another freezer while waiting for repair.

**Pro tip:** Know where the nearest rental walk-in freezer is before you need one. Having that phone number saved can prevent thousands in product loss.

## Energy Savings Opportunity

Walk-in freezers consume 2-3x more energy than coolers. A maintenance-neglected freezer with dirty coils can use 30-50% more energy than a clean one. At NJ commercial electric rates, that's $100-300/month in wasted energy on a single unit.

**True Commercial Service provides emergency and preventive maintenance for both walk-in coolers and freezers across Union County, NJ. We understand the critical differences and maintain each accordingly.**

## Related Articles

- [Walk-In Cooler Troubleshooting](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)
- [EPA 608 Certification](/blog/epa-608-certification-restaurant-owners)
- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)

Looking for service? Visit our [Refrigeration Repair](/services/refrigeration) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What is the difference between walk-in cooler and freezer maintenance?', answer: 'Walk-in freezers require defrost system maintenance (heaters, timers, drain lines) that coolers do not. Freezers also have thicker insulation, more powerful compressors, and different gasket requirements. Freezer repairs are generally 20-40% more expensive than comparable cooler repairs.' },
      { question: 'What temperature should a walk-in freezer be set at?', answer: 'Walk-in freezers should maintain a temperature of 0°F or below. If the temperature rises above 10°F, food safety is compromised and you should call for emergency service. Some products require -10°F storage.' },
      { question: 'How long does a walk-in freezer compressor last?', answer: 'A well-maintained walk-in freezer compressor typically lasts 10-15 years. Key maintenance that extends compressor life includes keeping condenser coils clean, maintaining proper refrigerant charge, and ensuring defrost cycles are functioning correctly.' },
    ],
  },
  {
    slug: 'questions-before-signing-equipment-service-contract',
    title: '7 Questions to Ask Before Signing a Restaurant Equipment Service Contract',
    description: 'Before you commit to a service agreement for your commercial kitchen, ask these 7 questions. The wrong contract costs more than no contract.',
    date: '2026-02-25',
    category: 'Guides',
    readTime: '3 min',
    content: `A service agreement can save you thousands — or lock you into a bad deal. Here are the seven questions that separate a good contract from a regrettable one.

## 1. What's the Response Time Guarantee?

Get it in writing. "We'll be there as fast as we can" is not a commitment. Look for specific SLAs:
- Emergency calls: under 2-4 hours
- Standard calls: same day or next business day

If they won't guarantee a response time, their schedule is unpredictable — and you'll be waiting when it matters most.

## 2. What's Covered and What's Not?

Read the fine print. Common exclusions:
- Compressor replacements (most expensive repair)
- Refrigerant (charged per pound on top of labor)
- Parts over a certain dollar amount
- Equipment over a certain age
- "Acts of God" or power surge damage

The best contracts clearly list what's covered. The worst ones have a short covered list and a long exclusion list.

## 3. What Happens If You Don't Fix It on the First Visit?

If the tech diagnoses the problem but needs to order a part, what's the cost for the return visit? Some companies charge a full service call for every visit. Others include the return trip in the original call.

**What to look for:** "Return visits for the same issue within 30 days are covered under the original service call."

## 4. What's the Parts Markup?

Standard industry markup is 25-40% above wholesale cost. Ask for their markup policy in writing. Some companies mark up 100%+ on parts — this is where they make their real money.

## 5. Can I Cancel? What's the Penalty?

Things change. Your business may move, close a location, or switch service providers. Read the cancellation terms:
- Is there an early termination fee?
- How much notice is required?
- Can you cancel for cause (repeated poor service)?

Avoid contracts that auto-renew for another full year without a 30-day opt-out window.

## 6. Do You Carry Insurance?

Ask for a Certificate of Insurance (COI). Minimum coverage should include:
- $1M general liability
- Workers' compensation
- Commercial auto

If a tech is injured in your kitchen and the service company doesn't have workers' comp, your insurance may be on the hook.

## 7. Can I See Your First-Time Fix Rate?

This is the question that separates professional companies from amateurs. A company that tracks their first-time fix rate is data-driven and invested in quality. The industry average is about 70%. Good companies hit 85%+.

If they don't track it — or won't share it — that tells you something.

## Bonus: The Relationship Test

Before signing anything, call their emergency line at 9pm on a weekday. Does a real person answer? How quickly do they respond to a text? This 5-minute test tells you more about the company than any contract clause.

**True Commercial Service believes in transparent agreements, guaranteed response times, and earning your business every visit. We track our metrics because we believe accountability drives excellence. Serving Union County, NJ.**

## Related Articles

- [What Is a PM Agreement?](/blog/pm-agreement-benefits-nj-restaurants)
- [How to Choose a Repair Company in NJ](/blog/how-to-choose-commercial-kitchen-equipment-repair-company-nj)
- [The True Cost of Equipment Downtime](/blog/restaurant-equipment-downtime-cost)

Looking for service? Visit our [Schedule Service](/schedule-service) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What should a restaurant equipment service contract include?', answer: 'A good service contract should clearly state: guaranteed response times, what equipment is covered, parts and labor warranty terms, PM visit frequency and scope, emergency surcharge details, cancellation terms, and the company\'s first-time fix rate and average resolution time.' },
      { question: 'How long should I commit to an equipment service contract?', answer: 'Start with a 6-month or 1-year contract. Avoid long-term multi-year agreements until you have verified the company delivers on their promises. A confident company will earn your renewal — they should not need to lock you in.' },
      { question: 'What is a good first-time fix rate for equipment repair?', answer: 'Industry average first-time fix rate is about 70%. A strong service company should be above 85%. This means the technician resolves the issue on the first visit without needing to return for parts or additional diagnosis.' },
    ],
  },
  // ─── VENTILATION / AIR BALANCING ARTICLES ─────────────────────
  {
    slug: 'kitchen-air-balancing-nj-what-it-is',
    title: 'Kitchen Air Balancing in NJ — What It Is and Why Your Restaurant Needs It',
    description: 'Most NJ restaurant owners have never heard of air balancing. Here\'s what it is, why it matters, and how much it costs.',
    date: '2026-03-28',
    category: 'Ventilation',
    readTime: '6 min',
    content: `If you own a restaurant in New Jersey, there\'s a good chance your kitchen ventilation system has never been properly balanced. Most haven\'t. And it\'s costing you money every single day the hood is running.

## What Is Kitchen Air Balancing?

Air balancing is the process of measuring and adjusting the airflow in your kitchen exhaust and makeup air systems so they work together correctly. Your exhaust hood pulls air out. Your makeup air unit (MAU) pushes tempered air back in. When those two systems aren\'t matched, problems happen.

The exhaust hood is designed to pull a specific volume of air — measured in CFM (cubic feet per minute). The makeup air unit is designed to replace about 80% of that volume with heated or cooled air. The remaining 20% comes from the dining room, creating a slight negative pressure that keeps kitchen smells, grease, and smoke from migrating to the front of house.

When the system is balanced, everything works. When it\'s not, you get problems.

## What Happens When Your Kitchen Isn\'t Balanced

### Too Much Exhaust, Not Enough Makeup Air
- Raw outside air gets sucked in through the front door, windows, and every gap in the building
- In winter, that\'s 35°F air flooding in while your furnace runs nonstop
- In summer, it\'s 95°F humid air your AC has to fight
- Doors are hard to open (negative pressure)
- Pilot lights blow out
- Energy bills are higher than they should be

### Too Much Makeup Air, Not Enough Exhaust
- Kitchen air pushes into the dining room — heat, grease, smoke, smells
- Hood capture suffers because supply air disrupts the exhaust plume
- Health inspectors flag visible smoke spillage from hoods
- Customers complain about kitchen odors

## How Is It Done?

A technician uses specialized instruments — typically a VelGrid that sits on top of the hood filters with a built-in standoff, or a rotating vane anemometer held 2 inches from the filter face. They measure the velocity of air moving through each filter, then calculate the total CFM using industry-standard conversion factors.

On the supply side, they measure airflow through the makeup air unit\'s perforated supply plenum (PSP) or supply fan filters. Then they compare exhaust vs supply, check the ratio, run a smoke capture test, and adjust dampers and fan speeds until the system is balanced.

You get a written report with all the readings, calculations, and a pass/fail assessment.

## How Much Does Kitchen Air Balancing Cost in NJ?

Pricing is per hood system, not hourly — so you know the cost before we show up. [Contact us for a quote](/schedule-service). The service typically pays for itself in energy savings within a few months — often faster if your makeup air unit isn\'t working at all.

## How Do I Know If My Kitchen Needs It?

You probably need air balancing if:
- Your kitchen hood was installed and never tested
- Smoke escapes the hood during cooking
- The front door is hard to open or slams shut
- Pilot lights blow out randomly
- The kitchen is uncomfortably hot (even with the hood running)
- Your dining room smells like the kitchen
- Energy bills seem higher than comparable restaurants
- You\'ve never had a TAB report done

## Who Does Kitchen Air Balancing in NJ?

Very few companies specialize in this. Most HVAC contractors focus on rooftop units and split systems — they don\'t carry the instruments or have the training for kitchen-specific ventilation work. And hood cleaning companies clean but don\'t measure or adjust airflow.

**True Commercial Service specializes in commercial kitchen ventilation for restaurants, hotels, and institutions across Union County, NJ and the NYC metro. We test, adjust, and balance your system in one visit — and give you a written report with real numbers.**

## Related Articles

- [How Much Does Air Balancing Cost?](/blog/kitchen-air-balancing-cost-nj-pricing)
- [Kitchen Hood Not Capturing Smoke](/blog/kitchen-hood-not-capturing-smoke)
- [Negative Pressure: Causes, Costs, Fix](/blog/kitchen-negative-pressure-causes-costs-fix)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What is kitchen air balancing?', answer: 'Air balancing is the process of measuring and adjusting your kitchen exhaust and makeup air systems so they work together at the correct ratio. The exhaust hood pulls air out, and the makeup air unit replaces about 80% of it with tempered air. Balancing ensures proper hood capture, comfortable temperatures, and minimal energy waste.' },
      { question: 'How much does kitchen air balancing cost in NJ?', answer: 'Pricing is per hood system, not hourly. Contact us for an exact quote. The service usually pays for itself in energy savings within a few months.' },
      { question: 'How do I know if my restaurant kitchen needs air balancing?', answer: 'Signs include: smoke escaping the hood during cooking, front door hard to open, pilot lights blowing out, kitchen uncomfortably hot, dining room smells like the kitchen, or energy bills higher than expected. If your hood system has never been tested after installation, it almost certainly needs balancing.' },
    ],
  },
  {
    slug: 'restaurant-exhaust-fan-repair-nj',
    title: 'Restaurant Exhaust Fan Repair in NJ — Same Day Emergency Service',
    description: 'Your kitchen exhaust fan stopped working. Here\'s what to check, what it costs to repair, and when you need a replacement.',
    date: '2026-03-28',
    category: 'Ventilation',
    readTime: '5 min',
    content: `When your exhaust fan stops, your kitchen stops. Health codes require a functioning exhaust system to operate — no exhaust means no cooking. Here\'s what NJ restaurant owners need to know about exhaust fan repair.

## Common Exhaust Fan Problems

### Belt Failure (Most Common)
The fan belt is the #1 failure point on upblast exhaust fans. Belts wear, stretch, crack, and eventually snap. When the belt breaks, the fan motor runs but no air moves. You\'ll notice immediately — the kitchen fills with smoke and heat.

**Fix:** Belt replacement. A 30-minute job for an experienced tech. [Contact us for pricing](/schedule-service).

### Motor Failure
The fan motor burns out from heat, grease buildup, or age. You\'ll hear nothing when you turn the fan on, or you\'ll hear humming but no spinning. Grease-laden air accelerates motor failure — this is why regular cleaning matters.

**Fix:** Motor replacement. Most motors are universal fit and can be sourced same-day. [Contact us for pricing](/schedule-service).

### Bearing Failure
The fan bearings wear out over time, especially without regular lubrication. You\'ll hear grinding, squealing, or rumbling from the roof. If you ignore it, the bearings seize and the motor burns out — turning a simple bearing job into a full motor replacement.

**Fix:** Bearing replacement or re-lubrication. [Contact us for pricing](/schedule-service).

### Grease Buildup on Fan Wheel
Grease accumulates on the fan wheel and housing, adding weight and reducing balance. The fan vibrates, moves less air, and works harder. Eventually the added weight and vibration destroy the bearings and motor.

**Fix:** Fan wheel cleaning and rebalancing. Should be done during every hood cleaning. [Contact us for pricing](/schedule-service).

### Electrical Issues
Contactors, relays, and wiring connections fail — especially in the harsh rooftop environment. The fan won\'t start, runs intermittently, or trips the breaker.

**Fix:** Electrical diagnosis and component replacement. [Contact us for pricing](/schedule-service).

## When to Repair vs Replace

**Repair if:**
- Fan is under 10 years old
- Only one component has failed (belt, motor, bearing)
- Frame and housing are structurally sound
- Fan is still listed/approved for your hood system

**Replace if:**
- Fan is 15+ years old
- Multiple components failing
- Housing is corroded or structurally damaged
- Fan is undersized for the hood (common in renovated kitchens)
- Repair cost exceeds 60% of replacement cost

Contact us for fan replacement pricing — cost depends on size and CFM rating.

## What to Check Before You Call

1. **Is the fan switch on?** Check the hood control panel. Someone may have turned it off.
2. **Check the breaker.** A tripped breaker is free to fix.
3. **Listen.** Motor humming but not spinning = belt or bearing. Nothing at all = electrical or motor.
4. **Look at the roof.** If the fan is spinning but slow, it\'s probably a belt slipping or bearing dragging.

## Emergency Exhaust Fan Service in NJ

A dead exhaust fan is an emergency — you can\'t legally operate without it, and your kitchen fills with smoke and heat within minutes.

**True Commercial Service provides same-day exhaust fan repair across Union County, NJ. We carry common belts, motors, and bearings on the truck. Most repairs are completed in under 2 hours.**

## Related Articles

- [Exhaust Fan Making Noise? 5 Causes](/blog/exhaust-fan-making-noise-causes)
- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)
- [CaptiveAire Hood Service in NJ](/blog/captiveaire-hood-service-nj)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'How much does restaurant exhaust fan repair cost?', answer: 'Repair costs vary depending on the issue — belt replacement is the least expensive, followed by bearing service, then motor replacement. Full fan replacement costs more. Contact us for an exact quote.' },
      { question: 'Why is my kitchen exhaust fan not working?', answer: 'The most common causes are a broken belt, burned-out motor, failed bearings, or an electrical issue like a tripped breaker or bad contactor. Belt failure is the #1 cause — it is a quick, inexpensive fix.' },
      { question: 'Can I operate my restaurant if the exhaust fan is broken?', answer: 'No. Health codes require a functioning exhaust system to operate a commercial kitchen. A non-functioning exhaust fan means no cooking until it is repaired.' },
    ],
  },
  {
    slug: 'makeup-air-unit-not-working-restaurant',
    title: 'Makeup Air Unit Not Working? What Every Restaurant Owner Should Know',
    description: 'Your makeup air unit is broken and your kitchen is freezing, doors won\'t open, and energy bills are through the roof. Here\'s what\'s happening.',
    date: '2026-03-28',
    category: 'Ventilation',
    readTime: '6 min',
    content: `Your makeup air unit (MAU) is one of the most important — and most neglected — pieces of equipment on your roof. When it stops working, the problems show up everywhere: the kitchen is freezing in winter, doors are impossible to open, pilot lights blow out, and your gas bill doubles. Most restaurant owners don\'t even know they have one.

## What Does a Makeup Air Unit Do?

Your kitchen exhaust hood pulls thousands of cubic feet of air out of the building every minute. That air has to come from somewhere. The MAU is designed to replace about 80% of the exhausted air with tempered (heated or cooled) outside air, delivered directly into the kitchen.

Without the MAU, your building goes under severe negative pressure. The exhaust is still pulling air out, so the building sucks in raw outside air through every crack, door, window, and gap. In January in New Jersey, that\'s 35°F air pouring in. In August, it\'s 95°F humid air.

Your building HVAC — the furnace in winter, the AC in summer — has to condition all of that infiltrating air. That\'s energy you\'re paying for that the MAU should be handling.

## Signs Your MAU Isn\'t Working

- **Kitchen is freezing in winter** even though the heat is running
- **Front door is extremely hard to open** (severe negative pressure pulling it shut)
- **Pilot lights on gas equipment blow out** randomly
- **Whistling sounds** from doors, windows, or gaps
- **Energy bills significantly higher** than similar restaurants
- **Kitchen is uncomfortable** — staff complaining about temperature
- **Hood capture is poor** — smoke escaping even though the exhaust fan is running

## Common MAU Problems

### Burner Not Igniting
Gas-fired MAUs heat the incoming air with a burner section. If the burner fails, the unit blows cold outside air directly into the kitchen — or the safety controls shut the unit off entirely. Common causes: failed igniter, gas valve issue, flame sensor dirty, or gas supply interrupted.

### Frozen Coils
In cold weather, condensation freezes on the coils and blocks airflow. The MAU either stops moving air or moves it at drastically reduced volume. Usually caused by a failed defrost cycle or a refrigerant issue on units with cooling capability.

### Belt or Motor Failure
Same as exhaust fans — MAU supply fans use belts and motors that wear out. When the belt breaks, no air moves. When the motor fails, same result.

### Filter Clogged
MAU intake filters get clogged with dirt, pollen, and debris. A severely clogged filter starves the unit for air, reducing supply volume drastically. This is the easiest fix — change the filter. Most MAUs need filter changes every 1-3 months.

### Controls Failure
The MAU\'s control board, thermostat, or interlock with the exhaust system fails. The unit either won\'t turn on, won\'t modulate properly, or doesn\'t sync with the exhaust hood.

## What It Costs You When the MAU Is Down

For a typical 10-foot hood exhausting 2,750 CFM, the MAU is designed to supply about 2,200 CFM of tempered air. When the MAU is completely down:

- **2,200 CFM of raw outside air** infiltrates through doors and gaps
- **Heating waste (winter):** approximately $4,200/year in extra gas
- **Cooling waste (summer):** approximately $1,060/year in extra electricity
- **Total:** over $5,200/year in wasted energy — on top of the repair cost

The MAU repair is a fraction of the annual energy waste. The math is clear — [contact us for a quote](/schedule-service).

## What to Check Before You Call

1. **Filters** — pull them out and check. If they\'re solid gray/brown, replace them.
2. **Breaker** — check the electrical panel for a tripped breaker.
3. **Gas supply** — is the gas valve open? Did someone shut it off?
4. **Interlock** — many MAUs are interlocked with the exhaust fan. If the exhaust fan is off, the MAU won\'t run.
5. **Thermostat** — check the setting. It may have been changed or malfunctioned.

**True Commercial Service repairs and maintains all brands of makeup air units across Union County, NJ. If your MAU is down, your kitchen is losing money every hour. Call us for same-day service.**

## Related Articles

- [Kitchen Negative Pressure: Causes and Fix](/blog/kitchen-negative-pressure-causes-costs-fix)
- [Restaurant Kitchen Too Hot?](/blog/restaurant-kitchen-too-hot-air-balance)
- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What does a makeup air unit do in a restaurant?', answer: 'A makeup air unit (MAU) replaces the air your exhaust hood pulls out of the kitchen. It supplies about 80% of the exhausted volume as tempered (heated or cooled) air. Without it, raw outside air infiltrates through doors and gaps, and your building HVAC has to condition all of it.' },
      { question: 'How much does it cost when a makeup air unit is broken?', answer: 'A broken MAU on a typical restaurant hood system wastes approximately $5,000 or more per year in excess heating and cooling costs. The building HVAC has to condition thousands of CFM of raw outside air that the MAU should be handling. Contact us for a repair quote.' },
      { question: 'How do I know if my restaurant makeup air unit is broken?', answer: 'Signs include: kitchen freezing in winter despite heat running, front door extremely hard to open, pilot lights blowing out, whistling from doors and gaps, energy bills much higher than expected, and poor hood capture even though the exhaust fan is running.' },
    ],
  },
  {
    slug: 'restaurant-kitchen-too-hot-air-balance',
    title: 'Why Is My Restaurant Kitchen So Hot? The Air Balance Problem Nobody Talks About',
    description: 'Your kitchen is 100°F+ and your staff is miserable. The problem probably isn\'t your AC — it\'s your ventilation balance.',
    date: '2026-03-28',
    category: 'Ventilation',
    readTime: '5 min',
    content: `Every summer, restaurant owners call HVAC companies complaining their kitchen is too hot. The HVAC company checks the rooftop unit, maybe adds some refrigerant, and hands over a $500 bill. The kitchen is still hot.

The problem usually isn\'t the AC. It\'s the air balance between your exhaust hood and makeup air system.

## Why Kitchens Get So Hot

Commercial kitchens generate massive amounts of heat — fryers at 375°F, ovens at 450°F, charbroilers over 600°F, steam tables, dishwashers. The exhaust hood is supposed to capture that heat and pull it out through the roof.

But the hood can only capture heat that rises into it. If the airflow pattern is disrupted — by a broken makeup air unit, an unbalanced supply, or turbulence from a poorly positioned air curtain — the heat escapes into the kitchen instead of going up the hood.

## The Three Most Common Causes

### 1. Makeup Air Unit Blowing Directly at the Hood
If the MAU supply air is aimed at the hood face or cooking surface, it disrupts the natural thermal plume rising from the cooking equipment. The hot air and smoke scatter instead of being captured. The heat stays in the kitchen.

**Fix:** Adjust MAU discharge direction, reduce velocity, or reposition supply diffusers.

### 2. Too Much Supply Air (Positive Pressure)
When the MAU supplies more air than the exhaust removes, the kitchen goes positive. Hot kitchen air can\'t flow into the exhaust — it pushes outward into the dining room and recirculates in the kitchen. The hood captures less.

**Fix:** Reduce MAU fan speed or open exhaust dampers to restore proper 80% supply-to-exhaust ratio.

### 3. Exhaust Not Pulling Enough Air
The exhaust fan may be running but not moving enough air — worn belts, dirty fan wheel, or dampers partially closed. The hood looks like it\'s working but it\'s only pulling 60-70% of design CFM.

**Fix:** Exhaust fan service — belt replacement, fan cleaning, damper adjustment. Then rebalance the system.

## How to Tell If It\'s an Air Balance Problem

- The kitchen is hot but the dining room is comfortable (or smells like the kitchen)
- The hood is running but you can see heat haze or light smoke escaping
- The HVAC company says your AC is working fine
- Adding more AC doesn\'t help
- The problem is worse during peak cooking hours
- Staff standing directly under the hood are the hottest

## The Solution Is a One-Time Air Balance

A qualified technician measures your exhaust CFM, supply CFM, face velocity at the hood, and runs a smoke capture test. Then adjusts dampers and fan speeds until the system is balanced. Takes 3-4 hours for a single hood system.

Once balanced, the hood captures the heat, the kitchen temperature drops, and the AC can actually keep up because it\'s not fighting thousands of CFM of misrouted hot air.

**True Commercial Service provides kitchen air balancing for restaurants across Union County, NJ. If your kitchen is too hot and your HVAC company can\'t fix it, the problem is probably on the roof — not the AC unit. One visit, one balance, problem solved.**

## Related Articles

- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)
- [Makeup Air Unit Not Working?](/blog/makeup-air-unit-not-working-restaurant)
- [Kitchen Hood Not Capturing Smoke](/blog/kitchen-hood-not-capturing-smoke)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why is my restaurant kitchen so hot even with AC running?', answer: 'The most common cause is an unbalanced kitchen ventilation system. If the exhaust hood is not capturing heat properly — due to too much or misdirected makeup air, or insufficient exhaust — heat escapes into the kitchen. The AC cannot compensate for a ventilation problem. Air balancing the hood system typically solves it.' },
      { question: 'Can air balancing reduce kitchen temperature?', answer: 'Yes. Proper air balancing ensures the exhaust hood captures the thermal plume from cooking equipment. Once the heat is going up the hood instead of into the kitchen, temperatures drop significantly and the AC can maintain comfortable conditions.' },
      { question: 'How much does it cost to fix a hot restaurant kitchen?', answer: 'If the cause is air balance (which it usually is), a one-time air balance service typically resolves the problem permanently. Contact us for a quote. Compare that to repeated HVAC service calls that do not fix the root cause.' },
    ],
  },
  {
    slug: 'captiveaire-hood-service-nj',
    title: 'CaptiveAire Hood Service in NJ — Balancing, Fans, and Makeup Air',
    description: 'CaptiveAire is the most common kitchen hood in NJ. Here\'s what service they need and who actually does it.',
    date: '2026-03-28',
    category: 'Ventilation',
    readTime: '5 min',
    content: `CaptiveAire is the dominant commercial kitchen hood manufacturer in the United States — an estimated 40-60% of new hood installations use their systems. If you own a restaurant, hotel, or institutional kitchen in New Jersey, there\'s a good chance you have a CaptiveAire hood on your roof.

CaptiveAire builds great equipment. But they sell it through manufacturer\'s reps and authorized dealers — they don\'t maintain it. Once your hood is installed, service and maintenance falls to third-party companies. And most HVAC companies don\'t specialize in kitchen ventilation.

## What CaptiveAire Hoods Need

### Air Balancing (After Installation and Periodically)
Every CaptiveAire hood system should be tested and balanced after installation and after any changes to the kitchen — new equipment, hood modifications, or MAU replacement. The hood is designed for a specific CFM at a specific face velocity. If the system isn\'t balanced to those specs, capture and containment suffer.

CaptiveAire hoods use baffle or Captrate filters. Air volume is measured using a VelGrid (with built-in standoff that sits on the filter) or a rotating vane anemometer held 2 inches from the filter face. Each filter gets multiple velocity readings, then CFM is calculated using the filter\'s conversion factor.

### Exhaust Fan Maintenance
CaptiveAire exhaust fans — upblast models are the most common — need regular belt checks, bearing lubrication, and fan wheel cleaning. A dirty fan wheel is the most common reason a CaptiveAire hood underperforms. Grease buildup adds weight, reduces efficiency, and creates vibration that destroys bearings.

### Makeup Air Unit Service
CaptiveAire MAUs need filter changes every 1-3 months, burner inspection annually, belt and motor checks, and controls verification. The MAU should deliver approximately 80% of the hood\'s exhaust volume as tempered air. When it doesn\'t, the kitchen suffers.

### Demand Control Ventilation (DCV)
Many newer CaptiveAire systems include or can be upgraded with demand control ventilation — sensors that modulate fan speed based on cooking activity. Instead of running the exhaust at full blast all day, the system ramps up during peak cooking and slows down during idle periods. This saves 30-60% of fan energy and reduces HVAC load significantly.

## What CaptiveAire Hood Service Costs

Service costs vary depending on your system size and what\'s needed. [Contact us for a quote](/schedule-service) — we price per hood system, not hourly, so you know the cost before we show up.

## Who Services CaptiveAire Hoods in NJ?

Most general HVAC contractors will tell you they can service kitchen hoods. But kitchen ventilation is specialized — the instruments, the measurement methods, the K-factors, and the understanding of how exhaust and supply interact are different from standard commercial HVAC work.

**True Commercial Service specializes in CaptiveAire and all major kitchen hood brands. We carry VelGrid instruments, understand the filter conversion factors, and have hands-on experience commissioning CaptiveAire systems from new. Serving Union County, NJ and the NYC metro.**

## Related Articles

- [CaptiveAire Hood Maintenance Guide](/blog/captiveaire-hood-maintenance-repair-guide)
- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)
- [Exhaust Fan Repair in NJ](/blog/restaurant-exhaust-fan-repair-nj)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Does CaptiveAire do their own service and maintenance?', answer: 'No. CaptiveAire manufactures and sells equipment through reps and dealers, but they do not have a service workforce for ongoing maintenance and repair. Third-party service companies handle all maintenance, air balancing, fan repair, and MAU service on CaptiveAire systems.' },
      { question: 'How often should a CaptiveAire hood system be serviced?', answer: 'Exhaust fan belts should be checked quarterly. MAU filters should be changed every 1-3 months. A full air balance should be done after installation, after any kitchen changes, and at least annually. Fan wheel cleaning should coincide with hood cleaning schedules.' },
      { question: 'What instruments are used to test a CaptiveAire hood?', answer: 'A VelGrid with built-in standoff that sits on top of the baffle or Captrate filters, or a rotating vane anemometer held 2 inches from the filter face. Multiple velocity readings per filter are averaged and multiplied by the filter conversion factor to calculate CFM.' },
    ],
  },
  {
    slug: 'kitchen-negative-pressure-causes-costs-fix',
    title: 'Commercial Kitchen Negative Pressure: Causes, Costs, and How to Fix It',
    description: 'Doors hard to open? Pilot lights blowing out? Cold drafts in winter? Your kitchen has a negative pressure problem — and it\'s costing you thousands.',
    date: '2026-03-28',
    category: 'Ventilation',
    readTime: '5 min',
    content: `Commercial kitchens are designed to operate at slight negative pressure — air flows from the dining room into the kitchen, keeping cooking smells and grease out of the front of house. But there\'s a difference between slight negative pressure (by design) and severe negative pressure (a problem).

## What Causes Severe Negative Pressure?

The exhaust hood pulls air out. The makeup air unit pushes tempered air in. The difference is the infiltration — outside air that enters through doors, gaps, and openings. This is normal.

The problem happens when the infiltration becomes excessive:

- **MAU not working** — all replacement air comes from infiltration
- **MAU undersized** — was designed for an older, smaller hood
- **MAU running at reduced capacity** — dirty filters, worn belt, failed burner
- **Exhaust increased** — new hood added or existing fan speed increased without matching supply
- **Building sealed too tight** — renovation closed off natural infiltration paths

## The Real Cost of Excessive Negative Pressure

A kitchen with a 2,750 CFM exhaust hood and a dead MAU is pulling 2,200 CFM of raw outside air through every crack in the building. Here\'s what that costs in Elizabeth, NJ:

| Season | Outside Air Temp | Building HVAC Cost |
|--------|-----------------|-------------------|
| Winter (7 months) | 35°F avg | $4,200/year in gas |
| Summer (4 months) | 90°F avg | $1,060/year in electric |
| **Annual waste** | | **$5,260/year** |

That\'s just energy. Add the operational costs:
- **Staff discomfort** — cooks in a freezing kitchen in winter, sweltering in summer
- **Equipment stress** — pilot lights blowing out, gas equipment cycling erratically
- **Customer impact** — cold drafts from the front door, uncomfortable dining room
- **Door damage** — the constant suction warps door frames and wears out closers

## How to Test for Negative Pressure

**The door test:** If your front door is noticeably hard to open (pulls toward you when you try to push it open from outside), you have negative pressure. The harder it is, the worse the imbalance.

**The smoke test:** Light a smoke pencil near the door threshold. If the smoke gets sucked in forcefully, the kitchen is under significant negative pressure.

**The professional test:** A manometer reading of the kitchen vs. the dining room quantifies the pressure differential. NFPA 96 says negative pressure should not exceed 0.02 inches water gauge.

## How to Fix It

1. **Check the MAU first** — is it running? Is it delivering air? Change the filters.
2. **Measure the actual CFM** — use a VelGrid or anemometer to verify exhaust and supply volumes.
3. **Balance the system** — adjust dampers, fan speeds, and MAU settings to achieve 80-90% supply-to-exhaust ratio.
4. **If the MAU is undersized** — it may need to be replaced with a properly sized unit.

A one-time air balance service typically resolves the problem permanently — and it pays for itself in energy savings within a few months. [Contact us for a quote](/schedule-service).

**True Commercial Service diagnoses and fixes kitchen negative pressure problems for restaurants and commercial kitchens across Union County, NJ. One visit, real measurements, permanent fix.**

## Related Articles

- [Makeup Air Unit Not Working?](/blog/makeup-air-unit-not-working-restaurant)
- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)
- [Dining Room Smells Like Kitchen](/blog/dining-room-smells-like-kitchen-ventilation)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What causes negative pressure in a commercial kitchen?', answer: 'Negative pressure occurs when the exhaust hood pulls more air out of the kitchen than the makeup air unit supplies. The most common cause is a broken or undersized makeup air unit. The building sucks in raw outside air through doors, gaps, and cracks to make up the difference.' },
      { question: 'How much does negative pressure cost a restaurant?', answer: 'For a typical restaurant hood system, a completely failed makeup air unit can waste over $5,000 per year in excess heating and cooling costs. The building HVAC has to condition all the raw outside air being sucked in through the building envelope.' },
      { question: 'How do you fix negative pressure in a restaurant kitchen?', answer: 'First, verify the makeup air unit is running and delivering its design airflow. Then measure exhaust and supply CFM and balance the system to an 80-90% supply-to-exhaust ratio. This usually involves adjusting dampers and fan speeds. Contact us for a quote on air balance service.' },
    ],
  },
  {
    slug: 'kitchen-air-balancing-cost-nj-pricing',
    title: 'How Much Does Kitchen Air Balancing Cost? NJ Pricing Guide',
    description: 'Transparent pricing for kitchen air balancing in New Jersey. What you get, what it costs, and how fast it pays for itself.',
    date: '2026-03-28',
    category: 'Ventilation',
    readTime: '4 min',
    content: `If you\'re shopping for kitchen air balancing in New Jersey, here\'s what you should expect to pay — and what you should get for that price.

## Kitchen Air Balancing Pricing

We price per hood system, not hourly — so you know the cost before we show up. [Contact us for a quote](/schedule-service).

Every service includes:
- Full CFM measurement (exhaust + supply)
- Damper adjustment and MAU verification
- Smoke capture test
- Written balance report with before/after readings
- Energy savings assessment

Larger kitchens (multiple hoods, hotels, institutions) get cross-system balancing, coordinated fan speed adjustment, and detailed engineering reports.

## What Else Might You Need?

If we find a broken component during the balance — a worn fan belt, failing motor, or clogged MAU filter — we\'ll tell you before we fix it. No surprises. Additional repairs are quoted separately on-site.

## How Fast Does It Pay for Itself?

The energy savings from proper air balancing depend on how far out of spec your system is. A restaurant with a completely failed makeup air unit can waste over $5,000/year in excess HVAC costs. Even a slightly underperforming MAU wastes hundreds per year.

These numbers are based on a 10-foot, 2,750 CFM hood system in NJ using commercial utility rates. Your numbers may vary — we include an energy assessment with every air balance so you see your specific savings. Try our [free energy calculator](/tools/energy-calculator) to estimate your waste.

## What You Should Get in a Balance Report

A professional air balance report should include:
- Exhaust CFM per hood (measured, not estimated)
- Supply CFM per makeup air unit
- Supply-to-exhaust ratio
- Face velocity readings at the hood
- Smoke capture test results (pass/fail)
- Before and after readings (if adjustments were made)
- Energy waste estimate
- Recommendations for any needed repairs

If a company gives you a number without showing you the data, they didn\'t actually balance anything.

## Why Per-System Pricing (Not Hourly)

We charge per hood system, not by the hour. You know the cost before we show up. We don\'t benefit from taking longer.

Hourly pricing incentivizes slow work. Per-system pricing incentivizes getting it right and moving on.

**True Commercial Service provides transparent, per-system air balancing for commercial kitchens across Union County, NJ. No hidden fees. Written report with real numbers. Schedule at choosetrue.com.**

## Related Articles

- [Kitchen Air Balancing in NJ — What It Is](/blog/kitchen-air-balancing-nj-what-it-is)
- [Restaurant Equipment Repair Cost in NJ](/blog/commercial-kitchen-equipment-repair-cost-nj)
- [CaptiveAire Hood Service in NJ](/blog/captiveaire-hood-service-nj)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'How much does kitchen air balancing cost in New Jersey?', answer: 'Pricing is per hood system, not hourly. Contact us for an exact quote. Every service includes full CFM measurement, damper adjustment, smoke capture test, written report, and energy assessment.' },
      { question: 'Is kitchen air balancing worth the cost?', answer: 'Yes. A restaurant with a poorly performing makeup air unit can waste thousands per year in excess energy costs. Air balancing typically pays for itself within a few months. If the MAU is completely down, payback is even faster.' },
      { question: 'What should a kitchen air balance report include?', answer: 'A professional report should include measured exhaust CFM per hood, supply CFM per makeup air unit, supply-to-exhaust ratio, face velocity readings, smoke capture test results, before/after readings if adjustments were made, energy waste estimate, and repair recommendations.' },
    ],
  },
  {
    slug: 'exhaust-fan-making-noise-causes',
    title: 'Exhaust Fan Making Noise? 5 Causes and When to Call for Service',
    description: 'Your kitchen exhaust fan is squealing, grinding, or vibrating. Here\'s what each noise means and how urgent it is.',
    date: '2026-03-28',
    category: 'Ventilation',
    readTime: '4 min',
    content: `A noisy exhaust fan isn\'t just annoying — it\'s telling you something is about to fail. Here\'s how to decode the sounds coming from your roof.

## 1. Squealing or Screeching

**What it means:** Belt slipping or worn. The belt is loose, glazed, or cracking. It\'s still technically working but losing grip — your exhaust CFM is dropping.

**Urgency:** Medium. The belt will snap within days to weeks. Schedule service this week.

**Fix:** Belt replacement. [Contact us for pricing](/schedule-service).

## 2. Grinding or Rumbling

**What it means:** Bearings are failing. Metal-on-metal contact inside the bearing housing. If you can feel vibration through the roof or hood, it\'s advanced.

**Urgency:** High. Failed bearings seize the shaft, which burns out the motor — turning a simple bearing job into a full motor replacement. Call today.

**Fix:** Bearing replacement. If you wait, motor replacement is significantly more expensive. [Contact us for pricing](/schedule-service).

## 3. Loud Vibration or Rattling

**What it means:** Fan wheel is out of balance. Usually caused by grease buildup on one side of the wheel, a broken blade, or loose mounting hardware. The vibration damages bearings, loosens ductwork connections, and can crack the fan housing.

**Urgency:** High. Unbalanced vibration causes cascading failures. Schedule within a few days.

**Fix:** Fan wheel cleaning and rebalancing, or blade repair. Check mounting bolts while you\'re up there. [Contact us for pricing](/schedule-service).

## 4. Clicking or Tapping

**What it means:** Something is hitting the fan blade — a loose piece of grease, a foreign object, or a blade rubbing the housing. Could also be a failing contactor or relay clicking on and off.

**Urgency:** Medium-low if intermittent, high if constant.

**Fix:** Inspection and foreign object removal. If it\'s a contactor, electrical repair is needed. [Contact us for pricing](/schedule-service).

## 5. Humming but Not Spinning

**What it means:** The motor is getting power but the shaft isn\'t turning. Either the belt is completely broken (most common), the motor capacitor has failed, or the motor windings are burned.

**Urgency:** Critical. Your exhaust is not working. No air is being removed from the kitchen. This is an emergency.

**Fix:** Belt replacement, capacitor replacement, or motor replacement depending on the cause. [Contact us for emergency service](/schedule-service).

## The Bottom Line

Every noise is a warning. The repair cost goes up the longer you wait — a simple belt replacement today prevents a full motor replacement next month. The fan on your roof is running in the harshest conditions — heat, grease, rain, snow, UV exposure. It needs attention. [Contact us for a quote](/schedule-service).

**True Commercial Service provides same-day exhaust fan diagnosis and repair across Union County, NJ. If your fan is making noise, we can usually fix it in one visit with parts on the truck.**

## Related Articles

- [Exhaust Fan Repair in NJ](/blog/restaurant-exhaust-fan-repair-nj)
- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)
- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why is my kitchen exhaust fan making a squealing noise?', answer: 'A squealing or screeching exhaust fan almost always means the drive belt is slipping, worn, or glazed. The belt is still working but losing grip. It will snap within days to weeks. Belt replacement is a quick fix — contact us for pricing.' },
      { question: 'Is a noisy exhaust fan an emergency?', answer: 'It depends on the noise. A humming motor that is not spinning is an emergency — your exhaust is not working. Grinding or heavy vibration is urgent — call within 24 hours. Squealing is medium urgency — schedule within the week. All noises mean something is about to fail.' },
      { question: 'How much does exhaust fan repair cost?', answer: 'Costs vary depending on the issue — belt replacement is the least expensive fix, while motor replacement costs significantly more. The cost goes up the longer you wait. Contact us for a quote.' },
    ],
  },
  {
    slug: 'dining-room-smells-like-kitchen-ventilation',
    title: 'Restaurant Dining Room Smells Like the Kitchen — It\'s a Ventilation Problem',
    description: 'Customers complaining about kitchen smells in the dining room? The cause is almost always a kitchen air balance issue. Here\'s how to fix it.',
    date: '2026-03-28',
    category: 'Ventilation',
    readTime: '4 min',
    content: `When customers can smell the kitchen from the dining room, it\'s not a cleaning problem — it\'s an airflow problem. Cooking odors, grease, and smoke should stay in the kitchen and go up the exhaust hood. If they\'re reaching the dining room, your ventilation system is pushing them there.

## Why Kitchen Air Reaches the Dining Room

There\'s one fundamental cause: **positive pressure in the kitchen**. When more air is being pushed into the kitchen than is being pulled out, the excess air — carrying cooking odors, grease particles, and heat — flows outward into the dining room.

This happens when:

### The Makeup Air Unit Is Oversupplying
The MAU is delivering more CFM than the exhaust removes. The kitchen becomes positively pressured and pushes air out through every opening — the pass-through window, the swinging doors, the gaps around the hood.

**Common cause:** MAU was never balanced after installation, or the exhaust fan has lost capacity (dirty fan wheel, slipping belt) while the MAU continues at full output.

### The Exhaust Hood Isn\'t Capturing
Even with correct CFM numbers, if the supply air is disrupting the hood\'s capture zone, cooking effluent escapes. A makeup air plenum blowing directly at the hood face scatters the thermal plume. The grease and smoke go sideways instead of up.

### The Dining Room Has Negative Pressure
If the dining room HVAC is pulling more air out (via return ducts, restroom exhaust) than it\'s supplying, the dining room goes negative and sucks kitchen air in. This isn\'t a kitchen problem — it\'s a building-wide air balance issue.

## How to Diagnose It

**Smoke pencil test at the kitchen-dining room boundary:** Hold a smoke pencil at the pass-through window, the swinging door, or any opening between the two spaces. If smoke flows from kitchen to dining room, the kitchen is positive. If it flows the other direction, the dining room is negative.

**The door test:** Do the swinging kitchen doors swing toward the dining room on their own? Kitchen is positive. Do they swing toward the kitchen? Kitchen is properly negative.

## How to Fix It

1. **Measure exhaust and supply CFM** — verify the actual volumes, not just whether the equipment is running
2. **Check the supply-to-exhaust ratio** — it should be 80-90%. Above 90% and you risk positive pressure.
3. **Run a smoke capture test** — verify the hood is actually capturing with the MAU running
4. **Adjust as needed** — reduce MAU output, increase exhaust, or redirect supply air away from the hood face
5. **Check the dining room HVAC** — make sure it\'s not creating its own negative pressure

## The Business Cost of Kitchen Smells

This isn\'t just a comfort issue:
- **Online reviews mention it.** "Great food but the whole restaurant smells like a fryer" kills your rating.
- **Repeat customers notice.** They might not say anything — they just don\'t come back.
- **Health inspectors notice.** Visible smoke or grease migration from the hood is a violation.

One air balance visit fixes the root cause permanently. [Contact us for a quote](/schedule-service).

**True Commercial Service fixes kitchen-to-dining room odor problems by balancing the ventilation system at the source. Serving Union County, NJ restaurants, hotels, and commercial kitchens.**

## Related Articles

- [Kitchen Negative Pressure: Causes and Fix](/blog/kitchen-negative-pressure-causes-costs-fix)
- [Kitchen Hood Not Capturing Smoke](/blog/kitchen-hood-not-capturing-smoke)
- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why does my dining room smell like the kitchen?', answer: 'The kitchen is under positive pressure — more air is being pushed in by the makeup air unit than is being pulled out by the exhaust. The excess air carries cooking odors, grease, and heat into the dining room. This is caused by an unbalanced ventilation system.' },
      { question: 'How do you stop kitchen smells from reaching the dining room?', answer: 'Balance the kitchen ventilation so the supply-to-exhaust ratio is 80-90%. This maintains slight negative pressure in the kitchen, pulling dining room air in rather than pushing kitchen air out. Contact us for a quote on air balance service.' },
      { question: 'Is kitchen smell in the dining room a health code violation?', answer: 'Visible smoke or grease migration from the kitchen hood can be cited as a violation. Even if not formally cited, health inspectors note ventilation issues. Proper air balancing ensures the hood captures cooking effluent and the kitchen maintains appropriate negative pressure.' },
    ],
  },
  {
    slug: 'kitchen-hood-not-capturing-smoke',
    title: 'Kitchen Hood Not Capturing Smoke — What\'s Wrong and How to Fix It',
    description: 'Smoke is escaping your kitchen hood even though the fan is running. The 4 most common causes and what each fix costs.',
    date: '2026-03-28',
    category: 'Ventilation',
    readTime: '5 min',
    content: `Your exhaust fan is running. The hood looks fine. But smoke is escaping — billowing out from under the hood, drifting across the cooking line, or migrating into the dining room. Here\'s what\'s actually wrong.

## The 4 Most Common Causes

### 1. Exhaust CFM Is Too Low
The most common cause. The hood was designed for a specific CFM — say 2,750 for a 10-foot hood. But the actual exhaust has dropped due to:
- **Dirty fan wheel** — grease buildup reduces efficiency by 20-40%
- **Slipping belt** — fan turns slower than it should
- **Worn bearings** — increased drag slows the fan
- **Damper partially closed** — someone closed it and forgot
- **Dirty filters** — restricted airflow (less common with baffles)

**Test:** Measure actual exhaust CFM with a VelGrid or anemometer. Compare to the hood\'s design CFM (usually on the UL nameplate inside the hood). If measured is more than 10% below design, the exhaust system needs service.

**Fix:** Fan service (belt, wheel cleaning, bearing) or damper adjustment. Contact us for pricing.

### 2. Makeup Air Disrupting Capture
The supply air from the makeup air unit is hitting the cooking surface or the hood face at too high a velocity. This scatters the thermal plume — the column of hot air and smoke rising from the cooking — and pushes it out from under the hood instead of into it.

**Test:** Run a smoke pencil test with the MAU on vs. off. If capture improves dramatically when the MAU is off, the supply air direction or velocity is the problem.

**Fix:** Redirect supply air diffusers, reduce MAU fan speed, or adjust dampers. May require a full air balance. [Contact us for a quote](/schedule-service).

### 3. Insufficient Overhang
The hood doesn\'t extend far enough past the cooking equipment. Smoke rises at an angle — not straight up — especially from equipment at the front of the cooking line. If the hood doesn\'t overhang the equipment by at least 6 inches on exposed sides, smoke escapes before reaching the capture zone.

**Test:** Look at where the smoke escapes. If it\'s always from the front edge of the hood, overhang is likely insufficient.

**Fix:** This is a design issue. Options include adding an air curtain, extending the hood with a front extension panel, or repositioning the cooking equipment further under the hood.

### 4. Cross-Drafts
Air movement from HVAC supply registers, open doors, pass-through windows, or even foot traffic creates cross-drafts that push cooking effluent out from under the hood. Walk-in doors near the cooking line are a common culprit.

**Test:** Observe when capture fails. Is it when the back door opens? When the HVAC kicks on? When servers pass by? The pattern reveals the source.

**Fix:** Redirect HVAC registers away from the hood area, install strip curtains on walk-in doors near the line, or add side panels to the hood.

## The Smoke Pencil Test

This is the definitive field test. Hold a smoke pencil at the front edge of the hood at cooking height. The smoke should be captured immediately and pulled into the hood. If it drifts, billows outward, or stalls — the hood is not capturing.

Every air balance we do includes a smoke capture test as the final verification. Numbers on a report mean nothing if the smoke test fails.

## What It Costs to Fix

Most smoke capture problems are solved with fan service and/or an air balance visit. [Contact us for a quote](/schedule-service) — we price per hood system, not hourly. Physical modifications like air curtains or hood extensions are quoted separately.

Most smoke capture problems are cause #1 or #2 — and both are fixed with a single air balance visit.

**True Commercial Service diagnoses and fixes hood capture problems for commercial kitchens across Union County, NJ. We bring the instruments, take the readings, run the smoke test, and fix it. One visit.**

## Related Articles

- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)
- [Dining Room Smells Like Kitchen](/blog/dining-room-smells-like-kitchen-ventilation)
- [Restaurant Kitchen Too Hot?](/blog/restaurant-kitchen-too-hot-air-balance)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why is smoke escaping my kitchen hood?', answer: 'The four most common causes are: exhaust CFM too low (dirty fan wheel, slipping belt, closed damper), makeup air disrupting the hood capture zone, insufficient hood overhang, or cross-drafts from HVAC or doors. The first two causes account for the majority of cases and are fixed with air balancing.' },
      { question: 'How do you test if a kitchen hood is capturing properly?', answer: 'A smoke pencil test is the definitive field test. Hold a smoke pencil at the front edge of the hood at cooking height. The smoke should be captured immediately. If it drifts outward or stalls, the hood is not capturing. This test is included with every air balance.' },
      { question: 'How much does it cost to fix a kitchen hood that is not capturing smoke?', answer: 'Most capture problems are caused by low exhaust CFM or improper makeup air, both fixed with an air balance visit. Contact us for a quote. Physical modifications like air curtains or hood extensions are quoted separately.' },
    ],
  },
  // ─── ESP / POLLUTION CONTROL ARTICLES ─────────────────────────
  {
    slug: 'nyc-local-law-38-esp-requirements-restaurants',
    title: 'NYC Local Law 38: Does Your Restaurant Need an ESP? What You Need to Know',
    description: 'NYC requires pollution control on commercial kitchen exhaust. Here\'s what Local Law 38 requires, who it applies to, and the fines for non-compliance.',
    date: '2026-03-29',
    category: 'Pollution Control',
    readTime: '6 min',
    content: `If you operate a restaurant in New York City that does any charbroiling, grilling, frying, or roasting, you are legally required to have a functioning pollution control unit on your kitchen exhaust. This isn't optional — it's NYC Local Law 38, and the DEP enforces it with fines up to $10,000 per violation.

## What Is Local Law 38?

NYC Local Law 38 of 2015 (amending Administrative Code Section 24-149) requires all commercial cooking operations that produce grease-laden vapors to install and operate emission control equipment on their kitchen exhaust systems. The law has been enforced since July 1, 2016.

The NYC Department of Environmental Protection (DEP) oversees compliance. They inspect, issue violations, and levy fines.

## Who Does It Apply To?

**You need an ESP or equivalent pollution control if your restaurant:**
- Does charbroiling or grilling of any kind
- Operates deep fryers
- Roasts meat in commercial ovens
- Uses wood-fired or coal-fired ovens or grills
- Produces grease-laden vapors from any cooking process
- Has kitchen exhaust exceeding 2,000 CFM

**You may be exempt if:**
- You only do light cooking (sandwich assembly, coffee, baking without frying)
- Your exhaust is under 2,000 CFM with no charbroiling
- You operate a food truck or temporary installation (different rules apply)

In practice, the vast majority of NYC restaurants that serve hot food need pollution control.

## What Are the Requirements?

### Standard Cooking Operations
- Pollution control equipment must achieve at least **75% reduction in particulate matter**
- An electrostatic precipitator (ESP) is the most common solution
- Equipment must be registered with NYC DEP
- Maintenance logs must be kept and available for inspection

### High-Volume Charbroiling (>875 lbs of meat per week)
- Equipment must achieve **95% particulate removal**
- **Odor control** is also required (typically a catalytic oxidizer or activated carbon system in addition to the ESP)
- More frequent inspections and stricter documentation

## What Are the Fines?

| Violation | Fine Range |
|-----------|-----------|
| No pollution control equipment installed | $1,000 - $10,000 |
| Equipment installed but not functioning | $1,000 - $5,000 |
| No maintenance logs available | $1,000 - $2,500 |
| Repeat violation | Up to $10,000+ |
| Failure to register equipment with DEP | $1,000 - $2,500 |

**Important:** Each inspection can result in multiple violations. Not having logs AND having a non-functioning unit = two separate fines in one visit. And the DEP doesn't need to announce inspections — they can show up triggered by a neighbor complaint.

## What Equipment Qualifies?

The most common pollution control solutions for NYC restaurants:

- **Electrostatic Precipitator (ESP)** — collector cells use electrostatic charge to capture grease particles. Most common and cost-effective for typical restaurants.
- **Rooftop Ecology Unit** — integrated ESP with weatherproof housing, installed on the roof. Very common in NYC.
- **Smoke Hog** — brand name ESP, so common it's used generically (like "Kleenex"). Now owned by Parker Hannifin / Filtration Group.
- **UV Oxidation** — ultraviolet systems that break down grease in the exhaust stream. Often used with ESPs.
- **Catalytic Oxidizer** — burns off grease and odor compounds. Required for high-volume charbroiling.
- **Activated Carbon Filters** — absorb odor compounds. Used as secondary treatment after ESP.

## What Maintenance Is Required?

The law requires you to maintain the equipment — not just install it. A non-maintained ESP that isn't actually collecting grease is still a violation.

**Recommended maintenance schedule:**
- **Monthly:** Check indicator lights, inspect pre-filters
- **Quarterly:** Full ESP cell removal and cleaning, ionizer wire inspection
- **Semi-annually:** Power supply check, carbon filter replacement, performance verification
- **Annually:** Comprehensive service with full documentation

**You must maintain service logs.** When the DEP inspector asks to see your maintenance records, "we clean it sometimes" is not acceptable. Dated, detailed logs signed by the service provider are what they want to see.

## What Does Compliance Cost?

ESP installation typically costs $8,000 - $25,000+ depending on the system. Regular maintenance is a fraction of that — and a fraction of a single DEP fine ($1,000 - $10,000+ per violation).

The math is clear: routine quarterly maintenance vs a single fine that could be $10,000. Maintenance is cheaper. Every time. [Contact us for a maintenance quote](/schedule-service).

## Related Articles

- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)
- [CaptiveAire Hood Service in NJ](/blog/captiveaire-hood-service-nj)
- [Kitchen Hood Not Capturing Smoke](/blog/kitchen-hood-not-capturing-smoke)

Looking for ESP service? Visit our [Pollution Control Service](/services/pollution-control) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Does my NYC restaurant need an ESP?', answer: 'If your restaurant does charbroiling, grilling, frying, or roasting that produces grease-laden vapors, NYC Local Law 38 requires pollution control equipment. Most NYC restaurants that cook with heat need an ESP or equivalent device.' },
      { question: 'What is the fine for not having an ESP in NYC?', answer: 'NYC DEP fines range from $1,000 for a first violation to $10,000+ for repeat violations. Not having maintenance logs is a separate violation. Multiple violations can be issued in a single inspection.' },
      { question: 'How often does an ESP need to be cleaned in NYC?', answer: 'Quarterly at minimum for most restaurants. High-volume charbroiling operations may need monthly cleaning. NYC DEP requires dated, detailed maintenance logs available for inspection at all times.' },
    ],
  },
  {
    slug: 'esp-cleaning-service-nyc-nj',
    title: 'ESP Cleaning Service in NYC & NJ — What to Expect and What It Costs',
    description: 'Your ESP needs quarterly cleaning to stay compliant. Here\'s what the service involves, what it costs, and how to choose a provider.',
    date: '2026-03-29',
    category: 'Pollution Control',
    readTime: '5 min',
    content: `Your electrostatic precipitator collects grease and smoke particles from your kitchen exhaust. When the collector cells are coated in grease, the unit stops working — and you're out of compliance. Here's what professional ESP cleaning involves.

## What Happens During an ESP Cleaning

### 1. Power Down and Lockout
The technician disconnects power to the ESP unit. ESPs run on high voltage — this is not equipment you want to work on energized.

### 2. Cell Removal
The collector cells (heavy metal plate assemblies) are pulled out of the housing. Depending on the unit, there may be 2-8 cells. Each one is coated in accumulated grease.

### 3. Soaking
Cells are soaked in a professional-grade alkaline cleaning solution. This breaks down the grease that's baked onto the plates. Soak time varies from 30 minutes to several hours depending on buildup.

### 4. Power Wash
After soaking, cells are power washed to remove all remaining residue. The plates need to be completely clean for the electrostatic charge to work properly.

### 5. Inspection
While cells are out, the technician inspects:
- **Ionizer wires** — thin tungsten wires that create the electrostatic charge. They break over time and need replacement.
- **Power supply** — the high-voltage transformer that energizes the cells. Checks for proper output.
- **Pre-filters** — mesh filters upstream of the ESP that catch large particles. Usually replaced during cleaning.
- **Post-filters** — carbon or HEPA filters downstream. Replaced on schedule.
- **Housing** — checks for grease buildup, drain blockages, and structural issues.

### 6. Reinstall and Test
Clean cells are reinstalled, power is restored, and the unit is tested. The indicator light should show green (operating normally). The tech verifies proper current draw on the power supply.

### 7. Documentation
The service is logged with date, technician name, work performed, and any issues found. This documentation is what the NYC DEP inspector wants to see.

## How Long Does It Take?

- **Single ESP unit:** 1.5 - 3 hours
- **Multiple units or rooftop ecology:** 3 - 5 hours
- **Heavily neglected unit (first cleaning in years):** 4 - 6 hours

## What It Costs

Pricing varies depending on your unit type, number of cells, and service frequency. [Contact us for a quote](/schedule-service) — we offer both single-visit and quarterly contract options.

## How to Choose an ESP Service Provider

**Look for:**
- Experience with your specific ESP brand (Smoke Hog, CaptiveAire, Ecology, Halton)
- Proper documentation for DEP compliance
- Willingness to set you up on a quarterly schedule
- Can bundle with hood cleaning, air balancing, and fan service

**Avoid:**
- Companies that "clean" without removing the cells (this doesn't work)
- Providers who can't produce documentation for DEP
- Anyone who doesn't know what ionizer wires are
- The cheapest option — if the price seems too good to be true, corners were cut

## How Often Should It Be Done?

| Restaurant Type | Recommended Frequency |
|----------------|----------------------|
| Heavy charbroiling (steakhouse, BBQ) | Monthly |
| Moderate cooking (full-service restaurant) | Quarterly |
| Light cooking (café, bakery with frying) | Every 6 months |
| Any NYC restaurant under DEP oversight | Quarterly minimum |

## Related Articles

- [NYC Local Law 38: ESP Requirements](/blog/nyc-local-law-38-esp-requirements-restaurants)
- [Kitchen Air Balancing in NJ](/blog/kitchen-air-balancing-nj-what-it-is)
- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)

Looking for ESP cleaning? Visit our [Pollution Control Service](/services/pollution-control) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'How much does ESP cleaning cost?', answer: 'Pricing depends on your unit type, number of cells, and service frequency. Contact us for a quote. Regular ESP maintenance costs a fraction of a single NYC DEP fine.' },
      { question: 'What does ESP cleaning involve?', answer: 'The technician powers down the unit, removes collector cells, soaks them in alkaline solution, power washes them, inspects ionizer wires and power supply, replaces pre-filters, reinstalls cells, tests the unit, and documents the service for DEP compliance.' },
      { question: 'How long does ESP cleaning take?', answer: 'A single ESP unit takes 1.5-3 hours. Multiple units or rooftop ecology units take 3-5 hours. Heavily neglected units that have not been cleaned in years may take 4-6 hours.' },
    ],
  },
  {
    slug: 'smoke-hog-not-working-troubleshooting',
    title: 'Smoke Hog Not Working? Troubleshooting Your Kitchen ESP',
    description: 'Red light on your Smoke Hog? No indicator at all? Here\'s what each problem means and whether you need service.',
    date: '2026-03-29',
    category: 'Pollution Control',
    readTime: '4 min',
    content: `"Smoke Hog" has become the generic name for kitchen electrostatic precipitators, like "Kleenex" for tissues. Whether you have an actual Smoke Hog (now Parker Hannifin / Filtration Group), a CaptiveAire ESP, an Ecology unit, or another brand — here's how to troubleshoot when it stops working.

## Check the Indicator Light First

### Green Light = Operating Normally
The ESP is powered and the electrostatic field is active. Grease is being collected. You're compliant.

### Red Light = Problem Detected
The unit has shut itself off due to a detected fault. Common causes:
- **Dirty cells** — grease buildup is causing arcing (electrical shorts between plates). This is the #1 cause. The cells need cleaning.
- **Failed ionizer wire** — a broken wire disrupts the electrostatic field. The safety circuit shuts the unit down.
- **Power supply fault** — the high-voltage transformer has failed or is overheating.
- **Interlock open** — the access door is open or a safety switch has tripped.

### No Light at All = No Power
- Check the breaker/disconnect switch
- Check if the unit is interlocked with the exhaust fan (some units won't power on unless the fan is running)
- The power supply may have failed completely

## What You Can Do

1. **Check the breaker** — flip it off and back on. Sometimes a reset clears a temporary fault.
2. **Check the access door** — make sure it's fully closed and the interlock is engaged.
3. **Look at the cells** — if you can safely open the unit, look at the collector plates. If they're coated in thick grease, that's your problem. They need professional cleaning.
4. **Check the pre-filter** — a completely clogged pre-filter can restrict airflow enough to trigger faults.
5. **Turn the exhaust fan on first** — some ESPs have an interlock that requires the exhaust fan to be running before the ESP powers up.

## What Requires a Technician

- **Cell cleaning** — the cells need to be removed, soaked, and power washed. You can't clean them in place.
- **Ionizer wire replacement** — these are delicate tungsten wires inside a high-voltage system. Not a DIY job.
- **Power supply repair** — high-voltage electrical work. Dangerous without training.
- **Control board replacement** — if the logic board has failed, it needs professional diagnosis.

## Don't Ignore It

A non-functioning ESP means:
- Your kitchen exhaust is dumping grease and smoke directly into the air
- Neighbors smell it and call 311 (in NYC)
- The DEP shows up and you have no working unit and no maintenance logs
- $1,000 - $10,000 fine

A red light on your Smoke Hog is not a suggestion. It's a routine cleaning visit or a $10,000 fine. Your choice. [Schedule service today](/schedule-service).

## Related Articles

- [NYC Local Law 38: ESP Requirements](/blog/nyc-local-law-38-esp-requirements-restaurants)
- [ESP Cleaning Service: What to Expect](/blog/esp-cleaning-service-nyc-nj)
- [Kitchen Hood Not Capturing Smoke](/blog/kitchen-hood-not-capturing-smoke)

Need ESP service? Visit our [Pollution Control Service](/services/pollution-control) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why is my Smoke Hog showing a red light?', answer: 'A red indicator light means the ESP has detected a fault and shut down. The most common cause is dirty collector cells causing electrical arcing. Other causes include a broken ionizer wire, power supply fault, or open safety interlock. The cells need professional cleaning.' },
      { question: 'Can I clean my ESP cells myself?', answer: 'No. ESP cells need to be removed from the unit, soaked in professional alkaline cleaning solution, and power washed. They cannot be effectively cleaned in place. The high-voltage system also requires trained technicians for any internal work.' },
      { question: 'What happens if I ignore a broken ESP?', answer: 'In NYC, a non-functioning ESP is a violation of Local Law 38. The DEP can fine you $1,000-$10,000+ per violation. Additionally, your kitchen exhaust is dumping grease and smoke into the air, which triggers neighbor complaints and further inspections.' },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
