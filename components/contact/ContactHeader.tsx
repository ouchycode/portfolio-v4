import { MessageSquare } from "lucide-react";

interface ContactHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  fastResponse: string;
}

export function ContactHeader({
  badge,
  title,
  subtitle,
  fastResponse,
}: ContactHeaderProps) {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div className="contact-input inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134] shadow-sm w-fit">
        <MessageSquare
          size={14}
          className="text-[#1A73E8] dark:text-[#8AB4F8]"
        />
        <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
          {badge}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="contact-input flex items-end gap-4">
            <h2 className="font-black tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl text-[#202124] dark:text-white leading-[1.05]">
              {title}
            </h2>
            <div className="hidden md:flex items-center gap-2 mb-3 flex-1">
              <span className="w-2 h-2 rounded-full bg-[#1A73E8] dark:bg-[#8AB4F8] shrink-0" />
              <div className="h-px flex-1 bg-linear-to-r from-[#DADCE0] to-transparent dark:from-[#5F6368]/50" />
            </div>
          </div>
          <p className="contact-input text-sm md:text-base lg:text-lg text-[#5F6368] dark:text-[#9AA0A6] mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Fast response badge — desktop */}
        <div className="contact-input hidden md:flex shrink-0 pb-2">
          <div
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-white dark:bg-[#303134]"
            style={{ boxShadow: "0 1px 3px rgba(60,64,67,.08)" }}
          >
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34A853] opacity-50" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#34A853]" />
            </div>
            <span className="text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6]">
              {fastResponse}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
