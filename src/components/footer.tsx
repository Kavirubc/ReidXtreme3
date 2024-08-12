import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import Image from 'next/image';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black py-8"
        >
            <div className="container mx-auto px-4 pt-40">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center space-x-8 mb-8 gap-10"
                >
                    <Image src="/acm.png" alt="ACM Logo" width={400} height={500} />
                    <Image src="/ieee.png" alt="IEEE Logo" width={300} height={400} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-8 text-white"
                >
                    <p className='font-des text-xl tracking-wide'>ReidXtreme Competitive Programming is organized by the ACM Student Chapter of UCSC, in collaboration with the IEEE Student Branch of UCSC.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex justify-center items-center mb-8 text-gray-700"
                >
                    <a
                        href="https://www.facebook.com/ucsc.acm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 mr-4"
                    >
                        <FaFacebook className="text-white hover:text-blue-700" size={25} />
                    </a>
                    <a
                        href="https://www.instagram.com/ucsc.acm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-600 mr-4"
                    >
                        <FaInstagram className="text-white hover:text-pink-600" size={25} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/ucsc-acm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-500 mr-4"
                    >
                        <FaLinkedin className="text-white hover:text-cyan-500" size={25} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1 }}
                    className="text-center text-gray-700 hover:text-gray-300"
                >
                    <p className='font-des'>© {new Date().getFullYear()} ReidXtreme All Rights Reserved.</p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
