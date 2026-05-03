interface InfoCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  accentColor: string;
  label: string;
  value: string;
}

export function InfoCard({
  icon,
  iconBg,
  iconColor,
  accentColor,
  label,
  value,
}: InfoCardProps) {
  return (
    <div className="reveal-card">
      <div className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl md:rounded-3xl bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 shadow-sm hover:-translate-y-0.5 transition-transform duration-200">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center rounded-xl md:rounded-2xl ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <p className="text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase text-[#5F6368] dark:text-[#9AA0A6]">
            {label}
          </p>
          <p className="font-semibold text-sm md:text-base text-[#202124] dark:text-[#E8EAED] truncate">
            {value}
          </p>
        </div>
        <span
          aria-hidden
          className={`ml-auto w-0.5 h-7 md:h-8 rounded-full shrink-0 bg-linear-to-b ${accentColor} to-transparent`}
        />
      </div>
    </div>
  );
}
