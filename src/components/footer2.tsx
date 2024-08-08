import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black p-5"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-row justify-center gap-x-4  md:gap-x-24 items-center"
                >
                    <Image src="/acm.png" alt="ACM Logo" width={150} height={150} className="md:w-[250px] md:h-[200px]" />
                    <Image src="/ieee_new_blue.png" alt="IEEE Logo" width={250} height={350} className="md:w-[325px] md:h-[100px]" />
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
