"use client";

import { ArrowRight, Flame, Container, Truck, Wind, Settings, Wrench, CheckCircle2 } from "lucide-react";
import { SOLUTIONS, Solution } from "@/data/companyData";

interface SolutionsGridProps {
  onOpenQuoteModal: (solutionTitle?: string) => void;
}

export default function SolutionsGrid({ onOpenQuoteModal }: SolutionsGridProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame": return <Flame className="w-6 h-6 text-orange-500" />;
      case "Container": return <Container className="w-6 h-6 text-blue-500" />;
      case "Truck": return <Truck className="w-6 h-6 text-emerald-500" />;
      case "Wind": return <Wind className="w-6 h-6 text-cyan-500" />;
      case "Settings": return <Settings className="w-6 h-6 text-amber-500" />;
      case "Wrench": return <Wrench className="w-6 h-6 text-indigo-500" />;
      default: return <Wrench className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section id="solutions" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-200 border border-slate-300 text-slate-800 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <span>OUR CORE ENGINEERING CAPABILITIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Turnkey Industrial Solutions
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Engineered from concept through design, shop fabrication, site installation, and ongoing O&M support.
          </p>
        </div>

        {/* 6 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="industrial-card bg-white rounded-xl overflow-hidden p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm border border-slate-200"
            >
              <div className="space-y-4">
                
                {/* Header Icon & Title */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                    {getIcon(sol.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded border border-slate-200 uppercase">
                    VERSATECH EPC
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-600 mt-0.5">
                    {sol.subtitle}
                  </p>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-4">
                  {sol.description}
                </p>

                {/* Key Components List */}
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Key Equipment Components:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {sol.keyComponents.slice(0, 4).map((comp) => (
                      <li key={comp} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="truncate">{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Action CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuoteModal(sol.title)}
                  className="text-xs font-bold text-slate-900 hover:text-orange-600 transition-colors flex items-center space-x-1 uppercase tracking-wider"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4 text-orange-500" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
