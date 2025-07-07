import React from 'react';

interface CyberCardProps {
  icon: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const CyberCard: React.FC<CyberCardProps> = ({
  icon,
  title,
  description,
  imageUrl,
  imageAlt
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-1 hover:from-cyan-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-500"></div>
      
      {/* Inner card */}
      <div className="relative bg-gray-900/95 backdrop-blur-sm rounded-2xl overflow-hidden h-full">
        {/* Top glow accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
        
        {/* Image section with cyber overlay */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Cyber grid overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90"></div>
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '20px 20px'
               }}>
          </div>
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-y-full group-hover:translate-y-48 transition-transform duration-2000 ease-in-out"></div>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 relative">
          {/* Icon and title */}
          <div className="flex items-center mb-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mr-3 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300">
                <i className={`${icon} text-white text-lg`}></i>
              </div>
              {/* Icon glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Learn more button */}
          <div className="relative">
            <button className="relative overflow-hidden px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-100 font-medium hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 hover:text-white transition-all duration-300 group/btn">
              <span className="relative z-10 flex items-center">
                Learn more 
                <i className="fas fa-arrow-right ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300"></i>
              </span>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-500/0 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Bottom accent lines */}
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors duration-300"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-500 transition-colors duration-300"></div>
      </div>
    </div>
  );
};
