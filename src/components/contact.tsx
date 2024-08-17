'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer2';

const ContactUs = () => {
    return (
        <div className="pt-5 px-10 flex flex-col text-center items-center tracking-widest font-des max-w-7xl ml-auto mr-auto" id={"contactus"}>

            <h2 className="mt-32 mb-10 text-center text-4xl font-bold font-bruno md:text-6xl">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
                <motion.div
                    whileHover={{ scale: 1.0, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.8)" }}
                    className="flex flex-col items-center bg-transparent text-white rounded-xl shadow-xl p-6 transition-all duration-500"
                >
                    <img src="/team1.jpg" alt="contact one" className="w-52 h-52 md:w-72 md:h-72 object-cover mb-4 rounded-full" />
                    <h2 className="text-2xl font-bold tracking-wider mb-2">Sasmitha Silva
                    </h2>
                    <h4 className="text-xl mt-4 text-yg font-semibold tracking-widest mb-2">Marketing Lead</h4>
                    <div className="text-white flex items-center mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-yg mr-2" />
                        <a href="mailto:silvasasmitha53@gmail.com"
                            className="custom-underline">esilvasasmitha53@gmail.com</a>
                    </div>
                    <div className="text-white flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="text-yg mr-2" />
                        <a href="tel:+94715479744" className="custom-underline">+94 71 547 9744</a>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.0, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.8)" }}
                    className="flex flex-col items-center bg-transparent text-white rounded-xl shadow-lg p-6  transition-all duration-500"
                >
                    <img src="/two2.jpg" alt="contact one" className="w-52 h-52 md:w-72 md:h-72 object-cover mb-4 rounded-full" />
                    <h2 className="text-2xl font-bold tracking-wider mb-2">Nethmi Hapuarachchi

                    </h2>
                    <h4 className="text-xl mt-4 text-yg font-semibold tracking-wider mb-2">Marketing Team Member
                    </h4>
                    <div className="text-white flex items-center mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-yg mr-2" />
                        <a href="mailto:sathruwanihapuarachchi7@gmail.com"
                            className="custom-underline">sathruwanihapuarachchi7@gmail.com</a>
                    </div>
                    <div className="text-white flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="text-yg mr-2" />
                        <a href="tel:+94778022449" className="custom-underline">+94 77 802 2449</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactUs;
