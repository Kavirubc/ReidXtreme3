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
            question: "What is the registration process?",
            answer: "We will be posting the announcements on our social media and the registration links will be available on our site. You will be required to register for the workshop and competition separately."
        },
        {
            question: "What are the phases of the competition?",
            answer: "The competition will have three phases; the proposal submission phase, the implementation phase, and the judging phase. The proposal submission stage will be open to all participants. The implementation stage will be for the top 10 teams selected from the proposal submissions."
        },
        {
            question: "How will the final app be chosen?",
            answer: "We will be choosing the best 10 teams for the final round based on the proposals submitted in the initial phase. The final 10 will be asked to implement the application and the best among them will be chosen based on various criteria."
        },
        {
            question: "Are there any restrictions on the programming languages?",
            answer: (
                <>
                    No, you are free to use whatever framework or programming language as you wish.<br />
                    <span style={{ color: '#ffbc40' }}>Go crazy and may the best solution win!</span>
                </>
            )
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    return (
        <div className="flex flex-col min-h-screen md:max-h-screen items-center content-center justify-center w-full px-8 mt-12 shadow-2xl sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-16 z-50 mb-20">
            <div className="flex flex-col items-center sticky top-0 z-10 md:static">
                <h2 className="mt-5 mb-5 text-center text-4xl font-bold md:text-6xl font-bruno tracking-wider">FAQ</h2>
            </div>
            <div className="mx-auto w-full">
                <div className="mx-auto mt-12 grid z-50 max-w-3xl divide-y divide-neutral-50 font-des w-full">
                    {faqItems.map((faq, index) => (
                        <motion.div
                            ref={ref}
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.5 }}
                            className="py-3 w-full"
                        >
                            <div className="group w-full">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between font-des font-semibold tracking-wider bg-tertiary bg-opacity-95 p-3 md:p-6 rounded-lg text-white md:text-xl text-base w-full"
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
                                            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
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
