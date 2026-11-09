import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, TrendingUp, Leaf, CheckCircle2, IndianRupee } from 'lucide-react';
import { CalculationResult } from '../types';

interface SolarCalculatorProps {
  onPreFillInquiry: (capacityKw: number, bill: number, netCost: number) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onPreFillInquiry }) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(4500);
  const [customerType, setCustomerType] = useState<'residential' | 'commercial'>('residential');
  const [roofArea, setRoofArea] = useState<number>(350);

  // Solar calculations based on UPPCL / PVVNL Noida tariffs
  const results: CalculationResult = useMemo(() => {
    const ratePerUnit = customerType === 'residential' ? 7.2 : 8.8;
    const monthlyUnitsConsumed = Math.round(monthlyBill / ratePerUnit);
    
    // In Noida/NCR, 1 kW solar generates ~125 units/month
    let recommendedKw = Math.max(1, Math.round((monthlyUnitsConsumed / 125) * 10) / 10);
    
    // Roof constraint check (approx 85 sq. ft per kW)
    const maxCapacityByRoof = Math.floor(roofArea / 85);
    if (maxCapacityByRoof > 0 && recommendedKw > maxCapacityByRoof) {
      recommendedKw = Math.max(1, maxCapacityByRoof);
    }

    const requiredArea = Math.round(recommendedKw * 85);
    const unitsPerMonth = Math.round(recommendedKw * 125);
    
    // Benchmark cost per kW (Tier-1 ALMM with structure & PVVNL net meter)
    let costPerKw = 60000;
    if (recommendedKw >= 5) costPerKw = 55000;
    if (recommendedKw >= 10) costPerKw = 52000;
    
    const grossCost = Math.round(recommendedKw * costPerKw);
    
    // Central and UP State Subsidy calculation (residential only)
    let central = 0;
    let state = 0;
    if (customerType === 'residential') {
      if (recommendedKw <= 1) {
        central = 30000;
        state = 15000; // UP State: ₹15,000 per kW
      } else if (recommendedKw <= 2) {
        central = 60000;
        state = 30000; // UP State: ₹15,000/kW up to ₹30,000 max
      } else {
        central = 78000; // Central capped at ₹78,000 for 3kW+
        state = 30000; // UP State maximum subsidy is ₹30,000
      }
    }

    const totalSubsidy = central + state; // Cumulative max ₹1,08,000 in Uttar Pradesh
    const netCost = Math.max(0, grossCost - totalSubsidy);
    const monthlySavings = Math.min(monthlyBill, Math.round(unitsPerMonth * ratePerUnit * 0.95));
    const annualSavings = monthlySavings * 12;
    const lifetimeSavings = annualSavings * 25;
    const paybackYears = Math.max(1.8, Math.round((netCost / annualSavings) * 10) / 10);
    const co2OffsetTonsPerYear = Math.round(recommendedKw * 1.3 * 10) / 10;
    const treesEquivalent = Math.round(co2OffsetTonsPerYear * 45);

    return {
      recommendedCapacityKw: recommendedKw,
      requiredAreaSqFt: requiredArea,
      unitsPerMonth,
      grossCost,
      centralSubsidy: central,
      stateSubsidy: state,
      subsidyAmount: totalSubsidy,
      netCost,
      monthlySavings,
      annualSavings,
      lifetimeSavings,
      paybackYears,
      co2OffsetTonsPerYear,
      treesEquivalent
    };
  }, [monthlyBill, customerType, roofArea]);

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3">
            Financial & Energy Estimator
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display mb-4">
            Interactive Rooftop Solar & Subsidy Calculator
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Calibrated with official Noida / UPPCL electricity tariff brackets and direct PM Surya Ghar DBT subsidies.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
              
              {/* Customer Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-3">
                  Connection Category
                </label>
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-200/60 dark:bg-slate-800 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setCustomerType('residential')}
                    className={`py-2.5 px-4 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      customerType === 'residential'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span>Residential (Subsidy Eligible)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCustomerType('commercial')}
                    className={`py-2.5 px-4 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      customerType === 'commercial'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span>Commercial / Industrial</span>
                  </button>
                </div>
              </div>

              {/* Monthly Bill Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
                    Average Monthly Electricity Bill
                  </label>
                  <div className="text-lg font-extrabold text-amber-600 dark:text-amber-400 font-mono-numbers">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </div>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="35000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500 mt-2 font-mono-numbers">
                  <span>₹1,000</span>
                  <span>₹15,000</span>
                  <span>₹35,000+</span>
                </div>
              </div>

              {/* Available Roof Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
                    Available Rooftop Area (Sq. Ft.)
                  </label>
                  <div className="text-lg font-extrabold text-slate-900 dark:text-white font-mono-numbers">
                    {roofArea} sq. ft
                  </div>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500 mt-2 font-mono-numbers">
                  <span>100 sq ft</span>
                  <span>1,000 sq ft</span>
                  <span>2,000+ sq ft</span>
                </div>
              </div>

              {/* System Recommendation Banner */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  Engineered System Capacity for Your Bill:
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono-numbers">
                    {results.recommendedCapacityKw} kW
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    On-Grid Rooftop Solar Plant
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Generates ~{results.unitsPerMonth} units/month · Requires {results.requiredAreaSqFt} sq. ft roof space
                </div>
              </div>

            </div>

            {/* Financial & Environmental Breakdown (Right Column) */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
                  <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                    Financial Summary & Subsidy
                  </div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Payback: ~{results.paybackYears} Years
                  </div>
                </div>

                {/* Investment Table */}
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Approx. Total Project Cost:</span>
                    <span className="font-semibold text-slate-900 dark:text-white font-mono-numbers">
                      ₹{results.grossCost.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {customerType === 'residential' ? (
                    <>
                      <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                        <span>Central PM Surya Ghar (DBT):</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono-numbers">
                          - ₹{results.centralSubsidy.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                        <span>UP State Govt Subsidy (₹15k/kW, Max ₹30k):</span>
                        <span className="font-semibold text-amber-600 dark:text-amber-400 font-mono-numbers">
                          - ₹{results.stateSubsidy.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold text-xs sm:text-sm">
                        <span>Total Combined Subsidy in UP:</span>
                        <span className="font-mono-numbers">
                          - ₹{results.subsidyAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between text-slate-500 text-xs">
                      <span>Accelerated Depreciation (40% Tax Benefit):</span>
                      <span className="font-semibold text-slate-900 dark:text-white">Commercial Tax Credit</span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-baseline">
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      Net Cost to You:
                    </span>
                    <span className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 font-mono-numbers">
                      ₹{results.netCost.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Savings Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 mb-6">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Est. Monthly Savings</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white font-mono-numbers mt-0.5">
                      ₹{results.monthlySavings.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">25-Year Lifetime Savings</div>
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono-numbers mt-0.5">
                      ₹{(results.lifetimeSavings / 100000).toFixed(1)} Lakhs
                    </div>
                  </div>
                </div>

                {/* Green Impact */}
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-6">
                  <Leaf className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>
                    Offsets <strong className="text-slate-700 dark:text-slate-200">{results.co2OffsetTonsPerYear} tons</strong> of CO₂ annually (Equivalent to planting ~{results.treesEquivalent} trees every year).
                  </span>
                </div>
              </div>

              {/* Pre-fill Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onPreFillInquiry(results.recommendedCapacityKw, monthlyBill, results.netCost)}
                  className="w-full py-3.5 px-4 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Lock In This {results.recommendedCapacityKw} kW Quote & Book Survey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-2">
                  Includes Tier-1 ALMM panels, bi-directional net-meter, and official PVVNL liaisoning in Noida.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
