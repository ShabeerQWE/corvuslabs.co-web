import React from 'react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-6">Corvus Labs</h3>
          <p className="text-gray-400 mb-6">Transforming businesses through innovative consulting solutions and strategic insights.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Home</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Services</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">About Us</a></li>
            <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Testimonials</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Services</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Strategic Consulting</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Digital Transformation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Financial Advisory</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Market Research</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Operations Consulting</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest insights and industry trends.</p>
          <div className="flex">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="w-full border-gray-700 bg-gray-800 text-white focus:border-white focus:ring-white text-sm rounded-r-none"
            />
            <Button className="bg-white hover:bg-gray-200 text-gray-900 rounded-l-none !rounded-button whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-bold mb-4">We Accept</h4>
            <div className="flex space-x-4">
              <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
              <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
              <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
              <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
      <Separator className="bg-gray-800 mb-8" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">© 2025 Corvus Labs. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
