"use client";

import IndustriesServed from "@/components/IndustriesServed";

export default function IndustriesPage() {
  return (
    <div className="pt-24">
      <div className="bg-blueprint-grid text-white py-16 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">Industries We Serve</h1>
        <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Heavy industrial material handling engineering across Power Generation, Mining, Cement, Steel, and Chemicals.
        </p>
      </div>

      <IndustriesServed />
    </div>
  );
}
