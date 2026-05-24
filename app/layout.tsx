import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LoadingProvider } from "@/context/LoadingContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeColorProvider } from "@/context/ThemeColorContext";
import Navbar from "@/components/ui/Navbar";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GlobalSoundEffects } from "@/components/ui/GlobalSoundEffects";
import { AOSInit } from "@/components/ui/AOSInit";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const googleFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-bykevin.vercel.app/"),
  title: {
    template: "%s | Kevin Ardiansyah",
    default: "Kevin Ardiansyah | Frontend Engineer",
  },
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
  authors: [{ name: "Kevin Ardiansyah", url: "https://portfolio-bykevin.vercel.app/" }],
  creator: "Kevin Ardiansyah",
  openGraph: {
    title: "Kevin Ardiansyah | Frontend Engineer",
    description:
      "Explore the selected works and career journey of Kevin Ardiansyah, a Frontend Engineer based in Tangerang, Indonesia.",
    url: "https://portfolio-bykevin.vercel.app/",
    siteName: "Kevin Ardiansyah Portfolio",
    images: [
      {
        url: "/profile_kevin.png",
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
    creator: "@ouchycode",
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
        className={`${googleFont.variable} font-sans min-h-screen bg-background text-foreground`}
      >
        <LanguageProvider>
          <LoadingProvider>
            <ThemeColorProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <GlobalSoundEffects />
                <NextTopLoader 
                  color="#1a73e8"
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={3}
                  crawl={true}
                  showSpinner={false}
                  easing="ease"
                  speed={200}
                  shadow="0 0 10px #1a73e8,0 0 5px #1a73e8"
                />
                <CustomCursor />
                {/* Grid blueprint — CSS only, no blur, no JS */}
                <div
                  aria-hidden="true"
                  className="fixed inset-0 z-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #1a73e8 1px, transparent 1px), linear-gradient(to bottom, #1a73e8 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    opacity: 0.06,
                    maskImage:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
                  }}
                />

                <AOSInit />
                <CommandMenu />
                <Navbar />

                <div
                  id="smooth-wrapper"
                  className="relative z-10 w-full min-h-screen"
                >
                  <div id="smooth-content" className="w-full flex flex-col">
                    {children}
                  </div>
                </div>

                <Analytics />
                <SpeedInsights />
              </ThemeProvider>
            </ThemeColorProvider>
          </LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
