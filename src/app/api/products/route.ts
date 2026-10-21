import { NextRequest, NextResponse } from "next/server";
import { getAllProducts, saveProduct } from "@/lib/productsDb";
import { PRODUCT_CATEGORIES, Product } from "@/data/companyData";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const query = searchParams.get("q")?.toLowerCase();

    let products = getAllProducts();

    if (category && category !== "all") {
      products = products.filter((p) => p.categoryId === category);
    }

    if (query) {
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.shortDesc.toLowerCase().includes(query) ||
          p.applications.some((app) => app.toLowerCase().includes(query)) ||
          p.features.some((feat) => feat.toLowerCase().includes(query))
      );
    }

    return NextResponse.json({
      success: true,
      count: products.length,
      categories: PRODUCT_CATEGORIES,
      data: products
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      category,
      categoryId,
      shortDesc,
      applications,
      features,
      technicalInfo,
      standards,
      image,
      id: customId
    } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Product name is required." },
        { status: 400 }
      );
    }

    const sanitizedId = (customId || name)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!sanitizedId) {
      return NextResponse.json(
        { success: false, error: "Invalid product name or slug ID." },
        { status: 400 }
      );
    }

    let catId = categoryId || "material-handling";
    let catName = category;

    const matchedCategory = PRODUCT_CATEGORIES.find(
      (c) => c.id === catId || c.name.toLowerCase() === (category || "").toLowerCase()
    );

    if (matchedCategory) {
      catId = matchedCategory.id;
      catName = matchedCategory.name;
    } else if (!catName) {
      catName = "Material Handling Equipment";
      catId = "material-handling";
    }

    const parsedApps = Array.isArray(applications)
      ? applications
      : typeof applications === "string"
      ? applications.split("\n").map((s: string) => s.trim()).filter(Boolean)
      : ["Industrial Plants", "Material Handling Facilities"];

    const parsedFeatures = Array.isArray(features)
      ? features
      : typeof features === "string"
      ? features.split("\n").map((s: string) => s.trim()).filter(Boolean)
      : ["Heavy-duty industrial construction", "Engineered to ASME / IS standards"];

    const parsedStandards = Array.isArray(standards)
      ? standards
      : typeof standards === "string"
      ? standards.split(",").map((s: string) => s.trim()).filter(Boolean)
      : standards
      ? [standards]
      : ["IS Standards Compliant"];

    const newProduct: Product = {
      id: sanitizedId,
      name: name.trim(),
      category: catName,
      categoryId: catId,
      shortDesc: shortDesc?.trim() || "Heavy-duty industrial equipment manufactured by VERSATECH EPC.",
      applications: parsedApps.length > 0 ? parsedApps : ["Thermal Power Plants", "Cement & Steel Plants"],
      features: parsedFeatures.length > 0 ? parsedFeatures : ["Durable design", "Low maintenance"],
      technicalInfo: technicalInfo?.trim() || "Contact VERSATECH EPC for customized technical specifications and engineering drawings.",
      standards: parsedStandards,
      image: image?.trim() || "/images/products/ash-vessel.jpg"
    };

    const result = saveProduct(newProduct);
    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to create product" },
      { status: 500 }
    );
  }
}
