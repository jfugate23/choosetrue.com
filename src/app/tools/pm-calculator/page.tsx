'use client';

import { useState, useMemo } from 'react';

// Password gate — not indexed, not linked, not public
const ACCESS_CODE = 'true2026';

interface EquipmentItem {
  id: string;
  category: string;
  name: string;
  quantity: number;
  perVisit: number;
  frequency: number; // visits per year
  annual: number; // auto-calculated
}

const EQUIPMENT_CATALOG: { category: string; items: { name: string; perVisit: number; frequency: number }[] }[] = [
  {
    category: 'HVAC',
    items: [
      { name: 'RTU 2-5 Ton', perVisit: 350, frequency: 2 },
      { name: 'RTU 5-10 Ton', perVisit: 475, frequency: 2 },
      { name: 'RTU 10-15 Ton', perVisit: 600, frequency: 4 },
      { name: 'RTU 15-25 Ton', perVisit: 875, frequency: 4 },
      { name: 'Split System (2-5 Ton)', perVisit: 300, frequency: 2 },
      { name: 'Mini-Split (per head)', perVisit: 225, frequency: 2 },
      { name: 'Makeup Air Unit (MAU)', perVisit: 500, frequency: 4 },
      { name: 'Upblast Exhaust Fan', perVisit: 250, frequency: 4 },
      { name: 'Utility Exhaust Fan', perVisit: 175, frequency: 2 },
      { name: 'Inline Exhaust Fan', perVisit: 200, frequency: 2 },
    ],
  },
  {
    category: 'Cooking Equipment',
    items: [
      { name: 'Combi Oven (Rational, Alto-Shaam)', perVisit: 600, frequency: 2 },
      { name: 'Convection Oven', perVisit: 300, frequency: 2 },
      { name: 'Fryer (Gas)', perVisit: 275, frequency: 2 },
      { name: 'Fryer (Electric)', perVisit: 250, frequency: 2 },
      { name: 'Griddle / Flat Top', perVisit: 225, frequency: 2 },
      { name: 'Charbroiler', perVisit: 225, frequency: 2 },
      { name: 'Range / Stove (6-burner)', perVisit: 300, frequency: 2 },
      { name: 'Steamer (Boiler-Based)', perVisit: 400, frequency: 3 },
      { name: 'Steamer (Connectionless)', perVisit: 275, frequency: 2 },
      { name: 'Tilt Skillet / Braising Pan', perVisit: 350, frequency: 2 },
      { name: 'Conveyor Oven', perVisit: 450, frequency: 2 },
      { name: 'Deck Pizza Oven', perVisit: 300, frequency: 2 },
    ],
  },
  {
    category: 'Refrigeration',
    items: [
      { name: 'Walk-In Cooler', perVisit: 375, frequency: 4 },
      { name: 'Walk-In Freezer', perVisit: 425, frequency: 4 },
      { name: 'Reach-In Refrigerator (per door)', perVisit: 225, frequency: 2 },
      { name: 'Reach-In Freezer (per door)', perVisit: 250, frequency: 2 },
      { name: 'Prep Table / Sandwich Unit', perVisit: 225, frequency: 2 },
      { name: 'Display Case / Merchandiser', perVisit: 275, frequency: 3 },
      { name: 'Blast Chiller', perVisit: 375, frequency: 2 },
    ],
  },
  {
    category: 'Beverage & Ice',
    items: [
      { name: 'Ice Machine (Cube)', perVisit: 325, frequency: 2 },
      { name: 'Ice Machine (Flake/Nugget)', perVisit: 350, frequency: 2 },
      { name: 'Espresso Machine', perVisit: 400, frequency: 3 },
    ],
  },
  {
    category: 'Warewash',
    items: [
      { name: 'Dishwasher (Door Type)', perVisit: 350, frequency: 2 },
      { name: 'Dishwasher (Conveyor)', perVisit: 550, frequency: 3 },
      { name: 'Dishwasher (Flight Type)', perVisit: 1100, frequency: 4 },
    ],
  },
  {
    category: 'Ventilation & Pollution Control',
    items: [
      { name: 'Kitchen Air Balance (per hood)', perVisit: 1200, frequency: 1 },
      { name: 'ESP Cell Cleaning', perVisit: 500, frequency: 4 },
      { name: 'Ecology Unit Service', perVisit: 450, frequency: 4 },
      { name: 'Carbon Filter Replacement', perVisit: 400, frequency: 3 },
      { name: 'Hood Inspection (per hood)', perVisit: 250, frequency: 4 },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'Steam Table / Hot Well', perVisit: 200, frequency: 2 },
      { name: 'Custom Equipment', perVisit: 0, frequency: 2 },
    ],
  },
];

export default function PMCalculatorPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState(false);

  const [customerName, setCustomerName] = useState('');
  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState<EquipmentItem[]>([]);
  const [bundleDiscount, setBundleDiscount] = useState(10);
  const [tier, setTier] = useState<'basic' | 'standard' | 'premium'>('standard');

  const tierMultiplier = tier === 'basic' ? 1.0 : tier === 'standard' ? 1.15 : 1.35;
  const tierLabel = tier === 'basic' ? 'Basic (PM only)' : tier === 'standard' ? 'Standard (PM + wear parts)' : 'Premium (PM + parts + priority emergency)';

  function tryAccess() {
    if (code === ACCESS_CODE) {
      setAuthenticated(true);
    } else {
      setCodeError(true);
    }
  }

  function addEquipment(categoryIdx: number, itemIdx: number) {
    const cat = EQUIPMENT_CATALOG[categoryIdx];
    const item = cat.items[itemIdx];
    const annual = item.perVisit * item.frequency;
    setEquipment(prev => [...prev, {
      id: `${Date.now()}-${Math.random()}`,
      category: cat.category,
      name: item.name,
      quantity: 1,
      perVisit: item.perVisit,
      frequency: item.frequency,
      annual,
    }]);
  }

  function updateItem(id: string, updates: Partial<EquipmentItem>) {
    setEquipment(prev => prev.map(item => {
      if (item.id !== id) return item;
      const updated = { ...item, ...updates };
      updated.annual = updated.perVisit * updated.frequency * updated.quantity;
      return updated;
    }));
  }

  function removeItem(id: string) {
    setEquipment(prev => prev.filter(item => item.id !== id));
  }

  const totals = useMemo(() => {
    const subtotal = equipment.reduce((s, e) => s + e.annual, 0);
    const tiered = Math.round(subtotal * tierMultiplier);
    const discountAmount = Math.round(tiered * (bundleDiscount / 100));
    const annual = tiered - discountAmount;
    const monthly = Math.round(annual / 12);
    const quarterly = Math.round(annual / 4);
    const totalVisits = equipment.reduce((s, e) => s + e.frequency * e.quantity, 0);
    const totalPieces = equipment.reduce((s, e) => s + e.quantity, 0);
    const costPerVisit = totalVisits > 0 ? Math.round(annual / totalVisits) : 0;

    // Margin estimate (labor cost ~$45/hr loaded, avg 1.5 hrs per visit)
    const laborCostPerVisit = 45 * 1.5;
    const partsEstPerVisit = tier === 'basic' ? 0 : tier === 'standard' ? 25 : 40;
    const costPerVisitEst = laborCostPerVisit + partsEstPerVisit;
    const grossProfit = annual - (costPerVisitEst * totalVisits);
    const grossMargin = annual > 0 ? Math.round((grossProfit / annual) * 100) : 0;

    return { subtotal, tiered, discountAmount, annual, monthly, quarterly, totalVisits, totalPieces, costPerVisit, grossProfit, grossMargin };
  }, [equipment, bundleDiscount, tierMultiplier, tier]);

  const inputClass = 'bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500';

  // Password gate
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
        <div className="bg-zinc-900 rounded-2xl p-8 max-w-sm w-full text-center">
          <h1 className="text-xl font-bold text-white mb-2">PM Pricing Calculator</h1>
          <p className="text-sm text-zinc-400 mb-6">Internal tool — enter access code</p>
          <input
            type="password"
            className={`${inputClass} w-full mb-3`}
            placeholder="Access code"
            value={code}
            onChange={e => { setCode(e.target.value); setCodeError(false); }}
            onKeyDown={e => e.key === 'Enter' && tryAccess()}
          />
          {codeError && <p className="text-red-400 text-xs mb-3">Invalid code</p>}
          <button onClick={tryAccess} className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-lg">
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">PM Agreement Pricing Calculator</h1>
          <p className="text-sm text-zinc-400 mt-1">Internal tool — build and price PM proposals</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Equipment picker */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer info */}
            <div className="bg-zinc-900 rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-amber-400 mb-3">Customer</h3>
              <div className="grid grid-cols-2 gap-3">
                <input className={inputClass} placeholder="Customer / Business Name" value={customerName} onChange={e => setCustomerName(e.target.value)} />
                <input className={inputClass} placeholder="Location / Address" value={location} onChange={e => setLocation(e.target.value)} />
              </div>
            </div>

            {/* Add equipment */}
            <div className="bg-zinc-900 rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-amber-400 mb-3">Add Equipment</h3>
              <div className="space-y-4">
                {EQUIPMENT_CATALOG.map((cat, ci) => (
                  <div key={cat.category}>
                    <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-2">{cat.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item, ii) => (
                        <button
                          key={item.name}
                          onClick={() => addEquipment(ci, ii)}
                          className="text-xs bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-amber-500/30 rounded-lg px-3 py-2 transition-colors"
                        >
                          + {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment list */}
            {equipment.length > 0 && (
              <div className="bg-zinc-900 rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-amber-400 mb-3">Equipment List ({totals.totalPieces} pieces)</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-12 gap-2 text-[10px] text-zinc-500 uppercase tracking-wider px-2">
                    <div className="col-span-4">Equipment</div>
                    <div className="col-span-1 text-center">Qty</div>
                    <div className="col-span-2 text-right">Per Visit</div>
                    <div className="col-span-2 text-center">Visits/Yr</div>
                    <div className="col-span-2 text-right">Annual</div>
                    <div className="col-span-1"></div>
                  </div>
                  {equipment.map(item => (
                    <div key={item.id} className="grid grid-cols-12 gap-2 items-center bg-zinc-800/50 rounded-lg px-2 py-2">
                      <div className="col-span-4">
                        <p className="text-xs text-white">{item.name}</p>
                        <p className="text-[10px] text-zinc-500">{item.category}</p>
                      </div>
                      <div className="col-span-1">
                        <input type="number" min="1" className="bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs text-white w-full text-center" value={item.quantity} onChange={e => updateItem(item.id, { quantity: Math.max(1, Number(e.target.value)) })} />
                      </div>
                      <div className="col-span-2">
                        <input type="number" className="bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs text-white w-full text-right" value={item.perVisit} onChange={e => updateItem(item.id, { perVisit: Number(e.target.value) })} />
                      </div>
                      <div className="col-span-2">
                        <select className="bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-xs text-white w-full text-center" value={item.frequency} onChange={e => updateItem(item.id, { frequency: Number(e.target.value) })}>
                          <option value={1}>1x/yr</option>
                          <option value={2}>2x/yr</option>
                          <option value={3}>3x/yr</option>
                          <option value={4}>4x/yr</option>
                          <option value={6}>6x/yr</option>
                          <option value={12}>Monthly</option>
                        </select>
                      </div>
                      <div className="col-span-2 text-right">
                        <span className="text-xs font-mono text-amber-400">${item.annual.toLocaleString()}</span>
                      </div>
                      <div className="col-span-1 text-right">
                        <button onClick={() => removeItem(item.id)} className="text-zinc-600 hover:text-red-400 text-xs">X</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Pricing summary */}
          <div className="space-y-4">
            {/* Tier selector */}
            <div className="bg-zinc-900 rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-amber-400 mb-3">Agreement Tier</h3>
              <div className="space-y-2">
                {([
                  ['basic', 'Basic', 'PM visits only, no parts', '1.0x'],
                  ['standard', 'Standard', 'PM + wear parts + discounted emergency', '1.15x'],
                  ['premium', 'Premium', 'PM + all parts + priority 4hr emergency', '1.35x'],
                ] as const).map(([val, label, desc, mult]) => (
                  <button
                    key={val}
                    onClick={() => setTier(val)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${tier === val ? 'bg-amber-500/10 border-amber-500/30' : 'bg-zinc-800 border-zinc-700'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${tier === val ? 'text-amber-400' : 'text-zinc-300'}`}>{label}</span>
                      <span className="text-[10px] text-zinc-500">{mult}</span>
                    </div>
                    <p className="text-[10px] text-zinc-500 mt-0.5">{desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Discount */}
            <div className="bg-zinc-900 rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-amber-400 mb-3">Bundle Discount</h3>
              <div className="flex items-center gap-3">
                <input type="range" min="0" max="25" step="5" value={bundleDiscount} onChange={e => setBundleDiscount(Number(e.target.value))} className="flex-1" />
                <span className="text-lg font-bold text-white w-12 text-right">{bundleDiscount}%</span>
              </div>
              <p className="text-[10px] text-zinc-500 mt-1">Typical: 10-15% for full kitchen bundle</p>
            </div>

            {/* Totals */}
            <div className="bg-zinc-900 rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-amber-400 mb-4">Pricing Summary</h3>
              {equipment.length === 0 ? (
                <p className="text-sm text-zinc-500">Add equipment to see pricing</p>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>Base PM subtotal</span>
                    <span>${totals.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-400">
                    <span>{tierLabel}</span>
                    <span>${totals.tiered.toLocaleString()}</span>
                  </div>
                  {bundleDiscount > 0 && (
                    <div className="flex justify-between text-xs text-green-400">
                      <span>Bundle discount ({bundleDiscount}%)</span>
                      <span>-${totals.discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="border-t border-zinc-700 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">Annual Total</span>
                      <span className="text-2xl font-bold text-amber-400">${totals.annual.toLocaleString()}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <div className="bg-zinc-800 rounded-lg p-3 text-center">
                        <p className="text-[10px] text-zinc-500">Monthly</p>
                        <p className="text-lg font-bold">${totals.monthly.toLocaleString()}</p>
                      </div>
                      <div className="bg-zinc-800 rounded-lg p-3 text-center">
                        <p className="text-[10px] text-zinc-500">Quarterly</p>
                        <p className="text-lg font-bold">${totals.quarterly.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="border-t border-zinc-700 pt-3 space-y-2">
                    <div className="flex justify-between text-xs text-zinc-400">
                      <span>Total equipment pieces</span>
                      <span>{totals.totalPieces}</span>
                    </div>
                    <div className="flex justify-between text-xs text-zinc-400">
                      <span>Total visits/year</span>
                      <span>{totals.totalVisits}</span>
                    </div>
                    <div className="flex justify-between text-xs text-zinc-400">
                      <span>Avg revenue per visit</span>
                      <span>${totals.costPerVisit}</span>
                    </div>
                  </div>

                  {/* Margin estimate (your eyes only) */}
                  <div className="border-t border-zinc-700 pt-3">
                    <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-2">Margin Estimate (internal)</p>
                    <div className="flex justify-between text-xs text-zinc-400">
                      <span>Est. gross profit</span>
                      <span className="text-green-400">${totals.grossProfit.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs text-zinc-400">
                      <span>Est. gross margin</span>
                      <span className={totals.grossMargin >= 60 ? 'text-green-400' : totals.grossMargin >= 45 ? 'text-amber-400' : 'text-red-400'}>{totals.grossMargin}%</span>
                    </div>
                    <p className="text-[10px] text-zinc-600 mt-1">Based on $45/hr loaded labor, 1.5 hrs/visit avg</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
