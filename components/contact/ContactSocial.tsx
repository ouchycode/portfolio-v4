import { Linkedin, Github } from "lucide-react";

export function ContactSocial() {
  return (
    <div data-aos="zoom-in-up" data-aos-delay="250">
      <div
        className="w-full rounded-4xl bg-white dark:bg-[#303134] border border-[#F1F3F4] dark:border-[#5F6368]/40 p-4 md:p-5 flex items-center justify-center gap-3"
        style={{
          boxShadow:
            "0 1px 3px rgba(60,64,67,.08), 0 4px 16px rgba(60,64,67,.07)",
        }}
      >
        <a
          href="https://www.linkedin.com/in/kevin-ardiansyah-529b96386/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124] hover:bg-[var(--google-blue)] hover:border-[var(--google-blue)] text-[#5F6368] dark:text-[#9AA0A6] hover:text-white transition-colors duration-200 active:scale-95"
        >
          <Linkedin size={17} />
          <span className="text-sm font-semibold">LinkedIn</span>
        </a>
        <a
          href="https://github.com/ouchycode"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#DADCE0] dark:border-[#5F6368]/60 bg-[#F8F9FA] dark:bg-[#202124] hover:bg-[#202124] hover:border-[#202124] dark:hover:bg-[#E8EAED] dark:hover:border-[#E8EAED] text-[#5F6368] dark:text-[#9AA0A6] hover:text-white dark:hover:text-[#202124] transition-colors duration-200 active:scale-95"
        >
          <Github size={17} />
          <span className="text-sm font-semibold">GitHub</span>
        </a>
      </div>
    </div>
  );
}
