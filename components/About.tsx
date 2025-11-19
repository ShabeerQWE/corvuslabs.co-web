import React from 'react';
import { Button } from "./ui/button";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-6 md:mb-12 border-b border-gray-200 pb-4">
          <span className="text-sm md:text-base font-mono text-gray-500 uppercase tracking-widest">About Us</span>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 tracking-tight text-black leading-tight">About Corvus Labs</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 border-t border-gray-100 pt-8 md:pt-12 relative">
          {/* Vertical grid line decoration - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100"></div>

          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-800">
              CorvusLabs is a modern IT and automation solutions provider helping small businesses and startups operate smarter and scale faster.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {["AI Automation", "Odoo ERP", "GoHighLevel", "System Integration", "Web Experience"].map((tag) => (
                <span key={tag} className="px-3 py-1 md:px-4 md:py-1 border border-black rounded-full text-xs md:text-sm font-medium hover:bg-black hover:text-white transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4 md:pt-8">
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg !rounded-button whitespace-nowrap w-full md:w-auto">
                Our Approach <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-5 lg:col-start-7 space-y-6 text-gray-600 text-base md:text-lg">
            <p>
              Established in 2018, we specialize in building automated workflows, integrated systems, and solutions designed to reduce manual work and improve efficiency.
            </p>
            <p>
              Our services support businesses across Canada, Australia, and Sri Lanka, delivering clean, reliable, technology-driven systems that simplify operations and unlock growth. At CorvusLabs, we focus on practical, results-driven solutions built for real business challenges.
            </p>

            <div className="grid grid-cols-2 gap-8 md:gap-12 pt-4 md:pt-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">20+</h3>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Clients Worldwide</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-1">95%</h3>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section - Single featured image on mobile, grid on desktop */}
        <div className="mt-10 md:mt-20">
          {/* Mobile: Single Featured Image */}
          <div className="md:hidden aspect-[4/3] bg-gray-100 overflow-hidden relative group rounded-lg">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="CorvusLabs Office" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>

          {/* Desktop: Three Image Grid */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            <div className="aspect-square bg-gray-100 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Office" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="aspect-square bg-gray-100 overflow-hidden relative group mt-12">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Architecture" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="aspect-square bg-gray-100 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Meeting" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
