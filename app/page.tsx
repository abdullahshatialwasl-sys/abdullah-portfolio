import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Education />

      <Certifications />

      <Skills />

      <Projects />

      <Contact />

    </main>
  );
}