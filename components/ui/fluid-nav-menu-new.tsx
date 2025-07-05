"use client"

import React from 'react';
import { Menu as MenuIcon, X, Home, Briefcase, Users, User, MessageCircle } from 'lucide-react';
import { MenuItem, MenuContainer } from "./fluid-menu";

interface FluidNavMenuProps {
  items: Array<{ label: string; href: string }>;
  onItemClick?: (href: string) => void;
}

export const FluidNavMenu: React.FC<FluidNavMenuProps> = ({ items, onItemClick }) => {
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

  const getIcon = (label: string) => {
    const iconClass = "text-gray-700";
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
    <div className="md:hidden relative">
      {/* Background blur effect */}
      <div className="absolute inset-0 -m-4 bg-gradient-to-b from-black/5 to-transparent blur-xl rounded-full opacity-50" />
      
      <MenuContainer>
        {/* Toggle button - first item */}
        <MenuItem 
          icon={
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                <MenuIcon size={20} strokeWidth={1.5} className="text-gray-700" />
              </div>
              <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                <X size={20} strokeWidth={1.5} className="text-gray-700" />
              </div>
            </div>
          } 
        />
        
        {/* Navigation items */}
        {items.map((item, index) => (
          <MenuItem 
            key={item.href}
            icon={getIcon(item.label)}
            onClick={() => handleItemClick(item.href)}
          />
        ))}
      </MenuContainer>
    </div>
  );
};

export default FluidNavMenu;
