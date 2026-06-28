"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const clients = [
  {
    name: "Angkasa Pura II",
    logo: "/img/clients/angkasa-pura.png",
  },
  {
    name: "Coca Cola",
    logo: "/img/clients/coca-cola.png",
  },
  {
    name: "Laxmi Tailors",
    logo: "/img/clients/laxmi-tailors.png",
  },
  {
    name: "Nasari",
    logo: "/img/clients/nasari.png",
  },
  {
    name: "TaniHub",
    logo: "/img/clients/tanihub.png",
  },
  {
    name: "Pertamina",
    logo: "/img/clients/pertamina.png",
  },
  {
    name: "Telkom",
    logo: "/img/clients/telkom.png",
  },
  {
    name: "BNI",
    logo: "/img/clients/bni.png",
  },
];

export default function OurClient() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#11153D]">
            Klien Kami
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          speed={4500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.name}>
              <div className="flex h-28 items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={170}
                  height={80}
                  className="h-14 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}