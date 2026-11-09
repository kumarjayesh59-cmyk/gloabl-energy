import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle, Wrench, Calendar, MapPin, Sparkles } from 'lucide-react';
import { ProjectInquiryData, ServiceRequestData } from '../types';

interface InquiryFormProps {
  initialCapacity?: number;
  initialBill?: number;
  initialService?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialCapacity,
  initialBill,
  initialService
}) => {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'service'>('inquiry');

  // Inquiry Form State
  const [inquiryData, setInquiryData] = useState<ProjectInquiryData>({
    fullName: '',
    phone: '',
    email: '',
    sectorOrAddress: '',
    category: 'residential',
    approxMonthlyBill: initialBill ? `₹${initialBill}` : '₹3,000 - ₹6,000',
    sanctionedLoadKw: initialCapacity ? `${initialCapacity} kW` : '3 kW to 5 kW',
    roofType: 'RCC Flat Roof',
    interestedScheme: 'PM Surya Ghar Yojana (Subsidy)',
    message: initialCapacity ? `Interested in ${initialCapacity} kW rooftop solar under PM Surya Ghar Yojana.` : ''
  });

  // Service Request State
  const [serviceData, setServiceData] = useState<ServiceRequestData>({
    fullName: '',
    phone: '',
    email: '',
    installationAddress: '',
    serviceType: 'System Breakdown / Inverter Error',
    existingCapacityKw: '3 kW',
    brandOfInverterPanels: '',
    preferredDate: '',
    issueDescription: ''
  });

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    id: string;
    type: 'inquiry' | 'service';
    data: any;
  } | null>(null);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate instantaneous local processing
    setTimeout(() => {
      const ticketId = `GES-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket({
        id: ticketId,
        type: 'inquiry',
        data: inquiryData
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const ticketId = `GES-SRV-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket({
        id: ticketId,
        type: 'service',
        data: serviceData
      });
      setIsSubmitting(false);
    }, 600);
  };

  const generateWhatsAppLink = () => {
    if (!submittedTicket) return '#';
    const text = submittedTicket.type === 'inquiry'
      ? `Hello Global Energy Systems Noida Sec 15! I just submitted Project Inquiry Ticket #${submittedTicket.id} for ${submittedTicket.data.category} solar installation at ${submittedTicket.data.sectorOrAddress}. My contact is ${submittedTicket.data.phone}. Please connect with me.`
      : `Hello Global Energy Systems Noida Sec 15! I submitted Service Ticket #${submittedTicket.id} for ${submittedTicket.data.serviceType} at ${submittedTicket.data.installationAddress}. My contact is ${submittedTicket.data.phone}.`;
    return `https://wa.me/919810425005?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3">
            Local Noida Sector 15 Technical Office
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display mb-4">
            Project Inquiries & Service Requests
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Connect directly with certified engineers in Noida. Schedule an on-site feasibility survey or request rapid maintenance.
          </p>
        </div>

        {/* Dual Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
            <button
              type="button"
              onClick={() => { setActiveTab('inquiry'); setSubmittedTicket(null); }}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'inquiry'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              New Solar Project Inquiry & Free Survey
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('service'); setSubmittedTicket(null); }}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'service'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Service & AMC Request
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          
          {submittedTicket ? (
            /* Confirmation Card */
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center shadow-sm">
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                Request Registered Successfully
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Ticket Reference: {submittedTicket.id}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto mb-6">
                Thank you, <strong className="text-slate-900 dark:text-white">{submittedTicket.data.fullName}</strong>. A dedicated solar engineer from Global Energy Systems (Sector 15 Noida) will contact you at <strong className="text-slate-900 dark:text-white">{submittedTicket.data.phone}</strong> within 3 business hours.
              </p>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 max-w-md mx-auto text-left text-xs space-y-2 mb-8">
                <div className="flex justify-between">
                  <span className="text-slate-400">Request Type:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">{submittedTicket.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{submittedTicket.data.sectorOrAddress || submittedTicket.data.installationAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Assigned Branch:</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">Sector 15, Noida Technical Centre</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant Connect on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmittedTicket(null)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : activeTab === 'inquiry' ? (
            /* New Project Inquiry Form */
            <form onSubmit={handleInquirySubmit} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-sm">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Book Free Rooftop Solar Feasibility Survey
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Our engineer will visit your terrace in Noida to calculate exact azimuth, shadow angle, and subsidy savings.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={inquiryData.fullName}
                    onChange={(e) => setInquiryData({ ...inquiryData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98104 25005"
                    value={inquiryData.phone}
                    onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rajesh@example.com"
                    value={inquiryData.email}
                    onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Noida Sector / Project Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sector 15, Sector 44, Greater Noida"
                    value={inquiryData.sectorOrAddress}
                    onChange={(e) => setInquiryData({ ...inquiryData, sectorOrAddress: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Property Category
                  </label>
                  <select
                    value={inquiryData.category}
                    onChange={(e) => setInquiryData({ ...inquiryData, category: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="residential">Residential Villa / Independent House</option>
                    <option value="commercial">Commercial Building / Office</option>
                    <option value="industrial">Industrial Shed / Factory</option>
                    <option value="society">RWA / Group Housing Society</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Primary Interest
                  </label>
                  <select
                    value={inquiryData.interestedScheme}
                    onChange={(e) => setInquiryData({ ...inquiryData, interestedScheme: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="PM Surya Ghar Yojana (Subsidy)">PM Surya Ghar Yojana (Govt Subsidy)</option>
                    <option value="Standard Commercial Solar">Commercial Grid-Tie Solar</option>
                    <option value="Off-Grid / Hybrid Battery">Off-Grid / Hybrid with Battery Storage</option>
                    <option value="Solar Water Heater">Solar Water Heating System</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Approx. Monthly Bill
                  </label>
                  <input
                    type="text"
                    value={inquiryData.approxMonthlyBill}
                    onChange={(e) => setInquiryData({ ...inquiryData, approxMonthlyBill: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Roof Construction Type
                  </label>
                  <select
                    value={inquiryData.roofType}
                    onChange={(e) => setInquiryData({ ...inquiryData, roofType: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="RCC Flat Roof">RCC Flat Terrace</option>
                    <option value="Elevated Pergola">Elevated Pergola Structure (7-9 ft clearance)</option>
                    <option value="Tin Shed">Metal / Tin Sheet Shed</option>
                    <option value="Tile / Slanted">Slanted / Tile Roof</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                  Special Notes or Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your rooftop area, preferred installation timeframe, or existing battery setup..."
                  value={inquiryData.message}
                  onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Zero obligation · Free site feasibility report included
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Registering Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry & Book Survey</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Service & AMC Request Form */
            <form onSubmit={handleServiceSubmit} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-sm">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Solar Maintenance, AMC & Service Request
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Our Noida Sector 15 service team troubleshoots inverters, performs de-ionized chemical cleaning, and rectifies net-meter issues.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sumanth Verma"
                    value={serviceData.fullName}
                    onChange={(e) => setServiceData({ ...serviceData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98104 25005"
                    value={serviceData.phone}
                    onChange={(e) => setServiceData({ ...serviceData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. sumanth@example.com"
                    value={serviceData.email}
                    onChange={(e) => setServiceData({ ...serviceData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Plant Address in Noida / NCR *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. House 45, Sector 15 Noida"
                    value={serviceData.installationAddress}
                    onChange={(e) => setServiceData({ ...serviceData, installationAddress: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Service Required *
                  </label>
                  <select
                    value={serviceData.serviceType}
                    onChange={(e) => setServiceData({ ...serviceData, serviceType: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="System Breakdown / Inverter Error">System Breakdown / Inverter Fault Error</option>
                    <option value="Solar Panel Deep Cleaning">Solar Panel Deep Washing & Cleaning</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC) Renewal</option>
                    <option value="Net-Metering / DISCOM Issue">Net-Metering / PVVNL Solar Export Dispute</option>
                    <option value="Generation Health Audit">Thermal Health & Generation Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Existing System Capacity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 kW On-Grid"
                    value={serviceData.existingCapacityKw}
                    onChange={(e) => setServiceData({ ...serviceData, existingCapacityKw: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Inverter / Module Brand (If known)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Growatt, Sungrow, Microtek, Solis"
                    value={serviceData.brandOfInverterPanels}
                    onChange={(e) => setServiceData({ ...serviceData, brandOfInverterPanels: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                    Preferred Technician Visit Date
                  </label>
                  <input
                    type="date"
                    value={serviceData.preferredDate}
                    onChange={(e) => setServiceData({ ...serviceData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase mb-2">
                  Describe Fault or Issue
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention inverter error code (e.g. Error 03 / Grid Fault), generation drop percentage, or broken cables..."
                  value={serviceData.issueDescription}
                  onChange={(e) => setServiceData({ ...serviceData, issueDescription: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Emergency technical support available for Noida residents
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Dispatching Service...</span>
                  ) : (
                    <>
                      <span>Dispatch Service Technician</span>
                      <Wrench className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

        {/* Local Office Contact Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white block font-semibold">Registered Office & Technical Yard:</strong>
              Sector 15, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white block font-semibold">Noida Direct Line:</strong>
              +91 98104 25005 (Mon - Sat: 9 AM to 7:30 PM)
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white block font-semibold">Instant WhatsApp Desk:</strong>
              Share your Noida electricity bill photo for an instant sizing quote.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
