import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black p-5 pt-40"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-row justify-center gap-x-4  md:gap-x-24 items-center"
                >
                    <Image src="/acm.png" alt="ACM Logo" width={150} height={150} className="md:w-[250px] md:h-[200px]" />
                    <Image src="/ieee_new_blue.png" alt="IEEE Logo" width={350} height={300} className="md:w-[330px] md:h-[100px]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex justify-center gap-x-5 items-center mb-8 text-gray-700 space-x-0 md:space-x-0 md:flex-row"
                >
                    {/* ACM Social Media */}
                    <div className="flex space-x-4 border-r pr-4">
                        <a
                            href="https://www.facebook.com/ucscacm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700"
                        >
                            <FaFacebook className="text-cyan-500 hover:text-blue-700" size={25} />
                        </a>
                        <a
                            href="https://www.instagram.com/ucsc.acm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-600"
                        >
                            <FaInstagram className="text-cyan-500 hover:text-pink-600" size={25} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/ucscacmstudentchapter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-500"
                        >
                            <FaLinkedin className="text-cyan-500 hover:text-cyan-500" size={25} />
                        </a>
                    </div>

                    {/* ReidXtreme Social Media */}
                    <div className="flex space-x-4 border-r pr-4">

                        <a
                            href="https://www.linkedin.com/company/reidxtreme/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-600"
                        >
                            <FaLinkedin className="text-secondary hover:text-cyan-500" size={25} />
                        </a>

                    </div>

                    {/* IEEE Social Media */}
                    <div className="flex space-x-4 pr-4">
                        <a
                            href="https://www.facebook.com/IEEE.UCSC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700"
                        >
                            <FaFacebook className="text-sky-800 hover:text-blue-700" size={25} />
                        </a>
                        <a
                            href="https://www.instagram.com/ucsc.ieee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-600"
                        >
                            <FaInstagram className="text-sky-800 hover:text-pink-600" size={25} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/ieee-student-branch-ucsc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-500"
                        >
                            <FaLinkedin className="text-sky-800 hover:text-cyan-500" size={25} />
                        </a>
                    </div>
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
