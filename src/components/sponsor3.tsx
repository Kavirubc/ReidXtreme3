import Image from 'next/image';
import React from 'react';

const SponsorCard: React.FC = () => {
    return (
        <main className="flex flex-col min-h-screen lg:h-auto items-center justify-center text-center mt-32 p-10 lg:p-1 font-des">
            <h2 className="mb-14 lg:mt-32 text-center text-3xl font-bold font-bruno md:text-5xl">Our Partners</h2>
            <div className='grid grid-cols-1 lg:grid-cols-1 md:gap-14 gap-10 lg:mb-14 mb-10'>
                <div className="w-80 h-80 border border-yg rounded-xl bg-transparent flex flex-col items-center justify-between p-4 transform transition duration-700 hover:scale-105">
                    <div className="w-full h-60 flex items-center justify-center bg-transparent">
                        <Image src="/m3.png" alt="Moose Logo" width={200} height={75} className="object-contain" />
                    </div>
                    <hr className="w-full border-t border-yg" />
                    <div className="mt-5 text-des text-2xl font-bold tracking-wider text-yellow-500">
                        Gold Partner
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mb-14 mb-10'>
                <div className="w-80 h-80 border border-gray-400 rounded-xl bg-transparent flex flex-col items-center justify-between p-4  transform transition duration-700 hover:scale-105">
                    <div className="w-full h-60 flex items-center justify-center bg-transparent">
                        <Image src="/a3.png" alt="Assce Logo" width={400} height={250} className="object-contain" />
                    </div>
                    <hr className="w-full border-t border-gray-400" />
                    <div className="mt-5 text-des text-2xl font-bold tracking-wider text-gray-400">
                        Silver Partner
                    </div>
                </div>

                <div className="w-80 h-80 border border-amber-600 rounded-xl bg-transparent flex flex-col items-center justify-between p-4  transform transition duration-700 hover:scale-105">
                    <div className="w-full h-60 flex items-center justify-center bg-transparent">
                        <Image src="/w3.png" alt="WSO2 Logo" width={250} height={100} className="object-contain" />
                    </div>
                    <hr className="w-full border-t border-amber-600" />
                    <div className="mt-5 text-des text-2xl tracking-wider font-bold text-amber-600">
                        Bronze Partner
                    </div>
                </div>

                <div className="w-80 h-80 border border-white rounded-xl bg-transparent flex flex-col items-center justify-between p-4  transform transition duration-700 hover:scale-105">
                    <div className="w-full h-60 flex items-center justify-center bg-transparent">
                        <Image src="/f3.png" alt="Fonterra Logo" width={200} height={50} className="object-contain" />
                    </div>
                    <hr className="w-full border-t border-white" />
                    <div className="mt-5 text-des text-2xl tracking-wider text-white">
                        Beverage Partner
                    </div>
                </div>
                <div className="w-80 h-80 border border-white rounded-xl bg-transparent flex flex-col items-center justify-between p-4  transform transition duration-700 hover:scale-105">
                    <div className="w-full h-60 flex items-center justify-center bg-transparent">
                        <Image src="/g3.png" alt="Gift Logo" width={200} height={50} className="object-contain" />
                    </div>
                    <hr className="w-full border-t border-white" />
                    <div className="mt-5 text-des text-2xl tracking-wider text-white">
                        Gift Partner
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SponsorCard;
