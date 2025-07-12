import React from "react";
import { Compare } from "./compare";

export function CompareDemo() {
  return (
    <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl shadow-2xl shadow-purple-500/20 relative overflow-hidden">
      {/* Frosted glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-cyan-500/10 rounded-3xl"></div>
      
      {/* Inner glass effect */}
      <div className="relative backdrop-blur-sm bg-black/20 rounded-2xl p-1">
      <Compare
        firstImage=""
        secondImage=""
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[350px] w-[300px] md:h-[500px] md:w-[700px]"
        slideMode="hover"
        firstContent={
          <div className="h-full w-full bg-black/80 backdrop-blur-sm p-12 flex flex-col text-white relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-4xl font-bold text-center leading-none whitespace-nowrap" style={{ lineHeight: '1', margin: 0, padding: 0, transform: 'translateY(-2px)' }}>Vision</h2>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-xl leading-relaxed text-center max-w-md mt-4">
                To empower businesses of all sizes with seamless digital systems and trusted human support — bridging innovation and service to fuel smarter, simpler growth.
              </p>
            </div>
          </div>
        }
        secondContent={
          <div className="h-full w-full bg-black/80 backdrop-blur-sm p-12 flex flex-col text-white relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-900/20 to-transparent"></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-4xl font-bold text-center leading-none whitespace-nowrap" style={{ lineHeight: '1', margin: 0, padding: 0, transform: 'translateY(-2px)' }}>Mission</h2>
            </div>
            <div className="flex-1 flex items-end justify-center pb-8">
              <p className="text-xl leading-relaxed text-center max-w-md">
                At CorvusLabs, our mission is to deliver agile, custom-built tech solutions and reliable services that help businesses operate faster, connect better, and grow smarter. We simplify complexity — through systems, automation, and service — all backed by long-term partnership and purpose-driven support.
              </p>
            </div>
          </div>
        }
      />
      </div>
    </div>
  );
}
