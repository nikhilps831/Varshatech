import { NextResponse } from "next/server";
import { resetProductsToDefault } from "@/lib/productsDb";

export async function POST() {
  try {
    const result = resetProductsToDefault();
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to reset products" },
        { status: 500 }
      );
    }
    return NextResponse.json({
      success: true,
      message: `Reset complete. ${result.count} default products restored.`,
      count: result.count
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to reset products" },
      { status: 500 }
    );
  }
}
