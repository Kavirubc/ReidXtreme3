'use client';
import React, { useEffect, useState } from 'react';

interface CountdownProps {
    targetDate: string;
    onComplete?: () => void; // Optional callback function
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState<{
        hours: number;
        minutes: number;
        seconds: number;
    } | null>(null);

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);

            // If the countdown has reached zero, call onComplete if provided
            if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                if (onComplete) onComplete();
                clearTimeout(timer); // Stop the timer
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, targetDate]);

    if (timeLeft === null) {
        return <div className="text-center text-6xl font-des">Loading...</div>;
    }

    return (
        <div className="flex justify-center md:gap-24 gap-2 font-des tracking-widest">
            <div className="text-center">
                <span className="md:text-9xl text-4xl font-bold w-[100px] h-[100px] md:w-[140px] md:h-[120px] flex items-center justify-center">
                    {timeLeft.hours.toString().padStart(2, '0')}
                </span>
                <p className="text-sm md:text-xl mt-1 md:mt-3">Hours</p>
            </div>
            <div className="text-center">
                <span className="md:text-9xl text-4xl font-bold w-[100px] h-[100px] md:w-[140px] md:h-[120px] flex items-center justify-center">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                </span>
                <p className="text-sm md:text-xl mt-1 md:mt-3">Minutes</p>
            </div>
            <div className="text-center">
                <span className="md:text-9xl text-4xl font-bold w-[100px] h-[100px] md:w-[140px] md:h-[120px] flex items-center justify-center">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                </span>
                <p className="text-sm md:text-xl mt-1 md:mt-3">Seconds</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
