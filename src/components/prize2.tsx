"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

const Prize2: React.FC = () => {
    return (
        <div className="flex flex-col items-center px-6 md:px-0 mt-40" id={"prizes"}>
            <h2 className="pt-5 text-center text-3xl font-bold font-bruno pb-20 md:text-5xl">Prizes</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:max-w-7xl">
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 w-full max-w-sm md:max-w-md min-w-[300px]">

                    <Image
                        src="/prize.png"
                        alt="ReidExtreme Logo"
                        layout="responsive"
                        height={1}
                        width={1}
                        className="object-contain responsive"
                    />
                    <div className="text-white text-center pt-16 tracking-wide">
                        <h2 className="text-2xl font-bold pb-3">First Runner's Up</h2>
                        <p className="text-2xl">TBA</p>
                    </div>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 w-full max-w-sm md:max-w-md min-w-[300px]">

                    <Image
                        src="/prize.png"
                        alt="jordans"
                        height="400"
                        width="400"
                        className="object-contain"
                    />
                    <div className="text-white text-center pt-16 tracking-wide">
                        <h2 className="text-2xl font-bold pb-3">Winner</h2>
                        <p className="text-2xl">TBA</p>
                    </div>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 w-full max-w-sm md:max-w-md min-w-[300px]">

                    <Image
                        src="/prize.png"
                        alt="jordans"
                        height="400"
                        width="400"
                        className="object-contain"
                    />
                    <div className="text-white text-center pt-16 tracking-wide">
                        <h2 className="text-2xl font-bold pb-3">Second Runner's Up</h2>
                        <p className="text-2xl">TBA</p>
                    </div>
                </BackgroundGradient>
            </div>
        </div>
    );
}

export default Prize2;