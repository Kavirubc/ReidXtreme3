'use client';
import React, { useEffect, useState } from 'react';
import logo from "../../public/logo.png";

const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id='home'>

            <div className={`flex fixed top-0 left-0 right-0 z-50 justify-center transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className="bg-transparent border backdrop-blur-lg shadow-xl rounded-full mt-5 mx-auto w-full max-w-2xl h-16 flex flex-row justify-between items-center px-4">
                    <div className="flex flex-row">
                        <a href="/">
                            <img
                                className="inline-block h-10 w-auto md:mr-36 ml-1 md:ml-10 mt-1 md:mt-0 md:h-10 md:w-auto mb-1"
                                src={logo.src}
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="flex flex-row md:text-base text-sm md:tracking-wide tracking-normal justify-end md:gap-6 gap-4">
                        {[
                            { label: "Contact Us", link: "/contactus" },
                            { label: "Register Now", link: "/register" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className={`group relative ${activeLink === item.link.substring(1) ? 'font-bold text-yg' : ''}`}
                                onClick={() => handleClick(item.link.substring(1))}
                            >
                                <div className="px-4 text-white md:text-base text-xs hover:text-yg text-center font-bruno tracking-wider">
                                    {item.label}
                                    <div className={`absolute left-0 right-0 mx-auto h-0.5 w-full bg-yg transition-transform duration-300 transform ${activeLink === item.link.substring(1) ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
