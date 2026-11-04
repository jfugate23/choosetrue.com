import type { BlogPost } from '@/lib/blog-data';

export const COMMISSIONING_HANDOFF_POST: BlogPost = {
  slug: 'kitchen-ventilation-commissioning-maintenance-handoff',
  title: 'After Kitchen Ventilation Commissioning: An Owner Handoff Checklist',
  description: 'A practical handoff checklist for Queens commercial kitchens: equipment records, open items, operator instructions, and maintenance planning after commissioning.',
  date: '2026-11-02',
  category: 'Kitchen Ventilation',
  readTime: '5 min',
  content: `A commercial kitchen ventilation startup should leave the operator with a clear path for day-to-day operation and future service. Once a project moves from installation into use, equipment labels, operating instructions, and unresolved items need to stay accessible to the people running the kitchen.

For Queens restaurant owners, facility teams, and project managers, this checklist helps organize that handoff. It is a planning guide, not a commissioning certificate or proof that a particular installation has passed an inspection.

## Start with the equipment inventory

Keep the hood, exhaust fan, makeup air unit, and control-system information together. Record each manufacturer's model and serial number from accessible labels, along with the unit designation used on the project drawings. A label such as EF-1 becomes more useful when the team knows which hood it serves and where the equipment is located.

For equipment from different manufacturers, retain the separate manuals and service contacts. The [Accurex manual library](https://www.accurex.com/resources/manuals) and [Gaylord resource center](https://www.gaylordventilation.com/resource-center) are primary sources for finding product documentation. Match the manual to the installed equipment rather than assuming that instructions for another model apply.

## Request the actual startup and test records

Ask the responsible project team which startup reports, airflow or balancing records, control-sequence information, and operating checks are included in its scope. Keep the dated reports with the equipment inventory. Distinguish design targets from measured results and record who performed each check.

Accurex describes reporting and documentation of remaining open items as part of its [aftermarket startup program](https://www.accurex.com/sales-service/service/aftermarket-startup-program). The documents available on your project depend on the contract and work performed. A fan running, a startup visit, or a photograph alone does not establish that every system requirement has been verified.

## Keep an open-items list with responsibility attached

If an issue remains, describe the affected equipment, the observation, the person responsible for the next step, and the agreed follow-up. Separate completed work from recommendations and work awaiting approval. Keep a record of the eventual resolution rather than allowing an old punch list to remain the only account of the system's condition.

This prevents a future service contractor from having to guess whether a control fault is new, previously investigated, or already assigned to someone else. It also helps the operator explain what changed since the last documented visit.

## Plan the operator handoff

Identify who will demonstrate the normal start and stop sequence and where the approved operating instructions will be kept. Ask how the operator should record an alarm and whom to contact when normal operation changes. Keep the exact displayed fault information for a service request.

Operator instructions are different from technician settings. Do not use a generic online reset sequence or alter drive parameters to make a fault disappear. Programming, electrical work, and protective-control checks belong with appropriately qualified personnel and the instructions for the installed system.

## Turn the inventory into a maintenance plan

Identify the maintenance tasks required by each equipment manual, who is responsible for them, and the access or downtime they require. Confirm the schedule for the actual model and operating conditions. A startup date by itself is not enough to choose a maintenance interval for every component.

Separate operator care, specialist equipment service, hood and duct cleaning, and fire-suppression service in the plan. TCS does not provide hood or duct cleaning or fire-suppression service. Equipment maintenance requests are reviewed by model, scope, access, and scheduling. Keep completed maintenance reports and approved repairs with the original project records.

## A confirmed Queens project, with a clear limit on the evidence

TCS completed startup and commissioning of Gaylord Eliminator hoods with Accurex exhaust fans at JFK's new Terminal 1 in Queens. The [JFK project feature and field photos](/manufacturer-service/gaylord#jfk-terminal-1) document the owner-confirmed assignment.

That completed project is relevant experience. This checklist does not assert which handoff documents, measurements, inspections, or maintenance agreements were delivered for that specific job, and it does not imply airport endorsement.

## Prepare the next service request

- Business address, equipment model and serial number, and the unit designation used on the drawings
- Current symptoms and the original displayed fault information
- Startup, maintenance, and repair records relevant to the complaint
- Open items, previous recommendations, and any work already assigned
- Building contact, roof or mechanical-room access, and when equipment can be released for testing

For a new project, review [kitchen ventilation startup and commissioning](/services/kitchen-ventilation-startup-commissioning). For an existing operating problem, use the [Queens ventilation service page](/services/kitchen-ventilation/queens-ny), [ventilation controls service](/services/ventilation-controls), or [hood performance testing](/services/kitchen-hood-performance-testing) details. For planned visits, send an equipment inventory through the [commercial kitchen maintenance page](/services/commercial-kitchen-maintenance). Scope and scheduling are confirmed before a visit.`,
  faqs: [
    { question: 'What should a kitchen operator retain after ventilation commissioning?', answer: 'Keep the equipment inventory, applicable manuals, available startup and test reports, operating instructions, open-items list, and responsible service contacts. Confirm the documents included in the actual project scope.' },
    { question: 'Does completed startup replace future maintenance?', answer: 'No. Use the installed equipment manuals and operating conditions to define ongoing tasks, responsibilities, access requirements, and service frequency. Retain maintenance and repair records alongside the startup documentation.' },
    { question: 'Does the JFK project feature establish specific test readings or inspection approvals?', answer: 'No. The feature documents the owner-confirmed completed startup and commissioning assignment and supplied field photos. No specific measured readings, inspection approvals, or airport endorsement are claimed.' },
  ],
};
