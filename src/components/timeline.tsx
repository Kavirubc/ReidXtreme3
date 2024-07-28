"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Timeline() {
  return (
      <section>
        <div className="flex flex-col items-center pt-5 font-bruno tracking-widest">
          <h2 className="mt-5 text-center text-3xl font-bold  md:text-5xl">Timeline</h2>
        </div>
        <div className="w-full flex items-center justify-center pt-10">
          <div className="container-fluid">
            <div className="row example-centered">
              <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                <ul className="timeline timeline-centered">
                  <li className="timeline-item">
                    <div className="timeline-info">
                      <span>August 21, 20124</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">Workshop 1</h3>
                      <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
                        consectetuer eget, posuere ut,
                        mauris.</p>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <div className="timeline-info">
                      <span>August 23, 2024</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">Workshop 2</h3>
                      <p>Nullam vel sem. Nullam vel sem. Integer ante arcu,
                        accumsan a, consectetuer eget, posuere ut,
                        mauris. </p>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <div className="timeline-info">
                      <span>August 24, 2024</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">Initial Round</h3>
                      <p>Nullam vel sem. Nullam vel sem. Integer ante arcu,
                        accumsan a, consectetuer eget, posuere ut,
                        mauris. </p>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <div className="timeline-info">
                      <span>August 30, 2024</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">Final Round Awareness Session</h3>
                      <p>Nullam vel sem. Nullam vel sem. Integer ante arcu,
                        accumsan a, consectetuer eget, posuere ut,
                        mauris. </p>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <div className="timeline-info">
                      <span>August 31, 2024</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">Final Round</h3>
                      <p>Nullam vel sem. Nullam vel sem. Integer ante arcu,
                        accumsan a, consectetuer eget, posuere ut,
                        mauris. </p>
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
