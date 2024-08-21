'use client';
import React, { useState, useEffect } from 'react';
import Prizes from '../components/prize4';
import FAQ from '../components/faq2';
import Footer from '../components/footer2';
import './styles.scss';
import Navbar from "@/components/navbar2";
import { Hero } from "@/components/hero";
import { CTA } from "@/components/cta";
import { Timeline } from "@/components/timeline2";
import { About } from "@/components/about";
import Contact from "@/components/contact";
import SponserCards from "@/components/sponsor3";
import Preloader from '@/components/preloading'; 
import RegisterPage from '@/components/register';

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
            <RegisterPage />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
