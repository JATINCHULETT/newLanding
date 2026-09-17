import { Resend } from "resend";

export interface CallRequestPayload {
  name: string;
  email: string;
  phone: string;
  role?: string;
  school?: string;
  city?: string;
  strength?: string;
  preferredTime?: string;
  message?: string;
  source?: string;
}

const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_Anjbjsdjhcissdhvcnsvdch";
const FROM_EMAIL = process.env.FROM_EMAIL || "Jaagr Mind <support@jaagrmind.com>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "saurabh@jaagrmind.com";

let resendClient: Resend | null = null;
function getResendClient(): Resend {
  if (!resendClient) {
    resendClient = new Resend(RESEND_API_KEY);
  }
  return resendClient;
}

function cleanPhoneForWhatsApp(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

export function generateUserThankYouEmailHtml(data: CallRequestPayload): string {
  const cleanPhone = data.phone.trim();
  const preferredTime = data.preferredTime || "Call ASAP (Next Available)";

  const roleRow = data.role
    ? `<tr><td style="padding: 6px 0; color: #64748b;">Your Role:</td><td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${data.role}</td></tr>`
    : "";

  const schoolRow = data.school
    ? `<tr><td style="padding: 6px 0; color: #64748b;">School / Institution:</td><td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${data.school}${data.city ? `, ${data.city}` : ""}</td></tr>`
    : "";

  const strengthRow = data.strength
    ? `<tr><td style="padding: 6px 0; color: #64748b;">Student Strength:</td><td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${data.strength}</td></tr>`
    : "";

  const messageRow = data.message
    ? `<tr><td style="padding: 6px 0; color: #64748b; vertical-align: top;">Your Query / Focus:</td><td style="padding: 6px 0; color: #334155;">${data.message}</td></tr>`
    : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank you for reaching out to Jaagr Mind</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f9f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f9f8; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 36px; text-align: left;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                      Jaagr<span style="color: #2dd4bf;">Mind</span>
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8; font-weight: 500;">
                      Emotional Fitness System for Indian Schools
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 36px 36px 28px 36px;">
              <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 700; color: #0f172a;">
                Thank you for reaching out, ${data.name || "Educator"}!
              </h2>
              <p style="margin: 0 0 20px 0; font-size: 15px; color: #475569;">
                We have received your request for a callback and school consultation. Our school wellbeing advisor is reviewing your request and will connect with you directly.
              </p>

              <!-- Callback Details Box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin: 24px 0; padding: 20px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #0f766e;">
                      Request Summary
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; width: 140px;">Contact Number:</td>
                        <td style="padding: 6px 0; font-weight: 600; color: #0f172a;">+91 ${cleanPhone}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b;">Preferred Time:</td>
                        <td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${preferredTime}</td>
                      </tr>
                      ${roleRow}
                      ${schoolRow}
                      ${strengthRow}
                      ${messageRow}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Immediate Help Note -->
              <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; border-radius: 8px; padding: 14px 18px; margin: 24px 0;">
                <p style="margin: 0; font-size: 13px; color: #065f46; line-height: 1.5;">
                  <strong>Need an instant answer?</strong><br />
                  You can call our lead educator directly on our dedicated line: 
                  <a href="tel:+917820001282" style="color: #047857; font-weight: 700; text-decoration: underline;">+91 78200 01282</a>.
                </p>
              </div>

              <p style="margin: 24px 0 0 0; font-size: 14px; color: #475569;">
                Warm regards,<br />
                <strong style="color: #0f172a;">Team Jaagr Mind</strong><br />
                <span style="font-size: 13px; color: #64748b;">support@jaagrmind.com • jaagrmind.com</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 36px; text-align: center; font-size: 12px; color: #94a3b8;">
              <p style="margin: 0;">
                © ${new Date().getFullYear()} Jaagr Mind. All rights reserved.
              </p>
              <p style="margin: 4px 0 0 0;">
                This email was sent because a call request was submitted on jaagrmind.com.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateAdminAlertEmailHtml(data: CallRequestPayload): string {
  const cleanPhone = data.phone.trim();
  const waPhone = cleanPhoneForWhatsApp(cleanPhone);
  const preferredTime = data.preferredTime || "Call ASAP (Next Available)";
  const sourceLabel =
    data.source === "demo_form" ? "Homepage School Demo Form" : "Header / Quick Callback Modal";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Call Query Received</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; border: 1px solid #cbd5e1; overflow: hidden; box-shadow: 0 4px 24px rgba(15, 23, 42, 0.08);">
          <!-- Header -->
          <tr>
            <td style="background: #0f172a; padding: 28px 32px; border-bottom: 3px solid #2dd4bf;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: #2dd4bf; color: #0f172a; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; letter-spacing: 0.5px; margin-bottom: 8px;">
                      New Lead Alert
                    </span>
                    <h1 style="margin: 0; font-size: 20px; font-weight: 800; color: #ffffff;">
                      Call Query Received: ${data.name || "Unknown Lead"}
                    </h1>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">
                      Source: ${sourceLabel} • ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Action Buttons -->
          <tr>
            <td style="background-color: #f8fafc; padding: 16px 32px; border-bottom: 1px solid #e2e8f0;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right: 10px;">
                    <a href="tel:+91${cleanPhone}" style="display: inline-block; background-color: #0f766e; color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 8px 16px; border-radius: 8px;">
                      📞 Call +91 ${cleanPhone}
                    </a>
                  </td>
                  <td style="padding-right: 10px;">
                    <a href="https://wa.me/${waPhone}" style="display: inline-block; background-color: #16a34a; color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 8px 16px; border-radius: 8px;">
                      💬 WhatsApp
                    </a>
                  </td>
                  <td>
                    <a href="mailto:${data.email}" style="display: inline-block; background-color: #334155; color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 8px 16px; border-radius: 8px;">
                      ✉️ Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Lead Details Table -->
          <tr>
            <td style="padding: 28px 32px;">
              <h3 style="margin: 0 0 16px 0; font-size: 15px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">
                Lead Details
              </h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 14px;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; width: 150px;">Full Name</td>
                  <td style="padding: 10px 0; font-weight: 700; color: #0f172a;">${data.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500;">Phone Number</td>
                  <td style="padding: 10px 0; font-weight: 700; color: #0f172a;">
                    <a href="tel:+91${cleanPhone}" style="color: #0f766e; text-decoration: none;">+91 ${cleanPhone}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500;">Email</td>
                  <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">
                    <a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500;">Role</td>
                  <td style="padding: 10px 0; font-weight: 600; color: #334155;">${data.role || "Not specified"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500;">School Name</td>
                  <td style="padding: 10px 0; font-weight: 600; color: #334155;">${data.school || "Not specified"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500;">City</td>
                  <td style="padding: 10px 0; font-weight: 600; color: #334155;">${data.city || "Not specified"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500;">Student Strength</td>
                  <td style="padding: 10px 0; font-weight: 600; color: #334155;">${data.strength || "Not specified"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500;">Preferred Callback</td>
                  <td style="padding: 10px 0; font-weight: 700; color: #0f766e;">${preferredTime}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; vertical-align: top;">Query / Message</td>
                  <td style="padding: 10px 0; color: #1e293b; background-color: #f8fafc; border-radius: 6px; padding: 10px;">
                    ${data.message || "<em>No message provided</em>"}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; font-size: 12px; color: #94a3b8; text-align: center;">
              Jaagr Mind Notification System • Sent to ${ADMIN_EMAIL}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export interface SendCallRequestResult {
  success: boolean;
  userEmailId?: string;
  adminEmailId?: string;
  error?: string;
  warning?: string;
}

export async function sendCallRequestEmails(
  data: CallRequestPayload,
): Promise<SendCallRequestResult> {
  const resend = getResendClient();
  const subjectUser = "Thank you for reaching out to Jaagr Mind";
  const schoolOrRole = data.school || data.role || data.city || "Website Inquiry";
  const subjectAdmin = `🔔 New Call Query: ${data.name || "Lead"} (${schoolOrRole})`;

  console.log(`[Resend] Initiating call request notification for: ${data.email} (${data.name})`);

  let userEmailId: string | undefined;
  let adminEmailId: string | undefined;
  let hasError = false;
  let errorMessage = "";

  // 1. Send confirmation email to user (if email is valid)
  if (data.email && data.email.includes("@")) {
    try {
      const userRes = await resend.emails.send({
        from: FROM_EMAIL,
        to: data.email,
        subject: subjectUser,
        html: generateUserThankYouEmailHtml(data),
      });

      if (userRes.error) {
        console.error("[Resend] User confirmation email error:", userRes.error);
        hasError = true;
        errorMessage += `User email error: ${JSON.stringify(userRes.error)}; `;
      } else if (userRes.data) {
        userEmailId = userRes.data.id;
        console.log(`[Resend] User email sent successfully. ID: ${userEmailId}`);
      }
    } catch (err: unknown) {
      const errText = err instanceof Error ? err.message : String(err);
      console.error("[Resend] Exception sending to user:", errText);
      hasError = true;
      errorMessage += `User email exception: ${errText}; `;
    }
  }

  // 2. Send alert email to administrator (saurabh@jaagrmind.com)
  try {
    const adminRes = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: subjectAdmin,
      html: generateAdminAlertEmailHtml(data),
      replyTo: data.email || undefined,
    });

    if (adminRes.error) {
      console.error("[Resend] Admin alert email error:", adminRes.error);
      hasError = true;
      errorMessage += `Admin email error: ${JSON.stringify(adminRes.error)}; `;
    } else if (adminRes.data) {
      adminEmailId = adminRes.data.id;
      console.log(`[Resend] Admin alert email sent successfully. ID: ${adminEmailId}`);
    }
  } catch (err: unknown) {
    const errText = err instanceof Error ? err.message : String(err);
    console.error("[Resend] Exception sending to admin:", errText);
    hasError = true;
    errorMessage += `Admin email exception: ${errText}; `;
  }

  if (hasError) {
    console.warn(
      `[Resend Notice] Resend reported an issue sending one or more emails. Ensure RESEND_API_KEY is valid and the sending domain (jaagrmind.com) is verified in Resend. Captured lead details:`,
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role,
        school: data.school,
        city: data.city,
        strength: data.strength,
        preferredTime: data.preferredTime,
        message: data.message,
      },
    );

    return {
      success: true,
      warning: errorMessage,
      userEmailId,
      adminEmailId,
    };
  }

  return {
    success: true,
    userEmailId,
    adminEmailId,
  };
}
