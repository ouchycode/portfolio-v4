import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechAndCerts from "@/components/TechAndCerts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-black dark:text-white min-h-screen transition-colors duration-700 relative z-10">
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
