import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            question: "Question 1",
            answer: "Answer 1"
        },
        {
            question: "Question 2",
            answer: "Answer 2"
        },
        {
            question: "Question 3",
            answer: "Answer 3"
        },
        {
            question: "Question 4",
            answer: "Answer 4"
        },
        {
            question: "Question 5",
            answer: "Answer 5"
        },
        {
            question: "Question 6",
            answer: "Answer 6"
        }
    ];

    return (
        <main className="flex flex-col h-screen items-center content-center justify-center">
            <div className="absolute w-full px-6 pt-10 pb-8 mt-8 shadow-xl sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
                <div className="mx-auto">
                    <div className="flex flex-col items-center">
                        <h2 className="mt-5 text-center text-3xl font-bold md:text-5xl font-bruno tracking-wider">FAQ</h2>
                    </div>
                    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral- font-des">
                        {faqItems.map((faq, index) => (
                            <div className="py-3" key={index}>
                                <div className="group">
                                    <summary
                                        className="flex cursor-pointer list-none items-center justify-between font-medium text-white" 
                                        onClick={() => handleToggle(index)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className={`transition transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
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
                                    <motion.div
                                        initial="collapsed"
                                        animate={openIndex === index ? "open" : "collapsed"}
                                        variants={{
                                            open: { opacity: 1, height: 'auto', marginTop: '10px' },
                                            collapsed: { opacity: 0, height: 0, marginTop: '0px' }
                                        }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }} 
                                        style={{ overflow: 'hidden' }}
                                        className="text-gray-600 bg-slate-950 p-2 rounded-md mt-2" 
                                    >
                                        {openIndex === index && (
                                            <div className="faq-answer mt-3">{faq.answer}</div>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FAQ;
