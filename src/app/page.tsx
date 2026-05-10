import About from "@/component/About";
import Features from "@/component/Feature";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import LandingHero from "@/component/LandingHero";
import Navbar from "@/component/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LandingHero/>
      <Features/>
      <About/>
      {/* <section className="py-10 overflow-hidden">
        <div className="flex flex-col text-center text-black max-w-screen-md mx-auto">
            <h2 className="text-4xl font-medium lg:text-7xl">
                <span
                    className="text-purple-500 font-bold"
                    style={{ fontFamily: "'Nothing You Could Do', cursive" }}
                >
                    Our
                </span>{" "}
                Client
            </h2>
        </div>

        <div className="mx-auto mt-10">
            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll gap-12">
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/html.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/css.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/js.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/React.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/angular.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/figma.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/photoshop.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/mui.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/tailwind.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/premierePro.png" alt="" />

                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/html.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/css.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/js.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/React.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/angular.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/figma.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/photoshop.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/mui.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/tailwind.png" alt="" />
                    <img className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition duration-300" src="/imgs/logos/premierePro.png" alt="" />
                </div>
            </div>
        </div>
    </section> */}
      <Footer/>
    </>
  );
}
