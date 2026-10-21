"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  FileText,
  ArrowRight,
  Layers,
  Sparkles,
  ChevronLeft,
  Share2,
  Clock,
  Truck,
  Building,
  Check,
  Award,
  Factory
} from "lucide-react";
import { Product, COMPANY_INFO } from "@/data/companyData";
import { getProductImage, getCategoryFallback } from "@/lib/productImages";
import ProductImage from "@/components/ProductImage";
import EnquiryModal from "@/components/EnquiryModal";

interface ProductDetailViewProps {
  product: Product;
  suggestedProducts: Product[];
}

export default function ProductDetailView({
  product,
  suggestedProducts
}: ProductDetailViewProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryProductName, setEnquiryProductName] = useState(product.name);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleOpenQuote = (pName?: string) => {
    setEnquiryProductName(pName || product.name);
    setModalOpen(true);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const productImage = getProductImage(product);
  const categoryFallback = getCategoryFallback(product.categoryId);
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20VERSATECH%20EPC%2C%20I%20would%20like%20to%20request%20technical%20details%20and%20quotation%20for%20${encodeURIComponent(product.name)}.`;

  return (
    <div className="min-h-screen bg-slate-50 pt-28 sm:pt-32 lg:pt-36 pb-24">

      {/* Breadcrumb Navigation - with generous top padding to prevent ANY navbar overlap */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5">
          <nav className="flex items-center flex-wrap gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-orange-600 transition-colors flex items-center gap-1 font-semibold">
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <Link href="/products" className="hover:text-orange-600 transition-colors font-semibold">
              Products Catalogue
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="text-slate-600 hidden sm:inline">{product.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 hidden sm:inline" />
            <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6">

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center text-xs font-extrabold text-slate-600 hover:text-orange-600 uppercase tracking-wider transition-colors space-x-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* 2-Column Split: Left Data & Specs (Scrollable) | Right Image & Action Showcase (Sticky on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ========================================================================= */}
          {/* LEFT COLUMN: All Product Details, Specs Tables, Trade Info, About (7 cols) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">

            {/* Header: Title, Category & Actions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-orange-50 border border-orange-200 text-orange-800">
                    {product.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    MOQ: 1 Unit / Project Lot
                  </span>
                </div>

                <button
                  onClick={() => handleOpenQuote(product.name)}
                  className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Get a Price / Quote</span>
                </button>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  {product.shortDesc}
                </p>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-bold text-slate-700">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span>ASME Section VIII & IS 2825</span>
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5 font-bold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Factory Hydro-Tested</span>
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5 font-bold text-slate-700">
                  <Factory className="w-4 h-4 text-blue-600" />
                  <span>Direct Works Nagpur Supply</span>
                </span>
              </div>
            </div>

            {/* SECTION 1: Product Specifications Table (Reference Image Match) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                  <Layers className="w-4 h-4 text-orange-600" />
                  <span>{product.name} Technical Specification</span>
                </h2>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">SPEC-EPC</span>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/80">
                  <span className="font-bold text-slate-700">Usage / Application</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium mt-1 sm:mt-0">
                    Industrial Heavy-Duty Material Handling & Pneumatic Conveying
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-white">
                  <span className="font-bold text-slate-700">Condition</span>
                  <span className="sm:col-span-2 text-slate-900 font-semibold mt-1 sm:mt-0 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Brand New / Factory Calibrated</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/80">
                  <span className="font-bold text-slate-700">Material of Construction (MOC)</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium mt-1 sm:mt-0">
                    Carbon Steel (IS 2062) / SS304 / SS316 / Wear-Resistant Basalt & Alloy Lining
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-white">
                  <span className="font-bold text-slate-700">Standards Compliance</span>
                  <span className="sm:col-span-2 text-slate-900 font-mono font-bold mt-1 sm:mt-0">
                    {product.standards?.join(" • ") || "ASME Section VIII / IS 2825 / IS 17938"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/80">
                  <span className="font-bold text-slate-700">Power / Actuation</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium mt-1 sm:mt-0">
                    Pneumatic Double-Acting Cylinder / Electric Geared Motor / Manual Lever
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-white">
                  <span className="font-bold text-slate-700">Warranty</span>
                  <span className="sm:col-span-2 text-slate-900 font-bold mt-1 sm:mt-0 text-emerald-700">
                    12 Months Comprehensive EPC Performance Guarantee
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/80">
                  <span className="font-bold text-slate-700">Key Engineering Attributes</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium mt-1 sm:mt-0">
                    {product.technicalInfo || "Engineered for high durability, zero air/pressure leakage, and continuous duty in harsh operating conditions."}
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 2: Trade & Procurement Information (Reference Image Match) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>{product.name} Trade & Commercial Information</span>
                </h2>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">COMMERCIAL</span>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/80">
                  <span className="font-bold text-slate-700">Minimum Order Quantity (MOQ)</span>
                  <span className="sm:col-span-2 text-slate-900 font-semibold mt-1 sm:mt-0">
                    1 Unit / Custom Project Lot
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-white">
                  <span className="font-bold text-slate-700">Payment Terms</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium mt-1 sm:mt-0">
                    Letter of Credit (LC) / Wire Transfer (T/T) / Cash in Advance (CID) / Milestone Linked
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/80">
                  <span className="font-bold text-slate-700">Supply Ability</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium mt-1 sm:mt-0">
                    Up to 100 TPH Turnkey Packages / 50+ Custom Engineered Assemblies Per Month
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-white">
                  <span className="font-bold text-slate-700">Delivery & Lead Time</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium mt-1 sm:mt-0 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Standard Units: 7-14 Days | Custom Fabrication: As per project schedule</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-slate-50/80">
                  <span className="font-bold text-slate-700">Main Domestic & Global Market</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium mt-1 sm:mt-0">
                    PAN India Supply & Turnkey International Project Export
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-white">
                  <span className="font-bold text-slate-700">Manufacturing Works</span>
                  <span className="sm:col-span-2 text-slate-900 font-medium mt-1 sm:mt-0 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-500" />
                    <span>33, Sarvashree Nagar, Umred Road, Dighori, Nagpur – 440034, India</span>
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 3: Key Engineering Features */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight flex items-center gap-2 border-b border-slate-100 pb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Key Engineering Features</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-xs text-slate-800"
                  >
                    <div className="w-5 h-5 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-orange-700 stroke-[3]" />
                    </div>
                    <span className="font-semibold leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 4: Detailed About & Engineering Narrative (Reference Image Match) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight border-b border-slate-100 pb-3">
                About {product.name} Engineering & Performance
              </h2>

              <div className="prose prose-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Experience the commanding performance and rugged reliability of the <strong>{product.name}</strong>,
                  custom-engineered by VERSATECH EPC for demanding industrial environments. Designed specifically to handle
                  abrasive, high-temperature, and fine particulate media, each unit offers seamless integration into your bulk
                  material handling flow.
                </p>
                <p>
                  Manufactured strictly in accordance with ASME Section VIII and IS standards at our Nagpur facility, each assembly undergoes
                  rigorous dimensional audits, non-destructive weld testing (NDT), and 100% factory hydro/pneumatic pressure tests prior to dispatch.
                  Whether deployed in thermal power plants, cement clinker grinding lines, or chemical powder transfer networks, the {product.name} guarantees
                  uncompromising uptime, zero fugitive dust emissions, and extended mean-time-between-maintenance (MTBM).
                </p>
              </div>

              {/* Applications Tags */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-xs font-black text-slate-500 uppercase tracking-wider block">
                  Recommended Industry Deployments:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1 bg-slate-100 hover:bg-orange-50 hover:text-orange-900 border border-slate-200 rounded-full text-xs font-bold text-slate-700 transition-colors"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: STICKY PRODUCT IMAGE SHOWCASE & ACTION CTAs (5 cols)         */}
          {/* Sticks in place while the user scrolls down the specs & data               */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-36 space-y-4">

            {/* Main Showcase Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden p-4 sm:p-6 space-y-5">

              {/* Product Visual Container with Action Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    EQUIPMENT ID: #{product.id.toUpperCase()}
                  </span>

                  {/* Share Link Button */}
                  <button
                    onClick={handleShare}
                    title="Copy product link"
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-orange-600 hover:bg-slate-50 transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold">{copiedLink ? "Copied!" : "Share"}</span>
                  </button>
                </div>

                {/* High-Resolution Image Box */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200/90 aspect-[4/3] w-full bg-slate-950 group shadow-md">
                  <ProductImage
                    src={productImage}
                    alt={product.name}
                    fallbackSrc={categoryFallback}
                    priority={true}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-40 pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-orange-600 text-white shadow-lg">
                    {product.category}
                  </div>

                  {/* Standards Badge */}
                  {product.standards && product.standards[0] && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-950/85 text-slate-200 border border-slate-700 backdrop-blur-md">
                      {product.standards[0]}
                    </div>
                  )}

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 drop-shadow">
                    <span className="font-bold">{product.name}</span>
                    <span className="text-[10px] bg-slate-900/80 px-2 py-0.5 rounded font-mono">100% Tested</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons (Send Inquiry & WhatsApp Desk) */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <button
                  onClick={() => handleOpenQuote(product.name)}
                  className="w-full btn-primary-orange py-3.5 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Send Technical Inquiry</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Call Back / WhatsApp</span>
                </a>
              </div>

              {/* Quick Contact & Engineering Direct Desk */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Direct Phone:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phones[0]}`}
                    className="font-mono font-bold text-slate-800 hover:text-orange-600 flex items-center gap-1"
                  >
                    <PhoneCall className="w-3 h-3 text-orange-600" />
                    <span>{COMPANY_INFO.phones[0]}</span>
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Sales Desk:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.emails.sales}`}
                    className="font-semibold text-slate-800 hover:text-orange-600 truncate max-w-[200px]"
                  >
                    {COMPANY_INFO.emails.sales}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Location:</span>
                  <span className="font-medium text-slate-700">Nagpur, Maharashtra, India</span>
                </div>
              </div>

              {/* EPC Guarantee Card */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-slate-900 font-black uppercase text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>VERSATECH Quality Guarantee</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Every unit is custom-fabricated to certified ASME / IS standards with 12 months field performance assurance.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* SUGGESTED DEVICES & COMPLEMENTARY EQUIPMENT SECTION (Below Details)      */}
        {/* ========================================================================= */}
        {suggestedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 rounded-full text-[11px] font-extrabold uppercase tracking-wider mb-2">
                  <Layers className="w-3 h-3 text-blue-600" />
                  <span>COMPLEMENTARY & RELATED EQUIPMENT</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Suggested Devices for Your Plant Setup
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  High-durability components frequently deployed alongside the <strong>{product.name}</strong> for turnkey efficiency.
                </p>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 uppercase tracking-wider whitespace-nowrap self-start md:self-end"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Suggested Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestedProducts.map((suggested) => (
                <div
                  key={suggested.id}
                  className="group bg-white rounded-xl border border-slate-200/90 hover:border-orange-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Image */}
                  <Link
                    href={`/products/${suggested.id}`}
                    className="block relative h-44 w-full overflow-hidden bg-slate-950 group-hover:opacity-95"
                  >
                    <ProductImage
                      src={getProductImage(suggested)}
                      alt={suggested.name}
                      fallbackSrc={getCategoryFallback(suggested.categoryId)}
                      className="object-cover w-full h-full group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-slate-950/85 text-orange-400 border border-slate-700/60 backdrop-blur-md">
                      {suggested.category}
                    </div>

                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1 text-[10px] font-bold text-white bg-orange-600 px-2 py-0.5 rounded shadow">
                      <span>Specs</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <Link href={`/products/${suggested.id}`}>
                        <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug line-clamp-1">
                          {suggested.name}
                        </h4>
                      </Link>
                      <p className="text-slate-600 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {suggested.shortDesc}
                      </p>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <Link
                        href={`/products/${suggested.id}`}
                        className="text-[11px] font-extrabold text-slate-700 hover:text-orange-600 uppercase tracking-wider inline-flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => handleOpenQuote(suggested.name)}
                        className="btn-primary-orange px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* Technical Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={enquiryProductName}
      />

    </div>
  );
}
