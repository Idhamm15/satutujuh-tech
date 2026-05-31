"use client";

import About from "@/component/About";
import Footer from "@/component/Footer";
import OurApproach from "@/component/OurApproach";
import FaqSection from "@/component/FaqSection";
import Navbar from "@/component/Navbar";
import Header from "@/component/Header";
import BasePortfolio from "@/component/BasePortofolio";
import CTA from "@/component/CTA";

export default function PortfolioPage() {
  return (
    <>
      <Navbar/>
      <Header
        badge="Services"
        title="Portofolio"
      />
      <BasePortfolio/>
      <CTA  />

      <Footer />
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