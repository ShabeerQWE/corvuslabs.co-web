import React from 'react';
import { CompareDemo } from './ui/compare-demo';

const Stats: React.FC = () => (
  <section className="py-16 bg-black text-white relative overflow-hidden">
    {/* Animated background effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-pulse"></div>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
    </div>
    
    <div className="max-w-6xl mx-auto px-8 relative z-10">
      <div className="flex items-center justify-center">
        {/* Glowing border container */}
        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-blue-500/30 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-lg animate-pulse"></div>
          <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
            <CompareDemo />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
