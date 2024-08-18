import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import preloaderAnimation from '../../public/preloader.json'; 

export default function Preloader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative">
                <Lottie 
                    animationData={preloaderAnimation} 
                    loop={true} 
                    className="w-28 h-28" 
                />
            </div>
        </div>
    );
}
