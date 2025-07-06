"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export const WorldMap = React.memo(({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile for safety

  // Detect mobile device with more aggressive detection
  useEffect(() => {
    const checkMobile = () => {
      // Check user agent
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      
      // Check screen size (more aggressive threshold)
      const isSmallScreen = window.innerWidth <= 1024; // Tablet and mobile
      
      // Check touch capability
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // If any of these conditions are true, treat as mobile
      const shouldTreatAsMobile = isMobileDevice || isSmallScreen || isTouchDevice;
      
      setIsMobile(shouldTreatAsMobile);
    };

    // Initial check with delay to ensure DOM is ready
    setTimeout(checkMobile, 100);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Memoize expensive calculations
  const { svgMap, projectedDots } = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const svg = map.getSVG({
      radius: 0.22,
      color: "#00000040",
      shape: "circle",
      backgroundColor: "white",
    });

    const projectPoint = (lat: number, lng: number) => {
      const x = (lng + 180) * (800 / 360);
      const y = (90 - lat) * (400 / 180);
      return { x, y };
    };

    const projected = dots.map(dot => ({
      startPoint: projectPoint(dot.start.lat, dot.start.lng),
      endPoint: projectPoint(dot.end.lat, dot.end.lng),
    }));

    return { svgMap: svg, projectedDots: projected };
  }, [dots]);

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        style={{ maxWidth: '100%', height: 'auto' }}
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* Force disable animations on mobile screens via CSS */}
        <style>
          {`
            @media (max-width: 1024px) {
              .world-map-animation {
                animation: none !important;
                transition: none !important;
              }
              .world-map-animation path {
                stroke-dasharray: none !important;
                stroke-dashoffset: 0 !important;
                animation: none !important;
              }
              .world-map-animation circle {
                animation: none !important;
              }
            }
          `}
        </style>
        
        <g className="world-map-animation">
        {projectedDots.map(({ startPoint, endPoint }, i) => (
          <g key={`path-group-${i}`}>
            {isMobile ? (
              // Static path for mobile (no animation)
              <path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                opacity="0.6"
              />
            ) : (
              // Animated path for desktop
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.8 * i,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                  repeatType: "loop",
                }}
              />
            )}
          </g>
        ))}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {projectedDots.map(({ startPoint, endPoint }, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={startPoint.x}
                cy={startPoint.y}
                r="2"
                fill={lineColor}
              />
              {!isMobile && (
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="10"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="2"
                fill={lineColor}
              />
              {!isMobile && (
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="10"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          </g>
        ))}
        </g>
      </svg>
    </div>
  );
});

WorldMap.displayName = "WorldMap";
