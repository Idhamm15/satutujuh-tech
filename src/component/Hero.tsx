"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="bg-blue-200">
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
        
        {/* LEFT */}
        <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5">
          
          <h1
            data-aos="fade-right"
            className="my-4 text-4xl font-bold leading-tight text-darken"
          >
            <span className="text-yellow-500">Transform</span> Your Business with Technology
          </h1>

          <p
            data-aos="fade-down"
            data-aos-delay="300"
            className="text-xl mb-8"
          >
            Satutujuh is a software house and IT consulting partner that delivers innovative solutions to drive efficiency, growth, and digital transformation.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="flex flex-col md:flex-row items-center gap-5"
          >
            <a href="#"  className="bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 hover:scale-110 transition">
              Start Your Project
            </a>

            <div className="flex items-center space-x-3 hover:scale-110 transition">
              <a href="#" className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                ▶
              </a>
              <span>See Our Work</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-6/12 lg:-mt-10 relative">
          
          {/* MAIN IMAGE */}
          <img
            className="w-10/12 mx-auto 2xl:-mb-20"
            src="/img/girl.png"
            alt="hero"
          />

          {/* FLOATING - DASHBOARD CARD */}
          <div className="absolute top-20 -left-6 sm:left-10 md:left-16 lg:top-52 floating-4">
            <div className="bg-white rounded-lg shadow-md px-3 py-2 w-36">
              <p className="text-[10px] text-gray-400 leading-none">Project</p>
              <p className="text-xs font-semibold text-gray-800 leading-tight">Web App</p>
          </div>
          </div>

          {/* FLOATING - STATUS CARD (replace SVG merah) */}
          <div className="absolute top-20 right-10 sm:right-24 md:right-32 lg:top-32 lg:right-16 floating">
            <div className="bg-white rounded-lg shadow-md px-3 py-2 w-40">
              <p className="text-[10px] text-gray-400 leading-none">Status</p>
              <p className="text-xs font-semibold text-green-600 leading-tight">In Progress</p>
            </div>
          </div>

          {/* FLOATING - TECH STACK */}
          <div className="absolute bottom-14 -left-4 sm:left-2 lg:bottom-24 floating">
            <div className="bg-white rounded-lg shadow-md px-3 py-2 w-40">
              <p className="text-[10px] text-gray-400 leading-none">Stack</p>
              <p className="text-xs font-semibold text-gray-800 leading-tight">
                Next.js • Laravel
              </p>
            </div>
          </div>

          {/* FLOATING - RESULT */}
          <div className="absolute bottom-20 lg:bottom-52 -right-6 lg:right-8 floating-4">
            <div className="bg-white rounded-lg shadow-md px-3 py-2 w-36">
              <p className="text-[10px] text-gray-400 leading-none">Result</p>
              <p className="text-xs font-semibold text-blue-600 leading-tight">
                Deployed 🚀
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WAVE */}
      <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 relative">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-40"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          />
        </svg>
        <div className="bg-white w-full h-20 -mt-1"></div>
      </div>
    </div>
  );
}