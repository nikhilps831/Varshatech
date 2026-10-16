import { NextRequest, NextResponse } from "next/server";
import { updateEnquiryStatus } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, note } = body;

    const validStatuses = ["NEW", "CONTACTED", "QUOTATION SENT", "IN DISCUSSION", "WON", "CLOSED"];
    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status value provided." },
        { status: 400 }
      );
    }

    const updated = updateEnquiryStatus(id, status, note);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Enquiry ID not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to update enquiry status" },
      { status: 500 }
    );
  }
}
