"use client"

import React, { useState } from "react"

// Removed the unused Menu component that might be causing conflicts

interface MenuItemProps {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  isActive?: boolean
}

export function MenuItem({ children, onClick, disabled = false, icon, isActive = false }: MenuItemProps) {
  return (
    <button
      className={`relative block w-full h-16 text-center group rounded-full
        ${disabled ? "text-gray-400 cursor-not-allowed" : "text-white"}
        ${isActive ? "bg-gray-800/50" : ""}
        hover:scale-105 transition-all duration-200 ease-out
      `}
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        {icon && (
          <span className="flex items-center justify-center w-6 h-6 transition-all duration-200 group-hover:[&_svg]:stroke-[2.5] group-hover:scale-110">
            {icon}
          </span>
        )}
        {children}
      </span>
    </button>
  )
}

interface MenuContainerProps {
  children: React.ReactNode
  onExpandedChange?: (expanded: boolean) => void
}

export function MenuContainer({ children, onExpandedChange }: MenuContainerProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = React.Children.toArray(children)
  const totalItems = childrenArray.length

  const handleToggle = () => {
    const newExpanded = !isExpanded
    setIsExpanded(newExpanded)
    onExpandedChange?.(newExpanded)
  }

  return (
    <div className="relative w-[64px] h-auto" data-expanded={isExpanded}>
      {/* Container for all items */}
      <div className="relative" style={{ minHeight: isExpanded ? `${totalItems * 72}px` : '64px' }}>
        {/* First item - always visible */}
        <div 
          className="relative w-16 h-16 bg-gray-800/60 backdrop-blur-md border border-gray-600/40 shadow-lg cursor-pointer rounded-full group will-change-transform z-50 hover:bg-gray-800/70 transition-all duration-200"
          onClick={handleToggle}
        >
          {childrenArray[0]}
        </div>

        {/* Other items */}
        {childrenArray.slice(1).map((child, index) => (
          <div 
            key={index} 
            className="absolute top-0 left-0 w-16 h-16 bg-gray-800/60 backdrop-blur-md border border-gray-600/40 shadow-lg will-change-transform rounded-full hover:bg-gray-800/70 transition-all duration-200"
            style={{
              transform: `translateY(${isExpanded ? (index + 1) * 72 : 0}px)`,
              opacity: isExpanded ? 1 : 0,
              zIndex: 40 - index,
              clipPath: index === childrenArray.length - 2 
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
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
