'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const Prize = () => {
    const boxVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.4,
                duration: 0.8,
                ease: "easeIn"
            }
        })
    };

    const images = ['/p1.png', '/p2.png', '/p3.png'];

    return (
        <div className="flex flex-col min-h-screen pt-5 items-center tracking-widest font-des bg-transparent text-white flex-grow" id={"prizes"}>
            <h2 className="mt-32 text-center text-5xl font-bold font-bruno md:text-6xl mb-16">Prizes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
                {[...Array(3)].map((_, i) => {
                    const { ref, inView } = useInView({
                        triggerOnce: false,
                        threshold: 0.1
                    });

                    return (
                        <motion.div
                            ref={ref}
                            custom={i}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={boxVariants}
                            whileHover={{ scale: 1.05, boxShadow: `0px 0px 40px ${i === 0 ? 'rgba(255, 215, 0, 1)' : i === 1 ? 'rgba(192, 192, 192, 1)' : 'rgba(205, 127, 50, 1)'}`, borderColor: "transparent" }}
                            className="flex flex-col items-center text-white rounded-xl shadow-lg p-12 border border-yg transition-all duration-500"
                            key={i}
                        >
                            <img src={images[i]} alt={`prize ${i + 1}`} className="w-44 h-44 lg:w-64 lg:h-72 object-cover" />
                            <h2 className="text-xl font-bold tracking-wider mb-2">{i + 1 === 1 ? '1st Place' : i + 1 === 2 ? '2nd Place' : '3rd Place'}</h2>
                            <h1 className="text-3xl font-bold tracking-wider">{i + 1 === 1 ? 'Rs. 30 000' : i + 1 === 2 ? 'Rs. 20 000' : 'Rs. 15 000'}</h1>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Prize;
