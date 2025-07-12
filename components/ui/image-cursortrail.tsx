"use client"

import React, { useEffect, useRef, useState } from "react"

interface ImageCursorTrailProps {
  items: string[]
  children: React.ReactNode
  className?: string
  maxNumberOfImages?: number
  distance?: number
  imgClass?: string
}

const ImageCursorTrail: React.FC<ImageCursorTrailProps> = ({
  items,
  children,
  className = "",
  maxNumberOfImages = 5,
  distance = 25,
  imgClass = "",
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
      {isHovering &&
        items.slice(0, maxNumberOfImages).map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Cursor trail ${index}`}
            className={`pointer-events-none absolute z-40 rounded-lg object-cover transition-all duration-300 ${imgClass}`}
            style={{
              left: cursorPosition.x + (index * distance),
              top: cursorPosition.y + (index * distance * 0.5),
              transform: `translate(-50%, -50%) rotate(${index * 5}deg)`,
              opacity: 1 - (index * 0.2),
              zIndex: 40 - index,
            }}
          />
        ))}
    </div>
  )
}

export default ImageCursorTrail
