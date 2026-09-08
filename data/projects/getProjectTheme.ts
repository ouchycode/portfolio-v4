import {
  BookOpen,
  Ticket,
  ShoppingCart,
  Palette,
  Globe,
  Smartphone,
} from "lucide-react";

export interface ProjectTheme {
  bg: string;
  text: string;
  accent: string;
}

export function getProjectTheme(category: string): ProjectTheme {
  if (["LMS Platform", "EdTech", "Web Application"].includes(category))
    return {
      bg: "bg-[#E2DDFF] dark:bg-vtblue/20",
      text: "text-vtblue",
      accent: "var(--vt-blue)",
    };
  if (["E-Commerce", "Mobile Application"].includes(category))
    return {
      bg: "bg-[#DCF7F2] dark:bg-vtteal/20",
      text: "text-vtteal",
      accent: "var(--vt-teal)",
    };
  if (["Event Management"].includes(category))
    return {
      bg: "bg-[#FFF6D6] dark:bg-vtamber/20",
      text: "text-vtamber",
      accent: "var(--vt-amber)",
    };
  return {
    bg: "bg-[#FFE0EF] dark:bg-vtpink/20",
    text: "text-vtpink",
    accent: "var(--vt-pink)",
  };
}

export function getProjectIcon(category: string) {
  if (["LMS Platform", "EdTech"].includes(category)) return BookOpen;
  if (category === "Event Management") return Ticket;
  if (category === "E-Commerce") return ShoppingCart;
  if (category === "Modern Portfolio") return Palette;
  if (category === "Mobile Application") return Smartphone;
  return Globe;
}