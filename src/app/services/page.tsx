"use client";

import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <div className="pt-28 lg:pt-32">
      <div className="bg-blueprint-grid text-white py-16 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">Lifecycle Engineering Services</h1>
        <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Design Consultancy, In-House Shop Fabrication, Field Erection, O&M Contracts & System Modifications.
        </p>
      </div>

      <ServicesSection />
    </div>
  );
}
