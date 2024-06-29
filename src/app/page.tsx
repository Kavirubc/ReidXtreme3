'use client'

import './styles.scss'
import Image from 'next/image'
import {useCallback, useEffect} from "react"

function Navbar() {
    const onScroll = useCallback((_: any) => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector("nav")?.classList.add("nav-scroll");
        } else {
            document.querySelector("nav")?.classList.remove("nav-scroll");
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);


    return (
        <nav>
            <Image
                src="/logo.png"
                alt="ReidExtreme Logo"
                height={50}
                width={81}
            />
            <RegisterButton/>
        </nav>
    );
}


export default function Home() {
    return (
        <main>
            <Navbar/>
            <Image
                src="/background.png"
                alt="Background img"
                layout='fill'
                objectFit='cover' priority
            />
            <div className={"parallax"}>

            </div>
            <Image
                src="/logo.png"
                alt="ReidExtreme Logo"
                width={200}
                height={200}
                className={"logo"}
            />
        </main>
    );
}
