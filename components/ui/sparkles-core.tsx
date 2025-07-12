"use client";
import React from "react";

export const SparklesCore = ({ className = "", particleColor = "#ffffff" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="sparkles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${45 + Math.random() * 10}%`, // Center around 50% with small variance
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .sparkles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .sparkle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: ${particleColor};
          border-radius: 50%;
          opacity: 0;
          animation: sparkle infinite ease-in-out;
          box-shadow: 0 0 6px ${particleColor};
        }
        
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
