"use client";

import { Clock, MapPin, Building, ChevronRight, AlertCircle } from "lucide-react";
import { PROJECTS_DATA } from "@/data/companyData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-200 border border-slate-300 text-slate-800 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <span>EXECUTED CONTRACTS & CASE STUDIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Industrial Project Showcase
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            VERSATECH EPC executes turnkey material handling projects across thermal power plants, cement works, steel mills, and process industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              className="industrial-card bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between p-6 space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded border border-slate-200 uppercase">
                    {proj.industry}
                  </span>
                  <span className="flex items-center text-[11px] text-slate-500 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 mr-1" />
                    {proj.location}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                  {proj.title}
                </h3>

                <div className="bg-slate-50 border border-slate-200 p-3 rounded text-xs space-y-1">
                  <div className="text-slate-500 font-medium">Solution Implemented:</div>
                  <div className="font-bold text-slate-800">{proj.solution}</div>
                </div>

              </div>

              {/* Status Badge per strict instructions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-full text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Project details coming soon.</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
