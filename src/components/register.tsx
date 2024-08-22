import CountdownTimer from '../components/timer';

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-tertiary to-black text-white flex flex-col items-center mt-1 lg:mt-20 justify-center p-4 sm:p-1 md:p-1">
            <h1 className="text-center text-4xl font-bold font-bruno md:text-6xl mb-8">
                Register
            </h1>
            <p className="text-center max-w-lg text-base sm:text-lg font-des tracking-wider mt-5 mb-10">
                Join ReidXtreme 3.0, the premier hackathon for competitive programming. Challenge yourself in two dynamic rounds and elevate your skills. Go head-to-head with top competitors and make your mark. Don’t wait  <a href='/register'
                    className="text-yg font-semibold">Register Now</a> for an unforgettable experience!
            </p>

            <div className="flex flex-col items-center bg-transparent p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 tracking-widest">Registration Closes In</h2>
                <CountdownTimer targetDate="2024-08-23T23:59:59" />
            </div>

            <div className="flex justify-center mt-6">
                <a href="/register" target="_blank" rel="noopener noreferrer">
                    <button type='button' className="inline-flex w-full sm:w-64 h-12 sm:h-16 animate-shimmer items-center justify-center rounded-md border border-secondary bg-[linear-gradient(110deg,#131313,45%,#062C20,55%,#131313)] bg-[length:200%_100%] px-4 sm:px-6 font-bold text-base sm:text-xl text-white tracking-widest transition-colors focus:outline-dotted focus:outline-secondary focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-green-900 font-bruno">
                        Register Now
                    </button>
                </a>
            </div>
        </div>
    );
}

export default RegisterPage;
