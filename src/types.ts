export type ServiceType = 
  | 'residential' 
  | 'commercial' 
  | 'hybrid' 
  | 'surya_ghar' 
  | 'water_heater' 
  | 'amc_cleaning';

export interface CalculatorState {
  monthlyBill: number;
  customerType: 'residential' | 'commercial' | 'industrial';
  roofArea: number;
}

export interface CalculationResult {
  recommendedCapacityKw: number;
  requiredAreaSqFt: number;
  unitsPerMonth: number;
  grossCost: number;
  centralSubsidy: number;
  stateSubsidy: number;
  subsidyAmount: number;
  netCost: number;
  monthlySavings: number;
  annualSavings: number;
  lifetimeSavings: number;
  paybackYears: number;
  co2OffsetTonsPerYear: number;
  treesEquivalent: number;
}

export interface ProjectInquiryData {
  fullName: string;
  phone: string;
  email: string;
  sectorOrAddress: string;
  category: 'residential' | 'commercial' | 'industrial' | 'society';
  approxMonthlyBill: string;
  sanctionedLoadKw: string;
  roofType: 'RCC Flat Roof' | 'Tin Shed' | 'Elevated Pergola' | 'Tile / Slanted';
  interestedScheme: 'PM Surya Ghar Yojana (Subsidy)' | 'Standard Commercial Solar' | 'Off-Grid / Hybrid Battery' | 'Solar Water Heater';
  message: string;
}

export interface ServiceRequestData {
  fullName: string;
  phone: string;
  email: string;
  installationAddress: string;
  serviceType: 'System Breakdown / Inverter Error' | 'Solar Panel Deep Cleaning' | 'Annual Maintenance Contract (AMC)' | 'Net-Metering / DISCOM Issue' | 'Generation Health Audit';
  existingCapacityKw: string;
  brandOfInverterPanels: string;
  preferredDate: string;
  issueDescription: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  capacityKw: string;
  category: 'residential' | 'commercial' | 'hybrid';
  modules: string;
  inverter: string;
  monthlySavings: string;
  subsidyReceived?: string;
  image: string;
  summary: string;
  features: string[];
}
