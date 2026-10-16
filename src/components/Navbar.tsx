"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Cog } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

interface NavbarProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">

      {/* TOP BAR (Light Theme) */}
      <div className="bg-slate-100 text-slate-700 text-xs py-2 px-4 md:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">

          <div className="flex flex-wrap items-center gap-4 text-slate-700 font-medium">
            <span className="flex items-center text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-orange-600 mr-1 flex-shrink-0" />
              <span>Nagpur, Maharashtra, India</span>
            </span>
            <span className="hidden md:inline-block text-slate-300">|</span>
            <span className="flex items-center text-slate-700">
              <Phone className="w-3.5 h-3.5 text-slate-600 mr-1 flex-shrink-0" />
              <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-orange-600 transition-colors font-mono">{COMPANY_INFO.phones[0]}</a>
            </span>
            <span className="hidden md:inline-block text-slate-300">|</span>
            <span className="flex items-center text-slate-700">
              <Mail className="w-3.5 h-3.5 text-slate-600 mr-1 flex-shrink-0" />
              <a href={`mailto:${COMPANY_INFO.emails.sales}`} className="hover:text-orange-600 transition-colors">{COMPANY_INFO.emails.sales}</a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-orange-100 text-orange-800 border border-orange-200 rounded font-semibold text-[10px] uppercase tracking-wider">
              Founded {COMPANY_INFO.foundedYear}
            </span>
            <Link
              href="/admin"
              className="text-slate-600 hover:text-slate-900 text-[11px] font-semibold transition-colors flex items-center gap-1"
            >
              <Cog className="w-3 h-3 text-slate-500" />
              Admin Portal
            </Link>
          </div>

        </div>
      </div>

      {/* MAIN NAVIGATION BAR (Light Theme) */}
      <nav
        className={`w-full transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200"
          : "bg-white py-4 border-b border-slate-200"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-orange-600 rounded flex items-center justify-center text-white shadow-md font-mono font-black text-xl">
              V
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-slate-900 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl md:text-2xl font-black tracking-wider text-slate-900">VERSATECH</span>
                <span className="text-xl md:text-2xl font-black text-orange-600">EPC</span>
              </div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold font-mono">
                Material Handling & Engineering
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-extrabold transition-colors duration-150 tracking-wide ${isActive
                    ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                    : "text-slate-700 hover:text-orange-600"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* REQUEST A QUOTE CTA BUTTON */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-primary-orange px-5 py-2.5 rounded text-xs uppercase tracking-wider font-black shadow flex items-center space-x-2"
            >
              <span>REQUEST A QUOTE</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-800 hover:text-black p-2 rounded bg-slate-100 border border-slate-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 text-slate-900 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold py-2 border-b border-slate-100 flex items-center justify-between ${pathname === link.href ? "text-orange-600" : "text-slate-800"
                  }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full btn-primary-orange py-3 rounded text-center text-xs uppercase font-black tracking-wider block"
            >
              REQUEST A QUOTE
            </button>

            <div className="pt-2 text-xs text-slate-600 space-y-1 text-center">
              <p>📍 {COMPANY_INFO.address}</p>
              <p>📞 {COMPANY_INFO.phones.join(" / ")}</p>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
