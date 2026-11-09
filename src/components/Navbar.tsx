import React, { useState } from 'react';
import { Sun, Moon, PhoneCall, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenSurvey: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenSurvey }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element wordmark as per Top Bar Contract) */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 dark:bg-amber-400/20 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Sun className="w-5 h-5" />
            </div>
            <span className="font-display">GLOBAL ENERGY SYSTEMS</span>
          </a>

          {/* Zone 2: 4-5 single-line clean text links with subtle hover effects */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a 
              href="#pm-surya-ghar" 
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              PM Surya Ghar
            </a>
            <a 
              href="#services" 
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a 
              href="#calculator" 
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Solar Calculator
            </a>
            <a 
              href="#projects" 
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Case Studies
            </a>
            <a 
              href="#faq" 
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Subsidy FAQ
            </a>
            <a 
              href="#contact" 
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary action + Theme toggle & Quick Direct Call */}
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="tel:+919810425005" 
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors whitespace-nowrap"
              title="Call Noida Sector 15 Office"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
              <span>Noida Sec 15</span>
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenSurvey}
              className="px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get Free Site Survey</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-5 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-700 dark:text-slate-200">
            <a 
              href="#pm-surya-ghar" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-500 transition-colors"
            >
              PM Surya Ghar Yojana (Subsidy)
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-500 transition-colors"
            >
              Solar Solutions & Services
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-500 transition-colors"
            >
              Subsidy & ROI Calculator
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-500 transition-colors"
            >
              Completed Projects in Noida
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-500 transition-colors"
            >
              Subsidy & Net-Metering FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-500 transition-colors"
            >
              Contact & Service Request
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500">Noida Sec 15 Support:</span>
            <a href="tel:+919810425005" className="text-sm font-semibold text-amber-600 dark:text-amber-400">
              +91 98104 25005
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
