"use client";

import { useState } from "react";
import ProductCatalog from "@/components/ProductCatalog";
import EnquiryModal from "@/components/EnquiryModal";

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const handleOpenModal = (pName?: string) => {
    setSelectedProduct(pName);
    setModalOpen(true);
  };

  return (
    <div className="pt-28 lg:pt-32">
      <div className="bg-blueprint-grid text-white py-16 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">Industrial Product Catalogue</h1>
        <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Explore complete product offerings across Ash Handling, Coal Conveyors, Valves, Dust Collectors, and Silos.
        </p>
      </div>

      <ProductCatalog onOpenQuoteModal={handleOpenModal} />

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
}
