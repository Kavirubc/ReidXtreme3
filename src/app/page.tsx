'use client';
import React, { useState, useEffect } from 'react';
import Prizes from '../components/prize3';
import FAQ from '../components/faq2';
import Footer from '../components/footer2';
import './styles.scss';
import Navbar from "@/components/navbar3";
import { Hero } from "@/components/hero";
import { CTA } from "@/components/cta";
import { Timeline } from "@/components/timeline2";
import { About } from "@/components/about";
import Contact from "@/components/contact";
import SponserCards from "@/components/sponsor3";
// import Register from '@/components/register';
import Preloader from '@/components/preloading'; 

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return (
        <main className={"dark"}>
            <Navbar />
            <Hero />
            <div className={"dragon"} />
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
