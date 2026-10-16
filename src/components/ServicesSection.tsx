"use client";

import { Compass, Hammer, PackageCheck, Wrench, Briefcase, Activity, RefreshCw, FileText, Layers, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/companyData";

export default function ServicesSection() {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Compass": return <Compass className="w-6 h-6 text-blue-600" />;
      case "Hammer": return <Hammer className="w-6 h-6 text-orange-600" />;
      case "PackageCheck": return <PackageCheck className="w-6 h-6 text-emerald-600" />;
      case "Wrench": return <Wrench className="w-6 h-6 text-indigo-600" />;
      case "Briefcase": return <Briefcase className="w-6 h-6 text-purple-600" />;
      case "Activity": return <Activity className="w-6 h-6 text-rose-600" />;
      case "RefreshCw": return <RefreshCw className="w-6 h-6 text-teal-600" />;
      case "FileText": return <FileText className="w-6 h-6 text-amber-600" />;
      case "Layers": return <Layers className="w-6 h-6 text-cyan-600" />;
      default: return <Wrench className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <span>FULL LIFECYCLE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Engineering Services
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Providing comprehensive support from preliminary design consulting through turnkey site erection and lifetime maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="industrial-card bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  {getServiceIcon(srv.iconName)}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  {srv.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Key Scope & Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {srv.deliverables.map((del) => (
                    <li key={del} className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
