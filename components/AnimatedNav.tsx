import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import FluidNavMenu from './ui/fluid-nav-menu';

interface AnimatedNavProps {
  isScrolled: boolean;
}

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const AnimatedNav: React.FC<AnimatedNavProps> = ({ isScrolled }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center"
        >
          <h1 className="text-2xl font-bold tracking-tighter">
            <span className="text-black">CORVUS</span>
            <span className="text-gray-600">LABS</span>
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative"
            >
              <motion.a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer rounded-full',
                  activeSection === item.href.substring(1)
                    ? (isScrolled ? 'text-white font-semibold' : 'text-black')
                    : 'text-gray-700 hover:text-black'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className={cn(
                      "absolute inset-0 rounded-full -z-10",
                      isScrolled ? "bg-gray-900 shadow-sm" : "bg-gray-100"
                    )}
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden"
        >
          <FluidNavMenu 
            items={navigationItems.map(item => ({ 
              label: item.name, 
              href: item.href,
              icon: null // Icons are handled internally
            }))}
            onItemClick={handleNavClick}
          />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default AnimatedNav;
