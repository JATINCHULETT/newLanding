import React from "react";
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

export interface SendCallRequestResult {
  success: boolean;
  userEmailId?: string | undefined;
  adminEmailId?: string | undefined;
  error?: string | undefined;
  warning?: string | undefined;
}

const RESEND_API_KEY = process.env["RESEND_API_KEY"] || "re_Anjbjsdjhcissdhvcnsvdch";
const FROM_EMAIL = process.env["FROM_EMAIL"] || "Jaagr Mind <support@jaagrmind.com>";
const ADMIN_EMAIL = process.env["ADMIN_EMAIL"] || "saurabh@jaagrmind.com";

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

// ─────────────────────────────────────────────────────────────────────────────
// VECTOR ASSETS (SVGs & Illustrations)
// ─────────────────────────────────────────────────────────────────────────────

const JAAGR_LOGO_HTML = `
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="vertical-align: middle;">
      <span style="font-family: -apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Segoe UI', Roboto, sans-serif; font-size: 22px; font-weight: 900; color: #0f172a; letter-spacing: -0.5px;">
        Jaagr<span style="color: #6d28d9;">Mind</span>
      </span>
    </td>
    <td style="vertical-align: middle; padding-left: 4px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
        <path d="M13 7L21 3.5" stroke="#7c3aed" stroke-width="2.75" stroke-linecap="round"/>
        <path d="M14 12H23" stroke="#7c3aed" stroke-width="2.75" stroke-linecap="round"/>
        <path d="M13 17L21 20.5" stroke="#7c3aed" stroke-width="2.75" stroke-linecap="round"/>
      </svg>
    </td>
  </tr>
  <tr>
    <td colspan="2" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 8px; font-weight: 800; letter-spacing: 2px; color: #64748b; text-transform: uppercase; padding-top: 2px;">
      EMOTIONS MADE EASY
    </td>
  </tr>
</table>
`.trim();

// Illustration 1: Gentle educator woman holding purple heart
const USER_ILLUSTRATION_SVG = `
<svg width="140" height="130" viewBox="0 0 140 130" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  <ellipse cx="70" cy="115" rx="55" ry="10" fill="#f1f5f9" />
  <!-- Hair back -->
  <path d="M42 52C40 30 52 16 70 16C88 16 100 30 98 52C97 64 94 76 96 86C92 90 85 92 82 92C78 92 74 90 70 90C66 90 62 92 58 92C55 92 48 90 44 86C46 76 43 64 42 52Z" fill="#1e1b4b" />
  <!-- Neck -->
  <rect x="65" y="66" width="10" height="14" rx="3" fill="#fed7aa" />
  <!-- Face -->
  <ellipse cx="70" cy="48" rx="19" ry="21" fill="#ffedd5" />
  <!-- Hair Front Bangs -->
  <path d="M51 44C54 32 63 25 71 25C80 25 88 31 89 42C83 37 77 37 70 39C63 41 57 41 51 44Z" fill="#1e1b4b" />
  <path d="M51 44C49 53 50 63 53 68C53 68 55 49 61 46C57 45 53 45 51 44Z" fill="#1e1b4b" />
  <path d="M89 42C91 51 90 61 87 67C87 67 85 49 79 46C83 45 87 44 89 42Z" fill="#1e1b4b" />
  <!-- Eyes (smiling curved) -->
  <path d="M62 48C63 46 66 46 67 48" stroke="#1e1b4b" stroke-width="1.8" stroke-linecap="round" />
  <path d="M73 48C74 46 77 46 78 48" stroke="#1e1b4b" stroke-width="1.8" stroke-linecap="round" />
  <!-- Eyebrows -->
  <path d="M61 44C63 42.5 66 42.5 68 44" stroke="#4338ca" stroke-width="1.2" stroke-linecap="round" />
  <path d="M72 44C74 42.5 77 42.5 79 44" stroke="#4338ca" stroke-width="1.2" stroke-linecap="round" />
  <!-- Blush -->
  <circle cx="59" cy="53" r="3" fill="#fca5a5" opacity="0.6" />
  <circle cx="81" cy="53" r="3" fill="#fca5a5" opacity="0.6" />
  <!-- Gentle Smile -->
  <path d="M67 55C69 57 71 57 73 55" stroke="#e11d48" stroke-width="1.5" stroke-linecap="round" />
  <!-- Shoulders / Clothes -->
  <path d="M48 88C48 78 57 74 70 74C83 74 92 78 92 88L94 116H46L48 88Z" fill="#e0e7ff" />
  <!-- Collar -->
  <path d="M64 74L70 82L76 74" stroke="#a5b4fc" stroke-width="1.8" stroke-linecap="round" fill="none" />
  <!-- Arms embracing heart -->
  <path d="M46 95C48 88 56 86 64 92L62 99C56 95 50 96 46 95Z" fill="#ffedd5" />
  <path d="M94 95C92 88 84 86 76 92L78 99C84 95 90 96 94 95Z" fill="#ffedd5" />
  <!-- Big Soft Purple Heart Held in Hands -->
  <path d="M70 82C66 75 54 75 50 83C45 92 56 102 70 110C84 102 95 92 90 83C86 75 74 75 70 82Z" fill="#a78bfa" />
  <path d="M70 84C66.8 77.6 56.4 77.6 52.8 84.8C48.4 92.8 58 101.6 70 108.8C82 101.6 91.6 92.8 87.2 84.8C83.6 77.6 73.2 77.6 70 84Z" fill="#8b5cf6" />
  <!-- Hands on Heart -->
  <ellipse cx="58" cy="95" rx="5" ry="3.5" transform="rotate(-20 58 95)" fill="#fed7aa" />
  <ellipse cx="82" cy="95" rx="5" ry="3.5" transform="rotate(20 82 95)" fill="#fed7aa" />
  <!-- Sparkles around head -->
  <path d="M38 35L40 32L42 35L40 38L38 35Z" fill="#c084fc" />
  <path d="M98 28L100 25L102 28L100 31L98 28Z" fill="#34d399" />
</svg>
`.trim();

// Illustration 2: Megaphone / Announcement illustration
const ADMIN_ILLUSTRATION_SVG = `
<svg width="130" height="115" viewBox="0 0 130 115" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  <ellipse cx="65" cy="104" rx="45" ry="8" fill="#f1f5f9" />
  <!-- Sound Waves (purple rays) -->
  <path d="M85 30C95 33 103 42 105 53" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" />
  <path d="M92 20C106 25 117 38 120 54" stroke="#a78bfa" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3 3" />
  <path d="M80 18L84 14" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" />
  <path d="M88 68L93 72" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" />
  <path d="M102 70L108 76" stroke="#10b981" stroke-width="2" stroke-linecap="round" />
  <!-- Megaphone Body -->
  <!-- Handle -->
  <path d="M42 66L34 84C33 86 34 88 36 89L43 92C45 93 47 91 48 89L54 70" fill="#0f766e" stroke="#134e4a" stroke-width="2" stroke-linejoin="round" />
  <!-- Back cap -->
  <rect x="22" y="44" width="10" height="24" rx="4" fill="#0f172a" stroke="#1e293b" stroke-width="2" />
  <!-- Main Cone -->
  <path d="M30 46L76 28C78 27 80 29 80 31V81C80 83 78 85 76 84L30 66V46Z" fill="#1e293b" />
  <!-- Cone Accent / Stripe -->
  <path d="M48 39L62 33.5V78.5L48 73V39Z" fill="#14b8a6" />
  <!-- Megaphone Rim / Horn Opening -->
  <ellipse cx="80" cy="56" rx="6" ry="27" fill="#2dd4bf" stroke="#0f766e" stroke-width="2" />
  <ellipse cx="80" cy="56" rx="3" ry="18" fill="#134e4a" />
  <!-- Star / Sparkles -->
  <path d="M105 18L106.5 13.5L111 12L106.5 10.5L105 6L103.5 10.5L99 12L103.5 13.5L105 18Z" fill="#f59e0b" />
  <circle cx="20" cy="36" r="2.5" fill="#a78bfa" />
</svg>
`.trim();

// ─────────────────────────────────────────────────────────────────────────────
// HTML EMAIL GENERATORS (Bulletproof table layouts for email clients)
// ─────────────────────────────────────────────────────────────────────────────

export function generateUserThankYouEmailHtml(data: CallRequestPayload): string {
  const cleanPhone = data.phone.trim();
  const preferredTime = data.preferredTime || "Call ASAP (Next Available)";
  const schoolName = data.school || "Your Institution";
  const city = data.city || "India";
  const role = data.role || "Educator / School Representative";
  const message = data.message || "Student emotional fitness and teacher training";

  return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've received your request - Jaagr Mind</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #f7f6fb; }
    .handwriting { font-family: 'Caveat', cursive, -apple-system, sans-serif !important; }
    @media screen and (max-width: 600px) {
      .mobile-full { width: 100% !important; display: block !important; }
      .mobile-stack { display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; }
      .mobile-center { text-align: center !important; }
      .mobile-p-16 { padding: 20px 16px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f6fb; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; line-height: 1.5;">
  <!-- Background Table Wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f7f6fb; padding: 32px 12px;">
    <tr>
      <td align="center">
        <!-- Main Email Container Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; background-color: #ffffff; border-radius: 24px; border: 1px solid #e9e5f5; box-shadow: 0 10px 30px rgba(109, 40, 217, 0.05); overflow: hidden;">
          
          <!-- TOP HEADER: Logo & Slogan -->
          <tr>
            <td style="padding: 28px 32px 20px 32px; border-bottom: 1px solid #f1eff9;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align: middle;">
                    ${JAAGR_LOGO_HTML}
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="font-size: 13px; font-weight: 500; color: #64748b; letter-spacing: -0.2px;">
                      Every emotion is valid.
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO SECTION: Badge + Headline + Illustration -->
          <tr>
            <td style="padding: 28px 32px 20px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <!-- Left Text Column -->
                  <td class="mobile-stack" style="vertical-align: top; width: 62%; padding-right: 16px;">
                    <!-- Badge -->
                    <div style="display: inline-block; background-color: #f3eeff; border: 1px solid #e9d5ff; border-radius: 9999px; padding: 5px 12px; margin-bottom: 14px;">
                      <span style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #7c3aed;">
                        CALLBACK &amp; SCHOOL DEMO REQUEST RECEIVED
                      </span>
                    </div>

                    <!-- Main Headline -->
                    <h1 style="margin: 0 0 12px 0; font-size: 26px; font-weight: 800; color: #0f172a; line-height: 1.25; letter-spacing: -0.5px;">
                      We&rsquo;ve received<br />your request.
                    </h1>

                    <!-- Paragraph -->
                    <p style="margin: 0; font-size: 13.5px; color: #475569; line-height: 1.6;">
                      Thank you for reaching out. Our team has received your request for a school demo/callback and will get in touch within 24 hours.
                    </p>
                  </td>

                  <!-- Right Illustration Column -->
                  <td class="mobile-stack" style="vertical-align: middle; width: 38%; text-align: center; padding-top: 10px;">
                    ${USER_ILLUSTRATION_SVG}
                    <div class="handwriting" style="font-family: 'Caveat', cursive, sans-serif; font-size: 14px; color: #7c3aed; font-weight: 700; margin-top: 4px; line-height: 1.3;">
                      A more emotionally aware tomorrow 💚
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DETAILS CARD: "YOUR REQUEST DETAILS" -->
          <tr>
            <td style="padding: 10px 32px 20px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fafafe; border: 1px solid #ede8f5; border-radius: 18px; padding: 20px 22px;">
                <tr>
                  <td colspan="2" style="padding-bottom: 14px;">
                    <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">
                      YOUR REQUEST DETAILS
                    </span>
                  </td>
                </tr>
                <tr>
                  <!-- Left Col of Fields -->
                  <td class="mobile-stack" style="vertical-align: top; width: 50%; padding-right: 12px;">
                    
                    <!-- Field: Name -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">Name</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">${data.name || "Educator"}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Field: Role -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">Role</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">${role}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Field: Preferred Callback Time -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">Preferred Callback Time</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">${preferredTime}</div>
                        </td>
                      </tr>
                    </table>

                  </td>

                  <!-- Right Col of Fields -->
                  <td class="mobile-stack" style="vertical-align: top; width: 50%; padding-left: 12px;">
                    
                    <!-- Field: School -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"></path></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">School</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">${schoolName}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Field: City -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">City</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">${city}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Field: What you'd like to solve first -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">What you&rsquo;d like to solve first</div>
                          <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-top: 1px; line-height: 1.4;">${message}</div>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- GREEN CALLOUT BANNER: Direct Advisor Line -->
          <tr>
            <td style="padding: 0 32px 14px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #e6f8f0; border: 1px solid #c3f0db; border-radius: 18px; padding: 16px 20px;">
                <tr>
                  <td style="width: 44px; vertical-align: middle;">
                    <div style="width: 36px; height: 36px; background-color: #d1fae5; border-radius: 9999px; text-align: center; line-height: 36px;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#047857" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                  </td>
                  <td class="mobile-stack" style="vertical-align: middle; padding-right: 12px;">
                    <div style="font-size: 14.5px; font-weight: 800; color: #065f46; line-height: 1.3;">
                      Need an instant answer?
                    </div>
                    <div style="font-size: 12.5px; color: #047857; margin-top: 2px;">
                      Call our lead educator directly.
                    </div>
                  </td>
                  <td class="mobile-stack mobile-center" style="vertical-align: middle; text-align: right; padding-top: 8px;">
                    <a href="tel:+917820001282" style="display: inline-block; background-color: #34d399; color: #064e3b; font-size: 13px; font-weight: 800; text-decoration: none; padding: 10px 18px; border-radius: 9999px; box-shadow: 0 2px 6px rgba(5, 150, 105, 0.15); white-space: nowrap;">
                      +91 78200 01282 &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- PURPLE GRATITUDE BANNER: Emotional Mission -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f2fe; border: 1px solid #eae4fa; border-radius: 18px; padding: 14px 20px;">
                <tr>
                  <td style="width: 32px; vertical-align: middle;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#7c3aed" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                  </td>
                  <td class="mobile-stack" style="vertical-align: middle; padding-right: 12px;">
                    <div style="font-size: 12.5px; color: #3730a3; font-weight: 600; line-height: 1.45;">
                      Thank you for being a part of a kinder, more emotionally aware generation.
                    </div>
                  </td>
                  <td class="mobile-stack mobile-center" style="vertical-align: middle; text-align: right; white-space: nowrap; padding-top: 4px;">
                    <span class="handwriting" style="font-family: 'Caveat', cursive, sans-serif; font-size: 16px; font-weight: 700; color: #7c3aed;">
                      Real Conversations.<br />Brighter Futures.
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER: Logo & Trust Statement -->
          <tr>
            <td style="background-color: #ffffff; border-top: 1px solid #f1eff9; padding: 22px 32px 26px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align: middle;">
                    ${JAAGR_LOGO_HTML}
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <div style="font-size: 11px; color: #64748b; line-height: 1.5;">
                      100% Confidential. Zero sales pressure.<br />
                      Thank you for trusting Jaagr Mind.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        
        <!-- WATERMARK TAGLINE -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; margin-top: 18px;">
          <tr>
            <td align="center" style="font-size: 11px; color: #94a3b8; letter-spacing: 0.5px; text-transform: uppercase;">
              EMOTIONS MADE EASY &mdash; FOR A BRIGHTER TOMORROW &nbsp;&bull;&nbsp; 
              <span class="handwriting" style="font-family: 'Caveat', cursive, sans-serif; font-size: 14px; text-transform: none; color: #8b5cf6;">
                &hearts; Every emotion is valid.
              </span>
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
  const schoolName = data.school || "DPS Bangalore";
  const city = data.city || "Bengaluru";
  const role = data.role || "Principal / School Head";
  const strength = data.strength || "1,000 - 2,000";
  const message = data.message || "Student emotional fitness and teacher training";

  return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New School Callback Request - Jaagr Mind Admin</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #f7f6fb; }
    .handwriting { font-family: 'Caveat', cursive, -apple-system, sans-serif !important; }
    @media screen and (max-width: 600px) {
      .mobile-full { width: 100% !important; display: block !important; }
      .mobile-stack { display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; }
      .mobile-center { text-align: center !important; }
      .mobile-p-16 { padding: 20px 16px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f6fb; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; line-height: 1.5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f7f6fb; padding: 32px 12px;">
    <tr>
      <td align="center">
        <!-- Admin Email Container Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; background-color: #ffffff; border-radius: 24px; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06); overflow: hidden;">
          
          <!-- TOP HEADER: Logo & Slogan -->
          <tr>
            <td style="padding: 28px 32px 20px 32px; border-bottom: 1px solid #f1eff9;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align: middle;">
                    ${JAAGR_LOGO_HTML}
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="font-size: 13px; font-weight: 500; color: #64748b; letter-spacing: -0.2px;">
                      Building an Emotionally Stronger Generation
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- STATUS PILLS ROW: "NEW SCHOOL CALLBACK REQUEST" + "ACTION REQUIRED" -->
          <tr>
            <td style="padding: 24px 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left">
                    <div style="display: inline-block; background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 9999px; padding: 5px 14px; margin-right: 8px;">
                      <span style="display: inline-block; width: 7px; height: 7px; background-color: #10b981; border-radius: 9999px; margin-right: 6px; vertical-align: middle;"></span>
                      <span style="font-size: 10.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #065f46; vertical-align: middle;">
                        NEW SCHOOL CALLBACK REQUEST
                      </span>
                    </div>
                  </td>
                  <td align="right">
                    <div style="display: inline-block; background-color: #ede9fe; border: 1px solid #ddd6fe; border-radius: 9999px; padding: 5px 14px;">
                      <span style="font-size: 10.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #6d28d9;">
                        ACTION REQUIRED
                      </span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO INTRO: Headline + Megaphone Graphic -->
          <tr>
            <td style="padding: 12px 32px 20px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <!-- Left text -->
                  <td class="mobile-stack" style="vertical-align: top; width: 62%; padding-right: 16px;">
                    <h1 style="margin: 0 0 10px 0; font-size: 26px; font-weight: 800; color: #0f172a; line-height: 1.25; letter-spacing: -0.5px;">
                      A new school inquiry<br />has arrived.
                    </h1>
                    <p style="margin: 0; font-size: 13.5px; color: #475569; line-height: 1.6;">
                      A principal or school representative has submitted a callback/demo request through Jaagr Mind.
                    </p>
                  </td>

                  <!-- Right Megaphone -->
                  <td class="mobile-stack" style="vertical-align: middle; width: 38%; text-align: center; padding-top: 10px;">
                    ${ADMIN_ILLUSTRATION_SVG}
                    <div class="handwriting" style="font-family: 'Caveat', cursive, sans-serif; font-size: 13.5px; color: #7c3aed; font-weight: 700; margin-top: 4px; line-height: 1.25;">
                      Same mission.<br />More young minds.<br />Brighter tomorrows.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- LEAD DETAILS CARD -->
          <tr>
            <td style="padding: 10px 32px 18px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fafbfc; border: 1px solid #e2e8f0; border-radius: 18px; padding: 22px 24px;">
                <tr>
                  <td colspan="2" style="padding-bottom: 16px;">
                    <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">
                      LEAD DETAILS
                    </span>
                  </td>
                </tr>
                <tr>
                  <!-- Left Column -->
                  <td class="mobile-stack" style="vertical-align: top; width: 50%; padding-right: 12px;">
                    
                    <!-- Name -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">Name</div>
                          <div style="font-size: 14px; font-weight: 800; color: #0f172a; margin-top: 1px;">${data.name || "Unknown Lead"}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Phone / WhatsApp -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">Phone / WhatsApp</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">
                            <a href="tel:+91${cleanPhone}" style="color: #0f172a; text-decoration: none;">+91 ${cleanPhone}</a>
                            &nbsp;
                            <a href="https://wa.me/${waPhone}" style="color: #10b981; font-size: 11px; font-weight: 700; text-decoration: underline;">WhatsApp &rarr;</a>
                          </div>
                        </td>
                      </tr>
                    </table>

                    <!-- School -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"></path></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">School</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">${schoolName}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Student Strength -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">Student Strength</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">${strength}</div>
                        </td>
                      </tr>
                    </table>

                  </td>

                  <!-- Right Column -->
                  <td class="mobile-stack" style="vertical-align: top; width: 50%; padding-left: 12px;">
                    
                    <!-- Email -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">Email</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px; word-break: break-all;">
                            <a href="mailto:${data.email}" style="color: #6d28d9; text-decoration: none;">${data.email}</a>
                          </div>
                        </td>
                      </tr>
                    </table>

                    <!-- Role -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">Role</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">${role}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- City -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">City</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">${city}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Preferred Callback Time -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">Preferred Callback Time</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 1px;">${preferredTime}</div>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Full Width Row: What they want to solve first -->
                <tr>
                  <td colspan="2" style="padding-top: 16px; border-top: 1px solid #f1f5f9; margin-top: 12px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </td>
                        <td>
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">What they want to solve first</div>
                          <div style="font-size: 13.5px; font-weight: 700; color: #0f172a; margin-top: 2px; line-height: 1.45;">${message}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- SERVICE LEVEL / CALLBACK PREFERENCE BAR -->
          <tr>
            <td style="padding: 0 32px 18px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f2fe; border: 1px solid #eae4fa; border-radius: 16px; padding: 14px 20px;">
                <tr>
                  <!-- Left side: Callback preference -->
                  <td style="width: 50%; vertical-align: middle; border-right: 1px solid #ddd6fe; padding-right: 16px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width: 32px; vertical-align: middle;">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </td>
                        <td style="vertical-align: middle;">
                          <div style="font-size: 11px; color: #64748b; font-weight: 500;">Callback preference</div>
                          <div style="font-size: 13.5px; font-weight: 800; color: #1e1b4b; margin-top: 1px;">${preferredTime}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  
                  <!-- Right side: Response target -->
                  <td style="width: 50%; vertical-align: middle; padding-left: 20px;">
                    <div style="font-size: 11px; color: #64748b; font-weight: 500;">Response target</div>
                    <div style="font-size: 13.5px; font-weight: 800; color: #1e1b4b; margin-top: 1px;">within 24 hours</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- PRIMARY ACTION BUTTON: "View / Follow Up ->" -->
          <tr>
            <td style="padding: 0 32px 24px 32px;">
              <a href="tel:+91${cleanPhone}" style="display: block; background-color: #6d28d9; color: #ffffff; font-size: 15px; font-weight: 800; text-align: center; text-decoration: none; padding: 15px 24px; border-radius: 14px; box-shadow: 0 4px 14px rgba(109, 40, 217, 0.25); letter-spacing: 0.2px;">
                View / Follow Up &rarr;
              </a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #ffffff; border-top: 1px solid #f1eff9; padding: 22px 32px 26px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align: middle;">
                    ${JAAGR_LOGO_HTML}
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <div style="font-size: 11px; color: #64748b; line-height: 1.5;">
                      Submitted via Jaagr Mind website.<br />
                      Keep lead information confidential.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <!-- WATERMARK TAGLINE -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; margin-top: 18px;">
          <tr>
            <td align="center" style="font-size: 11px; color: #94a3b8; letter-spacing: 0.5px; text-transform: uppercase;">
              EMOTIONS MADE EASY &mdash; FOR A BRIGHTER TOMORROW &nbsp;&bull;&nbsp; 
              <span class="handwriting" style="font-family: 'Caveat', cursive, sans-serif; font-size: 14px; text-transform: none; color: #8b5cf6;">
                &hearts; Every emotion is valid.
              </span>
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

// ─────────────────────────────────────────────────────────────────────────────
// REACT TSX COMPONENTS (For interactive UI, previewing, and React Email)
// ─────────────────────────────────────────────────────────────────────────────

export interface EmailTemplateProps {
  data: CallRequestPayload;
}

export const JaagrLogoReact: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-1">
        <span className="text-xl font-black tracking-tight text-slate-900">
          Jaagr<span className="text-purple-700">Mind</span>
        </span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="inline-block">
          <path d="M13 7L21 3.5" stroke="#7c3aed" strokeWidth="2.75" strokeLinecap="round" />
          <path d="M14 12H23" stroke="#7c3aed" strokeWidth="2.75" strokeLinecap="round" />
          <path d="M13 17L21 20.5" stroke="#7c3aed" strokeWidth="2.75" strokeLinecap="round" />
        </svg>
      </div>
      <div className="text-[8px] font-black uppercase tracking-[2px] text-slate-500">
        EMOTIONS MADE EASY
      </div>
    </div>
  );
};

export const UserThankYouEmail: React.FC<EmailTemplateProps> = ({ data }) => {
  const preferredTime = data.preferredTime || "Call ASAP (Next Available)";
  const schoolName = data.school || "DPS Bangalore";
  const city = data.city || "Bengaluru";
  const role = data.role || "Principal / School Head";
  const message = data.message || "Student emotional fitness and teacher training";

  return (
    <div className="mx-auto max-w-[580px] rounded-3xl border border-purple-100 bg-white shadow-xl overflow-hidden font-sans text-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6">
        <JaagrLogoReact />
        <span className="text-xs font-medium text-slate-500">Every emotion is valid.</span>
      </div>

      {/* Hero */}
      <div className="px-8 pt-7 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-center gap-4">
          <div>
            <span className="inline-block rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[10px] font-extrabold tracking-wider uppercase text-purple-700">
              CALLBACK &amp; SCHOOL DEMO REQUEST RECEIVED
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">
              We&rsquo;ve received <br /> your request.
            </h2>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Thank you for reaching out. Our team has received your request for a school
              demo/callback and will get in touch within 24 hours.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div
              dangerouslySetInnerHTML={{ __html: USER_ILLUSTRATION_SVG }}
              className="w-28 sm:w-32"
            />
            <span
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
              className="text-sm font-bold text-purple-700 mt-1"
            >
              A more emotionally aware tomorrow 💚
            </span>
          </div>
        </div>
      </div>

      {/* Details Box */}
      <div className="px-8 py-3">
        <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-5">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            YOUR REQUEST DETAILS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-500 font-medium">Name</span>
              <p className="font-bold text-slate-900 mt-0.5">{data.name || "Dr. Ananya Sharma"}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">School</span>
              <p className="font-bold text-slate-900 mt-0.5">{schoolName}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Role</span>
              <p className="font-bold text-slate-900 mt-0.5">{role}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">City</span>
              <p className="font-bold text-slate-900 mt-0.5">{city}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Preferred Callback Time</span>
              <p className="font-bold text-slate-900 mt-0.5">{preferredTime}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">What you&rsquo;d like to solve first</span>
              <p className="font-bold text-slate-900 mt-0.5">{message}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mint Banner */}
      <div className="px-8 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-bold">
              📞
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-900">Need an instant answer?</p>
              <p className="text-xs text-emerald-700">Call our lead educator directly.</p>
            </div>
          </div>
          <a
            href="tel:+917820001282"
            className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-black text-emerald-950 shadow-sm transition hover:bg-emerald-300 whitespace-nowrap"
          >
            +91 78200 01282 &rarr;
          </a>
        </div>
      </div>

      {/* Purple Appreciation Banner */}
      <div className="px-8 py-3">
        <div className="flex items-center justify-between rounded-2xl border border-purple-200 bg-purple-50/60 p-3.5">
          <div className="flex items-center gap-2">
            <span className="text-purple-600 text-lg">💜</span>
            <span className="text-xs font-semibold text-purple-900">
              Thank you for being a part of a kinder, more emotionally aware generation.
            </span>
          </div>
          <span
            style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            className="hidden sm:inline-block text-sm font-bold text-purple-700 whitespace-nowrap"
          >
            Real Conversations. Brighter Futures.
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 px-8 py-5 text-right text-[11px] text-slate-500">
        <JaagrLogoReact />
        <div>
          100% Confidential. Zero sales pressure. <br />
          Thank you for trusting Jaagr Mind.
        </div>
      </div>
    </div>
  );
};

export const AdminNotificationEmail: React.FC<EmailTemplateProps> = ({ data }) => {
  const cleanPhone = data.phone.trim();
  const waPhone = cleanPhoneForWhatsApp(cleanPhone);
  const preferredTime = data.preferredTime || "Call ASAP (Next Available)";
  const schoolName = data.school || "DPS Bangalore";
  const city = data.city || "Bengaluru";
  const role = data.role || "Principal / School Head";
  const strength = data.strength || "1,000 - 2,000";
  const message = data.message || "Student emotional fitness and teacher training";

  return (
    <div className="mx-auto max-w-[580px] rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden font-sans text-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6">
        <JaagrLogoReact />
        <span className="text-xs font-medium text-slate-500">
          Building an Emotionally Stronger Generation
        </span>
      </div>

      {/* Badges */}
      <div className="flex items-center justify-between px-8 pt-6 pb-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          NEW SCHOOL CALLBACK REQUEST
        </span>
        <span className="inline-block rounded-full border border-purple-200 bg-purple-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-purple-800">
          ACTION REQUIRED
        </span>
      </div>

      {/* Hero */}
      <div className="px-8 pt-3 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-center gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">
              A new school inquiry <br /> has arrived.
            </h2>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              A principal or school representative has submitted a callback/demo request through
              Jaagr Mind.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div
              dangerouslySetInnerHTML={{ __html: ADMIN_ILLUSTRATION_SVG }}
              className="w-24 sm:w-28"
            />
            <span
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
              className="text-xs font-bold text-purple-700 mt-1 leading-snug"
            >
              Same mission. <br /> More young minds. <br /> Brighter tomorrows.
            </span>
          </div>
        </div>
      </div>

      {/* Lead Details Box */}
      <div className="px-8 py-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            LEAD DETAILS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-500 font-medium">Name</span>
              <p className="font-extrabold text-slate-900 mt-0.5">{data.name || "Dr. Ananya Sharma"}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Email</span>
              <p className="font-bold text-purple-700 mt-0.5 break-all">
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Phone / WhatsApp</span>
              <p className="font-bold text-slate-900 mt-0.5">
                +91 {cleanPhone}{" "}
                <a href={`https://wa.me/${waPhone}`} className="text-emerald-600 underline ml-1">
                  WhatsApp &rarr;
                </a>
              </p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Role</span>
              <p className="font-bold text-slate-900 mt-0.5">{role}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">School</span>
              <p className="font-bold text-slate-900 mt-0.5">{schoolName}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">City</span>
              <p className="font-bold text-slate-900 mt-0.5">{city}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Student Strength</span>
              <p className="font-bold text-slate-900 mt-0.5">{strength}</p>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Preferred Callback Time</span>
              <p className="font-bold text-slate-900 mt-0.5">{preferredTime}</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200 text-xs">
            <span className="text-slate-500 font-medium">What they want to solve first</span>
            <p className="font-bold text-slate-900 mt-0.5">{message}</p>
          </div>
        </div>
      </div>

      {/* SLA / Target Strip */}
      <div className="px-8 py-2">
        <div className="grid grid-cols-2 rounded-2xl border border-purple-100 bg-purple-50/60 p-3.5 text-xs">
          <div className="border-r border-purple-200 pr-3">
            <span className="text-slate-500 font-medium">Callback preference</span>
            <p className="font-extrabold text-slate-900 mt-0.5">{preferredTime}</p>
          </div>
          <div className="pl-4">
            <span className="text-slate-500 font-medium">Response target</span>
            <p className="font-extrabold text-slate-900 mt-0.5">within 24 hours</p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-8 py-3">
        <a
          href={`tel:+91${cleanPhone}`}
          className="block w-full text-center rounded-xl bg-purple-700 py-3 text-sm font-extrabold text-white shadow-md hover:bg-purple-800 transition"
        >
          View / Follow Up &rarr;
        </a>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 px-8 py-5 text-right text-[11px] text-slate-500">
        <JaagrLogoReact />
        <div>
          Submitted via Jaagr Mind website. <br />
          Keep lead information confidential.
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// RESEND EMAIL DISPATCH ENGINE
// ─────────────────────────────────────────────────────────────────────────────

export async function sendCallRequestEmails(
  data: CallRequestPayload,
): Promise<SendCallRequestResult> {
  const resend = getResendClient();
  const subjectUser = "We've received your request - Jaagr Mind";
  const schoolOrRole = data.school || data.role || data.city || "Website Inquiry";
  const subjectAdmin = `🔔 New School Callback Request: ${data.name || "Lead"} (${schoolOrRole})`;

  console.log(`[Resend] Initiating call request email notification for: ${data.email} (${data.name})`);

  let userEmailId: string | undefined = undefined;
  let adminEmailId: string | undefined = undefined;
  let hasError = false;
  let errorMessage = "";

  // 1. Send beautifully designed thank-you email to user
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
        console.log(`[Resend] User confirmation email sent successfully. ID: ${userEmailId}`);
      }
    } catch (err: unknown) {
      const errText = err instanceof Error ? err.message : String(err);
      console.error("[Resend] Exception sending to user:", errText);
      hasError = true;
      errorMessage += `User email exception: ${errText}; `;
    }
  }

  // 2. Send actionable alert email to administrator
  try {
    const adminEmailPayload: Parameters<typeof resend.emails.send>[0] = {
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: subjectAdmin,
      html: generateAdminAlertEmailHtml(data),
    };

    if (data.email && data.email.includes("@")) {
      adminEmailPayload.replyTo = data.email;
    }

    const adminRes = await resend.emails.send(adminEmailPayload);

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
      `[Resend Notice] Resend reported an issue sending one or more emails. Ensure RESEND_API_KEY is valid and the sending domain is verified. Captured lead details:`,
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
      userEmailId: userEmailId ?? undefined,
      adminEmailId: adminEmailId ?? undefined,
    };
  }

  return {
    success: true,
    userEmailId: userEmailId ?? undefined,
    adminEmailId: adminEmailId ?? undefined,
  };
}

export default sendCallRequestEmails;
