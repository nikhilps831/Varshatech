"use client";

import { Zap, Container, Building2, Pickaxe, FlaskConical, Factory, HardHat, Wheat, Sprout, Utensils, Mountain, Cog } from "lucide-react";
import { INDUSTRIES } from "@/data/companyData";

export default function IndustriesServed() {
  const getIndustryIcon = (name: string) => {
    switch (name) {
      case "Zap": return <Zap className="w-6 h-6 text-amber-500" />;
      case "Container": return <Container className="w-6 h-6 text-blue-500" />;
      case "Building2": return <Building2 className="w-6 h-6 text-slate-700" />;
      case "Pickaxe": return <Pickaxe className="w-6 h-6 text-orange-500" />;
      case "FlaskConical": return <FlaskConical className="w-6 h-6 text-purple-500" />;
      case "Factory": return <Factory className="w-6 h-6 text-indigo-500" />;
      case "HardHat": return <HardHat className="w-6 h-6 text-yellow-500" />;
      case "Wheat": return <Wheat className="w-6 h-6 text-amber-600" />;
      case "Sprout": return <Sprout className="w-6 h-6 text-emerald-500" />;
      case "Utensils": return <Utensils className="w-6 h-6 text-rose-500" />;
      case "Mountain": return <Mountain className="w-6 h-6 text-teal-600" />;
      case "Cog": return <Cog className="w-6 h-6 text-blue-600" />;
      default: return <Factory className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-200 border border-slate-300 text-slate-800 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <span>KEY SECTORS WE SERVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Industries Powered by VERSATECH EPC
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Proven heavy engineering expertise across core manufacturing, power generation, and bulk materials processing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="industrial-card bg-white p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm hover:border-orange-500 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                {getIndustryIcon(ind.iconName)}
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                {ind.title}
              </h3>

              <p className="text-slate-600 text-xs leading-relaxed">
                {ind.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
