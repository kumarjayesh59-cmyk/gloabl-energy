import React from 'react';
import { Sun, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">GLOBAL ENERGY SYSTEMS</span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Authorized System Integrator and Empanelled PM Surya Ghar: Muft Bijli Yojana Vendor based in Sector 15 Noida. Providing high-performance rooftop solar engineering, PVVNL net-metering liaisoning, and maintenance across Gautam Buddha Nagar & Delhi NCR.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified MNRE Partner · Vendor Reg: Noida Sec-15</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Solar Solutions
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#pm-surya-ghar" className="hover:text-amber-400 transition-colors">PM Surya Ghar Yojana</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Residential Solar Pergolas</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Commercial & Industrial Solar</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Smart Hybrid Battery Systems</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Solar Water Heaters</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Solar AMC & Panel Cleaning</a></li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Service Locations
            </div>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-300">Noida Sector 1 to Sector 168</span></li>
              <li><span className="text-slate-300">Noida Expressway & Extension</span></li>
              <li><span className="text-slate-300">Greater Noida & Pari Chowk</span></li>
              <li><span className="text-slate-300">Yamuna Expressway Industrial</span></li>
              <li><span className="text-slate-300">Ghaziabad & Indirapuram</span></li>
              <li><span className="text-slate-300">Delhi NCR Rooftops</span></li>
            </ul>
          </div>

          {/* Office Contact */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Noida Sector 15 Office
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Sector 15, Noida, Gautam Buddha Nagar, UP 201301</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+919810425005" className="hover:text-white transition-colors">+91 98104 25005</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>contact@globalenergysystems.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Global Energy Systems Noida Sector 15. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">PVVNL Net Metering Empanelled</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">pmsuryaghar.gov.in Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
