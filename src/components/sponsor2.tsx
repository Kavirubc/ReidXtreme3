import Image from 'next/image';

const PartnerBox = () => {
    return (
        <main className="flex flex-col max-h-screen items-center justify-center">
            <h2 className="mt-32 mb-14 text-center text-3xl font-bold font-bruno md:text-5xl">Our Partners</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-14 gap-5 font-des tracking-wider text-slate-200 font-semibold md:text-2xl">
                <div className="bg-transparent border border-yg rounded-lg w-64 h-32 md:w-128 md:h-60 shadow-lg transform transition duration-300 hover:scale-105 flex flex-col justify-center">
                    <div className="text-center">
                        <h2 className="mb-5">Silver Partner</h2>
                        <div className="flex justify-center">
                            <Image 
                                src="/a3.png" 
                                alt="A3 Logo" 
                                width={250} 
                                height={60} 
                                className="w-40 h-10 md:w-64 md:h-16"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-transparent border border-yg rounded-lg w-64 h-32 md:w-128 md:h-60 shadow-lg transform transition duration-300 hover:scale-105 flex flex-col justify-center">
                <div className="text-center">
                        <h2 className="mb-5">Bronze Partner</h2>
                        <div className="flex justify-center">
                            <Image 
                                src="/w3.png" 
                                alt="A3 Logo" 
                                width={250} 
                                height={60} 
                                className="w-40 h-16 md:w-64 md:h-24"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-transparent border border-yg rounded-lg w-64 h-32 md:w-128 md:h-64 shadow-lg transform transition duration-300 hover:scale-105 flex flex-col justify-center items-center lg:col-span-2 lg:justify-self-center">
                <div className="text-center">
                        <h2 className="mt-10 mb-5">Beverage Partner</h2>
                        <div className="flex justify-center pb-5">
                            <Image 
                                src="/f3.png" 
                                alt="A3 Logo" 
                                width={250} 
                                height={60} 
                                className="w-36 h-20 md:w-60 md:h-40 pb-3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PartnerBox;
