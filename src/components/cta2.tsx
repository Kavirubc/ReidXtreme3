'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function CTA() {
    const [showPopup, setShowPopup] = useState(false);

    const words = [
        { text: "Test" },
        { text: "Your" },
        { text: "Problem", className: "text-blue-500 dark:text-green-500" },
        { text: "Solving", className: "text-blue-500 dark:text-green-500" },
        { text: "Skills" },
    ];

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div className="cta flex flex-col items-center justify-center h-[20rem] mt-40">
                <p className="intro text-neutral-600 dark:text-neutral-200 text-xs sm:text-base font-des">
                    A premier competitive programming hackathon by the IEEE and ACM Student Chapters of UCSC
                </p>
                <TypewriterEffectSmooth words={words} />
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                    <a
                        onClick={handleOpenPopup}
                        className="w-40 h-10 rounded-xl bg-green-900 border dark:border-white border-transparent text-white text-sm flex items-center justify-center cursor-pointer"
                    >
                        Delegate Book
                    </a>
                </div>
            </div>

            {/* Popup Component */}
            {showPopup && (
                <div className="fixed inset-0 text-center tracking-widest font-des flex items-center justify-center bg-primary bg-opacity-50 leading-loose z-50 p-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-black bg-opacity-95 p-6 lg:p-10 lg:pt-16 rounded-xl shadow-custom-hover shadow-gray-500 flex flex-col items-center"
                    >
                        <p className="text-white text-lg md:text-xl font-bold">Delegate Booklet will be available soon.</p>
                        <button
                            onClick={handleClosePopup}
                            className="lg:mt-10 mt-5 px-6 py-2 lg:text-xl text-lg bg-primary border border-gray-500 text-white rounded-lg hover:bg-neutral-800 focus:outline-double focus:ring-2 focus:ring-cyan-600  font-des tracking-widest"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
