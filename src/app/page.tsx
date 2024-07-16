'use client'

import Image from "next/image"
import './styles.scss'


export default function Home() {
    return (
        <main>
            <Image
                src="/hero_bg.png"
                alt="Vercel Logo"
                layout='fill'
                objectFit='cover' priority
                className={"hero-bg"}
            />
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
