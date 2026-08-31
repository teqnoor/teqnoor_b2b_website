import { NextResponse } from "next/server";
import { Resend } from "resend";
import { dbConnect } from "../../../../lib/db";
import Audit from "@/models/Audit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

// GET Handler - Used by your Audit Admin Panel to fetch audit requests
export async function GET() {
  try {
    const connection = await dbConnect();

    if (!connection) {
      return NextResponse.json(
        { success: false, message: 'Database is not configured' },
        { status: 503 }
      );
    }

    const audits = await Audit.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, audits },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching audits:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch audits' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  try {
    const { name, email, phone, website, stuff, honeyPot } = await request.json();

    if (honeyPot) {
      return NextResponse.json(
        { success: false, message: "Bot detected" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (!name || !email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name and email." },
        { status: 400, headers: corsHeaders }
      );
    }

    const connection = await dbConnect();

    if (!connection) {
      return NextResponse.json(
        { success: false, message: "Database is not configured." },
        { status: 503, headers: corsHeaders }
      );
    }

    // Save using the Mongoose Audit model
    await Audit.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      website: website ? website.trim() : null,
      stuff: stuff ? stuff.trim() : "",
      status: "pending",
    });

    const adminTemplate = `
      <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="background: #8A2BE2; padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 14px; letter-spacing: 3px; text-transform: uppercase;">New B2B Lead</h1>
        </div>
        <div style="padding: 30px; color: #1f2937;">
          <p style="margin-bottom: 20px; font-size: 16px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 20px; font-size: 16px;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 20px; font-size: 16px;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p style="margin-bottom: 20px; font-size: 16px;"><strong>Website:</strong> ${website || "Not provided"}</p>
          <p style="margin-bottom: 30px; line-height: 1.6;"><strong>Context:</strong><br/>${stuff || "No additional context provided."}</p>
          <a href="mailto:${email}" style="display: inline-block; background: #8A2BE2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">Reply to Lead</a>
        </div>
      </div>
    `;

    const clientTemplate = `
      <div style="font-family: sans-serif; color: #1f2937;">
        <h2 style="color: #8A2BE2; font-size: 18px; letter-spacing: 1px; text-transform: uppercase;">Request Received</h2>
        <p>Hello ${name.split(" ")[0]},</p>
        <p>Thank you for reaching out to <strong>Teqnoor</strong>. We have received your audit request and our team is currently analyzing your digital presence.</p>
        <p>You can expect your custom report in your inbox within <strong>24 hours</strong>.</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
        <p style="font-size: 11px; color: #6b7280; letter-spacing: 1px; text-transform: uppercase;">TeqNoor LTD</p>
      </div>
    `;

    await Promise.allSettled([
      resend.emails.send({
        from: "Teqnoor Alerts <alerts@b2bseodigitalagency.co.uk>",
        to: "alishbaakhtarmay2005@gmail.com",
        cc: [
          'kalsoom@teqnoor.com',
          'amjad@teqnoor.com',
        ],
        subject: `LEAD: ${name}`,
        html: adminTemplate,
      }),
      resend.emails.send({
        from: "Teqnoor <audit@b2bseodigitalagency.co.uk>",
        to: email,
        subject: "Audit Request Received | Teqnoor",
        html: clientTemplate,
      }),
    ]);

    return NextResponse.json(
      { success: true },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Critical System Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500, headers: corsHeaders }
    );
  }
}