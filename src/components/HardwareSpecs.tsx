import React from 'react';
import { ShieldCheck, Cpu, Zap, Wind, Layers, Activity } from 'lucide-react';

export const HardwareSpecs: React.FC = () => {
  const specs = [
    {
      title: 'Tier-1 ALMM & DCR Modules',
      brand: 'Waaree / Adani / Tata Power',
      description: 'Ultra-high efficiency (22.5%+) Mono PERC and N-Type TopCon bi-facial solar modules with zero PID and anti-reflective coated tempered glass.',
      highlights: ['25-Year 80% Output Warranty', 'MNRE ALMM Approved', 'High Low-Light Performance']
    },
    {
      title: 'Smart On-Grid Inverters',
      brand: 'Growatt / Sungrow / Solis',
      description: 'Dual MPPT inverters with 98.6% peak European efficiency, built-in DC disconnect switches, and real-time smartphone telemetry apps.',
      highlights: ['IP65 Weatherproof Enclosure', 'Wi-Fi / 4G Remote Monitoring', '10-Year Warranty Available']
    },
    {
      title: 'Heavy Structural Fabrication',
      brand: 'Hot-Dip Galvanized Iron (HDGI)',
      description: 'Engineered mounting frames with 80+ micron zinc coating, grade 304 stainless steel fasteners, designed to withstand up to 150 km/h wind loads.',
      highlights: ['Custom Pergola & Shed Options', 'Zero Terrace Water Leakage', 'Rust Resistant for 30+ Years']
    },
    {
      title: 'Comprehensive Surge Protection',
      brand: 'Schneider / Phoenix Contact SPDs',
      description: 'Dedicated ACDB and DCDB distribution boxes with MCBs, Type-II surge protection devices (SPDs), and dual chemical earthing pits for complete safety.',
      highlights: ['Copper Earthing Rods & Bentonite', 'Lightning Arrestor (ESE Type)', 'Protection Against High Voltage Grid Surges']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            Engineering Excellence & Safety
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display mb-4">
            Industrial-Grade Hardware Specifications
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            We refuse to compromise on cheap unbranded components. Every system installed in Noida is engineered for a 25-year operational lifecycle.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div>
                <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-1">
                  {item.brand}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-500"></span>
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
