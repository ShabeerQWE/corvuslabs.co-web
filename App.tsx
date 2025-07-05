import React, { useState, useEffect } from 'react';
import AnimatedNav from './components/AnimatedNav';
import FluidNavMenu from './components/ui/fluid-nav-menu';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <AnimatedNav isScrolled={isScrolled} />
      <FluidNavMenu items={menuItems} />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <Clients />
      <CTA />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
