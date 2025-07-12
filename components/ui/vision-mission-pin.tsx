"use client";
import React from "react";
import { PinContainer } from "./3d-pin";

export function VisionMissionPin({ type }: { type: 'vision' | 'mission' }) {
  const content = type === 'vision' 
    ? {
        title: "Vision",
        description: "To empower businesses of all sizes with seamless digital systems and trusted human support — bridging innovation and service to fuel smarter, simpler growth.",
        gradient: "bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500"
      }
    : {
        title: "Mission",
        description: "At CorvusLabs, our mission is to deliver agile, custom-built tech solutions and reliable services that help businesses operate faster, connect better, and grow smarter. We simplify complexity — through systems, automation, and service — all backed by long-term partnership and purpose-driven support.",
        gradient: "bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
      };

  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title="corvuslabs.co" href="#">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {content.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              {content.description}
            </span>
          </div>
          <div className={`flex flex-1 w-full rounded-lg mt-4 ${content.gradient}`} />
        </div>
      </PinContainer>
    </div>
  );
}
