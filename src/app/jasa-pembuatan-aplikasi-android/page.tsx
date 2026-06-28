import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export default function HeroSection() {
  return (
    
    <section className="relative overflow-hidden bg-[#c7e2ef]">
      <Navbar/>   
      <div className="container mx-auto min-h-screen px-6">

        {/* Arrow Left */}
        <button
          className="
            absolute left-6 top-1/2
            -translate-y-1/2
            h-14 w-14 rounded-full
            bg-white/70 backdrop-blur
            shadow-md
            hover:bg-white
            transition
          "
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-slate-600 text-xl"
          />
        </button>

        {/* Arrow Right */}
        <button
          className="
            absolute right-6 top-1/2
            -translate-y-1/2
            h-14 w-14 rounded-full
            bg-white/70 backdrop-blur
            shadow-md
            hover:bg-white
            transition
          "
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-slate-600 text-xl"
          />
        </button>

        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">

          {/* Text */}
          <div className="max-w-xl">
            <h1 className="text-[#08153e] font-extrabold leading-tight">
              <span className="block text-5xl lg:text-7xl">
                JASA PEMBUATAN
              </span>

              <span className="block text-5xl lg:text-7xl">
                APLIKASI TERBAIK
              </span>
            </h1>
          </div>


          {/* Images */}
          <div className="relative mt-16 lg:mt-0">

            {/* Tablet */}
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200"
              alt="tablet"
              width={700}
              height={450}
              className="
                rounded-3xl
                shadow-2xl
                object-cover
                w-[700px]
                h-[430px]
              "
            />

            {/* Phone 1 */}
            <Image
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
              alt="phone"
              width={170}
              height={320}
              className="
                absolute
                -left-10
                bottom-5
                rounded-[30px]
                shadow-xl
              "
            />

            {/* Phone 2 */}
            <Image
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500"
              alt="phone"
              width={170}
              height={320}
              className="
                absolute
                left-24
                bottom-0
                rounded-[30px]
                shadow-xl
              "
            />

            {/* Phone 3 */}
            <Image
              src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500"
              alt="phone"
              width={170}
              height={320}
              className="
                absolute
                left-56
                bottom-8
                rounded-[30px]
                shadow-xl
              "
            />

          </div>

        </div>
      </div>
      <Footer />
    </section>

    
  );
}