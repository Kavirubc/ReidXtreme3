import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FAQItem {
    question: string;
    answer: string | JSX.Element;
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            question: "What is ReidXtreme 3.0?",
            answer: "ReidXtreme 3.0 is the premier competitive programming hackathon organized by the IEEE Student Branch in collaboration with the ACM Student Chapter at the University of Colombo School of Computing. It's designed to enhance the competitive programming skills of undergraduate students and prepare them for the tech industry."
        },
        {
            question: "How is the event structured?",
            answer: "ReidXtreme 3.0 consists of two rounds: an initial qualifying round and a final round. The top 10 teams from the initial round advance to the finals, which is a 12-hour in-person hackathon."
        },
        {
            question: "Who can participate in ReidXtreme 3.0?",
            answer: "The event is primarily aimed at undergraduate students looking to elevate their competitive programming skills and gain exposure to the tech industry."
        },
        {
            question: "What are the benefits of participating in ReidXtreme 3.0?",
            answer: "Participants can enhance their technical competencies, gain valuable industry exposure, network with peers and professionals in the tech field, and prepare for global competitions like the IEEEXtreme hackathon."
        },
        {
            question: "How is ReidXtreme 3.0 different from previous versions? ",
            answer: "Unlike ReidXtreme 1.0 and 2.0 which were held online, ReidXtreme 3.0 will be hosted physically, providing an enhanced learning experience and better networking opportunities."
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    return (
        <div className="flex flex-col h-auto lg:mt-1 mt-10 items-center content-center justify-center w-full px-8 shadow-2xl sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-16" id={"faq"}>

            <h2 className="mb-14 text-center text-5xl font-bold font-bruno md:text-6xl">FAQ</h2>

            <div className="mx-auto w-full">
                <div className="mx-auto mt-3 grid z-10 max-w-3xl divide-y divide-neutral-50 font-des w-full">
                    {faqItems.map((faq, index) => (
                        <motion.div
                            ref={ref}
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
                            transition={{ duration: 0.4, ease: 'easeInOut', delay: index * 0.4 }}
                            className="py-2 w-full"
                        >
                            <div className="group w-full">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between font-des font-semibold tracking-widest bg-tertiary bg-opacity-95 p-3 md:p-6 rounded-lg text-gray-100 md:text-lg text-base w-full"
                                    onClick={() => handleToggle(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={`transition transform duration-700 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                                            style={{ overflow: 'hidden' }}
                                            className="text-white text-base md:text-lg rounded-md tracking-wide w-full"
                                        >
                                            <div className="faq-answer mt-4 mb-1 md:px-6 px-3 bg-primary w-full">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
