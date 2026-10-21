"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, CheckCircle2, ChevronRight, X, Info, Sparkles, Layers } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from "@/data/companyData";
import { getProductImage, getCategoryFallback } from "@/lib/productImages";
import ProductImage from "@/components/ProductImage";

interface ProductCatalogProps {
  onOpenQuoteModal: (productName?: string) => void;
  selectedCategoryFromProps?: string;
  limit?: number;
  showAllButton?: boolean;
  isHomePage?: boolean;
}

// 9 Flagship products across key categories with photorealistic imagery
const FLAGSHIP_PRODUCT_IDS = [
  "dome-valve-ash",
  "ash-vessel",
  "rotary-airlock-valve-ash",
  "belt-conveyor-system",
  "screw-conveyor",
  "knife-gate-valve-ash",
  "basalt-bend",
  "silo-pressure-release-valve",
  "dust-extraction-system-coal"
];

export default function ProductCatalog({
  onOpenQuoteModal,
  selectedCategoryFromProps,
  limit,
  showAllButton = false,
  isHomePage = false
}: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFromProps || "all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    // If on home page with "all" category and no search, prioritize the 9 diverse flagship devices
    if (limit && activeCategory === "all" && !searchQuery.trim()) {
      const flagship = FLAGSHIP_PRODUCT_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(
        Boolean
      ) as Product[];
      if (flagship.length >= 9) return flagship.slice(0, 9);
    }

    return PRODUCTS.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.categoryId === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, limit]);

  // Apply limit if specified (e.g. 9 on home page)
  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  // Complete list of categories with product counts
  const categoryItems = useMemo(() => [
    { id: "all", name: "All Products", count: PRODUCTS.length },
    ...PRODUCT_CATEGORIES.map((cat) => ({
      id: cat.id,
      name: cat.name,
      count: PRODUCTS.filter((p) => p.categoryId === cat.id).length
    }))
  ], []);

  // 4 sets ensuring seamless infinite loop across all viewports
  const loopedCategories = useMemo(() => [
    ...categoryItems,
    ...categoryItems,
    ...categoryItems,
    ...categoryItems
  ], [categoryItems]);

  return (
    <section id="products" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-orange-50 border border-orange-200 text-orange-800 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>INDUSTRIAL PRODUCT CATALOGUE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
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
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
                title="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Carousel with Smooth Continuous Scroll & Stop on Hover */}
          <div className="space-y-3">
            <div className="relative overflow-hidden w-full py-2 group/category-carousel">

              {/* Left & Right Smooth Gradient Fade Masks (blends directly into white section background) */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

              {/* Infinite Moving Track with Cursor Stop Effect */}
              <div className="animate-category-carousel flex items-center space-x-3 py-1 group-hover/category-carousel:[animation-play-state:paused] active:[animation-play-state:paused]">
                {loopedCategories.map((cat, idx) => {
                  const isActive = activeCategory === cat.id;
                  const isAll = cat.id === "all";

                  // All Products button when active is sleek dark slate/black (NEVER ORANGE)
                  // Specific categories when active get the industrial orange accent
                  let activeClasses = "";
                  if (isActive) {
                    if (isAll) {
                      activeClasses = "bg-slate-950 text-white border-slate-950 shadow-md scale-105 ring-2 ring-slate-800/30";
                    } else {
                      activeClasses = "bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white border-orange-600 shadow-md scale-105 ring-2 ring-orange-400/40";
                    }
                  } else {
                    activeClasses = "bg-slate-100/90 hover:bg-slate-200/90 text-slate-700 hover:text-slate-950 border-slate-200/90 hover:border-slate-300 hover:scale-[1.03]";
                  }

                  return (
                    <button
                      key={`${cat.id}-${idx}`}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center space-x-2 border shadow-xs select-none ${activeClasses}`}
                    >
                      <span>{cat.name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-200/90 text-slate-600"
                          }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Micro Filter Status Bar & Hint */}
            <div className="flex flex-wrap items-center justify-between text-xs px-2 gap-2">
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Active Filter:</span>
                <span
                  className={`font-extrabold px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1.5 border ${activeCategory === "all"
                    ? "bg-slate-100 border-slate-200 text-slate-800"
                    : "bg-orange-50 border-orange-200 text-orange-900"
                    }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${activeCategory === "all" ? "bg-slate-700" : "bg-orange-500 animate-pulse"
                      }`}
                  ></span>
                  <span>{activeCategory === "all" ? "All Equipment" : PRODUCT_CATEGORIES.find(c => c.id === activeCategory)?.name || "All"}</span>
                  <span className={`font-mono text-[10px] ${activeCategory === "all" ? "text-slate-500" : "text-orange-700"}`}>
                    ({filteredProducts.length})
                  </span>
                </span>
                {activeCategory !== "all" && (
                  <button
                    onClick={() => setActiveCategory("all")}
                    className="text-slate-600 hover:text-slate-950 font-bold underline text-[11px] ml-1"
                  >
                    Reset Filter
                  </button>
                )}
              </div>


            </div>
          </div>

        </div>

        {/* Product Grid */}
        {displayedProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
            <Info className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No products match your search query</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try resetting filters or contact our engineering team for customized equipment design.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 text-xs font-bold text-orange-600 underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedProducts.map((product) => {
              const productImg = getProductImage(product);
              const fallbackImg = getCategoryFallback(product.categoryId);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 hover:border-orange-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Image Section */}
                  <Link
                    href={`/products/${product.id}`}
                    className="block relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950 group-hover:opacity-95"
                  >
                    <ProductImage
                      src={productImg}
                      alt={product.name}
                      fallbackSrc={fallbackImg}
                      className="object-cover w-full h-full group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category Floating Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-950/85 text-orange-400 border border-slate-700/60 backdrop-blur-md shadow-md">
                      {product.category}
                    </div>

                    {/* Standards Badge */}
                    {product.standards && product.standards[0] && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-900/85 text-slate-200 border border-slate-700/60 backdrop-blur-md">
                        {product.standards[0]}
                      </div>
                    )}

                    {/* Hover Prompt Badge */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1 text-[11px] font-extrabold text-white bg-orange-600/90 px-2.5 py-1 rounded-lg shadow-lg">
                      <span>View Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <Link href={`/products/${product.id}`}>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors leading-snug line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                        {product.shortDesc}
                      </p>

                      {/* Applications Chips */}
                      <div className="mt-3.5">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">
                          Key Applications:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.applications.slice(0, 2).map((app) => (
                            <span
                              key={app}
                              className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200/60"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <Link
                        href={`/products/${product.id}`}
                        className="inline-flex items-center space-x-1 text-xs font-black text-slate-700 hover:text-orange-600 transition-colors uppercase tracking-wider"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => onOpenQuoteModal(product.name)}
                        className="btn-primary-orange px-4 py-2 rounded-lg text-[11px] font-extrabold uppercase tracking-wider shadow-sm hover:shadow-orange-500/25 transition-all"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* SHOW ALL PRODUCTS BUTTON (Shown on Home Page or when limit is active) */}
        {(showAllButton || limit) && (
          <div className="mt-14 pt-8 text-center border-t border-slate-100">
            <div className="max-w-xl mx-auto space-y-4">
              <p className="text-slate-500 text-xs uppercase tracking-wider font-bold">
                Showing {displayedProducts.length} of {PRODUCTS.length} Equipment & Components
              </p>
              <div>
                <Link
                  href="/products"
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-black uppercase tracking-wider text-xs sm:text-sm shadow-xl hover:shadow-orange-600/30 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 border border-orange-400/40"
                >
                  <Layers className="w-4 h-4 text-orange-200" />
                  <span>Show All Products ({PRODUCTS.length}+ Equipment)</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
