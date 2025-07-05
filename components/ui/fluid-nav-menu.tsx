"use client"

import React, { useState } from 'react';
import { Menu as MenuIcon, X, Home, Briefcase, Users, User, MessageCircle } from 'lucide-react';
import { MenuItem, MenuContainer } from "./fluid-menu";

interface FluidNavMenuProps {
  items: Array<{ label: string; href: string }>;
  onItemClick?: (href: string) => void;
}

export const FluidNavMenu: React.FC<FluidNavMenuProps> = ({ items, onItemClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleItemClick = (href: string) => {
    if (onItemClick) {
      onItemClick(href);
    } else {
      // Default behavior: scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const getIcon = (label: string) => {
    const iconClass = "text-white";
    switch (label.toLowerCase()) {
      case 'home':
        return <Home size={20} strokeWidth={1.5} className={iconClass} />;
      case 'services':
        return <Briefcase size={20} strokeWidth={1.5} className={iconClass} />;
      case 'about':
        return <Users size={20} strokeWidth={1.5} className={iconClass} />;
      case 'testimonials':
        return <User size={20} strokeWidth={1.5} className={iconClass} />;
      case 'contact':
        return <MessageCircle size={20} strokeWidth={1.5} className={iconClass} />;
      default:
        return <Home size={20} strokeWidth={1.5} className={iconClass} />;
    }
  };

  return (
    <div className="md:hidden fixed top-4 right-6 z-50">
      {/* Background blur effect */}
      <div className="absolute inset-0 -m-4 bg-gradient-to-b from-black/5 to-transparent blur-xl rounded-full opacity-50" />
      
      <div className="relative w-[64px] h-auto" data-expanded={isExpanded}>
        {/* Container for all items */}
        <div className="relative" style={{ minHeight: isExpanded ? `${(items.length + 1) * 72}px` : '64px' }}>
          {/* Toggle button - first item - always visible */}
          <div 
            className="relative w-16 h-16 bg-gray-800/60 backdrop-blur-md border border-gray-600/40 shadow-lg cursor-pointer rounded-full group will-change-transform z-50 hover:bg-gray-800/70 transition-all duration-200"
            onClick={handleToggle}
          >
            <MenuItem 
              icon={
                <div className="relative w-6 h-6">
                  <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                    <MenuIcon size={20} strokeWidth={1.5} className="text-white" />
                  </div>
                  <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                    <X size={20} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>
              } 
            />
          </div>

          {/* Navigation items */}
          {items.map((item, index) => (
            <div 
              key={item.href}
              className="absolute top-0 left-0 w-16 h-16 bg-gray-800/60 backdrop-blur-md border border-gray-600/40 shadow-lg will-change-transform rounded-full hover:bg-gray-800/70 transition-all duration-200"
              style={{
                transform: `translateY(${isExpanded ? (index + 1) * 72 : 0}px)`,
                opacity: isExpanded ? 1 : 0,
                zIndex: 40 - index,
                clipPath: index === items.length - 1 
                  ? "circle(50% at 50% 50%)" 
                  : "circle(50% at 50% 55%)",
                transition: `transform ${isExpanded ? '300ms' : '300ms'} cubic-bezier(0.4, 0, 0.2, 1),
                           opacity ${isExpanded ? '300ms' : '350ms'},
                           background-color 200ms ease`,
                backfaceVisibility: 'hidden',
                perspective: 1000,
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              <MenuItem 
                icon={getIcon(item.label)}
                label={item.label}
                isExpanded={isExpanded}
                onClick={() => handleItemClick(item.href)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FluidNavMenu;
