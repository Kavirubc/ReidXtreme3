"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function CTA() {
  const words = [
    {
      text: "Test",
    },
    {
      text: "Your",
    },
    {
      text: "Problem",
      className: "text-blue-500 dark:text-green-500",
    },
    {
      text: "Solving",
      className: "text-blue-500 dark:text-green-500",
    },
    {
      text: "Skills",
    },
  ];
  return (
    <div className="cta flex flex-col items-center justify-center h-[20rem]  ">
      <p className="intro text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        A premier competitive programming hackathon by the IEEE and ACM Student Chapters of UCSC
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Register now
        </button>
      </div>
    </div>
  );
}
