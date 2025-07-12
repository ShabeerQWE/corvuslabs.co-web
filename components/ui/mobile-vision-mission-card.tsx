"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const MobileVisionMissionCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    
    // If swipe distance is more than 50px, flip the card
    if (Math.abs(diff) > 50) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        className="relative h-[400px] w-full cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleCardClick}
        whileTap={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="vision"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 backface-hidden"
            >
              <VisionCard />
            </motion.div>
          ) : (
            <motion.div
              key="mission"
              initial={{ rotateY: -90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -90 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 backface-hidden"
            >
              <MissionCard />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Swipe indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          <div className={`w-2 h-2 rounded-full transition-colors ${!isFlipped ? 'bg-white' : 'bg-white/40'}`}></div>
          <div className={`w-2 h-2 rounded-full transition-colors ${isFlipped ? 'bg-white' : 'bg-white/40'}`}></div>
        </div>
      </motion.div>
    </div>
  );
};

const VisionCard = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-full w-full rounded-3xl bg-black/40 backdrop-blur-xl overflow-hidden"
    >
      {/* Frosted glass overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/20 via-transparent to-cyan-500/10"></div>
      
      {/* Simple animated background effect on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-transparent"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_50%)] animate-pulse"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center p-8 text-white">
        <motion.div
          className="text-center space-y-6"
          animate={hovered ? { y: -10, opacity: hovered ? 1 : 0.8 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-3xl font-bold">Vision</h2>
          <p className="text-base leading-relaxed opacity-90">
            To empower businesses of all sizes with seamless digital systems and trusted human support — bridging innovation and service to fuel smarter, simpler growth.
          </p>
        </motion.div>
        
        {/* Swipe hint */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-sm text-center whitespace-nowrap">
          Swipe or tap to see our Mission
        </div>
      </div>
    </div>
  );
};

const MissionCard = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-full w-full rounded-3xl bg-black/40 backdrop-blur-xl overflow-hidden"
    >
      {/* Frosted glass overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/20 via-transparent to-blue-500/10"></div>
      
      {/* Simple animated background effect on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 via-cyan-500/20 to-transparent"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3),transparent_50%)] animate-pulse"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center p-8 text-white">
        <motion.div
          className="text-center space-y-6"
          animate={hovered ? { y: -10, opacity: hovered ? 1 : 0.8 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-3xl font-bold">Mission</h2>
          <p className="text-base leading-relaxed opacity-90">
            At CorvusLabs, our mission is to deliver agile, custom-built tech solutions and reliable services that help businesses operate faster, connect better, and grow smarter. We simplify complexity — through systems, automation, and service — all backed by long-term partnership and purpose-driven support.
          </p>
        </motion.div>
        
        {/* Swipe hint */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-sm text-center whitespace-nowrap">
          Swipe or tap to see our Vision
        </div>
      </div>
    </div>
  );
};
