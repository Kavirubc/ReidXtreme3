'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer';

const ContactUs = () => {
    return (
        <>
            <Navbar className='border border-white rounded-full' />
            <main className='flex flex-col items-center justify-center text-white mt-40 mb-20 '>
                <div className="flex flex-col items-center tracking-widest font-des md:max-w-7xl">
                    <h1 className="text-4xl font-bold mb-12 font-bruno">Contact Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.8)" }}
                            className="flex flex-col items-center bg-transparent text-white rounded-xl shadow-lg p-6 border border-yg transition-all duration-500"
                        >
                            <img src="/dragon.png" alt="contact one" className="w-32 h-32 md:w-72 md:h-72 object-contain mb-4 " />
                            <h2 className="text-xl font-bold tracking-wider mb-2">Jon Doe</h2>
                            <div className="text-white flex items-center mb-2">
                                <FontAwesomeIcon icon={faEnvelope} className="text-yg mr-2" />
                                <a href="mailto:email@gmail.com" className="hover:underline">email@gmail.com</a>
                            </div>
                            <div className="text-white flex items-center">
                                <FontAwesomeIcon icon={faPhone} className="text-yg mr-2" />
                                <a href="tel:+1234567890" className="hover:underline">+1234567890</a>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.8)" }}
                            className="flex flex-col items-center bg-transparent text-white rounded-xl shadow-lg p-6 border border-yg transition-all duration-500"
                        >
                            <img src="/dragon.png" alt="contact one" className="w-32 h-32 md:w-72 md:h-72 object-contain mb-4" />
                            <h2 className="text-xl font-bold tracking-wider mb-2">Jon Doe</h2>
                            <div className="text-white flex items-center mb-2">
                                <FontAwesomeIcon icon={faEnvelope} className="text-yg mr-2" />
                                <a href="mailto:email@gmail.com" className="hover:underline">email@gmail.com</a>
                            </div>
                            <div className="text-white flex items-center">
                                <FontAwesomeIcon icon={faPhone} className="text-yg mr-2" />
                                <a href="tel:+1234567890" className="hover:underline">+1234567890</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ContactUs;
