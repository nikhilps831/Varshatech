"use client";

import Image from "next/image";
import { ArrowRight, Flame, Container, Truck, Wind, Settings, Wrench } from "lucide-react";
import { SOLUTIONS } from "@/data/companyData";

interface SolutionsGridProps {
  onOpenQuoteModal: (solutionTitle?: string) => void;
}

export default function SolutionsGrid({ onOpenQuoteModal }: SolutionsGridProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame": return <Flame className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />;
      case "Container": return <Container className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />;
      case "Truck": return <Truck className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />;
      case "Wind": return <Wind className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />;
      case "Settings": return <Settings className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />;
      case "Wrench": return <Wrench className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />;
      default: return <Wrench className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="solutions" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-orange-100 border border-orange-200 text-orange-900 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <span>OUR CORE ENGINEERING CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
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
              onClick={() => onOpenQuoteModal(sol.title)}
              className="group relative rounded-2xl overflow-hidden border border-slate-300/80 bg-slate-900 shadow-md hover:shadow-2xl hover:border-orange-500/80 transition-all duration-500 flex flex-col justify-between min-h-[490px] cursor-pointer"
            >
              {/* Background Image with Vibrant Visibility and Smooth Hover Scale */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={sol.image}
                  alt={sol.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 brightness-95 contrast-105"
                />
              </div>

              {/* Light Gradient Overlay: Keeps upper 60% of image vividly bright and visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 via-50% to-black/10 transition-opacity duration-500 group-hover:from-slate-950/90" />

              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-amber-500 group-hover:to-orange-500 transition-all duration-300 z-20" />

              {/* Card Content */}
              <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full">
                
                {/* Header: Floating Icon & EPC Badge over clearly visible image */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-orange-400 shadow-lg group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:text-white transition-all duration-300">
                    {getIcon(sol.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-slate-900/85 backdrop-blur-md text-orange-400 rounded-md border border-white/20 uppercase tracking-wider shadow-md">
                    VERSATECH EPC
                  </span>
                </div>

                {/* Bottom Content Panel: Sleek frosted glass container guaranteeing 100% text readability */}
                <div className="mt-auto space-y-3 p-4 sm:p-5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-orange-500/50 group-hover:bg-slate-950/85">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-orange-400 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-400 mt-1 uppercase tracking-wide">
                      {sol.subtitle}
                    </p>
                  </div>

                  {/* Clean, condensed text - avoids clutter */}
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                    {sol.shortDesc || sol.description}
                  </p>

                  {/* Clean capability chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(sol.tags || sol.keyComponents.slice(0, 3)).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-slate-100 text-[11px] font-medium tracking-wide shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action CTA */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-orange-400 group-hover:text-orange-300 transition-colors">
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Turnkey EPC
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
