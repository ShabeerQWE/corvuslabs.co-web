import React from 'react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, CreditCard } from 'lucide-react'; // Assuming lucide-react is available or use font-awesome classes if preferred. 
// Checking imports, the file used font-awesome classes <i>. I will stick to that to avoid breaking if lucide isn't fully set up for these specific icons, 
// OR I will use the existing <i> tags but style them better. 
// Actually, looking at the file, it uses <i className="fab ...">. I will keep that for safety unless I see lucide imported elsewhere.
// The previous file didn't import lucide for social icons.

const Footer: React.FC = () => (
  <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight">Corvus Labs</h3>
          <p className="text-neutral-400 leading-relaxed text-sm">
            Transforming businesses through innovative consulting solutions and strategic insights. We build the future, today.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 tracking-wide">Quick Links</h3>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li><a href="#home" className="hover:text-white transition-colors duration-200 block py-1">Home</a></li>
            <li><a href="#services" className="hover:text-white transition-colors duration-200 block py-1">Services</a></li>
            <li><a href="#about" className="hover:text-white transition-colors duration-200 block py-1">About Us</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors duration-200 block py-1">Industries</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors duration-200 block py-1">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6 tracking-wide">Expertise</h3>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li><a href="#services" className="hover:text-white transition-colors duration-200 block py-1">AI Automation</a></li>
            <li><a href="#services" className="hover:text-white transition-colors duration-200 block py-1">CRM Systems</a></li>
            <li><a href="#services" className="hover:text-white transition-colors duration-200 block py-1">Web Experience</a></li>
            <li><a href="#services" className="hover:text-white transition-colors duration-200 block py-1">ERP Solutions</a></li>
            <li><a href="#services" className="hover:text-white transition-colors duration-200 block py-1">System Integration</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-6 tracking-wide">Stay Informed</h3>
          <p className="text-neutral-400 text-sm mb-4">
            Subscribe to our newsletter for the latest insights and industry trends.
          </p>
          <div className="flex flex-col space-y-3">
            <div className="flex">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white focus:ring-0 rounded-r-none h-10"
              />
              <Button className="bg-white text-black hover:bg-neutral-200 rounded-l-none h-10 px-6 font-medium">
                Join
              </Button>
            </div>
            <p className="text-xs text-neutral-600">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-semibold mb-4 text-neutral-300">Secure Payments</h4>
            <div className="flex space-x-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
              <i className="fab fa-cc-visa text-2xl text-white"></i>
              <i className="fab fa-cc-mastercard text-2xl text-white"></i>
              <i className="fab fa-cc-amex text-2xl text-white"></i>
              <i className="fab fa-cc-paypal text-2xl text-white"></i>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10 mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
        <p className="mb-4 md:mb-0">© 2025 Corvus Labs. All rights reserved.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
