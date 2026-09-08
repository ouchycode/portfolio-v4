import { Linkedin, Github } from "lucide-react";

export function ContactSocial() {
  return (
    <div data-aos="zoom-in-up" data-aos-delay="250">
      <div className="rv-chip w-full bg-vtcard/70 p-4 md:p-5 flex items-center justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/kevin-ardiansyah-529b96386/"
          target="_blank"
          rel="noreferrer"
          className="rv-btn rv-pixel flex items-center gap-2.5 px-5 h-10 text-[12px] font-bold uppercase tracking-wider"
        >
          <Linkedin size={16} className="relative z-10" />
          <span className="relative z-10">LinkedIn</span>
        </a>
        <a
          href="https://github.com/ouchycode"
          target="_blank"
          rel="noreferrer"
          className="rv-btn rv-pixel flex items-center gap-2.5 px-5 h-10 text-[12px] font-bold uppercase tracking-wider"
        >
          <Github size={16} className="relative z-10" />
          <span className="relative z-10">GitHub</span>
        </a>
      </div>
    </div>
  );
}