import React from 'react';
import { Button } from "./ui/button";
const Logo = () => {
  console.log('[Logo Debug] Attempting to load logo from /Logov2.svg');
  
  // Fetch the SVG content to check what's actually being served
  React.useEffect(() => {
    fetch('/Logov2.svg')
      .then(response => {
        console.log('[Logo Debug] SVG fetch response:', {
          status: response.status,
          statusText: response.statusText,
          contentType: response.headers.get('content-type'),
          url: response.url
        });
        return response.text();
      })
      .then(content => {
        console.log('[Logo Debug] SVG content preview:', content.substring(0, 200));
        if (content.includes('placeholder')) {
          console.error('[Logo Debug] ⚠️ SVG file contains placeholder text!');
        }
      })
      .catch(error => {
        console.error('[Logo Debug] Failed to fetch SVG:', error);
      });
  }, []);
  
  return (
    <div className="w-12 h-12 relative">
      <img
        src="/minilogo.svg"
        alt="Corvus Labs Logo"
        className="w-full h-full object-contain"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        onLoad={() => console.log('[Logo Debug] Logo loaded successfully')}
        onError={(e) => {
          console.error('[Logo Debug] Logo failed to load:', e);
          console.error('[Logo Debug] Attempted path:', (e.target as HTMLImageElement).src);
          console.error('[Logo Debug] Current location:', window.location.href);
        }}
      />
    </div>
  );
};

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
  <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Logo />
        <h1 className="text-2xl font-bold tracking-tighter">
          <span className="text-black">CORVUS</span>
          <span className="text-gray-600">LABS</span>
        </h1>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#home" className="text-gray-700 hover:text-black transition-colors duration-300 cursor-pointer">Home</a>
        <a href="#services" className="text-gray-700 hover:text-black transition-colors duration-300 cursor-pointer">Services</a>
        <a href="#about" className="text-gray-700 hover:text-black transition-colors duration-300 cursor-pointer">About</a>
        <a href="#testimonials" className="text-gray-700 hover:text-black transition-colors duration-300 cursor-pointer">Testimonials</a>
        <a href="#contact" className="text-gray-700 hover:text-black transition-colors duration-300 cursor-pointer">Contact</a>
      </nav>
    </div>
  </header>
  );
};

export default Header;
