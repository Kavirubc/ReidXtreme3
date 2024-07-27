import { cn } from "../lib/utils";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Prize = ({
    children,
    className,
    containerClassName,
    animate = true,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        initial: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
        backgroundInitial: {
            backgroundPosition: "0 50%",
        },
        backgroundAnimate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };

    return (
        <div ref={ref} className="flex flex-col h-screen items-center content-center justify-center">
            <motion.div
                initial="initial"
                animate={controls}
                variants={variants}
                className="flex flex-col items-center pt-5 font-bruno tracking-widest"
            >
                <h2 className="mt-5 text-center text-3xl font-bold  md:text-5xl">Prizes</h2>
            </motion.div>
            <motion.div
                initial="initial"
                animate={controls}
                variants={variants}
                className="flex h-screen font-des items-center content-center justify-center gap-x-24 pl-4 pr-4"
            >
                <motion.div
                    className={cn("relative group hover:scale-105 transition-all duration-500 rounded-xl cursor-pointer hover:shadow-custom-hover bg-tertiary", containerClassName)}
                    style={{ width: "calc(33.33% - 150px)", height: "450px" }}
                >
                    <motion.div
                        variants={animate ? variants : undefined}
                        initial={animate ? "backgroundInitial" : undefined}
                        animate={animate ? "backgroundAnimate" : undefined}
                        transition={
                            animate
                                ? {
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }
                                : undefined
                        }
                        whileHover={{
                            scale: 1.05,
                        }}
                        style={{
                            backgroundSize: animate ? "400% 400%" : undefined,
                        }}
                        className={cn(
                            "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
                            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#661111,transparent),radial-gradient(circle_farthest-side_at_100%_0,#A02DAE,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#2B7A1B,transparent),radial-gradient(circle_farthest-side_at_0_0,#415C51,#0A0A0A)]"
                        )}
                    />
                    <motion.div
                        variants={animate ? variants : undefined}
                        initial={animate ? "backgroundInitial" : undefined}
                        animate={animate ? "backgroundAnimate" : undefined}
                        transition={
                            animate
                                ? {
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }
                                : undefined
                        }
                        whileHover={{
                            scale: 1.05,
                        }}
                        style={{
                            backgroundSize: animate ? "400% 400%" : undefined,
                        }}
                        className={cn(
                            "absolute inset-0 rounded-3xl z-[1] will-change-transform",
                            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#131313,transparent),radial-gradient(circle_farthest-side_at_100%_0,#0B2931,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#0A1F04,transparent),radial-gradient(circle_farthest-side_at_0_0,#062C20,#141316)]"
                        )}
                    />
                    <div className={cn("relative z-10 flex flex-col items-center justify-center", className)}>
                        <Image
                            className="block mx-auto pt-16"
                            src="/prize.png"
                            alt="ReidExtreme Logo"
                            layout="responsive"
                            height={1}
                            width={1}
                        />
                        <div className="text-white text-center pt-16 tracking-wide">
                            <h2 className="text-3xl font-bold pb-3">P 2</h2>
                            <p className="text-2xl">Rs. xxxxxx</p>
                        </div>
                        {children}
                    </div>
                </motion.div>

                <motion.div
                    className={cn("relative group hover:scale-105 transition-all duration-500 rounded-xl cursor-pointer hover:shadow-custom-hover bg-tertiary", containerClassName)}
                    style={{ width: "calc(33.33% - 150px)", height: "450px" }}
                >
                    <motion.div
                        variants={animate ? variants : undefined}
                        initial={animate ? "backgroundInitial" : undefined}
                        animate={animate ? "backgroundAnimate" : undefined}
                        transition={
                            animate
                                ? {
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }
                                : undefined
                        }
                        whileHover={{
                            scale: 1.05,
                        }}
                        style={{
                            backgroundSize: animate ? "400% 400%" : undefined,
                        }}
                        className={cn(
                            "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
                            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#661111,transparent),radial-gradient(circle_farthest-side_at_100%_0,#A02DAE,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#2B7A1B,transparent),radial-gradient(circle_farthest-side_at_0_0,#415C51,#0A0A0A)]"
                        )}
                    />
                    <motion.div
                        variants={animate ? variants : undefined}
                        initial={animate ? "backgroundInitial" : undefined}
                        animate={animate ? "backgroundAnimate" : undefined}
                        transition={
                            animate
                                ? {
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }
                                : undefined
                        }
                        whileHover={{
                            scale: 1.05,
                        }}
                        style={{
                            backgroundSize: animate ? "400% 400%" : undefined,
                        }}
                        className={cn(
                            "absolute inset-0 rounded-3xl z-[1] will-change-transform",
                            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#131313,transparent),radial-gradient(circle_farthest-side_at_100%_0,#0B2931,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#0A1F04,transparent),radial-gradient(circle_farthest-side_at_0_0,#062C20,#141316)]"
                        )}
                    />
                    <div className={cn("relative z-10 flex flex-col items-center justify-center", className)}>
                        <Image
                            className="block mx-auto pt-16"
                            src="/prize.png"
                            alt="ReidExtreme Logo"
                            layout="responsive"
                            height={1}
                            width={1}
                        />
                        <div className="text-white text-center pt-16 tracking-wide">
                            <h2 className="text-3xl font-bold pb-3">P 1</h2>
                            <p className="text-2xl">Rs. xxxxxx</p>
                        </div>
                        {children}
                    </div>
                </motion.div>

                <motion.div
                    className={cn("relative group hover:scale-105 transition-all duration-500 rounded-xl cursor-pointer hover:shadow-custom-hover bg-tertiary", containerClassName)}
                    style={{ width: "calc(33.33% - 150px)", height: "450px" }}
                >
                    <motion.div
                        variants={animate ? variants : undefined}
                        initial={animate ? "backgroundInitial" : undefined}
                        animate={animate ? "backgroundAnimate" : undefined}
                        transition={
                            animate
                                ? {
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }
                                : undefined
                        }
                        whileHover={{
                            scale: 1.05,
                        }}
                        style={{
                            backgroundSize: animate ? "400% 400%" : undefined,
                        }}
                        className={cn(
                            "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
                            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#661111,transparent),radial-gradient(circle_farthest-side_at_100%_0,#A02DAE,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#2B7A1B,transparent),radial-gradient(circle_farthest-side_at_0_0,#415C51,#0A0A0A)]"
                        )}
                    />
                    <motion.div
                        variants={animate ? variants : undefined}
                        initial={animate ? "backgroundInitial" : undefined}
                        animate={animate ? "backgroundAnimate" : undefined}
                        transition={
                            animate
                                ? {
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }
                                : undefined
                        }
                        whileHover={{
                            scale: 1.05,
                        }}
                        style={{
                            backgroundSize: animate ? "400% 400%" : undefined,
                        }}
                        className={cn(
                            "absolute inset-0 rounded-3xl z-[1] will-change-transform",
                            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#131313,transparent),radial-gradient(circle_farthest-side_at_100%_0,#0B2931,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#0A1F04,transparent),radial-gradient(circle_farthest-side_at_0_0,#062C20,#141316)]"
                        )}
                    />
                    <div className={cn("relative z-10 flex flex-col items-center justify-center", className)}>
                        <Image
                            className="block mx-auto pt-16"
                            src="/prize.png"
                            alt="ReidExtreme Logo"
                            layout="responsive"
                            height={1}
                            width={1}
                        />
                        <div className="text-white text-center pt-16 tracking-wide">
                            <h2 className="text-3xl font-bold pb-3">P 3</h2>
                            <p className="text-2xl">Rs. xxxxxx</p>
                        </div>
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Prize;
