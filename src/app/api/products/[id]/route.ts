import { NextRequest, NextResponse } from "next/server";
import { getProductById, updateProduct, deleteProduct } from "@/lib/productsDb";
import { PRODUCT_CATEGORIES } from "@/data/companyData";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch product" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    if (body.categoryId && !body.category) {
      const cat = PRODUCT_CATEGORIES.find((c) => c.id === body.categoryId);
      if (cat) body.category = cat.name;
    }

    if (typeof body.applications === "string") {
      body.applications = body.applications.split("\n").map((s: string) => s.trim()).filter(Boolean);
    }
    if (typeof body.features === "string") {
      body.features = body.features.split("\n").map((s: string) => s.trim()).filter(Boolean);
    }
    if (typeof body.standards === "string") {
      body.standards = body.standards.split(",").map((s: string) => s.trim()).filter(Boolean);
    }

    const result = updateProduct(id, body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = deleteProduct(id);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: `Product ${id} deleted successfully.` });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to delete product" },
      { status: 500 }
    );
  }
}
