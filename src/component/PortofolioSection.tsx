"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const portfolios = [
  "/img/portofolio/1.jpg",
  "/img/portofolio/2.jpg",
  "/img/portofolio/3.jpg",
  "/img/portofolio/4.jpg",
  "/img/portofolio/5.jpg",
  "/img/portofolio/1.jpg",
  "/img/portofolio/2.jpg",
  "/img/portofolio/3.jpg",
];

export default function PortfolioSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? portfolios.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === portfolios.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm text-slate-500">
            Portofolio Jasa Pembuatan Website
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900">
            Lahir dari Tangan Kreatif
            <br />
            dan Berpengalaman
          </h2>
        </div>

        {/* Portfolio Slider */}
        <div className="relative mx-auto mt-14 max-w-6xl">
            <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg hover:bg-cyan-600"
            >
            <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg hover:bg-cyan-600"
            >
            <FontAwesomeIcon icon={faChevronRight} />
            </button>

          <div className="grid gap-6 px-10 md:grid-cols-4">
            {portfolios.map((image, index) => (
              <div
                key={index}
                className={`
                  overflow-hidden rounded-2xl
                  ${
                    index === 0
                      ? ""
                      : ""
                  }
                  p-3
                `}
              >
                <div className="overflow-hidden rounded-xl bg-white">
                  <Image
                    src={image}
                    alt="Portfolio"
                    width={700}
                    height={300}
                    className="h-[160px] w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}