"use client";
import React from "react";

export const SparklesCore = ({ className = "", particleColor = "#ffffff" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="sparkles" style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              background: particleColor,
              borderRadius: '50%',
              opacity: 0,
              boxShadow: `0 0 6px ${particleColor}`,
              left: `${45 + Math.random() * 10}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              animation: 'sparkle infinite ease-in-out',
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes sparkle {
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
