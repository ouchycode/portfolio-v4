"use client";

import { Send } from "lucide-react";

const inputClass =
  "rv-sunken w-full px-4 py-3 md:py-3.5 text-sm md:text-base bg-vtcard text-ink placeholder:text-inkmute focus:bg-ink/[0.04] transition-colors duration-200";

const labelClass =
  "rv-pixel text-[11px] font-bold uppercase tracking-[0.12em] text-inkmute pl-0.5";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ContactForm({ t }: { t: Record<string, any> }) {
  return (
    <div data-vt="open" className="h-full rv-window">
      <div className="rv-titlebar">
        <span className="rv-titlebar-label select-none">
          new_message.exe — Outlook
        </span>
        <span className="ml-auto flex items-center gap-1 select-none">
          <span className="rv-titlebar-btn text-[8px]">─</span>
          <span className="rv-titlebar-btn text-[8px]">□</span>
          <span className="rv-titlebar-btn text-[9px]">×</span>
        </span>
      </div>

      <div className="rv-panel p-6 sm:p-8 md:p-9 relative overflow-hidden">
        {/* Retro color top bar */}
        <div aria-hidden className="absolute top-0 left-0 right-0 h-1 flex">
          {["#FF3E9A", "#FFD400", "#22C7A9", "#3B2FD6"].map((c) => (
            <div key={c} className="flex-1 h-full" style={{ background: c }} />
          ))}
        </div>

        <form
          className="flex flex-col h-full justify-between gap-6 mt-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-4 md:gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>
                {t.contact.formName} <span className="text-vtpink">*</span>
              </label>
              <input
                type="text"
                placeholder={t.contact.formNamePlaceholder}
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>
                {t.contact.formEmail} <span className="text-vtpink">*</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className={labelClass}>
                {t.contact.formMessage}{" "}
                <span className="text-vtpink">*</span>
              </label>
              <textarea
                rows={5}
                placeholder={t.contact.formMessagePlaceholder}
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          {/* Submit row */}
          <div className="flex items-center justify-between gap-4 mt-1">
            <p className="rv-pixel text-[10px] text-inkmute uppercase tracking-wider">
              <span className="text-vtpink">*</span> required fields
            </p>
            <button
              type="submit"
              className="rv-btn-primary rv-pixel group inline-flex items-center justify-center gap-2.5 px-7 md:px-8 py-3 md:py-3.5 text-[12px] font-bold uppercase tracking-wider"
            >
              <Send
                size={15}
                strokeWidth={2.2}
                className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
              <span className="relative z-10">{t.contact.btnSubmit}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}