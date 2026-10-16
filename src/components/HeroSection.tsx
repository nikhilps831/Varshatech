"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, MapPin, Calendar, ChevronRight, ChevronLeft, Wrench, Layers, Pause, Play } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

interface HeroSectionProps {
  onOpenQuoteModal: (product?: string) => void;
}

const HERO_SLIDES = [
  {
    image: "/images/versatech_hero.jpg",
    tag: "EPC MATERIAL HANDLING",
    headlineTitle: "Engineering",
    headlineAccent: "Reliable",
    headlineEnd: "Material Handling Solutions",
    description: "Design, Engineering, Manufacturing & Supply of Material Handling Systems and Industrial Equipment. Founded in 2008 in Nagpur, Maharashtra for thermal power plants, cement works, mining, steel, and process manufacturing."
  },
  {
    image: "/images/coal_handling_sys.jpg",
    tag: "COAL HANDLING PLANT (CHP)",
    headlineTitle: "Coal Handling Plants",
    headlineAccent: "Up to 100 TPH",
    headlineEnd: "Turnkey Systems",
    description: "Heavy-duty crushing, screening, belt conveying, and stockpile storage systems custom-engineered for maximum industrial uptime and minimal maintenance."
  },
  {
    image: "/images/ash_handling_sys.jpg",
    tag: "PNEUMATIC CONVEYING",
    headlineTitle: "Dense-Phase",
    headlineAccent: "Dry Ash Handling",
    headlineEnd: "Systems",
    description: "High-efficiency pneumatic ash conveying systems for thermal power stations and process industries with dust-free transfer and long-distance transport."
  },
  {
    image: "/images/pressure_vessels_hero.jpg",
    tag: "ASME & IS CODE VESSELS",
    headlineTitle: "Industrial Vessels &",
    headlineAccent: "Storage Silos",
    headlineEnd: "Fabrication",
    description: "Certified pressure vessel fabrication according to IS 2825, ASME Sec VIII, BS 5500 & IBR standards with 100% NDT inspection and quality assurance."
  }
];

export default function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] pt-36 md:pt-44 pb-28 md:pb-36 flex items-center overflow-hidden border-b border-slate-200 group">

      {/* Dynamic Smooth Carousel Background Images */}
      <div className="absolute inset-0 z-0 bg-slate-950 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 scale-105 z-10"
                  : "opacity-0 scale-100 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.tag}
                fill
                priority={index === 0}
                className="object-cover object-center transition-transform duration-[6000ms] ease-out scale-105"
              />
            </div>
          );
        })}

        {/* Premium Dark Gradient Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-900/60 backdrop-brightness-95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-30 text-white w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Content with Smooth Key Fade */}
          <div className="lg:col-span-8 space-y-6">

            {/* Badges Bar & Active Slide Indicator Tag */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-orange-600/90 text-white border border-orange-400/50 rounded-full text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-md animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>{activeSlide.tag}</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-slate-900/80 border border-slate-600/80 text-orange-400 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-orange-500" />
                <span>Since {COMPANY_INFO.foundedYear}</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-slate-900/80 border border-slate-600/80 text-slate-100 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>{COMPANY_INFO.city}, {COMPANY_INFO.state}</span>
              </div>
            </div>

            {/* Dynamic Animated Headline */}
            <div key={currentSlide} className="transition-all duration-500 transform translate-y-0 opacity-100">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                {activeSlide.headlineTitle}{" "}
                <span className="text-orange-500">{activeSlide.headlineAccent}</span>{" "}
                {activeSlide.headlineEnd}
              </h1>

              <p className="text-slate-100 text-base md:text-lg leading-relaxed max-w-2xl font-normal drop-shadow-md mt-4">
                {activeSlide.description}
              </p>
            </div>

            {/* Pressure Vessel Code Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-200">
              <span className="font-bold text-white uppercase tracking-wider drop-shadow-xs">Pressure Vessel Standards:</span>
              {COMPANY_INFO.standards.map((std) => (
                <span key={std} className="px-3 py-1 bg-slate-900/80 border border-slate-600/80 text-white rounded-md font-mono font-bold shadow-xs backdrop-blur-sm">
                  {std}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn-primary-orange px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider flex items-center justify-center space-x-3 shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-[1.02]"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#solutions"
                className="px-8 py-4 bg-slate-900/70 hover:bg-slate-900/90 text-white font-bold text-sm uppercase tracking-wider rounded-full border border-slate-600 flex items-center justify-center space-x-2 transition-colors shadow-sm backdrop-blur-md"
              >
                <span>EXPLORE OUR SOLUTIONS</span>
                <ChevronRight className="w-4 h-4 text-orange-400" />
              </a>
            </div>

          </div>

          {/* Right side EPC Highlights & Capabilities Glass Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative group/card">

              {/* Glowing Background Ambient Accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover/card:opacity-100 transition duration-1000"></div>

              {/* Main Glass Card Container */}
              <div className="relative bg-slate-900/80 border border-slate-700/80 p-7 rounded-2xl shadow-2xl backdrop-blur-xl space-y-6">

                {/* Card Header */}
                <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-widest block">
                      EPC CAPABILITIES & STANDARDS
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">VERSATECH Nagpur</h3>
                  </div>
                  <ShieldCheck className="w-7 h-7 text-orange-400 flex-shrink-0 opacity-80" />
                </div>

                {/* Feature Highlights */}
                <div className="space-y-3 text-xs text-slate-200">
                  <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <Wrench className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Concept-to-Turnkey Execution</span>
                      <span className="text-slate-300 text-[11px]">Complete design, fabrication & site commissioning</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <Layers className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Pneumatic & Mechanical Conveying</span>
                      <span className="text-slate-300 text-[11px]">Dense-phase systems & heavy-duty belt conveyors</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Metric Pills */}
                <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-800">
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-center">
                    <div className="text-lg font-black text-orange-400 font-mono">100 TPH</div>
                    <div className="text-[10px] text-slate-300 uppercase font-bold tracking-wider">CHP Capacity</div>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-center">
                    <div className="text-lg font-black text-white font-mono">IS & ASME</div>
                    <div className="text-[10px] text-slate-300 uppercase font-bold tracking-wider">Vessel Codes</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Carousel Bottom Control Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 relative z-30">

          {/* Slide Progress Indicators */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-orange-400">
              0{currentSlide + 1} <span className="text-slate-500">/ 0{HERO_SLIDES.length}</span>
            </span>

            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentSlide
                      ? "w-10 bg-orange-500 shadow-lg shadow-orange-500/50"
                      : "w-3 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Carousel Navigation Buttons & Autoplay Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all backdrop-blur-md shadow-sm"
              title={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-orange-400" />}
            </button>

            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all backdrop-blur-md shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all backdrop-blur-md shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
