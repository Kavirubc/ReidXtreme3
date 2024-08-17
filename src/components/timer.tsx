import React, { useEffect, useState } from 'react';

interface CountdownProps {
    targetDate: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    } | null>(null);

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, targetDate]);

    if (timeLeft === null) {
        return <div className="text-center text-2xl font-des">Loading...</div>;
    }

    return (
        <div className="flex flex-nowrap justify-center gap-4 font-des tracking-wide">
            <div className="text-center w-16 sm:w-24">
                <span className="text-3xl sm:text-5xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2">Days</p>
            </div>
            <div className="text-center w-16 sm:w-24">
                <span className="text-3xl sm:text-5xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2">Hours</p>
            </div>
            <div className="text-center w-16 sm:w-24">
                <span className="text-3xl sm:text-5xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2">Minutes</p>
            </div>
            <div className="text-center w-16 sm:w-24">
                <span className="text-3xl sm:text-5xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2">Seconds</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
