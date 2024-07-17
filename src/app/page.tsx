'use client'

import Image from "next/image"
import './styles.scss'
import Navbar from "@/components/navbar";
import {Hero} from "@/components/hero";
import dragon from "../../public/hero_bg.png";
import React from "react";


export default function Home() {
    return (
        <main className={'dark'}>
            <Navbar />
            <Hero />
            <div
                className={"dragon"}
              />
        </main>
    );
}
