import { useEffect, useState } from "react";
import halloween from "./assets/halloween.png";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <div className="text-center">
          <img
            src={halloween}
            alt="Batman Logo"
            className="w-32 mx-auto animate-pulse"
          />
          <p className="text-gray-400 mt-4 tracking-[6px] text-sm">
            LOADING...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      <Navbar />

      <main className="scroll-smooth">

        <section id="hero"><Hero /></section>
        <section id="about" className="pt-20 sm:pt-24"><About /></section>
        <section id="skills" className="pt-20 sm:pt-24"><Skills /></section>
        <section id="projects" className="pt-20 sm:pt-24"><Projects /></section>
        <section id="certificates" className="pt-20 sm:pt-24"><Certificates /></section>
        <section id="experience" className="pt-20 sm:pt-24"><Timeline /></section>
        <section id="contact" className="pt-20 sm:pt-24"><Contact /></section>

      </main>

      <Footer />

    </div>
  );
}
