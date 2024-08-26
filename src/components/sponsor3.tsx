import Image from 'next/image';
import React from 'react';

const SponsorCard: React.FC = () => {
    return (
        <main className="flex flex-col w-screen h-auto items-center justify-center text-center mt-64 lg:mt-24 p-6 lg-p-0 font-des">
            <h2 className="mb-16 text-center text-4xl font-bold font-bruno md:text-6xl">Our Partners</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-14 mb-10'>
                <a href="https://mooseclothingcompany.com/" target="_blank" rel="noopener noreferrer">
                    <div className="w-80 h-80 border border-yg rounded-xl bg-transparent flex flex-col items-center justify-between p-4 transform transition duration-700 hover:scale-105">
                        <div className="w-full h-60 flex items-center justify-center bg-transparent">
                            <Image src="/m3.png" alt="Moose Logo" width={200} height={75} className="object-contain" />
                        </div>
                        <hr className="w-full border-t border-yg" />
                        <div className="mt-5 text-des text-2xl font-bold tracking-wider text-yellow-500">
                            Gold Sponsor
                        </div>
                    </div>
                </a>

                <a href="https://www.acentura.com/" target="_blank" rel="noopener noreferrer">
                    <div className="w-80 h-80 border border-gray-400 rounded-xl bg-transparent flex flex-col items-center justify-between p-4 transform transition duration-700 hover:scale-105">
                        <div className="w-full h-60 flex items-center justify-center bg-transparent">
                            <Image src="/a3.png" alt="Moose Logo" width={400} height={250} className="object-contain" />
                        </div>
                        <hr className="w-full border-t border-gray-400" />
                        <div className="mt-5 text-des text-2xl font-bold tracking-wider text-gray-400">
                            Silver Sponsor
                        </div>
                    </div>
                </a>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-14 mb-10'>
                <a href="https://wso2.com/" target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-xs mx-auto border border-amber-600 rounded-xl bg-transparent flex flex-col items-center justify-between p-6 transform transition duration-500 hover:scale-105">
                        <div className="w-full h-40 flex items-center justify-center bg-transparent">
                            <Image src="/w3.png" alt="WSO2 Logo" width={250} height={100} className="object-contain" />
                        </div>
                        <hr className="w-full border-t border-amber-600" />
                        <div className="mt-4 text-des text-2xl tracking-wider font-bold text-amber-600">
                            Bronze Sponsor
                        </div>
                    </div>
                </a>

                <a href="https://www.xeynergy.com/" target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-xs mx-auto border border-amber-600 rounded-xl bg-transparent flex flex-col items-center justify-between p-6 transform transition duration-500 hover:scale-105">
                        <div className="w-full h-40 flex items-center justify-center bg-transparent">
                            <Image src="/b2.png" alt="Xeynergy" width={300} height={150} className="object-contain" />
                        </div>
                        <hr className="w-full border-t border-amber-600" />
                        <div className="mt-4 text-des text-2xl tracking-wider font-bold text-amber-600">
                            Bronze Sponsor
                        </div>
                    </div>
                </a>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-14'>
                <a href="https://zavolt.com/" target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-xs mx-auto border border-purple-600 rounded-xl bg-transparent flex flex-col items-center justify-between p-6 transform transition duration-500 hover:scale-105">
                        <div className="w-full h-40 flex items-center justify-center bg-transparent">
                            <Image src="/z3.png" alt="Zavolt Logo" width={300} height={100} className="object-contain" />
                        </div>
                        <hr className="w-full border-t border-purple-600" />
                        <div className="mt-4 text-des font-bold text-2xl tracking-wider text-purple-600">
                            Associate Sponsor
                        </div>
                    </div>
                </a>

                <a href="https://plc.pearson.com/en-GB" target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-xs mx-auto border border-white rounded-xl bg-transparent flex flex-col items-center justify-between p-6 transform transition duration-500 hover:scale-105">
                        <div className="w-full h-40 flex items-center justify-center bg-transparent">
                            <Image src="/pe3.png" alt="Pearson Logo" width={300} height={100} className="object-contain" />
                        </div>
                        <hr className="w-full border-t border-white" />
                        <div className="mt-4 text-des text-2xl tracking-wider text-white">
                            Venue Partner
                        </div>
                    </div>
                </a>

                <a href="https://www.fonterra.com/lk/en.html" target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-xs mx-auto border border-white rounded-xl bg-transparent flex flex-col items-center justify-between p-6 transform transition duration-500 hover:scale-105">
                        <div className="w-full h-40 flex items-center justify-center bg-transparent">
                            <Image src="/f3.png" alt="Fonterra Logo" width={200} height={50} className="object-contain" />
                        </div>
                        <hr className="w-full border-t border-white" />
                        <div className="mt-4 text-des text-2xl tracking-wider text-white">
                            Beverage Partner
                        </div>
                    </div>
                </a>

                <a href="https://www.coca-cola.com/lk/en" target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-xs mx-auto border border-white rounded-xl bg-transparent flex flex-col items-center justify-between p-6 transform transition duration-500 hover:scale-105">
                        <div className="w-full h-40 flex items-center justify-center bg-transparent">
                            <Image src="/c3.png" alt="Coca Cola Logo" width={350} height={150} className="object-contain" />
                        </div>
                        <hr className="w-full border-t border-white" />
                        <div className="mt-4 text-des text-2xl tracking-wider text-white">
                            Beverage Partner
                        </div>
                    </div>
                </a>

                <a href="https://linktr.ee/webcodoo" target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-xs mx-auto border border-white rounded-xl bg-transparent flex flex-col items-center justify-between p-6 transform transition duration-500 hover:scale-105">
                        <div className="w-full h-40 flex items-center justify-center bg-transparent">
                            <Image src="/g3.png" alt="Gift Logo" width={300} height={150} className="object-contain" />
                        </div>
                        <hr className="w-full border-t border-white" />
                        <div className="mt-4 text-des text-2xl tracking-wider text-white">
                            Gift Partner
                        </div>
                    </div>
                </a>

                <a href="https://blog.hackathons.lk/" target="_blank" rel="noopener noreferrer">
                    <div className="w-full max-w-xs mx-auto border border-white rounded-xl bg-transparent flex flex-col items-center justify-between p-6 transform transition duration-500 hover:scale-105">
                        <div className="w-full h-40 flex items-center justify-center bg-transparent">
                            <Image src="/h4.png" alt="Hackathons Logo" width={350} height={100} className="object-contain" />
                        </div>
                        <hr className="w-full border-t border-white" />
                        <div className="mt-4 text-des text-2xl tracking-wider text-white">
                            Digital Media Partner
                        </div>
                    </div>
                </a>
            </div>
        </main>
    );
}

export default SponsorCard;
