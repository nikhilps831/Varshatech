import { Product } from "@/data/companyData";

export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  "ash-handling": "/images/products/ash-vessel.jpg",
  "coal-handling": "/images/products/belt-conveyor.jpg",
  "material-handling": "/images/products/screw-conveyor.jpg",
  "valves-gates": "/images/products/dome-valve.jpg",
  "dust-control": "/images/products/bag-filter.jpg",
  "storage-process": "/images/products/silo-prv.jpg",
  "cranes-heavy": "/images/versatech_hero.jpg",
};

export const MASTER_BACKUP_IMAGES: Record<string, string> = {
  "ash-handling": "/images/ash_handling_sys.jpg",
  "coal-handling": "/images/coal_handling_sys.jpg",
  "material-handling": "/images/versatech_hero.jpg",
  "valves-gates": "/images/valves_flow_control.jpg",
  "dust-control": "/images/dust_pollution_control.jpg",
  "storage-process": "/images/pressure_vessels_hero.jpg",
  "cranes-heavy": "/images/versatech_hero.jpg",
};

/**
 * Returns the best image path for a product, ensuring no broken image URLs.
 */
export function getProductImage(product?: Product | null): string {
  if (!product) return "/images/ash_handling_sys.jpg";

  if (product.image && product.image.trim() !== "") {
    return product.image;
  }

  if (product.categoryId && CATEGORY_FALLBACK_IMAGES[product.categoryId]) {
    return CATEGORY_FALLBACK_IMAGES[product.categoryId];
  }

  return "/images/ash_handling_sys.jpg";
}

export function getCategoryFallback(categoryId?: string): string {
  if (categoryId && MASTER_BACKUP_IMAGES[categoryId]) {
    return MASTER_BACKUP_IMAGES[categoryId];
  }
  return "/images/ash_handling_sys.jpg";
}
