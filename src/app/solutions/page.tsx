"use client";

import { useState } from "react";
import SolutionsGrid from "@/components/SolutionsGrid";
import EnquiryModal from "@/components/EnquiryModal";

export default function SolutionsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const handleOpenModal = (solTitle?: string) => {
    setSelectedProduct(solTitle);
    setModalOpen(true);
  };

  return (
    <div className="pt-28 lg:pt-32">
      <div className="bg-blueprint-grid text-white py-16 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">Turnkey Engineering Solutions</h1>
        <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Ash Handling, Coal Handling Plants (Up to 100 TPH), Material Handling, Dust Suppression, Valves & Fabrication
        </p>
      </div>

      <SolutionsGrid onOpenQuoteModal={handleOpenModal} />

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
}
