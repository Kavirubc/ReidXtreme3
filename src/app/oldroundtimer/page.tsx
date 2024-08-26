'use client';
import CountdownTimer from '../../components/timer2';

const Initial = () => {
    return (
        <div className="w-screen h-screen bg-gradient-to-b from-black via-tertiary to-black text-white flex flex-col items-center justify-center p-4 sm:p-1 md:p-1">
            <h1 className="lg:mt-10 text-center text-4xl font-bold font-bruno md:text-6xl mb-8">
                Initial Round
            </h1>
            <p className="text-center max-w-lg text-base sm:text-lg font-des tracking-wider mt-5 mb-10">
                Step into the arena for a 6-hour online competitive programming hackathon on HackerRank. Prove your mettle against the fiercest coders—only the top 10 will advance to the ultimate final of ReidXtreme 3.0. <br></br>
                <span className='text-yg'>
                    Are you ready to secure your spot in the Finale?
                </span>
            </p>

            <div className="flex w-screen flex-col items-center bg-transparent p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
                <h2 className="text-lg sm:text-xl font-des font-semibold mb-4 sm:mb-6 tracking-widest">Initial Round Close In</h2>
                <CountdownTimer targetDate="2024-08-24T16:00:15" />
            </div>
        </div>
    );
}

export default Initial;
