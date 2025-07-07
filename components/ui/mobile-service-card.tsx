import React from 'react';

interface MobileServiceCardProps {
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  imageAlt: string;
}

const MobileServiceCard: React.FC<MobileServiceCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  imageAlt
}) => {

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-[16px] shadow-xl border border-slate-700/50">
        {/* Image Section */}
        <div className="relative h-32 w-full overflow-hidden rounded-t-[16px]">
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-3">
          {/* Title with Icon */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
              <i className={`${icon} text-blue-400 text-lg`}></i>
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>

          {/* Description - Full content visible */}
          <div className="text-sm text-slate-300 leading-relaxed">
            <p>{description}</p>
          </div>

          {/* Learn More Button - For future use */}
          <div className="pt-2">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>
    </div>
  );
};

export default MobileServiceCard;
