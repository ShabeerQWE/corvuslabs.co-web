import React from "react";

export const LoaderThree: React.FC = () => {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <img
        src="/minilogo.svg"
        alt="Corvus Labs Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export const LoaderTwo: React.FC = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Single rotating circle */}
      <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-blue-600 animate-spin"></div>
      
      {/* Logo in the center */}
      <div className="relative z-10 w-8 h-8">
        <img
          src="/minilogo.svg"
          alt="Corvus Labs Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export const LoaderOne: React.FC = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Pulsing effect */}
      <div className="absolute inset-0 rounded-full bg-blue-200 opacity-75 animate-ping"></div>
      <div className="absolute inset-2 rounded-full bg-blue-400 opacity-50 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Logo in the center */}
      <div className="relative z-10 w-8 h-8">
        <img
          src="/minilogo.svg"
          alt="Corvus Labs Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
