import type { BlogPost } from '@/lib/blog-data';

export const BROOKLYN_HOOD_REPORT_POST: BlogPost = {
  slug: 'brooklyn-kitchen-hood-performance-test-report',
  title: 'What to Ask for in a Brooklyn Kitchen Hood Performance Test Report',
  description: 'A Brooklyn restaurant operator’s checklist for hood test conditions, airflow readings, capture observations, and a clear record of recommended repairs.',
  date: '2026-11-09',
  category: 'Kitchen Ventilation',
  readTime: '4 min',
  content: `A hood test report should help a restaurant decide what to do next. If smoke escapes only when the grill and fryers are busy, the report should tell you whether the technician observed that condition and what was measured while it happened. Agree on what you need documented before booking the visit.

## Identify the complaint and equipment tested

Ask the report to name the affected hood and the fan, makeup air unit, and controls serving it. Identify which cooking appliances were under the hood, and note changes since the problem started. If a kitchen has more than one hood, equipment labels help the restaurant and building team refer to the same system.

For a complaint that appears during dinner service, share when it happens, which appliances are in use, and whether the dining room or adjoining spaces are affected. Ask how closely the agreed test can reproduce those conditions.

## Record the operating conditions

Ask which appliances, exhaust fans, makeup air units, and relevant HVAC equipment were operating. The report should distinguish a check at idle from an observation with cooking or a representative test load. If a variable-speed system is involved, ask which modes were checked and which remain open.

For example, a report can describe visible smoke escaping at the front of the hood during a particular cooking load, then record what happened after an authorized adjustment under comparable conditions. If the cooking load could only be observed once, the report should say so. This is an example of how to document a visit.

## Keep readings and observations separate

Ask which exhaust or supply readings were taken, where and how they were obtained, and what units were used. If the technician has a design schedule or a previous balance report, ask for that reference to be identified beside any comparison. If a measurement point was inaccessible or the design target was unavailable, record the limitation.

Ask the technician to describe where cooking effluent was observed to escape, if at all, and any nearby drafts or supply air that may have affected the observation. An airflow value and a capture observation answer different questions. ASHRAE describes verifying airflow and evaluating capture and containment under design conditions in its [kitchen ventilation handbook chapter](https://handbook.ashrae.org/Handbooks/A19/SI/a19_ch34/a19_ch34_si.aspx). The [Accurex hood manual](https://content.accurex.com/accurex-cms-prod/docs/default-source/ioms/470399_canopyhoods_iom.pdf) also points to fan selection, balance reports, and makeup air when investigating capture problems.

## Separate completed adjustments from proposed work

Ask for a record of what the technician changed, which observations or readings were repeated afterward, and what was still unresolved. If the next step is a repair, further testing, or a design review, the report should explain what finding supports it. Tell the technician before the visit if the report needs to support a landlord discussion, a replacement decision, or comparison with an earlier test. Confirm any inspection or certification requirements separately with the appropriate party.

## Prepare a Brooklyn service inquiry

Send the address, hood count, symptom timing, equipment labels if available, any previous readings, and the name of the person who can arrange access. State that you need written findings and what decision they should support. TCS confirms the testing scope, access, and scheduling before a visit.

See [hood performance testing and the service inquiry](/services/kitchen-hood-performance-testing) or the [Brooklyn kitchen ventilation page](/services/kitchen-ventilation/brooklyn-ny#brooklyn-service-guide) for more help preparing a request.`,
  faqs: [
    { question: 'What should I ask for if the hood only spills smoke during busy service?', answer: 'Ask the technician to record the appliances and ventilation equipment operating when the issue was observed. If the visit cannot reproduce that condition, request that the report identify the limitation and what follow-up would help.' },
    { question: 'What should the report say if an airflow target is unavailable?', answer: 'Ask for the measured values, units, measurement locations, and test conditions. The report should identify any available comparison source and note when a design target could not be confirmed.' },
  ],
};
