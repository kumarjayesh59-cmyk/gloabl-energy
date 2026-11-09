import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SuryaGharYojana } from './components/SuryaGharYojana';
import { SolarCalculator } from './components/SolarCalculator';
import { Services } from './components/Services';
import { HardwareSpecs } from './components/HardwareSpecs';
import { ProjectShowcase } from './components/ProjectShowcase';
import { InquiryForm } from './components/InquiryForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [inquiryCapacity, setInquiryCapacity] = useState<number | undefined>(undefined);
  const [inquiryBill, setInquiryBill] = useState<number | undefined>(undefined);
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);

  // Sync dark class on html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const calcElem = document.getElementById('calculator');
    if (calcElem) {
      calcElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreFillFromCalculator = (capacityKw: number, bill: number, netCost: number) => {
    setInquiryCapacity(capacityKw);
    setInquiryBill(bill);
    scrollToContact();
  };

  const handleSelectCapacityForQuote = (kw: number) => {
    setInquiryCapacity(kw);
    scrollToContact();
  };

  const handleSelectService = (serviceName: string) => {
    setInquiryService(serviceName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Bar Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenSurvey={scrollToContact} 
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onOpenSurvey={scrollToContact} 
          onScrollToCalculator={scrollToCalculator} 
        />

        {/* 2. PM Surya Ghar Muft Bijli Yojana Section */}
        <SuryaGharYojana 
          onSelectCapacityForQuote={handleSelectCapacityForQuote} 
        />

        {/* 3. Interactive Solar & Subsidy Calculator */}
        <SolarCalculator 
          onPreFillInquiry={handlePreFillFromCalculator} 
        />

        {/* 4. Sustainable Energy Solutions & Services */}
        <Services 
          onSelectService={handleSelectService} 
        />

        {/* 5. Engineering Standards & Hardware Specs */}
        <HardwareSpecs />

        {/* 6. Completed Projects & Noida Case Studies */}
        <ProjectShowcase />

        {/* 7. Dual Project Inquiry & Service Request Form */}
        <InquiryForm 
          initialCapacity={inquiryCapacity}
          initialBill={inquiryBill}
          initialService={inquiryService}
        />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Floating Action for Quick Assistance (Respecting 15% Mobile Sticky Cap) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/919810425005?text=Hi%20Global%20Energy%20Systems%20Noida%20Sector%2015,%20I%20am%20interested%20in%20rooftop%20solar%20under%20PM%20Surya%20Ghar%20Yojana."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp with Noida Sector 15 Desk"
          className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
          title="Instant WhatsApp Support"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}
