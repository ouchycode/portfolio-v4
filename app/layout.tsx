import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LoadingProvider } from "@/context/LoadingContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/ui/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Ardiansyah | Frontend Engineer",
  description:
    "Portfolio of Kevin Ardiansyah, a Frontend Engineer based in Tangerang, ID. Focused on creating intuitive user experiences and writing clean, scalable code.",
  keywords: [
    "Kevin Ardiansyah",
    "Frontend Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
    "Tangerang",
  ],
  openGraph: {
    title: "Kevin Ardiansyah | Frontend Engineer",
    description:
      "Explore the selected works and career journey of Kevin Ardiansyah, a Frontend Engineer based in Tangerang, Indonesia.",
    url: "https://portfoliobykevin.vercel.app/",
    siteName: "Kevin Ardiansyah Portfolio",
    images: [
      {
        url: "/profile_kevin.png", // Ganti dengan URL gambar OG yang sesuai (rasio 1.91:1)
        width: 1200,
        height: 630,
        alt: "Kevin Ardiansyah - Frontend Engineer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Ardiansyah | Frontend Engineer",
    description:
      "Explore the selected works and career journey of Kevin Ardiansyah.",
    images: ["/profile_kevin.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable} font-sans antialiased min-h-screen
          bg-[#F8F9FA] text-[#202124]
          dark:bg-[#202124] dark:text-[#E8EAED]
        `}
      >
        <LanguageProvider>
          <LoadingProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                  className="
                    absolute inset-0 
                    bg-[linear-gradient(to_right,#DADCE0_1px,transparent_1px),linear-gradient(to_bottom,#DADCE0_1px,transparent_1px)] 
                    dark:bg-[linear-gradient(to_right,#3C4043_1px,transparent_1px),linear-gradient(to_bottom,#3C4043_1px,transparent_1px)]
                    opacity-50 dark:opacity-40
                  "
                  style={{
                    backgroundSize: "48px 48px",
                    maskImage:
                      "radial-gradient(ellipse 80% 80% at 50% 30%, black, transparent)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 80% 80% at 50% 30%, black, transparent)",
                  }}
                />
              </div>

              <Navbar />

              <div
                id="smooth-wrapper"
                className="relative z-10 w-full min-h-screen overflow-hidden"
              >
                <div id="smooth-content" className="w-full flex flex-col">
                  {children}
                </div>
              </div>

              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          </LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
