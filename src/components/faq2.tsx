import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            question: "What is the registration process?",
            answer: "We will be posting the announcements on our social media and the registration links will be available on our site. You will be required to register for the workshop and competition separately."
        },
        {
            question: "What are the phases of the competition?",
            answer: "The competition will have three phases; the proposal submission phase, the implementation phase and the judging phase. The proposal submission stage will be open to all participants. The implementation stage will be for the top 10 teams selected from the proposal submissions."
        },
        {
            question: "Are there any restrictions on the programming languages?",
            answer: "No, you are free to use whatever framework or programming language as you wish. Go crazy and may the best solution win!"
        },
        {
            question: "How will the final app be chosen?",
            answer: "We will be choosing the best 10 teams for the final round based on the proposals submitted in the initial phase. The final 10 will be asked to implement the application and the best among them will be chosen based on various criteria."
        },
    ];

    return (
        <main className="flex flex-col h-screen items-center content-center justify-center">
            <div className="absolute w-full px-6 pt-10 pb-8 mt-8 shadow-xl sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
                <div className="mx-auto">
                    <div className="flex flex-col items-center">
                        <h2 className="mt-5 text-center text-3xl font-bold md:text-5xl font-bruno tracking-wider">FAQ</h2>
                    </div>
                    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-50 font-des">
                        {faqItems.map((faq, index) => (
                            <div className="py-3" key={index}>
                                <div className="group">
                                    <summary
                                        className="flex cursor-pointer list-none items-center justify-between font-des font-semibold tracking-wider bg-tertiary bg-opacity-95 p-5 rounded-lg text-white"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className={`transition transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
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
                                                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                                style={{ overflow: 'hidden' }}
                                                className="text-white bg-primary p-2 rounded-md tracking-wide"
                                            >
                                                <div className="faq-answer mt-3">{faq.answer}</div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
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
