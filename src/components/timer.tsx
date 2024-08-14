import React, { useState, useEffect, useCallback } from 'react';

const Countdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
    const calculateTimeRemaining = useCallback(() => {
        const currentTime = new Date();
        const difference = targetDate.getTime() - currentTime.getTime();

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }, [targetDate]);

    const [timeRemaining, setTimeRemaining] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining);
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate, calculateTimeRemaining]);

    if (!timeRemaining) {
        return <div className="text-white text-sm text-center">Loading...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row items-center content-center justify-center">
            <div className="grid grid-cols-4 md:gap-4 gap-2 font-bold m-2">
                <div className="border border-violet-950 py-3 rounded-lg bg-secondary bg-opacity-90 tracking-widest text-white text-center md:text-3xl text-xl items-center content-center justify-center shadow-lg shadow-indigo-950">
                    {timeRemaining.days}
                    <div className="text-white text-sm pl-4 pr-4 font-thin tracking-wider md:text-lg md:px-5">days</div>
                </div>
                <div className="border border-violet-950 py-3 rounded-lg bg-secondary bg-opacity-90 tracking-widest text-white text-center md:text-3xl text-xl items-center content-center justify-center shadow-lg shadow-indigo-950">
                    {timeRemaining.hours}
                    <div className="text-white text-sm pl-4 pr-4 font-thin tracking-wider md:text-lg">hrs</div>
                </div>
                <div className="border border-violet-950 py-3 rounded-lg bg-secondary bg-opacity-90 tracking-widest text-white text-center md:text-3xl text-xl items-center content-center justify-center shadow-lg shadow-indigo-950">
                    {timeRemaining.minutes}
                    <div className="text-white text-sm pl-4 pr-4 font-thin tracking-wider md:text-lg">mins</div>
                </div>
                <div className="border border-violet-950 py-3 rounded-lg bg-secondary bg-opacity-90 tracking-widest text-white text-center md:text-3xl text-xl items-center content-center justify-center shadow-lg shadow-indigo-950">
                    {timeRemaining.seconds}
                    <div className="text-white text-sm pl-4 pr-4 font-thin tracking-wider md:text-lg">secs</div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
