"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, Shield, ArrowRight, Cog } from "lucide-react";
import { COMPANY_INFO, SOLUTIONS, PRODUCT_CATEGORIES } from "@/data/companyData";

interface FooterProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Top CTA Banner */}
        {/* <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-orange-950/80 border border-orange-700/60 rounded-full text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>Turnkey Material Handling Systems</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
              Ready to Upgrade Your Industrial Material Handling System?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              From concept design and detailed engineering to manufacturing, site installation, and ongoing O&M support.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-primary-orange px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider shadow-xl flex items-center space-x-2"
            >
              <span>REQUEST TECHNICAL QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div> */}

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">

          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 p-1 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="VERSATECH EPC Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-black text-white tracking-wider">VERSATECH</span>
                <span className="text-xl font-black text-orange-500">EPC</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              VERSATECH EPC is an Indian industrial engineering, manufacturing, and EPC company founded in 2008 in Nagpur, Maharashtra. Specializing in advanced material handling systems, coal handling plants (CHP up to 100 TPH), pneumatic ash handling systems, and industrial equipment.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Stated Pressure Vessel Standards:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {COMPANY_INFO.standards.map((std) => (
                  <span
                    key={std}
                    className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-200 rounded text-[10px] font-mono font-bold"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Core Solutions */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-3">
              Core Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SOLUTIONS.map((sol) => (
                <li key={sol.id}>
                  <Link
                    href={`/solutions#${sol.id}`}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    <span>{sol.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-3">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-3">
              Corporate Office & Works
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div className="flex flex-col">
                  {COMPANY_INFO.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="hover:text-white transition-colors font-mono">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`mailto:${COMPANY_INFO.emails.sales}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.emails.sales}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.emails.info}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.emails.info}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.emails.primary}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.emails.primary}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`http://${COMPANY_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} VERSATECH EPC. All Rights Reserved. Founded 2008 in Nagpur, Maharashtra, India.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
            <Link href="/admin" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <Cog className="w-3 h-3 text-slate-500" /> Admin
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
