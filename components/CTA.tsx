import React from 'react';
import { Button } from "./ui/button";

const CTA: React.FC = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-300 mb-8">Schedule a consultation with our expert team to discover how Corvus Labs can help you achieve your business objectives.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-lg !rounded-button whitespace-nowrap">
            Schedule Consultation
          </Button>
          <Button variant="outline" className="border-2 border-white hover:bg-gray-800 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap">
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
