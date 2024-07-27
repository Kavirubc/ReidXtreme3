// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const FAQ: React.FC = () => {
//     return (
//         <main className="'flex flex-col h-screen items-center content-center justify-center">
//             <div className="flex flex-col items-center">
//                 <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl font-bruno">Gallery</h2>
//             </div>
//             <div className="py-10 px-52 flex justify-center">
//                 <div className="w-full max-w-screen-xl">
//                     <div className="columns-1 md:columns-2 xl:columns-3 gap-10">

//                         {[
//                             "/dragon.png",
//                             "/dragon.png",
//                             "/dragon.png",
//                             "/dragon.png",
//                             "/dragon.png",
//                             "/dragon.png",
//                             "/dragon.png",
//                             "/dragon.png",
//                             "/dragon.png",
//                             "/dragon.png",
//                             "/dragon.png",
//                             "/dragon.png",
//                         ].map((src, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="break-inside-avoid mb-8"
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 initial={{ opacity: 0, y: 50 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 1.0, ease: "easeOut" }}
//                             >
//                                 <motion.div
//                                     className="h-auto max-w-full rounded-lg shadow-xl shadow-s transition-transform duration-100 ease-in-out transform hover:scale-100"
//                                     whileHover={{ scale: 1.0 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <div className="relative w-full h-0 pb-[60%]"> {/* aspect ratio container */}
//                                         <Image
//                                             src={src}
//                                             alt={`Gallery image ${index + 1}`}
//                                             fill
//                                             className="rounded-lg object-cover"
//                                         />
//                                     </div>
//                                 </motion.div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//         </main>
//     );
// };

// export default FAQ;
