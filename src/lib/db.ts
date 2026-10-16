import fs from "fs";
import path from "path";

export interface EnquiryRecord {
  id: string;
  dateTime: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  product: string;
  quantity?: string;
  location?: string;
  message: string;
  attachment?: string;
  preferredContact?: string;
  sourcePage: string;
  status: "NEW" | "CONTACTED" | "QUOTATION SENT" | "IN DISCUSSION" | "WON" | "CLOSED";
  notes?: string[];
}

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "enquiries.json");

function ensureDbExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_FILE)) {
    const initialEnquiries: EnquiryRecord[] = [
      {
        id: "VTS-ENQ-1001",
        dateTime: new Date(Date.now() - 86400000 * 2).toISOString(),
        name: "Rajesh Sharma",
        company: "Vidarbha Thermal Power Pvt Ltd",
        email: "r.sharma@vidarbhapower.co.in",
        phone: "+91 9822011223",
        industry: "Power Plants",
        product: "Ash Handling Systems - Dense Phase Ash Vessel",
        quantity: "2 Units",
        location: "Chandrapur, Maharashtra",
        message: "We require dense phase pneumatic ash vessel specification for 210MW boiler ash handling retrofitting. Please share technical data sheet and quotation.",
        preferredContact: "Phone / WhatsApp",
        sourcePage: "Product Detail - Ash Vessel",
        status: "NEW",
        notes: ["Initial enquiry received. Requires technical drawing verification."]
      },
      {
        id: "VTS-ENQ-1002",
        dateTime: new Date(Date.now() - 86400000 * 4).toISOString(),
        name: "Amitabh Verma",
        company: "Apex Cement Infrastructure",
        email: "averma@apexcement.com",
        phone: "+91 9422188440",
        industry: "Cement Plants",
        product: "Air Slide Conveyor & Telescopic Chute",
        quantity: "1 Complete System",
        location: "Nagpur Industrial Zone, Maharashtra",
        message: "Enquiry for 350mm width Air Slide Conveyor and dust controlled Telescopic Loading Spout for bulk cement wagon loading station.",
        preferredContact: "Email",
        sourcePage: "Solutions - Material Handling",
        status: "QUOTATION SENT",
        notes: ["Commercial quotation sent on 03-Oct-2026. Awaiting technical clarification meeting."]
      },
      {
        id: "VTS-ENQ-1003",
        dateTime: new Date(Date.now() - 86400000 * 7).toISOString(),
        name: "Sandeep Deshmukh",
        company: "Deccan Steel & Alloys",
        email: "procurement@deccansteel.org",
        phone: "+91 9765432100",
        industry: "Steel / Metal Industries",
        product: "Dry Fog Dust Suppression System",
        quantity: "6 Nozzle Stations",
        location: "Butibori Industrial Area, Nagpur",
        message: "Requirement of Dry Fog Dust Suppression for coal transfer points in raw material handling section.",
        preferredContact: "WhatsApp",
        sourcePage: "Solutions - Dust & Pollution Control",
        status: "IN DISCUSSION",
        notes: ["Site survey requested by customer for layout measurement."]
      }
    ];

    fs.writeFileSync(DB_FILE, JSON.stringify(initialEnquiries, null, 2), "utf8");
  }
}

export function getEnquiries(): EnquiryRecord[] {
  try {
    ensureDbExists();
    const raw = fs.readFileSync(DB_FILE, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error reading enquiries DB:", error);
    return [];
  }
}

export function saveEnquiry(data: Omit<EnquiryRecord, "id" | "dateTime" | "status">): EnquiryRecord {
  ensureDbExists();
  const list = getEnquiries();
  
  const count = list.length + 1001;
  const newId = `VTS-ENQ-${count}`;
  
  const record: EnquiryRecord = {
    ...data,
    id: newId,
    dateTime: new Date().toISOString(),
    status: "NEW",
    notes: []
  };

  list.unshift(record);
  fs.writeFileSync(DB_FILE, JSON.stringify(list, null, 2), "utf8");
  return record;
}

export function updateEnquiryStatus(
  id: string,
  status: EnquiryRecord["status"],
  note?: string
): EnquiryRecord | null {
  ensureDbExists();
  const list = getEnquiries();
  const idx = list.findIndex((e) => e.id === id);
  if (idx === -1) return null;

  list[idx].status = status;
  if (note && note.trim()) {
    if (!list[idx].notes) list[idx].notes = [];
    list[idx].notes.push(`[${new Date().toLocaleDateString()}] ${note.trim()}`);
  }

  fs.writeFileSync(DB_FILE, JSON.stringify(list, null, 2), "utf8");
  return list[idx];
}
