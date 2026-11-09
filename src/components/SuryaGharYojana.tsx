import React, { useState } from 'react';
import { Award, FileText, Check, Shield, HelpCircle, ArrowRight, Zap } from 'lucide-react';

interface SuryaGharProps {
  onSelectCapacityForQuote: (kw: number) => void;
}

export const SuryaGharYojana: React.FC<SuryaGharProps> = ({ onSelectCapacityForQuote }) => {
  const [activeStep, setActiveStep] = useState(0);

  const subsidySlabs = [
    {
      capacity: '1 kW System',
      recommendedFor: 'Small Homes / 1-2 BHK',
      unitsGenerated: '120 - 140 Units/Month',
      roofArea: '100 - 120 sq. ft',
      centralSubsidy: '₹30,000',
      upStateSubsidy: '₹15,000',
      totalCombinedSubsidy: '₹45,000',
      approxGrossCost: '₹60,000 - ₹65,000',
      netCustomerCost: '₹15,000 - ₹20,000',
      kwNumber: 1,
      tag: 'Entry Tier'
    },
    {
      capacity: '2 kW System',
      recommendedFor: 'Medium Homes / 2-3 BHK with AC',
      unitsGenerated: '240 - 280 Units/Month',
      roofArea: '180 - 200 sq. ft',
      centralSubsidy: '₹60,000',
      upStateSubsidy: '₹30,000',
      totalCombinedSubsidy: '₹90,000',
      approxGrossCost: '₹1,15,000 - ₹1,25,000',
      netCustomerCost: '₹25,000 - ₹35,000',
      kwNumber: 2,
      tag: 'Most Popular'
    },
    {
      capacity: '3 kW System',
      recommendedFor: 'Independent Villas & Duplexes',
      unitsGenerated: '360 - 420 Units/Month',
      roofArea: '270 - 300 sq. ft',
      centralSubsidy: '₹78,000',
      upStateSubsidy: '₹30,000 (Max)',
      totalCombinedSubsidy: '₹1,08,000',
      approxGrossCost: '₹1,65,000 - ₹1,80,000',
      netCustomerCost: '₹57,000 - ₹72,000',
      kwNumber: 3,
      tag: 'Maximum UP Subsidy'
    },
    {
      capacity: '5 kW to 10 kW',
      recommendedFor: 'Large Bungalows / Commercial High-Bill',
      unitsGenerated: '600 - 1,300 Units/Month',
      roofArea: '450 - 900 sq. ft',
      centralSubsidy: '₹78,000 (Capped)',
      upStateSubsidy: '₹30,000 (Capped)',
      totalCombinedSubsidy: '₹1,08,000',
      approxGrossCost: '₹2,60,000 - ₹5,00,000',
      netCustomerCost: 'From ₹1,52,000',
      kwNumber: 5,
      tag: 'High Capacity'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Free On-Site Rooftop Survey in Noida',
      desc: 'Our certified solar engineers from Noida Sector 15 inspect your terrace, measure shadow-free azimuth angle, and determine structural feasibility for RCC or pergola mounts.'
    },
    {
      step: '02',
      title: 'National Portal Registration & PVVNL Sanction',
      desc: 'We register your application on the official PM Surya Ghar National Portal and obtain technical feasibility clearance (NOC) from Paschimanchal Vidyut Vitran Nigam Ltd (PVVNL Noida).'
    },
    {
      step: '03',
      title: 'Turnkey ALMM & DCR Certified Installation',
      desc: 'Complete deployment of government-mandated Tier-1 domestic cell panels (DCR), high-efficiency grid-tie inverters, lightning arrestors, and chemical earthing pits.'
    },
    {
      step: '04',
      title: 'Net-Meter Commissioning & DBT Subsidy Credit',
      desc: 'DISCOM officials inspect the plant and install the bi-directional net-meter. Once the commissioning report is uploaded, the subsidy is credited directly to your bank account via DBT.'
    }
  ];

  const requiredDocuments = [
    'Recent Electricity Bill of Noida/UPPCL (Consumer No. / Account ID)',
    'Aadhaar Card of Electricity Bill Holder',
    'Bank Account Details / Cancelled Cheque (for direct DBT subsidy transfer)',
    'Passport Size Photo of the Applicant',
    'Terrace Ownership / Property Document proof'
  ];

  return (
    <section id="pm-surya-ghar" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3">
            Government of India Initiative · PM Surya Ghar
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display mb-4">
            PM Surya Ghar & UP State Solar Subsidy in Noida Sector 15
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            In Uttar Pradesh, homeowners get a <strong className="text-slate-900 dark:text-white">double subsidy benefit</strong>: up to ₹78,000 from the Central Govt plus an additional top-up of ₹15,000 per kW (up to ₹30,000) from the UP State Govt. The cumulative maximum subsidy in UP is <span className="font-extrabold text-emerald-600 dark:text-emerald-400">₹1,08,000</span>!
          </p>

          {/* UP Subsidy Highlight Callout Strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 py-2.5 px-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200">
            <span className="font-bold">UP State Govt Top-Up:</span>
            <span>₹15,000 / kW (Capped at ₹30,000)</span>
            <span aria-hidden="true">·</span>
            <span className="font-bold">Central PM Surya Ghar:</span>
            <span>Up to ₹78,000 DBT</span>
            <span aria-hidden="true">·</span>
            <span className="font-extrabold text-emerald-700 dark:text-emerald-300">Total in UP: ₹1,08,000</span>
          </div>
        </div>

        {/* Subsidy Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {subsidySlabs.map((slab) => (
            <div 
              key={slab.capacity}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-all bg-white dark:bg-slate-900 ${
                slab.tag === 'Maximum UP Subsidy' || slab.tag === 'Most Popular'
                  ? 'border-amber-400 dark:border-amber-500 shadow-md ring-1 ring-amber-400/20' 
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  <span>{slab.tag}</span>
                  <span className="text-amber-600 dark:text-amber-400">{slab.capacity}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {slab.capacity}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {slab.recommendedFor}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>Central DBT Subsidy:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{slab.centralSubsidy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UP State Govt Subsidy:</span>
                    <span className="font-semibold text-amber-600 dark:text-amber-400">{slab.upStateSubsidy}</span>
                  </div>
                  <div className="flex justify-between p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold">
                    <span>Total UP Subsidy:</span>
                    <span>{slab.totalCombinedSubsidy}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Monthly Generation:</span>
                    <span className="font-medium text-slate-900 dark:text-white">{slab.unitsGenerated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Roof Area Needed:</span>
                    <span className="font-medium text-slate-900 dark:text-white">{slab.roofArea}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Gross Cost:</span>
                    <span>{slab.approxGrossCost}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white">
                    <span>Net Cost to You:</span>
                    <span className="text-amber-600 dark:text-amber-400">{slab.netCustomerCost}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onSelectCapacityForQuote(slab.kwNumber)}
                  className="w-full py-2.5 px-3 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 dark:bg-amber-400 dark:hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Apply for {slab.capacity}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Turnkey Process Container */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 lg:p-10 mb-16 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-semibold uppercase text-amber-600 dark:text-amber-400">
                Zero Paperwork Hassle For You
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
                How We Deliver Your PM Surya Ghar Installation
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Full compliance with MNRE ALMM guidelines</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((ws, idx) => (
              <div 
                key={ws.step}
                className="relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-amber-400/40 dark:text-amber-400/30 font-mono-numbers mb-3">
                    {ws.step}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {ws.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Checklist & Local Assurance Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Documents Required For PM Surya Ghar Yojana in Noida
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Keep these documents handy. Our Noida Sector 15 team will digitize, upload, and format them for the National Portal:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
              {requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-amber-500/5 dark:bg-amber-400/5 border border-amber-500/20 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-2">
                <Award className="w-4 h-4" />
                <span>Noida Empanelled Vendor</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Global Energy Systems Noida Sector 15
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We are physically located in Sector 15 Noida. Unlike out-of-station online portals, we provide immediate on-site visits, quick PVVNL coordination, and rapid after-sales support.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">Direct Helpline:</span>
              <a href="tel:+919810425005" className="text-xs font-bold text-slate-900 dark:text-white hover:text-amber-600">
                +91 98104 25005
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
