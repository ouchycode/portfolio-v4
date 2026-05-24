import { Code2 } from "lucide-react";

interface AboutDescriptionProps {
  tag: string;
  headline: string;
  description: string;
}

export function AboutDescription({
  tag,
  headline,
  description,
}: AboutDescriptionProps) {
  return (
    <div data-aos="fade-left" data-aos-delay="150" className="flex-1">
      <div
        className="h-full rounded-4xl bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 p-7 sm:p-10 flex flex-col justify-center"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
        }}
      >
        {/* Role pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#E8F0FE] dark:bg-[var(--google-blue-dark)]/12 text-[var(--google-blue)] dark:text-[var(--google-blue-dark)] w-fit">
          <Code2 size={15} strokeWidth={2.2} />
          <span className="text-xs font-bold tracking-[0.08em] uppercase">
            {tag}
          </span>
        </div>

        {/* Headline */}
        <p className="text-xl md:text-2xl lg:text-[2rem] font-black leading-[1.15] tracking-[-0.02em] text-[#202124] dark:text-[#E8EAED] mb-5">
          {headline}
        </p>

        {/* Google-color underline bar */}
        <div className="flex gap-1 mb-6">
          {(
            [
              ["#EA4335", "flex-1"],
              ["#FABB05", "w-3"],
              ["#34A853", "flex-1"],
              ["#1A73E8", "w-3"],
            ] as const
          ).map(([color, size], i) => (
            <div
              key={i}
              className={`h-1 rounded-full ${size}`}
              style={{ background: color, opacity: 0.85 }}
            />
          ))}
        </div>

        <p className="text-sm sm:text-base md:text-[17px] text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
