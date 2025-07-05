import React from 'react';
import { Button } from "./ui/button";

const Hero: React.FC = () => (
  <section id="home" className="relative min-h-screen flex items-center" style={{
    backgroundImage: `url('https://readdy.ai/api/search-image?width=1200&height=800&seq=1&orientation=landscape&flag=17cc86b96ab2daec189f49814b31e5e2')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
    <div className="container mx-auto px-6 z-10">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">Innovative Consulting Solutions</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">We transform challenges into opportunities with strategic insights and tailored solutions for forward-thinking businesses.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-300 inline-flex items-center justify-center">
            Get Started
          </button>
          <button className="border-2 border-black bg-transparent hover:bg-black hover:text-white text-black px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center">
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#services" className="text-gray-600 cursor-pointer">
        <i className="fas fa-chevron-down text-2xl"></i>
      </a>
    </div>
  </section>
);

export default Hero;
