import React from 'react';
import { ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { solarImages } from '../imageAssets';

interface HeroProps {
  onOpenSurvey: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSurvey, onScrollToCalculator }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed clean metadata kicker (No pill enclosures) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-4 tracking-wide uppercase">
              <span>Noida Sector 15</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">/</span>
              <span>Empanelled System Integrator</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">/</span>
              <span>PM Surya Ghar Vendor</span>
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] text-balance mb-6 font-display">
              Turnkey Rooftop Solar Systems for Homes & Businesses in Noida NCR.
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Eliminate heavy power tariffs with high-efficiency Tier-1 solar installations. Avail <span className="font-semibold text-slate-900 dark:text-white">up to ₹1,08,000 cumulative subsidy</span> (₹78,000 Central DBT under PM Surya Ghar + ₹30,000 UP State Government subsidy) with turnkey PVVNL net-metering in Noida.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Tier-1 ALMM TopCon & Mono-PERC Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Up to ₹1,08,000 Total Subsidy (Central + UP State)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>25-Year Linear Performance Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Local Noida Sector 15 Engineering & AMC</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenSurvey}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Request Free Site Feasibility Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Calculate Subsidy & Savings</span>
              </button>
            </div>

            {/* Trust note */}
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>Certified MNRE Partner & PVVNL Empanelled Rooftop Installer</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Image */}
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 group">
              <img 
                src={solarImages.heroRooftop} 
                alt="Global Energy Systems commercial and residential rooftop solar installation in Noida"
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                <div className="text-white">
                  <div className="text-xs uppercase font-medium text-amber-400 tracking-wider mb-1">
                    Featured Installation
                  </div>
                  <div className="text-lg font-bold">High-Yield Rooftop Solar Array</div>
                  <div className="text-xs text-slate-300 mt-1">
                    Monocrystalline ALMM panels with real-time remote generation telemetry
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI Trust Metric Strip in a Full-Width Row Below Hero Split */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono-numbers">
              ₹1,08,000
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Max Combined Subsidy in UP (Central + State)
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono-numbers">
              3.8 MW+
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Solar Installed across Noida & Western UP
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono-numbers">
              25 Years
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Module Performance Warranty Guaranteed
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono-numbers">
              100% Turnkey
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              PVVNL Net-Meter & Subsidies Managed by Us
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
