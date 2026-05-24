import { Mail, MapPin } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ContactInfo({ t }: { t: Record<string, any> }) {
  return (
    <div data-aos="fade-right" data-aos-delay="100" className="flex-1">
      <div className="material-card w-full h-full rounded-4xl bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 p-7 sm:p-10 flex flex-col justify-between">
        <div>
          <h3 className="font-black tracking-[-0.02em] text-xl md:text-2xl lg:text-3xl text-[#202124] dark:text-white mb-3">
            {t.contact.infoTitle}
          </h3>

          {/* G-color bar */}
          <div className="flex gap-1 mb-5">
            {["#EA4335", "#FABB05", "#34A853", "#1A73E8"].map((c) => (
              <div
                key={c}
                className="h-1 flex-1 rounded-full opacity-70"
                style={{ background: c }}
              />
            ))}
          </div>

          <p className="text-sm md:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            {t.contact.infoDesc}
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-7 md:mt-8">
          {/* Email */}
          <a
            href="mailto:kevinnardiansyahh19@gmail.com"
            className="group flex items-center gap-4 p-3.5 md:p-4 rounded-2xl border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124] hover:border-[var(--google-blue)]/40 hover:bg-white dark:hover:bg-[#303134] transition-colors duration-200"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 flex shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#5F6368] group-hover:bg-[#E8F0FE] group-hover:border-[var(--google-blue)]/30 group-hover:text-[var(--google-blue)] dark:group-hover:text-[var(--google-blue-dark)] text-[#5F6368] dark:text-[#9AA0A6] transition-colors duration-200">
              <Mail size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6] mb-0.5">
                Email Address
              </span>
              <span className="text-xs md:text-sm font-semibold text-[#202124] dark:text-[#E8EAED] group-hover:text-[var(--google-blue)] dark:group-hover:text-[var(--google-blue-dark)] transition-colors truncate">
                kevinnardiansyahh19@gmail.com
              </span>
            </div>
            <span
              aria-hidden
              className="ml-auto w-0.5 h-7 md:h-8 rounded-full shrink-0 bg-linear-to-b from-[var(--google-blue)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 p-3.5 md:p-4 rounded-2xl border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124]">
            <div className="w-10 h-10 md:w-11 md:h-11 flex shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[#303134] border border-[#DADCE0] dark:border-[#5F6368] text-[#EA4335] dark:text-[#F28B82]">
              <MapPin size={18} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6] mb-0.5">
                Base Location
              </span>
              <span className="text-xs md:text-sm font-semibold text-[#202124] dark:text-[#E8EAED]">
                Tangerang, Indonesia
              </span>
            </div>
            <span
              aria-hidden
              className="ml-auto w-0.5 h-7 md:h-8 rounded-full shrink-0 bg-linear-to-b from-[#EA4335]/30 to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
