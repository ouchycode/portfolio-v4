import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GithubGraph() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div data-aos="fade-up" className="w-full max-w-4xl mx-auto mb-16">
      <div className="material-card bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center overflow-hidden relative">
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-[#34A853]/10 to-transparent rounded-tr-[2.5rem]" />
        
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-black text-[#202124] dark:text-white tracking-tight">
              GitHub Contributions
            </h3>
            <p className="text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1">
              Real-time daily activity from @ouchycode
            </p>
          </div>
          
          <a 
            href="https://github.com/ouchycode" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-bold rounded-full bg-[#E6F4EA] dark:bg-[#81C995]/15 text-[#137333] dark:text-[#81C995] hover:bg-[#34A853]/20 transition-colors"
          >
            View Profile
          </a>
        </div>

        <div className="w-full overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-[#DADCE0] dark:[&::-webkit-scrollbar-thumb]:bg-[#5F6368] [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="min-w-max px-2">
            <GitHubCalendar 
              username="ouchycode" 
              year="last"
              colorScheme={isDark ? "dark" : "light"}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
