import { getBookingService } from "@/lib/booking";

/* Sends booking enquiries to the business inbox through Resend (resend.com).
   Required environment variables (set in Vercel):
   - RESEND_API_KEY      API key from Resend
   - BOOKING_TO_EMAIL    inbox that receives enquiries
   - BOOKING_FROM_EMAIL  optional, a sender on a domain verified in Resend */

const MAX_LENGTH = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  let body: { service?: unknown; values?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const service = typeof body.service === "string" ? getBookingService(body.service) : undefined;
  if (!service || typeof body.values !== "object" || body.values === null) {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  const raw = body.values as Record<string, unknown>;
  const rows: { label: string; value: string }[] = [];

  for (const field of service.fields) {
    const input = raw[field.name];
    let value = "";

    if (field.type === "checkboxes") {
      const picked = Array.isArray(input) ? input.filter((item): item is string => typeof item === "string") : [];
      value = picked.filter((item) => field.options?.includes(item)).join(", ");
    } else if (typeof input === "string") {
      value = input.trim().slice(0, MAX_LENGTH);
      if (field.type === "select" && value && !field.options?.includes(value)) value = "";
    }

    if (field.required && !value) {
      return Response.json({ error: "missing_field", field: field.name }, { status: 400 });
    }
    if (field.type === "email" && value && !EMAIL_PATTERN.test(value)) {
      return Response.json({ error: "invalid_email" }, { status: 400 });
    }
    if (value) rows.push({ label: field.label, value });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Booking email is not configured: set RESEND_API_KEY and BOOKING_TO_EMAIL");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const name = String(raw.name).trim();
  const replyTo = String(raw.email).trim();
  const from = process.env.BOOKING_FROM_EMAIL || "Wildflower Line Dancing <onboarding@resend.dev>";

  const html = `
    <div style="font-family: Arial, sans-serif; color: #6B4841; max-width: 600px;">
      <h2 style="margin: 0 0 4px;">New ${escapeHtml(service.title)} enquiry</h2>
      <p style="margin: 0 0 20px; color: #8a6b64;">Sent from the booking form on wildflowerlinedancing.com. Reply to this email to respond directly.</p>
      <table style="border-collapse: collapse; width: 100%;">
        ${rows
          .map(
            ({ label, value }) => `
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #EDE0CC; font-weight: bold; vertical-align: top; width: 38%;">${escapeHtml(label)}</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #EDE0CC; white-space: pre-wrap;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  const text = [`New ${service.title} enquiry`, "", ...rows.map(({ label, value }) => `${label}: ${value}`)].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((address) => address.trim()),
      reply_to: replyTo,
      subject: `${service.title} enquiry from ${name}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
