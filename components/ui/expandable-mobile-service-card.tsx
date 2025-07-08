import React, { useState } from 'react';

interface ExpandableMobileServiceCardProps {
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  imageAlt: string;
  expandedContent?: {
    whatWeOffer: string[];
    keyBenefits: string[];
  };
}

const ExpandableMobileServiceCard: React.FC<ExpandableMobileServiceCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  imageAlt,
  expandedContent
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLearnMore = () => {
    if (expandedContent) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-[16px] shadow-xl border border-slate-700/50 transition-all duration-300 ${isExpanded ? 'border-blue-500/50' : ''}`}>
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

          {/* Expanded content */}
          {isExpanded && expandedContent && (
            <div className="mt-4 space-y-4 animate-fade-in">
              {/* What we offer */}
              <div>
                <h4 className="text-base font-semibold text-blue-400 mb-3">What we offer:</h4>
                <div className="space-y-2">
                  {expandedContent.whatWeOffer.map((item, index) => (
                    <div key={index} className="flex items-start text-slate-300">
                      <i className="fas fa-check text-blue-400 mr-3 mt-1 text-sm"></i>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key benefits */}
              <div>
                <h4 className="text-base font-semibold text-purple-400 mb-3">Key benefits:</h4>
                <div className="space-y-2">
                  {expandedContent.keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-slate-300">
                      <i className="fas fa-circle text-purple-400 mr-3 mt-1.5 text-xs"></i>
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Learn More Button */}
          <div className="pt-2">
            <button 
              onClick={handleLearnMore}
              className={`w-full px-4 py-2 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                isExpanded 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
            </button>
          </div>
        </div>
    </div>
  );
};

export default ExpandableMobileServiceCard;
