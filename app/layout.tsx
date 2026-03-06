import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Ardiansyah | Portfolio",
  description: "Portfolio of Kevin, a Frontend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {/* GSAP Smooth Scroll Structure */}
          <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
