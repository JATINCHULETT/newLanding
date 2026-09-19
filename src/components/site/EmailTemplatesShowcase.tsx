import React, { useState } from "react";
import {
  UserThankYouEmail,
  AdminNotificationEmail,
  type CallRequestPayload,
} from "@/server/email";
import { Check, Copy, ExternalLink, Mail, Send, Sparkles } from "lucide-react";

const SAMPLE_LEAD: CallRequestPayload = {
  name: "Dr. Ananya Sharma",
  email: "ananya.sharma@dps.edu.in",
  phone: "78200 01282",
  role: "Principal / School Head",
  school: "DPS Bangalore",
  city: "Bengaluru",
  strength: "1,000 – 2,000",
  preferredTime: "Call ASAP (Next Available)",
  message: "Student emotional fitness and teacher training",
  source: "demo_form",
};

export function EmailTemplatesShowcase() {
  const [data, setData] = useState<CallRequestPayload>(SAMPLE_LEAD);
  const [activeTab, setActiveTab] = useState<"both" | "user" | "admin">("both");
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f3f1f9] py-10 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Top Banner Header matching the screenshot */}
      <div className="max-w-7xl mx-auto mb-8 bg-white/80 backdrop-blur-md rounded-2xl border border-purple-100 p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-black text-slate-900">
              Jaagr<span className="text-purple-700">Mind</span>
            </span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M13 7L21 3.5" stroke="#7c3aed" strokeWidth="2.75" strokeLinecap="round" />
              <path d="M14 12H23" stroke="#7c3aed" strokeWidth="2.75" strokeLinecap="round" />
              <path d="M13 17L21 20.5" stroke="#7c3aed" strokeWidth="2.75" strokeLinecap="round" />
            </svg>
          </div>
          <div className="hidden sm:block h-8 w-[1px] bg-slate-200" />
          <div>
            <h1 className="text-base font-extrabold text-slate-900">Email Templates</h1>
            <p className="text-xs text-slate-500">Compassionate communication for a brighter tomorrow.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            className="text-lg font-bold text-purple-600 hidden lg:block"
          >
            Stronger, Brighter, Kinder Minds
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab("both")}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeTab === "both" ? "bg-white shadow-sm text-purple-700" : "text-slate-600"
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setActiveTab("user")}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeTab === "user" ? "bg-white shadow-sm text-purple-700" : "text-slate-600"
              }`}
            >
              User Thank-You
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeTab === "admin" ? "bg-white shadow-sm text-purple-700" : "text-slate-600"
              }`}
            >
              Admin Alert
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Templates */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* TEMPLATE 1: USER / SCHOOL CONTACT */}
        {(activeTab === "both" || activeTab === "user") && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100/80 px-4 py-1.5 text-xs font-black tracking-wider text-purple-800 border border-purple-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-700 text-white text-[10px]">
                  1
                </span>
                USER / SCHOOL CONTACT THANK-YOU EMAIL
              </div>
            </div>

            <UserThankYouEmail data={data} />
          </div>
        )}

        {/* TEMPLATE 2: ADMIN / TEAM NOTIFICATION */}
        {(activeTab === "both" || activeTab === "admin") && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs font-black tracking-wider text-emerald-800 border border-emerald-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-white text-[10px]">
                  2
                </span>
                ADMIN / TEAM NOTIFICATION EMAIL
              </div>
            </div>

            <AdminNotificationEmail data={data} />
          </div>
        )}
      </div>

      {/* Bottom Watermark */}
      <div className="max-w-7xl mx-auto mt-12 text-center text-xs text-slate-400 font-medium tracking-wider">
        EMOTIONS MADE EASY &mdash; FOR A BRIGHTER TOMORROW &nbsp;&bull;&nbsp;
        <span
          style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
          className="text-base text-purple-600 ml-1 font-bold"
        >
          ♡ Every emotion is valid.
        </span>
      </div>
    </div>
  );
}

export default EmailTemplatesShowcase;
