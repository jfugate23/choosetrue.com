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

**True Commercial Service provides 24/7 emergency repair and preventive maintenance for commercial walk-in coolers and freezers across Oklahoma City, OK. Text us anytime.**

## Related Articles

- [Walk-In Freezer vs Cooler: Service Differences](/blog/walk-in-freezer-vs-cooler-service-differences)
- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
- [What Does Equipment Repair Cost in the OKC metro?](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)

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

**True Commercial Service repairs all major ice machine brands including Hoshizaki, Manitowoc, and Scotsman. 24/7 emergency service across Oklahoma City, OK.**

## Related Articles

- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
- [EPA 608 Certification: What Owners Should Know](/blog/epa-608-certification-restaurant-owners)
- [What Does Equipment Repair Cost in the OKC metro?](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)

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

**True Commercial Service is pursuing Rational Authorized Service Partner certification. We service all Rational iCombi Pro, iCombi Classic, and SCC models across Oklahoma City, OK.**

## Related Articles

- [Commercial Fryer Troubleshooting](/blog/commercial-fryer-troubleshooting)
- [What Does Equipment Repair Cost in the OKC metro?](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)
- [How to Choose a Repair Company in the OKC metro](/blog/questions-before-signing-equipment-service-contract)

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

**True Commercial Service offers customized preventive maintenance agreements for commercial kitchens across Oklahoma City, OK. Contact us to schedule a free equipment assessment.**

## Related Articles

- [What Is a PM Agreement?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
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

**True Commercial Service specializes in commercial kitchen ventilation systems including CaptiveAire hoods, makeup air units, and exhaust fan service. We perform air balancing, fan repair, and ongoing maintenance across Oklahoma City, OK.**

## Related Articles

- [Kitchen Air Balancing in the OKC metro](/blog/commercial-kitchen-ventilation-problems-signs)
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
    slug: 'restaurant-equipment-downtime-cost',
    title: 'The True Cost of Kitchen Equipment Downtime for Restaurants',
    description: 'Equipment downtime costs more than the repair. Lost revenue, spoiled inventory, health code risk, and staff overtime add up fast.',
    date: '2026-03-11',
    category: 'Business',
    readTime: '4 min',
    content: `A broken walk-in cooler isn't a $500 repair problem. It's a $5,000 business problem. Here's the real math.

## The Visible Costs

### The Repair Bill
Average emergency service call in the OKC metro: $450-800. This is what shows up on the invoice — and it's the smallest part of the total cost.

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

**True Commercial Service offers 24/7 emergency response and preventive maintenance designed to minimize downtime for your restaurant. Every minute of downtime costs you money — we show up fast.**

## Related Articles

- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
- [What Is a PM Agreement?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
- [What Does Equipment Repair Cost in the OKC metro?](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)

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

**Every technician at True Commercial Service holds EPA 608 Universal certification. We practice proper refrigerant recovery on every job across Oklahoma City, OK.**

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

**True Commercial Service repairs all major commercial fryer brands across Oklahoma City, OK. Gas and electric. Same-day emergency service available.**

## Related Articles

- [Rational Combi Oven Error Codes](/blog/rational-combi-oven-error-codes-guide)
- [What Does Equipment Repair Cost in the OKC metro?](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)
- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)

Looking for service? Visit our [Cooking Equipment Repair](/services/cooking-equipment) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why is my commercial fryer not heating up?', answer: 'The most common causes for a commercial fryer not heating are a failed thermostat, defective high-limit safety switch, faulty igniter or pilot assembly (gas fryers), or burned-out heating elements (electric fryers). Check the pilot light first on gas models — it is the simplest fix.' },
      { question: 'How often should commercial fryer oil be changed?', answer: 'Commercial fryer oil should be filtered daily and completely changed every 1-2 weeks depending on volume and what you are frying. Breaded and battered items degrade oil faster. Dark, foamy, or foul-smelling oil should be changed immediately.' },
      { question: 'Why is my commercial fryer producing dark or greasy food?', answer: 'Dark or greasy food usually indicates the oil temperature is incorrect, the oil is degraded and needs changing, or the thermostat is out of calibration. A thermostat that reads 350°F but is actually at 300°F produces greasy, undercooked food. Have the thermostat calibrated.' },
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

**True Commercial Service provides expert CaptiveAire ventilation service including hood maintenance, fan repair, makeup air units, and professional air balancing across Oklahoma City, OK. We understand ventilation from the inside out.**

## Related Articles

- [Kitchen Air Balancing in the OKC metro](/blog/commercial-kitchen-ventilation-problems-signs)
- [CaptiveAire Hood Service in the OKC metro](/blog/captiveaire-hood-maintenance-repair-guide)
- [Kitchen Ventilation Problems: 5 Signs](/blog/commercial-kitchen-ventilation-problems-signs)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'How often should CaptiveAire hood systems be serviced?', answer: 'CaptiveAire recommends quarterly professional maintenance for most commercial kitchen hood systems. Filters should be cleaned weekly. The full ductwork should be cleaned every 3-6 months. High-volume cooking operations (charbroiling, wok cooking) may need more frequent service.' },
      { question: 'What does CaptiveAire hood maintenance include?', answer: 'Maintenance includes cleaning or replacing grease filters, inspecting and cleaning the exhaust fan, checking belt tension and motor bearings, testing the fire suppression system, verifying proper airflow and capture, and inspecting the makeup air unit for correct balance.' },
      { question: 'Can any HVAC company work on CaptiveAire systems?', answer: 'While any licensed HVAC technician can perform basic cleaning, CaptiveAire recommends using technicians with specific training on their systems — especially for fire suppression, demand control ventilation, and makeup air balancing. Improper service can create fire hazards and code violations.' },
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

Walk-in freezers consume 2-3x more energy than coolers. A maintenance-neglected freezer with dirty coils can use 30-50% more energy than a clean one. At commercial electric rates, that's $100-300/month in wasted energy on a single unit.

**True Commercial Service provides emergency and preventive maintenance for both walk-in coolers and freezers across Oklahoma City, OK. We understand the critical differences and maintain each accordingly.**

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

**True Commercial Service believes in transparent agreements, guaranteed response times, and earning your business every visit. We track our metrics because we believe accountability drives excellence. Serving Oklahoma City, OK.**

## Related Articles

- [What Is a PM Agreement?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
- [How to Choose a Repair Company in the OKC metro](/blog/questions-before-signing-equipment-service-contract)
- [The True Cost of Equipment Downtime](/blog/restaurant-equipment-downtime-cost)

Looking for service? Visit our [Schedule Service](/schedule-service) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What should a restaurant equipment service contract include?', answer: 'A good service contract should clearly state: guaranteed response times, what equipment is covered, parts and labor warranty terms, PM visit frequency and scope, emergency surcharge details, cancellation terms, and the company\'s first-time fix rate and average resolution time.' },
      { question: 'How long should I commit to an equipment service contract?', answer: 'Start with a 6-month or 1-year contract. Avoid long-term multi-year agreements until you have verified the company delivers on their promises. A confident company will earn your renewal — they should not need to lock you in.' },
      { question: 'What is a good first-time fix rate for equipment repair?', answer: 'Industry average first-time fix rate is about 70%. A strong service company should be above 85%. This means the technician resolves the issue on the first visit without needing to return for parts or additional diagnosis.' },
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

Without the MAU, your building goes under severe negative pressure. The exhaust is still pulling air out, so the building sucks in raw outside air through every crack, door, window, and gap. In January in the Oklahoma City area, that\'s 35°F air pouring in. In August, it\'s 95°F humid air.

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

**True Commercial Service repairs and maintains all brands of makeup air units across Oklahoma City, OK. If your MAU is down, your kitchen is losing money every hour. Call us for same-day service.**

## Related Articles

- [Kitchen Negative Pressure: Causes and Fix](/blog/kitchen-negative-pressure-causes-costs-fix)
- [Restaurant Kitchen Too Hot?](/blog/restaurant-kitchen-too-hot-air-balance)
- [Kitchen Air Balancing in the OKC metro](/blog/commercial-kitchen-ventilation-problems-signs)

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

**True Commercial Service provides kitchen air balancing for restaurants across Oklahoma City, OK. If your kitchen is too hot and your HVAC company can\'t fix it, the problem is probably on the roof — not the AC unit. One visit, one balance, problem solved.**

## Related Articles

- [Kitchen Air Balancing in the OKC metro](/blog/commercial-kitchen-ventilation-problems-signs)
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

A kitchen with a 2,750 CFM exhaust hood and a dead MAU is pulling 2,200 CFM of raw outside air through every crack in the building. Here\'s what that costs in Oklahoma City, OK:

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

**True Commercial Service diagnoses and fixes kitchen negative pressure problems for restaurants and commercial kitchens across Oklahoma City, OK. One visit, real measurements, permanent fix.**

## Related Articles

- [Makeup Air Unit Not Working?](/blog/makeup-air-unit-not-working-restaurant)
- [Kitchen Air Balancing in the OKC metro](/blog/commercial-kitchen-ventilation-problems-signs)
- [Dining Room Smells Like Kitchen](/blog/dining-room-smells-like-kitchen-ventilation)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'What causes negative pressure in a commercial kitchen?', answer: 'Negative pressure occurs when the exhaust hood pulls more air out of the kitchen than the makeup air unit supplies. The most common cause is a broken or undersized makeup air unit. The building sucks in raw outside air through doors, gaps, and cracks to make up the difference.' },
      { question: 'How much does negative pressure cost a restaurant?', answer: 'For a typical restaurant hood system, a completely failed makeup air unit can waste over $5,000 per year in excess heating and cooling costs. The building HVAC has to condition all the raw outside air being sucked in through the building envelope.' },
      { question: 'How do you fix negative pressure in a restaurant kitchen?', answer: 'First, verify the makeup air unit is running and delivering its design airflow. Then measure exhaust and supply CFM and balance the system to an 80-90% supply-to-exhaust ratio. This usually involves adjusting dampers and fan speeds. Contact us for a quote on air balance service.' },
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

**True Commercial Service provides same-day exhaust fan diagnosis and repair across Oklahoma City, OK. If your fan is making noise, we can usually fix it in one visit with parts on the truck.**

## Related Articles

- [Exhaust Fan Repair in the OKC metro](/blog/exhaust-fan-making-noise-causes)
- [Kitchen Air Balancing in the OKC metro](/blog/commercial-kitchen-ventilation-problems-signs)
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

**True Commercial Service fixes kitchen-to-dining room odor problems by balancing the ventilation system at the source. Serving Oklahoma City, OK restaurants, hotels, and commercial kitchens.**

## Related Articles

- [Kitchen Negative Pressure: Causes and Fix](/blog/kitchen-negative-pressure-causes-costs-fix)
- [Kitchen Hood Not Capturing Smoke](/blog/kitchen-hood-not-capturing-smoke)
- [Kitchen Air Balancing in the OKC metro](/blog/commercial-kitchen-ventilation-problems-signs)

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

**True Commercial Service diagnoses and fixes hood capture problems for commercial kitchens across Oklahoma City, OK. We bring the instruments, take the readings, run the smoke test, and fix it. One visit.**

## Related Articles

- [Kitchen Air Balancing in the OKC metro](/blog/commercial-kitchen-ventilation-problems-signs)
- [Dining Room Smells Like Kitchen](/blog/dining-room-smells-like-kitchen-ventilation)
- [Restaurant Kitchen Too Hot?](/blog/restaurant-kitchen-too-hot-air-balance)

Looking for service? Visit our [Kitchen Ventilation Service](/services/kitchen-ventilation) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why is smoke escaping my kitchen hood?', answer: 'The four most common causes are: exhaust CFM too low (dirty fan wheel, slipping belt, closed damper), makeup air disrupting the hood capture zone, insufficient hood overhang, or cross-drafts from HVAC or doors. The first two causes account for the majority of cases and are fixed with air balancing.' },
      { question: 'How do you test if a kitchen hood is capturing properly?', answer: 'A smoke pencil test is the definitive field test. Hold a smoke pencil at the front edge of the hood at cooking height. The smoke should be captured immediately. If it drifts outward or stalls, the hood is not capturing. This test is included with every air balance.' },
      { question: 'How much does it cost to fix a kitchen hood that is not capturing smoke?', answer: 'Most capture problems are caused by low exhaust CFM or improper makeup air, both fixed with an air balance visit. Contact us for a quote. Physical modifications like air curtains or hood extensions are quoted separately.' },
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
- Neighbors smell it and file complaints
- The DEP shows up and you have no working unit and no maintenance logs
- $1,000 - $10,000 fine

A red light on your Smoke Hog is not a suggestion. It's a routine cleaning visit or a $10,000 fine. Your choice. [Schedule service today](/schedule-service).

## Related Articles

- [ESP Cleaning Service: What to Expect](/blog/smoke-hog-not-working-troubleshooting)
- [Kitchen Hood Not Capturing Smoke](/blog/kitchen-hood-not-capturing-smoke)

Need ESP service? Visit our [Pollution Control Service](/services/pollution-control) page or [schedule service](/schedule-service) today.`,
    faqs: [
      { question: 'Why is my Smoke Hog showing a red light?', answer: 'A red indicator light means the ESP has detected a fault and shut down. The most common cause is dirty collector cells causing electrical arcing. Other causes include a broken ionizer wire, power supply fault, or open safety interlock. The cells need professional cleaning.' },
      { question: 'Can I clean my ESP cells myself?', answer: 'No. ESP cells need to be removed from the unit, soaked in professional alkaline cleaning solution, and power washed. They cannot be effectively cleaned in place. The high-voltage system also requires trained technicians for any internal work.' },
      { question: 'What happens if I ignore a broken ESP?', answer: 'A non-functioning ESP means your kitchen exhaust is dumping grease and smoke into the air, which triggers neighbor complaints, health code violations, and potential fines. In cities with pollution control requirements, fines can reach $10,000+ per violation.' },
    ],
  },





  // ─── OKC METRO LOCAL SEO ARTICLES ─────────────────────────────
  {
    slug: 'commercial-kitchen-equipment-repair-near-me-okc',
    title: 'Commercial Kitchen Equipment Repair Near Me - Oklahoma City Metro',
    description: 'Looking for commercial kitchen equipment repair near you in OKC? True Commercial Service covers Oklahoma City, Norman, Edmond, Moore, and Central Oklahoma. Same-day response.',
    date: '2026-04-06',
    category: 'Service Area',
    readTime: '4 min',
    content: `If you are searching for commercial kitchen equipment repair near you in the Oklahoma City metro, True Commercial Service is your local option. We cover the entire OKC metro area with same-day emergency response.

## Where We Service

We cover the OKC metro and Central Oklahoma including:

**Oklahoma City Metro:** Oklahoma City, Norman, Edmond, Moore, Midwest City, Del City, Yukon, Mustang, Bethany, The Village, Nichols Hills, Warr Acres, Newcastle.

**North Central Oklahoma:** Stillwater, Guthrie, Shawnee, Perkins.

**South Metro:** Norman, Noble, Purcell, Blanchard.

## What We Repair

We service all commercial kitchen equipment including cooking equipment (ovens, fryers, griddles, ranges, steamers, combi ovens), refrigeration (walk-in coolers, walk-in freezers, reach-ins, ice machines), kitchen ventilation (exhaust hoods, exhaust fans, makeup air units, air balancing), HVAC (rooftop units, split systems), and warewash (commercial dishwashers).

## Why Choose a Local OKC Company

National service companies dispatch from far away. By the time their tech arrives, your kitchen has been down for hours. We are based in the OKC metro. For most locations in our service area, we can be on site within 1-2 hours of your call.

We understand Oklahoma weather challenges — from 110-degree summers that stress refrigeration systems to ice storms that knock out power and damage rooftop equipment. We are here year-round.

## Brands We Service

We service all major commercial kitchen equipment brands including Rational, Alto-Shaam, Vulcan, Garland, Pitco, Hoshizaki, Manitowoc, True Manufacturing, Traulsen, CaptiveAire, Accurex, Greenheck, Turbo Air, and many more.

## 24/7 Emergency Service

Kitchen equipment failures do not wait for business hours. We provide 24/7 emergency service for critical equipment like walk-in coolers, freezers, and any situation that threatens food safety or your ability to operate.

## Related Articles

- [Kitchen Air Balancing in the OKC metro](/blog/commercial-kitchen-ventilation-problems-signs)
- [How to Choose a Repair Company](/blog/questions-before-signing-equipment-service-contract)
- [Walk-In Cooler Not Cooling?](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)

Looking for service? [Schedule a service call](/schedule-service) or call us at (405) 292-4510.`,
    faqs: [
      { question: 'Where can I find commercial kitchen equipment repair near me in OKC?', answer: 'True Commercial Service covers the entire Oklahoma City metro including OKC, Norman, Edmond, Moore, Midwest City, Yukon, and surrounding areas. Call (405) 292-4510 for same-day service.' },
      { question: 'Do you offer same-day commercial kitchen repair in Oklahoma City?', answer: 'Yes. We respond to emergency calls same-day and can typically be on site within 1-2 hours for locations in the OKC metro area. We are available 24/7 for critical equipment failures.' },
      { question: 'What commercial kitchen equipment do you repair in the OKC area?', answer: 'We repair all commercial kitchen equipment including cooking equipment, refrigeration, ventilation, HVAC, ice machines, and dishwashers. All major brands serviced.' },
    ],
  },
  {
    slug: 'emergency-walk-in-cooler-repair-oklahoma-city',
    title: 'Emergency Walk-In Cooler Repair - Oklahoma City OK & Surrounding Areas',
    description: 'Walk-in cooler down in OKC? We provide emergency walk-in cooler repair in Oklahoma City, Norman, Edmond, and the OKC metro. Same-day response. Protect your inventory.',
    date: '2026-04-06',
    category: 'Refrigeration',
    readTime: '4 min',
    content: `Your walk-in cooler is down. Temperature is rising. You have thousands of dollars in perishable product at risk. You need someone there now, not tomorrow.

True Commercial Service provides emergency walk-in cooler repair in Oklahoma City and across the entire OKC metro area. We respond same-day to refrigeration emergencies because every hour your cooler is down costs you money.

## What to Do Right Now

While you wait for the tech:

1. **Do not open the door** unless absolutely necessary. Every time the door opens, warm air floods in.
2. **Check the thermostat** to make sure it has not been bumped or changed.
3. **Check the breaker** in your electrical panel. A tripped breaker is a free fix.
4. **Listen** to the condensing unit. Is it running? Humming? Silent?
5. **Note the temperature** for your records.

## Common Walk-In Cooler Emergencies

**Condenser coil is dirty** — Oklahoma heat and dust clog condenser coils fast. This is the #1 cause of walk-in failures in the OKC area. We clean the coil and get it running within the hour.

**Refrigerant leak** — oil stains around the compressor or lines. Requires EPA 608 certified technician. We carry leak detection equipment and refrigerant on the truck.

**Evaporator iced over** — defrost system failure. Could be a bad defrost timer, heater, or thermostat.

**Compressor failure** — we diagnose whether it is truly the compressor or a cheaper component causing the symptom.

## Our Response Times in OKC Metro

- **Oklahoma City:** Under 45 minutes
- **Moore, Midwest City, Del City:** Under 45 minutes
- **Norman:** Under 1 hour
- **Edmond:** Under 1 hour
- **Yukon, Mustang:** Under 1 hour
- **Stillwater:** Under 1.5 hours

## Oklahoma Heat Makes It Worse

Oklahoma summers hit 100-110 degrees. Your condenser is on the roof baking in that heat, working twice as hard as it would in a cooler climate. If the coils are dirty, the compressor overheats and shuts down. Regular condenser cleaning is critical in Oklahoma — every 3 months in summer, not just annually.

## Related Articles

- [Walk-In Cooler Not Cooling? 7 Things to Check](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)
- [Walk-In Freezer vs Cooler Service Differences](/blog/walk-in-freezer-vs-cooler-service-differences)
- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)

**True Commercial Service provides emergency walk-in cooler and freezer repair across the OKC metro.** Call (405) 292-4510 — 24/7.`,
    faqs: [
      { question: 'How fast can you get to my walk-in cooler emergency in Oklahoma City?', answer: 'For Oklahoma City and surrounding metro areas, our response time is typically under 45 minutes. Norman and Edmond under 1 hour. We respond 24/7 to refrigeration emergencies.' },
      { question: 'Why do walk-in coolers fail more often in Oklahoma?', answer: 'Oklahoma summers reach 100-110 degrees, which forces condenser units to work much harder. Dust and heat clog condenser coils faster than in cooler climates. Quarterly condenser cleaning is critical in Oklahoma, especially during summer months.' },
      { question: 'Can you repair walk-in coolers on weekends and after hours in OKC?', answer: 'Yes. We provide 24/7 emergency service for walk-in coolers and freezers across the OKC metro. Call (405) 292-4510 any time.' },
    ],
  },
  {
    slug: '24-7-restaurant-equipment-repair-okc-metro',
    title: '24/7 Restaurant Equipment Repair - OKC Metro Emergency Service',
    description: '24/7 emergency restaurant equipment repair in Oklahoma City metro. Walk-in coolers, ovens, fryers, exhaust fans. Same-day response across OKC, Norman, Edmond.',
    date: '2026-04-06',
    category: 'Service Area',
    readTime: '4 min',
    content: `Restaurant equipment does not break on a convenient schedule. Your fryer goes down during Friday dinner rush. Your walk-in cooler stops cooling at 2 AM. Your exhaust fan seizes on a holiday weekend.

True Commercial Service provides 24/7 emergency restaurant equipment repair across the Oklahoma City metro. We answer the phone every time.

## What We Cover 24/7

**Critical emergencies (we come immediately):**
- Walk-in cooler or freezer not holding temperature
- Complete cooking line failure during service
- Gas leak or gas smell from equipment
- Exhaust hood not functioning

**Urgent same-day:**
- Ice machine down
- Dishwasher failure
- Single piece of cooking equipment
- Reach-in refrigerator or freezer

## OKC Metro Coverage

**Oklahoma City:** Bricktown, Midtown, Automobile Alley, Plaza District, Paseo, Deep Deuce, NW Expressway corridor, Memorial Road, South OKC

**Norman:** Campus Corner, Main Street, OU campus dining, Lindsey Street

**Edmond:** Broadway, 2nd Street, UCO campus, Deer Creek

**Moore / Midwest City / Del City:** I-35 corridor, Tinker AFB area

**Yukon / Mustang / Bethany:** West metro

**Stillwater:** The Strip, OSU campus dining

## Oklahoma-Specific Challenges

Oklahoma restaurants deal with unique challenges:
- **Extreme heat** — 100+ degree summers stress every piece of refrigeration and HVAC equipment
- **Ice storms** — winter storms knock out power, damage rooftop equipment, burst pipes
- **Tornado season** — severe weather can damage outdoor equipment and disrupt operations
- **Hard water** — Oklahoma water is hard, which accelerates scale buildup in ice machines, steamers, and dishwashers

We understand these challenges because we are based here and deal with them every day.

## Related Articles

- [The True Cost of Kitchen Equipment Downtime](/blog/restaurant-equipment-downtime-cost)
- [Walk-In Cooler Not Cooling?](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)
- [Exhaust Fan Making Noise? 5 Causes](/blog/exhaust-fan-making-noise-causes)

**Call (405) 292-4510 any time, day or night.** We answer. We respond. We fix it.`,
    faqs: [
      { question: 'Do you offer 24/7 restaurant equipment repair in the OKC metro?', answer: 'Yes. True Commercial Service provides 24/7 emergency restaurant equipment repair across the Oklahoma City metro including OKC, Norman, Edmond, Moore, Midwest City, and surrounding areas.' },
      { question: 'How fast can you respond to a restaurant equipment emergency in Oklahoma City?', answer: 'For most OKC metro locations, we can be on site within 45 minutes to 1 hour. We prioritize refrigeration and cooking line emergencies.' },
      { question: 'Do you service restaurant equipment near Tinker AFB?', answer: 'Yes. We cover Midwest City, Del City, and the Tinker AFB area. We also service military dining facilities with proper certifications.' },
    ],
  },
  {
    slug: 'commercial-exhaust-fan-repair-oklahoma-city',
    title: 'Commercial Exhaust Fan Repair in Oklahoma City - Same Day Service',
    description: 'Kitchen exhaust fan not working in OKC? We repair upblast, utility, and inline exhaust fans across Oklahoma City, Norman, Edmond. Belt replacement, motor swaps. Same-day.',
    date: '2026-04-06',
    category: 'Ventilation',
    readTime: '4 min',
    content: `If your kitchen exhaust fan is not working in the Oklahoma City area, your kitchen cannot legally operate. Health codes require a functioning exhaust system, and your hood cannot capture smoke and grease without the fan pulling air through it.

True Commercial Service provides same-day exhaust fan repair across the OKC metro.

## Exhaust Fan Problems We Fix

**Belt replacement** — the most common exhaust fan failure. Oklahoma heat accelerates belt wear. We carry common belt sizes on the truck. Typically a 30-minute repair.

**Motor replacement** — the motor burns out from heat exposure. Oklahoma rooftops can reach 140+ degrees in summer, which is brutal on fan motors. We source most motors same-day.

**Bearing failure** — grinding or vibrating from the roof means bearings are going. We replace before they seize and destroy the motor.

**Fan wheel cleaning** — Oklahoma dust and kitchen grease combine to coat fan wheels fast. Reduces performance and creates imbalance.

**Electrical issues** — contactors and wiring fail in Oklahoma's extreme temperature swings. We diagnose and repair all electrical problems.

## Oklahoma Heat vs Your Exhaust Fan

Oklahoma summers are uniquely harsh on rooftop equipment. Your exhaust fan sits on a black roof in 100+ degree ambient temps. The motor compartment can reach 150+ degrees. This is why:
- Belts dry out and crack faster (replace every 6 months, not annually)
- Motor bearings fail sooner (lubricate quarterly)
- Electrical connections expand and contract with temperature swings

Preventive maintenance is more important in Oklahoma than in cooler climates.

## OKC Metro Coverage

- **Oklahoma City:** Under 45 minutes
- **Norman:** Under 1 hour
- **Edmond:** Under 1 hour
- **Moore, Midwest City:** Under 45 minutes
- **Yukon, Mustang:** Under 1 hour
- **Stillwater:** Under 1.5 hours

## All Fan Types and Brands

We service upblast, utility, inline, and centrifugal fans from CaptiveAire, Greenheck, Accurex, Loren Cook, Twin City Fan, and all other manufacturers.

## Related Articles

- [Exhaust Fan Making Noise? 5 Causes](/blog/exhaust-fan-making-noise-causes)
- [Restaurant Exhaust Fan Repair](/blog/exhaust-fan-making-noise-causes)
- [Kitchen Air Balancing](/blog/commercial-kitchen-ventilation-problems-signs)

**Call (405) 292-4510 for same-day exhaust fan repair in the OKC metro.**`,
    faqs: [
      { question: 'How fast can you repair an exhaust fan in Oklahoma City?', answer: 'For OKC and surrounding metro, we can typically be on site within 45 minutes. Most exhaust fan repairs are completed in under 2 hours.' },
      { question: 'Why do exhaust fans fail more often in Oklahoma?', answer: 'Oklahoma rooftop temperatures can exceed 140 degrees in summer. This extreme heat accelerates belt wear, bearing failure, and motor burnout. Preventive maintenance every 6 months is critical in Oklahoma.' },
      { question: 'What brands of exhaust fans do you repair in OKC?', answer: 'We repair all brands including CaptiveAire, Greenheck, Accurex, Loren Cook, and Twin City Fan. We service upblast, utility, inline, and centrifugal fan types.' },
    ],
  },
  {
    slug: 'ice-machine-repair-near-me-oklahoma-city',
    title: 'Ice Machine Repair Near Me - Oklahoma City OK',
    description: 'Ice machine not making ice in Oklahoma City? We repair Hoshizaki, Manitowoc, Scotsman, and Turbo Air ice machines. Same-day service across the OKC metro.',
    date: '2026-04-06',
    category: 'Ice Machines',
    readTime: '4 min',
    content: `No ice during service is an emergency for any restaurant, bar, or food service operation in Oklahoma — especially in the summer when demand is highest. If your commercial ice machine has stopped producing in the OKC metro, True Commercial Service can be there same-day.

## Common Ice Machine Problems in Oklahoma

**Scale buildup (the #1 issue in OKC)** — Oklahoma has notoriously hard water. Mineral scale deposits on the evaporator plate faster here than almost anywhere else in the country. Ice comes out thin or misshapen, production drops, then it stops entirely. We descale the system and restore normal operation. In Oklahoma, descaling should happen every 3 months, not 6.

**Dirty condenser** — Oklahoma dust and summer heat are a deadly combination for ice machine condensers. A clogged condenser raises operating temperature until the machine shuts down. We clean the condenser and restore full production.

**Water supply issues** — closed valve, kinked line, or failed inlet valve means no water reaching the machine.

**Harvest cycle failure** — the machine freezes ice but cannot release it. Usually a failed hot gas valve or low refrigerant.

**Control board failure** — machine cycles erratically or will not start.

## OKC Metro Service Area

- **Oklahoma City:** Under 45 minutes
- **Norman:** Under 1 hour
- **Edmond:** Under 1 hour
- **Moore, Midwest City, Del City:** Under 45 minutes
- **Yukon, Mustang:** Under 1 hour
- **Stillwater:** Under 1.5 hours

## Oklahoma Hard Water and Your Ice Machine

Oklahoma City water hardness averages 10-15 grains per gallon — classified as "very hard." This is significantly harder than the national average. What this means for your ice machine:

- Scale builds up 2-3x faster than in soft water areas
- Descaling is needed every 3 months, not the standard 6 months
- Water filters need changing more frequently
- Water treatment systems (softeners) pay for themselves in prevented repairs

If you do not have a water softener on your ice machine in Oklahoma, you are shortening its life by years.

## Brands We Service

We repair all major ice machine brands including Hoshizaki, Manitowoc, Scotsman, Ice-O-Matic, Turbo Air, and Follett. Cube machines, flake machines, and nugget machines.

## Related Articles

- [Commercial Ice Machine Not Making Ice?](/blog/commercial-ice-machine-not-making-ice)
- [How Often Should Equipment Be Serviced?](/blog/how-often-should-commercial-kitchen-equipment-be-serviced)
- [What Does Equipment Repair Cost?](/blog/walk-in-cooler-not-cooling-troubleshooting-guide)

**Call (405) 292-4510 for same-day ice machine repair in the OKC metro.**`,
    faqs: [
      { question: 'Where can I find ice machine repair near me in Oklahoma City?', answer: 'True Commercial Service provides same-day ice machine repair across the OKC metro including Oklahoma City, Norman, Edmond, Moore, Midwest City, and surrounding areas. Call (405) 292-4510.' },
      { question: 'Why do ice machines fail more often in Oklahoma?', answer: 'Oklahoma has very hard water (10-15 grains per gallon) which causes mineral scale to build up 2-3x faster than average. This clogs the evaporator and water system. Descaling every 3 months is critical in Oklahoma. The summer heat also stresses condensers.' },
      { question: 'How often should I clean my ice machine in Oklahoma?', answer: 'In Oklahoma, every 3 months due to hard water. The national recommendation is every 6 months, but Oklahoma water hardness requires more frequent cleaning to prevent scale buildup and production loss.' },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
