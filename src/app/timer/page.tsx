'use client';
import React, { useEffect, useState } from 'react';
import CountdownTimer from '../../components/timer2';
import Logo from '../../../public/logo.png';

const InitialStarts = () => {
    const [isInitialRoundStarted, setIsInitialRoundStarted] = useState(false); 
    const [isFinalRoundEnded, setIsFinalRoundEnded] = useState(false); 
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="w-screen h-screen bg-gradient-to-b from-black via-tertiary to-black text-white flex flex-col items-center justify-center p-4 sm:p-1 md:p-1">
            <div className="fixed top-4 left-4 hidden md:block">
                <img src={Logo.src} alt="Logo" className="h-32 w-32 md:h-28 md:w-32 object-contain z-50 shadow-xl ml-10" />
            </div>

            <div className="block md:hidden">
                <img src={Logo.src} alt="Logo" className="h-20 w-20 object-contain mb-4" />
            </div>

            <div className="w-full flex flex-col items-center bg-transparent p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
                {/* Title */}
                <div className="flex flex-col items-center mb-8">
                    <h1 className="lg:mt-1 text-center text-4xl font-bold font-bruno md:text-6xl">
                        {isInitialRoundStarted ? "Final Round" : "Final Round"}
                    </h1>
                </div>

                <p className="text-center max-w-lg text-base sm:text-lg font-des tracking-wider mt-5">
                    {isInitialRoundStarted
                        ? "Brace yourself for the ultimate coding clash at ReidXtreme 3.0. Who will rise as the champion?"
                        : <>Get ready for the final round of ReidXtreme 3.0! <br /> Are you prepared to face the challenge? Let's find out<br /> <span className="text-yg font-des font-bold tracking-widest">Good Luck to the all participants!</span></>}
                </p>

                <div className="flex flex-col items-center bg-transparent p-4 sm:p-6 md:p-8 rounded-xl shadow-lg tracking-widest">
                    {isFinalRoundEnded ? (
                        <div className="text-center text-4xl md:text-6xl font-des font-semibold mb-4 sm:mb-6 tracking-widest">
                            Submission Closed
                            <br />
                            <div className="text-2xl pt-10 tracking-wider text-yg">
                                Stay tuned for the results!
                            </div>
                        </div>
                    ) : isInitialRoundStarted ? (
                        <div>
                            <h2 className="text-lg sm:text-xl font-des font-semibold mb-4 sm:mb-6 tracking-widest text-center">
                                Final Round Ends In
                            </h2>
                            <CountdownTimer
                                targetDate="2024-09-08T07:00:00" // Final round end time
                                onComplete={() => setIsFinalRoundEnded(true)}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-lg sm:text-xl font-des text-center font-semibold mb-4 sm:mb-6 tracking-widest">
                                Final Round Starts In
                            </h2>
                            <CountdownTimer
                                targetDate="2024-09-07T19:00:00" //Final Round Start time
                                onComplete={() => setIsInitialRoundStarted(true)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InitialStarts;
