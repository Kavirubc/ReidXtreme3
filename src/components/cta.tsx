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
    <div className="cta flex flex-col items-center justify-center h-[20rem]  mt-40">
      <p className="intro text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        A premier competitive programming hackathon by the IEEE and ACM Student Chapters of UCSC
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {/* <a
          href="/register"
          className="w-40 h-10 rounded-xl bg-green-900 border dark:border-white border-transparent text-white text-sm flex items-center justify-center">
          Register now
        </a> */}
        <a
          href="https://drive.google.com/uc?export=download&id=15jw6noC_S9wbSHztrjIitWrXykDDc2vu"
          className="w-40 h-10 rounded-xl bg-green-900 border dark:border-white border-transparent text-white text-sm flex items-center justify-center">
          Delegate Book
        </a>

      </div>
    </div>
  );
}
