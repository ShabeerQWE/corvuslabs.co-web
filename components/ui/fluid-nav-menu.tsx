"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Home, Settings, Users, Factory, Phone } from 'lucide-react';

interface FluidNavMenuProps {
  items: Array<{ label: string; href: string }>;
  onItemClick?: (href: string) => void;
}

export const FluidNavMenu: React.FC<FluidNavMenuProps> = ({ items, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = (href: string) => {
    setIsOpen(false);
    if (onItemClick) {
      setTimeout(() => onItemClick(href), 300);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getIcon = (label: string) => {
    const iconProps = { size: 20, strokeWidth: 1.5, className: "text-white" };
    switch (label.toLowerCase()) {
      case 'home': return <Home {...iconProps} />;
      case 'services': return <Settings {...iconProps} />;
      case 'about': return <Users {...iconProps} />;
      case 'industries': return <Factory {...iconProps} />;
      case 'contact': return <Phone {...iconProps} />;
      default: return <Home {...iconProps} />;
    }
  };

  if (!isMounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50 md:hidden">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative"
      >
        {/* Toggle Button */}
        <motion.div
          className="absolute top-0 right-0 w-14 h-14 bg-neutral-900/85 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-full z-50 flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="text-white" size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MenuIcon className="text-white" size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-16 right-0 flex flex-col gap-3 items-end"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              {items.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    open: { opacity: 1, x: 0, scale: 1 },
                    closed: { opacity: 0, x: 20, scale: 0.8 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <button
                    onClick={() => handleItemClick(item.href)}
                    className="group relative flex items-center gap-3 bg-neutral-900/90 backdrop-blur-xl border border-white/30 px-5 py-3 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:bg-neutral-800/95 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />

                    <span className="text-white text-sm font-semibold tracking-wide relative z-10">{item.label}</span>
                    <div className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center relative z-10 group-hover:bg-white/25 transition-colors">
                      {getIcon(item.label)}
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FluidNavMenu;
