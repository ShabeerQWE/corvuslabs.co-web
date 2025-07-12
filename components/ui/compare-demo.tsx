import React from "react";
import { Compare } from "./compare";

export function CompareDemo() {
  return (
    <div className="p-6 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
      <Compare
        firstImage=""
        secondImage=""
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[350px] w-[300px] md:h-[500px] md:w-[700px]"
        slideMode="hover"
        firstContent={
          <div className="h-full w-full bg-black p-12 flex flex-col justify-center text-white">
            <h2 className="text-4xl font-bold mb-8 text-center leading-none pt-4">Vision</h2>
            <p className="text-xl leading-relaxed text-center max-w-md mx-auto">
              To empower businesses of all sizes with seamless digital systems and trusted human support — bridging innovation and service to fuel smarter, simpler growth.
            </p>
          </div>
        }
        secondContent={
          <div className="h-full w-full bg-black p-12 flex flex-col justify-center text-white">
            <h2 className="text-4xl font-bold mb-8 text-center leading-none pt-4">Mission</h2>
            <p className="text-xl leading-relaxed text-center max-w-md mx-auto">
              At CorvusLabs, our mission is to deliver agile, custom-built tech solutions and reliable services that help businesses operate faster, connect better, and grow smarter. We simplify complexity — through systems, automation, and service — all backed by long-term partnership and purpose-driven support.
            </p>
          </div>
        }
      />
    </div>
  );
}
