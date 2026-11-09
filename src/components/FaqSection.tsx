import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I receive the ₹1,08,000 cumulative subsidy in Uttar Pradesh?',
      answer: 'In Uttar Pradesh, solar rooftop beneficiaries receive two separate government subsidies: 1) Central PM Surya Ghar DBT subsidy of up to ₹78,000 (₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW+), plus 2) UP State Government Top-Up subsidy of ₹15,000 per kW (up to a maximum of ₹30,000). The combined maximum subsidy in UP is ₹1,08,000. As an authorized system integrator in Noida Sector 15, Global Energy Systems prepares and submits both your PM Surya Ghar portal documentation and UP State UPNEDA subsidy paperwork, ensuring both disbursements are credited directly to your bank account.'
    },
    {
      question: 'How does Net-Metering work with PVVNL (Noida Electricity Board)?',
      answer: 'A bi-directional net-meter replaces your existing single-directional electricity meter. During daytime peak sunshine, your solar system generates electricity to power your home. Any excess power is automatically exported to the PVVNL grid. At night, you import power as usual. Your monthly bill is calculated strictly on Net Consumption (Units Imported minus Units Exported). If you generate more than you consume, units carry forward as credit!'
    },
    {
      question: 'Will installing solar ruin my terrace garden or family space?',
      answer: 'Not at all. In Noida, elevated pergola structures (7.5 to 9 feet height clearance) are our specialty. We construct sturdy hot-dip galvanized or powder-coated steel pergolas so you can walk, dry clothes, host terrace parties, and maintain your potted plants while the solar panels provide shaded overhead protection and free energy.'
    },
    {
      question: 'How does the solar system perform during Delhi NCR winter smog and monsoon?',
      answer: 'Solar panels work on solar irradiance (light spectrum), not temperature or heat. In fact, high ambient summer heat slightly reduces panel efficiency, whereas cool, clear winter days produce excellent yields. During extreme foggy days or monsoons, generation will drop by 40-50%, but your system remains grid-tied with PVVNL so you will never face power loss. Annual net generation easily offsets your 12-month power consumption.'
    },
    {
      question: 'What warranties and guarantees are provided by Global Energy Systems?',
      answer: 'We provide Tier-1 MNRE ALMM listed modules backed by a 10 to 12-year manufacturer product replacement warranty and a 25-year 80% linear power output guarantee. On-grid string inverters come with 5 to 10-year standard warranties. In addition, Global Energy Systems Noida Sector 15 provides a comprehensive 5-year workmanship guarantee with free scheduled health audits and system monitoring.'
    },
    {
      question: 'Why should I choose a local vendor in Sector 15 Noida instead of an online aggregator?',
      answer: 'Rooftop solar is an engineered electrical installation requiring local DISCOM liaisoning with PVVNL Noida divisional offices, physical structural fabrication, and prompt maintenance. Outstation aggregator apps subcontract to unverified local mechanics and leave you stranded if an inverter trips or net-meter paperwork stalls. We have our engineering office and inventory yard right in Sector 15 Noida, ensuring same-day on-site assistance.'
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            Clear Answers for Homeowners & Businesses
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Everything you need to know about rooftop solar subsidies, PVVNL net-metering, and installation in Noida.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full text-slate-400 dark:text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
