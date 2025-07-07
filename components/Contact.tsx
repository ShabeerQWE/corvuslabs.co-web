import React from 'react';
import { MessageCircle } from 'lucide-react';
import { AnimatedModal } from './ui/animated-modal';
import { StarBorder } from './ui/star-border';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
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
                <h3 className="text-xl font-bold mb-1">Our Location</h3>
                <p className="text-gray-600">123 Business Avenue, Suite 500<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <i className="fas fa-envelope text-gray-700"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email Us</h3>
                <p className="text-gray-600">info@corvuslabs.com<br />support@corvuslabs.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <i className="fas fa-phone-alt text-gray-700"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
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
                <StarBorder 
                  color="#3b82f6" 
                  speed="4s"
                  className="transition-transform hover:scale-105"
                >
                  <MessageCircle className="inline mr-2" size={20} />
                  Send Us a Message
                </StarBorder>
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
