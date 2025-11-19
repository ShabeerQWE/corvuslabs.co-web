import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { AnimatedModal } from './ui/animated-modal';
import { StarBorder } from './ui/star-border';
import { MessageLoadingDemo } from './ui/demo';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const [showPhones, setShowPhones] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">Have a question or ready to start a project? Reach out to our team for personalized assistance.</p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-gray-700"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Our Locations</h3>
                  <p className="text-gray-600">
                    Colombo, WP, Sri Lanka<br />
                    Toronto, ON, Canada<br />
                    Melbourne, VIC, Australia
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-gray-700"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@corvuslabs.co</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-gray-700"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Call Us</h3>
                  {!showPhones ? (
                    <button
                      onClick={() => setShowPhones(true)}
                      className="text-blue-600 hover:text-blue-700 font-medium underline"
                    >
                      Click to view phone numbers
                    </button>
                  ) : (
                    <div className="text-gray-600 space-y-1">
                      <p>+94 76 605 0403 (LK)</p>
                      <p>+1 437 333 9707 (CA)</p>
                      <p>+61 423 201 504 (AU)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-300 cursor-pointer flex items-center justify-center">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-300 cursor-pointer flex items-center justify-center">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-300 cursor-pointer flex items-center justify-center">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-300 cursor-pointer flex items-center justify-center">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-8">Click the button below to send us a message and let's discuss how we can help bring your vision to life.</p>

              <AnimatedModal
                trigger={
                  <div className="py-1 px-6 bg-gray-900/70 backdrop-blur-md border border-gray-600/30 hover:bg-gray-800/80 text-white rounded-full cursor-pointer shadow-lg transition-all duration-200 hover:scale-[1.02] will-change-transform">
                    <div className="flex flex-col items-center justify-center gap-0 mt-1.5">
                      <div className="flex items-center">
                        <MessageCircle className="inline mr-2" size={18} />
                        Send Us a Message
                      </div>
                      <div className="scale-[0.7] -mt-1">
                        <MessageLoadingDemo />
                      </div>
                    </div>
                  </div>
                }
                title="Send Us a Message"
              >
                <ContactForm />
              </AnimatedModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
