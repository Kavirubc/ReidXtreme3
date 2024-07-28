"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import React from "react";
export function About() {
  return (
      <section>
          <div className="flex flex-col items-center pt-5 tracking-widest">
              <h2 className="mt-5 text-center text-3xl font-bold  font-bruno md:text-5xl">About</h2>
              <p className={"pt-10 text-center text-gray-700 dark:text-gray-300"}>
                ReidXtreme 3.0 is the premier competitive programming hackathon organized by the IEEE Student Branch of UCSC in collaboration with the ACM Student Chapter of UCSC. This event is designed to elevate the competitive programming skills of undergraduate students, preparing them for the tech industry's competitive demands. ReidXtreme 3.0 consists of two rounds: an initial qualifying round and a final round.
              </p>
          </div>
      </section>
  );
}
