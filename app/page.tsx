import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ByteSection from "./components/ByteSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Projects />
      <Skills />
      <ByteSection />
      <Footer />
    </main>
  );
}

