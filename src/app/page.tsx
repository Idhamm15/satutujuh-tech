"use client";

import About from "@/component/About";
import Features from "@/component/Feature";
import Footer from "@/component/Footer";
import OurApproach from "@/component/OurApproach";
import FaqSection from "@/component/FaqSection";
import LandingHero from "@/component/LandingHero";
import PortofolioSection from "@/component/PortofolioSection";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import CTA from "@/component/CTA";
import BasePortfolio from "@/component/BasePortofolio";

export default function Home() {
  return (
    <>
      <LandingHero />
      <Features />
      <OurApproach />
      {/* <PortofolioSection /> */}
      <BasePortfolio/>
      <CTA/>
      <Footer />

      {/* BACK TO TOP */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed hover:bg-yellow-500 hover:text-white bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#01085a] shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110"
      >
        ↑
      </button>
    </>
  );
}