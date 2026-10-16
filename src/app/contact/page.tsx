"use client";

import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="bg-blueprint-grid text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Contact VERSATECH EPC</h1>
        <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Nagpur Corporate Office & Works • Direct Engineering Sales & Technical Support
        </p>
      </div>

      <ContactSection />
    </div>
  );
}
