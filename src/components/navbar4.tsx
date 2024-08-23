//navbar with popup message
'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + 200;

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                const sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                    setActiveLink(section.id);
                }
            });

            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleClick = (link: string) => {
        if (link.startsWith('/')) {
            window.location.href = link;
        } else if (link === 'delegate-book') {
            setShowPopup(true);
            const element = document.getElementById(link);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        setIsDropdownOpen(false);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div className={`p-5 flex fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className="md:hidden rounded-full mt-4 flex items-center justify-between w-full bg-black border backdrop-blur-lg shadow-xl px-4 py-2">
                    <div className="flex-shrink-0">
                        <img src="/logo.png" alt="Logo" className="h-8" onClick={() => handleClick("/#")} />
                    </div>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isDropdownOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>

                <div
                    className={`fixed top-0 right-0 h-screen w-screen pt-14 backdrop-blur-lg shadow-xl transition-transform duration-300 ${isDropdownOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden w-64`}>
                    <div className="flex flex-shrink-0 px-4 flex-row justify-between">
                        <img src="/logo.png" alt="Logo" className="h-10" onClick={() => handleClick("/#")} />
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isDropdownOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex flex-col pt-16">
                        {[
                            { label: "Home", link: "/#" },
                            { label: "About", link: "/#about" },
                            { label: "Timeline", link: "/#timeline" },
                            { label: "Prizes", link: "/#prizes" },
                            { label: "FAQ", link: "/#faq" },
                            { label: "Contact Us", link: "/#contactus" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                className={`block px-4 py-2 text-white text-xl hover:bg-gray-700 ${activeLink === item.link ? 'font-bold text-yg' : ''}`}
                                onClick={() => handleClick(item.link)}
                            >
                                {item.label}
                            </a>
                        ))}
                        {/* <a
                            className="reg-button mx-4 my-10 w-40 h-10 rounded-xl bg-green-900 border dark:border-white border-transparent text-white text-sm flex items-center justify-center"
                            onClick={() => handleClick('delegate-book')}
                        >
                            Delegate Book
                        </a> */}
                    </div>
                </div>

                <div
                    className="hidden md:flex flex-row items-center w-full bg-black border backdrop-blur-lg shadow-xl rounded-full mt-8 mx-auto max-w-3xl md:h-16 h-10">
                    <div className="flex flex-grow justify-center">
                        {[
                            { label: "Home", link: "/#" },
                            { label: "About", link: "/#about" },
                            { label: "Timeline", link: "/#timeline" },
                            { label: "Prizes", link: "/#prizes" },
                            { label: "FAQ", link: "/#faq" },
                            { label: "Contact Us", link: "/#contactus" },
                            // { label: "Delegate Book", link: "delegate-book" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                className={`group relative cursor-pointer ${activeLink === item.link ? 'font-bold text-yg' : ''}`}
                                onClick={() => handleClick(item.link)}
                            >
                                <div className="md:px-4 px-1 text-white md:text-base text-xs hover:text-gray-400 text-center">
                                    {item.label}
                                    <div className={`absolute left-0 right-0 mx-auto h-0.5 w-full transition-transform duration-300 transform ${activeLink === item.link ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></div>
                                </div>
                            </a>
                        ))}
                    </div>
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
};

export default Navbar;
