"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import Image from "next/image";
import {CTA} from "@/components/cta";

export function Hero() {
  return (
    <div className="max-w-4xl mx-auto pb-40 hero">

      <p className=" text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        <Image
            src="/logo.png"
            alt="ReidExtreme Logo"
            width={200}
            height={200}
            className={"logo"}
        />
      </p>
      {/*<p className="heading text-base md:text-xl lg:text-2xl mt-10 text-white font-normal inter-var text-center">*/}
      {/*  The premier competitive programming hackathon*/}
      {/*</p>*/}
    </div>
  );
}
