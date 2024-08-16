'use client'
import React from 'react';
import Prizes from '../components/prize3';
import FAQ from '../components/faq2';
import Footer from '../components/footer2';
import Gallery from '../components/gallery';
import Test from '@/components/test';
import Image from "next/image"
import './styles.scss'
import Navbar from "@/components/navbar3";
import { Hero } from "@/components/hero";
import dragon from "../../public/hero_bg.png";
import { CTA } from "@/components/cta";
import { Timeline } from "@/components/timeline";
import { About } from "@/components/about";
import Contact from "@/components/contact";
import  SponserCards  from "@/components/sponsor3";



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
            <FAQ />
            <Contact />
            <Footer />
        </main>

        
    );
}
