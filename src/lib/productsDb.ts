import fs from "fs";
import path from "path";
import { PRODUCTS as DEFAULT_PRODUCTS, Product, PRODUCT_CATEGORIES } from "@/data/companyData";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "products.json");

function ensureDbExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(DEFAULT_PRODUCTS, null, 2), "utf8");
  }
}

export function getAllProducts(): Product[] {
  try {
    ensureDbExists();
    const raw = fs.readFileSync(DB_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_PRODUCTS;
  } catch (error) {
    console.error("Error reading products DB:", error);
    return DEFAULT_PRODUCTS;
  }
}

export function getProductById(id: string): Product | undefined {
  const products = getAllProducts();
  return products.find((p) => p.id === id);
}

export function saveProduct(product: Product): { success: boolean; data?: Product; error?: string } {
  try {
    ensureDbExists();
    const products = getAllProducts();

    if (products.some((p) => p.id === product.id)) {
      return { success: false, error: `Product with ID '${product.id}' already exists.` };
    }

    products.unshift(product);
    fs.writeFileSync(DB_FILE, JSON.stringify(products, null, 2), "utf8");
    return { success: true, data: product };
  } catch (error: any) {
    console.error("Error saving product:", error);
    return { success: false, error: error?.message || "Failed to save product" };
  }
}

export function updateProduct(
  id: string,
  updatedFields: Partial<Product>
): { success: boolean; data?: Product; error?: string } {
  try {
    ensureDbExists();
    const products = getAllProducts();
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      return { success: false, error: "Product not found." };
    }

    const updated: Product = {
      ...products[index],
      ...updatedFields,
      id // preserve ID integrity
    };

    products[index] = updated;
    fs.writeFileSync(DB_FILE, JSON.stringify(products, null, 2), "utf8");
    return { success: true, data: updated };
  } catch (error: any) {
    console.error("Error updating product:", error);
    return { success: false, error: error?.message || "Failed to update product" };
  }
}

export function deleteProduct(id: string): { success: boolean; error?: string } {
  try {
    ensureDbExists();
    const products = getAllProducts();
    const filtered = products.filter((p) => p.id !== id);

    if (filtered.length === products.length) {
      return { success: false, error: "Product not found." };
    }

    fs.writeFileSync(DB_FILE, JSON.stringify(filtered, null, 2), "utf8");
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting product:", error);
    return { success: false, error: error?.message || "Failed to delete product" };
  }
}

export function resetProductsToDefault(): { success: boolean; count: number; error?: string } {
  try {
    ensureDbExists();
    fs.writeFileSync(DB_FILE, JSON.stringify(DEFAULT_PRODUCTS, null, 2), "utf8");
    return { success: true, count: DEFAULT_PRODUCTS.length };
  } catch (error: any) {
    console.error("Error resetting products DB:", error);
    return { success: false, count: 0, error: error?.message || "Failed to reset products" };
  }
}
