"use client";

import { Phone, MessageSquare, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

interface MobileStickyBarProps {
  onOpenQuoteModal: () => void;
}

export default function MobileStickyBar({ onOpenQuoteModal }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-900 border-t border-slate-800 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        <a
          href={`tel:${COMPANY_INFO.phones[0]}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white rounded-xl text-[11px] font-semibold transition-all border border-slate-700"
        >
          <Phone className="w-4 h-4 text-blue-400 mb-0.5" />
          <span>CALL US</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello VERSATECH EPC, I would like to inquire about your material handling systems.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-xl text-[11px] font-semibold transition-all shadow"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span>WHATSAPP</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-2 px-1 btn-primary-brand active:scale-95 rounded-xl text-[11px] font-bold tracking-tight shadow"
        >
          <FileText className="w-4 h-4 text-white mb-0.5" />
          <span>GET QUOTE</span>
        </button>

      </div>
    </div>
  );
}
