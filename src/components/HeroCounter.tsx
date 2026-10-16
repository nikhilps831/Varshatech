"use client";

import { Award, Factory, Layers, ShieldCheck, Calendar, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function HeroCounter() {
  const currentYear = 2026;
  const yearsExp = currentYear - COMPANY_INFO.foundedYear;

  const counterItems = [
    {
      value: `${yearsExp}+`,
      label: "Years of Experience",
      icon: <Award className="w-5 h-5 text-slate-700" />
    },
    {
      value: COMPANY_INFO.chpCapability,
      label: "Coal Handling Capacity",
      icon: <Factory className="w-5 h-5 text-slate-700" />
    },
    {
      value: "6+",
      label: "Turnkey EPC Scope",
      icon: <Layers className="w-5 h-5 text-slate-700" />
    },
    {
      value: "100%",
      label: "ASME & IS Certified",
      icon: <ShieldCheck className="w-5 h-5 text-slate-700" />
    },
    {
      value: `${COMPANY_INFO.foundedYear}`,
      label: "Year Established",
      icon: <Calendar className="w-5 h-5 text-slate-700" />
    },
    {
      value: "Nagpur",
      label: "HQ & Works Facility",
      icon: <MapPin className="w-5 h-5 text-slate-700" />
    }
  ];

  return (
    <section className="w-full py-7 md:py-9 bg-[#f8f9fa] border-y border-slate-200/90 shadow-2xs">
      <div className="w-full px-4 sm:px-8 md:px-12 xl:px-16">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 sm:gap-x-6 lg:gap-x-0 lg:divide-x divide-slate-200/90">
          {counterItems.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-center space-x-3.5 lg:justify-center ${
                idx !== 0 ? "lg:pl-6 xl:pl-8" : ""
              } ${
                idx % 2 !== 0 ? "pl-2 sm:pl-0" : ""
              } ${
                idx >= 2 ? "sm:border-t lg:border-t-0 sm:pt-4 lg:pt-0 border-slate-200/60" : ""
              }`}
            >
              {/* Circular Icon Badge */}
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-slate-200/80 border border-slate-300/60 flex items-center justify-center text-slate-700 flex-shrink-0 shadow-2xs hover:bg-orange-100 hover:border-orange-300 hover:text-orange-600 transition-colors">
                {item.icon}
              </div>

              {/* Text Block */}
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-none">
                  {item.value}
                </div>
                <div className="text-xs text-slate-600 font-medium leading-snug mt-1 max-w-[130px]">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
