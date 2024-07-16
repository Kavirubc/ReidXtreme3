'use client'

import './styles.scss'
import Image from 'next/image'
import {LegacyRef, useCallback, useEffect, useRef} from "react"


function setupCard(cardWrap: HTMLElement): void {
    if (!cardWrap) {
        return;
    }

    const card: HTMLElement | null = cardWrap.querySelector('.card');
    const cardBg: HTMLElement | null = cardWrap.querySelector('.cardBg');
    const cardInfo: HTMLElement | null = cardWrap.querySelector('.cardInfo');
    const cardTitle: HTMLElement | null = cardWrap.querySelector('.cardTitle');

    if (!card || !cardBg || !cardInfo || !cardTitle) {
        return;
    }

    cardWrap.addEventListener('mousemove', (e) => {
        let xAxis = (cardWrap.getBoundingClientRect().x / 2 - e.x) / 25;
        let yAxis = (cardWrap.getBoundingClientRect().y / 2 - e.y) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    cardWrap.addEventListener('mouseenter', (e) => {
        card.style.transition = 'none';
        cardBg.style.transform = 'translateZ(150px)';
        cardTitle.style.transform = 'translateZ(100px)';
        cardInfo.style.transform = 'translateZ(75px)';
    });

    cardWrap.addEventListener('mouseleave', (e) => {
        card.style.transition = 'all 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        cardBg.style.transform = 'translateZ(0px)';
        cardTitle.style.transform = 'translateZ(0px)';
        cardInfo.style.transform = 'translateZ(0px)';
    });
}

function Cards() {
    const ref_1: LegacyRef<HTMLDivElement> = useRef(null);
    const ref_2: LegacyRef<HTMLDivElement> = useRef(null);
    const ref_3: LegacyRef<HTMLDivElement> = useRef(null);
    const ref_4: LegacyRef<HTMLDivElement> = useRef(null);
    const ref_5: LegacyRef<HTMLDivElement> = useRef(null);
    const ref_6: LegacyRef<HTMLDivElement> = useRef(null);

    useEffect(() => {
        setupCard(ref_1.current as unknown as HTMLElement)
        setupCard(ref_2.current as unknown as HTMLElement)
        setupCard(ref_3.current as unknown as HTMLElement)
        setupCard(ref_4.current as unknown as HTMLElement)
        setupCard(ref_5.current as unknown as HTMLElement)
        setupCard(ref_6.current as unknown as HTMLElement)
    },
    [ref_1, ref_2, ref_3, ref_4, ref_5]);

    function Card(reference: LegacyRef<any>,
                  imgUrl: string,
                  title: string,
                  description: string): JSX.Element {
        return <div className="cardWrap" ref={reference}>
            <div className="card">
                <div className="cardBg">
                    <Image src={imgUrl} alt={"badge one"}
                           width={200} height={200}
                    />
                </div>
                <div className="cardInfo">
                    <h3 className="cardTitle">
                        {title}
                    </h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    }

    return (
        <div className="container">
            {
                Card(ref_1, "/badges/AnswerSeeker.webp", "Answer Seeker", "Complete 10 problems successfully")
            }
            {
                Card(ref_2, "/badges/Brawler.webp", "Brawler", "Finish Second runner's up")
            }
            {
                Card(ref_3, "/badges/DragonSlayer.webp", "Dragon Slayer", "Win ReidExtreme")
            }
            {
                Card(ref_4, "/badges/Duelist.webp", "Duelist", "Finish First runner's up")
            }
            {
                Card(ref_5, "/badges/PointHunter.webp", "Point Hunter", "Score over 1.5k points")
            }
            {
                Card(ref_6, "/badges/StarterGambit.webp", "Starter Gambit", "Venture into ReidExtreme")
            }
        </div>
    )
}

function InfoSection() {
    return (
        <div className={"info-section"}>
            <div className="section">
                <Image
                    src="/background.png"
                    alt="Background img"
                    layout='fill'
                    objectFit='cover' priority
                />
                <div className={"parallax"}>

                </div>
                <div className={"hero"}>
                    <Image
                        src="/logo.png"
                        alt="ReidExtreme Logo"
                        width={200}
                        height={200}
                        className={"logo"}
                    />
                </div>
            </div>
            <div className="section">
                <div className="fixed">
                    <Cards />
                </div>
            </div>
            <div className="section">
                <div className="p fixed">Sensing that something is seriously amiss, we took her next day to the nearby
                    nursing home for diagnosis and treatment. She was immediately referred to a neurosurgeon and after a
                    MRI scan it was confirmed that she suffered a brain stroke. The report showed certain grey patches
                    which the doctor referred to as clots have affected her memory totally. The doctor informed that the
                    memory loss is irreversible due to her old age. He, however, assured that further, damage to the
                    brain can be arrested with drugs.
                </div>
            </div>
            <div className="section">
                <div className="p fixed">That was the beginning of the slow end for my mother. As the disease got
                    worsened,
                    she forgot everything. Lost control of her body functions and finally, failed to recognize anyone
                    except my wife who used to take care of her like a mother taking care of her baby. She used to feed
                    her, change her diapers, dress her, give her bath, brush her hair, and also help her to sleep.
                </div>
            </div>
            <div className="section">
                <div className="p fixed">For my wife and me, she was like a little child. Our world revolved around her.
                    We
                    used to play with her, tease her. We even celebrated her 80th birth day with a grand cake cutting
                    ceremony attended by my wife’s friends in Kolkata. It was a moment of happiness for her as she kept
                    smiling at every one greeting her on her birth day without knowing whose birth day it was. So when
                    one of the guests greeted her with a “wish you a happy birth day”, she promptly responded by wishing
                    her the same!
                </div>
            </div>
            <div className="section">
                <div className="p fixed">It was interesting to know that even after destroying her brain cells; the
                    disease
                    could not take away the basic courtesies from her, acquired during her training as a Telephone
                    Operator long long ago. They remained entrenched in her till her last breath. She never forgot to
                    express her sincere thanks whenever we help her with little things.
                </div>
            </div>
            <div className="section">
                <div className="p fixed">The thud sound of a body hitting the ground rudely awakened us. We looked
                    around to
                    find my mother missing from her bed. In a swift motion my wife jumped from the bed and dashed out of
                    the room to find her lay flat, face down on the floor motion less. Her fore head was badly injured.
                    She was bleeding profusely from her lips due to the impact of the fall. But there was virtually no
                    reaction from her. We physically lifted her and put her on the bed. My wife gently cleansed the
                    wound and enquired whether it was hurting. She replied in affirmative. But there was no sign of pain
                    in the face. No tears in her eyes. Just plain disoriented look, devoid of any feelings and emotions.
                    The disease took away all her emotional feelings and also dried up the tear glands. Looking at her
                    state I cried silently.
                </div>
            </div>
            <div className="section">
                <div className="p fixed">Oh God! I said to myself. Is this is my mother, who used to get tears in her
                    eyes
                    even for a faint discomfort? She was emotionally so sensitive that even a stern look, would bring
                    her to tears. Such was her reputation for crying that my father used to tease her by calling her
                    “Gangadhari”. Lady wearing river Ganges on her head.
                </div>
            </div>
            <div className="section">
                <div className="p fixed">The day she passed away and as her body was being carried in a “Hearse” van
                    there
                    were unexpected showers for few minutes as if the heavens have cried for her, as she forgot to cry.
                </div>
            </div>
            <div className="section">
                <p className="fixed white">Thanks for watching</p>
            </div>
        </div>
    )
}

function RegisterButton() {
    return (
        <button>
            <span>
                Register
            </span>
        </button>
    );

}

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

            <InfoSection/>
        </main>
    );
}
