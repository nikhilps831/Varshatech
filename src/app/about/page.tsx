"use client";

import { useState } from "react";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryModal from "@/components/EnquiryModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-24">
      <div className="bg-blueprint-grid text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">About VERSATECH EPC</h1>
        <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Founded in 2008 in Nagpur, Maharashtra — Material Handling & Industrial Equipment Specialists
        </p>
      </div>

      <AboutSection />
      <WhyChooseUs onOpenQuoteModal={() => setModalOpen(true)} />

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
