import React from 'react';
import { Sun, Building2, BatteryCharging, Wrench, ShieldCheck, Flame, ArrowUpRight } from 'lucide-react';
import { solarImages } from '../imageAssets';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3">
            End-to-End System Integration · Noida Sector 15
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display mb-4">
            Sustainable Energy Solutions & Solar Services
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            From luxury independent villas in Noida to multi-megawatt industrial manufacturing plants across Gautam Buddha Nagar.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Residential Rooftop Solar (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between group">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-2">
                    01. Residential Solar
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Rooftop Solar & Pergola Solutions
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Elevated structural designs that preserve your usable terrace space while generating 100% free electricity. Approved for direct DBT subsidies under PM Surya Ghar Yojana.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6">
                    <li>· Custom elevated pergola structures with 7-9 ft clearance</li>
                    <li>· Bi-facial TopCon glass-to-glass panels for higher output</li>
                    <li>· Turnkey PVVNL net-metering synchronization</li>
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() => onSelectService('Residential Rooftop Solar')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>Request Residential Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="relative h-64 sm:h-auto overflow-hidden">
                <img 
                  src={solarImages.residentialVilla} 
                  alt="Elevated pergola residential rooftop solar in Noida"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Commercial & Industrial Solar (1 col) */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={solarImages.commercialInstall} 
                alt="Commercial and industrial solar plant in Noida industrial sectors"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-2">
                  02. Commercial & Industrial
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  High-Capacity Solar Plants
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  CAPEX & OPEX solar deployments for factories, corporate towers, and cold storages in Noida Phase-2, Sector 63, and Greater Noida.
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 mb-4">
                  <div>· 40% Accelerated Depreciation tax benefit</div>
                  <div>· High ROI payback within 3 to 3.5 years</div>
                </div>
              </div>
              <button
                onClick={() => onSelectService('Commercial & Industrial Solar')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
              >
                <span>Industrial Assessment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Hybrid Solar & Battery Energy Storage (1 col) */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-2">
                03. Energy Storage Systems
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Hybrid & Off-Grid Solar
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Smart inverters paired with Lithium Ferrophosphate (LiFePO4) or heavy-duty tubular batteries for 100% blackout protection during grid outages in Noida.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li>· Microsecond grid-to-battery transfer time</li>
                <li>· Zero diesel generator pollution and noise</li>
                <li>· Smart export/import power optimization</li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
              <button
                onClick={() => onSelectService('Hybrid & Battery Storage')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
              >
                <span>Explore Hybrid Systems</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Comprehensive AMC & Solar Panel Cleaning (1 col) */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between group">
            <div className="relative h-44 overflow-hidden">
              <img 
                src={solarImages.technicianAudit} 
                alt="Solar maintenance engineer testing inverter in Noida"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-2">
                  04. Operations & Maintenance
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Solar AMC & Cleaning Services
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Dust in NCR can degrade solar generation by 15-25%. We offer scheduled high-pressure de-mineralized cleaning, thermal hotspot analysis, and inverter troubleshooting.
                </p>
              </div>
              <button
                onClick={() => onSelectService('Solar AMC & Cleaning Services')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
              >
                <span>Book Service Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: Solar Water Heaters & Thermal (1 col) */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-2">
                05. Thermal Solutions
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Solar Water Heaters (ETC / FPC)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                High-efficiency Evacuated Tube Collector (ETC) and Flat Plate Collector (FPC) systems for domestic villas, guest houses, and commercial kitchens across Noida.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li>· Capacities from 100 LPD to 5,000+ LPD</li>
                <li>· Heavy-duty stainless steel SS316 inner tanks</li>
                <li>· Saves up to 70% on winter water heating geyser bills</li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
              <button
                onClick={() => onSelectService('Solar Water Heaters')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
              >
                <span>Inquire Water Heaters</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
