"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import TechAndCerts from "@/components/tech";
import Contact from "@/components/contact";
import Footer from "@/components/ui/Footer";

import useSmoothScroll from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();

  return (
    <main className="relative flex flex-col w-full">
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
