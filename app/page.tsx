"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechAndCerts from "@/components/sections/TechAndCerts";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

import useSmoothScroll from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();

  return (
    <main className="relative z-10 flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechAndCerts />
      <Contact />
      <Footer />
    </main>
  );
}
