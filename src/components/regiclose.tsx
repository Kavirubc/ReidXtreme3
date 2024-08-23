const InitialClosed = () => {
    return (
        <div className="w-screen h-screen bg-gradient-to-b from-black via-tertiary to-black text-white flex flex-col items-center justify-center p-4 sm:p-1 md:p-1">
            <h1 className="lg:mt-10 text-center text-4xl font-bold font-bruno md:text-6xl mb-8">
                Initial Round Closed
            </h1>
            <p className="text-center max-w-lg text-base sm:text-lg font-des tracking-wider mt-5 mb-10">
                The initial round of the 6-hour online competitive programming hackathon has concluded. The top 10 coders will now advance to the ultimate final of ReidXtreme 3.0. <br></br><br></br>
                <span className='text-yg'>
                    Thank you for participating and giving your best effort!
                </span>
            </p>

            <div className="flex flex-col items-center bg-transparent p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 font-des sm:mb-6 tracking-widest">Stay Tuned for the Final Round</h2>
            </div>
        </div>
    );
}

export default InitialClosed;
