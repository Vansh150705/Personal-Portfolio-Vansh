import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import SmoothScroll from './components/system/SmoothScroll';
import Preloader from './components/system/Preloader';
import BlueprintBackground from './components/system/BlueprintBackground';
import Grain from './components/system/Grain';
import Cursor from './components/system/Cursor';
import HUD from './components/system/HUD';
import ScrollProgress from './components/system/ScrollProgress';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import FieldWork from './components/FieldWork/FieldWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  const [booted, setBooted] = useState(false);

  return (
    <SmoothScroll>
      <AnimatePresence>
        {!booted && <Preloader key="preloader" onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      {/* fixed atmosphere */}
      <BlueprintBackground />
      <Grain />
      <Cursor />
      <HUD />
      <ScrollProgress />

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <FieldWork />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
