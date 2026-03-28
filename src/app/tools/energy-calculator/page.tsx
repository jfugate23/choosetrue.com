'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data';

// NJ climate defaults
const DEFAULTS = {
  electricRate: 0.17,
  gasRate: 1.10,
  operatingHours: 14,
  heatingMonths: 7,
  coolingMonths: 4,
  winterDeltaT: 35,
  summerDeltaT: 15,
  furnaceEfficiency: 80,
  seerRating: 12,
};

const HOOD_PRESETS = [
  { label: '4\' hood (~1,000 CFM)', cfm: 1000, hp: 0.5 },
  { label: '6\' hood (~1,500 CFM)', cfm: 1500, hp: 0.75 },
  { label: '8\' hood (~2,000 CFM)', cfm: 2000, hp: 1.0 },
  { label: '10\' hood (~2,750 CFM)', cfm: 2750, hp: 1.5 },
  { label: '12\' hood (~3,300 CFM)', cfm: 3300, hp: 2.0 },
  { label: '14\' hood (~4,000 CFM)', cfm: 4000, hp: 2.0 },
  { label: '16\' hood (~5,000 CFM)', cfm: 5000, hp: 3.0 },
  { label: 'Custom', cfm: 0, hp: 0 },
];

const SCENARIOS = [
  { label: 'MAU not working at all', pct: 0.0 },
  { label: 'MAU significantly low (50%)', pct: 0.50 },
  { label: 'MAU slightly low (20%)', pct: 0.80 },
];

export default function EnergyCalculatorPage() {
  const [preset, setPreset] = useState(3); // default 10' hood
  const [customCfm, setCustomCfm] = useState(2750);
  const [customHp, setCustomHp] = useState(1.5);
  const [operatingHours, setOperatingHours] = useState(DEFAULTS.operatingHours);
  const [electricRate, setElectricRate] = useState(DEFAULTS.electricRate);
  const [gasRate, setGasRate] = useState(DEFAULTS.gasRate);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [heatingMonths, setHeatingMonths] = useState(DEFAULTS.heatingMonths);
  const [coolingMonths, setCoolingMonths] = useState(DEFAULTS.coolingMonths);
  const [winterDeltaT, setWinterDeltaT] = useState(DEFAULTS.winterDeltaT);
  const [summerDeltaT, setSummerDeltaT] = useState(DEFAULTS.summerDeltaT);
  const [furnaceEff, setFurnaceEff] = useState(DEFAULTS.furnaceEfficiency);
  const [seer, setSeer] = useState(DEFAULTS.seerRating);

  const selectedPreset = HOOD_PRESETS[preset];
  const exhaustCfm = selectedPreset.label === 'Custom' ? customCfm : selectedPreset.cfm;
  const fanHp = selectedPreset.label === 'Custom' ? customHp : selectedPreset.hp;

  const results = useMemo(() => {
    const heatingDays = heatingMonths * 30;
    const coolingDays = coolingMonths * 30;
    const heatingHrs = operatingHours * heatingDays;
    const coolingHrs = operatingHours * coolingDays;
    const fanHrsYear = operatingHours * 365;
    const fanKW = fanHp * 0.746;
    const fanCostYear = fanKW * fanHrsYear * electricRate;

    return SCENARIOS.map(scenario => {
      const supplyCfm = Math.round(exhaustCfm * scenario.pct);
      const infiltration = exhaustCfm - supplyCfm;

      // Heating: outside air sucked in through doors, building HVAC heats it
      const heatBTUhr = 1.08 * infiltration * winterDeltaT;
      const heatTherms = (heatBTUhr * heatingHrs) / 100000 / (furnaceEff / 100);
      const heatCost = heatTherms * gasRate;

      // Cooling: outside air sucked in, building AC cools it
      const coolBTUhr = 1.08 * infiltration * summerDeltaT;
      const coolKWh = (coolBTUhr * coolingHrs) / (seer * 1000);
      const coolCost = coolKWh * electricRate;

      const totalWaste = heatCost + coolCost;
      const paybackMonths = totalWaste > 0 ? Math.round((1200 / totalWaste) * 12) : 0;

      return {
        ...scenario,
        supplyCfm,
        infiltration,
        heatCost: Math.round(heatCost),
        coolCost: Math.round(coolCost),
        totalWaste: Math.round(totalWaste),
        paybackMonths,
        fanCostYear: Math.round(fanCostYear),
      };
    });
  }, [exhaustCfm, fanHp, operatingHours, electricRate, gasRate, heatingMonths, coolingMonths, winterDeltaT, summerDeltaT, furnaceEff, seer]);

  const inputClass = 'w-full bg-navy-50 border border-white/10 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors';
  const labelClass = 'block text-xs text-slate-400 mb-1';

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12">
          <Link href="/services/kitchen-ventilation" className="text-slate-500 text-sm hover:text-amber-400 transition-colors">&larr; Kitchen Ventilation Service</Link>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mt-6 mb-3">Free Tool</p>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">Kitchen Ventilation Energy Waste Calculator</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Find out how much money your kitchen is losing through unbalanced ventilation. Enter your hood size and utility rates — we&apos;ll show you the annual waste.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Input panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-amber-400">Your Kitchen</h3>

              <div>
                <label className={labelClass}>Hood Size</label>
                <select className={inputClass} value={preset} onChange={e => setPreset(Number(e.target.value))}>
                  {HOOD_PRESETS.map((p, i) => <option key={i} value={i}>{p.label}</option>)}
                </select>
              </div>

              {selectedPreset.label === 'Custom' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Exhaust CFM</label>
                    <input type="number" inputMode="decimal" className={inputClass} value={customCfm || ''} onChange={e => setCustomCfm(Number(e.target.value))} />
                  </div>
                  <div>
                    <label className={labelClass}>Fan HP</label>
                    <input type="number" inputMode="decimal" step="0.25" className={inputClass} value={customHp || ''} onChange={e => setCustomHp(Number(e.target.value))} />
                  </div>
                </div>
              )}

              <div>
                <label className={labelClass}>Hours/Day Kitchen Operates</label>
                <input type="number" inputMode="decimal" className={inputClass} value={operatingHours} onChange={e => setOperatingHours(Number(e.target.value))} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Electric ($/kWh)</label>
                  <input type="number" inputMode="decimal" step="0.01" className={inputClass} value={electricRate} onChange={e => setElectricRate(Number(e.target.value))} />
                </div>
                <div>
                  <label className={labelClass}>Gas ($/therm)</label>
                  <input type="number" inputMode="decimal" step="0.01" className={inputClass} value={gasRate} onChange={e => setGasRate(Number(e.target.value))} />
                </div>
              </div>

              <button onClick={() => setShowAdvanced(!showAdvanced)} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                {showAdvanced ? 'Hide' : 'Show'} advanced settings
              </button>

              {showAdvanced && (
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                  <div>
                    <label className={labelClass}>Heating Months</label>
                    <input type="number" className={inputClass} value={heatingMonths} onChange={e => setHeatingMonths(Number(e.target.value))} />
                  </div>
                  <div>
                    <label className={labelClass}>Cooling Months</label>
                    <input type="number" className={inputClass} value={coolingMonths} onChange={e => setCoolingMonths(Number(e.target.value))} />
                  </div>
                  <div>
                    <label className={labelClass}>Winter Temp Diff (°F)</label>
                    <input type="number" className={inputClass} value={winterDeltaT} onChange={e => setWinterDeltaT(Number(e.target.value))} />
                  </div>
                  <div>
                    <label className={labelClass}>Summer Temp Diff (°F)</label>
                    <input type="number" className={inputClass} value={summerDeltaT} onChange={e => setSummerDeltaT(Number(e.target.value))} />
                  </div>
                  <div>
                    <label className={labelClass}>Furnace Efficiency %</label>
                    <input type="number" className={inputClass} value={furnaceEff} onChange={e => setFurnaceEff(Number(e.target.value))} />
                  </div>
                  <div>
                    <label className={labelClass}>AC SEER</label>
                    <input type="number" className={inputClass} value={seer} onChange={e => setSeer(Number(e.target.value))} />
                  </div>
                </div>
              )}
            </div>

            {/* How it works */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-amber-400 mb-3">How This Works</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your exhaust hood pulls air out of the kitchen. The makeup air unit (MAU) is supposed to replace it with tempered air. When the MAU can&apos;t keep up, the building goes under negative pressure and sucks unconditioned outside air in through every door, crack, and gap. Your building HVAC has to heat or cool all of that air — every hour the hood is running.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mt-2">
                Formula: BTU/hr = 1.08 × Infiltration CFM × Temperature Difference
              </p>
            </div>
          </div>

          {/* Results panel */}
          <div className="lg:col-span-3 space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-amber-400">Your {exhaustCfm.toLocaleString()} CFM Exhaust Hood</h3>
                <span className="text-xs text-slate-500">{operatingHours} hrs/day, 365 days/yr</span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Three scenarios showing what happens when your makeup air system falls behind:
              </p>

              <div className="space-y-4">
                {results.map((r, i) => (
                  <div key={i} className={`rounded-xl p-5 border ${i === 0 ? 'bg-red-500/5 border-red-500/20' : i === 1 ? 'bg-amber-500/5 border-amber-500/20' : 'bg-white/[0.02] border-white/10'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold">{r.label}</h4>
                      <span className="text-xs text-slate-500">
                        Supply: {r.supplyCfm.toLocaleString()} CFM
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mb-3">
                      {r.infiltration.toLocaleString()} CFM of unconditioned outside air sucked in through doors and gaps — every hour the hood runs.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-3">
                      <div className="bg-navy-300/50 rounded-lg p-3 text-center">
                        <p className="text-[10px] text-slate-500">Heating Waste</p>
                        <p className="text-base font-bold text-white">${r.heatCost.toLocaleString()}</p>
                        <p className="text-[10px] text-slate-500">/year</p>
                      </div>
                      <div className="bg-navy-300/50 rounded-lg p-3 text-center">
                        <p className="text-[10px] text-slate-500">Cooling Waste</p>
                        <p className="text-base font-bold text-white">${r.coolCost.toLocaleString()}</p>
                        <p className="text-[10px] text-slate-500">/year</p>
                      </div>
                      <div className={`rounded-lg p-3 text-center ${r.totalWaste > 2000 ? 'bg-red-500/10' : r.totalWaste > 500 ? 'bg-amber-500/10' : 'bg-white/5'}`}>
                        <p className="text-[10px] text-slate-500">Total Waste</p>
                        <p className={`text-base font-bold ${r.totalWaste > 2000 ? 'text-red-400' : r.totalWaste > 500 ? 'text-amber-400' : 'text-white'}`}>
                          ${r.totalWaste.toLocaleString()}
                        </p>
                        <p className="text-[10px] text-slate-500">/year</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Payback on a $1,200 air balance:</span>
                      <span className={`font-semibold ${r.paybackMonths <= 6 ? 'text-green-400' : r.paybackMonths <= 12 ? 'text-amber-400' : 'text-slate-300'}`}>
                        {r.paybackMonths < 1 ? '< 1 month' : `${r.paybackMonths} months`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fan energy */}
            {results[0]?.fanCostYear > 0 && (
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-amber-400 mb-3">Additional Savings: Demand Control Ventilation</h3>
                <p className="text-xs text-slate-400 mb-4">
                  Your exhaust fan runs at full speed all day — even when the kitchen isn&apos;t cooking. A demand-controlled ventilation (DCV) upgrade uses sensors to slow the fan during idle periods, saving 30-60% of fan energy.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/[0.03] rounded-lg p-4 text-center">
                    <p className="text-[10px] text-slate-500">Current Fan Energy Cost</p>
                    <p className="text-lg font-bold">${results[0].fanCostYear.toLocaleString()}/yr</p>
                    <p className="text-[10px] text-slate-500">{fanHp} HP × {operatingHours} hrs/day</p>
                  </div>
                  <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4 text-center">
                    <p className="text-[10px] text-slate-500">DCV Savings Potential</p>
                    <p className="text-lg font-bold text-green-400">
                      ${Math.round(results[0].fanCostYear * 0.30).toLocaleString()}-${Math.round(results[0].fanCostYear * 0.60).toLocaleString()}/yr
                    </p>
                    <p className="text-[10px] text-slate-500">30-60% reduction</p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="glass-card rounded-2xl p-6 bg-amber-500/5 border-amber-500/20">
              <h3 className="text-lg font-semibold mb-2">Want to know your exact numbers?</h3>
              <p className="text-sm text-slate-400 mb-4">
                This calculator uses estimates. A real air balance with VelGrid readings tells you exactly how much your system is out of spec — and exactly how much you&apos;re wasting. One visit. Written report. No guesswork.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/schedule-service" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold text-sm px-6 py-3 rounded-xl transition-all">
                  Schedule an Air Balance <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={COMPANY.phoneHref} className="flex items-center justify-center gap-2 border border-white/10 hover:border-amber-500/30 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all">
                  <Phone className="w-4 h-4 text-amber-400" /> {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
