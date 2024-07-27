import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black pb-5"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-center gap-y-1 md:gap-x-24 items-center"
                >
                    <Image src="/acm.png" alt="ACM Logo" width={200} height={200} />
                    <Image src="/ieee.png" alt="IEEE Logo" width={200} height={200} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex justify-center md:gap-x-5 items-center mb-8 text-gray-700 space-x-4 md:space-x-0 md:flex-row"
                >
                    <a
                        href="https://www.facebook.com/ucsc.acm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700"
                    >
                        <FaFacebook className="text-white hover:text-blue-700" size={25} />
                    </a>
                    <a
                        href="https://www.instagram.com/ucsc.acm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-600"
                    >
                        <FaInstagram className="text-white hover:text-pink-600" size={25} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/ucsc-acm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-500"
                    >
                        <FaLinkedin className="text-white hover:text-cyan-500" size={25} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="text-center text-gray-300 hover:text-secondary mt-4 md:mt-0" 
                >
                    <p className='font-des'>© {new Date().getFullYear()} ReidXtreme - All Rights Reserved.</p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
