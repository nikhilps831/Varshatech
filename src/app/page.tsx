"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import HeroCounter from "@/components/HeroCounter";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import AboutSection from "@/components/AboutSection";
import SolutionsGrid from "@/components/SolutionsGrid";
import ProductCatalog from "@/components/ProductCatalog";
import IndustriesServed from "@/components/IndustriesServed";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (productName?: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  return (
    <>
      <HeroSection onOpenQuoteModal={handleOpenQuoteModal} />
      <HeroCounter />
      <AboutSection />
      <SolutionsGrid onOpenQuoteModal={handleOpenQuoteModal} />
      <ProductCatalog onOpenQuoteModal={handleOpenQuoteModal} limit={9} showAllButton={true} isHomePage={true} />
      <IndustriesServed />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />
      <ContactSection />
      {/*<ClientLogoCarousel />*/}

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </>
  );
}
