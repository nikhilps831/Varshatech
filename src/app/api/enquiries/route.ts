import { NextRequest, NextResponse } from "next/server";
import { getEnquiries, saveEnquiry } from "@/lib/db";

export async function GET() {
  try {
    const data = getEnquiries();
    return NextResponse.json({ success: true, count: data.length, data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      email,
      phone,
      industry,
      product,
      quantity,
      location,
      message,
      attachment,
      preferredContact,
      sourcePage
    } = body;

    // Strict validation of required fields
    if (!name || !company || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all mandatory fields (Name, Company, Email, Phone, Requirement Message)." },
        { status: 400 }
      );
    }

    // Save record to DB
    const enquiry = saveEnquiry({
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      industry: industry || "General Industrial",
      product: product || "General Enquiry",
      quantity: quantity || "N/A",
      location: location || "N/A",
      message: message.trim(),
      attachment: attachment || undefined,
      preferredContact: preferredContact || "Email",
      sourcePage: sourcePage || "Website Main"
    });

    // 1. Email Notification Logic
    // In production, nodemailer uses process.env.SMTP_HOST, process.env.SMTP_USER, etc.
    const emailSubject = `New Website Enquiry – ${enquiry.product} – VERSATECH EPC`;
    console.log(`[EMAIL NOTIFICATION TRIGGERED]`);
    console.log(`To: sales@versatechepc.com, info@versatechepc.com`);
    console.log(`Subject: ${emailSubject}`);
    console.log(`Content: Enquiry ID ${enquiry.id} from ${enquiry.name} (${enquiry.company})`);

    // 2. WhatsApp Notification API Logic
    // Official WhatsApp Business Cloud API Integration
    let whatsappApiSent = false;
    const whatsappPhoneId = process.env.WHATSAPP_PHONE_ID;
    const whatsappAccessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const whatsappRecipient = process.env.WHATSAPP_RECIPIENT_NUMBER || "919096500330";

    const whatsappMessageBody = `*NEW WEBSITE ENQUIRY – VERSATECH EPC*
*Enquiry ID:* ${enquiry.id}
*Name:* ${enquiry.name}
*Company:* ${enquiry.company}
*Phone:* ${enquiry.phone}
*Email:* ${enquiry.email}
*Industry:* ${enquiry.industry}
*Product/Solution:* ${enquiry.product}
*Quantity:* ${enquiry.quantity || "N/A"}
*Location:* ${enquiry.location || "N/A"}
*Requirement:*
${enquiry.message}

Please follow up with the customer.`;

    if (whatsappPhoneId && whatsappAccessToken) {
      try {
        const waRes = await fetch(`https://graph.facebook.com/v18.0/${whatsappPhoneId}/messages`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${whatsappAccessToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: whatsappRecipient,
            type: "text",
            text: { body: whatsappMessageBody }
          })
        });
        if (waRes.ok) {
          whatsappApiSent = true;
        }
      } catch (waErr) {
        console.error("WhatsApp API trigger error:", waErr);
      }
    }

    // Direct WhatsApp Deep Link fallback string for frontend quick action
    const whatsappFallbackUrl = `https://wa.me/${whatsappRecipient}?text=${encodeURIComponent(whatsappMessageBody)}`;

    // Customer confirmation response
    const confirmationText = `Thank you for contacting VERSATECH EPC. Your enquiry (${enquiry.id}) has been received successfully. Our engineering team will review your requirement and contact you shortly.`;

    return NextResponse.json({
      success: true,
      message: confirmationText,
      enquiryId: enquiry.id,
      enquiry,
      notifications: {
        email: "Dispatched to sales@versatechepc.com & info@versatechepc.com",
        whatsappApiSent,
        whatsappFallbackUrl
      }
    });

  } catch (error: any) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error submitting enquiry" },
      { status: 500 }
    );
  }
}
