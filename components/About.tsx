import React from 'react';
import { Button } from "./ui/button";


const About: React.FC = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl font-bold mb-6">About Corvus Labs</h2>
          <p className="text-lg text-gray-600 mb-6">Founded in 2015, Corvus Labs has established itself as a premier consulting firm, delivering innovative solutions to complex business challenges across industries.</p>
          <p className="text-lg text-gray-600 mb-6">Our team of expert consultants combines deep industry knowledge with cutting-edge methodologies to drive transformative results for our clients.</p>
          <p className="text-lg text-gray-600 mb-8">We believe in building lasting partnerships based on trust, integrity, and a shared commitment to excellence.</p>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-5xl font-bold text-black mb-2">250+</h3>
              <p className="text-gray-600">Clients Worldwide</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-black mb-2">95%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-black mb-2">120+</h3>
              <p className="text-gray-600">Expert Consultants</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-black mb-2">15+</h3>
              <p className="text-gray-600">Industry Awards</p>
            </div>
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap">
            Our Approach <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
        <div className="order-1 lg:order-2 relative">
          <img 
            src="https://readdy.ai/api/search-image?width=700&height=800&seq=8&orientation=portrait&flag=a18992efd8eb3e22f3a303171f5c9e78" 
            alt="Corvus Labs Office" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
