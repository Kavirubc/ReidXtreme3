'use client'
import React from 'react';
import Prizes from '../components/prize3';
import FAQ from '../components/faq2';
import Footer from '../components/footer2';
import './styles.scss'
import Navbar from "@/components/navbar4";
import { Hero } from "@/components/hero";
import dragon from "../../public/hero_bg.png";
import { CTA } from "@/components/cta2";
import { Timeline } from "@/components/timeline";
import { About } from "@/components/about";
import Contact from "@/components/contact";
import SponserCards from "@/components/sponsor3";
import Register from "@/components/register";


export default function Home() {
    return (
        <main className={"dark"}>
            <Navbar />
            <Hero />
            <div
                className={"dragon"}
            />
            <CTA />
            <About />
            <Timeline />
            <Prizes />
            <SponserCards />
            {/* <Register /> */}
            <FAQ />
            <Contact />
            <Footer />
        </main>


    );
}
