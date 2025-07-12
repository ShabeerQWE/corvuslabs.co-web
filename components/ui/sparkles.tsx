"use client";
import React from "react";
import { cn } from "../../lib/utils";

interface SparklesCoreProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  className = "",
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleColor = "#ffffff",
  particleDensity = 50
}) => {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div 
        className="sparkles-container"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: background,
        }}
      >
        {Array.from({ length: particleDensity }).map((_, i) => (
          <div
            key={i}
            className="sparkle-dot"
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${minSize + Math.random() * (maxSize - minSize)}px`,
              height: `${minSize + Math.random() * (maxSize - minSize)}px`,
              background: particleColor,
              borderRadius: "50%",
              opacity: 0,
              boxShadow: `0 0 6px ${particleColor}`,
              animation: `sparkle-animation ${2 + Math.random() * 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes sparkle-animation {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};
