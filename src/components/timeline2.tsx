"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Timeline() {
    return (
        <section className={"pt-40"} id={"timeline"}>
            <div className="flex flex-col items-center pt-5 font-bruno tracking-widest">
                <h2 className="mt-5 text-center text-5xl font-bold  md:text-6xl">Timeline</h2>
            </div>
            <div className="w-full flex items-center justify-center pt-10 font-des tracking-wider">
                <div className="container-fluid">
                    <div className="row example-centered">
                        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                            <ul className="timeline timeline-centered">
                                <li className="timeline-item">
                                    <div className="timeline-info line-through decoration-slice decoration-slate-300">
                                        <span>August 17, 2024</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content ">
                                        <h3 className="timeline-title line-through decoration-slice decoration-slate-300">Workshop 1 - Introduction to Competitive Programming</h3>
                                        <p>Join us for an interactive session where you'll meet the team that secured 4th place in IEEEXtreme 17. Dive into a hands-on workshop featuring beginner-level competitive programming challenges</p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info line-through decoration-slice decoration-slate-300">
                                        <span>August 18, 2024</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title line-through decoration-slice decoration-slate-300">Workshop 2 - Advanced Problem Solving
                                        </h3>
                                        <p>Engage in a hands-on session focused on solving medium to hard-level competitive programming questions. Learn to master problem-solving strategies and thinking patterns, guided by expert Sandaras Dhanujaya.</p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info line-through decoration-slice decoration-slate-300">
                                        <span>August 18, 2024</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title line-through decoration-slice decoration-slate-300">Registration Opens</h3>
                                        <p>You have 5 days to register your team for the initial round of the hackathon.</p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info line-through decoration-slice decoration-slate-300">
                                        <span>August 21, 2024</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title line-through decoration-slice decoration-slate-300">Workshop 3 - Team Dynamics & Soft Skills</h3>
                                        <p>
                                        Meet the dynamic duo, Abdullah Jasmin and Sandul Renuja, Co-Founders of ZaVolt (PVT) LTD, as they lead an insightful session on Team Dynamics and Soft Skills.
                                        </p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info line-through decoration-slice decoration-slate-300">
                                        <span>August 24, 2024</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title line-through decoration-slice decoration-slate-300">Initial Round</h3>
                                        <p>Test your skills in an 6-hour online competitive programming hackathon hosted on HackerRank. Compete for a place in the top 10 to secure your spot in the final round of ReidXtreme 3.0. </p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>TBA</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Workshop 4 & Finalists Reveal</h3>
                                        <p>TBA</p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>September 7, 2024</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Final Round</h3>
                                        <p>The top 10 teams will meet in person to compete for the grand prizes and the title Dragonslayer. This round will be held at a physical location, which will be announced soon. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
