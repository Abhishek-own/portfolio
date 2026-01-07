import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ByteSection from "./components/ByteSection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ByteSection />
      <Contact />
    </main>
  );
}
