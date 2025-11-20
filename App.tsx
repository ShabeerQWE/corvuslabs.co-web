import React, { useState, useEffect } from 'react';
import AnimatedNav from './components/AnimatedNav';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import Services from './components/Services';
import FlipWordsDemo from './components/flip-words-demo';
import About from './components/About';
import VisionMissionVariations from './components/VisionMissionVariations';

import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Industries from './components/Industries';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <AnimatedNav isScrolled={isScrolled} />
      <Hero />
      <LogoMarquee />
      <Services />
      <FlipWordsDemo />
      <About />
      <VisionMissionVariations />
      <Industries />

      <CTA />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
