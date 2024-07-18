'use client'
import React from 'react';
import Prizes from '../components/prize';
import FAQ from '../components/faq';
import Footer from '../components/footer';
import Gallery from '../components/gallery';
import Test from '@/components/test';

import Image from "next/image"
import './styles.scss'
import Navbar from "@/components/navbar";
import {Hero} from "@/components/hero";
import dragon from "../../public/hero_bg.png";
import {CTA} from "@/components/cta";


export default function Home() {
    return (
        <main className={'dark'}>
            <Navbar />
            <Hero />
            <div
                className={"dragon"}
              />
            <CTA />
            <Prizes />
            <FAQ />
            <Footer />
        </main>
    );
}
