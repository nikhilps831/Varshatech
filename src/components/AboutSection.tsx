"use client";

import { CheckCircle2, Factory, MapPin, Award, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function AboutSection() {
  return (
    <section id="about" className="pt-20 pb-20 md:pb-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">

            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-orange-50 border border-orange-200 text-orange-800 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5 text-orange-600" />
              <span>ABOUT VERSATECH EPC</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Industrial Engineering & Material Handling Excellence Since 2008
            </h2>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              Founded in 2008 in <strong className="text-slate-900">Nagpur, Maharashtra</strong>, <strong>VERSATECH EPC</strong> is a premier manufacturer, supplier, and trader specializing in advanced material handling systems and industrial equipment.
            </p>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We provide comprehensive solutions across the entire project lifecycle — starting from concept-level design and engineering through precision manufacturing, supply, site installation, testing, project execution, and long-term O&M support.
            </p>

            {/* Core Capabilities Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
              <div className="flex items-center space-x-2.5 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Concept & Detailed Engineering</span>
              </div>
              <div className="flex items-center space-x-2.5 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Heavy Industrial Fabrication</span>
              </div>
              <div className="flex items-center space-x-2.5 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Dense Phase Pneumatic Conveying</span>
              </div>
              <div className="flex items-center space-x-2.5 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Turnkey Field Erection & O&M</span>
              </div>
            </div>

            {/* Stated Pressure Vessel Code Badges */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pressure Vessel Standards:</span>
              {COMPANY_INFO.standards.map((std) => (
                <span
                  key={std}
                  className="px-3 py-1 bg-slate-100 text-slate-800 border border-slate-300 rounded text-xs font-mono font-bold"
                >
                  {std}
                </span>
              ))}
            </div>

          </div>

          {/* Right Core Pillars Box (Light Theme) */}
          <div className="lg:col-span-5">

            <div className="bg-slate-50 text-slate-900 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200 space-y-6">

              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest block">
                  Core Engineering Pillars
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Why VERSATECH EPC Systems Stand Out</h3>
              </div>

              <div className="space-y-4">
                {COMPANY_INFO.corePillars.map((pillar, idx) => (
                  <div key={pillar.title} className="flex items-start space-x-3 group">
                    <div className="w-7 h-7 rounded bg-orange-100 border border-orange-300 flex items-center justify-center text-orange-700 font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between font-mono">
                <span>NAGPUR, MAHARASHTRA</span>
                <span className="text-orange-600 font-bold">ESTD 2008</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
