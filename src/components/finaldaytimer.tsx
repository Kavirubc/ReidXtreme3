import CountdownTimer from '../components/timer';
import { Calendar, Clock, MapPin } from 'lucide-react';

const InitialStarts = () => {
    return (
        <div className="w-screen h-screen bg-gradient-to-b from-black via-tertiary to-black text-white flex flex-col items-center justify-center p-4 sm:p-1 md:p-1">

            <div className="w-full mt-16 flex flex-col items-center bg-transparent p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
                <h1 className="lg:mt-10 text-center text-4xl font-bold font-bruno md:text-6xl mb-8">
                    Final Round
                </h1>
                <p className="text-center max-w-lg text-base sm:text-lg font-des tracking-wider mt-5">
                    The final showdown is here! Prepare for an intense battle of coding skills to determine the ultimate champion of ReidXtreme 3.0.
                </p>

                <div className="flex flex-col items-center bg-transparent p-4 sm:p-6 md:p-8 rounded-xl shadow-lg tracking-widest">
                    <h2 className="text-lg sm:text-xl font-des font-semibold mb-4 sm:mb-6 tracking-widest">Final Round Ends In</h2>
                    <CountdownTimer targetDate="2024-09-07T19:00:00" />
                </div>
            </div>
        </div>
    );
}

export default InitialStarts;
