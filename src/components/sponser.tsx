"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function SponserCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bbg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="mt-32 mb-14 text-center text-3xl font-bold font-bruno md:text-5xl">Our Partners</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  // {
  //   image: "/wso2.png",
  //   name: "Pearson",
  //   title: "Gold Partner",
  //   color: ""
  // },
  {
    image: "/wso2.png",
    name: "WSO2",
    title: "Bronze Partner",
    color: "bronze"
  },
  {
    image: "/a1.png",
    name: "Acentura",
    title: "Silver Partner",
    color: "silver"
  },
  {
    image: "/f2.png",
    name: "Fonterra",
    title: "Beverage Partner",
    color: "silver"
  },
];
