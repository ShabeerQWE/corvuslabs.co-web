import React from 'react';
import { Button } from "./ui/button";

interface HeaderProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, isMenuOpen, toggleMenu, setIsMenuOpen }) => (
  <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
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
      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="text-gray-700 hover:text-black cursor-pointer !rounded-button whitespace-nowrap"
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
    </div>
    <div className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
      <div className="container mx-auto px-6 flex flex-col space-y-4">
        <a href="#home" className="text-gray-700 hover:text-black transition-colors duration-300 py-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#services" className="text-gray-700 hover:text-black transition-colors duration-300 py-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#about" className="text-gray-700 hover:text-black transition-colors duration-300 py-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#testimonials" className="text-gray-700 hover:text-black transition-colors duration-300 py-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
        <a href="#contact" className="text-gray-700 hover:text-black transition-colors duration-300 py-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
    </div>
  </header>
);

export default Header;
