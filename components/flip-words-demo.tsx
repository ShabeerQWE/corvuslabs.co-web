import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function FlipWordsDemo() {
    const words = ["Growth", "Efficiency", "Clarity", "Performance"];

    return (
        <div className="w-full py-12 md:py-24 flex justify-center items-center px-4 bg-black relative border-y border-neutral-800">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-5xl font-light text-neutral-400 leading-snug">
                    We help you unlock
                    <FlipWords
                        words={words}
                        duration={3000}
                        className="font-bold text-white italic decoration-neutral-700 underline-offset-4"
                    />
                    through powerful digital systems.
                </h2>
            </div>
        </div>
    );
}
