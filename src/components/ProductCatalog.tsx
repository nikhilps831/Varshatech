"use client";

import { useState, useMemo } from "react";
import { Search, Filter, ArrowRight, Shield, CheckCircle2, ChevronRight, X, FileText, Info } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from "@/data/companyData";

interface ProductCatalogProps {
  onOpenQuoteModal: (productName?: string) => void;
  selectedCategoryFromProps?: string;
}

export default function ProductCatalog({
  onOpenQuoteModal,
  selectedCategoryFromProps
}: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFromProps || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.categoryId === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <span>INDUSTRIAL PRODUCT CATALOGUE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Equipment & Component Offerings
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Engineered for high durability, low maintenance, and continuous duty in harsh industrial operating conditions.
          </p>
        </div>

        {/* Toolbar: Search Bar + Category Tabs */}
        <div className="mb-10 space-y-6">
          
          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product by name, keyword, or application (e.g. Dome Valve, Ash Vessel, Conveyor)..."
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-2 space-x-2 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
                activeCategory === "all"
                  ? "bg-slate-900 text-white border-slate-900 shadow"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>

            {PRODUCT_CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
                    activeCategory === cat.id
                      ? "bg-orange-600 text-white border-orange-600 shadow"
                      : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
            <Info className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No products match your search query</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting filters or contact our engineering team for customized equipment.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 text-xs font-bold text-blue-600 underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="industrial-card bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between p-5 space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase">
                      {product.category}
                    </span>
                    {product.standards && (
                      <span className="text-[9px] font-mono font-bold text-slate-500">
                        {product.standards[0]}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  <div className="mt-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Applications:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.slice(0, 2).map((app) => (
                        <span key={app} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
                  >
                    View Specs
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(product.name)}
                    className="btn-primary-orange px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider"
                  >
                    Enquire
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 my-8">
              
              <div className="bg-blueprint-grid text-white p-6 flex items-center justify-between border-b border-slate-700">
                <div>
                  <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest">
                    VERSATECH EPC CATALOGUE SPECIFICATION
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">{selectedProduct.name}</h3>
                  <p className="text-xs text-slate-300">{selectedProduct.category}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1">Overview</h4>
                  <p className="text-slate-800 text-sm leading-relaxed">{selectedProduct.shortDesc}</p>
                </div>

                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Applications</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProduct.applications.map((app) => (
                      <li key={app} className="flex items-center space-x-1.5 p-2 bg-slate-50 rounded border border-slate-200 text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedProduct.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2">
                        <span className="text-orange-500 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProduct.standards && (
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1">Applicable Standards</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.standards.map((std) => (
                        <span key={std} className="px-3 py-1 bg-slate-900 text-white rounded text-xs font-mono font-bold">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs text-slate-600">
                  <strong className="text-slate-800 block mb-1">Technical Specifications:</strong>
                  {selectedProduct.technicalInfo || "Contact us for technical specifications and customized requirements."}
                </div>
              </div>

              <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 uppercase"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    const pName = selectedProduct.name;
                    setSelectedProduct(null);
                    onOpenQuoteModal(pName);
                  }}
                  className="btn-primary-orange px-6 py-2.5 rounded text-xs font-extrabold uppercase tracking-wider flex items-center space-x-2 shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Technical Enquiry</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
