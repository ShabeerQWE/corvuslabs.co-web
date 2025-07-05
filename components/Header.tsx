import React from 'react';
import { Button } from "./ui/button";

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
      <div className="flex items-center">
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
