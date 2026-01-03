import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  country?: string;
  message: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, email, phone, city, country, message } = (await req.json()) as ContactPayload;

    // Validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const FROM_EMAIL = Deno.env.get("CONTACT_FROM_EMAIL") || "onboarding@resend.dev";
    const ADMIN_EMAIL = Deno.env.get("CONTACT_TO_EMAIL") || "mikrogreenz.global@gmail.com";

    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY missing");

    const sendEmail = async (to: string, subject: string, html: string, replyTo?: string) => {
      console.log(`Sending email to ${to}...`);
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from: FROM_EMAIL, to, subject, html, reply_to: replyTo }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error(`Resend error for ${to}:`, data);
        throw new Error(`Resend API error: ${res.status} - ${JSON.stringify(data)}`);
      }
      console.log(`Email sent successfully to ${to}`);
      return data;
    };

    // Send Admin & User emails independently
    const results = await Promise.allSettled([
      // Admin Notification
      sendEmail(
        ADMIN_EMAIL,
        `New Inquiry: ${escapeHtml(name)}`,
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Phone:</strong> ${escapeHtml(phone)}</p><p><strong>City:</strong> ${escapeHtml(city)}</p><p><strong>Message:</strong> ${escapeHtml(message)}</p>`,
        email
      ),
      // User Confirmation
      sendEmail(
        email,
        "Thank you for contacting Mikrogreenz Global",
        `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <p style="font-size: 16px; margin-bottom: 16px;">Hi ${escapeHtml(name.split(" ")[0])},</p>
          
          <p style="font-size: 16px; margin-bottom: 16px;">Thank you for contacting <strong>Mikrogreenz Global</strong> 🌱</p>
          
          <p style="font-size: 16px; margin-bottom: 16px;">We've received your enquiry and our team will get back to you shortly.</p>
          
          <div style="background-color: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px; margin: 24px 0; border-radius: 4px;">
            <p style="margin: 0; font-size: 14px; color: #15803d;"><strong>Your message:</strong></p>
            <p style="margin: 8px 0 0 0; font-size: 14px; color: #14532d; font-style: italic;">"${escapeHtml(message)}"</p>
          </div>
          
          <p style="font-size: 14px; margin-bottom: 16px; color: #666;">If your enquiry is urgent, feel free to contact us at <strong style="color: #16a34a;">+91 82203 33477</strong>.</p>
          
          <p style="font-size: 16px; margin-top: 24px;">Warm regards,<br/>
          <strong style="color: #16a34a;">Team Mikrogreenz Global</strong></p>
        </div>
        `
      )
    ]);

    const errors = results.filter(r => r.status === "rejected").map(r => (r as PromiseRejectedResult).reason.message);

    if (errors.length > 0) {
      console.error("Some emails failed to send:", errors);
      return new Response(JSON.stringify({ success: errors.length < 2, errors }), {
        status: errors.length === 2 ? 500 : 200, // Return 200 if at least one worked, for better UX
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Global function error:", error);
    const msg = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
