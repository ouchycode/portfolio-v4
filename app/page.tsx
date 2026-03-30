"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechAndCerts from "@/components/TechAndCerts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import useSmoothScroll from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();

  return (
    <main className="relative z-10 flex flex-col w-full overflow-hidden">
      <Navbar />
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
