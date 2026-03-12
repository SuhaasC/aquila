import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

type SubmissionBody = {
  formType?: string;
  data?: Record<string, unknown>;
};

const REQUIRED_ENV_VARS = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"] as const;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const submissionLog = new Map<string, number[]>();

const requiredText = (max: number) =>
  z.preprocess((value) => (typeof value === "string" ? value.trim() : ""), z.string().min(1).max(max));

const optionalText = (max: number) =>
  z.preprocess((value) => (typeof value === "string" ? value.trim() : ""), z.string().max(max));

const emailText = z.preprocess(
  (value) => (typeof value === "string" ? value.trim().toLowerCase() : ""),
  z.string().email().max(320)
);

const generalContactSchema = z.object({
  name: requiredText(100),
  email: emailText,
  company: requiredText(120),
  phone: optionalText(40),
  message: requiredText(4000),
  website: optionalText(200),
});

const strategicConsultationSchema = z.object({
  firstName: requiredText(80),
  lastName: requiredText(80),
  email: emailText,
  company: requiredText(120),
  role: requiredText(80),
  companyStage: optionalText(120),
  revenue: optionalText(120),
  timeline: optionalText(120),
  message: optionalText(4000),
  website: optionalText(200),
});

const dataConsultationSchema = z.object({
  firstName: requiredText(80),
  lastName: requiredText(80),
  email: emailText,
  company: requiredText(120),
  dataType: requiredText(120),
  currentSystem: optionalText(240),
  dataVolume: optionalText(120),
  timeline: optionalText(120),
  message: optionalText(4000),
  website: optionalText(200),
});

const FORM_SCHEMAS = {
  "General Contact": generalContactSchema,
  "Strategic Conversation": strategicConsultationSchema,
  "Strategic Consultation": strategicConsultationSchema,
  "Data Management Consultation": dataConsultationSchema,
} as const;

const formatLabel = (key: string) =>
  key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (char) => char.toUpperCase());

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const normalizeValue = (value: unknown): string => {
  if (value === null || value === undefined) {
    return "";
  }
  if (Array.isArray(value)) {
    return value.map((item) => String(item)).join(", ");
  }
  return String(value).trim();
};

const getClientIp = (request: Request): string => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
};

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const existing = submissionLog.get(ip) ?? [];
  const recent = existing.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    submissionLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  submissionLog.set(ip, recent);
  return false;
};

const isAllowedOrigin = (request: Request): boolean => {
  const origin = request.headers.get("origin");
  if (!origin) {
    return true;
  }

  let originHost: string;
  try {
    originHost = new URL(origin).host.toLowerCase();
  } catch {
    return false;
  }

  const requestHost = (request.headers.get("x-forwarded-host") || request.headers.get("host") || "").toLowerCase();
  if (requestHost && originHost === requestHost) {
    return true;
  }

  const configuredOrigins = (process.env.FORMS_ALLOWED_ORIGINS || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const fallbackOrigins = [
    "https://www.aquilastrat.com",
    "https://aquilastrat.com",
    "http://localhost:3000",
    "http://localhost:3001",
  ];
  const allowedOrigins = configuredOrigins.length > 0 ? configuredOrigins : fallbackOrigins;

  return allowedOrigins.some((allowedOrigin) => {
    try {
      return new URL(allowedOrigin).host.toLowerCase() === originHost;
    } catch {
      return allowedOrigin.toLowerCase() === origin.toLowerCase();
    }
  });
};

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: "Origin not allowed." }, { status: 403 });
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many submissions from this source. Please try again shortly." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as SubmissionBody;
    const formType = typeof body.formType === "string" ? body.formType.trim() : "";
    if (!formType || !(formType in FORM_SCHEMAS)) {
      return NextResponse.json({ error: "Unsupported form type." }, { status: 400 });
    }
    if (!body.data || typeof body.data !== "object" || Array.isArray(body.data)) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    const schema = FORM_SCHEMAS[formType as keyof typeof FORM_SCHEMAS];
    const parsed = schema.safeParse(body.data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Please check all required fields and try again." }, { status: 400 });
    }

    if (parsed.data.website) {
      // Honeypot field was filled - treat as bot noise and return success.
      return NextResponse.json({ ok: true });
    }

    const missingEnv = REQUIRED_ENV_VARS.filter((envVar) => !process.env[envVar]);
    if (missingEnv.length > 0) {
      console.error("Missing email environment variables:", missingEnv);
      return NextResponse.json(
        { error: "Email service is not configured yet. Please set SMTP environment variables." },
        { status: 500 }
      );
    }

    const entries = Object.entries(parsed.data)
      .filter(([key]) => key !== "website")
      .map(([key, value]) => [key, normalizeValue(value)] as const)
      .filter(([, value]) => value.length > 0);
    if (entries.length === 0) {
      return NextResponse.json({ error: "No form values provided." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const submittedAt = new Date().toISOString();
    const replyToEntry = entries.find(([key]) => key.toLowerCase() === "email");
    const replyTo = replyToEntry?.[1];
    const toAddress = process.env.FORMS_TO_EMAIL || "contact@aquilastrat.com";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const textBody = [
      `New ${formType} submission`,
      `Submitted at: ${submittedAt}`,
      `IP: ${clientIp}`,
      `User-Agent: ${userAgent}`,
      "",
      ...entries.map(([key, value]) => `${formatLabel(key)}: ${value}`),
    ].join("\n");

    const htmlRows = entries
      .map(
        ([key, value]) =>
          `<tr><td style="padding:6px 10px;font-weight:600;vertical-align:top;">${escapeHtml(formatLabel(
            key
          ))}</td><td style="padding:6px 10px;">${escapeHtml(value)}</td></tr>`
      )
      .join("");

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
        <h2 style="margin:0 0 12px;">New ${escapeHtml(formType)} submission</h2>
        <p style="margin:0 0 16px;color:#4b5563;">Submitted at: ${escapeHtml(submittedAt)}</p>
        <p style="margin:0 0 8px;color:#4b5563;">IP: ${escapeHtml(clientIp)}</p>
        <p style="margin:0 0 16px;color:#4b5563;">User-Agent: ${escapeHtml(userAgent)}</p>
        <table style="border-collapse:collapse;width:100%;max-width:760px;border:1px solid #e5e7eb;">
          <tbody>${htmlRows}</tbody>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: toAddress,
      replyTo: replyTo || undefined,
      subject: `Aquilastrat: ${formType} submission`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Form submission email error:", error);
    return NextResponse.json(
      { error: "We could not send your message. Please try again." },
      { status: 500 }
    );
  }
}
