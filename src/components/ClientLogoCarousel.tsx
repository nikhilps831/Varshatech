"use client";

const CLIENT_LOGOS = [
  {
    name: "NTPC",
    full: "NTPC Limited",
    color: "#e11d48",
    font: "font-black font-sans tracking-widest text-xl md:text-2xl"
  },
  {
    name: "TATA STEEL",
    full: "Tata Steel Limited",
    color: "#0f766e",
    font: "font-serif font-black tracking-wider text-xl md:text-2xl"
  },
  {
    name: "UltraTech",
    full: "UltraTech Cement",
    color: "#1e3a8a",
    font: "font-sans font-extrabold tracking-tight text-xl md:text-2xl"
  },
  {
    name: "adani",
    full: "Adani Power & Infrastructure",
    color: "#7e22ce",
    font: "font-sans font-black tracking-normal text-xl md:text-2xl lowercase"
  },
  {
    name: "JSW STEEL",
    full: "JSW Group",
    color: "#0284c7",
    font: "font-sans font-black tracking-wide text-xl md:text-2xl"
  },
  {
    name: "HINDALCO",
    full: "Hindalco Industries",
    color: "#15803d",
    font: "font-serif font-bold tracking-widest text-xl md:text-2xl uppercase"
  },
  {
    name: "COAL INDIA",
    full: "Coal India Limited",
    color: "#b45309",
    font: "font-mono font-black tracking-tighter text-xl md:text-2xl"
  },
  {
    name: "BHEL",
    full: "Bharat Heavy Electricals",
    color: "#1e293b",
    font: "font-sans font-black tracking-widest text-xl md:text-2xl"
  },
  {
    name: "vedanta",
    full: "Vedanta Limited",
    color: "#2563eb",
    font: "font-sans font-bold tracking-tight text-xl md:text-2xl lowercase"
  },
  {
    name: "JINDAL STEEL",
    full: "Jindal Steel & Power",
    color: "#dc2626",
    font: "font-sans font-extrabold tracking-wider text-xl md:text-2xl"
  }
];

export default function ClientLogoCarousel() {
  const marqueeList = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Small Sentence Title */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">
            TRUSTED BY INDUSTRY LEADERS IN POWER, CEMENT, STEEL & PROCESS ENGINEERING
          </p>
        </div>

        {/* Smooth Infinite Logo Marquee Strip */}
        <div className="relative overflow-hidden w-full py-4">

          {/* Left & Right Gradient Smooth Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex items-center space-x-12 md:space-x-16">
            {marqueeList.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer px-2"
                title={client.full}
              >
                <span
                  style={{ color: client.color }}
                  className={`${client.font} select-none drop-shadow-2xs hover:scale-105 transition-transform duration-200`}
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
