'use client'
import React from 'react';
import Prizes from '../components/prize';
import FAQ from '../components/faq';
import Footer from '../components/footer';
import Gallery from '../components/gallery';
import Test from '@/components/test';

// import './styles.scss'

export default function Home() {
    return (
        <div className=''>
            {/* <Test /> */}

            <Prizes />
            <FAQ />
            {/* <Gallery /> */}
            <Footer />
        </div>
    );
}
