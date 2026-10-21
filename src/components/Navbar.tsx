"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Cog,
  Home,
  Building2,
  Package,
  Wrench,
  Factory,
  FolderGit2,
  Settings,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  FileText,
  ExternalLink,
  Download
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

interface NavbarProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for glassmorphic header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer or cert modal is open
  useEffect(() => {
    if (mobileMenuOpen || showCertModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, showCertModal]);

  // Close drawer on route change or ESC
  useEffect(() => {
    setMobileMenuOpen(false);
    setShowCertModal(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setShowCertModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Building2 },
    { name: "Products", href: "/products", icon: Package },
    { name: "Solutions", href: "/solutions", icon: Wrench },
    { name: "Industries", href: "/industries", icon: Factory },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Services", href: "/services", icon: Settings },
    { name: "Contact", href: "/contact", icon: PhoneCall },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">

      {/* TOP EXECUTIVE CREDENTIALS BAR (Desktop only: hidden on mobile & tablet) */}
      <div className="hidden lg:block bg-slate-950 text-slate-300 text-xs py-2 px-4 md:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-slate-300 text-[11px] sm:text-xs">
            <span className="flex items-center text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-orange-500 mr-1.5 flex-shrink-0" />
              <span>Nagpur, Maharashtra, India</span>
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="flex items-center text-slate-300 hover:text-orange-400 transition-colors font-medium font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400 mr-1.5 flex-shrink-0" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </a>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.emails.sales}`}
              className="flex items-center text-slate-300 hover:text-orange-400 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400 mr-1.5 flex-shrink-0" />
              <span>{COMPANY_INFO.emails.sales}</span>
            </a>
          </div>

          {/* Trust Badges & Portal */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-900 border border-slate-800 rounded-full text-slate-300 font-medium text-[10px] tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              <span>Estd. {COMPANY_INFO.foundedYear} </span>
            </span>

            <button
              type="button"
              onClick={() => setShowCertModal(true)}
              title="TradeIndia Verified Seller - Click to open Certificate of Trust"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 hover:border-emerald-500 rounded-full text-emerald-300 hover:text-emerald-200 font-semibold text-[10px] tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Verified Seller</span>
            </button>

            <Link
              href="/admin"
              className="text-slate-400 hover:text-white text-[11px] font-semibold transition-colors flex items-center gap-1 px-2 py-0.5 rounded hover:bg-slate-900 border border-transparent hover:border-slate-800"
            >
              <Cog className="w-3 h-3 text-slate-400" />
              <span>Admin</span>
            </Link>
          </div>

        </div>
      </div>

      {/* MAIN NAVIGATION BAR (Light Theme with Glassmorphism) */}
      <nav
        className={`w-full transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-xl py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.07)] border-b border-slate-200/90"
          : "bg-white py-3.5 border-b border-slate-200/80"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* BRAND LOGO (Clean transparent logo without orange background block) */}
          <Link href="/" className="flex items-center gap-3 group py-0.5">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="VERSATECH EPC Official Logo"
                width={48}
                height={48}
                priority
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-950 group-hover:text-black transition-colors">
                  VERSATECH
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-black text-orange-600 tracking-tight">
                  EPC
                </span>
              </div>
              <p className="text-[8.5px] sm:text-[9.5px] md:text-[10px] text-slate-500 uppercase tracking-[0.14em] font-bold font-mono mt-0.5 truncate max-w-[175px] sm:max-w-none">
                Material Handling & Engineering
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-bold tracking-tight transition-all duration-150 relative ${isActive
                    ? "text-orange-600 bg-orange-50/90 shadow-2xs font-extrabold"
                    : "text-slate-700 hover:text-orange-600 hover:bg-orange-50/50"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-orange-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center space-x-3">


            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-primary-orange px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-extrabold flex items-center space-x-2 shadow-md hover:shadow-orange-500/25 transition-all active:scale-95"
            >
              <span>REQUEST A QUOTE</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* MOBILE / TABLET TOUCH ACTIONS */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-primary-orange text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-lg flex items-center space-x-1 shadow-sm active:scale-95"
              aria-label="Request a quote"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Quote</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all border border-slate-200 active:scale-95"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-950" /> : <Menu className="w-5 h-5 text-slate-950" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE BACKDROP OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* MOBILE / TABLET PREMIUM TOUCH DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 bottom-0 w-full sm:w-96 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-slate-200">

          {/* Drawer Top Header */}
          <div className="p-5 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="VERSATECH Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-black text-slate-950 text-base">VERSATECH</span>
                  <span className="font-black text-orange-600 text-base">EPC</span>
                </div>
                <p className="text-[9px] text-slate-500 font-mono font-bold uppercase mt-0.5">Estd. 2008 • Nagpur</p>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-950 flex items-center justify-center active:scale-90 transition-all shadow-2xs"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Touch Pills */}
          <div className="p-4 border-b border-slate-100 bg-white space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setShowCertModal(true);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-700/60 shadow-xs transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">TradeIndia Verified Seller</span>
              </div>
              <span className="text-[10px] bg-emerald-800/90 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-600/40 font-semibold">
                View Certificate
              </span>
            </button>

            <div className="grid grid-cols-3 gap-2">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-all active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-orange-600 mb-1" />
                <span className="text-[10px] font-extrabold uppercase tracking-tight">Call Now</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello VERSATECH EPC, I would like to inquire about your material handling systems.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 transition-all active:scale-95 text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 mb-1" />
                <span className="text-[10px] font-extrabold uppercase tracking-tight">WhatsApp</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.emails.sales}`}
                className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 transition-all active:scale-95 text-center"
              >
                <Mail className="w-4 h-4 text-blue-600 mb-1" />
                <span className="text-[10px] font-extrabold uppercase tracking-tight">Email</span>
              </a>
            </div>
          </div>

          {/* Navigation Links with Icons and Big Touch Targets */}
          <div className="p-4 flex-1 space-y-1.5 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all active:scale-[0.98] ${isActive
                    ? "bg-orange-50 text-orange-600 font-extrabold border-l-4 border-orange-600 shadow-2xs"
                    : "text-slate-800 hover:bg-slate-50 font-bold hover:text-slate-950"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent
                      className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-orange-600" : "text-slate-400"
                        }`}
                    />
                    <span className="text-sm tracking-tight">{link.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 ${isActive ? "text-orange-600" : "text-slate-300"
                      }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Drawer Bottom Actions & Footer */}
          <div className="p-5 border-t border-slate-200 bg-slate-50/80 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full btn-primary-orange py-3.5 rounded-xl text-center text-xs uppercase font-black tracking-wider flex items-center justify-center space-x-2 shadow-md active:scale-95 transition-all"
            >
              <span>REQUEST INSTANT QUOTE</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1 text-center font-mono">
              <p className="flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-orange-500" />
                <span>Nagpur, Maharashtra, India</span>
              </p>
              <p className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span>ASME • IS 2825 • DIN Standards Compliant</span>
              </p>
            </div>
          </div>

        </div>
      )}

      {/* CERTIFICATE OF TRUST LIGHTBOX MODAL */}
      {showCertModal && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setShowCertModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 id="cert-modal-title" className="text-sm sm:text-base font-bold text-white truncate">
                    Certificate of Trust
                  </h3>
                  <p className="text-[11px] text-emerald-400 font-medium truncate">
                    TradeIndia Verified Seller Partner • VERSATECH EPC
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                <a
                  href="/certificate-of-trust.png"
                  download="VERSATECH-EPC-Certificate-of-Trust.png"
                  title="Download Certificate Image"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                </a>
                <a
                  href="/certificate.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Certificate in New Tab"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setShowCertModal(false)}
                  title="Close modal (Esc)"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Certificate Image Display */}
            <div className="p-3 sm:p-5 bg-slate-950/70 overflow-y-auto max-h-[72vh] flex items-center justify-center">
              <img
                src="/certificate-of-trust.png"
                alt="VERSATECH EPC TradeIndia Certificate of Trust"
                className="w-auto max-w-full h-auto max-h-[68vh] object-contain rounded-lg shadow-xl border border-slate-800/80"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-slate-400 text-center sm:text-left text-[11px] leading-tight">
                <span className="text-slate-300 font-semibold block sm:inline">DEVENDRA RAMPRASAD SHUKLA (Proprietor)</span>
                <span className="hidden sm:inline"> • </span>
                <span>GSTIN: <strong className="text-emerald-400 font-mono">27AAGFV7936A1Z2</strong></span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href="https://www.tradeindia.com/truststamp-member/Versatech-EPC-27976599/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors text-[11px]"
                >
                  <span>Verify on TradeIndia</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={() => setShowCertModal(false)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg transition-colors text-[11px] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
