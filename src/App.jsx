import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Volunteering from "./components/Volunteering/Volunteering";
import Extracurricular from "./components/Extracurricular/Extracurricular";
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background min-h-screen text-text-primary selection:bg-primary selection:text-white relative overflow-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Ambient glowing orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] animate-pulse-slow pointer-events-none" />

      {/* Subtle Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative pt-24 z-10">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Volunteering />
        <Extracurricular />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
