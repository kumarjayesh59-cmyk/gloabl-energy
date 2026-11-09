import React, { useState } from 'react';
import { MapPin, Zap, Award, CheckCircle2 } from 'lucide-react';
import { ProjectCaseStudy } from '../types';
import { solarImages } from '../imageAssets';

export const ProjectShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'hybrid'>('all');

  const caseStudies: ProjectCaseStudy[] = [
    {
      id: 'noida-sec-15-villa',
      title: '10 kW Elevated Solar Pergola on Luxury Villa',
      location: 'Sector 15, Noida',
      capacityKw: '10 kW',
      category: 'residential',
      modules: 'Waaree 545W Mono PERC Bi-facial (ALMM)',
      inverter: 'Growatt 10kW 3-Phase On-Grid Smart Inverter',
      monthlySavings: '₹11,400 / month',
      subsidyReceived: '₹1,08,000 Total Subsidy (Central DBT + UP State) Credited',
      image: solarImages.residentialVilla,
      summary: 'Elevated 8.5-ft hot-dip galvanized pergola allowing full usable terrace garden for the family while reducing monthly electricity bill from ₹12,800 to under ₹1,400.',
      features: [
        'Net-metered with PVVNL Noida Division',
        '8.5-foot high clearance pergola structure',
        'Zero shadow loss during peak solar hours'
      ]
    },
    {
      id: 'noida-sec-62-commercial',
      title: '75 kW Industrial Factory Rooftop Solar Plant',
      location: 'Sector 62, Noida Industrial Area',
      capacityKw: '75 kW',
      category: 'commercial',
      modules: 'Tata Power Solar 550W DCR Modules',
      inverter: 'Sungrow 80kW Commercial Inverter with Scada',
      monthlySavings: '₹84,000 / month',
      image: solarImages.commercialInstall,
      summary: 'Turnkey industrial EPC installation over metal trapezoidal roof. Provided 40% accelerated depreciation tax offset and slashed peak diesel generator run-time.',
      features: [
        'Payback achieved in 3.1 years',
        'Online cloud monitoring for facility engineers',
        'Walkway safety lines & lifelines installed'
      ]
    },
    {
      id: 'noida-sec-44-home',
      title: '5 kW Grid-Tied Residential Rooftop System',
      location: 'Sector 44, Noida',
      capacityKw: '5 kW',
      category: 'residential',
      modules: 'Adani Solar 540W TopCon Glass-to-Glass',
      inverter: 'Havells 5kW Single-Phase Smart Inverter',
      monthlySavings: '₹5,800 / month',
      subsidyReceived: '₹1,08,000 Combined Subsidy (Central + UP State) Credited',
      image: solarImages.heroRooftop,
      summary: 'Independent home installation commissioned within 21 days from National Portal registration to PVVNL bi-directional meter activation.',
      features: [
        'PM Surya Ghar National Portal registered',
        'Double chemical earthing with copper strip',
        '25-year 80% linear generation warranty'
      ]
    },
    {
      id: 'gr-noida-hybrid',
      title: '15 kW Smart Hybrid Solar with Lithium Storage',
      location: 'Greater Noida West',
      capacityKw: '15 kW',
      category: 'hybrid',
      modules: 'Vikram Solar 550W Tier-1 Modules',
      inverter: 'Deye 12kW Hybrid Inverter + 15kWh LiFePO4',
      monthlySavings: '₹14,500 / month',
      image: solarImages.technicianAudit,
      summary: 'Complete off-grid resilience during summer grid fluctuations. Powers 3 air conditioners and critical domestic equipment without any interruption.',
      features: [
        '15kWh Lithium battery bank with 6,000+ cycles',
        'Microsecond auto-switchover (<10ms)',
        'Full mobile app real-time telemetry'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
              Proven Track Record in Gautam Buddha Nagar
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Completed Installations & Case Studies
            </h2>
          </div>

          {/* Interactive filter controls (allowed as functional button elements) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('residential')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeFilter === 'residential'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Residential Villas
            </button>
            <button
              onClick={() => setActiveFilter('commercial')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeFilter === 'commercial'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Commercial / Industrial
            </button>
            <button
              onClick={() => setActiveFilter('hybrid')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeFilter === 'hybrid'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Hybrid Storage
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.location}</span>
                </div>
                <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 px-3 py-1 rounded-md text-xs font-bold font-mono-numbers">
                  {project.capacityKw} Plant
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Quantitative proof badges */}
                  <div className="grid grid-cols-2 gap-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 mb-4 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Monthly Savings</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono-numbers">{project.monthlySavings}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Modules Installed</span>
                      <span className="font-medium text-slate-800 dark:text-slate-200 truncate block">{project.modules}</span>
                    </div>
                  </div>

                  {project.subsidyReceived && (
                    <div className="text-xs text-amber-700 dark:text-amber-400 font-medium mb-3 flex items-center gap-1.5">
                      <Award className="w-4 h-4 shrink-0" />
                      <span>{project.subsidyReceived}</span>
                    </div>
                  )}

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
