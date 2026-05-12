"use client";

import { Send } from "lucide-react";

const inputClass =
  "w-full rounded-2xl border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124] px-5 py-3 md:py-3.5 text-sm md:text-base text-[#202124] dark:text-white placeholder:text-[#9AA0A6] dark:placeholder:text-[#5F6368] outline-none focus:bg-white dark:focus:bg-[#303134] focus:border-[#1A73E8] dark:focus:border-[#8AB4F8] focus:ring-4 focus:ring-[#1A73E8]/10 dark:focus:ring-[#8AB4F8]/10 transition-colors duration-200";

const labelClass =
  "text-xs font-bold tracking-[0.08em] uppercase text-[#5F6368] dark:text-[#9AA0A6] pl-1";

export function ContactForm({ t }: { t: any }) {
  return (
    <div data-aos="fade-left" data-aos-delay="150" className="h-full">
      <div
        className="w-full h-full rounded-4xl bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 p-7 sm:p-10 relative overflow-hidden"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
        }}
      >
        {/* Google 4-color top bar */}
        <div className="absolute top-0 left-0 right-0 h-0.75 flex">
          {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
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
                {t.contact.formName} <span className="text-[#EA4335]">*</span>
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
                {t.contact.formEmail} <span className="text-[#EA4335]">*</span>
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
                <span className="text-[#EA4335]">*</span>
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
            <p className="text-xs text-[#9AA0A6] dark:text-[#5F6368]">
              <span className="text-[#EA4335]">*</span> required fields
            </p>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2.5 px-7 md:px-8 py-3 md:py-3.5 rounded-full font-semibold text-sm tracking-wide text-white active:scale-95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#1A73E8]"
              style={{ background: "linear-gradient(135deg,#1A73E8,#4285F4)" }}
            >
              <Send
                size={15}
                strokeWidth={2.2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
              {t.contact.btnSubmit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
