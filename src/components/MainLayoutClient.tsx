"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";

export default function MainLayoutClient({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (productName?: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-grow">
        {/* Pass down modal opener if child page needs it */}
        {children}
      </main>

      <Footer onOpenQuoteModal={handleOpenQuoteModal} />
      <MobileStickyBar onOpenQuoteModal={handleOpenQuoteModal} />

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
}
