import { Briefcase, GraduationCap, Code, Users } from "lucide-react";

export interface TypeStyle {
  icon: React.ElementType;
  color: string;
  bgColor: string;
  accentColor: string;
}

export function getTypeStyle(type: string): TypeStyle {
  switch (type) {
    case "Education":
      return {
        icon: GraduationCap,
        color: "text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]",
        bgColor: "bg-[#E8F0FE] dark:bg-[var(--google-blue-dark)]/15",
        accentColor: "#1A73E8",
      };
    case "Bootcamp":
      return {
        icon: Code,
        color: "text-[#34A853] dark:text-[#81C995]",
        bgColor: "bg-[#E6F4EA] dark:bg-[#81C995]/15",
        accentColor: "#34A853",
      };
    case "Organization":
      return {
        icon: Users,
        color: "text-[#FABB05] dark:text-[#FDE293]",
        bgColor: "bg-[#FEF7E0] dark:bg-[#FDE293]/15",
        accentColor: "#FABB05",
      };
    case "Internship":
      return {
        icon: Briefcase,
        color: "text-[#EA4335] dark:text-[#F28B82]",
        bgColor: "bg-[#FCE8E6] dark:bg-[#F28B82]/15",
        accentColor: "#EA4335",
      };
    default:
      return {
        icon: Briefcase,
        color: "text-[#5F6368] dark:text-[#9AA0A6]",
        bgColor: "bg-[#F1F3F4] dark:bg-[#3C4043]/50",
        accentColor: "#5F6368",
      };
  }
}
