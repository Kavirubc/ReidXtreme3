"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function SponserCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "/wso2.png",
    name: "Pearson",
    title: "Venue Partner",
    color: ""
  },
    {
    image: "/wso2.png",
    name: "WSO2",
    title: "Bronze Partner",
    color: "bronze"
  },
    {
    image: "/wso2.png",
    name: "Aventura",
    title: "Silver Partner",
    color: "silver"
  },
];
