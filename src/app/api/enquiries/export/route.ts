import { NextResponse } from "next/server";
import { getEnquiries } from "@/lib/db";

export async function GET() {
  try {
    const list = getEnquiries();

    const headers = [
      "Enquiry ID",
      "Date & Time",
      "Status",
      "Name",
      "Company",
      "Email",
      "Phone",
      "Industry",
      "Product/Solution",
      "Quantity",
      "Location",
      "Preferred Contact",
      "Source Page",
      "Requirement Message",
      "Internal Notes"
    ];

    const escapeCsv = (str: string | undefined) => {
      if (!str) return '""';
      const clean = str.replace(/"/g, '""').replace(/\n/g, ' ');
      return `"${clean}"`;
    };

    const rows = list.map((e) => [
      escapeCsv(e.id),
      escapeCsv(new Date(e.dateTime).toLocaleString()),
      escapeCsv(e.status),
      escapeCsv(e.name),
      escapeCsv(e.company),
      escapeCsv(e.email),
      escapeCsv(e.phone),
      escapeCsv(e.industry),
      escapeCsv(e.product),
      escapeCsv(e.quantity),
      escapeCsv(e.location),
      escapeCsv(e.preferredContact),
      escapeCsv(e.sourcePage),
      escapeCsv(e.message),
      escapeCsv(e.notes?.join(" | "))
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="VERSATECH_EPC_Enquiries_${new Date().toISOString().slice(0, 10)}.csv"`
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Failed to generate CSV export" },
      { status: 500 }
    );
  }
}
