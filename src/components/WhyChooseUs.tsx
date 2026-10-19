"use client";

import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { WHY_CHOOSE_US_POINTS } from "@/data/companyData";

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export default function WhyChooseUs({ onOpenQuoteModal }: WhyChooseUsProps) {
  return (
    <section className="py-20 md:py-28 bg-blueprint-light text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-orange-100 border border-orange-200 text-orange-800 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
              <span>THE VERSATECH ADVANTAGE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Why Partner With VERSATECH EPC?
            </h2>

            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              We focus on delivering high-reliability material handling systems and industrial equipment engineered specifically to reduce power consumption, eliminate maintenance bottlenecks, and ensure uninterrupted plant operations.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="btn-primary-orange px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center space-x-2 shadow-lg"
              >
                <span>DISCUSS YOUR REQUIREMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US_POINTS.map((item) => (
                <div
                  key={item.title}
                  className="industrial-card-light p-5 rounded-xl border border-slate-200 space-y-2 bg-white shadow-xs"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <h3 className="text-sm font-extrabold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
