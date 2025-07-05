import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header isScrolled={isScrolled} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <Clients />
      <CTA />
      <Contact />
      <Footer />
      {/* Back to Top Button */}
      <a 
        href="#home" 
        className="fixed bottom-8 right-8 bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default App;
