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
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="intro text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Join ReidXtreme 3.0, a premier competitive programming hackathon by the IEEE and ACM Student Chapters of UCSC. This event features two rounds: an initial qualifying round to showcase your coding skills, and a 12-hour final round hackathon for the top 10 teams. Compete, collaborate, and elevate your programming prowess in an exciting, in-person environment.
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
